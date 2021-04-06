// reducer
const initialState = {
  product: "haiiii",
};

const productReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

export default productReducer;
