<template>
  <div>
    <img class="mt--2" src="@/assets/images/wave.svg"/>
    <div id="how-it-works" class="bg-white">

      <div class="text-center container-narrow mx-auto mt-32">
        <h6 class="text-secondary-500">
          Semen Assessment
        </h6>

        <h2 class="mt-2">
          How it works
        </h2>
      </div>

      <div class="pt-0 pb-32 container">

        <div class="md:flex flex-row sm:flex-col md:flex-row lg:flex-row xl:flex-row mt-32">
          <img class="retina" src="@/assets/images/collect-a-sample.jpg"/>

          <div class="md:mx-12 align-center flex flex-col justify-center">
            <h2 class="mt-0">
              Collect a sample
            </h2>
            <p class="text-gray-600">
              In the comfort and safety of your own home produce a semen sample into a sterile sample container, then bring it to the testing clinic within one hour of production. Detailed information will be given to you prior to your appointment on how best to produce the sample and maintain it's integrity prior to analysis.
            </p>
          </div>
        </div>

        <div class="md:flex flex-row sm:flex-col md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse mt-32">
          <img class="retina" src="@/assets/images/analyse-the-semen.jpg"/>

          <div class="md:mx-12 align-center flex flex-col justify-center">
            <h2 class="mt-0">
              Analyse the sample
            </h2>
            <p class="text-gray-600">
              We will conduct a suite of analyses including sperm concentration, morphology, motility, volume, pH, viscosity and agglutination with anti-sperm antibody binding testing where appropriate  informing your fertility status.
            </p>
          </div>
        </div>

        <div class="md:flex flex-row sm:flex-col md:flex-row lg:flex-row xl:flex-row mt-32">
          <img class="retina" src="@/assets/images/create-a-report.jpg"/>

          <div class="md:mx-12 align-center flex flex-col justify-center">
            <h2 class="mt-0">
              Create a report
            </h2>
            <p class="text-gray-600">
              Your results will be cross-checked against defined World Health Organisation standards producing your individual tailored report.
            </p>
          </div>
        </div>

        <div class="md:flex flex-row sm:flex-col md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse mt-32">
          <img class="retina" src="@/assets/images/receive-your-results.jpg"/>

          <div class="md:mx-12 align-center flex flex-col justify-center">
            <h2 class="mt-0">
              Receive your results
            </h2>
            <p class="text-gray-600">
              During your phone consultation we will walk you through your test results and guide you on your fertility journey.
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HowSection',
}
</script>

<style scoped>
.retina {
  max-width: 50%;
}

@media only screen and (max-width: 600px) {
  .retina {
    max-width: 80%;
    margin-bottom: 20px;
  }
}

.mt--2 {
  margin-top: -2px;
}
</style>
