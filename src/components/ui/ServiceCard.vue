<template>
  <div class="service-card rounded-md p-5">
    <div class="flex items-baseline justify-between">
      <p class="font-medium text-lg">
        {{ title }}
      </p>

      <p class="text-primary-500 font-medium text-2xl">
          {{ price }}
      </p>
    </div>

    <p class="text-gray-700 mt-4">
      {{ body }}
    </p>

    <p class="mt-4 text-navy-300 text-sm">
      {{ footer }}
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
    footer: {
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
