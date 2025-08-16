<template>
   <div>
    <p>index: {{ index }}</p>
    <p>상품 가격: {{ price }}</p>
    <p>할인율: {{ discountRate }}</p>
    <p>computed로 계산한 최종 가격: {{ finalPrice }}</p>
    <p>method로 계산한 최종 가격: {{ calculateFinalPrice() }}</p>
    <div>
      <button @click="updatePrice">updatePrice</button>
    </div>
    <div>
      <button @click="updateDiscountRate">updateDiscountRate</button>
    </div>
    <div>
      <button @click="updateIndex">updateIndex</button>
    </div>
 </div>
</template>

<script>
export default {
    name: "DemoPage",
     data() {
      return {
        index: 0,
        price: 10000,
        discountRate: 0.1
      };
    },
    computed: {
      finalPrice() {
        console.log("computed!!");
        return this.price * (1 - this.discountRate);
      }
    },
    methods: {
      updatePrice(){
        this.price = this.price+1;
      },
      updateDiscountRate(){
        this.discountRate = this.discountRate+0.1;
      },
      updateIndex(){
        this.index = this.index+1;
      },
      calculateFinalPrice() {
        console.log("method")
        return this.price * (1 - this.discountRate);
      }
    }
};
</script>

<style>

</style>