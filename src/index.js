import React from "react";
import ReactDom from "react-dom";

import App from "./App";

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#weather")
);
