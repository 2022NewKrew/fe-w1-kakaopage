export const getAPI = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    throw e;
  }
};
