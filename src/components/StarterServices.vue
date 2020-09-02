<template>
  <div id="costs" class="bg-gray-100">

    <div class="pt-24 pb-20 container-wide mx-auto">
      <h6 class="text-secondary-500">
        —  Costs
      </h6>

      <h2 class="mt-2 max-w-screen-sm">
        First Options Fertility will set you on the correct path to taking control of your fertility.
      </h2>

      <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
        <ServiceCard
          title="Semen assessment package"
          body="Receive a complete semen assessment, written report and private consultation."
          footer="Subsequent semen assessments will cost €120."
          price="€150"
        />

        <ServiceCard
          title="Consultation only"
          body="Review of previous semen assessments, embryology notes, embryo culture videos after fertility treatment in an IVF laboratory."
          price="€90"
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
