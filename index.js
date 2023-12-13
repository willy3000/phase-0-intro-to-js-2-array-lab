// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = () => {
  cats.push("Ralph");
};

const destructivelyPrependCat = () => {
  cats.unshift("Bob");
};
const destructivelyRemoveFirstCat = () => {
  cats.shift();
};
const destructivelyRemoveLastCat = () => {
  cats.pop();
};

const appendCat = () => {
  const newCatsArray = [...cats, "Broom"];
  return newCatsArray;
};
const prependCat = () => {
  const newCatsArray = ["Arnold", ...cats];
  return newCatsArray;
};

const removeFirstCat = () => {
  const newCats = cats.slice(1);
  return newCats;
};
const removeLastCat = () => {
  const newCats = cats.slice(0, -1);
  return newCats;
};
