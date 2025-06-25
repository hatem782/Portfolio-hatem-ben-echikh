import React from "react";
import Theme from "./theme/Theme.jsx";
import Home from "./pages/Home/Home.jsx";
import Loading from "./pages/Loading/Loading";
import NavBar from "./layouts/navbar/NavBar";

function App() {
  return (
    <div>
      {/* <div className="bg-clip-text"></div> */}
      <Theme>
        {/* <Loading /> */}
        <NavBar />
        <Home />
      </Theme>
    </div>
  );
}

export default App;
