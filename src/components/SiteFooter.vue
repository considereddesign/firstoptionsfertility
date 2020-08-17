<template>
  <div class="container">
    <div class="grid sm:grid-cols-1 lg:grid-cols-4 gap-4 mt-10 mb-32">

      <div class="mt-8 mr-8">
        <img src="@/assets/images/firstoptionsfertility-logo.svg"/>
        <p class="text-navy-400 mt-4 mr-4 text-sm">
          We’ll set you on the correct path to taking control of your fertility.
        </p>
        <p class="text-navy-300 mt-8 mr-4 text-xs">
          FirstOptionsFertility © 2020
        </p>
        <p class="text-navy-300 mt-2 mr-4 text-xs">
          Designed by <a href="https://emmacarberry.com" target="_blank">Emma Carberry</a>
        </p>
      </div>

      <div class="mt-8">
        <h6 class="md:ml-2 mb-4 pb-2 border-b-2 border-gray-100">Sitemap</h6>
        <ul>
          <li><a class="text-sm rounded py-1 px-2 hover:bg-gray-100 block" href="#why-us" rel="noopener">Why us</a></li>
          <li><a class="text-sm rounded py-1 px-2 hover:bg-gray-100 block" href="#how-it-works" rel="noopener">How it works</a></li>
          <li><a class="text-sm rounded py-1 px-2 hover:bg-gray-100 block" href="#costs" rel="noopener">Costs</a></li>
          <li><a class="text-sm rounded py-1 px-2 hover:bg-gray-100 block" href="#contact" rel="noopener">Contact</a></li>
        </ul>
      </div>

      <div class="mt-8">
        <h6 class="md:ml-2 mb-4 pb-2 border-b-2 border-gray-100">Company</h6>
        <ul>
          <li>
            <a class="text-sm rounded py-1 px-2 hover:bg-gray-100 block" href="mailto:firstoptionsfertility@gmail.ie" target="_blank" rel="noopener">
              Email us
            </a>
          </li>

          <li>
            <router-link
              class="text-sm rounded py-1 px-2 hover:bg-gray-100 block"
              to="/terms-privacy"
            >
              Terms & Privacy
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li>
            <a class="text-sm rounded py-1 px-2 hover:bg-gray-100 block" href="javascript:window.Metomic('ConsentManager:show')">Manage cookies</a>
          </li>
        </ul>
      </div>

      <div class="mt-8">
        <h6 class="ml-2 mb-4 pb-2 border-b-2 border-gray-100">Follow</h6>
        <ul class="flex">
          <li>
            <a
              class="h-10 w-10 mr-2 rounded-full p-2 flex align-center justify-center bg-gray-100 hover:bg-gray-100 block"
              href="https://www.instagram.com/firstoptionsfertility/"
              rel="noopener"
              target="_blank"
            >
              <img src="@/assets/images/icons/instagram.svg" alt="Instagram Logo"/>
            </a>
          </li>
          <li>
            <a
              class="h-10 w-10 mr-2 rounded-full p-2 flex align-center justify-center bg-gray-100 hover:bg-gray-100 block"
              href="https://twitter.com/first_options"
              rel="noopener"
              target="_blank"
            >
              <img src="@/assets/images/icons/twitter.svg" alt="Twitter Logo"/>
            </a>
          </li>
          <li>
            <a
              class="h-10 w-10 mr-2 rounded-full p-2 flex align-center justify-center bg-gray-100 hover:bg-gray-100 block"
              href="https://www.facebook.com/firstoptionsfertility.firstoptionsfertility.9"
              rel="noopener"
              target="_blank"
            >
              <img src="@/assets/images/icons/facebook.svg" alt="Facebook Logo"/>
            </a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteFooter',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
