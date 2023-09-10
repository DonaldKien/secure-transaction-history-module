import { Container, Error, Field, Label } from "../styles/components/app-input";
import { TextInputProps } from "react-native";

type AppInputProps = {
	label: string;
	error?: string;
} & TextInputProps;

const AppInput = ({ label, error, ...props }: AppInputProps) => {
	return (
		<Container>
			<Label>{label}</Label>
			<Field {...props} />
			<Error>{error}</Error>
		</Container>
	);
};

export default AppInput;
