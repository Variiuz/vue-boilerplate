import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import i18n from './i18n'
import { createMetaManager } from "vue-meta";

// Fontawesome Config 
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSignInAlt, faHandHoldingHeart, faBullhorn, faPaintBrush, faBurn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSignInAlt, faHandHoldingHeart,faBullhorn,faPaintBrush,faBurn);



createApp(App).use(i18n).use(router).component("fa", FontAwesomeIcon).use(createMetaManager()).mount('#app')
