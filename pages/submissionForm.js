import React, { Component } from 'react';
import CirclesSvgGroup, { CirclesGroupDef } from '../components/CirclesSvgGroup';
import Header from '../components/Header';
import NavItems from '../components/NavItems';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/page-layout.scss';
import PageContent, { buttonText } from '../content/submissionForm.mdx';
import {Button} from 'reactstrap';


export default class SubmitProposal extends Component {
	constructor(props) {
		super(props);
	}


	
	render() {
		return (
			<div className="page-container">
				<Header />
				<NavItems active='submit' />
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
                        <Button className='submit-proposal'> {buttonText} </Button>
					</div>
				</div>
			</div>
		);
	}
}

