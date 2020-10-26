const functions = require("firebase-functions");

const app = require("express")();

const FBAuth = require(`./util/fbauth`);

const {
  getAllScreams,
  postOneScream,
  getScream,
  commentOnScream,
} = require("./handlers/screams");
const {
  signup,
  login,
  uploadImage,
  addDetails,
  getAuthenticatedUser,
} = require("./handlers/user");

//scream routes
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);
app.get("/scream/:screamId", getScream);
app.post("/scream/:screamId/comment", FBAuth, commentOnScream);

//delete scream
//like scream
//unlike scream

//user Route
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addDetails);
app.get("/user", FBAuth, getAuthenticatedUser);

exports.api = functions.https.onRequest(app);
