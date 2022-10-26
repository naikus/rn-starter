import React from "react";
import IcoMoon, {iconList} from "react-icomoon";
import {Svg, Path} from "react-native-svg";
import {Colors, Size} from "../theme";


const iconSet = require("../assets/fonts/selection.json");
// Log available icon names
console.log(iconList(iconSet));

const Icon = ({...props}) => {
  return (
    <IcoMoon
      native
      iconSet={iconSet}
      SvgComponent={Svg}
      PathComponent={Path}
      size={Size.default}
      color={Colors.text}
      {...props}
    />
  );
};

export default Icon;
