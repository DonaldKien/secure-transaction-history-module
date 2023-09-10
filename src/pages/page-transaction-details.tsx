import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import RNFS from "react-native-fs";
import { Container, Label, Row, Value, Wrapper } from "../styles/pages/page-transaction-details";
import AppButton from "../components/app-button";
import pathnames from "../routes/pathnames";
import config from "../common/config";
import { Route } from "@react-navigation/native";

const initialValues = {
	amount: "",
	date: "",
	description: "",
	id: "",
	type: "",
};

type PageTransactionDetailsPropsType = {
	route: any;
	navigation: any;
};

const PageTransactionDetails = ({ route, navigation }: PageTransactionDetailsPropsType) => {
	const { id } = route.params;
	const [fileData, setFileData] = useState(initialValues);

	useEffect(() => {
		const filePath = `${RNFS.DocumentDirectoryPath}/${config.transactionFileName}`;
		const readFile = async () => {
			try {
				const data = await RNFS.readFile(filePath, "utf8");
				const parsedData = JSON.parse(data);
				const newlyCreatedData = parsedData.find((o: any) => o.id === id);
				setFileData(newlyCreatedData);
			} catch (error) {
				console.error("Error reading text from file:", error);
			}
		};

		readFile();
	}, []);

	return (
		<Container>
			<Wrapper>
				<Row>
					<Label>Amount</Label>
					<Value>: {fileData.amount}</Value>
				</Row>
				<Row>
					<Label>Date</Label>
					<Value>: {fileData.date}</Value>
				</Row>
				<Row>
					<Label>Description </Label>
					<Value>: {fileData.description}</Value>
				</Row>
				<Row>
					<Label>Type </Label>
					<Value>: {fileData.type}</Value>
				</Row>
			</Wrapper>

			<AppButton label="Home" onPress={() => navigation.navigate(pathnames.home)} />
		</Container>
	);
};

export default PageTransactionDetails;
