import users from './users.js';
const getSortedUniqueSkills = users  =>users.map(function(user) {
  console.log(...user.skills);
  // if (user.skills.includes(skillsName)){        
  //   skills.push(...user.skills);
    return ;
  
  // return skills;
  // console.log(user.skills);
  // console.log(user.skills.hasOwnProperty(index)? false:(user.skills[index] = true));
    // console.log(user.skills[index]);
    // console.log(user.skills.indexOf(index));
    // user.skills.indexOf(...user.skills) === index
    
  });
  // .filter (function(user){
  // return ;
  // })
  // .sort(function(prevSkills, nextSkills){
  //   return prevSkills.skills - nextSkills.skills;
  // });
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 
//   'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 
//   'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident',
//    'tempor', 'velit', 'veniam' ]
// Object.values(users).filter(function(user) {
//     // console.log(user.skills);
//     return user.skills;