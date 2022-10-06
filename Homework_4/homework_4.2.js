console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}

function loginUser(email, password, onSuccess, onFailure) {
  if (Object.keys(usersDB).includes(email)) {
    setTimeout(() => {
      console.log("Now we have the data of user: ", email);
      onSuccess({ userEmail: email });
    }, 3000);
  } else {
    setTimeout(() => {
      onFailure("User not found!");
    }, 3000);
  }
}

function getUserVideos(email, onSuccess, onFailure) {
  if (usersDB[email].length) {
    setTimeout(() => {
      onSuccess(usersDB[email]);
    }, 2000);
  } else {
    setTimeout(() => {
      onFailure("Videos not found!");
    }, 2000);
  }
}

function videoDetails(video, onSuccess, onFailure) {
  if (video.title) {
    setTimeout(() => {
      onSuccess(video.title);
    }, 2000);
  } else {
    setTimeout(() => {
      onFailure("Video Title not found!");
    }, 2000);
  }
}

const getPassedUsersFirstVideoTitle = (user) =>
  loginUser(
    user,
    1234,
    (user) => {
      console.log("user : ", user);
      getUserVideos(
        user.userEmail,
        (videos) => {
          console.log("videos :", "(" + videos.length + ")");
          videos.forEach(function (item, index, array) {
            console.log(index + ": ", item);
          });
          videoDetails(
            videos[0],
            (title) => {
              console.log("First Video's Title is", title);
            },
            (err) => displayError(err)
          );
        },
        (err) => displayError(err)
      );
    },
    (err) => displayError(err)
  );

 getPassedUsersFirstVideoTitle("user1@hw.js");

console.log("Finish");
