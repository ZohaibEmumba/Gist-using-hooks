import axios from "axios";

//auth user API loginng in
const BASE_URL = "https://api.github.com";
const PAT = "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";
const userName = "Zohaibkhattak15";

export const loginAuthUser = async (userName) => {
  const authUserRecord = await axios
    .get(`${BASE_URL}/users/${userName}`)
    .then((resp) => resp?.data);
  return authUserRecord;
};

export const publicGistsRecord = async () => {
  const publicGistsRecords = await axios
    .get(`${BASE_URL}/gists`)
    .then((resp) => resp?.data);
  return publicGistsRecords;
};

export const getPublicGist = async (id) => {
  const getPublicGistObj = await axios
    .get(`${BASE_URL}/gists/${id}`, {
      id: id,
    })
    .then((resp) => resp.data);
  return getPublicGistObj;
};

export const privateGistsRecord = async () => {
  const privateGistsRecord = await axios
    .get(`${BASE_URL}/gists?per_page=10`, {
      headers: {
        Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
      },
    })
    .then((resp) => resp.data);
  return privateGistsRecord;
};

export const searchRecords = async (userName) => {
  const searchedUserRecords = await axios
    .get(`${BASE_URL}/users/${userName}/gists`, {
      username: userName,
    })
    .then((resp) => resp.data);
  return searchedUserRecords;
};

export const createAGist = async (data) => {
  const json = JSON.stringify(data);
  const createGist = axios
    .post(`${BASE_URL}/gists`, json, {
      headers: {
        Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
      },
    })
    .then((resp) => resp.data);
  return createGist;
};

export const delAGist = async (id) => {
  const delAGist = axios
    .delete(`${BASE_URL}/gists/${id}`, {
      headers: {
        Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
      },
    })
    .then((resp) => resp.data);
  return delAGist;
};

export const updateAGist = async (id, disp) => {
  const updateGists = await axios.patch(
    `${BASE_URL}/gists/${id}`,
    {
      id: id,
      description: disp,
    },
    {
      headers: {
        Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
      },
    }
  );
  return updateGists;
};
export const getGistObj = async (id) => {
  const getGists = await axios
    .get(`${BASE_URL}/gists/${id} `, {
      headers: {
        Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
      },
    })
    .then((resp) => resp.data);
  return getGists;
};

export const getStaredGists = async () => {
  const getStaredGists = await axios
    .get(`https://api.github.com/gists/starred`, {
      headers: {
        Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
      },
    })
    .then((resp) => resp.data);
  return getStaredGists;
};

export const checkGistStared = async (uniqueId) => {
  const checkStar = await axios.get(`${BASE_URL}/gists/${uniqueId}/star`, {
    headers: {
      Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
    },
  });
  return checkStar;
};

export const staredAGist = async (gist_id) => {
  const starAGist = await axios.put(
    `${BASE_URL}/gists/${gist_id}/star`,
    {
      gist_id: gist_id,
    },
    {
      headers: {
        Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
      },
    }
  );
  return starAGist;
};

export const unStaredAGist = async (gist_id) => {
  const unStarAGist = await axios.delete(`${BASE_URL}/gists/${gist_id}/star`, {
    headers: {
      Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
    },
  });
  return unStarAGist;
};

export const forkedGist = async (gist_id) => {
  const forkAGist = await axios
    .post(
      `${BASE_URL}/gists/${gist_id}/forks`,
      {
        gist_id: gist_id,
      },
      {
        headers: {
          Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
        },
      }
    )
    .then((resp) => resp?.status)
    .catch((err) => console.log(err));
  return forkAGist;
};
