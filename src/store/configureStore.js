import { createStore, applyMiddleware } from "redux";
import ReduxImmutableStateInvariant from "redux-immutable-state-invariant"; // eslint-disable-line import/no-extraneous-dependencies
import rootReducer from "../reducers/rootReducer";

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(ReduxImmutableStateInvariant()),
  );
}
