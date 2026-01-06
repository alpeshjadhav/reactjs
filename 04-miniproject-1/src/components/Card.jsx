import React from 'react'

const Card = ({ title, body, tags, reactions, views, userId }) => {
	return (
		<div className='card'>
			<header className="card-header">
				<div className="user-info">
					<img src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" alt="User avatar" className="avtar" />
					<span className="user-id">ID: {userId}</span>
				</div>
				<span className="views-count">{views} views</span>
			</header>

			<div className="card-content">
				<h2 className="card-title">{title}</h2>
				<p className="card-body">{body}</p>
				<div className="tags-wrapper">
					{tags && tags.map((tag, index) => (
						<span key={index} className="tag-badge">
							#{tag}
						</span>
					))}
				</div>
			</div>

			<footer className="card-footer">
				<button className="btn like-btn">{reactions.likes}</button>
				<button className="btn dislike-btn">{reactions.dislikes}</button>
			</footer>
		</div>
	)
}

export default Card
