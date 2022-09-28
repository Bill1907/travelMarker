import { clearError, useCookie, useFetch } from "#app";
import { UserType } from "~/types/UserType";
import { LoginBody, AuthBody } from "~/types/BodyType";

export const useAuthCookie = () => useCookie("token");

export async function checkAvailableToken() {
  const router = useRouter();
  const config = useRuntimeConfig();
  const token = useAuthCookie().value;
  const { data, error } = await useFetch<Promise<AuthBody>>(
    `${config.API_URL}/auth/user`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (error.value) {
    router.push("/login");
  }

  return data.value;
}

export async function login(
  id: string,
  password: string
): Promise<UserType | {}> {
  console.log(id, password);
  const config = useRuntimeConfig();
  const { data, error } = await useFetch<Promise<LoginBody>>(
    `${config.API_URL}/login`,
    {
      method: "POST",
      body: {
        username: id,
        password,
      },
    }
  );
  console.log(data, error);
  if (error.value) {
    await clearError({ redirect: "/login" });
    window.alert("로그인 실패했습니다.");
    return;
  }

  const { accessToken, user } = data.value;
  const token = useCookie("token");
  token.value = accessToken.toString();
  return user;
}
