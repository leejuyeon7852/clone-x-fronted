<template>
  <div class="feed-container">
    <div class="feed-header">
      <div class="feed-content">{{ feed.content }}</div>
      <button class="feed-delete-button" @click="handleClick(feed)" v-if="feed.user.id === userStore.id">X</button>
    </div>
    <div class="feed-name">{{ feed.user.name }}</div>
  </div>
</template>
<script>
import { useFeedStore } from '@/store/feed'
import { useUserStore } from '@/store/user'
export default {
  data() {
      return {
          feedStore :useFeedStore(),
          userStore : useUserStore()
      }
  },
  props: {
      feed: {
          type: Object,
          required: true
      }
  },
  methods: {
      handleClick(feed){
          this.$confirm(
              {
              message: '정말 삭제하시겠습니까?',
              button: {
                  no: '아뇨',
                  yes: '네'
              },
              callback: confirm => {
                  if (confirm) {
                      this.feedStore.removeFeed(feed.id)
                  }
              }
              }
          )
      }
  },
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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.feed-content {
  padding: 1%;
}

.feed-delete-button {
  background:none;
  border: none;
  cursor: pointer;
}

.feed-name {
  text-align: right;
  font-size: 12px;
}
</style>