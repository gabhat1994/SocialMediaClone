const isEmpt = (string) => {
  if (string.trim() === "") return true;
  else return false;
};

exports.validateSignUpData = (data) => {
  let errors = {};

  if (isEmpt(data.email)) {
    errors.email = "Must not be empty";
  }

  if (isEmpt(data.password)) {
    errors.password = "Must not be empty";
  }
  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords must match";
  }

  if (isEmpt(data.handle)) {
    errors.handle = "Must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

exports.validateLoginData = (data) => {
  let errors = {};

  if (isEmpt(data.email)) {
    errors.email = "Must not be empty";
  }

  if (isEmpt(data.password)) {
    errors.password = "Must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

exports.reduceUserDetails = (data) => {
  let userDetails = {};
  if (!isEmpt(data.bio.trim())) userDetails.bio = data.bio;
  if (!isEmpt(data.website.trim())) {
    if (data.website.trim().substring(0, 4) !== "http") {
      userDetails.website = `http://${data.website.trim()}`;
    } else userDetails.website = data.website;
  }
  if (!isEmpt(data.location.trim())) userDetails.location = data.location;

  return userDetails;
};
