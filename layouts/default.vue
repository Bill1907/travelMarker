<script setup lang="ts">
import { useUserStore } from "~/stores/useUserStore";

const router = useRouter();
const { user } = useUserStore();
function onHomeButton() {
  router.push("/");
}
</script>

<template>
  <div class="app">
    <header>
      <div class="home-btn" @click="onHomeButton">
        <span>Home</span>
      </div>
      <div class="user-info">
        <span>{{ user.fname }}</span>
        <span>{{ user.lname }}</span>
        <img :src="user.avatar" alt="" />
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="navigator" />
    </footer>
  </div>
</template>

<style>
.app {
  width: 100vw;
  height: 100vh;
}
header {
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding: 20px;
}
main {
  width: 100%;
  padding: 20px;
}
</style>
