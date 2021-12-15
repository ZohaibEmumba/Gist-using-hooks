import axios from "axios";

//auth user API loginng in
const BASE_URL = "https://api.github.com";
const PAT = "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";
const userName = "Zohaibkhattak15";

export const loginAuthUser = async (userName) => {
  const authUserRecord = await axios
    .get(`${BASE_URL}/users/${userName}`)
    .then((data) => data?.data);
  return authUserRecord;
};

export const publicGistsRecord = async () => {
  const publicGistsRecords = await axios
    .get(`${BASE_URL}/gists`)
    .then((data) => data?.data);
  return publicGistsRecords;
};

export const getPublicGist = async (id) => {
  const getPublicGistObj = await axios
    .get(`${BASE_URL}/gists/${id}`, {
      id: id,
    })
    .then((data) => data.data);
  return getPublicGistObj;
};

export const privateGistsRecord = async () => {
  const privateGistsRecord = await axios
    .get(`${BASE_URL}/gists?per_page=10`, {
      headers: {
        Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
      },
    })
    .then((data) => data.data);
  return privateGistsRecord;
};

export const searchRecords = async (userName) => {
  const searchedUserRecords = await axios
    .get(`${BASE_URL}/users/${userName}/gists?per_page=10`, {
      username: userName,
    })
    .then((data) => data.data);
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
    .then((data) => data.data);
  return createGist;
};

export const delAGist = async (id) => {
  let check = window.confirm("Are You sure to want to delete the gist?");
  if (check) {
    const delAGist = axios
      .delete(`${BASE_URL}/gists/${id}`, {
        headers: {
          Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
        },
      })
      .then((data) => data.data);
    return delAGist;
  } else {
    window.location = `/newsfeed`;
  }
};

export const updateAGist = async (id, disp) => {
  const updateGists = await axios
    .patch(
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
    )
    .then((data) => console.log(data));
  return updateGists;
};
export const getGistObj = async (id) => {
  const getGists = await axios
    .get(`${BASE_URL}/gists/${id} `, {
      headers: {
        Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
      },
    })
    .then((data) => data.data);
  return getGists;
};

export const getStaredGists = async () => {
  const getStaredGists = await axios
    .get(`https://api.github.com/gists/starred`, {
      headers: {
        Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
      },
    })
    .then((data) => data.data);
  return getStaredGists;
};

export const checkGistStared = async (uniqueId) => {
  const checkStar = await axios
    .get(`${BASE_URL}/gists/${uniqueId}/star`, {
      headers: {
        Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
      },
    })
    .then((data) => data?.status);
  return checkStar;
};

export const staredAGist = async (gist_id) => {
  const starAGist = await axios
    .put(
      `${BASE_URL}/gists/${gist_id}/star`,
      {
        gist_id: gist_id,
      },
      {
        headers: {
          Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
        },
      }
    )
    .then((data) => data)
    .catch((err) => console.log(err + "Not working"));
  return starAGist;
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
    .then((data) => data?.status);
  return forkAGist;
};

export const unStaredAGist = async (gist_id) => {
  const unStarAGist = await axios
    .delete(
      `${BASE_URL}/gists/${gist_id}/star`,
      {
        gist_id: gist_id,
      },
      {
        headers: {
          Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
        },
      }
    )
    .then((data) => data?.status);
  return unStarAGist;
};
