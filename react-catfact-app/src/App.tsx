import { useState, useEffect } from "react";
import "./App.css";

// TODO: Create a CatFact interface for the API response body
// (hint: If you forgot what it looks like, refer to the slides or use Postman)

function App() {
  const [fact, setFact] = useState<string>("");
  const [maxLength, setMaxLength] = useState<number>(25);

  // TODO: Every function that uses await needs...
  const getCatFact = () => {
    try {
      // TODO: Change apiUrl to be the catfact website url,
      //       using a template literal (use ${} to insert JS)
      //       including a parameter to set max_length based on the
      //       maxLength state variable
      const apiUrl = ``;

      // TODO: Use fetch to get a response from the API
      //       (Hint): You must use await, since fetch returns a promise
      const response = null;

      // TODO: Create a CatFact variable named data,
      //       use await and .json() to get the response body

      // TODO: Check if a fact was returned with data.fact,
      //           and if so, setFact(data.fact);
      //      else data.fact is null, so setFact("No fact found");

      // TODO: Use setFact to change the fact state variable
      //       to data.fact

    } catch (error) {
      console.error("Error:", error);
      setFact("");
    }
  };

  // TODO: Create a useEffect that runs whenever 
  //       the state variable fact changes
  //       and sets the title to the first 30 characters of the fact
  //       (hint): .substring(0, 30)
  // Remember use eEffecttakes two parameters:
  //    1) a function () => {   } to be run
  //    2) dependency array. 

  // Sorry,, did not take any time to make the app look pretty 😭😭😭
  return (
    <div>
      <h1>Cat Fact Generator</h1>
      {fact === "" ? <p>Click the button below!</p> : <p>{fact}</p>}
      <button onClick={getCatFact}>Generate a cat fact</button>

      <div>
        <label>Max Fact Length:</label>
        <input
          type="text"
          inputMode="numeric"
          value={maxLength}
          onChange={(e) => {
            // there's probably a better way to do this but oh well!
            const numberValue = Number(e.target.value.replace(/[^0-9]/g, ""));
  
            setMaxLength(numberValue);
            
          }}
        />
      </div>
    </div>
  );
}

export default App;
