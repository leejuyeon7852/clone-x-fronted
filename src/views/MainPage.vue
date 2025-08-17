<template>
    <div>
        <div class="title-container">
            <h1>Home</h1>
            <div>{{ userStore.getUsername }}님</div>
        </div>
        <TweetBar/>
        <FeedList/>
    </div>
</template>

<script>
import TweetBar from '@/components/TweetBar.vue';
import FeedList from '@/components/FeedList.vue';
import { useUserStore } from '@/store/user';

export default {
    name: "MainPage",
    components: {
        FeedList,
        TweetBar,
    },
    data() {
        return{
            userStore: useUserStore()
        };
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