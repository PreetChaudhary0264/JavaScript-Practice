document.getElementById('title').getAttribute('class')
document.getElementById('title').setAttribute('class','test')

title.style.backgroundColor = 'green'

title.innerText   //ye sirf visible content show krta hai
title.textContent  //ye saara content show krta hai(chahe wo hidden ho kisi ncss property se)
title.innerHTML // ye bhi text content ki tarah saara content show krta hai  bs ye elements bhi dikhata hai(ex->  hi <span> heelo</span>)

//Html collection and nodeList array nhi hote but array jaise hi hote hai

document.querySelector('.list-item') //ye hmesha first itel hi select krta hai..ise kisi variable me store krane ke baad or bhi kuch kr skte hai
document.querySelectorAll('.list-item') //ye hmesha ek nodelist return krta hai..jiske pass map function nhi hota for each hota hai
const temp = document.getElementsByClassName('.item-name') //ye hmesha html collections return krta hai jiske pass looping ka koi function nhi hota..isliye hme is e array me convert kr na hota hai

//array me convert krne ke liye Array.from(temp)

