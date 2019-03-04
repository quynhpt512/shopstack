import React from 'react';
import { Parallax } from 'react-parallax';
export default class Banner extends React.Component {

	render() {

		return (
			<div>
				<Parallax
			    	bgImage={'http://www.shopstack.asia/wp-content/uploads/2015/12/home_banner-1.png'}
			    	bgImageAlt="shopstack"
			    	strength={100}
			    >
			    <div style={{ height: '900px', marginTop: '-150px' }}></div>	     
			    </Parallax>
		    </div>
			
		)
		
	}

}