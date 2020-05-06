let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

let userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      trim: true,
      required: "username is required",
    },
    /* removed because passport-local-mongoose will encrypt password authomatically
    password:{
        type:String,
        default:'',
        trim:true,
        required:'password is required'
    }*/
    email: {
      type: String,
      default: "",
      trim: true,
      required: "email is required",
    },
    displayName: {
      type: String,
      default: "",
      trim: true,
      required: "Display name is required",
    },
    created: {
      type: Date,
      default: Date.now,
    },
    updated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "users",
  }
);

//configuration option for user schema
let option = {
  missingPasswordError: "Wrong/Missing Password",
};

userSchema.plugin(passportLocalMongoose, option);

module.exports.User = mongoose.model("User", userSchema);