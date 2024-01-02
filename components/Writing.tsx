import ModalContainer from './ModalContainer';
import Pulse from './Pulse';
import Title from './Title';

const Writing = () => {
	return (
		<ModalContainer>
			<a href="/writing">
				<Pulse>
					<Title>Go on, give it a click!</Title>
				</Pulse>
			</a>
		</ModalContainer>
	);
};

export default Writing;
