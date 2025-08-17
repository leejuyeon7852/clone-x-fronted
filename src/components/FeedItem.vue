<template>
    <div class="feed-container">
      <div class="feed-header">
        <div class="feed-content">{{ feed.content }}</div>
        <button
          class="feed-delete-button"
          v-if="canDelete"
          @click="handleClick"
        >
          X
        </button>
      </div>
      <div class="feed-name">{{ feed.user.name }}</div>
    </div>
  </template>
  
  <script>
  import { useFeedStore } from '@/store/feed'
  import { useUserStore } from '@/store/user'
  
  export default {
    name: 'FeedItem',
    props: {
      feed: { type: Object, required: true }
    },
    data() {
      return {
        feedStore: useFeedStore(),
        userStore: useUserStore(),
      }
    },
    computed: {
      // 현재 유저만 삭제 버튼 보이게
      canDelete() {
        return this.userStore.currentUserId === this.feed.user.id
      }
    },
    methods: {
      handleClick() {
        // this.$confirm 플러그인 있으면 사용, 없으면 window.confirm 폴백
        const ask = this.$confirm
          ? new Promise(res => {
              this.$confirm({
                message: '정말 삭제하시겠습니까?',
                button: { no: '아뇨', yes: '네' },
                callback: res
              })
            })
          : Promise.resolve(window.confirm('정말 삭제하시겠습니까?'))
  
        ask.then((ok) => {
          if (ok) this.feedStore.removeFeed(this.feed.id)
        })
      }
    }
  }
  </script>
  
  <style scoped>
  .feed-container {
    height: 80px;
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
    align-items: center;
    justify-content: space-between;
  }
  .feed-content { padding: 1%; }
  .feed-delete-button { background: none; border: none; cursor: pointer; }
  .feed-name { text-align: right; font-size: 12px; }
  </style>
  