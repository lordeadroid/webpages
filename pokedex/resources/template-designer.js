const fs = require("fs");

const main = () => {
  const filePath = "pokemon-stats";
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.trim().split("\n");

  const template = lines.reduce((context, line, index) => {
    const [name, types, speed, hp, xp, attack, defense, weight] = line.split("|");
    const num = `${index + 1}`;
    const serial = num.padStart(3, 0);

    const typesOf = types.split(",").reduce((context, type) => {
      context += `<span class="${type}">${type}</span>`;
      return context;
    }, "");

    let data = context + `
    <div class="card">
      <figure>
      <div class="poke-image">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${serial}.png" alt="${name}">
      </div>
      <figcaption>${name}</figcaption>
      </figure>
      <div class="attributes">
        <div class="attribute">
        <div class="property">Types</div>
        <div class="value">${typesOf}</div>
        </div>
        <div class="attribute">
        <div class="property">Weight</div>
        <div class="value">${weight}</div>
        </div>
        <div class="attribute">
        <div class="property">HP</div>
        <div class="value">${hp}</div>
        </div>
        <div class="attribute">
        <div class="property">XP</div>
        <div class="value">${xp}</div>
        </div>
        <div class="attribute">
        <div class="property">Attack</div>
        <div class="value">${attack}</div>
        </div>
        <div class="attribute">
        <div class="property">Defense</div>
        <div class="value">${defense}</div>
        </div>
      </div>
    </div>
  `
    return data;
  }, "");
  fs.writeFileSync("template", template);
};

main();