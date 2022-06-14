// Your code here
const w = 600;
const h = 600;
let dataset = [];

let x;
let y;

let svg = d3.select('body').append('svg').attr('width', w).attr('height', h);

let densityToRadius = d3.scaleSqrt().domain([0, 2.5e6]).range([1, 100]);

function draw() {
  svg
    .selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('r', (d) => densityToRadius(d.density))
    .attr('cx', (d) => x(d.longitude))
    .attr('cy', (d) => y(d.latitude))
    .on('mouseover', (d) =>
      d3.select('h1').text('Location : ' + d.target.__data__.place)
    );

  console.log('done adding event listeners');

  svg
    .append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0, ' + h + ')')
    .call(d3.axisTop(x));

  svg
    .append('g')
    .attr('class', 'y axis')
    .attr('transform', 'translate(' + w - 40 + ')')
    .call(d3.axisRight(y));
}

d3.tsv('data/france.tsv', (d, i) => {
  return {
    codePostal: +d['Postal Code'],
    inseeCode: +d.inseecode,
    place: d.place,
    longitude: +d.x,
    latitude: +d.y,
    population: +d.population,
    density: +d.density,
  };
})
  .then((rows) => {
    rowsLength = rows.length;
    dataset = rows;

    console.log(`Loaded ${rowsLength} rows.`);

    if (rowsLength > 0) {
      console.log(`First row: ${rows[0]}`);
      console.log(rows[0]);
      console.log(`Last row: ${rows[rowsLength - 1]}`);
    }

    x = d3
      .scaleLinear()
      .domain(d3.extent(rows, (row) => row.longitude))
      .range([0, w]);

    y = d3
      .scaleLinear()
      .domain(d3.extent(rows, (row) => row.latitude))
      .range([h, 0]);

    draw();
  })
  .catch((error) => {
    console.log(`Oupss: ${error}`);
  });
