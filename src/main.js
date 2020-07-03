/*
 * @Date: 2020-06-28 15:48:26
 * @LastEditors: Lee
 * @LastEditTime: 2020-06-29 11:41:16
 */ 
import Vue from 'vue'
import App from './App'
import router from './router'
import animated from 'animate.css' // npm install animate.css --save安装，在引入
import { Button, Dropdown , DropdownItem, DropdownMenu, Form, FormItem, Input, Checkbox, Select, Option, DatePicker, Progress, Alert, MessageBox,Message,Loading,  Row, Col,Carousel,CarouselItem, Image,Card} from 'element-ui';
import VueRulerTool from 'vue-ruler-tool'
// import ruler from 'rulerz.js'
Vue.component('vue-ruler-tool', VueRulerTool)
Vue.use(animated)
// Vue.use(ruler)
Vue.use(Button);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Select);
Vue.use(Option);
Vue.use(DatePicker);
Vue.use(Progress);
Vue.use(Alert);
Vue.use(Loading);
Vue.use(Row);
Vue.use(Col);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Image);
Vue.use(Card);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
