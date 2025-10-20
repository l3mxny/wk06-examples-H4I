// run with npx tsx 1-catfact-api.ts

const getCatFactNoErrorCheck = async () => {
  const response = await fetch("https://catfact.ninja/fact?max_length=25");
  const data = await response.json();
  console.log(data.fact);
}



const getCatFact = async () => {
  try {
    const response = await fetch("https://catfact.ninja/fact?max_length=25");
    const data = await response.json();
    console.log(data.fact);
  } catch (error) {
    console.error("Something went wrong -", error);
  }
};

getCatFact();

const getCatFactError = async () => {
  try {
    const response = await fetch("https://catfactt.ninja/fact?max_length=25");
    const data = await response.json();
    console.log(data.fact);
  } catch (error) {
    console.error("Something went wrong -", error);
  }
}
getCatFactError();

//  Alternatively: using .then() and .catch()
const getCatFact2 = async () => {
  fetch("https://catfact.ninja/fact?max_length=25")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.fact);
    })
    .catch((error) => {
      console.error("Something went wrong -", error);
    });
};

getCatFact2()