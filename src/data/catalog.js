export const contact = {
  domain: "fajasbotello.com",
  displayPhone: "+57 320 256 5311",
  whatsappNumber: "573202565311",
};

const colorMap = {
  Negro: "#111111",
  Beige: "#d8bfa9",
};

const allSizes = ["XS", "S", "M", "L", "XL", "2XL"];

export const products = [
  {
    id: "faja-enteriza-lipo-7-varillas",
    name: "Faja Enteriza Lipo 7 Varillas",
    price: "$1,800 MXN",
    tag: "Lipo 7 varillas",
    image: "/assets/faja_enteriza_7/main.png",
    images: {
      Negro: "/assets/faja_enteriza_7/negro.png",
      Beige: "/assets/faja_enteriza_7/beige.png",
    },
    sizes: allSizes,
    colors: ["Negro", "Beige"],
    colorMap,
    description: "Faja enteriza de compresion firme para moldear abdomen, cintura y espalda.",
  },
  {
    id: "chaleco-brasier-extremo",
    name: "Chaleco Brasier Extremo",
    price: "$1,600 MXN",
    tag: "Soporte extremo",
    image: "/assets/chaleco_brasier_extremo/main.png",
    images: {
      Negro: "/assets/chaleco_brasier_extremo/negro.png",
      Beige: "/assets/chaleco_brasier_extremo/beige.png",
    },
    sizes: allSizes,
    colors: ["Negro", "Beige"],
    colorMap,
    description: "Chaleco con brasier integrado para soporte alto y ajuste de espalda.",
  },
  {
    id: "chaleco-extremo",
    name: "Chaleco Extremo",
    price: "$1,500 MXN",
    tag: "Control de espalda",
    image: "/assets/chaleco_extremo/main.png",
    images: {
      Negro: "/assets/chaleco_extremo/negro.png",
      Beige: "/assets/chaleco_extremo/beige.png",
    },
    sizes: allSizes,
    colors: ["Negro", "Beige"],
    colorMap,
    description: "Chaleco de compresion firme para abdomen, cintura y espalda alta.",
  },
];
