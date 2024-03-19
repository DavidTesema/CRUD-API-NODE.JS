const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_PASSWORD)
  .then(() => {
    console.log("DB Connect");
  })
  .catch(() => {
    console.log("DB Failed");
  });
