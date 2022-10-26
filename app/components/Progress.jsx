import React from "react";
import {View, StyleSheet} from "react-native";
import {Colors, Size} from "../theme";

const styles = StyleSheet.create({
    progress: {
      backgroundColor: Colors.grey,
      height: Size.smaller,
      marginTop: Size.tiny,
      marginBottom: Size.tiny,
      borderRadius: Size.medium
    },
    value: {
      backgroundColor: Colors.primary,
      height: Size.smaller,
      borderRadius: Size.medium
    }
  }),
  getPercentage = (value, min, max) => {
    if (value < min) {
      return 0;
    } else if (value > max) {
      return 100;
    } else {
      return 100 * Math.abs(value - min) / (max - min);
      // return Math.abs(100 * value / (max - min));
    }
  };

const Progress = ({value = 0, min = 0, max = 100, width = 100}) => {
  const percentage = getPercentage(value, min, max);
  return (
    <View width={width} style={styles.progress}>
      <View width={`${percentage}%`} style={styles.value} />
    </View>
  );
};

export default Progress;
