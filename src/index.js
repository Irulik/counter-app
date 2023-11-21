
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App"; 
import "./App.css";
import { store } from "./toolkitRedux"


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
