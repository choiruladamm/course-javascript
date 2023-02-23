// console.dir(document)

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// // cange title using dom
// document.title = 123;

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);

// // change header text content (not best way to do)
// // document.all[12].textContent = '123';

// console.log(document.forms);
// console.log(document.links);

// console.log(document.images);

// GET ELEMENT BY ID
let headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = '123';
headerTitle.innerText = 'Axell';

