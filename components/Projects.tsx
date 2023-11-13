import Button from './Button';
import LineBreak from './LineBreak';
import ModalContainer from './ModalContainer';
import Paragraph from './Paragraph';
import Pulse from './Pulse';
import Title from './Title';

const Projects = () => {
	return (
		<ModalContainer>
			<Title>Projects</Title>
			<Paragraph>
				Have a look at some of the cool stuff I&apos;ve made, and stuff
				I&apos;ve helped to make. There&apos;s too much to fit in this
				little box, so click below to read all about them.
			</Paragraph>
			<LineBreak />
			<a href="/ProjectsPage">
				<Button
					onClick={() => {
						console.log('click');
					}}
					onMouseEnter={() => {
						console.log('mouse enter');
					}}
				>
					<Pulse>
						<Title>Click to see more...</Title>
					</Pulse>
				</Button>
			</a>
		</ModalContainer>
	);
};

export default Projects;
