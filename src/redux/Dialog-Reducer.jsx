let initialState = {
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

export const dialogReducer = (dialogPage = initialState, action) => {
    if (action.type === 'ADD-MESSAGE') {
        let text = dialogPage.textareaMessages
        let newMessage = {
            id: 1,
            message: text,
            sideId: 1
        }
        let dialogPage_Copy = {...dialogPage};
        dialogPage_Copy.messages = [...dialogPage.messages]
        dialogPage_Copy.messages.push(newMessage)
        dialogPage_Copy.textareaMessages = ''
        return dialogPage_Copy
        

    }
    else if(action.type === 'UPDATE-MESSAGE'){
        let dialogPage_Copy = {...dialogPage}
        dialogPage_Copy.textareaMessages = action.text
        return dialogPage_Copy

        
    } 
    return dialogPage
}

