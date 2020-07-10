import styled from '~/styles';

export const Container = styled.ScrollView.attrs({ keyboardShouldPersistTaps: 'handled' })`
	flex: 1;
	background-color: ${props => props.theme.background};
`;
