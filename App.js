import React from "react";
import Routes from "./src/Navigations";
const App = () => {
  const prefix = "javadevsapp://";
  return <Routes uriPrefix={prefix} />;
};

export default App;
