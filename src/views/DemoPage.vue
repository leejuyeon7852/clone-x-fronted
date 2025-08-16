<template>
  <div>
    <button @click="removeFirstItem">removeFirstItem</button>
    <button @click="removeLastItem">removeLastItem</button>
    <ul>
      <ItemComponent v-for="item in items" :key="item.id" :item="item"/>
    </ul>
  </div>
</template>

<script>
import ItemComponent from '@/components/ItemComponent.vue';

export default {
    name: "DemoPage",
    data() {
      return {
        items: [
          {id:1, name:"Apple"},
          {id:2, name:"Banana"},
          {id:3, name:"Orange"},
          {id:4, name:"Data"},
          {id:5, name:"Elderberry"},
        ]
      };
    },
    components: {
      ItemComponent,
    },
    methods: {
      removeFirstItem(){
        this.items.shift();
      },
      removeLastItem(){
        this.items.pop();
      }
    }    
};
</script>

<style>

</style>