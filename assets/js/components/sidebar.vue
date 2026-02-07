<template>
    <!-- sidebar content -->
    <!-- computed property is used directly in template -->
    <div :class="componentClass">
        <!-- Using CSS Modules, we access the scoped class with $style.sidebar -->
        <!-- modular CSS + static classes -->
        <!-- :style= dynamic width based on collapsed -->
        <!-- old way before we add computed-->
        <!--  <div-->
        <!--        :class="{-->
        <!--            [$style.component]: true,-->
        <!--            [$style.collapsed]: collapsed,-->
        <!--            'p-3': true,-->
        <!--            'mb-5': true-->
        <!--        }"-->
        <!--    -->

        <!-- v-if completely removes elements from DOM if collapsed is true -->
        <div v-if="!collapsed">
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

            <hr>
        </div>

        <!-- dynamic text using v-text directive -->
        <div class="d-flex justify-content-end">
            <button
                class="btn btn-secondary btn-sm"
                @click="toggleCollapsed"
                v-text="collapsed ? '>>' : '<< Collapse'"
            />  <!-- @click shorthand for v-on:click -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    data() {
        return {
            collapsed: false, // sidebar starts expanded
            categories: [
                { name: 'Dot Matrix Printers', link: '#' },
                { name: 'Iomega Zip Drives', link: '#' },
            ],
        };
    },
    computed: {
    /**
     * Computes the component classes depending on collapsed state
     * computed property calculates an array of classes, conditionally adding collapsed
     * @return string[]
     */
        componentClass() {
            const classes = [this.$style.component, 'p-3', 'mb-5']; // always needed classes
            if (this.collapsed) {
                classes.push(this.$style.collapsed); // add collapsed class conditionally
            }
            return classes;
        },
    },
    created() { // created lifecycle hook runs after the component is created but before it is mounted to the DOM. It's a good place to perform setup tasks or log the component instance for debugging.
        console.log(this); // inspect the Vue 3 Proxy instance
    },
    methods: {
        toggleCollapsed() {
            this.collapsed = !this.collapsed; // toggle state
            console.log(this.componentClass); // logs array of classes as a property
        },
    },

};
</script>

<style lang="scss" module> // lang="scss" allows us to use SCSS here!. // module is for CSS Modules, which scopes styles to this component only. It prevents styles from leaking out and affecting other parts of the application. This is optional but can be useful for larger applications to avoid style conflicts.
@import '~styles/components/light-component'; // earlier we importet that by ../../scss/components/light-component

/* Sidebar styles using SCSS mixin */
.component {
  @include light-component;

  &.collapsed { // & is a reference to the parent selector, so this means .component.collapsed
    width: 70px; // narrow width when collapsed
  }
  ul {
    li {
      a:hover {
        background: $blue-component-link-hover;
      }
    }
  }
}

</style>
