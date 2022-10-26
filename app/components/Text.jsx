import React from "react";
import {Text, StyleSheet} from "react-native";
import {Colors, Fonts, Size} from "../theme";

const styles = StyleSheet.create({
    text: {
      color: Colors.text,
      fontFamily: Fonts.secondary,
      fontWeight: "200",
      fontSize: Size.default,
      //lineHeight: 20
      letterSpacing: 0.05
    }
  }),

  Txt = props => {
    const {style, altColor, children, ...rest} = props;
    return (
      <Text style={[styles.text, altColor && {color: Colors.altText}, style]} {...rest}>
        {children}
      </Text>
    );
  };

export default Txt;
