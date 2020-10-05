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

exports.validateloginData = (data) => {
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
