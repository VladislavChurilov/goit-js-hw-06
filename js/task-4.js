import users from './users.js';
const getInactiveUsers = users => users.filter(function(user) {
    return !user.isActive;
  });
  
  console.log(getInactiveUsers(users)); 
  // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]