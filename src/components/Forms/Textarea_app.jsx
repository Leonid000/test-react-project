

const Textarea_app = ({input, meta, ...props}) => {
    const hasErrorNoLetters = meta.touched && meta.error === 'no-letters'
    const hasErrorToLength = meta.touched && meta.error === 'to-length'
    
    return (
        <div className={`
            form_control
             ${hasErrorNoLetters && 'error'}
             ${hasErrorToLength && 'to'}
             `} >
            <span className="span_1">{meta.error}</span>
            <span className="span_2">{meta.error}</span>
            
            <textarea className="textarea_app" {...props} {...input} />
        </div>
    )
}

export default Textarea_app


