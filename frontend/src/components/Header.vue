<script setup lang="ts">
import { ref } from "vue";

const toggle_dropdown = ref(false);

function toggleDropdown() {
  toggle_dropdown.value = !toggle_dropdown.value;
}

function handleClickOutside() {
  toggle_dropdown.value = false
}
</script>

<template>
  <div class="header-section row g-0 shadow">
    <div class="col-1 d-flex justify-content-center align-items-center">
      <div class="title">My App</div>
    </div>
    <div class="col d-flex justify-content-center align-items-center mt-5">
      <router-link to="/">Home</router-link>
      <router-link to="/about" class="ms-2">About</router-link>
    </div>
    <div class="col-1 d-flex justify-content-center align-items-center">
      <div v-click-outside="handleClickOutside" class="profile-section">
        <div @click="toggleDropdown" class="profile-image"></div>
        <div v-show="toggle_dropdown" class="dropdown shadow"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-item:hover::after {
  transform: scale(1);
}
.nav-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  transform: scale(0);
  border-bottom: 1px solid #ffffff;
  transition: transform 0.3s ease-out;
}
.nav-item {
  cursor: pointer;
}
.dropdown {
  position: absolute;
  top: 120%;
  right: 0;
  width: 15rem;
  height: 10rem;
  background-color: #ffffff;
}
.profile-section {
  position: relative;
}
.profile-image {
  width: 3.5rem;
  height: 3.5rem;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
}
.title {
  font-weight: 700;
  font-size: 1.5rem;
}
.header-section {
  color: white;
  height: 5rem;
  width: 100%;
  background-color: rgb(26, 26, 26);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>
