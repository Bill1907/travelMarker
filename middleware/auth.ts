import { checkAvailableToken, useAuthCookie } from "~/composables/useAuth";
import { useUserStore } from "~/stores/useUserStore";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();
  const token = useAuthCookie();
  const result = await checkAvailableToken();
  if (result) {
    userStore.user = result.user;
  }
  if (!token || !result) {
    return navigateTo("/login");
  }
});
