let db = {
  screams: [
    {
      userHandle: "user",
      body: "this is a scream",
      createdAt: "2019-03-15T11:46:01.018Z",
      likeCount: 5,
      commentCount: 2,
    },
  ],
  users: [
    {
      userId: "dewfrgtrg",
      email: "test@test.com",
      handle: "user",
      createdAt: "2018884-3474",
      imageUrl: "image/bcdsbcdbcdscdcnn",
      bio: "hello my name is user",
      website: "httpsL//user.com",
      location: "Lodon ,UK",
    },
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "nsdfghjklu",
      body: "nice one mate",
      createdAt: "2019-03-15T10:59:52.798Z"
    }
  ],
};

const userDetails = {
  //Redux data
  credentials: {
    userId: "dewfrgtrg",
    email: "test@test.com",
    handle: "user",
    createdAt: "2018884-3474",
    imageUrl: "image/bcdsbcdbcdscdcnn",
    bio: "hello my name is user",
    website: "httpsL//user.com",
    location: "Lodon ,UK",
  },
  likes: [
    {
      userHandle: "user",
      screamId: "tfgsjcdjkc",
    },
    {
      userHandle: "user",
      screamId: "tfgsjcdjkc",
    },
  ],
};
