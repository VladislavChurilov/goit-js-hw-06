import users from './users.js';
const getSortedUniqueSkills = users =>Object.values(users).sort(function(prevSkills, nextSkills) {
    // console.log(user.skills);
    return prevSkills.skills - nextSkills.skills;
  });
//   .sort(function(prevSkills, nextSkills){
//     return prevSkills.skills - nextSkills.skills;
//   });
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 
//   'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 
//   'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident',
//    'tempor', 'velit', 'veniam' ]
// Object.values(users).filter(function(user) {
//     // console.log(user.skills);
//     return user.skills;