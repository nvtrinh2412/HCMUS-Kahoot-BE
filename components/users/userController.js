const userService = require('../users/userService');

exports.registerNewUser = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  try {

    const user = await userService.registerNewUser({ email, password, firstName, lastName });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
