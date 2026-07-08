// Product catalog for The Feelings Factory
// Images are hotlinked from the existing Etsy listings (FactorMyFeels shop).
// Swap `images` arrays for your own hosted photos whenever you'd like —
// see SETUP.md for how.

const PRODUCTS = [
  {
    slug: "fk-your-silver-lining",
    name: "F**k Your Silver Lining",
    price: 20,
    tagline: "For when \"at least you're alive\" isn't the comfort they think it is.",
    description:
      "Ok so we are positive people. We really are.. but when we trust someone with our true feelings, and they sit there and say, \"Well, at least you're alive!\" it just doesn't feel good. It's dismissive. We are tired of our feelings being dismissed. So, F**K your silver lining! (Respectfully)",
    colors: ["Blue"],
    sizes: ["S", "M", "L", "XL", "2X", "3X"],
    images: [
      "https://i.etsystatic.com/65329339/r/il/14b8e5/8192369369/il_1080xN.8192369369_taf5.jpg",
      "https://i.etsystatic.com/65329339/r/il/e72f79/8192369357/il_794xN.8192369357_bydx.jpg"
    ]
  },
  {
    slug: "fawn-af-og",
    name: "FAWN AF (OG Version)",
    price: 20,
    tagline: "You are FAWN AF.",
    description:
      "Fawning means acting like a people-pleaser to an extreme degree — trying to win approval, avoiding conflict, and putting other people's needs above your own. This is the first shirt we ever made, born out of a real therapy session. If you're a fawn in an overwhelming, scary world, you're in the right place.",
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL", "2X", "3X"],
    images: [
      "https://i.etsystatic.com/65329339/r/il/016333/8137238717/il_1080xN.8137238717_rx9j.jpg",
      "https://i.etsystatic.com/65329339/r/il/761198/8137239545/il_794xN.8137239545_ks5n.jpg"
    ]
  },
  {
    slug: "fawn-af-revamp",
    name: "FAWN AF (Revamp)",
    price: 20,
    tagline: "Fawn response: activated.",
    description:
      "A revamp of the original OG FAWN AF tee, for anyone who wants a little more context — or just wants to be a deer wandering the forest. We're out there too. We love nature.",
    colors: ["Military Green", "Black", "Maroon"],
    sizes: ["S", "M", "L", "XL", "2X"],
    images: [
      "https://i.etsystatic.com/65329339/r/il/cb849f/8137196007/il_1080xN.8137196007_lgla.jpg",
      "https://i.etsystatic.com/65329339/r/il/f58c52/8089290984/il_794xN.8089290984_7iwf.jpg"
    ]
  },
  {
    slug: "burning-earth-this-is-fine",
    name: "Burning Earth (This Is Fine) Tee",
    price: 20,
    tagline: "Things are not okay.....",
    description:
      "The Earth is on fire and everything is fine, actually. For anyone who needs to wear their emotional state on their chest today.",
    colors: ["Black"],
    sizes: ["XS", "S", "M", "L", "XL", "2X", "3X"],
    images: [
      "https://i.etsystatic.com/65329339/r/il/b0454a/8081697745/il_1080xN.8081697745_h3sz.jpg",
      "https://i.etsystatic.com/65329339/r/il/5cf1f0/8081698387/il_794xN.8081698387_qcjh.jpg"
    ]
  },
  {
    slug: "be-decent",
    name: "Be Decent",
    price: 20,
    tagline: "It's not hard.",
    description:
      "You would think that this doesn't need to be said, but be a decent fricking human being. Made with puff vinyl to really drive home the point.",
    colors: ["Black", "Green"],
    sizes: ["XS", "S", "M", "L", "XL", "2X", "3X"],
    images: [
      "https://i.etsystatic.com/65329339/r/il/4b4747/8038907086/il_1080xN.8038907086_iehy.jpg",
      "https://i.etsystatic.com/65329339/r/il/ca81fe/8038907232/il_794xN.8038907232_c2ko.jpg"
    ]
  },
  {
    slug: "senses-activated-octopus",
    name: "Senses Activated Octopus Tee",
    price: 20,
    tagline: "\"Senses: activated.\" isn't just a phrase, it's a state of being.",
    description:
      "For the ones who feel everything. This shirt is for the people whose senses are always on, always noticing, always processing — the quiet observers, the deep feelers, the ones who pick up on everything whether they want to or not.",
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL", "2X", "3X"],
    images: [
      "https://i.etsystatic.com/65329339/r/il/69f43c/8033066968/il_1080xN.8033066968_idnm.jpg",
      "https://i.etsystatic.com/65329339/r/il/7f06f1/7880536654/il_794xN.7880536654_6zl9.jpg"
    ]
  },
  {
    slug: "you-brighten-every-room",
    name: "You Brighten Every Room You Walk Out Of",
    price: 20,
    tagline: "We love deeply. However...",
    description:
      "We love deeply. However, sometimes we feel better when you leave the room. A love letter to introverts everywhere, with a smiling sun that means it (mostly).",
    colors: ["Green on Black", "Green on Grey", "Red on Black", "Pink on Black"],
    sizes: ["XS", "S", "M", "L", "XL", "2X", "3X"],
    images: [
      "https://i.etsystatic.com/65329339/r/il/a1b5f8/8038597862/il_1080xN.8038597862_4do1.jpg",
      "https://i.etsystatic.com/65329339/r/il/b1b2f1/8038609078/il_794xN.8038609078_hd2c.jpg"
    ]
  }
];

function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}
