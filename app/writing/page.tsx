'use client';
import LineBreak from '@/components/LineBreak';
import MenuTitle from '@/components/MenuTitle';
import ModalContainer from '@/components/ModalContainer';
import Paragraph from '@/components/Paragraph';
import Title from '@/components/Title';
import Container from '@/components/Container';
import React, { useEffect, useState } from 'react';
import Pulse from '@/components/Pulse';
import Button from '@/components/Button';
import Modal from '@/components/Modal';

interface BlogPost {
	id: number;
	title: {
		rendered: string;
	};
	date: string;
	content: {
		rendered: string;
	};
}

const WritingPage = () => {
	const [blogPosts, setBlogPosts] = useState<null | BlogPost[]>([]);
	const reverseString = (string: string) => {
		let reversedString = '';
		for (let i = string.length - 1; i >= 0; i--) {
			reversedString += string[i];
		}
		return reversedString;
	};
	const formatDate = (blogPosts: BlogPost[]) => {
		for (let blog of blogPosts) {
			let date = blog.date.substring(0, 10);
			let dateArray = date.split('-');
			let formattedDate = '';
			for (let i = 2; i >= 0; i--) {
				formattedDate += `${dateArray[i]} `;
			}
			return formattedDate;
		}
	};

	const getBlogPosts = () => {
		fetch('http://localhost:8888/wordpress/wp-json/wp/v2/posts')
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const contentType = response.headers.get('content-type');
				if (
					contentType &&
					contentType.indexOf('application/json') !== -1
				) {
					return response.json();
				} else {
					throw new Error('Not a JSON response');
				}
			})
			.then((data) => {
				setBlogPosts(data);
			})
			.catch((error) => {
				console.error('Error fetching blog posts:', error);
			});
	};

	useEffect(() => {
		getBlogPosts();
	}, []);
	// if (blogPosts) {
	// 	console.log(blogPosts[0].date);
	// }

	return (
		<div className="flex flex-col items-center my-10 mx-20 max-w-screen">
			<MenuTitle>My Little Dev Blog</MenuTitle>
			<Paragraph>
				These are all posts pulled in from a wordpress site that I made
				using PHP and jQuery, pulled in through a REST API. There's not
				really much utility in doing this, but look possible employers,
				I can use RESTful APIs!
			</Paragraph>
			<LineBreak />
			{blogPosts ? (
				blogPosts.map((blogpost) => (
					<div key={blogpost.id}>
						<Title>{blogpost.title.rendered}</Title>
						<Paragraph>
							<span className="font-bold mb-8">
								{formatDate(blogPosts)}
							</span>
						</Paragraph>
						<Paragraph>
							<div
								dangerouslySetInnerHTML={{
									__html: blogpost.content.rendered,
								}}
							/>
						</Paragraph>
						<LineBreak />
					</div>
				))
			) : (
				<Container>
					<Title>
						<Pulse>One sec, just fetching some stuff!</Pulse>
					</Title>
					<Paragraph>
						If nothing shows up, you can click{' '}
						<Modal>
							<a href="">here</a>
						</Modal>{' '}
						to be taken to my wordpress blog!
					</Paragraph>
				</Container>
			)}
		</div>
	);
};

export default WritingPage;
