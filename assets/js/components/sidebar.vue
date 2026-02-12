<template>
    <!-- sidebar content -->
    <!-- computed property is used directly in template -->
    <div :class="[$style.component, 'p-3', 'mb-5']">
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
                <!-- we use key="index" earlier - is an unique key for Vue internal tracking -->
                <!-- but now as we use api we have @id as unique key for Vue's virtual DOM diffing -->
                <li class="nav-item">
                    <!-- 'nav-link': true, always apply base class-->
                    <!-- 'selected': currentCategoryId === null highlight homepage-->
                    <a
                        :class="{
                            'nav-link': true,
                            [$style.selected]: currentCategoryId === null
                        }"
                        href="/"
                    >
                        All Products
                    </a>
                </li>

                <li
                    v-for="(category) in categories"
                    :key="category['@id']"
                    class="nav-item"
                >
                    <a
                        :href="`/category/${category.id}`"
                        :class="{
                            'nav-link': true,
                            'selected': currentCategoryId === category['@id']
                        }"
                    >
                        {{ category.name }} <!-- dynamic content -->
                    </a>
                </li>
            </ul>

            <hr>
        </div>

        <!-- dynamic text using v-text directive -->
        <!-- @click="$emit(.. Emit event directly from template. Earilier we use @click="toggleCollapsed" - method from methods -->
        <div class="d-flex justify-content-end">
            <button
                class="btn btn-secondary btn-sm"
                @click="$emit('toggle-collapsed')"
                v-text="collapsed ? '>>' : '<< Collapse'"
            />  <!-- @click shorthand for v-on:click -->
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Sidebar',
    props: { // props are how we pass data from parent to child components. They are reactive and can be used in the template and logic of the component.
        collapsed: {
            type: Boolean,
            required: true, // ensure prop is passed
        },
    },
    data() {
        return {
            categories: [],
        };
    },
    computed: {
        currentCategoryId() {
            // Extract category ID from current URL
            return window.currentCategoryId;
        },
    },
    created() { // created lifecycle hook runs after the component is created but before it is mounted to the DOM. It's a good place to perform setup tasks or log the component instance for debugging.
        console.log(this); // inspect the Vue 3 Proxy instance
    },
    async mounted() {
        const response = await axios.get('/api/categories'); // but we need to make the mounted method async to use await!
        // .log(response); // Log full Axios response (headers, status, data, etc.)
        this.categories = response.data['hydra:member'];
    },
    // we don't need whole methods because we only emit event (now in button)
    // methods: {
    //     toggleCollapsed() {
    //         // this.collapsed = !this.collapsed; // toggle state
    //         // console.log(this.componentClass); // logs array of classes as a property
    //         this.$emit('toggle-collapsed', this.collapsed); // emit event to parent with new state
    //     },
    // },

};
</script>

<style lang="scss" module> // lang="scss" allows us to use SCSS here!. // module is for CSS Modules, which scopes styles to this component only. It prevents styles from leaking out and affecting other parts of the application. This is optional but can be useful for larger applications to avoid style conflicts.
@import '~styles/components/light-component'; // earlier we importet that by ../../scss/components/light-component

/* Sidebar styles using SCSS mixin */
.component :global {
  @include light-component;

  ul {
    li {
      a:hover {
        background: $blue-component-link-hover;
      }
    }
    li a.selected {
      background: $light-component-border;
    }
  }

}

</style>
