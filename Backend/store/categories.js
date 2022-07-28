// store all categories

const categories = [
  {
    id: 1,
    name: "Sport und Freizeit",
    icon: "basketball",
    backgroundColor: "#fc5c65",
    color: "white",
  },
  {
    id: 2,
    name: "Veranstaltungen",
    icon: "silverware-fork-knife",
    backgroundColor: "#fd9644",
    color: "white",
  },
  {
    id: 3,
    name: "Verkauf",
    icon: "cart-fast",
    backgroundColor: "#fed330",
    color: "white",
  },
  {
    id: 4,
    name: "Suche",
    icon: "magnify",
    backgroundColor: "#26de81",
    color: "white",
  },
  {
    id: 5,
    name: "Lernen",
    icon: "pencil",
    backgroundColor: "lightblue",
    color: "white",
  },
  {
    id: 6,
    name: "Aktionen",
    icon: "cart-variant",
    backgroundColor: "purple",
    color: "white",
  },
];

// get all categories
const getCategories = () => categories;

// get a category by its id
const getCategory = (id) => categories.find((c) => c.id === id);

module.exports = {
  getCategories,
  getCategory,
};
