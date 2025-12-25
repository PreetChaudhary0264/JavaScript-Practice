const container = document.querySelector('ul');

{/* <ul>
    <li id="1">hi</li>
    <li id="2">hi</li>
    <li id="3">hi</li>
</ul> */}

container.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){           //tagName html ka tag return krta hai uppercase me
        console.log(`li ${FileList.dataset.id} is clicked`);  
    }
})

{/* <div>
    <button id="1"></button>
    <button id="1"></button>
    <button id="1"></button>
</div> */}

const arr = [1,2,3,4,5]
const arr2 = [1,2,3,4,5]
const arr3 = [1,2,3,4,5]
const ar4 = [1,2,3,4,5]

const con = document.querySelector('div')
con.addEventListener("click",(e)=>{
    const button = e.target.closest("botton")
    console.log(button.dataset.id);
})
