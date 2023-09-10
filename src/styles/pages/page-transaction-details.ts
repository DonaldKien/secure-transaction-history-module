import styled from "styled-components/native";
import themes from "../variables";

export const Container = styled.View`
	flex: 1;
	display: flex;
    flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Wrapper = styled.View`
	width: 80%;
	font-size: ${themes.font.sizes.l};
`;

export const Row = styled.View`
	display: flex;
	flex-direction: row;
    min-height: 40px;
`;

export const Label = styled.Text`
    width: 150px;
    font-size: ${themes.font.sizes.m};
`;

export const Value = styled.Text`
font-size: ${themes.font.sizes.m};
`;