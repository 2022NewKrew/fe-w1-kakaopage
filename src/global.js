const createTag = (tagName, cName, text) => {
  const newTag = document.createElement(tagName);
  if (cName) {
    newTag.className = cName;
  }
  if (text) {
    newTag.textContent = text;
  }
  return newTag;
};

export default createTag;
