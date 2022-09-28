<script setup lang="ts">
import AttractionComponent from "~/components/AttractionComponent";
import { useItemStore } from "~/stores/useItemStore";
import { useAuthCookie } from "~/composables/useAuth";
useHead({
  titleTemplate: (title) => `My App - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "app",
  },
});

const route = useRoute();
const itemStore = useItemStore();

definePageMeta({
  layout: "default",
  middleware: "auth",
});

itemStore.requestAttractionDetail(useAuthCookie().value, route.params.id);
</script>

<template>
  <NuxtLayout>
    <AttractionComponent
      v-if="itemStore.attraction"
      :item="itemStore.attraction"
    />
  </NuxtLayout>
</template>
