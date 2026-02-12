<template>
    <!-- Use CSS module class -->
    <div :class="$style.loader">
        Loading
    </div>
</template>

<script>
export default {
    name: 'Loading',
};
</script>

<style lang="scss" module>

/* HTML: <div :class="$style.component"/> */
/*
.component {
  background: url('../../images/loading.gif') no-repeat center;
  min-height: 50px;
  min-width: 50px;
}
*/

// maybe later we can add some animation to the loading component, but for now we just use a static image
// lot of examples: https://css-loaders.com/classic/
/* HTML: <div class="loader"></div> */
.loader {
  width: fit-content;
  margin: auto;
  font-size: 30px;
  padding: 0 5px 8px 0;
  background: repeating-linear-gradient(90deg,currentColor 0 3%,#0000 0 10%) 200% 100%/200% 4px no-repeat;
  animation: l3 2s steps(6) infinite;
}

@keyframes l3 {to{background-position: 80% 100%}}
</style>
