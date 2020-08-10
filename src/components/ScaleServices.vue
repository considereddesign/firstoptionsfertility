<template>
  <div>
    <img class="mt--2" src="@/assets/images/wave.svg"/>
    <div class="bg-white container-wide mx-auto py-24">

      <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-10">

        <div class="">
          <h6 class="text-secondary-500">
            Get in Touch
          </h6>

          <h2 class="mt-4 max-w-screen-sm">
            Contact Us
          </h2>
        </div>

        <div class="">
          <div class="mt-4 flex">
            <div class="bg-gray-100 p-2 rounded-full h-16 w-16 flex align-center justify-center mr-6">
              <img src="@/assets/images/icons/calendar.svg"/>
            </div>

            <div class="flex-1">
              <p class="font-medium text-xl">
                Make an appointment
              </p>

              <p class="mt-4">
                When booking an appointment all instructions will be explained clearly to you. Get in touch with our administration team at 00-35387-4414-492 or firstoptionsfertility@gmail.com
              </p>
            </div>
          </div>

          <div class="mt-12 flex">
            <div class="bg-gray-100 p-2 rounded-full h-16 w-16 flex align-center justify-center mr-6">
              <img src="@/assets/images/icons/office.svg"/>
            </div>

            <div class="flex-1">
              <p class="font-medium text-xl">
                Visit us
              </p>

              <p class="mt-4">
                The Palms Health and Wellbeing Centre, <br>
                Block C, The Avenue, Gorey, <br>
                Co. Wexford.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'ScaleServices',
  components: {
  },
}
</script>

<style scoped>
.service-card  {
  @apply bg-gray-100;
}

.mt--2 {
  margin-top: -2px;
}
</style>
