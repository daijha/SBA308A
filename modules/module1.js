// for using the api. this api already generates the random jokes

let jokeTypeList = [];
let jokeTypeSet = new Set(jokeTypeList); // declaring these globally for easier access 
let jokeTypes = [];

async function gatherData() {
  let response = await fetch(
    "https://official-joke-api.appspot.com/jokes/random/25"
  );
  let data = await response.json();
  return data;
}
async function getData() {
  let result = await gatherData();
  //   console.log(result); // gives the array of jokes
  //   console.log(result[0].setup); //gives the joke question
  //   console.log(result[0].punchline); // gives the joke answer
  //   console.log(result[0].type); // gives the joke category

  jokeTypeList = result.map((result) => result.type);
  //console.log(jokeTypeList) // returns an array of the joke types

  jokeTypeSet = new Set(jokeTypeList); // set should remove duplicates. had to look this up
  //console.log(jokeTypeSet)// because the array is random there are multiple varities of types. I have to keep this in mind if I want to filter by button. one second its 2 sometimes its 3 types to choose from SET IS NOT AN ARRAY AND MUST BE CONVERTED TO ONE TO GET ACCESS TO EACH TYPE...
  jokeTypes = Array.from(jokeTypeSet); //snatched off google
  //console.log(jokeTypes) //now i have an array of accessible data. sometimes one of the datatypes is undefined.
  // console.log(jokeTypes[0])
  // console.log(jokeTypes[1])
  // console.log(jokeTypes[2])
}
//getdata()// have to call it for the console. logs to work. but, i need  to comment it out before exporting.

export { gatherData, getData, jokeTypeList, jokeTypeSet, jokeTypes };
