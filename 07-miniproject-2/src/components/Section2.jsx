import React from 'react'

const Section2 = () => {
	return (
		<div className='h-full w-full sm:w-[70%] lg:w-[40%] p-4 flex items-center justify-center'>
			<div className='relative'>
				<div className='absolute -inset-2 bg-pink-500 rounded-full blur opacity-20'></div>

				<img
					src="https://media.licdn.com/dms/image/v2/D4D03AQFWUc5WsTofPg/profile-displayphoto-crop_800_800/B4DZqmFjDkIAAM-/0/1763723068413?e=1770249600&v=beta&t=4omyTWsgqTwhvp1hZW_hbfJjsIHY7lHvHIZvUm1XFb8"
					alt="Alpesh Jadhav Profile"
					className='relative rounded-full w-64 h-64 lg:w-80 lg:h-80 object-cover border-4 border-white shadow-xl'
				/>
			</div>
		</div>
	)
}

export default Section2