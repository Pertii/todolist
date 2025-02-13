<template>
  <div class="app-layout">
    <Sidebar />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
</script>

<style scoped>
.app-layout {
  display: flex;
}

main {
  flex-grow: 1;
  padding: 20px;
}
</style>
