import React from "react";
import { View } from "react-native";
import { Container } from "../styles/pages/page-transaction-create";
import AppInput from "../components/app-input";
import { FormikValues, useFormik } from "formik";
import AppButton from "../components/app-button";
import RNFS from "react-native-fs";
import pathnames from "../routes/pathnames";
import config from "../common/config";
import { Layout } from "../styles/components/app-layout";

const initialValues = {
	amount: "",
	date: "",
	description: "",
	type: "",
};

const fields: { label: string; name: string }[] = [
	{
		label: "Amount",
		name: "amount",
	},
	{
		label: "Date",
		name: "date",
	},
	{
		label: "Description",
		name: "description",
	},
	{
		label: "Type",
		name: "type",
	},
];

type PageTransactionCreateProps = {
	navigation: any;
};

const PageTransactionCreate = (props: PageTransactionCreateProps) => {
	const { navigation } = props;

	const { handleChange, values, handleSubmit } = useFormik({
		initialValues,
		onSubmit: (values) => {
			handleSaveToFile(values);
		},
	});

	const handleSaveToFile = async (values: any) => {
		const filePath = `${RNFS.DocumentDirectoryPath}/${config.transactionFileName}`;

		try {
			const fileExists = await RNFS.exists(filePath);
			let dataArray = [];

			if (fileExists) {
				const fileContent = await RNFS.readFile(filePath, "utf8");
				dataArray = JSON.parse(fileContent);
			}

			const id = dataArray.length;
			dataArray.push({ ...values, id });

			const updatedData = JSON.stringify(dataArray);
			await RNFS.writeFile(filePath, updatedData, "utf8");

			navigation.navigate(pathnames.transactionDetails, {
				id,
			});
		} catch (error) {
			console.error("Error saving text to file:", error);
		}
	};

	return (
		<Layout>
			<Container>
				<View>
					{fields.map((field) => {
						const name = field.name;
						const formikValues = values as FormikValues;
						return <AppInput key={field.name} label={field.label} onChangeText={handleChange(name)} value={formikValues[`${name}`]} />;
					})}
				</View>
				<AppButton label="Create" onPress={() => handleSubmit()} />
			</Container>
		</Layout>
	);
};

export default PageTransactionCreate;
