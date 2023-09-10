import styled from "styled-components/native";
import themes from "../variables";

export const Container = styled.View`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Button = styled.TouchableOpacity`
    flex: 1;
    align-item: center;
    justify-content: center;
    border: 1px solid ${themes.colors.black};
`;

export const Label = styled.Text`
    text-align: center;
    font-size: ${themes.font.sizes.xxl};
    color: ${themes.colors.black};
`;