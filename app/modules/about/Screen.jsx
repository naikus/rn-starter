import React, {Fragment} from "react";
import {StyleSheet, View} from "react-native";
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
    aboutScreen: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: Colors.black
    },
    appName: {
      fontWeight: "800",
      fontSize: Size.large,
      fontStyle: "italic",
      color: Colors.altText,
      marginTop: Size.tiny
    },
    version: {
      fontFamily: Fonts.mono,
      letterSpacing: 2,
      fontSize: Size.default,
      color: Colors.grey
    },
    castScreen: {
      width: "100%",
      height: "100%",
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    logo: {
      fontSize: Size.huge,
      fontWeight: "700",
      fontStyle: "italic"
    }
  }),

  AboutScreen = observer(props => {
    const {navigation}  = props;
    /*
    const [data, setData] = useState({});
    useEffect(() => {
      Service.getSomething().then(setData);
    }, []);
    */
    const {uiStore} = useStore(),
      {environment: {Api, Storage}} = uiStore,
      goBack = () => {
        navigation.goBack();
      };

    return (
      <Fragment>
        <Screen style={styles.aboutScreen}>
          <Icon onPress={goBack} icon="trending-up" color={Colors.accent} size="100px" />
          <Text onPress={goBack} style={styles.appName}>RN STARTER</Text>
          <Text style={styles.version}>{Config.appVersion}</Text>
        </Screen>
      </Fragment>
    );
  });

export default AboutScreen;
