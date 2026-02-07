<!-- Template section contains pure HTML -->
<!-- Vue template syntax is similar to Twig -->
<template>
    <h1>Hello {{ firstName }}! Is this cooler?</h1>
</template>

<script>
// export default defines the Vue component options
export default {
    name: 'Products', // the name of the component, used for debugging and recursive components (it helps Vue identify the component in the component tree)
    // data() returns reactive state for the component
    data() { // the short way is data() { ... } // we moved that to products.vue!
        return {
            firstName: 'Ryan',
        };
    },
};
</script>

<style scoped>

</style>
