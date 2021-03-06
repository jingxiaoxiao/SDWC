import Vue from 'vue';

import './util/element';
import i18n from './i18n';
import './util/plugin-mqtt';
import store from './store';
import { MutationTypes as USER } from './store/modules/user';
import router from './router';
import './util/browser-hacks';
import MqttClient from './api/mqtt';
import { MutationTypes as UI } from './store/modules/ui';
import { MutationTypes as NODE } from './store/modules/node';

import App from './App.vue';
import './styles/global.css';
import 'chartist';
import 'chartist-plugin-tooltips';
import 'chartist/dist/chartist.min.css';
import 'chartist-plugin-tooltips/dist/chartist-plugin-tooltip.css';
import './styles/chartist.css';
import JSONTreeView from 'vue-json-tree-view/src/index';

import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import VueAMap from "vue-amap";


import mapBoxGl from 'mapbox-gl'
Vue.prototype.$mapboxgl = mapBoxGl


Vue.use(JSONTreeView);

Vue.use(VideoPlayer)

Vue.use(VueAwesomeSwiper)

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: "22647f47daac1267ecdceda33cf85c4c",
  // plugin: ["AMap.Autocomplete", "AMap.Geocoder", "AMap.Geolocation"],
  plugin:['AMap.Autocomplete', 'AMap.Geocoder', 'AMap.Geolocation', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: "1.4.15",
  uiVersion: "1.1"
});

const configurePromise = store.dispatch('configure');
/**
 * Restore user token (if avaliable) before Vue instance was created.
 * Makes `store.state.user` equals to restored state when enter router
 * for the very first time.
 */
store.dispatch('restoreSession');
store.dispatch('restorePreference');

window.addEventListener('beforeunload', () => {
  store.dispatch('storePreference');
});

const el = document.createElement('div');
document.body.appendChild(el);
const app = new Vue({
  el,
  store,
  i18n,
  router,
  provide: { configurePromise },
  extends: App
});

store.subscribe((mutation) => {
  if (mutation.type === USER.INVALIDATE_TOKEN) {
    store.dispatch('logout');
    router.replace({ name: 'login' });
    app.$message({
      type: 'error',
      duration: 0,
      message: i18n.t('login.expired')
    });
  }
});

MqttClient.on('close', () => store.commit(UI.SET_UI, { mqttConnected: false }));
MqttClient.on('connect', () => store.commit(UI.SET_UI, { mqttConnected: true }));
MqttClient.on('status', async (id, payload) => {
  if (!payload.legacy) {
    store.commit(NODE.SET_NODE_STATUS, { id, payload });
    return;
  }
  if (payload.code === 0) {
    const node = store.state.node.find(n => n.info.id === id);
    if (node.info.type_name === 'depot') {
      await store.dispatch('updateDepotStatus', id);
    }
    store.commit(NODE.SET_NODE_STATUS, { id, payload });
  }
});
MqttClient.on('message', (id, msg) => {
  store.commit(NODE.ADD_NODE_MSG, { id, msg });
});

if (__SDWC_DEV__) {
  import(/* webpackChunkName: 'development' */ './styles/development.css');
  // const el = document.createElement('div');
  // el.classList.add('development-ribbon');
  document.body.append(el);
}
