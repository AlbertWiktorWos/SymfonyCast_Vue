<template>
    <!-- Using CSS Modules, we access the scoped class with $style.sidebar -->
    <!-- modular CSS + static classes -->
    <div :class="[$style.sidebar, 'p-3', 'mb-5']">
        <h5 class="text-center">
            Categories
        </h5>
        <ul class="nav flex-column mb4">
            <li class="nav-item">
                <a
                    class="nav-link"
                    href="/"
                >All Products</a>
            </li>
            <li class="nav-item">
                <a
                    class="nav-link"
                    href="#"
                >Category A</a>
            </li>
            <li class="nav-item">
                <a
                    class="nav-link"
                    href="#"
                >Category B</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
};
</script>

<style lang="scss" module> // lang="scss" allows us to use SCSS here!. // module is for CSS Modules, which scopes styles to this component only. It prevents styles from leaking out and affecting other parts of the application. This is optional but can be useful for larger applications to avoid style conflicts.
@import '../../scss/components/light-component';

/* Sidebar styles using SCSS mixin */
.sidebar {
  @include light-component;

  ul {
    li {
      a:hover {
        background: $blue-component-link-hover;
      }
    }
  }
}

</style>
