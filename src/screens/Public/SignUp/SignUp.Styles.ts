import styled from '~/styles';

export const Container = styled.View`
	align-items: center;
	background-color: ${props => props.theme.background};
	padding: 10px;
`;

Container.displayName = 'SignUp-Container';
