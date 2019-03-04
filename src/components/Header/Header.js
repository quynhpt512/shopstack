import React from 'react';
export default class Header extends React.Component {

	render() {

		return (
			<header id="header" className="horizontal-w  sm-rgt-mn  w-header-type-10">
			   <div className="container">
			      <div className="col-md-3 col-sm-3 logo-wrap">
			         <div className="logo">
			            <a href="http://www.shopstack.asia:80/">
			            	<img src="http://www.shopstack.asia:80/wp-content/uploads/2019/01/shopstack-logo-email.png" width="210" id="img-logo-w1" alt="Shopstack Asia" className="img-logo-w1" style={{width: '210px'}} />
			            </a>

			            <a href="http://www.shopstack.asia:80/">
			            	<img src="http://www.shopstack.asia:80/wp-content/uploads/2019/01/shopstack-logo-email.png" width="280" id="img-logo-w2" alt="Shopstack Asia" className="img-logo-w2" style={{width: '280px'}} />
			            </a>
			         </div>
			      </div>
			      <nav id="nav-wrap" className="nav-wrap1 col-md-9 col-sm-9">
			         <div id="menu-icon"><i className="fa-navicon"></i> <span>Menu - </span><span className="mn-clk">Navigation</span><span className="mn-ext1"></span><span className="mn-ext2"></span><span className="mn-ext3"></span></div>
			         <div id="menu-icon"><i className="fa-navicon"></i> <span>Menu - </span><span className="mn-clk">Navigation</span><span className="mn-ext1"></span><span className="mn-ext2"></span><span className="mn-ext3"></span></div>
			         <div className="container">			            
			            <ul id="nav">
			            	<li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="http://www.shopstack.asia">Home</a>
			            	</li>
			                <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="http://www.shopstack.asia:80/index.php/about-us/">Company</a>
			                </li>
			                <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="http://www.shopstack.asia:80/index.php/portfolio-shopstack/">Portfolio</a>
			                </li>
			                <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="http://www.shopstack.asia:80/index.php/contact-us/">Contact</a>
			                </li>
			            </ul>
			         </div>
			      </nav>
			   </div>
			</header>
		)

	}

}