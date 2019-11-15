const notes = [
  {
    title: "My next trip",
    body: "I would like to go to spain"
  },
  {
    title: "habbits to work on",
    body: "Excersice, and eat better"
  },
  {
    title: "Office modification",
    body: "A really need a new chair :P"
  }
];

const ps = document.querySelectorAll("p");

ps.forEach(function(p) {
  p.textContent = "******";
});

const newParagraph = document.createElement("p");
newParagraph.textContent = "this is the new paragraph.";
document.querySelector("body").appendChild(newParagraph);
