<template>
  <div class="flex h-screen w-full overflow-hidden">
    <!-- Sidebar -->
    <aside :class="[
      'bg-white shadow-md transition-all duration-300 ease-in-out',
      isSidebarOpen ? 'w-64' : 'w-16'
    ]">
      <div v-if="isSidebarOpen" class="p-4">
        <img src="../src/assets/vue.svg" alt="Logo" class="h-8 w-auto">
      </div>
      <nav class="mt-5">
        <template v-if="isSidebarOpen">
          <router-link 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path" 
            class="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200" 
            :class="{ 'bg-gray-200': $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </template>
        <div v-else class="flex flex-col items-center">
          <button
            v-for="item in navItems"
            :key="item.path"
            @click="navigateTo(item.path)"
            class="p-2 mb-2 text-gray-700 hover:bg-gray-200 rounded-full"
            :class="{ 'bg-gray-200': $route.path === item.path }"
          >
            {{ item.name[0] }}
          </button>
        </div>
      </nav>
    </aside>

    <!-- Main content -->
    <main class="flex-1 flex flex-col overflow-hidden">
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div class="flex items-center">
            <button @click="toggleSidebar" class="mr-4 text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 class="text-2xl font-semibold text-gray-900">{{ pageTitle }}</h1>
          </div>
          <div class="flex items-center">
            <button class="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="sr-only">View notifications</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <img class="ml-4 h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar">
          </div>
        </div>
      </header>
      <div class="flex-1 overflow-y-auto">
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <router-view></router-view>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const isSidebarOpen = ref(true)

    const navItems = [
      { name: 'Dashboard', path: '/' },
      { name: 'Profile', path: '/profile' },
      { name: 'Recommendations', path: '/recommendations' },
      { name: 'Survey', path: '/survey' },
      { name: 'Courses', path: '/courses' },
    ]

    const pageTitle = computed(() => {
      const currentRoute = navItems.find(item => item.path === route.path)
      return currentRoute ? currentRoute.name : ''
    })

    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value
    }

    const navigateTo = (path) => {
      router.push(path)
      if (!isSidebarOpen.value) {
        isSidebarOpen.value = true
      }
    }

    return {
      navItems,
      pageTitle,
      isSidebarOpen,
      toggleSidebar,
      navigateTo
    }
  }
}
</script>

