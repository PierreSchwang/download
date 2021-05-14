import {createApp} from 'vue'
import App from './App.vue'

import "uikit/dist/js/uikit.min";
import "feather-icons/dist/feather.min";
import router from './router'

createApp(App).use(router).mount('#app')