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
const me = require('../public/me.jpg');

const Homepage = () => {
	const [selectedComponent, setSelectedComponent] = useState('');
	const [modalVisible, setModalVisible] = useState(false);
	console.log('selected component: ', selectedComponent);
	console.log('modal visible:', modalVisible);
	return (
		<>
			<div className="flex">
				<div className="h-max w-1/2 flex flex-col ml-5 p-5 my-auto">
					<div className="flex items-center justify-center my-auto">
						<Image
							src={me}
							alt="Josh standing in front of a pub"
							className="object-contain rounded"
							width={300}
							height={300}
							loading="eager"
						/>
						<article className="ml-5 max-w-sm">
							<Title>Hello!</Title>
							<p className="w-full bg-gradient-to-r from-gray-500 to-gray-700 text-transparent bg-clip-text break-normal mb-10">
								I am Josh, a software developer in the early
								days of my career, eager to learn, collaborate,
								and build things that make people say
								&quot;huh... that&apos;s actually pretty
								cool&quot;. Hover over the titles below if you
								want to find out a bit more!
							</p>
						</article>
					</div>
					<Menu
						setSelectedComponent={setSelectedComponent}
						setModalVisible={setModalVisible}
					/>
				</div>
				{modalVisible ? (
					<div className="h-screen w-2/3 flex items-center justify-center">
						<Modal>
							{selectedComponent == 'aboutMe' ? (
								<AboutMe />
							) : selectedComponent == 'projects' ? (
								<Projects />
							) : (
								selectedComponent == 'writing' && <Writing />
							)}
						</Modal>
					</div>
				) : (
					<div className="h-screen w-2/3 flex items-center justify-center">
						<Title>
							Hover over one of the sections on the left to browse
						</Title>
					</div>
				)}
			</div>
		</>
	);
};
export default Homepage;
