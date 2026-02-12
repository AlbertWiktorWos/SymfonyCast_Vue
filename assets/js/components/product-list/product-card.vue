<template>
    <div class="col-xs-6 col-4 mb-2 pb-2">
        <!-- we use [] syntax because of the hyphen in the class name, we could use $style.product-box but js doesn't like dashes with the object syntax -->
        <div :class="$style['product-box']">
            <div :class="$style.image">
                <img
                    :alt="product.name"
                    :src="product.image"
                    class="d-block mb-2"
                >
                <h3 class="font-weight-bold mb-2 px-2">
                    {{ product.name }}
                </h3>
            </div>
            <div class="p-2 my-3 d-md-flex justify-content-between">
                <p class="p-0 d-inline">
                    <strong>${{ price }}</strong>
                </p>
                <button
                    class="btn btn-info btn-sm"
                >
                    View Product
                </button>
            </div>
        </div>
        <hr>
        <div class="px-2 pb-2">
            <small>brought to you by {{ product.brand }}</small>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object, // Expect single product object
            required: true, // Must always be passed
        },
    },
    computed: {
    /**
     * Returns a formatted price for the product
     * @returns {string}
     */
        price() {
            return (this.product.price / 100)
                .toLocaleString('en-US', { minimumFractionDigits: 2 });
        },
    },

};
</script>


<style lang="scss" module> // lang="scss" allows us to use SCSS here!. // module is for CSS Modules, which scopes styles to this component only. It prevents styles from leaking out and affecting other parts of the application. This is optional but can be useful for larger applications to avoid style conflicts.
@import '~styles/components/light-component'; // earlier we importet that by ../../scss/components/light-component
.product-box {
  border: 1px solid $light-component-border;
  box-shadow: 0 0 7px 4px #efefee;
  border-radius: 5px;
}
.image {
  img {
    width: 100%;
    height: auto;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  h3 {
    font-size: 1.2rem;
  }
}
</style>
