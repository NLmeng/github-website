const itemsPerPage = 5;

const patterns = [
  "observer",
  "state",
  "strategy",
  "visitor",
  "factory",
  "singleton",
  "composite",
  "decorator",
  "facade",
];
const oods = ["parking_lot"];
const sectionsData = {
  patterns: {
    currentPage: 1,
    itemsPerPage: itemsPerPage,
    totalPages: Math.ceil(patterns.length / itemsPerPage),
    loaded: false,
  },
  oods: {
    currentPage: 1,
    itemsPerPage: itemsPerPage,
    totalPages: Math.ceil(oods.length / itemsPerPage),
    loaded: false,
  },
};

async function loadJSONData(filedir) {
  const response = await fetch(`./persist/${filedir}.JSON`);
  return response.json();
}
