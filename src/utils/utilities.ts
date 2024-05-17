export const debounce=(func:any,delay:number)=>{
    let timeoutId;
    return(...args)=>{
        clearTimeout(timeoutId)
        timeoutId = setTimeout(()=>{
            func.apply(this,args)
        },delay)
    }
}