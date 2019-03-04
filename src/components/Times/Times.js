import React from 'react';
export default class Times extends React.Component {

	render() {

		return (
			<section 
				className="blox dark w-animate w-start_animation" 
				style={{ 
					paddingTop: '80px', 
					paddingBottom: '14px', 
					backgroundSize: 'cover',   
					backgroundColor: '#e87700'
				}}
			>
				<div className="wpb_row vc_row-fluid full-row">
					<div className="container">
						<div className="wpb_column vc_column_container vc_col-sm-3">
							<div className="vc_column-inner">
								<div className="wpb_wrapper">
									<div className="f-counter max-counter counted" data-effecttype="counter" data-counter="20">
										<i className="icon-counter sl-badge"></i>
										<span className="max-count">20</span>
										<span className="suf-counter">+</span>
										<h5>Key Brands &amp; Clients</h5>
									</div>
								</div>
							</div>
						</div>
						<div className="wpb_column vc_column_container vc_col-sm-3">
							<div className="vc_column-inner ">
								<div className="wpb_wrapper">
									<div className="f-counter max-counter counted" data-effecttype="counter" data-counter="50">
										<i className="icon-counter sl-basket-loaded"></i>
										<span className="max-count">50</span>
										<span className="suf-counter">+</span>
										<h5>Ecommerce Projects</h5>
									</div>
								</div>
							</div>
						</div>
						<div className="wpb_column vc_column_container vc_col-sm-3">
							<div className="vc_column-inner ">
								<div className="wpb_wrapper">
									<div className="f-counter max-counter counted" data-effecttype="counter" data-counter="80">
										<i className="icon-counter sl-badge"></i>
										<span className="max-count">80</span>
										<span className="suf-counter">+</span>
										<h5>Development Team</h5>
									</div>
								</div>
							</div>
						</div>
						<div className="wpb_column vc_column_container vc_col-sm-3">
							<div className="vc_column-inner ">
								<div className="wpb_wrapper">
									<div className="f-counter max-counter counted" data-effecttype="counter" data-counter="400000">
										<i className="icon-counter sl-camera"></i>
										<span className="max-count">400000</span>
										<span className="suf-counter">+</span>
										<h5>Development Hours</h5>
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