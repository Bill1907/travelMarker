import { checkAvailableToken, useAuthCookie } from "~/composables/useAuth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = useAuthCookie();
  const result = await checkAvailableToken();
  if (result) {
    return;
  }
  if (!token || !result) {
    return navigateTo("/login");
  }
});
