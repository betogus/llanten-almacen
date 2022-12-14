
const productos = [
    {
      id: 1,
      name: "POROTOS ALUBIA",
      precio100gr: 30,
      precioKg: 220,
      hayStock: true,
      categoria: "legumbresYHarinas"
    },
    {
      id: 2,
      name: "POROTOS DE SOJA",
      precio100gr: 12,
      precioKg: 95,
      hayStock: true,
      categoria: "legumbresYHarinas"
    },
    {
      id: 3,
      name: "POROTOS ADUKI",
      precio100gr: 35,
      precioKg: 310,
      hayStock: true,
      categoria: "legumbresYHarinas"
    },
    {
      id: 4,
      name: "POROTOS COLORADOS",
      precio100gr: 30,
      precioKg: 240,
      hayStock: true,
      categoria: "legumbresYHarinas"
    },
    {
      id: 5,
      name: "POROTOS MUNG",
      precio100gr: 20,
      precioKg: 190,
      hayStock: true,
      categoria: "legumbresYHarinas"
    },
    {
      id: 6,
      name: "POROTOS NEGROS",
      precio100gr: 25,
      precioKg: 245,
      hayStock: true,
      categoria: "legumbresYHarinas"
    },
    {
      id: 7,
      name: "POROTOS LUPINES",
      precio100gr: 25,
      precioKg: 225,
      hayStock: true,
      categoria: "legumbresYHarinas"
    },
    {
      id: 8,
      name: "GARBANZOS",
      precio100gr: 25,
      precioKg: 249,
      hayStock: true,
      categoria: "legumbresYHarinas"
    },
    {
      id: 29,
      name: "BOLITAS DE CHOCOLATE",
      precio100gr: 45,
      precioKg: 415,
      hayStock: true,
      categoria: "cereales"
    },
    {
      id: 30,
      name: "ALMOHADITAS DOBLE SALVADO",
      precio100gr: 40,
      precioKg: 360,
      hayStock: true,
      categoria: "cereales"
    },
    {
      id: 31,
      name: "ALMOHADITAS FRUTILLA",
      precio100gr: 55,
      precioKg: 520,
      hayStock: true,
      categoria: "cereales"
    },
    {
      id: 32,
      name: "ALMOHADITAS LIMÓN",
      precio100gr: 65,
      precioKg: 640,
      hayStock: true,
      categoria: "cereales"
    },
    {
      id: 33,
      name: "ALMOHADITAS AVELLANA",
      precio100gr: 55,
      precioKg: 520,
      hayStock: true,
      categoria: "cereales"
    },
    {
      id: 34,
      name: "CHOCOLATE BLANCO",
      precio100gr: 55,
      precioKg: 520,
      hayStock: true,
      categoria: "cereales"
    },
    {
      id: 35,
      name: "LIMÓN",
      precio100gr: 55,
      precioKg: 520,
      hayStock: true,
      categoria: "cereales"
    },
    {
      id: 36,
      name: "ALMOHADITAS MANÍ",
      precio100gr: 70,
      precioKg: 645,
      hayStock: true,
      categoria: "cereales"
    },
    {
      id: 37,
      name: "BASTONCITOS DE SALVADO",
      precio100gr: 38,
      precioKg: 360,
      hayStock: true,
      categoria: "cereales"
    },
    {
      id: 38,
      name: "SALVADO DE TRIGO",
      precio100gr: 12,
      precioKg: 105,
      hayStock: true,
      categoria: "cereales"
    },
    {
      id: 39,
      name: "SALVADO DE AVENA",
      precio100gr: 20,
      precioKg: 190,
      hayStock: true,
      categoria: "cereales"
    },
    {
      id: 56,
      name: "PASAS DE UVA NEGRAS",
      precio100gr: 35,
      precioKg: 345,
      hayStock: true,
      categoria: "frutosSecos"
    },
    {
      id: 57,
      name: "PASAS DE UVA RUBIAS",
      precio100gr: 65,
      precioKg: 620,
      hayStock: true,
      categoria: "frutosSecos"
    },
    {
      id: 58,
      name: "OREJONES",
      precio100gr: 130,
      precioKg: 1245,
      hayStock: true,
      categoria: "frutosSecos"
    },
    {
      id: 59,
      name: "DAMASCOS",
      precio100gr: 120,
      precioKg: 1100,
      hayStock: true,
      categoria: "frutosSecos"
    },
    {
      id: 60,
      name: "ANANÁ CONFITADO",
      precio100gr: 135,
      precioKg: 1345,
      hayStock: true,
      categoria: "frutosSecos"
    },
    {
      id: 61,
      name: "JENGIBRE CONFITADO",
      precio100gr: 150,
      precioKg: 1491,
      hayStock: true,
      categoria: "frutosSecos"
    },
    {
      id: 62,
      name: "DÁTILES",
      precio100gr: 65,
      precioKg: 600,
      hayStock: true,
      categoria: "frutosSecos"
    },
    {
      id: 63,
      name: "CACAO AMARGO",
      precio100gr: 85,
      precioKg: 800,
      hayStock: true,
      categoria: "almacenSueltos"
    },
    {
      id: 64,
      name: "AZÚCAR MASCABO",
      precio100gr: 28,
      precioKg: 260,
      hayStock: true,
      categoria: "almacenSueltos"
    },
    {
      id: 65,
      name: "AZÚCAR NEGRA",
      precio100gr: 25,
      precioKg: 200,
      hayStock: true,
      categoria: "almacenSueltos"
    },
    {
      id: 66,
      name: "AZÚCAR RUBIA",
      precio100gr: 27,
      precioKg: 250,
      hayStock: true,
      categoria: "almacenSueltos"
    },
    {
      id: 67,
      name: "BICARBONATO DE SODIO",
      precio100gr: 35,
      precioKg: 300,
      hayStock: true,
      categoria: "almacenSueltos"
    },
    {
      id: 68,
      name: "AZÚCAR IMPALPABLE",
      precio100gr: 27,
      precioKg: 250,
      hayStock: true,
      categoria: "almacenSueltos"
    },
    {
      id: 69,
      name: "SAL FINA DEL HIMALAYA",
      precio100gr: 30,
      precioKg: 250,
      hayStock: true,
      categoria: "almacenSueltos"
    },
    {
      id: 70,
      name: "ALPISTE PELADO",
      precio100gr: 38,
      precioKg: 375,
      hayStock: true,
      categoria: "semillas"
    },
    {
      id: 71,
      name: "SÉSAMO INTEGRAL",
      precio100gr: 37,
      precioKg: 350,
      hayStock: true,
      categoria: "semillas"
    },
    {
      id: 72,
      name: "SÉSAMO BLANCO",
      precio100gr: 70,
      precioKg: 685,
      hayStock: true,
      categoria: "semillas"
    },
    {
      id: 73,
      name: "SÉSAMO NEGRO",
      precio100gr: 68,
      precioKg: 665,
      hayStock: true,
      categoria: "semillas"
    },
    {
      id: 74,
      name: "CHIA",
      precio100gr: 38,
      precioKg: 360,
      hayStock: true,
      categoria: "semillas"
    },
    {
      id: 75,
      name: "AMARANTO",
      precio100gr: 42,
      precioKg: 415,
      hayStock: true,
      categoria: "semillas"
    },
    {
      id: 76,
      name: "MIJO PELADO",
      precio100gr: 35,
      precioKg: 332,
      hayStock: true,
      categoria: "semillas"
    },
    {
      id: 77,
      name: "POLEN",
      precio100gr: 420,
      precioKg: 4143,
      hayStock: true,
      categoria: "semillas"
    },
    {
      id: 78,
      name: "PSYLLIUM",
      precio100gr: 75,
      precioKg: 725,
      hayStock: true,
      categoria: "semillas"
    },
    {
      id: 79,
      name: "LINO",
      precio100gr: 27,
      precioKg: 250,
      hayStock: true,
      categoria: "semillas"
    }
  ]

  export default productos