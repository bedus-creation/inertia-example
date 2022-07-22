<template>
  <div>
    <slot />
    <div>
      <template v-if="modalComponent">
        <Suspense>
          <component :is="modalComponent" :props="modalProps" />
        </Suspense>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModal } from "../../scripts/modal";
const { modalComponent, modalProps } = useModal();
</script>
