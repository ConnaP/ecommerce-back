const products = async (req, res) => {
  const products = [
    {
      id: 1,
      name: "Jeans Wide Leg",
      price: 19990,
      img: [
        "pantalon1.jpeg",
        "pantalon2.jpeg",
        "pantalon3.jpeg",
      ],
      description:
        "Jeans Wide Leg Tiro Alto Mujer",
    },
    {
      id: 2,
      name: "Polera Manga Corta",
      price: 14990,
      img: [
        "polera1.jpeg",
        "polera2.jpeg",
        "polera3.jpeg",
      ],
      description:
        "Polera Manga Corta Algodón Rosada",
    },
    {
      id: 3,
      name: "Kimono",
      price: 24990,
      img: [
        "Kimono1.jpeg",
        "kimono2.jpeg",
        "kimono3.jpeg",
      ],
      description:
        "Kimono Mujer Manga Corta",
    },

    {
      id: 4,
      name: "Chaleco Mujer Negro",
      price: 24990,
      img: [
        "chaleco1.jpeg",
        "chaleco2.jpeg",
        "chaleco3.jpeg",
      ],
      description:
        "Chaleco Mujer Negro Con Brillos",
    },
    {
      id: 5,
      name: "Falda Corta",
      price: 19990,
      img: [
        "falda1.jpeg",
        "falda2.jpeg",
        "falda3.jpeg",
      ],
      description:
        "Falda Corta Algodón Mujer Celeste",
    },
    {
      id: 6,
      name: "Falda Short",
      price: 19990,
      img: [
        "FaldaShort1.jpeg",
        "FaldaShort2.jpeg",
        "FaldaShort3.jpeg",
      ],
      description:
        "Falda Short Corta Algodón Mujer Negro",
    },
    {
      id: 7,
      name: "Vestido Corto",
      price: 24990,
      img: [
        "Vestido1.jpeg",
        "Vestido2.jpeg",
        "Vestido3.jpeg",
      ],
      description:
        "Vestido Corto Mujer Color negro",
    },
    {
      id: 8,
      name: "Enterito",
      price: 29990,
      img: [
        "Enterito1.jpeg",
        "Enterito2.jpeg",
        "Enterito3.jpeg",
      ],
      description:
        "Enterito Largo Mujer color Negro",
    },
    {
      id: 9,
      name: "Chaqueta",
      price: 49990,
      img: [
        "Chaqueta1.jpeg",
        "Chaqueta2.jpeg",
        "Chaqueta3.jpeg",
      ],
      description:
        "Chaqueta negra cuerina",
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
