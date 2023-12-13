const all_products = [
  {
    id: "0",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28815/source/450x450/30b42aee-d8aa-48f5-9df3-b4cf513e5de4-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464305.jpg",
    title: "Pizza Carbonara ",
    gramm: 1200,
    category: "Pizza",
    price: 200,
    ingridients:
      "Ham, brisket, parmesan and mozzarella cheeses, cherry tomatoes",
  },
  {
    id: "1",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28816/source/450x450/b9a26e51-3b27-4702-8b78-05f7755c9b67-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464307.jpg",
    title: "Pizza Polo",
    gramm: 1350,
    category: "Pizza",
    price: 234,
    ingridients:
      "Chicken fillet, bell pepper, mozzarella cheese, pineapple, garlic, marinara sauce, BBQ sauce",
  },
  {
    id: "2",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28805/source/450x450/73d99225-2841-42c0-93af-bdc10761dddc-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464258.jpg",
    title: "Pizza Polo round",
    gramm: 350,
    category: "Pizza",
    price: 50,
    ingridients:
      "Chicken fillet, bell pepper, mozzarella cheese, pineapple, garlic, marinara sauce, BBQ sauce",
  },
  {
    id: "3",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28806/source/450x450/69752cde-bfdb-4cfb-85a3-749597ccad2b-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464263.jpg",
    title: "Pizza Carbonara",
    gramm: 550,
    category: "Pizza",
    price: 260,
    ingridients:
      "Mozzarella cheese, ham, brisket, mushrooms, parmesan, cherry tomatoes and truffle oil ",
  },
  {
    id: "4",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28853/source/450x450/40252b61-7ad6-4a97-83b5-973f281e8617-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464530.jpg",
    title: "Double Cheeseburger",
    gramm: 280,
    category: "Burger",
    price: 100,
    ingridients:
      "Two beef patties, Hochland cheese, onions, pickled cucumber, ketchup, mustard",
  },
  {
    id: "5",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28854/source/450x450/bd87cc97-1b83-4375-b381-e026805f2b1d-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464536.jpg",
    title: "Gamburger",
    gramm: 180,
    category: "Burger",
    price: 110,
    ingridients: "Beef cutlet, onion, pickled cucumber, ketchup, mustard",
  },
  {
    id: "6",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28852/source/450x450/084283e2-6894-44da-85d8-7844eb027461-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464524.jpg",
    title: "Burger King York",
    gramm: 210,
    category: "Burger",
    price: 150,
    ingridients:
      "Beef patty, Hochland cheese, Iceberg lettuce, purple onion, pickle, tomato, signature sauce",
  },
  {
    id: "7",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28918/source/450x450/f21aad65-e13f-42b0-addc-c57146a203f4-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464872.jpg",
    title: "Burger for the Victory",
    gramm: 210,
    category: "Burger",
    price: 200,
    ingridients:
      "Beef cutlet, hochland cheese, iceberg lettuce, red onion, tomato, tartar and cheese sauces",
  },
  {
    id: "8",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28875/source/450x450/6f4b80f6-d7f4-4790-8d50-8384e8a4dd35-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464641.jpg",
    title: "Grilled ribs",
    gramm: 340,
    category: "Garyachi stravy",
    price: 300,
    ingridients:
      "A strip of grilled pork marinated ribs. Served with BBQ sauce",
  },
  {
    id: "9",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28845/source/450x450/e0614a83-8d84-4dd3-90a5-e2aec74f7505-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464476.jpg",
    title: "Kartoplya ",
    gramm: 540,
    category: "Garyachi stravy",
    price: 320,
    ingridients: "Sauteed Potatoes with Mushrooms, Green Butter and Herbs",
  },
  {
    id: "10",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28843/source/450x450/53119436-32e2-4fe7-890a-ad1d1e0c0c7c-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464460.jpg",
    title: "Grilled pork steak",
    gramm: 140,
    category: "Garyachi stravy",
    price: 430,
    ingridients:
      "Pork steak, asparagus beans and onion confiture with Carbonara cream sauce, BBQ sauce",
  },
  {
    id: "11",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28842/source/450x450/481039d9-43eb-49e2-93f4-24da2d1f89f7-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464453.jpg",
    title: "Pasta Carbonara",
    gramm: 140,
    category: "Garyachi stravy",
    price: 270,
    ingridients:
      "Tagliatelle with bacon and ham in cream sauce, garlic and parmesan cheese",
  },
  {
    id: "12",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28864/source/450x450/2f5b3547-0706-4045-ad3d-b9b9f98df828-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464590.jpg",
    title: "Orange",
    liter: 0.95,
    category: "Drinks",
    price: 50,
    ingridients: "Packaged Orange Juice",
  },
  {
    id: "13",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/29021/source/450x450/3101909e-3a07-45c9-a199-9a517237d868-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701465138.jpg",
    title: "Morshynska gazovana",
    liter: 330,
    category: "Drinks",
    price: 30,
    ingridients: "Carbonated mineral water",
  },
  {
    id: "14",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28867/source/450x450/75d812df-1972-42e7-b7b8-ca3261f1a78f-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464595.jpg",
    title: "Apple ",
    liter: 0.95,
    category: "Drinks",
    price: 20,
    ingridients: "Packaged apple juice",
  },
  {
    id: "15",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28865/source/450x450/d437a774-ebb7-4142-9bdf-05633cca6ed9-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464592.jpg",
    title: "Cherry  ",
    liter: 0.95,
    category: "Drinks",
    price: 50,
    ingridients: "Packaged Sweet Cherry Nectar",
  },
  {
    id: "16",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28856/source/450x450/68a57e85-c71b-4b06-9564-8ef5c680d4b7-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464549.jpg",
    title: "Classic cheesecake  ",
    gramm: 150,
    category: "Desserts",
    price: 100,
    ingridients: "Classic New York cheesecake with walnut saber",
  },
  {
    id: "17",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28915/source/450x450/06b7a49b-49cd-4de4-aa13-56ffc0805251-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464854.jpg",
    title: "Caramel Brownies  ",
    gramm: 110,
    category: "Desserts",
    price: 130,
    ingridients:
      "Dark and milk chocolate brownies, salted caramel and hazelnuts",
  },
  {
    id: "18",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28859/source/450x450/3db533a0-ca05-4aec-b385-3ff80aa02ab3-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464563.jpg",
    title: "Tarte Horikh with caramel  ",
    gramm: 70,
    category: "Desserts",
    price: 120,
    ingridients: "Shortcrust tart with walnut and salted caramel",
  },
  {
    id: "19",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28858/source/450x450/33777f49-ba8d-432b-b2f9-381c0c1f09a2-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464559.jpg",
    title: "Napoleon   ",
    gramm: 90,
    category: "Desserts",
    price: 110,
    ingridients: "Napoleon with vanilla custard",
  },
  {
    id: "20",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28838/source/450x450/ee2b45c9-8923-4ee1-8e64-86a3665bdd9a-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464426.jpg",
    title: "Chicken Broth   ",
    gramm: 365,
    category: "Soup",
    price: 70,
    ingridients:
      "Chicken broth, chicken fillet, egg, noodles and fragrant herbs",
  },
  {
    id: "21",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28839/source/450x450/5c4b3246-6532-485a-b296-dfc87aa79d43-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464434.jpg",
    title: "Ramen    ",
    gramm: 355,
    category: "Soup",
    price: 60,
    ingridients:
      "Classic ramen soup with egg noodles, spicy pork belly, pickled egg and roasted sesame seeds",
  },
  {
    id: "22",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28840/source/450x450/d3e3707f-a8d0-434d-af17-a1a9305e6ee2-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464440.jpg",
    title: "Scandinavian salmon soup    ",
    gramm: 240,
    category: "Soup",
    price: 76,
    ingridients:
      "Creamy soup with salmon, potatoes, onions, dill and white pepper. Served with cheese bruschetta and salmon",
  },
  {
    id: "23",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/29006/source/450x450/d93deeba-637f-4f24-821e-8401d438b788-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701465101.jpg",
    title: "Tom Yum with Seafood    ",
    gramm: 200,
    category: "Soup",
    price: 80,
    ingridients:
      "Spicy coconut soup with shrimp, mussels, squid, tom yum paste, garlic, mushrooms, lime, cilantro, chili pepper",
  },
  {
    id: "24",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28834/source/450x450/17988f9a-fa0d-47b8-bbe5-7631b3482495-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464403.jpg",
    title: "Caesar with shrimp    ",
    gramm: 270,
    category: "Salads",
    price: 150,
    ingridients:
      "Shrimps, avocado, tomatoes, salad mix, egg, Parmesan cheese, croutons with green butter and garlic, Caesar sauce",
  },
  {
    id: "25",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28835/source/450x450/3b8943d3-0b40-455e-b7db-2d7a69669110-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464408.jpg",
    title: "Veal saladю    ",
    gramm: 202,
    category: "Salads",
    price: 130,
    ingridients:
      "Marinated veal, baked eggplant and bell peppers, salad mix, cherry tomatoes, peanuts, spicy sauce",
  },
  {
    id: "26",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28832/source/450x450/6ddab1b1-8719-44ee-b7e3-ff7c82bea043-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464394.jpg",
    title: "Chicken Caesar    ",
    gramm: 272,
    category: "Salads",
    price: 110,
    ingridients:
      "Chicken fillet, crispy bacon, tomatoes, salad mix, egg, parmesan cheese, croutons with green oil and garlic, caesar sauce",
  },
  {
    id: "27",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28837/source/450x450/41ad8997-3354-465f-8af0-dedfa7262cc4-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464419.jpg",
    title: "Greek Salad     ",
    gramm: 242,
    category: "Salads",
    price: 100,
    ingridients:
      "Tomatoes, bell peppers, cucumbers, feta cheese, kalamata olives, red onions, mixed salads with olive oil and balsamic sauce.",
  },
  {
    id: "28",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/28942/source/450x450/a7e49771-0a80-4efc-ac60-473234d11191-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701464947.jpg",
    title: "Philadelphia",
    gramm: 1200,
    category: "Sushi and sets",
    price: 900,
    ingridients:
      "Classic roll with salmon, Philadelphia cheese and cucumber; Roll with tuna, philadelphia cheese and cucumber; Roll with shrimp, Philadelphia cheese, cucumber and mango-chili sauce; Roll with eel, Philadelphia cheese, cucumber and unagi sauce in sesame seeds; Roll with Philadelphia cheese, cucumber, unagi sauce in sesame seeds.",
  },
  {
    id: "29",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/29018/source/450x450/73c83883-c2fa-430b-9fbd-71ee2257a52d-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701465131.jpg",
    title: "Hot Roru",
    gramm: 400,
    category: "Sushi and sets",
    price: 500,
    ingridients:
      "Tempura roll with salmon; Tempura roll with eel and cucumber; Tempura roll with tuna; Unagi sauces, mango-chili, spicy and microgreens.",
  },
  {
    id: "30",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/29012/source/450x450/e9f7dcdc-6799-449a-9c52-a1bcb2bff3ab-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701465116.jpg",
    title: "Sushi Unagi ",
    gramm: 40,
    category: "Sushi and sets",
    price: 30,
    ingridients: "Sushi with eel, microgin and unagi sauce",
  },
  {
    id: "31",
    image:
      "https://mafia.ua/storage/image-storage/2023/12/01/29015/source/450x450/b1dd3455-0e7f-4fc4-bb9e-3be7aa31a2e8-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1_1701465124.jpg",
    title: "Sushi Ebi ",
    gramm: 38,
    category: "Sushi and sets",
    price: 20,
    ingridients: "Sushi with tiger shrimp",
  },
];
export default all_products;
