<script setup lang="ts">
import { Header } from "@/components";
import { useTaskStore } from "@/stores"

const taskStore = useTaskStore()
taskStore.fetchTaskList()
</script>

<template>
  <div>
    <Header></Header>
    <div class="app-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  width: 90%;
  margin: auto;
  height: calc(100vh - 5rem);
  margin-top: 5rem;
}
</style>
