
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import React, {useRef} from 'react'
import { Navigate } from 'react-router-dom';



const DialogItem = (props) => {
    return (
       <NavLink to={`/dialogs/${props.id}`}>
            <div className={s.dialog}>
                {props.name}
            </div>
        </NavLink> 
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Textarea = (props) => {
    const textareaItem = useRef()

    const sendTextareaUpdate = () => {
        let text = textareaItem.current.value
        props.updateMessageWrapper(text)
        

    }
    const addText = () =>  {
       props.addMessageWrapper()
    }
    
    return (
        <div>
            <textarea onChange={sendTextareaUpdate} ref={textareaItem} className={s.textarea} value={props.textareaMessages}></textarea>
            <button onClick={addText} className={s.button}>Отправить</button>
        </div>
    )
}

const Dialogs = (props) => {
    
    
    let dialogsElements = props.dialogPage.dialogs.map(function(item){
        return (<DialogItem id={item.id} name={item.name} />)
    })

    let messagesElements = props.dialogPage.messages.map(function(item){
        return  <Message sideId={item.sideId} message={item.message} />
    })
    /////////////..........................................................
    let dialogsElement = useRef()
    let dialogsElementFuncPlus = () => {
        dialogsElement.current.className = 'Dialogs_dialogs__oJo4z Dialogs_active__KU5G8'
    }   
    let dialogsElementFuncMinus = () => {
        dialogsElement.current.className = 'Dialogs_dialogs__oJo4z'
    } 
    ////// Достаю элемент и пытаюсь поменять класс при событии
    return (
        <div className={s.dialogs_wrapper}>
            <div ref={dialogsElement} className={`${s.dialogs} ${s.active}`}>
               {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.div_textarea}>
                <Textarea
                    addMessageWrapper={props.addMessageWrapper}
                    updateMessageWrapper={props.updateMessageWrapper}
                    textareaMessages={props.dialogPage.textareaMessages}
                 />
            </div>
        </div>
    )
}

export default Dialogs;



