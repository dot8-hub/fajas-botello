export const contact = {
  domain: "fajasbotello.com",
  displayPhone: "+57 320 256 5311",
  whatsappNumber: "573202565311",
};

const colorMap = {
  Negro: "#111111",
  Beige: "#d8bfa9",
  Cocoa: "#8a5e4b",
  Blanco: "#f4eee8",
};

export const products = [
  {
    id: "cintura-alta",
    name: "Faja cintura alta con broches",
    price: "$1,199 MXN",
    tag: "Moldeo diario",
    image: "/assets/producto-temporal.png",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro", "Beige"],
    colorMap,
    description: "Compresión firme para cintura, abdomen y espalda baja.",
  },
  {
    id: "body-moldeador",
    name: "Body moldeador escote en V",
    price: "$1,299 MXN",
    tag: "Más vendido",
    image: "/assets/producto-temporal-2.png",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Cocoa"],
    colorMap,
    description: "Diseño completo para realzar curvas con ajuste cómodo.",
  },
  {
    id: "short-moldeador",
    name: "Short moldeador levanta glúteos",
    price: "$999 MXN",
    tag: "Uso discreto",
    image: "/assets/producto-temporal-3.png",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Beige", "Cocoa"],
    colorMap,
    description: "Ideal bajo ropa ajustada, con soporte en abdomen y cadera.",
  },
  {
    id: "cinturilla",
    name: "Cinturilla reductora deportiva",
    price: "$799 MXN",
    tag: "Entrenamiento",
    image: "/assets/producto-temporal-4.png",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Blanco"],
    colorMap,
    description: "Soporte para actividad ligera y rutina diaria.",
  },
];
