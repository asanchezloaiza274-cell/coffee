import ExampleImage from "./img/example.PNG";

// Links para los headers

export const links = [
  { to: "/", label: "Inicio" },
  { to: "/menu", label: "Menú" },
  { to: "/about-us", label: "Nosotros" },
  { to: "/reservations", label: "Reservas" },
];

// Items para el menú

export const items = [
  {
    title: "Café",
    items: [
      {
        name: "Espresso",
        description: "Doble, notas de chocolate",
        price: "0.00",
      },
      {
        name: "Flat white",
        description: "Espresso y leche sedosa",
        price: "0.00",
      },
      {
        name: "Capuchino",
        description: "Espuma cremosa y cacao",
        price: "0.00",
      },
      {
        name: "Cold brew",
        description: "Infusión de 18 horas",
        price: "0.00",
      },
      {
        name: "Filtrado de origen",
        description: "Método V60, café del mes",
        price: "0.00",
      },
    ],
  },
  {
    title: "Té y otras bebidas",
    items: [
      { name: "Té negro", description: "Hojas enteras", price: "$0.00" },
      {
        name: "Matcha latte",
        description: "Con leche a elegir",
        price: "$0.00",
      },
      {
        name: "Chocolate caliente",
        description: "Cacao al 70%",
        price: "$0.00",
      },
      {
        name: "Limonada de temporada",
        description: "Con hierbas frescas",
        price: "$0.00",
      },
    ],
  },
  {
    title: "Dulce",
    items: [
      { name: "Croissant", description: "Mantequilla", price: "$0.00" },
      {
        name: "Tarta del día",
        description: "Pregunta por el sabor",
        price: "$0.00",
      },
      {
        name: "Galleta de chocolate",
        description: "Sal en escamas",
        price: "$0.00",
      },
      { name: "Brownie", description: "Con nueces", price: "$0.00" },
    ],
  },
  {
    title: "Salado",
    items: [
      {
        name: "Tostada de aguacate",
        description: "Masa madre y huevo",
        price: "$0.00",
      },
      {
        name: "Sándwich de la casa",
        description: "[Ingredientes]",
        price: "$0.00",
      },
      { name: "Quiche del día", description: "Con ensalada", price: "$0.00" },
      { name: "Bowl de granola", description: "Yogur y fruta", price: "$0.00" },
    ],
  },
];

// Valores para la página de nosotros

export const values = [
  {
    count: "01",
    title: "Origen responsable",
    text: "[Cómo y con quién trabajas.]",
  },
  {
    count: "02",
    title: "Tueste semanal",
    text: "[Frescura y perfil de tueste.]",
  },
  {
    count: "03",
    title: "Trato cercano",
    text: "[Tu forma de recibir.]",
  },
];

// Carta para nuestro equipo

export const ourTeam = [
  { photo: ExampleImage, name: "[Nombre]", rol: "Barista, Fundador" },
  { photo: ExampleImage, name: "[Nombre]", rol: "Pastelería" },
  { photo: ExampleImage, name: "[Nombre]", rol: "Tostador" },
];
