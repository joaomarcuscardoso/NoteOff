import styled from 'styled-components/native';

export const Container = styled.View`
flex:1;
background-color:#333;
`;
export const TitleInput = styled.TextInput`
font-size:20px;
font-weight:bold;
padding:15px;
color:#fff;
`;

export const BodyInput = styled.TextInput`
flex:1;
padding:15px;
font-size:15px;
color:#fff;

`;
export const SaveButton = styled.TouchableHighlight`
margin-right:15px;

`;
export const SaveButtonImage = styled.Image`
width:22px;
height:22px;

`;
export const CloseButton = styled.TouchableHighlight`
margin-left:15px;
align-items:center;
`;
export const CloseButtonImage= styled.Image`

width:18px;
height:18px;
`;

export const DeleteButton = styled.TouchableHighlight`
height:40px;
background-color:#FF3333;
justify-content:center;
align-items:center;
`;
export const DeleteButtonText = styled.Text`
font-size:14px;
color:#fff;
`;
