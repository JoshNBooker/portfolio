'use client';
import React, { useState } from 'react';
import AboutMe from '../components/AboutMe';
import Menu from '../components/Menu';
import Chuun from '../components/Chuun';
import Music from '../components/Music';
import Projects from '../components/Projects';
import Writing from '../components/Writing';
import Image from 'next/image.js';
import Modal from '@/components/Modal';
import Title from '@/components/Title';
import PulsatingText from '@/components/Pulse';
import MenuTitle from '@/components/MenuTitle';
import Button from '@/components/Button';
const me = require('../public/me.png');
import CVDownloadButton from '@/components/CVDownload/CVDownloadButton';

const Homepage = () => {
	const [selectedComponent, setSelectedComponent] = useState('default');
	const [modalVisible, setModalVisible] = useState(false);
	console.log('selected component: ', selectedComponent);
	console.log('modal visible:', modalVisible);

	const menuImages: { [key: string]: any } = {
		aboutMe: require('../public/aboutMe.jpg'),
		projects: require('../public/projects.png'),
		writing: require('../public/writing.png'),
	};

	function getImage(selectedComponent: string) {
		for (const key in menuImages) {
			if (key === selectedComponent) {
				return menuImages[key];
			}
		}
		return require('../public/default.png');
	}

	return (
		<>
			<div className="flex">
				<div className="h-max w-1/2 flex flex-col ml-5 p-5 my-auto">
					<div className="flex items-center">
						<Image
							src={me}
							alt="Josh in manchester"
							className="object-contain rounded"
							width={350}
							height={350}
							loading="eager"
						/>
						<article className="ml-5 max-w-sm">
							<Title>Hello!</Title>
							<p className="w-full bg-gradient-to-r from-gray-500 to-gray-700 text-transparent bg-clip-text break-normal mb-10 text-xl">
								I am Josh, a software developer in the early
								days of my career, eager to learn, collaborate,
								and build things that make people say
								&quot;huh... that&apos;s actually pretty
								cool&quot;.
							</p>
						</article>
					</div>
					<div className="flex">
						<Menu
							setSelectedComponent={setSelectedComponent}
							setModalVisible={setModalVisible}
						/>
						{selectedComponent && (
							<Image
								src={getImage(selectedComponent)}
								alt={selectedComponent}
								className="rounded-full drop-shadow-2xl"
								width={350}
								height={350}
								loading="eager"
							/>
						)}
					</div>
				</div>
				{modalVisible ? (
					<div className="h-screen w-2/3 flex items-center justify-center flex flex-col">
						<Modal>
							{selectedComponent == 'aboutMe' ? (
								<AboutMe />
							) : selectedComponent == 'projects' ? (
								<Projects />
							) : (
								selectedComponent == 'writing' && <Writing />
							)}
						</Modal>
						{selectedComponent == 'aboutMe' && <CVDownloadButton />}
					</div>
				) : (
					<div className="h-screen w-2/3 flex items-center justify-center">
						<PulsatingText>
							<MenuTitle>Check me out!</MenuTitle>
						</PulsatingText>
					</div>
				)}
			</div>
		</>
	);
};
export default Homepage;
