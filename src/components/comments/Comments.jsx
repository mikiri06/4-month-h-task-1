import React from 'react'
import './comments.scss'
import { Commentaryi } from '../featurs'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function Comments() {
	const [com, setCom] = useState([])
	// const [change, setChange] = useState([
	// 	{
	// 		id: Math.random(),
	// 		name: '',
	// 		text: '',
	// 		rating: 0,
	// 	},
	// ])

	// fetch('http://localhost:5000/comments')
	// 	.then(response => response.json())
	// 	.then(data => {
	// 		setCom(data)
	// 	})
	// 	.catch(error => {
	// 		console.log(error)
	// 	})
	const getFunc = () => {
		axios
			.get('http://localhost:5000/comments')
			.then(response => {
				setCom(response.data)
			})
			.catch(error => {
				console.log(error)
			})
	}

	// const ChangeFunc = () => {
	// 	axios
	// 		.put(`http://localhost:5000/comments/${change.id}`, change)
	// 		.then(response => {
	// 			setChange(response.data)
	// 		})
	// 		.catch(error => {
	// 			console.log(error)
	// 		})
	// }

	const ChangeFunc = (id, updatedComment) => {
		axios
			.put(`http://localhost:5000/comments/${id}`, updatedComment)
			.then(() => {
				getFunc()
			})
			.catch(error => {
				console.log(error)
			})
	}

	useEffect(() => {
		getFunc()
	}, [])

	console.log(com)

	const deleteComment = id => {
		axios
			.delete(`http://localhost:5000/comments/${id}`)
			.then(() => {
				getFunc()
			})
			.catch(error => {
				console.log(error)
			})
	}

	return (
		<section className='comments'>
			<div className='comments-container'>
				{com &&
					com.map(comment => (
						<Commentaryi
							key={comment.id}
							id={comment.id}
							rating={comment.rating}
							commentTitle={comment.text}
							author={comment.name}
							handleDelete={deleteComment}
							handleUpdate={ChangeFunc}
						/>
					))}
			</div>
		</section>
	)
}
