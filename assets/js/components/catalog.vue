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

        <!-- filteredProducts is a computed property that filters products based on searchTerm -->
        <product-list
            :products="filteredProducts"
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
            searchTerm: '', // catalog component stores the current search, and uses it to calculate the filtered list.
        };
    },
    computed: {
        filteredProducts() {
            // If no search term, return full list
            if (!this.searchTerm) {
                return this.products;
            }

            // Return only products that match the search term
            return this.products.filter((product) => (
                product.name
                    .toLowerCase()
                    .includes(this.searchTerm.toLowerCase())
            ));
        },
    },
    async mounted() {
        this.loading = true;
        let response = null;
        // If a category ID is provided, fetch products for that category
        try {
            response = await fetchProducts(this.currentCategoryId); // Use the service function to fetch products with optional category filter
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
    },
    methods: {
        onSearchProducts(event) {
            // Update local searchTerm based on emitted payload
            this.searchTerm = event.term;
        },
    },

};
</script>

<style scoped lang="scss">

</style>
