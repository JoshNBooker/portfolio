import LineBreak from './LineBreak';
import ModalContainer from './ModalContainer';
import Paragraph from './Paragraph';
import Title from './Title';

const AboutMe = () => {
	return (
		<ModalContainer>
			<Title>All about Josh</Title>
			<Paragraph>
				I very recently graduated from CodeClan, a 16 week coding
				bootcamp. I went into it with no coding experience at all, and
				surprise surprise, it was really hard. But I loved it. And, I
				learned a hell of a lot. My favourite part of the course was
				learning javascript and collaborating with a couple of others on
				building some very cool apps in React and React Native. This
				website is built with React.
				<LineBreak />
				Before starting CodeClan, I was working as a Customer Service
				Representative in a few different places. Some of these roles I
				liked, some I definitely did not like. Before that, I taught
				English as a Foreign Language, and lived in Mexico for a bit
				doing that. That was really fun, but also pretty scary and
				really difficult. Still, I loved doing that too, and would like
				to go back to Mexico at some point.
				<LineBreak />
				I&apos;ve always been interested in technology, and ever since
				repeatedly being told off for playing weird browser games in
				classes at school when I should have been doing work, I&apos;ve
				loved software that is original, fun and well designed. And now
				I know a bit about how to make it! The biggest part of my
				decision to start CodeClan however, is that more than
				technology, I love to learn new things, and that&apos;s really
				what excites me most about a career in tech - the opportunity to
				learn, keep learning, and never stop learning.
				<LineBreak />
				But yeah, that&apos;s a bit about me. There&apos;s a more info
				on this site, so have a browse and say hello!
			</Paragraph>
		</ModalContainer>
	);
};

export default AboutMe;
