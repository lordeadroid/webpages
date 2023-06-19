const fs = require("fs");

const main = () => {
  const filePath = "pokemon-stats";
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  const parsed = lines.reduce((context, line, index) => {
    const [name, types, speed, hp, xp, attack, defense, weight] = line.split("|");
    let data = context + `
    <div class="card">
    <div></div>
    <p>${name}</p>
    <table class="table">
    <tr>
      <td class="attributes">Types</td>
      <td class="value">${types}</td>
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
    </div>
    `
    if ((index + 1) % 4 === 0) data += '</section><section class="row">';
    return data;
  }, '<section class="row">');

  fs.writeFileSync("parsed-data", parsed);
};

main();