import React, { Component } from "react";
import { View, Text } from "react-native";
// import { Children } from "react/cjs/react.production.min";

export function ViewComponent (children) {
    return (
      <ViewComponent style={{flex: 1, alignItems: 'center'}}>
        {children}
      </ViewComponent>
    );
}

export default ViewComponent;