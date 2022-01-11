import React from "react";
import Meal from "./Meal";

export default function MealList({ mealData }) {
  return (
    <main>
      <section className="information">
        <h1>Meals for the week</h1>
      </section>

      {/* Itterate over every meal object and display information from Meal.js */}
      <section className="meals">
        {mealData.recipes.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}
