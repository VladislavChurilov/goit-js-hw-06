import users from './users.js';
const getUsersWithFriend = (users, friendName) => users.reduce( function(friends, user){    
    if (user.friends.includes(friendName)){        
      friends.push(user.name);
      return friends;
    }
    return friends;
  },[]);
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]