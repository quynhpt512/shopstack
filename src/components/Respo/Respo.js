import React from 'react';
export default class Respo extends React.Component {

	render() {

		return (
			<section className="blox dark respo-bg-none w-animate w-start_animation" 
				style={{
					backgroundImage: 'url(./images/blx-d-p01v2-1.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center center',
					backgroundSize: 'cover',
					minHeight: '810px',
				    backgroundColor: '#373332'
				}}
			>
				<div className="wpb_row vc_row-fluid full-row">
					<div className="container">
						<div className="wpb_column vc_column_container vc_col-sm-12">
							<div className="vc_column-inner">
								<div className="wpb_wrapper">
									<hr className="vertical-space4" />
									<div className="wpb_text_column wpb_content_element">
										<div className="wpb_wrapper">
											<p>eCommerce</p>
											<p>Responsive Design</p>
										</div>
									</div>
									<div className="vc_row wpb_row vc_inner vc_row-fluid">
										<div className="wpb_column vc_column_container vc_col-sm-4">
											<div className="vc_column-inner">
												<div className="wpb_wrapper">
													<hr className="vertical-space2" />
													<article className="icon-box">
														<i className="fa-code"></i>
														<h4>Premium Development</h4>
														<p>An emphasis on cutting-edge design and modern usability standards</p>
													</article>
													<hr className="vertical-space2" />
													<article className="icon-box">
														<i className="sl-screen-smartphone"></i>
														<h4>Retina Ready</h4>
														<p>Devices show more pixels per square inch, resulting in sharper images</p>
													</article>
													<hr className="vertical-space2" />
													<article className="icon-box">
														<i className="sl-screen-desktop"></i>
														<h4>Super Flexible</h4>
														<p>Content moves freely across all screen resolutions and all devices</p>
													</article>
													<hr className="vertical-space2" />
												</div>
											</div>
										</div>
										<div className="wpb_column vc_column_container vc_col-sm-4">
											<div className="vc_column-inner ">
												<div className="wpb_wrapper">
												</div>
											</div>
										</div>
										<div className="wpb_column vc_column_container vc_col-sm-4">
											<div className="vc_column-inner ">
												<div className="wpb_wrapper">
													<hr className="vertical-space4" />
													<hr className="vertical-space2" />
													<hr className="vertical-space2" />
												</div>
											</div>
										</div>
									</div>									
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
		
	}

}