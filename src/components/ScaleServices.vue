<template>
  <div>
    <img class="mt--2" src="@/assets/images/wave.svg"/>
    <div id="contact" class="bg-white container-wide mx-auto py-24">

      <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
        <div class="">
          <h6 class="text-secondary-500">
            - Get in Touch
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
                When booking an appointment, all instructions will be explained clearly to you. <br> <br>
                <span class="text-navy-300">Call:</span> <a href="tel:+353874414492">00-35387-4414-492</a><br>
                <span class="text-navy-300">Email:</span> <a href="mailto:firstoptionsfertility@gmail.com">firstoptionsfertility@gmail.com</a>
              </p>

              <p class="mt-4">
                <a class="text-secondary-500" href="https://calendly.com/firstoptionsfertility/30min" target="_blank">Make an appointment →</a>
              </p>
            </div>
          </div>

          <div class="mt-12 flex">
            <div class="bg-gray-100 p-2 rounded-full h-16 w-16 flex align-center justify-center mr-6">
              <img src="@/assets/images/icons/office.svg"/>
            </div>

            <div class="flex-1">
              <p class="font-medium text-xl">
                Where to find us
              </p>
              <p class="mt-4">
                We service clients in the south-east region and are a short drive from Dublin, Carlow and Wexford.
              </p>
              <p class="mt-4">
                The Palms Health and Wellbeing Centre, <br>
                Block C, The Avenue, Gorey, <br>
                Co. Wexford.
              </p>
              <p class="mt-4">
                <a
                  class="text-secondary-500"
                  href="https://www.google.com/maps/dir/53.3757825,-6.2620716/The+Palms+Health+and+Wellbeing+Centre,+The+Avenue,+Gorey+corporation+lands,+Gorey,+Co.+Wexford/@53.0375004,-7.0377105,9z/data=!3m1!4b1!4m17!1m6!3m5!1s0x4867e7b0fda0640f:0xafc83a457ed9f7d!2sThe+Palms+Health+and+Wellbeing+Centre!8m2!3d52.6746205!4d-6.2956965!4m9!1m1!4e1!1m5!1m1!1s0x4867e7b0fda0640f:0xafc83a457ed9f7d!2m2!1d-6.2956965!2d52.6746205!3e0"
                  target="_blank"
                >
                  Get Directions →
                </a>
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
