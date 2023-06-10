let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;
  myFavorites.push(character);
  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const id = req.params.id; // Se obtiene el valor del parámetro "id" correctamente
  myFavorites = myFavorites.filter((favorite) => favorite.id !== +id);
  return res.status(200).json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
