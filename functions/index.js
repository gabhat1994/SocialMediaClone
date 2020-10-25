const functions = require("firebase-functions");

const app = require("express")();

const FBAuth = require(`./util/fbauth`);

const { getAllScreams, postOneScream } = require("./handlers/screams");
const { signup, login , uploadImage , addDetails , getAuthenticatedUser } = require("./handlers/user");



//scream routes
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);
app.post("/user/image",FBAuth, uploadImage);
app.post("/user",FBAuth, addDetails);
app.get("/user",FBAuth, getAuthenticatedUser);
//user Route
app.post("/signup", signup);
app.post("/login", login);


exports.api = functions.https.onRequest(app);
