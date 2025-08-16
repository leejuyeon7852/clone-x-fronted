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
export default {
    name: "FeedList",
    data(){
        return{
            feeds: []
        };
    },
    created(){
        this.feeds = testData;
    }
}
const testData = [
    {
        id: 11,
        content: "코딩은 재밌어!",
        user: {
            id: 12,
            name: "테스터"
        }
    },
    {
        id: 10,
        content: "JS 디버깅 중…",
        user: {
            id: 12,
            name: "테스터"
        }
    },
    {
        id: 9,
        content: "커피 한 잔의 여유...",
        user: {
            id: 13,
            name: "다미장"
        }
    },
    {
        id: 6,
        content: "주말에 드라마 몰아보기",
        user: {
            id: 13,
            name: "다미장"
        }
    },
    {
        id: 5,
        content: "우리 집 강아지 너무 귀여워",
        user: {
            id: 13,
            name: "다미장"
        }
    },
    {
        id: 4,
        content: "2025년에는 꼭 운동한다!",
        user: {
            id: 11,
            name: "user"
        }
    },
    {
        id: 3,
        content: "디버깅만 몇 시간째…",
        user: {
            id: 11,
            name: "user"
        }
    },
    {
        id: 2,
        content: "아침 커피로 하루 시작",
        user: {
            id: 11,
            name: "user"
        }
    },
    {
        id: 1,
        content: "오늘도 멋진 하루 되세요!",
        user: {
            id: 11,
            name: "user"
        }
    }
]
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