import styled from '~/styles';

export const Container = styled.View`
	align-items: center;
	background-color: ${props => props.theme.background};
	flex: 1;
	justify-content: center;
	padding: 10px;
`;

Container.displayName = 'SignUp-Container';
