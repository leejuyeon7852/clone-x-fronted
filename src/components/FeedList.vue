<template>
    <div class="feed-list-container">
      <FeedItem
        v-for="feed in feeds"
        :key="feed.id"
        :feed="feed"
      />
    </div>
  </template>
  
  <script>
  import { useFeedStore } from '@/store/feed'
  import FeedItem from '@/components/FeedItem.vue' // ← 이름 통일
  
  export default {
    name: 'FeedList',
    components: { FeedItem },
    data() {
      return { feedStore: useFeedStore() }
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
  </style>
  