// 自制PC全屏滚动插件
function wcScroll(obj) {
    var h, w;
    var item = document.querySelectorAll('.wcitem');
    var index = item.length;
    var flag = true;
    var speed = obj.speed || 800; //下滑动画速度
    var box = document.querySelector('.wc-view');
    var pos = 1; //初始为1；

    //初始化的方法
    function init() {
        w = window.innerWidth;
        h = window.innerHeight;

        box.style.height = h * index + 'px';
        var i = 0;
        for (i; i < index; i++) {
            item[i].style.height = h + 'px';
            item[i].style.width = w + 'px';
        }
        console.log(h)
    }
    init()

    // 屏幕滚动
    var scrollFunc = function(e) {
            if (flag) {
                flag = false;
                setTimeout(function() {
                    flag = true;
                }, 1000)
                e = e || window.event;
                if (e.wheelDelta) {
                    if (e.wheelDelta == 120) {
                        pos--;
                    } else {
                        pos++;
                    }
                } else if (e.detail) {
                    if (e.detail == -3) {
                        pos--;
                    } else {
                        pos++;
                    }
                }
                if (pos < 1) {
                    pos = 1;
                    return false;
                } else if (pos > index) {
                    pos = index;
                    return false;
                }
                box.style.top = -pos * h + h + 'px';
            }
        }
        // 绑定滚动事件
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
    window.onmousewheel = document.onmousewheel = scrollFunc;
    window.onresize = init;
}

wcScroll({})