(function($) {
 
    'use strict';

    $.fn.scheduleTable = function(data) {
        var scheduleText = {
            2: 'Thứ hai',
            3: 'Thứ ba',
            4: 'Thứ tư',
            5: 'Thứ năm',
            6: 'Thứ sáu',
            7: 'Thứ bảy',
            8: 'Chủ Nhật'
        };

        if (typeof data === 'undefined') {
            data = {};
        }

        var buildTable = function() {

            var scheduleTableHTML = '';
            scheduleTableHTML += '<div class="tableHead">';
            scheduleTableHTML += '<span class="scheduleSelectAll"></span>';
            for (var i = 0; i < 24; i++) {
                scheduleTableHTML += '<a class="cell">' + i + 'h</a>';
            }
            scheduleTableHTML += '</div>';

            $.each(scheduleText, function(key, value){
                scheduleTableHTML += '<div data-day="' + key + '">';
                for (var j = 0; j < 25; j++) {
                    if (j === 0) {
                        scheduleTableHTML += '<label>' + value + '</label>';
                    } else {
                        scheduleTableHTML += '<a class="cell"></a>';
                    }
                }
                scheduleTableHTML += '</div>';
            });

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

                return false;
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
			
			// Nếu chọn giờ x trong tất cả các ngày thì chọn nguyên cột giờ x
			var selectColumn = function() {
				for (var i = 1; i <= 24; i++) {
					if (self.find('a:nth-of-type(24n + ' + i + ')').filter(function(index) {
						return ($(this).attr('class').match(/selected/) !== null && index > 0);
					}).length === 7) {
						scheduleTableCells.eq(i - 1).addClass('_selected');
					}
				}
			}

            self.html(buildTable());

            var scheduleTableCells = self.find('.cell');

            $.each(data, function(day, values){
                $.each(values, function(i, v){
                    scheduleTableCells.eq((day - 1) * 24 + v).addClass('selected')
                });
            });

            var scheduleStartPoint = {}, scheduleIsSelected, scheduleIsEvery;
            
            self.find('.scheduleSelectAll').on('click', function(){
                if ($(this).hasClass('allSelected')) {
                    scheduleTableCells.removeClass('selected');
                    $(this).removeClass('allSelected');
                } else {
                    scheduleTableCells.addClass('selected');
                    $(this).addClass('allSelected');
                }
            });
            
            $(document).on('mouseup', function(){
                if (typeof scheduleStartPoint.x) {
                    // Nếu chọn giờ x trong tất cả các ngày thì chọn nguyên cột giờ x
                    selectColumn();
                    
                    scheduleTableCells.filter(function(){return $(this).hasClass('_selected')}).addClass('selected');
                    scheduleTableCells.filter(function(){return $(this).hasClass('_unselect')}).removeClass('selected');
                    scheduleTableCells.removeClass('_selected _unselect');
                    
                    scheduleStartPoint = {};
                }
            });

            scheduleTableCells.on({
                'mousedown': function(e){
                    if (isClick(e)) {
                        var slf = $(e.target);

                        scheduleStartPoint = getPosition(e);

                        scheduleIsEvery = (scheduleStartPoint.y === 1) ? true : false;

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
                            if (fromY === 1) {
                                fromY = 2;
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
                                scheduleTableCells.eq(i - 1).addClass('_unselect');
                            }
                        }
                    }
                },
                'mouseup': function(e){
                    if (isClick(e) && typeof scheduleStartPoint.x !== 'undefined') {
                        
                        var position = getPosition(e);

                        if (scheduleIsEvery) {
                            var cells = self.find('a:nth-of-type(24n + ' + (position.x) + ')');

                            if (scheduleIsSelected) {
                                cells.addClass('selected');
                            } else {
                                cells.removeClass('selected');
                            }
                        } else {
                            if (scheduleIsSelected) {
								// Nếu chọn giờ x trong tất cả các ngày thì chọn nguyên cột giờ x
								selectColumn();
                            } else {
                                scheduleTableCells.eq(position.x - 1).addClass('_unselect');
                            }
                        }

                        scheduleTableCells.siblings('._selected').removeClass('_selected').addClass('selected');
                        scheduleTableCells.siblings('._unselect').removeClass('_unselect selected');
                        
                        scheduleStartPoint = {};
                    }
                }
            });

            return this;
        });
 
    };
 
}(jQuery));