import React from "react";
import Theme from "./theme/Theme.jsx";
import Home from "./views/Home/Home.jsx";
import Loading from "./views/Loading/Loading";

function App() {
  return (
    <div>
      <Theme>
        <Loading />
        <Home />
      </Theme>
    </div>
  );
}

export default App;
