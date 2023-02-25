let age = 16;

// statement normal
if (age > 10) {
  name = "Pedro";
} else {
  name = "Maria";
}

// using ternary opeartor
let name = age > 10 ? "Pedro" : "Maria";


// example in react conditions
const MyComponent = () => {
  return age > 10 ? <div> Pedro </div> : <div>Maria</div>;
};
