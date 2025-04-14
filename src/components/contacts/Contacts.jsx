import React from 'react'

import './contacts.scss'
import axios from 'axios'

export default function Contacts() {
	const createComment = newCom => {
		axios
			.post('http://localhost:5000/comments', newCom)
			.then(response => {})
			.catch(error => {
				console.log(error)
			})
	}

	return (
		<section className='contacts' id='contact'>
			<div className='contacts-container'>
				<div className='title-con'>
					<p className='email'>Email Newsletter</p>
					<h1 className='title'>Subscribe for updates</h1>
				</div>
				<form className='form'>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='Text'
						className='name'
					/>
					<input
						type='text'
						name='name'
						id='text'
						placeholder='Name'
						className='name'
					/>
					<input
						type='text'
						name='name'
						id='text'
						placeholder='Rating'
						className='name'
					/>

					<button className='blue-btn'>Submit</button>
				</form>
			</div>
		</section>
	)
}
