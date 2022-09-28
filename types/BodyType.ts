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
  data: {
    value: {
      accessToken: string;
      user: UserType;
    };
  };
}
export interface ListBody {
  data: {
    value: {
      page: number;
      per_page: number;
      total: number;
      total_pages: number;
      dataList: ItemType[];
    };
  };
}

export interface AttractionBody {
  data: {
    value: {
      ItemType;
    };
  };
}
