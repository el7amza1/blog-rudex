// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

function Post ({posts}){
    // const { id } = useParams();
	
	// const [post, setPost] = useState({});

	// useEffect(() => {
	// 	const card = posts.find(post => post.id === id);
	// 	setPost(card);
	// }, []);
	return (
		<div>
			<h2>{posts.cardTitle}</h2>
			<p>{posts.body}</p>
		</div>
	);
}

export default Post 