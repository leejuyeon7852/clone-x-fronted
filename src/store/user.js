import {defineStore} from 'pinia'

export const useUserStore = defineStore('user',{
    state: () => ({
        currentUserId: 11,
        userList: [
            { id:11, name:"user" },
            { id:12, name:"테스터" },
            { id:13, name:"다미장" },
        ]
    }),
    getters: {
        getUsername: (state) => {
            const u = state.userList.find(u => u.id === state.currentUserId)
            return u ? u.name : 'User'
        },
        getUserListLength: (state) => state.userList.length
    }
})
