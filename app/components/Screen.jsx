import React from "react";
import {View, SafeAreaView, StyleSheet} from "react-native";
import {Colors, Size} from "../theme";

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: Colors.background,
      color: Colors.text,
      padding: Size.default
    }
  }),

  Screen = props => {
    const {safeArea = true, style = {}, children, ...rest} = props,
      Component = safeArea ? SafeAreaView : View;

    // console.log(componentStyle);
    return (
      <Component style={[styles.screen, style]} {...rest}>
        {children}
      </Component>
    );
  };

export default Screen;
