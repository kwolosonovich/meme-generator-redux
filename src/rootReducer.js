const DEFAULT_STATE = {
  memes: [],
};

function rootReducer(state = DEFAULT_STATE, action) {
  if (action.type === "NEW_MEME") {
    return {
      ...state,
      memes: [...state.memes, { ...action.meme }],
    };
  }
  return state;
}

export default rootReducer;
