import React, { Component } from 'react';
import Layout from '../components/Layout';

import PageContent from '../content/workshops.mdx';


export default class Workshops extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<Layout title="Workshops - Kingston Mayor's Innovation Challenge"
				activeNavItem="workshops">
				<div className="content-container">
					<div className="sidebar">
						<ul className="links" style={{fontFamily: 'Arial', fontSize: '25px'}}>
					
						</ul>

						<svg width="70" height="100%" viewBox="0 0 80 820" className="nav-slider" preserveAspectRatio="xMidYMid">
							<path d="M 75 10 C 40 210, 40 610, 75 810" fill="transparent" className="line"/>
						</svg>
					</div>
					<div className="workshop-content" ref={this.scrollContainer}>
								<PageContent />
								<img src="static/MIC-Craig.jpg" width="100%" style={{paddingTop: "40px"}}/>
					</div>
				</div>
			</Layout>
		);
	}
}
