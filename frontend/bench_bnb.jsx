import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from "./components/root";
import {login, createNewUser} from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  //testing start
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.createNewUser = createNewUser;
  //testing end

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});