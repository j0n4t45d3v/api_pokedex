import express from "express";
import "./db/database.js";
// Importa Routas
import pokemonRoute from "./routes/pokemon-route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Carrega Rotas
app.use("/pokemons", pokemonRoute);
app.use("/uploads", express.static("uploads"));

export default app;
