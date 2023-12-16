import { dialogReducer } from "./redux/Dialog-Reducer";
import { profileReducer } from "./redux/Profile-Reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    caption: 'How are you?',
                    likesCount: 11,
                },
                {
                    id: 2,
                    caption: 'Надпись 2',
                    likesCount: 7,
                },
                {
                    id: 2,
                    caption: 'надпись 3',
                    likesCount: 4,
                },
            ],
            textareaPosts: ''
        },
        dialogPage: {
            messages: [
                { 
                    id: 1,
                    message: 'Hellow',
                    sideId: 1
                },
                {
                    id: 2,
                    message: 'how are you?',
                    sideId: 2
                },
                {
                    id: 3,
                    message: 'dafdsaf3',
                    sideId: 1
                }
            ],
            dialogs: [
                {
                    id: 1,
                    name: 'Valera'
                },
                {
                    id: 2,
                    name: 'Oleg'
                },
                {
                    id: 3,
                    name: 'Mihail'
                },
                {
                    id: 4,
                    name: 'Nosik'
                },
            ],
            textareaMessages: ''
        }
        
    },
    getState(){
        return this._state
    },
    render(){},
    renderObserver(item){
        this.render = item
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage,action)
        this.render()
    }
}
export default store;
 







