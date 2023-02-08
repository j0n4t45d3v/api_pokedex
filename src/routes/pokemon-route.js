import { Router } from "express";
import uploads from "../config/config-multer.js";
import {
  createPokemon,
  findPokemon,
  updatePokemon,
  deletePokemon,
} from "../controller/pokemon-controller.js";

const route = Router();

route.post("/register", uploads.single("image"), createPokemon);

route.get("/", findPokemon);

route.patch("/:id", updatePokemon);

route.delete("/:id", deletePokemon);

export default route;
