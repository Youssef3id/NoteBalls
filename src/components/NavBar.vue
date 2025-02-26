<template>
  <nav class="bg-[#48c78e] text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <span class="text-2xl font-bold">Note Balls</span>

      <ul class="md:flex space-x-6">
        <li>
          <RouterLink to="/" class="hover:bg-[#3abb81] px-4 py-5"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/stats" class="hover:bg-[#3abb81] px-4 py-5"
            >Stats</RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
