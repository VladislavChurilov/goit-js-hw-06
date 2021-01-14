import users from './users.js';
const getUsersWithFriend = (users, friendName) => users.reduce( function(friends, user){
    
    if (user.friends.includes(friendName)){
        console.log('tst v drugax');
        // console.log(user.friends);
        user.friends.push(...user.name);
        return friends;
    }
    // friend.push(...friend) 
    // friends[user] = user.friends.hasOwnProperty(user)? friends.push(...user.friends) : 1 ;
    // console.log(friends);
    // console.log(friendName);
    // console.log(friends.user)
    // console.log(user.name);
    // console.log(user.friends);
    // friends.push(...user.friends);
    return friends;
  });
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
//   console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]