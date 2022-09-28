import { defineStore } from "pinia";
import { useFetch } from "#app";
import { ItemType } from "~/types/ItemType";
import { AttractionBody, ListBody } from "~/types/BodyType";

interface itemStateType {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  dataList: ItemType[] | null;
  attraction: ItemType | null;
}

export const useItemStore = defineStore("item", {
  state: (): itemStateType => {
    return {
      page: -1,
      per_page: -1,
      total: -1,
      total_pages: -1,
      dataList: null,
      attraction: null,
    };
  },
  actions: {
    setPage(page) {
      this.page = page;
    },
    setPerPage(per_page) {
      this.per_page = per_page;
    },
    setTotal(total) {
      this.total = total;
    },
    setTotalPages(total_pages) {
      this.total_pages = total_pages;
    },
    setItemList(dataList) {
      this.dataList = dataList;
    },
    setAttraction(attraction) {
      this.attraction = attraction;
    },
    async requestItemList(token: string, page: number, per_page: number) {
      try {
        console.log(
          `https://www.mecallapi.com/api/attractions?page=${page}&per_page=${per_page}`
        );
        const { data } = await useFetch<Promise<ListBody>>(
          `https://www.mecallapi.com/api/attractions?page=${page}&per_page=${per_page}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        this.setPage(data.value.page);
        this.setPerPage(data.value.per_page);
        this.setTotal(data.value.total);
        this.setTotalPages(data.value.total_pages);
        this.setItemList(data.value.data);
      } catch (e) {
        console.log(e);
      }
    },
    async requestAttractionDetail(token: string, id: string | string[]) {
      try {
        const { data } = await useFetch<Promise<AttractionBody>>(
          `https://www.mecallapi.com/api/attractions/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.setAttraction(data.value.attraction);
      } catch (e) {
        console.log(e);
      }
    },
  },
});
