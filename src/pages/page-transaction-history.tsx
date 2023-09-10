import { useEffect, useState } from "react";
import { FlatList, Text, View, RefreshControl } from "react-native";
import RNFS from "react-native-fs";
import config from "../common/config";
import { Column, Row } from "../styles/pages/page-transaction-history";
import pathnames from "../routes/pathnames";

type DataListProps = {
	amount: string;
	date: string;
	description: string;
	type: string;
	id: string;
};

type PageTransactionHistoryPropsType = {
	navigation: any;
};

const PageTransactionHistory = ({ navigation }: PageTransactionHistoryPropsType) => {
	const [dataList, setDataList] = useState([]);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const filePath = `${RNFS.DocumentDirectoryPath}/${config.transactionFileName}`;

	const readFile = async () => {
		setIsRefreshing(true);
		try {
			const data = await RNFS.readFile(filePath, "utf8");
			const parsedData = JSON.parse(data);
			setDataList(parsedData);
		} catch (error) {
			console.error("Error reading text from file:", error);
		} finally {
			setIsRefreshing(false);
		}
	};

	useEffect(() => {
		readFile();
	}, []);

	return (
		<View>
			<FlatList
				data={dataList}
				initialNumToRender={10}
				refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={() => readFile()} />}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item) => item.id}
				renderItem={({ item }: { item: DataListProps }) => (
					<Row
						onPress={() =>
							navigation.navigate(pathnames.transactionDetails, {
								id: item.id,
							})
						}
					>
						<Column>
							<Text>Amount:</Text>
							<Text>{item?.amount}</Text>
						</Column>
						<Column>
							<Text>Date:</Text>
							<Text>{item?.date}</Text>
						</Column>
						<Column>
							<Text>Description</Text>
							<Text>{item?.description}</Text>
						</Column>
						<Column>
							<Text>Type</Text>
							<Text>{item?.type}</Text>
						</Column>
					</Row>
				)}
				ListEmptyComponent={
					<View>
						<Text>no data</Text>
					</View>
				}
			/>
		</View>
	);
};

export default PageTransactionHistory;
