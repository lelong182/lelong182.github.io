var scheduleTable = (function () {
    function scheduleTable(selector, data) {
        this.scheduleStartPoint = {
            x: 0,
            y: 0
        };
        this.scheduleIsSelected = false;
        this.scheduleIsEvery = false;
        this.scheduleText = {
            2: 'Thứ hai',
            3: 'Thứ ba',
            4: 'Thứ tư',
            5: 'Thứ năm',
            6: 'Thứ sáu',
            7: 'Thứ bảy',
            8: 'Chủ Nhật'
        };
        this.obj = (typeof selector === 'string') ? $(selector) : selector;
        this.data = (typeof data === 'undefined') ? {} : data;
        this.render();
    }
    scheduleTable.prototype.buildTable = function () {
        var scheduleTableHTML = '';
        scheduleTableHTML += '<div class="tableHead">';
        scheduleTableHTML += '<span class="scheduleSelectAll">All</span>';
        for (var i = 0; i < 24; i++) {
            scheduleTableHTML += '<a class="cell">' + i + 'h</a>';
        }
        scheduleTableHTML += '</div>';
        $.each(this.scheduleText, function (key, value) {
            scheduleTableHTML += '<div data-day="' + key + '">';
            for (var j = 0; j < 25; j++) {
                if (j === 0) {
                    scheduleTableHTML += '<label>' + value + '</label>';
                }
                else {
                    scheduleTableHTML += '<a class="cell"></a>';
                }
            }
            scheduleTableHTML += '</div>';
        });
        return scheduleTableHTML;
    };
    ;
    scheduleTable.prototype.isClick = function (e) {
        return (e.which === 1 || e.which === 2);
    };
    scheduleTable.prototype.getData = function () {
        var cells, key, selects;
        var data = {};
        $.each(this.obj.find('[data-day]'), function (i, row) {
            selects = $(row).children('td.selected');
            if (selects.length > 0) {
                key = $(this).data('day');
                data[key] = [];
                cells = $(row).children('td');
                $.each(selects, function (j, cell) {
                    data[key].push(cells.index(cell) + 1);
                });
            }
        });
        return data;
    };
    // Nếu chọn giờ x trong tất cả các ngày thì chọn nguyên cột giờ x
    scheduleTable.prototype.selectColumn = function () {
        var slf = this.obj;
        for (var i = 1; i <= 24; i++) {
            if (slf.find('a:nth-of-type(24n + ' + i + ')').filter(function (index) {
                return ($(this).attr('class').match(/selected/) !== null && index > 0);
            }).length === 7) {
                this.scheduleTableCells.eq(i - 1).addClass('_selected');
            }
        }
    };
    scheduleTable.prototype.getPosition = function (e) {
        var idx = this.scheduleTableCells.index($(e.target));
        var col = (idx + 1) % 24;
        if (col === 0) {
            col = 24;
        }
        var row = Math.ceil((idx + 1) / 24);
        return {
            x: col,
            y: row
        };
    };
    scheduleTable.prototype.render = function () {
        var slf = this.obj;
        var data = this.data;
        var that = this;
        slf.html(this.buildTable());
        this.scheduleTableCells = slf.find('.cell');
        $.each(data, function (day, values) {
            $.each(values, function (i, v) {
                this.scheduleTableCells.eq((day - 1) * 24 + v).addClass('selected');
            });
        });
        slf.find('.scheduleSelectAll').on('click', function () {
            if ($(this).hasClass('allSelected')) {
                this.scheduleTableCells.removeClass('selected');
                $(this).removeClass('allSelected');
            }
            else {
                this.scheduleTableCells.addClass('selected');
                $(this).addClass('allSelected');
            }
        });
        $(document).on('mouseup', function () {
            if (that.scheduleStartPoint.x > 0) {
                // Nếu chọn giờ x trong tất cả các ngày thì chọn nguyên cột giờ x
                that.selectColumn();
                that.scheduleTableCells.filter(function () { return $(this).hasClass('_selected'); }).addClass('selected');
                that.scheduleTableCells.filter(function () { return $(this).hasClass('_unselect'); }).removeClass('selected');
                that.scheduleTableCells.removeClass('_selected _unselect');
                this.scheduleStartPoint = {
                    x: 0,
                    y: 0
                };
            }
        });
        this.scheduleTableCells.on({
            'mousedown': function (e) {
                if (that.isClick(e)) {
                    var slf = $(e.target);
                    that.scheduleStartPoint = that.getPosition(e);
                    that.scheduleIsEvery = (that.scheduleStartPoint.y === 1) ? true : false;
                    if (slf.hasClass('selected')) {
                        slf.removeClass('selected');
                        that.scheduleIsSelected = false;
                    }
                    else {
                        slf.addClass('selected');
                        that.scheduleIsSelected = true;
                    }
                }
            },
            'mouseover': function (e) {
                if (that.isClick(e) && typeof that.scheduleStartPoint.x !== 'undefined') {
                    var position = that.getPosition(e);
                    var distanceX = (position.x - that.scheduleStartPoint.x);
                    var distanceY = (position.y - that.scheduleStartPoint.y);
                    var fromX, fromY, toX, toY;
                    fromX = distanceX >= 0 ? that.scheduleStartPoint.x : that.scheduleStartPoint.x + distanceX;
                    fromY = distanceY >= 0 ? that.scheduleStartPoint.y : that.scheduleStartPoint.y + distanceY;
                    toX = fromX + Math.abs(distanceX);
                    toY = fromY + Math.abs(distanceY);
                    that.scheduleTableCells.removeClass('_selected _unselect');
                    if (that.scheduleIsEvery) {
                        fromY = 1;
                        toY = 8;
                    }
                    else {
                        if (fromY === 1) {
                            fromY = 2;
                        }
                    }
                    for (var i = fromX; i <= toX; i++) {
                        for (var j = fromY; j <= toY; j++) {
                            var el = that.scheduleTableCells.eq(((j - 1) * 24) + i - 1);
                            if (that.scheduleIsSelected) {
                                el.addClass('_selected');
                            }
                            else {
                                el.addClass('_unselect');
                            }
                        }
                        if (that.scheduleIsSelected === false) {
                            that.scheduleTableCells.eq(i - 1).addClass('_unselect');
                        }
                    }
                }
            },
            'mouseup': function (e) {
                if (that.isClick(e) && typeof that.scheduleStartPoint.x !== 'undefined') {
                    var position = that.getPosition(e);
                    if (that.scheduleIsEvery) {
                        var cells = slf.find('a:nth-of-type(24n + ' + (position.x) + ')');
                        if (that.scheduleIsSelected) {
                            cells.addClass('selected');
                        }
                        else {
                            cells.removeClass('selected');
                        }
                    }
                    else {
                        if (that.scheduleIsSelected) {
                            // Nếu chọn giờ x trong tất cả các ngày thì chọn nguyên cột giờ x
                            that.selectColumn();
                        }
                        else {
                            that.scheduleTableCells.eq(position.x - 1).addClass('_unselect');
                        }
                    }
                    that.scheduleTableCells.siblings('._selected').removeClass('_selected').addClass('selected');
                    that.scheduleTableCells.siblings('._unselect').removeClass('_unselect selected');
                    that.scheduleStartPoint = {
                        x: 0,
                        y: 0
                    };
                }
            }
        });
    };
    return scheduleTable;
}());
