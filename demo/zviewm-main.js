import Vue from 'vue';
import VueRouter from 'vue-router';
import zviewm from 'zview-mobile';

Vue.use(VueRouter);
Vue.use(zviewm);

import App from './zviewm-app.vue';

import Index from './components/Index.vue';
import Home from './components/Home.vue';
import Button from './components/Button.vue';
import MdButton from './components/MdButton.vue';
import Input from './components/Input.vue';
import InputDefault from './components/InputDefault.vue';
import InputFloatingLabel from './components/InputFloatingLabel.vue';
import Search from './components/Search.vue';
import Radio from './components/Radio.vue';
import Checkbox from './components/Checkbox.vue';
import Toggle from './components/Toggle.vue';
import RangeSlider from './components/RangeSlider.vue';
import Badge from './components/Badge.vue';
import Dialog from './components/Dialog.vue';

// Layout
import Header from './components/Header.vue';
import List from './components/List.vue';
import Cells from './components/Cells.vue';
import Tabs from './components/Tabs.vue';
import ButtonBar from './components/ButtonBar.vue';
import Scalable from './components/Scalable.vue';

// Advanced
import Swiper from './components/Swiper.vue';
import SwiperDefault from './components/SwiperDefault.vue';
import SwiperVertical from './components/SwiperVertical.vue';
import VSwipe from './components/VSwipe.vue';
import Scroll from './components/Scroll.vue';
import VueScroller from './components/VueScroller.vue';
import Cascade from './components/Cascade.vue';
import Accordion from './components/Accordion.vue';
import Datepicker from './components/Datepicker.vue';
import Popup from './components/Popup.vue';
import ActionSheet from './components/ActionSheet.vue';
import Tabbar from './components/TabBar.vue';
import TabbarHome from './components/tabbar/Home.vue';
import TabbarDiscount from './components/tabbar/Discount.vue';
import TabbarCart from './components/tabbar/Cart.vue';
import TabbarUser from './components/tabbar/User.vue';
import PageFromTabbar from './components/tabbar/PageFromTabbar.vue';
import TabbarWithoutRoutes from './components/TabBarWithoutRoutes.vue';
import Modal from './components/Modal.vue';

// Extra
import Panel from './components/Panel.vue';
import Gallery from './components/Gallery.vue';
import Upload from './components/Upload.vue';

// Example
import Example1 from './components/Example1.vue';
import Test from './components/Test.vue';

const Routers = [
  { path: '/', component: Index },
  { path: '/home', component: Home },
  { path: '/basic/button', component: Button },
  { path: '/basic/mdButton', component: MdButton },
  { path: '/basic/input', component: Input },
  { path: '/basic/inputDefault', component: InputDefault },
  { path: '/basic/inputFloatingLabel', component: InputFloatingLabel },
  { path: '/basic/search', component: Search },
  { path: '/basic/radio', component: Radio },
  { path: '/basic/checkbox', component: Checkbox },
  { path: '/basic/toggle', component: Toggle },
  { path: '/basic/range', component: RangeSlider },
  { path: '/basic/badge', component: Badge },
  { path: '/basic/dialog', component: Dialog },

  // Layout
  { path: '/layout/header', component: Header },
  { path: '/layout/list', component: List },
  { path: '/layout/cells', component: Cells },
  { path: '/layout/tabs', component: Tabs },
  { path: '/layout/buttonbar', component: ButtonBar },
  { path: '/layout/scalable', component: Scalable },

  // Advanced
  { path: '/advanced/swiper', component: Swiper },
  { path: '/advanced/swiper/default', component: SwiperDefault },
  { path: '/advanced/swiper/vertical', component: SwiperVertical },
  { path: '/advanced/vswipe', component: VSwipe },
  { path: '/advanced/scroll', component: Scroll },
  { path: '/advanced/scroller', component: VueScroller },
  { path: '/advanced/cascade', component: Cascade },
  { path: '/advanced/accordion', component: Accordion },
  { path: '/advanced/popup', component: Popup },
  { path: '/advanced/actionSheet', component: ActionSheet },
  {
    path: '/advanced/tabbar',
    component: Tabbar,
    children: [
      { path: 'home', component: TabbarHome },
      { path: 'discount', component: TabbarDiscount },
      { path: 'cart', component: TabbarCart },
      { path: 'user', component: TabbarUser }
    ]
  },
  { path: '/pageFromTabbar',component: PageFromTabbar },
  { path: '/advanced/tabbarWithoutRoutes', component: TabbarWithoutRoutes },
  { path: '/advanced/modal', component: Modal },
  { path: '/advanced/datepicker', component: Datepicker },

  // Extra
  { path: '/extra/panel', component: Panel },
  { path: '/extra/gallery', component: Gallery },
  { path: '/extra/upload', component: Upload },

  // Example
  { path: '/example1', component: Example1 },
  { path: '/test', component: Test }
];

window.__page_transition__ = 'ios';  // android
window.__disable_nav_title_transition__ = false;
window.__push_method__ = 'push'; //replace

// 路由配置
const RouterConfig = {
  // mode: 'history',
  routes: Routers
};
const router = new VueRouter(RouterConfig);

// 实例定义
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
