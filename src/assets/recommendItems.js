import bigpizza from "./Items/bigpizza.jpg";
import salad from "./Items/salad.jpg";
import chickenSalad from "./Items/chickenSalad.jpg";
import burger from "./Items/burger.jpg";

export const recommendItems = [
  {
    id: 0,
    image: bigpizza,
    name: "Mafia Pizza",
    price: 25,
    ingridients:
      "Sous-vide chicken fillet, bell pepper, mozzarella cheese, pineapple, garlic, marinara sauce, BBQ sauce",
    gramm: 1350,
  },
  {
    id: 1,
    image: salad,
    name: "Caesar Salad",
    price: 15,
    ingridients:
      "Shrimp, avocado, tomatoes, mixed salad greens, egg, Parmesan cheese, croutons with green oil and garlic, Caesar sauce",
    gramm: 275,
  },
  {
    id: 3,
    image: chickenSalad,
    name: "Chicken Salad",
    price: 20,
    ingridients:
      "Chicken, sweet pepper, red onion, pineapple, carrot, peanuts, sweet and sour sauce",
    gramm: 375,
  },
  {
    id: 4,
    image: burger,
    name: "Burger",
    price: 15,
    ingridients:
      "Beef patty, Hochland cheese, iceberg lettuce, red onion, tomato, tartar and cheese sauces",
    gramm: 305,
  },
];
