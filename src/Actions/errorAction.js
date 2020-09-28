//this action is for changing the error state , an error occurs when one or many inputsare not valid

export const  errorAction = ()=>{

    return {
        type: "error"
    }
}
export const validAction = ()=>{

    return {
        type: "valid"
    }
}