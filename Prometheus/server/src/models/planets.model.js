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

const loadHabitablePlanets = () => {
  return new Promise((resolve, reject) => {
    fs.createReadStream('./src/models/kepler_obi.csv')
      .pipe(
        parse({
          comment: '#',
          columns: true,
        })
      )
      .on('error', (err) => {
        console.log(err);
        reject(err);
      })
      .on('data', (planet) => {
        if (isHabitablePlanet(planet)) {
          habitablePlanets.push(planet);
        }
      })
      .on('end', () => {
        console.log(`Found ${habitablePlanets.length} habitable planets.`);
        resolve();
      });
  });
};

module.exports = {
  loadHabitablePlanets,
  planet: habitablePlanets,
};
