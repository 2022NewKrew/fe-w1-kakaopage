const API_ENDPOINT = "data/";

export const getAPI = async (url) => {
  try {
    const response = await fetch(API_ENDPOINT + url);
    return await response.json();
  } catch (e) {
    throw e;
  }
};
