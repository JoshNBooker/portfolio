'use client';

import { useEffect, useState } from 'react';

const writingPage = () => {
	const [blogPosts, setBlogPosts] = useState(null);
	const getBlogPost = () => {
		fetch('http://localhost:8888/wordpress/wp-json/wp/v2/posts')
			.then((response) => response.json())
			.then((data) => setBlogPosts(data))
			.catch((error) => console.error('Error:', error));
	};
	useEffect(getBlogPost, []);
	console.log('blog posts', blogPosts);
	return <h1>writing</h1>;
};

export default writingPage;
