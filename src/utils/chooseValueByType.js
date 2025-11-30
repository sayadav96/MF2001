// src/utils/chooseValueByType.js

const chooseByType = (data, slugName) => {
  // If data is not an array or slugName is missing, return empty array
  if (!Array.isArray(data) || !slugName) {
    return [];
  }

  const chooseBySlug = data.filter((content) => {
    // Skip null / undefined / non-object items
    if (!content || typeof content !== "object") return false;

    // Now it's safe to call Object.values
    return Object.values(content).includes(slugName);
  });

  // Return the first match or an empty array
  return chooseBySlug[0] || [];
};

export default chooseByType;
