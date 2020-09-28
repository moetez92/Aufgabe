//the Loading action is for determinating whether the data are loaded or not

export const  loadingTrue = ()=>{

    return {
        type: "loading"
    }
}
export const loadingFalse = ()=>{

    return {
        type: "loaded"
    }
}