<template>
  <div>{{ message }}</div>
  {{ toChild }}
</template>

<script>
export default {
    name: "PropsChildComponent",
    data(){
        return{
            message: "나는 자식 컴포넌트입니다."
        };
    },
    props: {
        toChild: String
    },
};
</script>

<style>

</style>