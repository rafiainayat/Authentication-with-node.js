import Users from "../models/UsersSchema.js";


// REGISTER USER
const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({
        status: false,
        message: "all fields are required",
      });
    }

    const alreadyExist = await Users.findOne({ email });

    if (alreadyExist) {
      return res.json({
        status: false,
        message: "email already exists",
      });
    }

    const user = new Users({
      name,
      email,
      password,
    });

    const data = await user.save();

    res.json({
      status: true,
      message: "user created successfully",
      user: data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
    });
  }
};



// LOGIN USER
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        status: false,
        message: "all fields are required",
      });
    }

    const user = await Users.findOne({ email });

    if (user == null) {
      return res.json({
        status: false,
        message: "cannot find user",
      });
    }

    if (user.password !== password) {
      return res.json({
        status: false,
        message: "invalid credentials",
      });
    }

    res.json({
      status: true,
      message: "user login successfully",
      user: user,
    });
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
    });
  }
};



// GET ALL USERS
const allUsers = async (req, res) => {
  try {
    const user = await Users.find();

    res.json({
      status: true,
      message: "user fetched successfully",
      data: user,
    });
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
    });
  }
};



// GET SINGLE USER
const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Users.findById(id);

    if (user == null) {
      return res.json({
        status: false,
        message: "cannot find user",
      });
    }

    res.json({
      status: true,
      message: "user fetched successfully",
      data: user,
    });
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
    });
  }
};



// UPDATE USER
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Users.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.json({
      status: true,
      message: "user updated successfully",
      updatedData: user,
    });
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
    });
  }
};



// DELETE USER
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await Users.findByIdAndDelete(id);

    res.json({
      status: true,
      message: "user deleted successfully",
    });
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
    });
  }
};

export {
  addUser,
  loginUser,
  allUsers,
  getUser,
  updateUser,
  deleteUser,
};