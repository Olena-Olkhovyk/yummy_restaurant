import bigpizza from "./Items/bigpizza.jpg";
import salad from "./Items/salad.jpg";
import chickenSalad from "./Items/chickenSalad.jpg";
import burger from "./Items/burger.jpg";

export const recommendItems = [
  {
    id: 0,
    image: bigpizza,
    name: "Піцца мафія",
    price: 25,
    ingridients:
      "Філе куряче sous-vide, перець болгарський, сир моцарела, ананас, часник, соус маринара, соус BBQ Сирний соус в ПОДАРУНОК!",
    gramm: 1350,
  },
  {
    id: 1,
    image: salad,
    name: "Салат цезарь",
    price: 15,
    ingridients:
      "Креветки, авокадо, томати, мікс салатів, яйце, сир Пармезан, крутони з зеленим маслом та часником, соус Цезар",
    gramm: 275,
  },
  {
    id: 3,
    image: chickenSalad,
    name: "Салат із куркою",
    price: 20,
    ingridients:
      "Курка, солодкий перець , червона цибуля, ананас, морква, арахіс, соус кисло-солодкий",
    gramm: 375,
  },
  {
    id: 4,
    image: burger,
    name: "Бургер",
    price: 15,
    ingridients:
      "Котлета з яловичини, сир хохланд, салат айзберг, червона цибуля, помідор, соуси тар-тар та сирний",
    gramm: 305,
  },
];
