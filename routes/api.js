/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
  res.json({
    name: 'Bob'
  });
};

exports.characters = function (req, res) {
  res.json({
    characters: [
  {
    "name":     "Tyrion Lannister",
    "house":    "Lannister",
    "actor":    "Peter Dinklage",
    "quote":    "It's not easy being drunk all the time. If it were easy, everyone would do it.",
    "episodes": 28,
    "img":      "tyrion-lannister.jpg"
  },
  {
    "name":     "Cersei Lannister",
    "house":    "Lannister",
    "actor":    "Lean Headey",
    "quote":    "Everyone who isn't us is an enemy.",
    "episodes": 27,
    "img":      "cersei-lannister.png"
  },
  {
    "name":     "Arya Stark",
    "house":    "Stark",
    "actor":    "Maisie Williams",
    "quote":    "Valar Morghulis.",
    "episodes": 27,
    "img":      "arya-stark.png"
  },
  {
    "name":     "Daenerys Targaryen",
    "house":    "Targaryen",
    "actor":    "Emilia Clarke",
    "quote":    "Where are my dragons?",
    "episodes": 25,
    "img":      "daenerys-targaryen.jpg"
  },
  {
    "name":     "Catelyn Stark",
    "house":    "Stark",
    "actor":    "Michelle Fairley",
    "quote":    "You can always say no, Ned.",
    "episodes": 25,
    "img":      "catelyn-stark.jpg"
  },
  {
    "name":     "Ned Stark",
    "house":    "Stark",
    "actor":    "Sean Bean",
    "quote":    "Winter is coming.",
    "episodes": 11,
    "img":      "ned-stark.jpg"
  },
  {
    "name":     "Hodor",
    "house":    "Stark",
    "actor":    "Kristian Nairn",
    "quote":    "Hodor.",
    "episodes": 17,
    "img":      "hodar.jpg"
  },
  {
    "name":     "Joffrey Baratheon",
    "house":    "Lannister",
    "actor":    "Jack Gleeson",
    "quote":    "I am the king! I will punish you.",
    "episodes": 23,
    "img":      "joffrey-baratheon.jpg"
  },
  {
    "name":     "Jaime Lannister",
    "house":    "Lannister",
    "actor":    "Nikolaj Coster-Waldau",
    "quote":    "I know. People have been swinging at me for years and they always seem to miss.",
    "episodes": 19,
    "img":      "jaime-lannister.png"
  },
  {
    "name":     "Robb Stark",
    "house":    "Stark",
    "actor":    "Richard Madden",
    "quote":    "Now we'll see what the words are worth.",
    "episodes": 21,
    "img":      "robb-stark.png"
  }

]
 
  });
};