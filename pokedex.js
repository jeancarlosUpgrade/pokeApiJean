// consts ol, input, colors, imgs, typeColor and urls-APIS
const ol$$ = document.querySelector("#pokedex");
const input$$ = document.querySelector(".pokeSearch");
ol$$.setAttribute("class", "ordenateList");
const baseUrl = `https://pokeapi.co/api/v2/pokemon/?limit=150`;
const pokeNameUrl = `https://pokeapi.co/api/v2/pokemon/`;
const limit = `?limit=150`;
// const pokemons = [null];
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const imgs = {
  fire: "https://pm1.narvii.com/7243/8ee17e7a8790303410b30a2fbcb18183fc12166er1-623-499v2_hq.jpg",
  grass:
    "https://pm1.narvii.com/7243/0b36782d158f6da0639e38ebf94af3d5c37288c2r1-668-486v2_hq.jpg",
  electric:
    "https://pm1.narvii.com/7243/00eaa3cfd5033ff306b23965e1c50b31577dd464r1-647-485v2_hq.jpg",
  water:
    "https://pm1.narvii.com/7243/46d5cfd672a1e2fca16c78d728e2b10cb57f7ce0r1-669-521v2_hq.jpg",
  ground:
    "https://pm1.narvii.com/7243/10ed1c931a1b46035f01315731b1f3f70ec24f5er1-656-454v2_hq.jpg",
  rock: "https://pm1.narvii.com/7243/843acea2bde21f7ae7e1f17c0da831acea46a2acr1-692-503v2_hq.jpg",
  fairy:
    "https://pm1.narvii.com/7243/61770aa4b0259c06cd4b1fa490007c29e27d6683r1-663-565v2_hq.jpg",
  poison:
    "https://pm1.narvii.com/7243/b0945fed2f0cc9fa340c6e7deb851c14ddf53e30r1-575-530v2_hq.jpg",
  bug: "https://pm1.narvii.com/7243/0d2736d705781ea116d08621abbfefae60a971c2r1-700-542v2_hq.jpg",
  dragon:
    "https://pm1.narvii.com/7243/8ee17e7a8790303410b30a2fbcb18183fc12166er1-623-499v2_hq.jpg",
  psychic:
    "https://pm1.narvii.com/7243/19a53b46a48f55a346f130092cb2c8d8fcf88af0r1-642-671v2_hq.jpg",
  flying:
    "https://pm1.narvii.com/7243/bc538f6da74b633d36b48108ddd07b7a2410a2afr1-650-498v2_hq.jpg",
  fighting:
    "https://pm1.narvii.com/7243/250af9c70a9f5140d4ba66922a9f227dd0bbe885r1-731-341v2_hq.jpg",
  normal:
    "https://pm1.narvii.com/7243/f2fb9db8191078f72c8b98fee93155c56e6e8674r1-673-421v2_hq.jpg",
  ice: "https://pm1.narvii.com/7243/fc715e840930cac4f0577c69aa6721ff0b689b11r1-677-462v2_hq.jpg",
};

const icons = {
  fire: "https://static.wikia.nocookie.net/pokemongo/images/0/0a/Icon_Fire.png/revision/latest/scale-to-width-down/25?cb=20171219195825",
  grass: "https://static.wikia.nocookie.net/pokemongo/images/0/0a/Icon_Grass.png/revision/latest/scale-to-width-down/25?cb=20171219195826",
  electric: "https://static.wikia.nocookie.net/pokemongo/images/1/1c/Icon_Electric.png/revision/latest/scale-to-width-down/25?cb=20171219195824",
  water: "https://static.wikia.nocookie.net/pokemongo/images/6/65/Icon_Water.png/revision/latest/scale-to-width-down/25?cb=20171219195830",
  ground: "https://static.wikia.nocookie.net/pokemongo/images/7/71/Icon_Ground.png/revision/latest/scale-to-width-down/25?cb=20171219195827",
  rock: "https://static.wikia.nocookie.net/pokemongo/images/5/57/Icon_Rock.png/revision/latest/scale-to-width-down/25?cb=20171219195830",
  fairy: "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Icon_Fairy.png/revision/latest/scale-to-width-down/25?cb=20171219195824",
  poison: "https://static.wikia.nocookie.net/pokemongo/images/2/26/Icon_Poison.png/revision/latest/scale-to-width-down/25?cb=20171219195828",
  bug: "https://static.wikia.nocookie.net/pokemongo/images/8/88/Icon_Bug.png/revision/latest/scale-to-width-down/25?cb=20171219195822",
  dragon: "https://static.wikia.nocookie.net/pokemongo/images/d/d4/Icon_Dragon.png/revision/latest/scale-to-width-down/25?cb=20171219195823",
  psychic: "https://static.wikia.nocookie.net/pokemongo/images/c/ce/Icon_Psychic.png/revision/latest/scale-to-width-down/25?cb=20171219195829",
  flying: "https://static.wikia.nocookie.net/pokemongo/images/b/b0/Icon_Flying.png/revision/latest/scale-to-width-down/25?cb=20171219195826",
  fighting: "https://static.wikia.nocookie.net/pokemongo/images/f/f0/Icon_Fighting.png/revision/latest/scale-to-width-down/25?cb=20171219195825",
  normal: "https://static.wikia.nocookie.net/pokemongo/images/4/43/Icon_Normal.png/revision/latest/scale-to-width-down/25?cb=20171219195828",
};
const typeColor = Object.keys(colors);
const typeImgs = Object.keys(imgs);
const typeIcon = Object.keys(icons);
// fetch all pokemons with URLs
// this function have function drawPokemons, for draw pokemons in html page
const fetchPokemons = async () => {
  const res = await fetch(baseUrl);
  const resjson = await res.json();
  //console.log(resjson.results);
  const drawPokemons = async () => {
    for (let i of resjson.results) {
      // pokemons.push(i.name);
      let typeData = [];
      const res = await fetch(i.url);
      //console.log(i.url);
      const pokedata = await res.json();
      const poke_types = pokedata.types.map((type) => type.type.name);
      const type = poke_types.find((type) => poke_types.indexOf(type) > -1);
      const color = colors[type];
      const img = imgs[type];
      const icon = icons[type]
      pokedata.types.map((type) => typeData.push(type.type.name));
      let typeDataString = typeData.join(", ");
      //console.log(typeDataString);
      const li$$ = document.createElement("li");
      li$$.style.backgroundColor = color;
      li$$.style.backgroundImage = `url('${img}')`;
      li$$.setAttribute("class", "card");
      li$$.innerHTML = `<h2>${pokedata.name}</h2><div class="imageContainer"><img class="pokeImg" src="${pokedata.sprites.front_default}" /></div><p><img src="${icon}" /></p><p>${pokedata.id}</p>
      `;
      ol$$.appendChild(li$$);
      console.log(typeData);
      //console.log(pokedata);
    }
  };
  //console.log(resjson);
  drawPokemons(resjson);
};

fetchPokemons();
// console.log(pokemons);

const drawPokemonFilter = async (value) => {
  ol$$.innerHTML = "";
  const res = await fetch(pokeNameUrl + limit);
  const resjson = await res.json();
  const results = resjson.results;
  const resultsInput = results.filter((result) =>
    result.name.includes(value.toLowerCase())
  );
  for (const result of resultsInput) {
    let typeData = [];
    //console.log(result);
    const res2 = await fetch(result.url);
    const res2json = await res2.json();
    const poke_types = res2json.types.map((type) => type.type.name);
    const type = poke_types.find((type) => poke_types.indexOf(type) > -1);
    const color = colors[type];
    const img = imgs[type];
    res2json.types.map((type) => typeData.push(type.type.name));
    let typeDataString = typeData.join(", ");
    //console.log(typeDataString);
    const li$$ = document.createElement("li");
    li$$.style.backgroundColor = color;
    li$$.setAttribute("class", "card");
    li$$.style.backgroundImage = `url('${img}')`;
    li$$.innerHTML = `<h2>${res2json.name}</h2><div class="imageContainer"><img class="pokeImg" src="${res2json.sprites.front_default}" /></div><p>${typeDataString}</p><p>${res2json.id}</p>`;
    ol$$.appendChild(li$$);
  }
  //console.log(resultsInput);
};

input$$.addEventListener("input", () => {
  drawPokemonFilter(input$$.value);
});

//Get the button:
mybutton = document.querySelector(".pokeball");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
