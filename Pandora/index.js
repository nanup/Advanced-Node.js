const { parse } = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

const isHabitablePlanet = (planet) => {
  return (
    planet.koi_pdisposition === 'CANDIDATE' &&
    planet.koi_insol > 0.36 &&
    planet.koi_insol < 1.11 &&
    planet.koi_prad < 1.6 &&
    planet.kepler_name
  );
};

fs.createReadStream('./kepler_obi.csv')
  .pipe(
    parse({
      comment: '#',
      columns: true,
    })
  )
  .on('error', (err) => {
    console.log(err);
  })
  .on('data', (data) => {
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data);
    }
  })
  .on('end', () => {
    console.log(habitablePlanets.map((planet) => planet.kepler_name));
    console.log(habitablePlanets.length);
  });
