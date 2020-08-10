<template>
  <div id="our-services" class="bg-gray-100">

    <div class="pt-24 pb-20 container-wide mx-auto">
      <h6 class="text-secondary-500">
        —  Costs
      </h6>

      <h2 class="mt-2 max-w-screen-sm">
        We’ll set you on the correct path to taking control of your fertility.
      </h2>

      <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
        <ServiceCard
          title="Semen assessment package"
          body="Recieve a complete semen assessment, written report and private consultation."
          price="€150"
          :image="require('@/assets/images/icons/employee-branding.svg')"
        />

        <ServiceCard
          title="Consultation only"
          body="We’ll perfect or create an effective recruitment strategy for your company."
          price="€90"
          :image="require('@/assets/images/icons/recruitment-analytics.svg')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCard from './ui/ServiceCard.vue'


export default {
  name: 'StarterServices',
  components: {
    ServiceCard
  },
}
</script>

<style scoped>
.service-card  {
  @apply bg-white;
}

.rounded-full {
  @apply bg-gray-100;
}
</style>
