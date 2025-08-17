<template>
  <div>
    <button @click="fruitStore.removeFirstItem">removeFirstItem</button>
    <button @click="fruitStore.removeLastItem">removeLastItem</button>
    <ul>
      <ItemComponent v-for="item in fruitStore.fruitList" :key="item.id" :item="item"/>
    </ul>
  </div>
  <div>
    getFruitListLength: {{ fruitStore.getFruitListLength }}
    getFruitByNameWithA: {{ fruitStore.getFruitByNameWithA }}
  </div>
</template>

<script>
import ItemComponent from '@/components/ItemComponent.vue';
import { useFruitStore } from '@/store/fruit';

export default {
    name: "DemoPage",
    data() {
      return {
        fruitStore: useFruitStore()
      };
    },
    components: {
      ItemComponent,
    },
};
</script>

<style>

</style>