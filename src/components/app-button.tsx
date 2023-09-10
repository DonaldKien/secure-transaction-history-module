import { memo } from "react";
import { Button, Label } from "../styles/components/app-button";
import { TouchableOpacityProps } from "react-native";

type AppButtonPropsType = {
	label: string;
} & TouchableOpacityProps;

const AppButton = ({ label, ...props }: AppButtonPropsType) => {
	return (
		<Button {...props}>
			<Label>{label}</Label>
		</Button>
	);
};

export default memo(AppButton);
