<template>
    <div>
        <div class="title-container">
            <h1>Home</h1>
            <div>User님</div>
        </div>
        <TweetBar/>
        <FeedList/>
    </div>
</template>

<script>
import TweetBar from '@/components/TweetBar.vue';
import FeedList from '@/components/FeedList.vue';

export default {
    name: "MainPage",
    components: {
        FeedList,
        TweetBar,
    }
}
</script>

<style scoped>
.title-container {
    width: 300px;
    display:flex;
    justify-content: space-between;
    align-items: center;
}
</style>