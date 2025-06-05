// will use to create the buttons for the joke generation

import {
  gatherData,
  getData,
  jokeTypes,
} from "/modules/Module1.js"; // importing from API file
import { styleButton } from "/modules/Module3.js"; // importing from the style module

async function loadData() {
  await getData();
  console.log(jokeTypes);

  let buttontype1 = document.createElement("button");
  buttontype1.textContent = `${jokeTypes[0]}`;
  document.body.appendChild(buttontype1);

  let buttontype2 = document.createElement("button");
  buttontype2.textContent = `${jokeTypes[1]}`;
  document.body.appendChild(buttontype2);

  let buttontype3 = document.createElement("button");
  buttontype3.textContent = `${jokeTypes[2]}`;
  document.body.appendChild(buttontype3);

  let buttontype4 = document.createElement("button");
  buttontype4.textContent = `${jokeTypes[3]}`;
  document.body.appendChild(buttontype4);

  if (jokeTypes[1] === undefined) {
    document.body.removeChild(buttontype2);
  }
  if (jokeTypes[2] === undefined) {
    document.body.removeChild(buttontype3); // if the joke type does not generate, dont show the button
  }

  if (jokeTypes[3] === undefined) {
    document.body.removeChild(buttontype4); //apparently there are 4 types
  }

  let result = await gatherData(); // repeated from module 1 to get the joke questions and answers
  // console.log(result[0].punchline)
  // let jokeSetup = result[0].setup //question
  // let punchLine = result[0].punchline// answer use set timeout

  // i'm sure there is a dynamic way to do this.

  let jokeDisplay = document.getElementById("jokeDisplay");

  //eventListner construction
  buttontype1.addEventListener("click", () => {
    let filteredJokes = result.filter((joke) => joke.type === jokeTypes[0]);
        if (filteredJokes.length === 0 ){
        jokeDisplay.textContent="No jokes generated this time. Reload the page for more!"
        return;
    }
    let JokeIndex = Math.floor(Math.random() * filteredJokes.length);
    console.log(JokeIndex);
    jokeDisplay.textContent = ""; // try this to reload the page
    jokeDisplay.textContent = `${filteredJokes[JokeIndex].setup} :`;
    setTimeout(
      () =>
        (jokeDisplay.textContent =
          filteredJokes[JokeIndex].setup +
          ` : ${filteredJokes[JokeIndex].punchline}`),
      3000
    ); // just concatenate them because += stacks the answers
  });
  buttontype2.addEventListener("click", () => {
    let filteredJokes = result.filter((joke) => joke.type === jokeTypes[1]);
    if (filteredJokes.length === 0 ){
        jokeDisplay.textContent="No jokes generated this time. Reload the page for more!"
        return;
    }
    let JokeIndex = Math.floor(Math.random() * filteredJokes.length);
    console.log(JokeIndex);
    jokeDisplay.textContent = "";
    jokeDisplay.textContent = `${filteredJokes[JokeIndex].setup} :`;
    setTimeout(
      () =>
        (jokeDisplay.textContent =
          filteredJokes[JokeIndex].setup +
          ` : ${filteredJokes[JokeIndex].punchline}`),
      3000
    );
  });
  buttontype3.addEventListener("click", () => {
    let filteredJokes = result.filter((joke) => joke.type === jokeTypes[2]);
        if (filteredJokes.length === 0 ){
        jokeDisplay.textContent="No jokes generated this time. Reload the page for more!"
        return;
    }
    let JokeIndex = Math.floor(Math.random() * filteredJokes.length);
    console.log(JokeIndex);
    jokeDisplay.textContent = "";
    jokeDisplay.textContent = `${filteredJokes[JokeIndex].setup} :`;
    setTimeout(
      () =>
        (jokeDisplay.textContent =
          filteredJokes[JokeIndex].setup +
          `:  ${filteredJokes[JokeIndex].punchline}`),
      3000
    );
  });
  buttontype4.addEventListener("click", () => {
    let filteredJokes = result.filter((joke) => joke.type === jokeTypes[3]);
        if (filteredJokes.length === 0 ){
        jokeDisplay.textContent="No jokes generated this time. Reload the page for more!"
        return;
    }
    let JokeIndex = Math.floor(Math.random() * filteredJokes.length);
    console.log(JokeIndex);
    jokeDisplay.textContent = "";
    jokeDisplay.textContent = `${filteredJokes[JokeIndex].setup} :`;
    setTimeout(
      () =>
        (jokeDisplay.textContent =
          filteredJokes[JokeIndex].setup +
          ` : ${filteredJokes[JokeIndex].punchline}`),
      3000
    );
  });

// reload button?

let reloadContainer = document.createElement("div");
document.body.appendChild(reloadContainer);
reloadContainer.style.margin = "24px"

  let reloadBtn = document.createElement("button");
reloadContainer.appendChild(reloadBtn)
reloadBtn.textContent =`Reload Page`;
reloadBtn.addEventListener("click",()=>{
 location.reload();
})

  styleButton(buttontype1);
  styleButton(buttontype2);
  styleButton(buttontype3);
  styleButton(buttontype4);
  styleButton(reloadBtn);
}

loadData();


