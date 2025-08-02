const express = require("express");
const app = express();
const port = 3000;



app.set("view egine", "ejs");

const MenuItems = [
  {
    id: "1",
    name: "Capri",
    description:
      "Goat Cheese, Roasted Red Peppers, Pesto Sauce (Nut Free), Mozzarella Cheese, Pizzaiolo Tomato Sauce",
    catagory: "Pizza",
  },
  {
    id: 2,
    name: "Caesar Salad",
    description:
      "A Caesar salad (also spelled Cesar, César and Cesare), also known as Caesar's salad, is a green salad of romaine lettuce and croutons dressed with lemon juice (or lime juice), olive oil, eggs, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan and black pepper.",
    category: "Salad",
  },
  {
    id: 3,
    name: "Garlic Bread with Cheese",
    description: "Cheesy Cheesy garlic bread",
    category: "Sides",
  },
  {
    id: 4,
    name: "Canada Dry Ginger Ale",
    description: "Refreshing bevarage",
    category: "Drink",
  },
  {
    id: 5,
    name: "Soprano",
    description:
      "Sopressata, Sun Dried Tomatoes, Gorgonzola Cheese, Mozzarella Cheese and Pizzaiolo Tomato Sauce",
    category: "Pizza",
  },
  {
    id: 6,
    name: "Amalfi",
    description:
      "Tomatoes (Herbed), Vegan Cheese, Zucchini (Marinated) and Pizzaiolo Tomato Sauce",
    category: "Pizza",
  },
  {
    id: 7,
    name: "Greco Salad",
    description:
      "Made with pieces of tomatoes, cucumbers, onion, feta cheese, and olives (typically Kalamata olives) and dressed with salt, Greek oregano, lemon juice and olive oil.",
    category: "Salad",
  },
];
//isntalling differnent urls
app.get("/all", (req,res)=>{
    return res.render("DisplayAll.ejs", {menuItems: MenuItems});
})

app.listen(port, ()=>{
console.log(`Server running on port ${port}`);
})