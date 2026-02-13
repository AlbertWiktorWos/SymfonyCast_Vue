<template>
    <div>
        <!-- Wrapper div for future extension -->
        <!-- @input="searchTerm = $event.target.value"  Update data on input event -->
        <!-- :value="searchTerm" Bind input value to searchTerm for two-way data binding -->
        <!--  v-model="searchTerm" Two-way binding between input and data! So we can replace this two attributes above with that one!-->
        <input
            v-model="searchTerm"
            class="form-control"
            placeholder="Search products..."
            type="search"
            @input="onInput"
        >  <!-- @input="onInput" Emit custom event when input changes (the "basic" input in v-model still works! -->
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            searchTerm: '', // Holds current input value
            searchTimeout: null, // Stores current timeout id
        };
    },
    methods: {
        onInput() {
            // If a timeout already exists, cancel it
            if (this.searchTimeout) {
                clearTimeout(this.searchTimeout);
            }

            this.searchTimeout = setTimeout(() => {
                // Emit custom event after delay
                this.$emit('search-products', { term: this.searchTerm });

                // Reset timeout id after execution
                this.searchTimeout = null;
            }, 200);
            // Emit custom event with payload
        },
    },
};
</script>

<style scoped lang="scss">

</style>
