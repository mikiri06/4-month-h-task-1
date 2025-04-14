// import React from 'react'
// import { Card } from '../featurs/card/Card'
import { Card } from '../featurs'
import './episodes.scss'
import cartImg1 from '../../imgs/Episodes/eps-1.png'
import cartImg2 from '../../imgs/Episodes/eps-2.png'
import cartImg3 from '../../imgs/Episodes/eps-3.png'

export default function Episodes() {
	const carts = [
		{
			img: cartImg1,
			category: 'Gear',
			episode: 'Episode 3',
			title: 'Should you get outboard audio gear?',
			description:
				'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.',
		},
		{
			img: cartImg2,
			category: 'Gear',
			episode: 'Episode 3',
			title: 'Should you get outboard audio gear?',
			description:
				'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.',
		},
		{
			img: cartImg3,
			category: 'Gear',
			episode: 'Episode 3',
			title: 'Should you get outboard audio gear?',
			description:
				'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.',
		},
	]

	return (
		<section className='episodes' id='episodes'>
			<div className='last-episode'>
				<h1>Latest episodes</h1>
				<button className='blue-btn'>View all episodes</button>
			</div>

			<div className='episodes-list'>
				{carts &&
					carts.map(cart => (
						<Card
							key={cart.episode}
							img={cart.img}
							category={cart.category}
							episode={cart.episode}
							title={cart.title}
							description={cart.description}
						/>
					))}
			</div>
		</section>
	)
}
