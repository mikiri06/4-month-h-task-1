// Commentaryi.jsx
import React, { useState } from 'react'
import './comment.scss'
import { Rating } from 'react-simple-star-rating'

export const Commentaryi = ({
	rating,
	commentTitle,
	author,
	handleDelete,
	id,
	handleUpdate,
}) => {
	const [isEditing, setIsEditing] = useState(false)
	const [title, setTitle] = useState(commentTitle)
	const [name, setName] = useState(author)

	const saveChanges = () => {
		handleUpdate(id, {
			name,
			text: title,
			rating,
		})
		setIsEditing(false)
	}
	const cancelChanges = () => {
		setTitle(commentTitle)
		setName(author)
		setIsEditing(false)
	}

	return (
		<div className='comment'>
			<Rating
				initialValue={rating}
				readonly={false}
				size={20}
				allowFraction={false}
				emptyColor='transparent'
				className='comment-stars'
			/>
			{isEditing ? (
				<div>
					<input
						type='text'
						value={title}
						onChange={e => setTitle(e.target.value)}
						placeholder='Title'
					/>
					<input
						type='text'
						value={name}
						onChange={e => setName(e.target.value)}
						placeholder='Name'
					/>
					<button className='blue-btn' onClick={saveChanges}>
						Сохранить
					</button>
					<button className='blue-btn' onClick={cancelChanges}>
						Отменить
					</button>
				</div>
			) : (
				<div>
					<h1 className='comment-title'>{title}</h1>
					<p className='comment-author'>{name}</p>
					<button className='blue-btn' onClick={() => handleDelete(id)}>
						Delete
					</button>
					<button
						className='blue-btn editbtn'
						onClick={() => setIsEditing(true)}
					>
						Изменить
					</button>
				</div>
			)}
		</div>
	)
}
