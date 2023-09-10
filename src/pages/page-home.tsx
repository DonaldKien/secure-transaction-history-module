import { Container, Button, Label } from "../styles/pages/page-home";
import pathnames from "../routes/pathnames";

type PageHouseType = {
	navigation: any;
};

const PageHome = (props: PageHouseType) => {
	const { navigation } = props;
	return (
		<Container>
			<Button onPress={() => navigation.navigate(pathnames.transactionCreate)}>
				<Label>CREATE TRANSACTION</Label>
			</Button>
			<Button onPress={() => navigation.navigate(pathnames.transactionHistory)}>
				<Label>TRANSACTION HISTORY</Label>
			</Button>
		</Container>
	);
};

export default PageHome;
