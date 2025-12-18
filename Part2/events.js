//type ,defaultprevented
//target,toElement,srcElment,currentTarget,
//clientX,clientY,screenX,screenY
//altkey,ctrlKey,shiftKey,keyCode

document.getElementById('myBtn').addEventListener('click', function(e){
    console.log('Button clicked')
    console.log('Event type:', e.type)
})

document.querySelector('.myDiv').addEventListener('click', function(e){
    console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
    
    let removeIt = e.target.parentNode;
    // removeIt.remove();
    removeIt.parentNode.removeChild(removeIt); 
    }
})


//javascript is synchronous and single threaded