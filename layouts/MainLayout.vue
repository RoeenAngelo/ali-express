<script setup>

import { useUserStore } from '~/stores/userStore'

const userStore = useUserStore()

const isAccountMenu = ref(false)
const searchItem = ref('')
const isSearching = ref(false)
const isCartHover = ref(false)


</script>

<template>

  <div id="MainLayout" class="w-full fixed z-50">

    <!-- Nav -->

    <Nav />

    <div id="MainHeader" class="flex items-center w-full bg-white">
      <div class="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto">
        <NuxtLink to="/" class="min-w-[170px]">
          <img width="170" src="AliExpress-logo.png">
        </NuxtLink>

        <!-- Search Bar -->

        <div class="max-w-[700px] w-full md:block hidden">
            <div class="relative">
                <div class="flex items-center border-2 border-[#FF4646] rounded-md w-full">
                    <input 
                        class="
                            w-full
                            placeholder-gray-400
                            text-sm
                            pl-3
                            focus:outline-none
                        "
                        placeholder="sports equipment"
                        type="text"
                        v-model="searchItem"
                    >
                    <Icon 
                        v-if="isSearching" 
                        name="eos-icons:loading" 
                        size="25" 
                        class="mr-2"
                    />
                    <button class="flex items-center h-[100%] p-1.5 px-2 bg-[#FF4646]">
                        <Icon name="ph:magnifying-glass" size="20" color="#ffffff"/>
                    </button>
                </div>
                
                <!-- Search Result Drop Down -->

                <div class="absolute bg-white max-w-[700px] h-auto w-full">
                    <div 
                        v-if="false"
                        class="p-1"
                    >
                      <NuxtLink 
                          to="`/item/1`" 
                          class="flex items-center justify-between w-full cursor-pointer hover:bg-gray-100"
                      >
                          <div class="flex items-center">
                              <img class="rounded-md" width="40" src="https://picsum.photos/id/82/300/300">
                              <div class="truncate ml-2">Testing</div>
                          </div>
                          <div class="truncate">$ 99.99</div>
                      </NuxtLink>
                    </div>
                </div>
            </div>
        </div>

        <!-- Shopping Cart -->

        <NuxtLink 
            to="/shoppingcart"
            class="flex items-center"
        >
            <button 
                class="relative md:block hidden"
                @mouseenter="isCartHover = true"
                @mouseleave="isCartHover = false"
            >
                <span 
                    class="
                        absolute 
                        flex 
                        items-center 
                        justify-center 
                        -right-[3px] 
                        top-0 
                        bg-[#FF4646] 
                        h-[17px] 
                        min-w-[17px] 
                        text-xs 
                        text-white
                        px-0.5 
                        rounded-full
                    "
                >
                    0
                </span>
                <div class="min-w-[40px]">
                    <Icon 
                        name="ph:shopping-cart-simple-light" 
                        size="33" 
                        :color="isCartHover ? '#FF4646' : ''"
                    />
                </div>
            </button>
        </NuxtLink>

        <!-- Hamburger Menu -->
        <button 
            @click="userStore.isMenuOverlay = true"
            class="md:hidden block rounded-full p-1.5 -mt-[4px] hover:bg-gray-200"
        >
            <Icon name="radix-icons:hamburger-menu" size="33" />
        </button>        
      </div>
    </div>
  </div>

  <!-- Loading Component -->
  <Loading v-if="userStore.isLoading" />

  <div class="lg:pt-[150px] md:pt-[130px] pt-[80px]" />
  <slot />

  <!-- Footer -->
  <Footer v-if="!userStore.isLoading" />
  
</template>

