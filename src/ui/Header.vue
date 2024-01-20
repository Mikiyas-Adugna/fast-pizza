<template>
  <div class=" flex items-center justify-between bg-yellow-400 text-white py-4 px-6 mb-8 ">
    <p class="text-4xl ">fast react pizza co.</p>
    <input
    class="rounded-full text-gray-500 py-2 px-3"
    type="text"
    placeholder="Search order #"
    v-model.lazy.trim="orderSearch"
    />
  </div>
</template>

<script>
export default {
  name: "navHead",

  data() {
    return {
      orderSearch: "",
    };
  },
};
</script>
