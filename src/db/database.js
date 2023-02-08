import mongoose from "mongoose";
import URL_DB from "../config/config-db.js";

const url = URL_DB;

mongoose.set("strictQuery", true);

mongoose.connect(url).then(() => {
  console.log("db conectado");
});

export default mongoose;
