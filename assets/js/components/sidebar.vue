<template>
    <!-- Using CSS Modules, we access the scoped class with $style.sidebar -->
    <!-- modular CSS + static classes -->
    <div :class="[$style.sidebar, 'p-3', 'mb-5']">
        <h5 class="text-center">
            Categories
        </h5>

        <ul class="nav flex-column mb4">
            <!-- key="index" is an unique key for Vue internal tracking -->
            <li
                v-for="(category, index) in categories"
                :key="index"
                class="nav-item"
            >
                <a
                    :href="category.link"
                    class="nav-link"
                >
                    {{ category.name }} <!-- dynamic content -->
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    data() {
        return {
            categories: [
                { name: 'Dot Matrix Printers', link: '#' },
                { name: 'Iomega Zip Drives', link: '#' },
            ],
        };
    },
};
</script>

<style lang="scss" module> // lang="scss" allows us to use SCSS here!. // module is for CSS Modules, which scopes styles to this component only. It prevents styles from leaking out and affecting other parts of the application. This is optional but can be useful for larger applications to avoid style conflicts.
@import '~styles/components/light-component'; // earlier we importet that by ../../scss/components/light-component

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
