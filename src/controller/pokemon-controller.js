import Pokemon from "../model/Pokemon.js";

export const createPokemon = async (req, res) => {
  const { _id, name, description, type } = req.body;

  if (!_id) {
    res.status(400).json({ message: "Insira o numero do Pokemon" });
    return;
  }

  if (!name) {
    res.status(400).json({ message: "Insira o nome do Pokemon" });
    return;
  }

  if (!description) {
    res.status(400).json({ message: "Insira uma descrição para o Pokemon" });
    return;
  }

  if (!type) {
    res.status(400).json({ message: "Insira o tipo do Pokemon" });
    return;
  }

  const pokemon = {
    _id,
    name,
    description,
    image: "/" + req.file.path,
    type,
  };

  try {
    await Pokemon.create(pokemon);
    res.status(201).json({ message: "Pokemon inserido com sucesso!" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const findPokemon = async (req, res) => {
  try {
    const pokemons = await Pokemon.find({}, "-__v");
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updatePokemon = async (req, res) => {
  const id = req.params.id;
  const { name, description, type } = req.body;

  const pokemonExist = await Pokemon.findById(id);

  if (!pokemonExist) {
    res.status(404).json({ message: "Pokemon não foi encontrado!" });
  }

  const pokemon = {
    name,
    description,
    type,
  };

  try {
    await Pokemon.findByIdAndUpdate(id, pokemon);
    res.status(200).json({ message: "Pokemon atualizado" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deletePokemon = async (req, res) => {
  const id = req.params.id;

  const pokemonExist = await Pokemon.findById(id);

  if (!pokemonExist) {
    res.status(404).json({ message: "Pokemon não foi encontrado!" });
  }

  try {
    await Pokemon.findByIdAndDelete(id);
    res.status(200).json({ message: "Pokemon deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

