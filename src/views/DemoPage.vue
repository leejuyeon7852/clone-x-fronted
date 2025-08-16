<template>
  <div>
    <p>index: {{ index }}</p>
    <p>상품 가격: {{ price }}</p>
    <p>할인율: {{ discountRate }}</p>
    <p>최종 가격: {{ finalPrice }}</p>
  </div>
</template>

<script>
export default {
    name: "DemoPage",
    data(){
      return{
        index: 0,
        price: 10000,
        discountRate: 0.1
      };
    },
    computed: {
      finalPrice() {
        console.log("call finalPrice");
        return this.price * (1 - this.discountRate);
      }
    }
};
</script>

<style>

</style>