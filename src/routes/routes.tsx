import { navigationRef } from "./root-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import pathnames from "./pathnames";

import PageHome from "../pages/page-home";
import PageTransactionCreate from "../pages/page-transaction-create";
import PageTransactionDetails from "../pages/page-transaction-details";
import PageTransactionHistory from "../pages/page-transaction-history";

const Stack = createNativeStackNavigator();

const screens = [
	{
		name: pathnames.home,
		options: {
			headerTitle: "Home",
		},
		component: PageHome,
	},
	{
		name: pathnames.transactionCreate,
		options: {
			headerTitle: "Create Transaction",
		},
		component: PageTransactionCreate,
	},
	{
		name: pathnames.transactionHistory,
		options: {
			headerTitle: "Transaction History",
		},
		component: PageTransactionHistory,
	},
	{
		name: pathnames.transactionDetails,
		options: {
			headerTitle: "Transaction Details",
		},
		component: PageTransactionDetails,
	},
];

const Routes = () => {
	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator initialRouteName="home">
				{screens.map((screen) => (
					<Stack.Screen key={screen.name} name={screen.name} options={screen.options} component={screen.component} />
				))}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
