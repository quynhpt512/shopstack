import React from 'react';
export default class TodoForm extends React.Component {

	render() {

		return (
			<section className="top-bar">
				<div className="container">
					<div className="top-links lftflot">
						<a href="http://quynhpt512.github.io/shopstack">Call : (+66) 86-613-2807</a>
					</div>
					<div className="top-links rgtflot">
						<div className="socialfollow">
							<a 
								href="https://www.facebook.com/shopstack/" 
								className="facebook"
								target="_blank"
								rel="noopener noreferrer" 
							>
								<i className="fa-facebook"></i>
							</a>
							<a 
								href="https://www.linkedin.com/company/shopstack-company/" 
								className="linkedin"
								target="_blank"								
								rel="noopener noreferrer"
							>
								<i className="fa-linkedin"></i>
							</a>
						</div>
					</div>
				</div>
			</section>
		)

	}

}