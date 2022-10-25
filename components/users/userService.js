const User = require('./userModel');

exports.findUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user;
}
exports.registerNewUser = async (data) => {
  const { email, password, firstName, lastName } = data;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User already exists');
  }
  const user = new User({ email, password, firstName, lastName });
  await user.save();
  return user;
}

