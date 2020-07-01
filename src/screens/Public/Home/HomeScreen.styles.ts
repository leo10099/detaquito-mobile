import styled from '~/styles';

export const Container = styled.View`
	background-color: ${props => props.theme.background};
	flex: 1;
	align-items: center;
	justify-content: center;
`;

Container.displayName = 'HomeScreen-Container';
