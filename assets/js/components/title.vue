<template>
    <div :class="$style.component">
        <h1>
            {{ categoryName }} <!-- render computed category name -->
        </h1>
    </div>
</template>
<script>
export default {
    props: {
        currentCategoryId: {
            type: String,
            default: null, // allow null when on "all products"
        },
        categories: {
            type: Array,
            required: true, // categories must be provided
        },
    },

    computed: {
        categoryName() {
            if (this.currentCategoryId === null) {
                return 'All Products'; // fallback when no category selected
            }

            const category = this.categories.find(
                (cat) => (cat['@id'] === this.currentCategoryId), // match by IRI
            );

            return category ? category.name : ''; // handle empty state (e.g. loading)
        },
    },
};
</script>

<style lang="scss" module>
.component {
  h1 {
    font-size: 1.7rem; // title size styling
  }
}
</style>

