const API_URL = 'http://localhost:8000/';

async function httpGetPlanets() {
  const response = await fetch(`${API_URL}planets`);
  return await response.json();
}

async function httpGetLaunches() {
  const response = await fetch(`${API_URL}launches`);
  return await response.json();
}

async function httpSubmitLaunch(launch) {
  try {
    await fetch(`${API_URL}launches`, {
      method: 'post',
      headers: {
        'Content/Type': 'application/json',
      },
      body: JSON.stringify(launch),
    });
  } catch (err) {
    return {
      ok: false,
    };
  }
}

async function httpAbortLaunch(id) {
  try {
    return await fetch(`$API_URLlaunches/${id}`, {
      method: 'delete',
    });
  } catch (err) {
    return {
      ok: false,
    };
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
