import { WrappedFieldProps } from 'redux-form'
import './FormControls.css'

export const Textarea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className = { hasError ? 'form-control error' : 'form-control'}>
            <textarea {...input} {...props} />
            { hasError && <span className = {'error-messege'} >{meta.error}</span>}  
        </div>
    )
}
export const Input: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className = { hasError ? 'form-control error' : 'form-control'}>
            <input {...input} {...props} />
            { hasError && <span className = {'error-messege'} >{meta.error}</span>}  
        </div>
    )
}