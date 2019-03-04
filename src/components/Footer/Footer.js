import React from 'react';
export default class Footer extends React.Component {

	render() {

		return (
			<footer id="footer">
			    <section className="container footer-in">
			        <div className="row">
			            <div className="col-md-4">
			                <div className="widget">
			                    <div className="textwidget">
			                        <div className="vertical-space2"></div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-md-4"></div>
			            <div className="col-md-4"></div>
			        </div>
			    </section>	
			    <span id="scroll-top">
			    	<a id="scroll-top" href="http://www.shopstack.asia" className="scrollup">
			    		<i className="fa-chevron-up" />
			    	</a>
			    </span>
			</footer>	
				 
		)

	}

}