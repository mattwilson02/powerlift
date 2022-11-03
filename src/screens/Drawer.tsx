import { Text, useTheme, VStack } from "native-base";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Workouts from "./Workouts";
import Dashboard from "./Dashboard";
import RpeCalculator from "./RpeCalculator";

const Drawer = () => {
  const { colors } = useTheme();
  const { Navigator, Screen } = createDrawerNavigator();
  return (
    <Navigator
      screenOptions={{
        headerTintColor: colors.black,
        headerStyle: {
          backgroundColor: colors.gray[500],
        },
        drawerStyle: {
          backgroundColor: colors.gray[500],
        },
        drawerActiveTintColor: colors.black,
        drawerInactiveTintColor: colors.black,
      }}
    >
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Workouts" component={Workouts} />
      <Screen
        name="RpeCalculator"
        component={RpeCalculator}
        options={{
          title: "RPE Calculator",
        }}
      />
    </Navigator>
  );
};
export default Drawer;
