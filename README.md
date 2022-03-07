# Nests

#### 1. 2D Array
* Given the 2D Array below, **loop** through the arrays to print the values.

```javascript
let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];
```

#### 2. Doggo

* 2.1 Create an object called doggo. Add name and breed as properties of the object.
* 2.2 Create an array within the doggo object named `favoriteFoods` and add the doggo's favorite foods to the array.
* 2.3 Access the second element of the doggo's favorite foods. 
* 2.4 Add a method called `showFavorites` that loops through and print all the doggo's favorite food.

#### 3. Recipe
* 3.1 Create an object called recipe. Add name and preparition time as properties of the object.
* 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value. Example:
  ```js
     {
      butter:'butter' 
     }
  ```
* 3.3 Without changing the previous code, add another ingredient - let's add `ginger`. 
* 3.4 Change the value of ingredient `ginger` to `grated ginger`. 
* 3.5 Write a method in the recipe object called `showIngredients` that prints the value of each ingredient in the ingredients object. 

[//]: # (autograding info start)
## Results
  [![Results badge](../../blob/badges/.github/badges/autograding-solution/badge.svg)](https://github.com/DigitalCareerInstitute/PB-datastructure-nesting/actions)
  
  [Results Details](https://github.com/DigitalCareerInstitute/PB-datastructure-nesting/actions)
  
  ### Debugging your code
  > [reading the test outputs](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  There are two ways to see why tasks might not be completed:
  #### 1. Running tests locally
  - Run `npm install`
  - Run `npm test` in the terminal. You will see where your solution differs from the expected result.
  
  #### 2. Inspecting the test output on GitHub
  - Go to the [Actions tab of your exercise repo](https://github.com/DigitalCareerInstitute/PB-datastructure-nesting/actions)
  - You will see a list of the test runs. Click on the topmost one.
  - Click on 'Autograding'
  - Expand the item 'Run DCI-EdTech/autograding-action@main'
  - Here you see all outputs from the test run
[//]: # (autograding info end)