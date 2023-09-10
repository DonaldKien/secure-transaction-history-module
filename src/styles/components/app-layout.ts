import styled from "styled-components/native";

export const Layout = styled.ScrollView.attrs(() => ({ contentContainerStyle: { flexGrow: 1, justifyContent: "center", width: "100%", alignSelf: "center" } }))`
	flex: 1;
`;
