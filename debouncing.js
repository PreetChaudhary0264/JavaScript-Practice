function debounce(func, delay){
    let timer;
    return function (){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            func();
        },delay)
    }
}

function dummy (){
    console.log("Hi")
}

const ans = debounce(dummy,500)
ans()

function throttlingEx(func,limit){
    let run = true;
    return ()=> {
        if(run){
            func()
            run = false;
            setTimeout(()=> run = true,limit)
        }
    }
}

const thr = throttlingEx(()=>{
    console.log("scrolling")
},500)

thr()


