const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { format } = require("date-fns");

const AuthorSchema = Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

AuthorSchema.virtual("name").get(function () {
  let fullname = "";
  if (this.first_name && this.family_name) {
    fullname = `${this.family_name}, ${this.first_name}`;
  }

  return fullname;
});

AuthorSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/author/${this._id}`;
});

AuthorSchema.virtual("date_of_birth_formated").get(function () {
  return this.date_of_birth;
  // return format(this.date_of_birth, "do MMM YYY");
});
AuthorSchema.virtual("date_of_death_formated").get(function () {
  return this.date_of_death;
  // return format(this.date_of_death, "do MMM YYY");
});

module.exports = mongoose.model("Author", AuthorSchema);
