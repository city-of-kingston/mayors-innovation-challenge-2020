import React, { Component } from 'react';
import Head from 'next/head';

import CirclesSvgGroup, { CirclesGroupDef } from '../components/CirclesSvgGroup';
import PageContent, { challenges } from '../content/categories.mdx';

import Header from '../components/Header';
import NavItems from '../components/NavItems';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/page-layout.scss';
import '../css/accordion.scss';
import { Row, Col } from 'reactstrap';


export default class Categories extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="page-container">
				<Head>
					<title>Categories - Kingston Mayor's Innovation Challenge</title>
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
