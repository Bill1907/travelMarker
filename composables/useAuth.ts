import { useCookie, useFetch } from "#app";
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
): Promise<{
  status: number;
  message: string;
  data: UserType;
}> {
  try {
    const config = useRuntimeConfig();
    //useFetch는 라이프 사이클 훅에서 사용
    const { accessToken, user } = await $fetch<Promise<LoginBody>>(
      `${config.API_URL}/login`,
      {
        method: "POST",
        body: {
          username: id,
          password,
        },
      }
    );

    const token = useCookie("token");
    token.value = accessToken.toString();
    return {
      status: 200,
      message: "ok",
      data: user,
    };
  } catch (error) {
    return {
      status: error.response.status,
      message: error.response._data.message,
      data: null,
    };
  }
}
