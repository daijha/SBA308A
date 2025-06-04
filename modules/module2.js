// will use to create the buttons for the joke generation

import {gatherData, getData, jokeTypeList, jokeTypeSet, jokeTypes }from "/modules/Module1.js";// importing from API file
import {styleButton} from "/modules/Module3.js";// importing from the style module

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

let buttontype4 = document.createElement('button')
buttontype4.textContent=`${jokeTypes[3]}`
document.body.appendChild(buttontype4)

if (jokeTypes[1] === undefined ){
    document.body.removeChild(buttontype2)
}
if (jokeTypes[2] === undefined ){
    document.body.removeChild(buttontype3)// if the joke type does not generate, dont show the button 
}

if (jokeTypes[3] === undefined ){
    document.body.removeChild(buttontype4)//apparently there are 4 types
}

let result = await gatherData() // repeated from module 1 to get the joke questions and answers 
// console.log(result[0].punchline)
// let jokeSetup = result[0].setup //question
// let punchLine = result[0].punchline// answer use set timeout 

function filterType(){// filterType() returns an array of all the jokes that are this type 
    let filteredJokes = result.filter( joke => joke.type === "general")// refresh on array method 
    console.log(filteredJokes)//right now only returns the general type 

  
  // i'm sure there is a dynamic way to do this. 

let jokeDisplay = document.getElementById("jokeDisplay")
//eventListner construction 
buttontype1.addEventListener("click",()=>{
     
    let JokeIndex = Math.floor(Math.random()*filteredJokes.length)
console.log(JokeIndex)
    jokeDisplay.textContent = ""// try this to reload the page 
     filterType(buttontype1.textContent)
    jokeDisplay.textContent = `${filteredJokes[JokeIndex].setup} :` 
    setTimeout(()=>  jokeDisplay.textContent = filteredJokes[JokeIndex].setup + `  ${filteredJokes[JokeIndex].punchline}`, 2000) // just concatenate them because += stacks the answers    

});

buttontype2.addEventListener("click",()=>{
     
    let JokeIndex = Math.floor(Math.random()*filteredJokes.length)
console.log(JokeIndex)
    jokeDisplay.textContent = ""
     filterType(buttontype2.textContent)
    jokeDisplay.textContent = `${filteredJokes[JokeIndex].setup} :` 
    setTimeout(()=>  jokeDisplay.textContent = filteredJokes[JokeIndex].setup + `  ${filteredJokes[JokeIndex].punchline}`, 2000) // just concatenate them because += stacks the answers    

});

buttontype3.addEventListener("click",()=>{
     
    let JokeIndex = Math.floor(Math.random()*filteredJokes.length)
console.log(JokeIndex)
    jokeDisplay.textContent = ""
     filterType(buttontype3.textContent)
    jokeDisplay.textContent = `${filteredJokes[JokeIndex].setup} :` 
    setTimeout(()=>  jokeDisplay.textContent = filteredJokes[JokeIndex].setup + `  ${filteredJokes[JokeIndex].punchline}`, 2000) // just concatenate them because += stacks the answers    

});

buttontype4.addEventListener("click",()=>{
     
    let JokeIndex = Math.floor(Math.random()*filteredJokes.length)
console.log(JokeIndex)
    jokeDisplay.textContent = ""
     filterType(buttontype4.textContent)
    jokeDisplay.textContent = `${filteredJokes[JokeIndex].setup} :` 
    setTimeout(()=>  jokeDisplay.textContent = filteredJokes[JokeIndex].setup + `  ${filteredJokes[JokeIndex].punchline}`, 2000) // just concatenate them because += stacks the answers    

});




styleButton(buttontype1);
styleButton(buttontype2);
styleButton(buttontype3);
styleButton(buttontype4);

}
  filterType()

}
loadData()


