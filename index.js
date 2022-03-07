
//  1

const board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    console.log(board[i][j]);
  }
}

//  2
// 2.1
const doggo = {
  name: "Toby",
  breed: "Yorkshire and Scottish terrier mix",
  //   2.2
  favoriteFoods: ["meats", "doggy biscuits", "bones"],
  //   2.4
  showFavorites() {

    this.favoriteFoods.forEach(foodItem => console.log(foodItem));
  }
};

// 2.3
console.log(doggo.favoriteFoods[1]);
// 2.4

doggo.showFavorites();

// 3.1
const recipe = {
  name: "cakes",
  author: "Fran",
  preparationTime: "2 hours",

  // 3.2
  ingredients: {
    sugar: "sugar",
    butter: "butter",
    flour: "flour"
  },
  showIngredients() {
    return Object.values(this.ingredients).forEach(ingredient=>console.log(ingredient));
  }
};
// 3.3
recipe.ingredients.ginger = "ginger";
console.log(recipe.ingredients);

// 3.4
recipe.ingredients.ginger = "grated ginger";
console.log(recipe.ingredients);

// 3.5
console.log(recipe.showIngredients());

