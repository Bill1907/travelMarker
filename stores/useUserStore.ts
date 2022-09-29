import { defineStore } from "pinia";
import { UserType } from "~/types/UserType";

interface userStateType {
  user: UserType | {};
}
export const useUserStore = defineStore("user", {
  state: (): userStateType => {
    return {
      user: null,
    };
  },
  actions: {
    setUserInfo(user) {
      this.user = user;
    },
  },
});
