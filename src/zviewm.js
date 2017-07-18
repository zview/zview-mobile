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
import Cells from './components/cells/index.vue';
import Tabs from './components/tabs/index.vue';
import ButtonBar from './components/buttonbar/index.vue';
import Scalable from './components/scalable/index.vue';

// Advanced
import {Swiper, SwiperItem} from './components/swiper/index.vue';
import Scroll from './components/scroll/index.vue';
import Cascade from './components/cascade/index.vue';
import { Accordion, AccordionItem } from './components/accordion/index.vue';
import Datepicker from './components/datepicker/index.vue';

// Modal
import Modal from './services/modal/Modal.vue'

// Service
import './services/backdrop'
import './services/loading'
import './services/popup/dialog.js'
import './services/popup/index.js'
import './services/cascadepanel/index.js'
import './services/actionsheet/index.js'
import './services/tabbar/index.js'
import './services/sidebar/index.js'
import './services/modal/index.js'

import Storage from 'storage-js-iso'
window.$storage = Storage


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
    Vue.component('badge', VonBadge);

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

  }
};
