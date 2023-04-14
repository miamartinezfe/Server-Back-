const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
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

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  try {
    const found = login(email, password);
    if (found) {
      return res.status(200).json({ access: true });
    } else return res.status(200).json({ access: false });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/fav", (req, res) => {
  const char = req.body;
  try {
    const favorites = postFav(char);
    return res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/fav/:id", (req, res) => {
  const { id } = req.params;
  try {
    const favorites = deleteFav(id);
    return res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
