<template>
  <button @click="clickButton">자식이 만든 버튼입니다.</button>
</template>

<script>
export default {
    name: "EmitChildComponent",
    emits: ["clickChildButton"],
    methods: {
        clickButton(){
            //이벤트를 부모에게 보내야합니다.
            //emit
            this.$emit("clickChildButton", "자식 emit 이벤트 발생") //뒤에 데이터도 같이 날라간다
        },
    },
}
</script>

<style>

</style>