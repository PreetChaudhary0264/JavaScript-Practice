function throttle(func,limit){
   let run = true;
   return ()=>{
       if(run){
           func();
           run = false;
           setTimeout(()=>run = true,limit)
       }
   }
}

const thr = throttle(()=>{
    console.log("Scrolling");
},500)