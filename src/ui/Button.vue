<template>
  <button
    :class="
      clean
        ? 'text-gray-500 boredr border-2 border-gray-200 hover:bg-gray-200 hover:text-black '
        : 'bg-yellow-400 hover:bg-yellow-500'
    "
    class="rounded-full py-2 px-4 duration-200 text-gray-800"
  >
    {{ btnName }}
  </button>
</template>

<script>
export default {
  name: "btn",
  props: ["btnName", "clean"],
};
</script>
