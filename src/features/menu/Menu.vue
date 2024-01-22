<template>
  <div class="mb-16">
  <ul class="space-y-4 mt-8" v-for="pizza in listOf">
    <list :pizza="pizza" />
  </ul>
    </div>
</template>

<script>
import { getMenu } from "../../service/AccessToApi";
import list from "../../ui/list.vue";
import { useDataStore } from "../../stores/dataStore";

export default {
  name: "MenuPage",
  components: {
    list,
  },
  async created() {
    const userName = this.$route.params.userName;
    const dataStore = useDataStore();
    dataStore.userName(userName);
    await this.fetchMenu();
  },

  data() {
    return {
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
