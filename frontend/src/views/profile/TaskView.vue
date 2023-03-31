<script setup lang="ts">
import { TaskComp } from "@/components"
import { ref, computed } from 'vue';
import type { TaskType } from "@/type"
import { useTaskStore } from "@/stores";

const taskStore = useTaskStore();

const title = ref("My Tasks")
const task_list = ref(<TaskType[]>taskStore.task_list)

const filter = ref("")

const filtered_task_list = computed(() => {
  if(filter.value != "") {
    return task_list.value.filter((task) => {
      return task.task.toLowerCase().includes(filter.value.toLowerCase())
    })
  } else {
    return task_list.value
  }
  
})
</script>

<template>
  <div class="home-view">
    <div class="row">
      <div class="col">
        <div class="title">
          {{ title }}
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <label class="me-2 filter-label" for="taskfilter">Filter</label>
        <input id="taskfilter" v-model="filter" type="text" placeholder="Enter task name">
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <div class="d-flex flex-wrap gap-5">
          <div v-for="(task, index) in filtered_task_list" :key="index">
            <TaskComp :detail="task"></TaskComp>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter-label {
  color: rgb(156, 156, 156);
  font-size: 20px;
}
#taskfilter:focus, #taskfilter:active {
  outline: none;
}
#taskfilter {
  outline: none;
  padding-left: 10px;
  padding: 8px 16px;
  border: 1px solid lightgray;
}
.title {
  font-size: 32px;
  font-weight: 500;
}
.home-view {
  width: 100%;
  height: 100%;
}
</style>