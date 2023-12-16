

const Input_app = ({input,meta,...props}) => {
    const hasErrorNoLetters = meta.touched && meta.error
    return (
        <div className={`form_control_input ${hasErrorNoLetters && 'error'}`}>
            <span className="span_1">{meta.error}</span>
            <input {...props} {...input} type="text" />
        </div>
    )
}

export default Input_app;