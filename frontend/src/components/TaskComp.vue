<script setup lang="ts">
import type { TaskType } from '@/type';
import type { PropType } from 'vue';
import { TaskPopup } from "@/components"
import { ref } from 'vue';

const { detail } = defineProps({
    detail: {
        type: Object as PropType<TaskType>,
        required: true
    },
})

const show_popup = ref(false)
</script>

<template>
    <TaskPopup @close="show_popup = false" v-if="show_popup"></TaskPopup>
    <div class="task-container rounded shadow" @click="show_popup = true">
        <div class="mx-3">
            <div class="row">
                <div class="col">
                    <h4 class="mt-3">Created at: {{ detail.created_date }}</h4>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col">
                    <h2>{{ detail.task }}</h2>
                </div>
            </div>
        </div>
        <div class="due-section">
            <p>{{ detail.due_date }}</p>
        </div>
    </div>
</template>

<style scoped>
.due-section {
    position: absolute;
    bottom: 0;
    right: 5%;
}
.task-container:hover {
    transform: scale(1.02);
    transition: transform 300ms ease-in-out;
}
.task-container {
    position: relative;
    width: 300px;
    height: 400px;
    cursor: pointer;
}
</style>