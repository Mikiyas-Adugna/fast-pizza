<template id="app" class="border-box">
  <navHead />
  <router-view></router-view>
  <foot/>
</template>

<script>
import navHead from "./ui/Header.vue";
import foot from "./ui/Footer.vue";

export default {
  components: {
    navHead,
    foot
  },
};
</script>
