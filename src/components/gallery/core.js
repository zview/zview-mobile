// default options
const DEFAULT_OPTIONS = {
  itemClass: '.gallery-item',
  spacewidth: 5,
  direction: 'vertical', //垂直
  threshold: 30,
  duration: 250,
  transitionEnd: noop
};

// utilities
const extend = (target, source) => {
  for (var key in source) {
    target[key] = source[key]
  }
  return target
};

function noop() {}
function execFn(fn) { setTimeout(fn || noop, 0)}

function Swiper(container, swiperOptions) {
  let options = extend(DEFAULT_OPTIONS, swiperOptions)

  let offset = 0;
  let maxoffset = 0;

  let spacewidth = options.spacewidth;
  let itemClass = options.itemClass;
  console.log('option space', spacewidth, 'class', itemClass);

  let width = container.getBoundingClientRect().width || container.offsetWidth;
  let height = container.getBoundingClientRect().height || container.offsetHeight;
  console.log('container width', width, 'height', height);

  // Setup
  function setup() {

    let items = container.querySelectorAll(itemClass);
    let count = items.length;

    let item = items[0];
    let item_width = item.offsetWidth;
    let item_height = item.offsetHeight;
    console.log('item width', item_width, 'height', item_height);

    // reset container's width and height
    var w = width;
    var h = (item_height + Number(spacewidth)) * count;
    maxoffset = h - height;

    //最小调整为容器高度
    if(h<height) {
      h = height;
    }

    if (options.direction === 'horizontal') { //水平
      w = (item_width + Number(spacewidth)) * count;
      h = height;
      maxoffset = w - width;

      //最小调整为容器宽度
      if(w<width) {
        w = width;
      }
    }

    // console.log('setup', count, w, h, maxoffset);
    container.style.width = w + 'px';
    container.style.height = h + 'px';

    // set width and height for every single swipe item
    let pos = count
    while (pos--) {
      let itemx = items[pos];

      if (options.direction === 'horizontal') { //水平
        itemx.style.marginRight = spacewidth + 'px';
      }
      else {
        itemx.style.marginBottom = spacewidth + 'px';
      }
    }
  }

  // Events

  // init varialbles

  let start = {}
  let move = {}
  let end = {}

  const events = {
    start: function (e) {
      let touch = e.changedTouches[0];
      start.x = touch.pageX;
      start.y = touch.pageY;
      start.time = +new Date();

      // console.log('start', start.x, start.y);
      let style = container.style;
      style.webkitTransition =
        style.transition = 'none';
    },

    move: function (e) {
      // ensure swiping with one touch and not pinching
      // if ( event.touches.length > 1 || event.scale && event.scale !== 1) return

      let touch = e.changedTouches[0];
      move.x = touch.pageX;
      move.y = touch.pageY;

      let dist = move.y - start.y;
      let transform = 'translate3d(0, ' + (dist - offset) + 'px, 0)';

      if (options.direction == 'horizontal') { //水平
        dist = move.x - start.x;
        transform = 'translate3d(' + (dist - offset) + 'px, 0, 0)';
      }

      // console.log('move', dist, offset, maxoffset);

      let style = container.style;
      style.webkitTransform =
        style.transfrom = transform;

      e.preventDefault();
    },

    end: function (e) {
      let touch = e.changedTouches[0];
      end.x = touch.pageX;
      end.y = touch.pageY;

      let dist = end.y - start.y;
      if (options.direction == 'horizontal') { //水平
        dist = end.x - start.x;
      }

      let transform = 'translate3d(0, -' + (dist - offset) + 'px, 0)';
      if (options.direction == 'horizontal') {//水平
        transform = 'translate3d(-' + (dist - offset) + 'px, 0, 0)';
      }

      let duration = options.duration + 'ms';
      // console.log('end', dist, offset, maxoffset, transform);

      //门限
      if (dist > options.threshold) {
        e.preventDefault()
      } else if (dist < -options.threshold) {
        e.preventDefault()
      }

      let overright = false;
      let overleft = false;
      if (options.direction == 'horizontal') {//水平
        overright = (offset - dist) >= maxoffset;
        console.log('overright', overright);
        if(overright) {
          transform = 'translate3d(-' + (maxoffset) + 'px, 0, 0)';
        }

        overleft = (dist>0 && offset==0);
        console.log('overleft', overleft);
        if(overleft) {
          transform = 'translate3d(-' + (0) + 'px, 0, 0)';
        }
      }

      let overbottom = false;
      let overtop = false;
      if (options.direction == 'vertical') {//垂直 TODO
        overbottom = (offset - dist) >= maxoffset;
        console.log('overbottom', overbottom);
        if(overbottom) {
          transform = 'translate3d(0, -' + maxoffset + 'px, 0)';
        }

        overtop = (dist>0 && offset==0);
        console.log('overtop', overtop);
        if(overtop) {
          transform = 'translate3d(0, -' + 0 + 'px, 0)';
        }
      }


      let style = container.style;
      style.webkitTransition =
        style.transition = duration;

      style.webkitTransform =
        style.transform = transform;


      if(overright) {
        offset = maxoffset;
      }
      if(overleft) {
        offset = 0;
      }
      else {
        offset = offset - dist;
      }
    },

    transitionEnd: function (e) {
      e.preventDefault();
    }
  };

  function resize() {
    execFn(setup)
  }

  // bind events
  function bind() {
    container.addEventListener('touchstart', events.start);
    container.addEventListener('touchmove', events.move);
    container.addEventListener('touchend', events.end);
    container.addEventListener('transitionEnd', noop);
    container.addEventListener('webkitTransitionEnd', noop); //events.transitionEnd
    container.addEventListener('resize', resize);
  }

  function unbind() {
    container.removeEventListener('touchstart', events.start);
    container.removeEventListener('touchmove', events.move);
    container.removeEventListener('touchend', events.end);
    container.removeEventListener('transitionEnd', noop);
    container.removeEventListener('webkitTransitionEnd', noop); //events.transitionEnd
    container.removeEventListener('resize', resize);
  }

  window.addEventListener('resize', resize);

  setup();
  bind();


  // Publish APIs

  function noTransition() {
    let style = container.style
    style.webkitTransition =
      style.transition = 'none'
  }

  return {
    resize: setup,

    destroy: function () {
      unbind()
      window.removeEventListener('resize', resize)
    },

  }

}

export default Swiper
