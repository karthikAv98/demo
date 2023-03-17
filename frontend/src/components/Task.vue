<script setup lang="ts">
const {created_date, due_date, task} = defineProps({
    created_date: {
        type: String,
        required: true
    },
    due_date: {
        type: String,
        required: true
    },
    task: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="task-container rounded shadow">
        <div class="mx-3">
            <div class="row">
                <div class="col">
                    <h4 class="mt-3">Created at: {{ created_date }}</h4>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col">
                    <h2>{{ task }}</h2>
                </div>
            </div>
        </div>
        <div class="due-section">
            <p>{{ due_date }}</p>
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