const NON_FICTION = [
  "Self-help",
  "How-to",
  "Memoir",
  "Biography",
  "Informational",
  "Reference",
  "Academic",
  "Cookbooks"
];
const FICTION = [
  {
    genre: "Romance",
    subGenres: [
      "Chick-Lit",
      "Christian",
      "Contemporary",
      "Erotica",
      "Glitz/Glamor",
      "Historical",
      "Multicultural",
      "Paranormal",
      "Romantic Comedy",
      "Romantic Suspense",
      "Sensual",
      "Spicy",
      "Sweet",
      "Young Adult"
    ]
  },
  {
    genre: "Horror",
    subGenres: [
      "Child in Peril",
      "Sub-genre",
      "Comic Horror",
      "Creepy Kids",
      "Dark Fantasy",
      "Dark Mystery/Noir",
      "Erotic Vampire",
      "Fabulist",
      "Gothic",
      "Hauntings",
      "Historical",
      "Magical Realism",
      "Psychological",
      "Quiet Horror",
      "Religious",
      "Science-Fiction Horror",
      "Splatter",
      "Supernatural Menaces",
      "Technology",
      "Weird Tales",
      "Young Adult",
      "Zombie"
    ]
  },
  {
    genre: "Thriller/Suspense",
    subGenres: [
      "Action",
      "Comic",
      "Conspiracy",
      "Crime",
      "Disaster",
      "Eco-Thriller",
      "Erotic",
      "Espionage",
      "Forensic",
      "Historical",
      "Horror",
      "Legal",
      "Medical",
      "Military",
      "Police Procedural",
      "Political Intrigue",
      "Psychological",
      "Romantic",
      "Supernatural",
      "Technological"
    ]
  },
  {
    genre: "Science Fiction/Fantasy",
    subGenres: [
      "Alternate History",
      "Arthurian Fantasy",
      "Bangsian Fantasy",
      "Biopunk",
      "Children’s Fantasy",
      "Comic",
      "Cyberpunk",
      "Dark Fantasy",
      "Dystopian",
      "Erotic",
      "Game-Related Fantasy",
      "Hard Science Fiction",
      "Heroic Fantasy",
      "High/Epic Fantasy",
      "Historical",
      "Military SF",
      "Mundane SF",
      "Mystery SF",
      "Mythic Fiction",
      "New Age",
      "Post-Apocalyptic",
      "Religious",
      "Romance",
      "Science Fantasy",
      "Social SF",
      "Soft SF",
      "Space Opera",
      "Spy-Fi",
      "Steampunk",
      "Superheroes",
      "Sword and Sorcery",
      "Thriller SF",
      "Time-Travel",
      "Urban Fantasy",
      "Vampire",
      "Wuxia",
      "Young Adult"
    ]
  },
  {
    genre: "Mystery/Crime",
    subGenres: [
      "Amateur Detective",
      "Child in Peril",
      "Classic Whodunit",
      "Comic (Bumbling Detective)",
      "Courtroom Drama",
      "Cozy",
      "Dark Thriller",
      "Espionage",
      "Forensic",
      "Heists and Capers",
      "Historical",
      "Inverted",
      "Locked Room",
      "Medical",
      "Police Procedural",
      "Private Detective",
      "Psychological Suspense",
      "Romantic",
      "Technothriller",
      "Thriller",
      "Woman in Jeopardy",
      "Young Adult"
    ]
  }
];

const fiction = FICTION.reduce(
  (acc, item, index) => ({
    ...acc,
    [item.genre]: {
      ckeckedAll: false,
      options: item.subGenres,
      checkedOptions: []
    }
  }),
  {}
);

export { fiction };
