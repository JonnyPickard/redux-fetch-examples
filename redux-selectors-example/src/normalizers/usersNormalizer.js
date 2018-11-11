export const normalizeUsers = usersData => {
  const users = { byId: {}, allIds: [] };

  for (let user of usersData) {
    users.byId['user' + user.id] = {
      id: user.id,
      firstName: user.firstName,
      username: user.username
    };
    users.allIds.push(user.id);
  }

  return users;
};

/* Should output users in this format:
{
  "users": {
    "byId": {
      "user1": {
        "id": "1",
        "firstName": "Billy",
        "username": "BillyTheKid"
      },
      "user2": {
        "id": "2",
        "firstName": "Jesse",
        "username": "JesseJames"
      },
      "user3":{
        "id": "3",
        "firstName": "Arthur",
        "username": "ArthurMorgan"
      }
    },
    "allIds": ["user1", "user2", "user3"]
  }
}
*/
