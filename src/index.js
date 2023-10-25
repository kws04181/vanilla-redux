// 새로운 방식 (React 18에서 권장)
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
