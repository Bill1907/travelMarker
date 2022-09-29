import { UserType } from "~/types/UserType";
import { ItemType } from "~/types/ItemType";

export interface AuthBody {
  data: {
    value: {
      user: UserType;
    };
  };
}

export interface LoginBody {
  accessToken: string;
  user: UserType;
}
export interface ListBody {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: ItemType[];
}

export interface AttractionBody {
  data: {
    value: {
      ItemType;
    };
  };
}
