const products = async (req, res) => {
  const products = [
    {
      id: 1,
      name: "pantalon",
      price: 300,
      img: "../../public/assets/chalas.jpg",
      description:
        "Some quick example text to build on the card title and make",
    },
    {
      id: 2,
      name: "pantalon",
      price: 300,
      img: "../../public/assets/pantalon.jpeg",
      description:
        "Some quick example text to build on the card title and make",
    },
    {
      id: 3,
      name: "pantalon",
      price: 300,
      img: "../../public/assets/polera.jpeg",
      description:
        "Some quick example text to build on the card title and make",
    },

    {
      id: 4,
      name: "pantalon",
      price: 300,
      img: "../../public/assets/polera2.jpeg",
      description:
        "Some quick example text to build on the card title and make",
    },
    {
      id: 5,
      name: "pantalon",
      price: 300,
      img: "../../public/assets/poleron.jpeg",
      description:
        "Some quick example text to build on the card title and make",
    },
    {
      id: 6,
      name: "pantalon",
      price: 300,
      img: "../../public/assets/poleron2.jpeg",
      description:
        "Some quick example text to build on the card title and make",
    },
    {
      id: 7,
      name: "pantalon",
      price: 300,
      img: "../../public/assets/poleron3.jpeg",
      description:
        "Some quick example text to build on the card title and make",
    },
    {
      id: 8,
      name: "pantalon",
      price: 300,
      img: "../../public/assets/zapatilla.jpeg",
      description:
        "Some quick example text to build on the card title and make",
    },
    {
      id: 9,
      name: "pantalon",
      price: 300,
      img: "../../public/assets/zapatilla2.jpeg",
      description:
        "Some quick example text to build on the card title and make",
    },
  ];

  return res.status(200).json({
    message: "OK",
    detail: products,
  });
};

module.exports = {
  products,
};
