const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const getChars = require("../controllers/getChars");
const router = Router();

router.get("/character/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const newChar = await getCharById(id);
    res.status(200).json(newChar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/character", async (req, res) => {
  try {
    const chars = await getChars();
    res.status(200).json(newChar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json("Faltan datos");
  try {
    const found = await login(email, password);
    if (found.length > 0) {
      return res.status(200).json({ access: true });
    } else return res.status(404).send("Usuario o contrasena incorrectos");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json("Faltan datos");
  try {
    const newUser = await postUser(email, password);
    console.log(newUser);
    if (newUser[1]) {
      return res.status(200).json(newUser[0]);
    } else return res.status(400).json("No pudo ser creado");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/fav", async (req, res) => {
  const { id, name, origin, status, image, species, gender } = req.body;
  if (!id || !name || !origin || !status || !image || !species || !gender)
    return res.status(401).json({ error: "faltan datos" });
  try {
    const favorites = await postFav(
      id,
      name,
      origin,
      status,
      image,
      species,
      gender
    );
    return res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/fav/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const favorites = await deleteFav(id);
    return res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
