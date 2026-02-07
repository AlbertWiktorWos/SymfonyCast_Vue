import { createApp } from 'vue';

import App from '@/pages/products.vue'; // Import the main Vue component for the products page

createApp(App).mount('#app'); // Create and mount the Vue application to the DOM element with id "app"
/*
const template = '<h1>Hello {{ firstName }}! Is this cooler?</h1>'; -> we moved that to products.vue!
// old way to mount vue was adding key el: '#app', // Mount Vue inside <div id="app">
createApp({
data: function () { // the short way is data() { ... } // we moved that to products.vue!
    return {
        firstName: 'Ryan',
    };
},
template: '<h1>Hello {{ firstName }}! Is this cooler?</h1>',
render() { // or render: function() { ... }  // render() overrides Vue's internal rendering
    // turns a template string into a render function (compile is from vue)
    return compile(template)(this.$.ctx); // Compile the template and render it with the component's context (this.$.ctx)
},
}).mount('#app'); // Mount the app to the DOM element with id "app"
*/
