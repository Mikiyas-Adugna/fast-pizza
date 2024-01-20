<template>
  <div>
    <list :listOf="listOf" />
  </div>
</template>

<script>
import { getMenu } from "../../service/AccessToApi";
import list from "../../ui/list.vue";

export default {
  name: "MenuPage",
  components: {
    list,
  },
  async created() {
    this.userName = this.$route.params.userName;
    await this.fetchMenu();
  },
 
  data() {
    return {
      userName: "",
      listOf: [],
    };
  },
  methods: {
    async fetchMenu() {
      this.listOf = await getMenu();
    },
  },
};
</script>
