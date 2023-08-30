import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import App from "./views/App";
import TodoApp from "./views/TodoApp";
import Navigation from "./views/examples/Nav/Nav";
import ProTodoApp from "./views/ProTodoApp";
import ListUser from "./views/examples/users/ListUser";
import DetailUser from "./views/examples/users/detailUser";
import Home from "./views/Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./stores/reducers/rootReducers";

const reduxStore = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/todolist">
            <TodoApp />
          </Route>
          <Route path="/protodolist">
            <ProTodoApp />
          </Route>
          <Route path="/image">
            <App />
          </Route>
          <Route path="/users" exact>
            <ListUser />
          </Route>
          <Route path="/users/:id">
            <DetailUser />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
