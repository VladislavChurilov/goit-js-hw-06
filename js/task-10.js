import users from './users.js';
const getSortedUniqueSkills = users => users.reduce(function(allSkills, user) {  
 allSkills.push(...user.skills)
  return allSkills ;
}, [])
.filter(function(skills,index,skillsArray ){ 
  return skillsArray.indexOf(skills) === index;
})
.sort();
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 
//   'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 
//   'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident',
//    'tempor', 'velit', 'veniam' ]
