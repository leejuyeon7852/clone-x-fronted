<template>
  <div class="feed-list-container">
    <div class="feed-container" v-for="feed in feeds" :key="feed.id">
        <div class="feed-header">
            <div class="feed-content">{{ feed.content }}</div>
            <button class="feed-delete-button">X</button>
        </div>
        <div class="feed-name">{{ feed.user.name }}</div>
    </div>
  </div>
</template>

<script>
import { useFeedStore } from '@/store/feed';

export default {
    name: "FeedList",
    data(){
        return{
            feedStore: useFeedStore()
        };
    },
    computed: {
        feeds() {
            return this.feedStore.feedData
        },
    },
}

</script>

<style>
.feed-list-container {
  height: 60vh;
  overflow-y: auto;
}

.feed-container {
  height: 80px; /* 고정 높이 설정 */
  background-color: white;
  margin: 10px 0px;
  color: black;
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
}

.feed-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.feed-content {
  padding: 1%;
}

.feed-delete-button {
  background: none;
  border: none;
  cursor: pointer;
}

.feed-name {
  text-align: right;
  font-size: 12px;
}
</style>