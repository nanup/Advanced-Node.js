import { useCallback, useEffect, useState } from 'react';

import { httpGetPlanets } from './requests';

function usePlanets() {
  const [planets, savePlanets] = useState([]);

  const getPlanets = useCallback(async () => {
    const planetsObject = await httpGetPlanets();
    savePlanets(planetsObject.planet);
  }, []);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

  return planets;
}

export default usePlanets;
