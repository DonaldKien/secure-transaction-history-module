import styled from "styled-components/native";
import themes from "../variables";

export const Row = styled.TouchableOpacity`
	height: 80px;
	display: flex;
	align-items: center;
	flex-direction: row;
	border-bottom-width: 1px;
	border-style: solid;
	border-bottom-color: ${themes.colors.black};
	background-color: ${themes.colors.white};
	padding-left: 10px;
	padding-right: 10px;
`;

export const Column = styled.View`
	display: flex;
	flex: 1;
`;
