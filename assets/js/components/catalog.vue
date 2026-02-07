<template>
    <div>
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
            <legend-component :title="legend" /> <!-- Pass dynamic data as prop using v-bind  (shortcut of v-bind:title)-->
            <!-- simple way to pass string  <legend-component title=".. PUT LEGEND HERE"/>-->
        </div>
    </div>
</template>

<script>
import LegendComponent from '@/components/legend.vue'; // its the same as import LegendComponent from '../components/legend.vue'; // because @ is an alias for src/assets/js, so it goes up to src/assets/js/components/legend.vue

export default {
    name: 'Catalog',
    components: { LegendComponent },
    data() { // the short way is data() { ... } // we moved that to products.vue!
        return {
            // Reactive data used inside the template
            legend: 'Shipping takes 10-12 weeks, and products probably won\'t work',
        };
    },
};
</script>

<style scoped lang="scss">

</style>
