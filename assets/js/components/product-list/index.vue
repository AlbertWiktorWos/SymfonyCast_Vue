<template>
    <div class="row">
        <div class="col-12">
            <div class="mt-4 text-center">
                <Loading v-show="loading" /> <!-- Show while loading -->
                <h5 v-show="!loading && products.length === 0">
                    No products found yet. :(
                </h5>
            </div>
        </div>

        <!-- Loop through products array and render ProductCard for each item -->
        <ProductCard
            v-for="product in products"
            v-show="!loading"
            :key="product['@id']"
            :product="product"
        />  <!-- v-show= Show only when data exists -->

    <!--  :key="product['@id']" Unique key required for efficient DOM diffing -->
    <!-- :product="product" Pass single product as prop -->
    </div>
</template>

<script>
import ProductCard from '@/components/product-list/product-card.vue';
import Loading from '@/components/loading.vue'; // Import child component, we could also use just ./ couse its in the same directory, but we use @ for consistency with other imports and to avoid relative path issues if we move files around later.

export default {
    name: 'ProductList',
    components: {
        Loading,
        ProductCard, // Register child component locally
    },
    props: {
        products: {
            type: Array, // Expect array of product objects
            required: true, // Enforce prop presence
        },
        loading: {
            type: Boolean,
            required: true,
        },
    },
};
</script>
