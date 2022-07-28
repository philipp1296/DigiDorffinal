// store all listings
// some dummy data for example

var listings = [
  {
    id: 1,
    title: "Bröchtenaktion - Bäckerei Möbius",
    description:
      "5 Spezialbrötchen Ihrer Wahl gibt es bei uns jetzt noch günstiger zum besonders niedrigen Aktionspreis!",
    images: [{ fileName: "backeraktion" }],
    village: "Mörlenbach",
    date: "",
    intervall: "Immer Samstags und Sonntags",
    categoryId: 6,
    userId: 4,
  },

  {
    id: 2,
    title: "Feuerwehrfest",
    description:
      "Am 13.08.2022 findet ein Feuerwehrfest statt. Das Ganze findet auf dem Gelände der Feuerwehr in Hemsbach statt. Für die musikalische Gestaltung wird eine Band sorgen. Wir freuen uns auf zahlreiches Erscheinen!",
    images: [{ fileName: "feuerwehrfest" }],
    village: "Hemsbach",
    categoryId: 2,
    userId: 2,
    date: "13.08.202",
    intervall: "Jährlich",
  },
  {
    id: 3,
    title: "Suchen Nachhilfe in Mathematik",
    description:
      "Hallo, wir suchen für unseren Sohn (16 Jahre) einen Nachhilfelehrer:in für das Fach Mathematik. Über die Bezahlung und weiteres können wir uns gerne in einem Gespräch austauschen. Sie erreichen uns unter folgender Nummer: 0176 - 123123123",
    images: [{ fileName: "nachhilfe" }],
    village: "Mörlenbach",
    categoryId: 5,
    userId: 3,
    date: "02.08.2022",
    intervall: "Wöchentlich",
  },
  {
    id: 4,
    title: "Fahrrad zu verkaufen",
    description:
      "Ich habe ein Fahrrad zu verkaufen. Das Fahrrad ist vier Jahre alt und noch in einem sehr guten Zustand. Bei Interesse können Sie sich gerne bei mir melden unter: 0176-123123321",
    images: [{ fileName: "Fahrrad" }],
    village: "Wilhelmsfeld",
    categoryId: 3,
    userId: 3,
    date: "20.07.2022",
    intervall: "Einmalig",
  },
  {
    id: 5,
    title: "Fahrradfahren in der MRN",
    description:
      "Hey, wir sind zwei Jungs und planen eine Fahrradtour durch die Metropolregion Rhein-Neckar. Falls ihr Interesse habt, könnt ihr euch gerne bei uns unter folgender Nummer melden: 0176 / 123123414. Wir freuen uns! ",
    images: [{ fileName: "route" }],
    village: "Mörlenbach",
    categoryId: 1,
    userId: 1,
    date: "06.08.2022",
    intervall: "Einmalig",
  },
];

// get length of list to set new listing id
var id = listings.length;

// handle adding a new listing
const addListing = (listing) => {
  id = id + 1;
  listing.id = id;
  listings.push(listing);
};

// handle deleting a listing
const deleteListing = (listingid) =>
  // filter listings for the passed listingid
  (listings = listings.filter((x) => x.id !== listingid));

// get all listings
const getListings = () => listings;

module.exports = {
  addListing,
  getListings,
  deleteListing,
};
