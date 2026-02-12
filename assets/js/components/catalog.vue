<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h1>
                    Products
                </h1>
            </div>
        </div>

        <product-list :products="products" /> <!-- Pass products array as prop to ProductList component -->

        <div class="row">
            <legend-component :title="legend" /> <!-- Pass dynamic data as prop using v-bind  (shortcut of v-bind:title)-->
            <!-- simple way to pass string  <legend-component title=".. PUT LEGEND HERE"/>-->
        </div>
    </div>
</template>

<script>
import LegendComponent from '@/components/legend.vue'; // its the same as import LegendComponent from '../components/legend.vue'; // because @ is an alias for src/assets/js, so it goes up to src/assets/js/components/legend.vue
import axios from 'axios'; // Import Axios HTTP client
import ProductList from '@/components/product-list'; // we import whole directory because it will automatically look for index.vue file

export default {
    name: 'Catalog',
    components: { ProductList, LegendComponent },
    data() { // the short way is data() { ... } // we moved that to products.vue!
        return {
            // Reactive data used inside the template
            legend: 'Shipping takes 10-12 weeks, and products probably won\'t work',
            products: [], // Reactive array for products
        };
    },
    async mounted() {
    // Make GET request to API Platform endpoint
    //     axios.get('/api/products').then((response) => {
    //         // Log full Axios response (headers, status, data, etc.)
    //         console.log(response);
    //     });
        // another way to do it is using async/await syntax, which is more modern and often easier to read:
        const response = await axios.get('/api/products'); // but we need to make the mounted method async to use await!
        // .log(response); // Log full Axios response (headers, status, data, etc.)
        this.products = response.data['hydra:member'];
    },
};
</script>

<style scoped lang="scss">

</style>
