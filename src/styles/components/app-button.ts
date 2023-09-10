import styled from "styled-components/native";
import themes from "../variables";

export const Button = styled.TouchableOpacity`
	background-color: ${themes.colors.blue};
	justify-content: center;
	height: 50px;
    padding-left: 15px;
    padding-right: 15px;
`;

export const Label = styled.Text`
	text-align: center;
	font-size: ${themes.font.sizes.m};
	color: ${themes.colors.white};
`;
