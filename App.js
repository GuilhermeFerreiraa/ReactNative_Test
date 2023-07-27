import { NavigationContainer } from "@react-navigation/native";

import * as React from "react";
import Routes from "./src/routes/app.routes";

function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default App;
