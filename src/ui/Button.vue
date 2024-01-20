<template>
    <button class=" rounded-full bg-blue-500 py-2 px-4 text-white">{{btnName}}</button>
</template>

<script>
export default {
  name: "btn",
  props: ["btnName"],
};
</script>
