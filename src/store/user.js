import {defineStore} from 'pinia'

export const useUserStore = defineStore('user',{
    state: () => ({
        currentUserId: 1,
        userList: [
            { id:1, name:"이주연" },
            { id:2, name:"user" },
            { id:3, name:"홍길동" },
            { id:4, name:"lee" },
            { id:5, name:"김유저" },
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
