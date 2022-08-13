import React from "react";
import Theme from "./theme/Theme.jsx";
import Home from "./views/Home/Home.jsx";
import Loading from "./views/Loading/Loading";
import NavBar from "./layouts/navbar/NavBar";
function App() {
  return (
    <div>
      <Theme>
        {/* <Loading /> */}
        <NavBar />
        <Home />
      </Theme>
    </div>
  );
}

export default App;
