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
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${serial}.png" alt="${name}">
    <figcaption>${name}</figcaption>
    </figure>
    <table class="table">
    <tr>
      <td class="attributes">Types</td>
      <td class="value">${typesOf}</td>
    </tr>
    <tr>
      <td class="attributes">Weight</td>
      <td class="value">${weight}</td>
    </tr>
    <tr>
      <td class="attributes">HP</td>
      <td class="value">${hp}</td>
    </tr>
    <tr>
      <td class="attributes">XP</td>
      <td class="value">${xp}</td>
    </tr>
    <tr>
      <td class="attributes">Attack</td>
      <td class="value">${attack}</td>
    </tr>
    <tr>
      <td class="attributes">Defense</td>
      <td class="value">${defense}</td>
    </tr>
    </table>
    </div >
  `
    if ((index + 1) % 4 === 0) data += '</section><section class="row">';
    return data;
  }, '<section class="row">');

  fs.writeFileSync("template-stats", template);
};

main();