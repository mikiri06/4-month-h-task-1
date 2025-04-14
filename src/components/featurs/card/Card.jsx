import React from 'react'
// import cardImg from '../../../imgs/Episodes/eps-1.png'
import './card.scss'
export const Card = props => {
	const { img, category, episode, title, description } = props
	return (
		<div className='card-container'>
			<div className='card-container-img'>
				<img src={img} alt='' />
			</div>
			<div className='card-container-description'>
				<p className='category'>{category}</p>
				<h5 className='episode'>{episode}</h5>
				<h1 className='title'>{title}</h1>
				<p className='description'>{description}</p>
				<button className='blue-btn'>View Episode Details</button>
			</div>
		</div>
	)
}
