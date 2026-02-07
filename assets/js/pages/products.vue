<!-- Template section contains pure HTML -->
<!-- Vue template syntax is similar to Twig -->
<template>
    <div class="container-fluid">
        <div class="row">
            <aside class="col-xs-12 col-3">
                <div class="sidebar p-3 mb-5">
                    <h5 class="text-center">
                        Categories
                    </h5>
                    <ul class="nav flex-column mb4">
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="/"
                            >All Products</a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="#"
                            >Category A</a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="#"
                            >Category B</a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div class="col-xs-12 col-9">
                <div class="row">
                    <div class="col-12">
                        <h1>
                            Products
                        </h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-6 mb-2 pb-2">
                        TODO - load some products!
                    </div>
                </div>
                <div class="row">
                    <span class="p-3">
                        {{ legend }} <!-- Render reactive data inside the template -->
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// export default defines the Vue component options
export default {
    name: 'Products', // the name of the component, used for debugging and recursive components (it helps Vue identify the component in the component tree)
    // data() returns reactive state for the component
    data() { // the short way is data() { ... } // we moved that to products.vue!
        return {
            // Reactive data used inside the template
            legend: 'Shipping takes 10-12 weeks, and products probably won\'t work',
        };
    },
    // Alternatively, we can use an arrow function for data, which is a shorthand syntax.
    // However, be cautious with arrow functions in Vue components, as they do not have their own `this` context.
    // In this case, since we are not using `this` inside the data function, it is safe to use an arrow function.
    //   data: () => ({
    //     // Arrow function shorthand returning the data object
    //     legend: 'Shipping takes 10-13 weeks, and products probably won\'t work',
    //   }),

};
</script>

<style lang="scss"> // lang="scss" allows us to use SCSS here!.
@import '../../scss/components/light-component';

/* Sidebar styles using SCSS mixin */
.sidebar {
  @include light-component;

  ul {
    li {
      a:hover {
        background: $blue-component-link-hover;
      }
    }
  }
}

</style>
