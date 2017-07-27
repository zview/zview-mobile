//
import './scss/vonic.scss';

//
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueScroller from 'vue-scroller';
import VSwipe from 'vswipe';


//
Vue.use(VueRouter);
Vue.use(VueScroller);
Vue.use(VSwipe);


// Basic
import MdButton from './components/md-button/index.vue';
import VonInput from './components/input/Input.vue';
import Search from './components/input/Search.vue';
import VonRadio from './components/radio/index.vue';
import VonCheckbox from './components/checkbox/index.vue';
import VonToggle from './components/toggle/index.vue';
import VonRange from './components/range/index.vue';
import VonHeader from './components/header/index.vue';
import VonBadge from './components/badge/index.vue';

// Layout
import HairlineList from './components/list/HairlineList.vue';
import HairlineItem from './components/list/HairlineItem.vue';
import { Cells } from './components/cells/index.vue';
import Tabs from './components/tabs/index.vue';
import ButtonBar from './components/buttonbar/index.vue';
import Scalable from './components/scalable/index.vue';

// Advanced
import {Swiper, SwiperItem} from './components/swiper/index.vue';
import Scroll from './components/scroll/index.vue';
import Cascade from './components/cascade/index.vue';
import { Accordion, AccordionItem, AccordionRadio } from './components/accordion/index.vue';
import Datepicker from './components/datepicker/index.vue';

// Modal
import Modal from './services/modal/Modal.vue'

//Extra
import VonIcon from './components/icon/index.vue';
import VonPanel from './components/panel/index.vue';
import Navbar from './components/navbar/index.vue';
import {Gallery, GalleryItem} from './components/gallery/index.vue';


// Services
import $backdrop from './services/backdrop'
import { $loading, $toast } from './services/loading'
import $dialog from './services/popup/dialog.js'
import $popup from './services/popup/index.js'
import $cascadePanel from './services/cascadepanel/index.js'
import $actionSheet from './services/actionsheet/index.js'
import $tabbar from './services/tabbar/index.js'
import $sidebar from './services/sidebar/index.js'
import $modal from './services/modal/index.js'
import Storage from 'storage-js-iso'


export default {
  install: function (Vue, options) {

    // Basic
    Vue.component('md-button', MdButton);
    Vue.component('von-input', VonInput);
    Vue.component('search', Search);
    Vue.component('von-radio', VonRadio);
    Vue.component('von-checkbox', VonCheckbox);
    Vue.component('von-toggle', VonToggle);
    Vue.component('von-range', VonRange);
    Vue.component('von-header', VonHeader);
    Vue.component('badge', VonBadge);  //badge

    // Layout
    Vue.component('list', HairlineList);
    Vue.component('item', HairlineItem);
    Vue.component('hl-list', HairlineList);
    Vue.component('hl-item', HairlineItem);
    Vue.component('cells', Cells);
    Vue.component('tabs', Tabs);
    Vue.component('button-bar', ButtonBar);
    Vue.component('scalable', Scalable);

    // Advanced
    Vue.component('swiper', Swiper);
    Vue.component('swiper-item', SwiperItem);
    Vue.component('scroll', Scroll);
    Vue.component('cascade', Cascade);
    Vue.component('accordion', Accordion);
    Vue.component('accordion-item', AccordionItem);
    Vue.component('datepicker', Datepicker);

    // Modal
    Vue.component('modal', Modal);

    // Extra
    Vue.component('accordion-radio', AccordionRadio);
    Vue.component('z-icon', VonIcon);
    Vue.component('z-panel', VonPanel);
    Vue.component('z-navbar', Navbar);
    Vue.component('z-gallery', Gallery);
    Vue.component('z-gallery-item', GalleryItem);

    // Services
    Vue.prototype.$z_backdrop = window.$backdrop = $backdrop;
    Vue.prototype.$z_loading = window.$loading = $loading;
    Vue.prototype.$z_toast = window.$toast = $toast;
    Vue.prototype.$z_dialog = window.$dialog = $dialog;
    Vue.prototype.$z_popup = window.$popup = $popup;
    Vue.prototype.$z_cascadePanel = window.$cascadePanel = $cascadePanel;
    Vue.prototype.$z_actionSheet = window.$actionSheet = $actionSheet;
    Vue.prototype.$z_tabbar = window.$tabbar = $tabbar;
    Vue.prototype.$z_sidebar = window.$sidebar = $sidebar;
    Vue.prototype.$z_modal = window.$modal = $modal;
    Vue.prototype.$z_storage = window.$storage = Storage;

    // window.$router = router;

  }
};
