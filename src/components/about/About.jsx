import React from 'react'
import './about.scss'

import man from '../../imgs/about/jacob.png'
import { BsArrowRight } from 'react-icons/bs'

export default function About() {
	return (
		<section className='about' id='about'>
			<div className='about-container'>
				<div className='about-container-info col-6'>
					<a href='#' className='from'>
						<BsArrowRight className='arrow' />
					</a>
					<a href='#' className='meet'>
						Meet your host
					</a>
					<h1 className='title'>Jacob Paulaner</h1>
					<p className='description'>
						Jacob has a background in audio engineering, and has been podcasting
						since the early days.
					</p>
					<p className='description'>
						He’s here to help you level up your game by sharing everything he’s
						learned along the way.
					</p>
				</div>
				<div className='col-6 about-container-img'>
					<img src={man} alt='Jacob Paulaner' />
				</div>
			</div>
		</section>
	)
}
