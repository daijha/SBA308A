// for using the api. this api already generates the random jokes

async function gatherData(){
    let response = await fetch ("https://official-joke-api.appspot.com/jokes/random/25");
    let data = await response.json();
    return data;
}
async function getdata(){
    let result = await gatherData();
    console.log(result);// gives the array of jokes
    console.log(result[0].setup) //gives the joke question
    console.log(result[0].punchline)// gives the joke answer
    console.log(result[0].type)// gives the joke category

const jokeTypeList = result.map(result => result.type)
console.log(jokeTypeList) // returns an array of the joke types

const jokeType = new Set(jokeTypeList) // set should remove duplicates. had to look this up
console.log(jokeType)// because the array is random there are multiple varities of types. I have to keep this in mind if I want to filter by button. one second its 2 sometimes its 3 types to choose from

}
getdata()// have to call it for the console. logs to work
