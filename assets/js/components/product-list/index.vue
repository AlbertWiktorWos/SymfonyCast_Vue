<template>
    <div class="row">
        <!-- Loop through products array and render ProductCard for each item -->
        <ProductCard
            v-for="product in products"
            :key="product['@id']"
            :product="product"
        />
    <!--  :key="product['@id']" Unique key required for efficient DOM diffing -->
    <!-- :product="product" Pass single product as prop -->
    </div>
</template>

<script>
import ProductCard from '@/components/product-list/product-card.vue'; // Import child component, we could also use just ./ couse its in the same directory, but we use @ for consistency with other imports and to avoid relative path issues if we move files around later.

export default {
    name: 'ProductList',
    components: {
        ProductCard, // Register child component locally
    },
    props: {
        products: {
            type: Array, // Expect array of product objects
            required: true, // Enforce prop presence
        },
    },
};
</script>
