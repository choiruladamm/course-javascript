// JS ES6 - Default Parameter

generateTitle = () => {
  return 'Title'
}

createTag = (title = generateTitle(), tag = 'hdscvhd') => {
  // tag = tag || 'css'
  // if (typeof tag === 'undefined'){
  //   tag = 'css'
  // }
  console.log(title + ' punya tag ' + tag)
}

createTag()