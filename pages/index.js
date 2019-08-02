import React, { Component } from 'react';
import { Link, Element, Events } from 'react-scroll';
import Head from 'next/head';

import ScrollTrigger from '../components/ScrollTrigger';
import NextLink from '../components/NextLink';

import PageContent, { bindScrollTriggerCallback, headers } from '../content/index.mdx';
import Header from '../components/Header';
import NavItems from '../components/NavItems';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/page-layout.scss';
import { Row, Col } from 'reactstrap';



export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeHeader: null,
			headerProgress: 0,
			transitioning: false
		};

		for (let { name } of headers) {
			this.state[name] = false;
		}

		this.scrollContainer = React.createRef();
		bindScrollTriggerCallback(this.setSectionState.bind(this));
	}

	componentDidMount() {
		Events.scrollEvent.register('begin', (to, element) => {
			let i = headers.map(({name})=>name).indexOf(to);
			this.setState({
				activeHeader: to,
				headerProgress: (i + 0.5) / headers.length,
				transitioning: true,
			});
		});
	
		Events.scrollEvent.register('end', (to, element) => {
			this.setState({
				transitioning: false
			})
		});
	}

	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}

	setSectionState(name, state) {
		this.setState({ [name]: state });
	}

	componentDidUpdate(oldProps, oldState) {
		let changed = false;
		for (let { name } of headers) {
			if (this.state[name] !== oldState[name]) {
				changed = true; break;
			}
		}

		if (changed && !this.state.transitioning) {
			for (let i = 0; i < headers.length; i++) {
				let { name } = headers[i];
				if (this.state[name]) {
					this.setState({
						activeHeader: name,
						headerProgress: (i + 0.5) / headers.length,
					});
					break;
				}
			}
		}
	}

	render() {
		return (
			<div className="page-container">
				<Head>
					<title>Kingston Mayor's Innovation Challenge</title>
					<link rel="icon" href="static/MIC-Favicon.ico" type="image/x-icon" />
					<link rel="shortcut icon" href="static/MIC-Favicon.ico" type="image/x-icon" />
				</Head>

				<Header />
				<NavItems active='about' />
				<div className="content-container">
					<div className="sidebar">
						<ul className="links" style={{fontFamily: 'Arial', fontSize: '25px'}}>
							{ headers.map(({name, label}) => (
								<li key={name} className={name === this.state.activeHeader? 'active' : ''}>
									<Link containerId="scroll-container" smooth to={name} offset={-300}>{ label }</Link>
								</li>
							))}
						</ul>

						<svg width="70" height="100%" viewBox="0 0 80 820" className="nav-slider" preserveAspectRatio="xMidYMid">
							<path d="M 75 10 C 40 210, 40 610, 75 810" fill="transparent" className="line"/>
							<path d="M 75 10 C 40 210, 40 610, 75 810" className="dot" fill="transparent"
								strokeDashoffset={-this.state.headerProgress * 800}/>
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
