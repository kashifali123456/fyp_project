const db = require("../models");
const User = db.user;

const uploadFiles = async (req, res) => {
  try {
    // Find User
    const user = await User.findByPk(req.userId);
    console.log(user);
    //Insert Image
    user.profile_url = req.file.filename;
    await user.save();

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    if (req.file.filename) {
      res.status(201).json({
        message: "Upload Successfully",
        url: req.file.filename,
      });
    }
  } catch (error) {
    return res.send(`Error when trying upload images: ${error}`);
  }
};
module.exports = {
  uploadFiles,
};
