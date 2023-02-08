import dotenv from "dotenv";
dotenv.config()

const password = process.env.PASSWORD_DB;
const URL_DB = `mongodb+srv://Jonatas:${password}@clusterpokemon.bacewq0.mongodb.net/?retryWrites=true&w=majority`;

export default URL_DB;
