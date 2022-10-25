const userService = require('../users/userService');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.findUserByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }
    const isMatch = await user.validatePassword(password);
    if (!isMatch) {
      throw new Error('Wrong password');
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

exports.register = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  try {

    const user = await userService.registerNewUser({ email, password, firstName, lastName });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
