// will use to create the buttons for the joke generation

import {gatherData, getData, jokeTypeList, jokeTypeSet, jokeTypes }from "/modules/Module1.js";// importing from API file

async function loadData(){
    await getData();
console.log(jokeTypes)

let buttontype1 = document.createElement('button')
buttontype1.textContent=`${jokeTypes[0]}`
document.body.appendChild(buttontype1)

let buttontype2 = document.createElement('button')
buttontype2.textContent=`${jokeTypes[1]}`
document.body.appendChild(buttontype2)

let buttontype3 = document.createElement('button')
buttontype3.textContent=`${jokeTypes[2]}`
document.body.appendChild(buttontype3)

if (jokeTypes[1] === undefined ){
    document.body.removeChild(buttontype2)
}
if (jokeTypes[2] === undefined ){
    document.body.removeChild(buttontype3)
}


}
loadData()

