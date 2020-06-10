const reducer = (
  state = {
    isMobile: false,
    isBot: false
  },
  action: any
) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default reducer;
