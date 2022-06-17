let dataset = [];
let svg = d3.select('svg');

function draw() {
  console.log(dataset.length);
  console.log('done adding event listeners');
  console.log(dataset[1000]);
}

d3.csv('data/dpt2020.csv', (d, i) => {
  return {
    sexe: +d.sexe,
    preusuel: d.preusuel,
    annais: +d.annais,
    dpt: +d.dpt,
    nombre: +d.nombre,
  };
})
  .then((rows) => {
    dataset = rows;
    draw();
  })
  .catch((error) => {
    console.log(`Oupss: ${error}`);
  });
