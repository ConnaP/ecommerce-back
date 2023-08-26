const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
    // validate: {
    //   validator: function (v) {
    //     return /^[a-zA-Z0-9 ]{3,30}$/.test(v);
    //   },
    // },
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    index: true,
    validate: {
      validator: function (v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
      },
    },
  },
  phone: {
    type: Number,
    require: false,
  },
  address: {
    type: String,
    require: false,
  },
  rol: {
    type: String,
    require: false,
  },
  premium: {
    type: Boolean,
    require: false,
    default: false,
  },
  dob: {
    type: Date,
    require: false,
  },
});

mongoose.model("User", UserSchema);
