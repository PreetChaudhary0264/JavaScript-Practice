// const container = document.querySelector('ul');

{/* <ul>
    <li id="1">hi</li>
    <li id="2">hi</li>
    <li id="3">hi</li>
</ul> */}

// container.addEventListener("click",(e)=>{
//     if(e.target.tagName === "LI"){           //tagName html ka tag return krta hai uppercase me
//         console.log(`li ${FileList.dataset.id} is clicked`);  
//     }
// })

{/* <div>
    <button id="1"></button>
    <button id="1"></button>
    <button id="1"></button>
</div> */}

// const arr = [1,2,3,4,5]
// const arr2 = [1,2,3,4,5]
// const arr3 = [1,2,3,4,5]
// const ar4 = [1,2,3,4,5]
// const arr5 = [1,2,3,4,5]

// const con = document.querySelector('div')
// con.addEventListener("click",(e)=>{
//     const button = e.target.closest("botton")
//     console.log(button.dataset.id);
// })

function print(a,...nums){
    console.log(b);
}


function one(){
    console.log("This is first function");
    
}
function one(){
    console.log("This is second function");
    
}
one();

// function loadFilesDynamically(fileName,fileType){
//     let file;
//     if(fileType === "css"){
//         file = document.createElement("link")
//         file.setAttribute("type","css")
//         file.setAttribute("href",fileName)
//     }else if(fileType === "js"){
//         file = document.createElement("script")
//         file.setAttribute("type","javascript")
//         file.setAttribute("src",fileName)
//     }
//     if( typeof fileType != undefined){
//         document.getElementsByTagName("head")[0].appendChild(file);
//     }
// }


for(var i = 0; i < 4; i++){
    ;((x)=>{
        setTimeout(()=> console.log(x))
    })(i)
}

console.log(~~3.67);

const arr = [2,3,4]
var odd = (element) => element % 2 !== 0;
console.log(arr.some(odd));

const obj1 = {
    name:"preet"
}
const obj2 = structuredClone(obj1)
console.log(obj2);
