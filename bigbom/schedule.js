(function($) {
 
 	'use strict';

	$.fn.scheduleTable = function(data) {
		var scheduleText = {
			2: 'Thứ 2',
			3: 'Thứ 3',
			4: 'Thứ 4',
			5: 'Thứ 5',
			6: 'Thứ 6',
			7: 'Thứ 7',
			'CN': 'CN',
			'all': 'Hàng ngày',
		};

		if (typeof data === 'undefined') {
			data = {};
		}

		var buildTable = function() {

			var scheduleTableHTML = '';
			scheduleTableHTML = '<table class="table table-bordered">';
			scheduleTableHTML += '<tr>';
			scheduleTableHTML += '<th></th>';
			for (var i = 0; i < 8; i++) {
				scheduleTableHTML += '<th colspan="3"><span>' + (i * 3) + 'h</span></th>';
			}
			scheduleTableHTML += '</tr>';

			$.each(scheduleText, function(key, value){
				scheduleTableHTML += '<tr data-day="' + key + '">';
				for (var j = 0; j < 25; j++) {
					if (j === 0) {
						scheduleTableHTML += '<th>' + value + '</th>';
					} else {
						scheduleTableHTML += '<td class="cell"></td>';
					}
				}
				scheduleTableHTML += '</tr>';
			});
			scheduleTableHTML += '</table>';

			return scheduleTableHTML;
		};

		var isClick = function(e) {
			return (e.which === 1 || e.which === 2);
		}


	    return this.each(function() {

	    	var self = $(this);

	    	if (data === 'get') {

	    		var cells, key, selects;
	    		data = {};

	    		$.each(self.find('[data-day]'), function(i,row){
	    			selects = $(row).children('td.selected');
	    			if (selects.length > 0) {
		    			key = $(this).data('day');
	    				data[key] = [];
		    			cells = $(row).children('td');
		    			$.each(selects, function(j, cell){
		    				data[key].push(cells.index(cell) + 1);
		    			});
	    			}
	    		});

	    		return data;
	    	}

			var getPosition = function(event) {
				var idx = scheduleTableCells.index($(event.target));
				var col = (idx + 1) % 24;
				if (col === 0) {
					col = 24;
				}
				var row = Math.ceil((idx + 1) / 24);

				return {
					x: col,
					y: row
				};
			}

			self.html(buildTable());

			var scheduleTableCells = self.find('.cell');
			var row;

			$.each(data, function(day, values){
				if (day === 'CN') {
					row = 7;
				} else if (day === 'all') {
					row = 8;
				} else {
					row = day - 1;
				}
				$.each(values, function(i, v){
					scheduleTableCells.eq((row - 1) * 24 + v - 1).addClass('selected')
				});
			});

			var scheduleStartPoint = {}, scheduleIsSelected, scheduleIsEvery;

			scheduleTableCells.on({
				'mousedown': function(e){
					if (isClick(e)) {
						var slf = $(e.target);

						scheduleStartPoint = getPosition(e);

						scheduleIsEvery = (scheduleStartPoint.y === 8) ? true : false;

						if (slf.hasClass('selected')) {
							slf.removeClass('selected');
							scheduleIsSelected = false;
						} else {
							slf.addClass('selected');
							scheduleIsSelected = true;
						}
					}
				},
				'mouseover': function(e){
					if (isClick(e) && typeof scheduleStartPoint.x !== 'undefined') {

						var position = getPosition(e);
						var distanceX = (position.x - scheduleStartPoint.x);
						var distanceY = (position.y - scheduleStartPoint.y);

						var fromX, fromY, toX, toY;
						fromX = distanceX >= 0 ? scheduleStartPoint.x : scheduleStartPoint.x + distanceX;
						fromY = distanceY >= 0 ? scheduleStartPoint.y : scheduleStartPoint.y + distanceY;
						toX = fromX + Math.abs(distanceX);
						toY = fromY + Math.abs(distanceY);

						scheduleTableCells.removeClass('_selected _unselect');

						if (scheduleIsEvery) {
							fromY = 1;
							toY = 8;
						} else {
							if (toY > 7) {
								toY = 7;
							}
						}
						
						for (var i = fromX; i <= toX; i++) {
							for (var j = fromY; j <= toY; j++) {
								var el = scheduleTableCells.eq(((j - 1) * 24) + i - 1);
								if (scheduleIsSelected) {
									el.addClass('_selected');
								} else {
									el.addClass('_unselect');
								}
							}

							if (scheduleIsSelected === false) {
								scheduleTableCells.eq((7 * 24) + i - 1).addClass('_unselect');
							}
						}
					}
				},
				'mouseup': function(e){
					if (isClick(e) && typeof scheduleStartPoint.x !== 'undefined') {
						scheduleStartPoint = {};

						var position = getPosition(e);

						if (scheduleIsEvery) {
							var cells = self.find('td:nth-of-type(24n + ' + position.x + ')');

							if (scheduleIsSelected) {
								cells.addClass('selected');
							} else {
								cells.removeClass('selected');
							}
						} else {
							if (scheduleIsSelected) {
								var isSelectAll;
								for (var i = 1; i <= 24; i++) {
									isSelectAll = self.find('td:nth-of-type(24n + ' + i + ')').filter(function(index) {
										return ($(this).attr('class').match(/selected/) !== null && index < 7);
									}).length === 7;
									if (isSelectAll) {
										scheduleTableCells.eq((7 * 24) + i - 1).addClass('_selected');
									}
								}
							} else {
								scheduleTableCells.eq((7 * 24) + position.x - 1).addClass('_unselect');
							}
						}

						scheduleTableCells.siblings('._selected').removeClass('_selected').addClass('selected');
						scheduleTableCells.siblings('._unselect').removeClass('_unselect selected');
					}
				}
			});

			return this;
    	});
 
	};
 
}(jQuery));