<script setup lang="ts">
import { useUserStore } from "~/stores/useUserStore";
import { login, useAuthCookie } from "~/composables/useAuth";
import { onMounted, ref } from "vue";

const router = useRouter();
const { setUserInfo } = useUserStore();

const id = ref<string>("karn.yong@mecallapi.com");
const password = ref<string>("mecallapi");

const onClickLoginButton = async () => {
  const { status, message, data } = await login(id.value, password.value);
  if (status > 200) {
    window.alert(message);
    return;
  }
  setUserInfo({ ...data });
  router.push("/");
};

onMounted(() => {
  useAuthCookie().value = "";
  setUserInfo(null);
});
</script>

<template>
  <div class="app">
    <div class="content-center">
      <div class="login-wrapper">
        <div>
          <span>ID</span>
          <input type="text" v-model="id" />
        </div>
        <div>
          <span>Password</span>
          <input type="password" v-model="password" />
        </div>
        <div>
          <button @click="onClickLoginButton">로그인</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.login-wrapper {
  padding: 30px;
  border: 3px solid #3e46ee;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.content-center {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
}
</style>
