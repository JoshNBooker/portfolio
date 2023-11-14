'use client';
import Container from '@/components/Container';
import Paragraph from '@/components/Paragraph';
import ParagraphContainer from '@/components/ParagraphContainer';
import ProjectCard from '@/components/ProjectCard';
import ProjectCardParagraph from '@/components/ProjectCardParagraph';
import Title from '@/components/Title';
import Image from 'next/image';
const fightScreen = require('../../public/fightScreen.jpg');
const spookCity = require('../../public/spookcity.jpg');
const sakuraSpa = require('../../public/sakuraSpa.jpg');

export default function ProjectsPage() {
	return (
		<div className="flex h-screen justify-center items-center">
			<Container>
				<Title>My Projects</Title>
				<ParagraphContainer>
					<Paragraph>
						My favourite part of learning to code has been, by a
						long way, collaborating with other engineers on group
						projects. The opportunity to learn that collaboration
						presents are vast, and working with other people has
						always been something I enjoy immensely. Below are some
						of the things I&apos;ve made! Click them to go to the
						Github repos.
					</Paragraph>
				</ParagraphContainer>
				<div className="grid grid-cols-3 gap-6">
					<a href="https://github.com/Blair4932/GitBash">
						<ProjectCard>
							<Title>GitBash</Title>
							<Image
								src={fightScreen}
								alt="The Gitbash fightscreen"
								className="mb-5 object-contain rounded"
								width={400}
								height={450}
							/>
							<ProjectCardParagraph>
								Gitbash is a Browser game, based around turn
								based fighting mechanics, in a retro-arcadey
								style. It was created with a React front-end,
								used express for routing, and MongoDB to manage
								our database. We also used sockets.io to manage
								websockets, for multiplayer intergration. This
								was great fun to make, and we did a lot in the
								course of the single week that we had. I&apos;m
								very proud of this one.
							</ProjectCardParagraph>
						</ProjectCard>
					</a>
					<a href="https://github.com/JoshNBooker/spook_city_app">
						<ProjectCard>
							<Title>Spook City</Title>
							<Image
								src={spookCity}
								alt="The spookcity user interface"
								className="mb-5 object-contain rounded"
								height={350}
							/>
							<ProjectCardParagraph>
								Spook City is a mobile app designed to give a
								fun, interactive and educational ghost finding
								experience around Edinburgh. It uses a Java /
								Springboot back-end with front end made with
								React Native, Typescript and Expo. This was
								great fun to make, and it was quite a challenge
								to learn to use Expo&apos;s location tracking
								functionality.
							</ProjectCardParagraph>
						</ProjectCard>
					</a>
					<a href="https://github.com/JoshNBooker/Sakura_Spa_booking_app">
						<ProjectCard>
							<Title>Sakura Spa</Title>
							<Image
								src={sakuraSpa}
								alt="The Sakura Spa welcome page"
								className="mb-5 object-contain rounded"
								width={400}
								height={450}
							/>
							<ProjectCardParagraph>
								This was the first project I did at CodeClan, so
								it&apos;s pretty basic. I&apos;m still pround of
								it however, and I think it has some pretty cool
								styling. It&apos;s all done in Python and Jinja,
								with Flask managing the backend.
							</ProjectCardParagraph>
						</ProjectCard>
					</a>
				</div>
			</Container>
		</div>
	);
}
