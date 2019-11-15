import React, { Component } from 'react';
import Layout from '../components/Layout';

import PageContent from '../content/submissionInformation.mdx';


export default class SubmitProposal extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<Layout title="Submit a Proposal - Kingston Mayor's Innovation Challenge"
				activeNavItem="submit">
				<div className="content-container">
					<div className="sidebar">
						<ul className="links" style={{fontFamily: 'Arial', fontSize: '25px'}}>
					
						</ul>

						<svg width="70" height="100%" viewBox="0 0 80 820" className="nav-slider" preserveAspectRatio="xMidYMid">
							<path d="M 75 10 C 40 210, 40 610, 75 810" fill="transparent" className="line"/>
						</svg>
					</div>
					<div className="submit-proposal-content" id="scroll-container" ref={this.scrollContainer}>
						<PageContent />
					</div>
				</div>
			</Layout>
		);
	}
}

