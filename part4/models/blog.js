const mongoose = require("mongoose");
const config = require("../utils/config");

const blogSchema = mongoose.Schema({
  title: {type:String, requred:true},
  author: String,
  url: {type:String, required:true},
  likes: { type: Number, default: 0 },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

blogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const mongoUrl = config.MONGODB_URI;
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.model("Blog", blogSchema);
