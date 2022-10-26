import React, {Fragment} from "react";
import {Button, StyleSheet, View} from "react-native";
import {observer} from "mobx-react-lite";
import {Colors, Size, Fonts} from "../../theme";
import {Screen, Icon, Text} from "../../components";
import Config from "../../config";
import {useStore} from "../../store";

/*
 * @IDEA Support overriding styles
 * import {Colors, Size, Fonts, themedStyles} from "../../theme";
 *
 * const styles = themedStyles(
 *  "app.modules.about.Screen",
 *  // Define base styles
 *  Stylesheet.create({}),
 * );
 *
 * // Use these styles in your screens/components
 * const styles = useStyles("app.modules.about.Screen")
 *
 */


const styles = StyleSheet.create({
    startScreen: {
      alignItems: "center",
      justifyContent: "center"
    }
  }),

  StartScreen = observer(props => {
    const {navigation}  = props;
    /*
    const [data, setData] = useState({});
    useEffect(() => {
      Service.getSomething().then(setData);
    }, []);
    */
    const {uiStore} = useStore(),
      {environment: {Api, Storage}} = uiStore,
      goToAbout = () => {
        navigation.navigate("about", {some: "data"});
      };

    return (
      <Fragment>
        <Screen style={styles.startScreen}>
          <Icon onPress={goToAbout} icon="arrow-right-circle" color="#314265" size="100px" />
          <Button color="#314265" onPress={goToAbout} title="Go to About &#187;" />
        </Screen>
      </Fragment>
    );
  });

export default StartScreen;
