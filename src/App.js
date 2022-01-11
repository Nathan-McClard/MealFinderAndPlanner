import React, { useState } from "react";
import MealList from "./MealList";

function App() {
  const [mealData, setMealData] = useState(null);
  const [mealNumber, setMealNumber] = useState(1);
  const [ingredients, setingredients] = useState("chicken");
  const APIkey = "a30b71fdfbeb4d85b8708e9064927887";

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=a30b71fdfbeb4d85b8708e9064927887&number=${mealNumber}&tags=${ingredients}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function changeMealNumber(z) {
    setMealNumber(z.target.value);
  }
  function handleChange(e) {
    setingredients(e.target.value);
  }

  return (
    <div className="App">
      <section className="controls">
        {/* How mean meals text input */}
        <input
          type="number"
          style={{ width: 400, justifyContent: "center" }}
          placeholder="How many meals? (e.g. 1)"
          onChange={changeMealNumber}
        ></input>
        <input
          type="text"
          style={{ width: 400, justifyContent: "center" }}
          placeholder="What do you want your meals to include? (e.g. 'Chicken')"
          onChange={handleChange}
        ></input>
      </section>
      <button onClick={getMealData}>Get Meals for the week!</button>
      {/* After clicking the button send data to MealList file */}
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default App;
