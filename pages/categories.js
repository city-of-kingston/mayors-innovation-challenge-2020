import React, { Component } from 'react';
import Head from 'next/head';

import PageContent from '../content/categories.mdx';

import Header from '../components/Header';
import NavItems from '../components/NavItems';

export default class Categories extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="page-container">
				<Head>
					<title>Categories - Kingston Mayor's Innovation Challenge</title>
					<link rel="icon" href="static/MIC-Favicon.ico" type="image/x-icon" />
					<link rel="shortcut icon" href="static/MIC-Favicon.ico" type="image/x-icon" />
				</Head>

				<Header />
				<NavItems active='categories' />
				<div className="content-container">
					<div className="sidebar">
						<ul className="links" style={{fontFamily: 'Arial', fontSize: '25px'}}>
					
						</ul>

						<svg width="70" height="100%" viewBox="0 0 80 820" className="nav-slider" preserveAspectRatio="xMidYMid">
							<path d="M 75 10 C 40 210, 40 610, 75 810" fill="transparent" className="line"/>
						</svg>
					</div>
					<div className="content" id="scroll-container" ref={this.scrollContainer}>
						<PageContent />
					</div>
				</div>
			</div>
		);
	}
}