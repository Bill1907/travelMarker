<script setup>
import ItemComponent from "../components/AttractionComponent";
import { useItemStore } from "../stores/useItemStore";
import { useAuthCookie } from "../composables/useAuth";

useHead({
  title: "List",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    { name: "contents List", content: "여행지 콘텐츠 리스트 페이지입니다." },
  ],
});

definePageMeta({
  layout: "default",
  middleware: "auth",
});

const token = useAuthCookie().value;
const itemStore = useItemStore();
itemStore.requestItemList(token, 1, 10);

const onClickNavigatorButton = async (page) => {
  await itemStore.requestItemList(token, page, itemStore.per_page);
};
</script>

<template>
  <div>
    <NuxtLayout>
      <div v-if="itemStore.dataList" class="list-wrapper">
        <div v-for="item of itemStore.dataList" class="item-wrapper">
          <NuxtLink :to="`posts/${item.id}`">
            <ItemComponent :item="item" />
          </NuxtLink>
        </div>
      </div>
      <template v-slot:navigator v-if="itemStore.total_pages > 0">
        <div class="navigator">
          <button
            v-for="index in itemStore.total_pages"
            :key="`navigator_${index}`"
            @click="onClickNavigatorButton(index)"
          >
            {{ index }}
          </button>
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>

<style>
.list-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2vw;
}
.home-btn {
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
}

.user-info {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 5px;
  height: 100%;
  width: 100%;
}
.user-info img {
  height: 100%;
}
.item-wrapper {
  display: flex;
  flex-direction: column;
}
.navigator {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
