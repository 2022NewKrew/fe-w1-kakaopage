// extract element func
export const $ = (selector, parentNode = document) => {
  return parentNode.querySelector(selector);
};

// css classlist의 'active' string을 반환하는 func
export const isActive = (index, targetActiveIndex) => {
  return index === targetActiveIndex ? "active" : "";
};
