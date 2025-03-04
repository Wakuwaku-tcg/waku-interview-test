import App from './App'


import {createSSRApp} from 'vue'
import './uni.promisify.adaptor'
import i18n from './request/i18n';


export function createApp() {
  const app = createSSRApp(App);
  app.use(i18n);
  return {
    app
  }
}
