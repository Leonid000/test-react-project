
export const requiredField = (value) => {
   if(value) return undefined
   else return 'no-letters'
} 

export const maxLength_creator = (max) => (value) => {
    if(value && value.length + 1 > max) return 'to-length'
    else return undefined
}