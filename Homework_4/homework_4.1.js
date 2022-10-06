console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log("Now we have the data of user: ", email);
    callback({ userEmail: email });
  }, 0);
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(usersDB[email]);
  }, 0);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback(video.title);
  }, 0);
}
const getPassedUsersFirstVideoTitle = (user) =>
  loginUser("user1@hw.js", 1234, (user) => {
    console.log("user : ", user);
    getUserVideos(user.userEmail, (videos) => {
      console.log("videos :", "(" + videos.length + ")");
      videos.forEach(function (item, index, array) {
        console.log(index + ": ", item);
      });
      videoDetails(videos[0], (title) => {
        console.log("First Video's Title is", title);
      });
    });
  });

getPassedUsersFirstVideoTitle("user1@hw.js");
console.log("Finish");
