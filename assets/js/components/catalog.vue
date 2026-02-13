<template>
    <div>
        <div class="row">
            <div class="col-3">
                <title-component
                    :current-category-id="currentCategoryId"
                    :categories="categories"
                />
            </div>
            <div class="col-9">
                <!-- Search bar component -->
                <search-bar
                    @search-products="onSearchProducts"
                />
            </div>
        </div>

        <product-list
            :products="products"
            :loading="loading"
        /> <!-- Pass products array as prop to ProductList component -->

        <div class="row">
            <legend-component :title="legend" /> <!-- Pass dynamic data as prop using v-bind  (shortcut of v-bind:title)-->
            <!-- simple way to pass string  <legend-component title=".. PUT LEGEND HERE"/>-->
        </div>
    </div>
</template>

<script>
import LegendComponent from '@/components/legend.vue'; // its the same as import LegendComponent from '../components/legend.vue'; // because @ is an alias for src/assets/js, so it goes up to src/assets/js/components/legend.vue
import ProductList from '@/components/product-list';
import TitleComponent from '@/components/title.vue';
import { fetchProducts } from '@/services/products-service';
import SearchBar from '@/components/search-bar.vue'; // we import whole directory because it will automatically look for index.vue file

export default {
    name: 'Catalog',
    components: {
        SearchBar, ProductList, LegendComponent, TitleComponent,
    },
    props: {
        currentCategoryId: {
            type: String,
            default: null,
        },
        categories: {
            type: Array,
            required: true, // ensure prop is passed
        },
    },
    data() { // the short way is data() { ... } // we moved that to products.vue!
        return {
            // Reactive data used inside the template
            legend: 'Shipping takes 10-12 weeks, and products probably won\'t work',
            products: [], // Reactive array for products
            loading: false, // tracks loading status // added flag for tracking Ajax call
            searchTerm: null, // state for search term, now we can watch this property for changes and react to it by reloading products with the new search term.
        };
    },
    watch: { // watchers allow us to react to changes in reactive data properties. In this case, we want to watch for changes in the currentCategoryId, so that when the user clicks on a different category in the sidebar, we can react to that change and load the products for the new category.
        currentCategoryId() {
            // Reload products when category changes
            this.loadProducts();
        },
    },
    mounted() {
        this.loadProducts(); // Load products when component is mounted, with no search term
    },
    methods: {
        // onSearchProducts(event) { // look at the shorter example below, we can use destructuring to extract term directly from the event object, which makes the code cleaner and more concise.
        //     this.loadProducts(event.term);
        // },
        /**
       * Handle search event emitted by SearchBar component
       * @param { string } term
       */
        onSearchProducts({ term }) {
            this.searchTerm = term;
            // Update local searchTerm based on emitted payload
            this.loadProducts(); // Load products with the new search term
        },
        async loadProducts() {
            this.loading = true; // Start loading state

            let response = null;
            // If a category ID is provided, fetch products for that category
            try {
                response = await fetchProducts(this.currentCategoryId, this.searchTerm); // Use the service function to fetch products with optional category filter
            // .log(response); // Log full Axios response (headers, status, data, etc.)
            } catch (error) {
                console.error('Error fetching products:', error);
                this.loading = false; // Ensure loading state is reset on error
                // Exit early if there's an error
                return;
            }

            await new Promise((r) => setTimeout(r, 2000)); // Simulate loading delay (2 seconds)
            this.loading = false;
            this.products = response.data['hydra:member'];
            // Update products with server response
        },
    },

};
</script>

<style scoped lang="scss">

</style>
