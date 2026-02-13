<template>
    <div>
        <div class="input-group">
            <!-- existing input field -->

            <!-- Wrapper div for future extension -->
            <!-- @input="searchTerm = $event.target.value"  Update data on input event -->
            <!-- :value="searchTerm" Bind input value to searchTerm for two-way data binding -->
            <!--  v-model="searchTerm" Two-way binding between input and data! So we can replace this two attributes above with that one!-->
            <input
                v-model="searchTerm"
                class="form-control"
                placeholder="Search products..."
                @input="onInput"
            >  <!-- @input="onInput" Emit custom event when input changes (the "basic" input in v-model still works! -->

            <!--we could also just add  type="search" to input but we want to pratice emitting custom events and handling them in the parent component, so we will keep it as type="text" for now. &ndash;&gt;-->
            <!-- Show button only if search term is not empty -->
            <div
                v-show="searchTerm !== ''"
                class="input-group-append"
            >
                <!-- Listen to click event -->
                <button
                    class="btn btn-outline-secondary"
                    @click="eraseSearchTerm"
                >
                    X
                </button>
            </div>
        </div>
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
        eraseSearchTerm() {
            this.searchTerm = ''; // Clear internal search term
            this.$emit('search-products', { term: this.searchTerm }); // Emit event to parent
        },
    },
};
</script>

<style scoped lang="scss">

</style>
