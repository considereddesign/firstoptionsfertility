<template>
  <div class="service-card rounded-md p-5">
    <div class="flex items-center justify-between">
      <p class="font-medium">
        {{ title }}
      </p>

      <p class="ml-3 text-primary-500 font-medium text-2xl">
          {{ price }}
      </p>
    </div>

    <p class="text-gray-700 mt-2">
      {{ body }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    price: {
      type: String,
    },
    image: {
      type: String,
    }
  }
}
</script>
