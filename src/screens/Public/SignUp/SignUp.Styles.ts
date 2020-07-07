import styled from '~/styles';
import { ContainerPadding } from '~/utils';

export const Container = styled.View`
	${ContainerPadding()}
	align-items: center;
	background-color: ${props => props.theme.background};
`;

Container.displayName = 'SignUp-Container';
