
define(["jquery"], function () {
    class TabSwitch {
        constructor(obj) {
            this.cur_index = 0;
            this.init(obj);
        }
        init(obj) {
            let _this = this;
            this.$imgUl = $(obj.imgUl);
            this.aLi = this.$imgUl.children("li");
            let oLeft = $(obj.sLeft).on("click", function () {
                _this.cur_index = _this.cur_index == 0 ? _this.cur_index : --_this.cur_index;
                _this.move(obj.every_page_count);
            });
            let oRight = $(obj.sRight).on("click", function () {
                var page = Math.ceil(_this.aLi.length / obj.every_page_count);
                _this.cur_index = _this.cur_index == page - 1 ? _this.cur_index : ++_this.cur_index;
                _this.move(obj.every_page_count);
            });
        }
        move() {

            if (this.cur_index == 0) {
                this.$imgUl.animate({
                    left: 0
                })
            } else {
                this.$imgUl.animate({
                    left: -(this.cur_index) * this.aLi[0].offsetWidth * obj.every_page_count
                })
            }
        }
    }
    return new TabSwitch(obj);

})
    





