export const aboutData = (response) => ({
  dummy: {
    data: response.data
  }
});

export const filterData = (componentName, response) => {
  if (componentName === 'about') {
    return aboutData(response);
  }
  return null;
};
