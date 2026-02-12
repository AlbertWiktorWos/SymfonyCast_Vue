<!-- Template section contains pure HTML -->
<!-- Vue template syntax is similar to Twig -->
<template>
    <div class="container-fluid">
        <div class="row">
            <aside :class="asideClass">
                <!--    @toggle-collapsed="toggleSidebarCollapsed" Shorthand for v-on -->
                <!--  v-on:toggle-collapsed - Listen for custom event -->
                <sidebar
                    :collapsed="sidebarCollapsed"
                    :current-category-id="currentCategoryId"
                    @toggle-collapsed="toggleSidebarCollapsed"
                />
            </aside>
            <div :class="contentClass">
                <!-- Pass current category as prop to catalog -->
                <catalog :current-category-id="currentCategoryId" />
            </div>
        </div>
    </div>
</template>

<script>
// export default defines the Vue component options
import Sidebar from '@/components/sidebar.vue'; //@ in this case is ..
import Catalog from '@/components/catalog.vue';
import { getCurrentCategoryId } from '@/services/page-context';

export default {
    name: 'Products', // the name of the component, used for debugging and recursive components (it helps Vue identify the component in the component tree)
    components: {
        Catalog,
        Sidebar, // register the Sidebar component so it can be used in this template. This allows us to use <sidebar-component> in our template to render the sidebar.
    },
    // data() returns reactive state for the component
    // Alternatively, we can use an arrow function for data, which is a shorthand syntax.
    // However, be cautious with arrow functions in Vue components, as they do not have their own `this` context.
    // In this case, since we are not using `this` inside the data function, it is safe to use an arrow function.
    //   data: () => ({
    //     // Arrow function shorthand returning the data object
    //     legend: 'Shipping takes 10-13 weeks, and products probably won\'t work',
    //   }),
    data() {
        return {
            sidebarCollapsed: false, // state to track if the sidebar is collapsed
        };
    },
    computed: {
        asideClass() {
            // Determines sidebar width based on collapse state
            return this.sidebarCollapsed
                ? 'aside-collapsed'
                : 'col-xs-12 col-3';
        },
        contentClass() {
            // Main content grows when sidebar is collapsed
            return this.sidebarCollapsed
                ? 'col-xs-12 col-11'
                : 'col-xs-12 col-9';
        },
        currentCategoryId() {
        // Extract category ID from current URL
            return getCurrentCategoryId();
        },
    },
    methods: {
        toggleSidebarCollapsed() {
            this.sidebarCollapsed = !this.sidebarCollapsed; // toggle the collapsed state
        },
    },

};
</script>

<style lang="scss" module> // lang="scss" allows us to use SCSS here!. // module is for CSS Modules, which scopes styles to this component only. It prevents styles from leaking out and affecting other parts of the application. This is optional but can be useful for larger applications to avoid style conflicts.

</style>
