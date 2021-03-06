import {rerenderEntireTree} from '../render';

type PostDataType = {
    id: number
    message: string
    likesCount: number
}
type DialogsDataType = {
    id: string
    name: string
}
type MessagesData = {
    id: number
    message: string
}
type ProfilePageType = {
    posts: Array<PostDataType>
    newPostText:string
}
type MessagesPageType = {
    dialogs: Array<DialogsDataType>
    messages: Array<MessagesData>
}
type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'How is your it-kamasutra', likesCount: 15},
            {id: 3, message: 'First post', likesCount: 25},
        ],
        newPostText: 'it-kamasutra.com'
    },
    messagesPage: {
        dialogs: [
            {id: '1', name: 'Dimych'},
            {id: '2', name: 'Andrew'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'},
        ],
    }
}

export const addPost = () => {
    const newPost = {
        id:5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText:string)=>{
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export default state
