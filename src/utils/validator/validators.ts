export type ValidatorsRequiredType = (value: string) => string | undefined

export const requeiredField: ValidatorsRequiredType = (value) => {
    if (value) {
        return undefined
    }
    return 'Field is required'
}

export const maxLengthCreator = (maxLength: number): ValidatorsRequiredType => (value: string) => {   
    if (value) {
        if (value.length > maxLength) {
            return `Max length is ${maxLength}`
        }
        return undefined
    } 
}