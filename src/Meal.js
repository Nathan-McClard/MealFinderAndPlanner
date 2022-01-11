import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  // Everything here gets displayed for each item from the meal
  return (
    <article>
      <h4>{meal.title}</h4>
      <img src={meal.image} />
    </article>
  );
}
