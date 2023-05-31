export default function languageChange(state = 0, action) {
  switch (action.type) {
    case "LANGUAGE_CHANGE":
      state === 0 ? (state = 1) : (state = 0);
      return state;
    default:
      state = 0;
      return state;
  }
}
