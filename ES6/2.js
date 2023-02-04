// JS ES6 - Syntax Arrow

// members.forEach((member, index) =>
//   console.log(member + ' ' + index)
// );

// let memberIndex = members.map((member, index) =>
//   (member + ' -- ' + index)
// );

// console.log(memberIndex)

let TestFunction = {
  members: ["Adam", "James", "Axel"],

  getMembers() {
    this.members.map((name) => {
      console.log(this)
    })
  }
};

TestFunction.getMembers()