const map = new Map()
map.set('1',"rahul")
map.set('2',"amit")  //keys unique rhti hai and jis order e value insert kroge usi order me rhti hai

for(const [key,val] of map){
    console.log(map,":-",val);
}