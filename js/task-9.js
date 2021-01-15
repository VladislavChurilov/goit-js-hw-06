import users from './users.js';
const getNamesSortedByFriendsCount = users => users.sort(function(prevName, nextName) {     
    return prevName.friends.length - nextName.friends.length;
  })
  .map(function(user){    
      return user.name;
  });  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 
//   'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]