import React, { Component } from 'react';
import CirclesSvgGroup, { CirclesGroupDef } from '../components/CirclesSvgGroup';
import Header from '../components/Header';
import NavItems from '../components/NavItems';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/page-layout.scss';
import PageContent from '../content/workshops.mdx';

import { Row, Col } from 'reactstrap';


export default class Workshops extends Component {
	constructor(props) {
		super(props);}

	
	render() {
		return (
			<div className="page-container">
				<Header />
				<NavItems active='workshops' />
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
			</div>
		);
	}
}
