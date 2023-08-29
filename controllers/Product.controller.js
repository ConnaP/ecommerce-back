const products = async (req, res) => {
  const products = [
    {
      id: 1,
      name: "Jeans Wide Leg",
      price: 19.990,
      img: [
        "../../public/assets/pantalon1.jpeg",
        "../../public/assets/pantalon2.jpeg",
        "../../public/assets/pantalon3.jpeg",
      ],
      description:
        "Jeans Wide Leg Tiro Alto Mujer",
    },
    {
      id: 2,
      name: "Polera Manga Corta",
      price: 14.990,
      img: [
        "../../public/assets/polera1.jpeg",
        "../../public/assets/polera2.jpeg",
        "../../public/assets/polera3.jpeg",
      ],
      description:
        "Polera Manga Corta Algodón Rosada",
    },
    {
      id: 3,
      name: "Kimono",
      price: 24.990,
      img: [
        "../../public/assets/Kimono1.jpeg",
        "../../public/assets/kimono2.jpeg",
        "../../public/assets/kimono3.jpeg",
      ],
      description:
        "Kimono Mujer Manga Corta",
    },

    {
      id: 4,
      name: "Chaleco Mujer Negro",
      price: 24.990,
      img: [
        "../../public/assets/chaleco1.jpeg",
        "../../public/assets/chaleco2.jpeg",
        "../../public/assets/chaleco3.jpeg",
      ],
      description:
        "Chaleco Mujer Negro Con Brillos",
    },
    {
      id: 5,
      name: "Falda Corta",
      price: 19.990,
      img: [
        "../../public/assets/falda1.jpeg",
        "../../public/assets/falda2.jpeg",
        "../../public/assets/falda3.jpeg",
      ],
      description:
        "Falda Corta Algodón Mujer Celeste",
    },
    {
      id: 6,
      name: "Falda Short",
      price: 19.990,
      img: [
        "../../public/assets/FaldaShort1.jpeg",
        "../../public/assets/FaldaShort2.jpeg",
        "../../public/assets/FaldaShort3.jpeg",
      ],
      description:
        "Falda Short Corta Algodón Mujer Color Negro",
    },
    {
      id: 7,
      name: "Vestido Corto",
      price: 24.990,
      img: [
        "../../public/assets/Vestido1.jpeg",
        "../../public/assets/Vestido2.jpeg",
        "../../public/assets/Vestido3.jpeg",
      ],
      description:
        "Vestido Corto Mujer Color negro",
    },
    {
      id: 8,
      name: "Enterito",
      price: 29.990,
      img: [
        "../../public/assets/Enterito1.jpeg",
        "../../public/assets/Enterito2.jpeg",
        "../../public/assets/Enterito3.jpeg",
      ],
      description:
        "Enterito Largo Mujer color Negro",
    },
    {
      id: 9,
      name: "Chaqueta",
      price: 49.990,
      img: [
        "../../public/assets/Chaqueta1.jpeg",
        "../../public/assets/Chaqueta2.jpeg",
        "../../public/assets/Chaqueta3.jpeg",
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
