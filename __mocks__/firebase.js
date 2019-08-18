export default {
  initializeApp: config => config,
  auth: function() {
    return {
      createUserWithEmailAndPassword: (para1, para2) =>
        new Promise(function(resolve, reject) {
          if (para1 === 'user@javadevs.com' && para2 == 'javadevs') {
            return resolve({
              user: {
                ra: "345d",
              },
            });
          }
          if (para1 === 'user' && para2) {
            return reject({
              message: "The email address is badly formatted",
            });
          }
          reject({ message: "I am not registered" });
        }),
      signOut: () => {
        return new Promise(function(resolve, reject) {
          resolve("Success");
          reject({ message: "error!" });
        });
      },
      onAuthStateChanged: () => {
        return {
          email: "test@test.com",
          uid: '12345678abcdefg',
        };
      },
      signInWithEmailAndPassword: (para1, para2) =>
        new Promise(function(resolve, reject) {
          if (para1 === 'user@javadevs.com' && para2 == 'javadevs') {
            return resolve({
              user: {
                ra: "345d",
              },
            });
          }
          if (para1 === 'user' && para2) {
            return reject({
              message: "The email address is badly formatted",
            });
          }
          reject({ message: "I am not registered" });
        }),
    };
  }
};
