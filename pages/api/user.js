import connectDB from '../../middleware/mongodb';
import bcrypt from 'bcrypt';
import User from '../../models/user';
connectDB();
export default async (req, res) => {
  if (req.method === 'POST') {
    // Check if name, email or password is provided
    const { username, phone, email, password } = req.body;
    if (username && phone && email && password) {
        try {
          // Hash password to store it in DB
          var passwordhash = await bcrypt.sign(password);
          var user = new User({
            username: username,
            phone: phone,
            email: email,
            password: passwordhash,
          });
          // Create new user
          var usercreated = await user.save();
          return res.status(200).send(usercreated);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      } else {
        res.status(422).send('data_incomplete');
      }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

