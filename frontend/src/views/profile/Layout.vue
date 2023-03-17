<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

if(route.path == "/profile") router.push("/profile/task")
</script>

<template>
    <div class="profile-container">
        <router-view></router-view>
    </div>
</template>

<style scoped>
.profile-container {
    height: 200vh;
}
</style>