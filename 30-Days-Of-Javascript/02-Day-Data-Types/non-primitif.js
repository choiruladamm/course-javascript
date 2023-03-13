{
  let nums = [1, 2, 3];
  nums[0] = 10;

  console.log(nums);
}

// Tipe data non-primitif tidak dapat dibandingkan dengan nilai. Bahkan jika dua tipe data non-primitif memiliki sifat dan nilai yang sama, mereka tidak sepenuhnya sama.

let nums = [1, 2, 3];
let numbers = [1, 2, 3];

console.log(nums == numbers); // false

let userOne = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};

let userTwo = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};

console.log(userOne == userTwo); // false
