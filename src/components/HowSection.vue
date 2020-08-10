<template>
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
            In the comfort of your own home produce a semen sample into a sterile sample container. Then bring it to the testing clinic within one hour of production.
          </p>
        </div>
      </div>

      <div class="md:flex flex-row sm:flex-col md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse mt-32">
        <img class="retina" src="@/assets/images/analyse-the-semen.jpg"/>

        <div class="md:mx-12 align-center flex flex-col justify-center">
          <h2 class="mt-0">
            Analyse the semen
          </h2>
          <p class="text-gray-600">
            We will conduct a complete semen analysis which includes measurements such as volume, pH, viscosity, sperm concentration, morphology, motility and agglutination with anti-sperm antibody binding testing where appropriate.
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
            We will assess your sample according to the World Health Organisation WHO recommended standards and create a written report with your test results.
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
            We will organise a private consultation by telephone and give you a step by step explanation of your results.
          </p>
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
</style>
