import React from 'react';
import Button from './Button';
import Paragraph from './Paragraph';
import Title from './Title';

interface menuProps {
	setSelectedComponent: Function;
	setModalVisible: Function;
}

const Menu = ({ setSelectedComponent, setModalVisible }: menuProps) => {
	return (
		<div className="pt-5">
			<ul>
				<li>
					<Button
						onClick={() => {
							console.log('click');
						}}
						onMouseEnter={() => {
							setSelectedComponent('aboutMe');
							setModalVisible(true);
						}}
					>
						<Title>More About Me</Title>
					</Button>
				</li>
				<li>
					<a href="/ProjectsPage">
						<Button
							onClick={() => setSelectedComponent('projects')}
							onMouseEnter={() =>
								setSelectedComponent('projects')
							}
						>
							<Title>Projects</Title>
						</Button>
					</a>
				</li>
				<li>
					<Button
						onClick={() => setSelectedComponent('chuun')}
						onMouseEnter={() => setSelectedComponent('chuun')}
					>
						<Title>Chuun</Title>
					</Button>
				</li>
				<li>
					<Button
						onClick={() => setSelectedComponent('music')}
						onMouseEnter={() => setSelectedComponent('music')}
					>
						<Title>Music</Title>
					</Button>
				</li>
				<li>
					<Button
						onClick={() => setSelectedComponent('writing')}
						onMouseEnter={() => setSelectedComponent('writing')}
					>
						<Title>Writing</Title>
					</Button>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
