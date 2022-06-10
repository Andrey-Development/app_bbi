import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BodyComponent from "./src/components/Body";
import DatabaseInit from "./src/database/database-init";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    new DatabaseInit();
    console.log("initialize database");
  }

  render() {
    return (
      <BodyComponent>
        <Text>TopBar</Text>
      </BodyComponent>
      // <Home />
    );
  }
}
