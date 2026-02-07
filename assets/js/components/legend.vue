<template>
    <span class="p-3">
        <!-- Temporary static content for the Legend component -->
        {{ title }} <!-- Display the title prop passed from the parent component -->
    </span>
</template>

<script>
export default {
    name: 'Legend',
    // Define a prop named 'title' to receive data from the parent component
    // props: ['title'], //its a string, but we can also specify the type and default value like this:
    props: {
        title: { type: String, default: 'Shipping takes 10-12 weeks, and products probably won\'t work' },
    },
};
</script>

<style lang="scss">

</style>
