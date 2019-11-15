import React, { Component } from 'react';
import Layout from '../components/Layout';

import PageContent from '../content/contact.mdx';

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout title="Contact - Kingston Mayor's Innovation Challenge"
                activeNavItem="contact">
                <div className="content-container">
                    <div className="sidebar">
                        <ul className="links" style={{ fontFamily: 'Arial', fontSize: '25px' }}>

                        </ul>

                        <svg width="70" height="100%" viewBox="0 0 80 820" className="nav-slider" preserveAspectRatio="xMidYMid">
                            <path d="M 75 10 C 40 210, 40 610, 75 810" fill="transparent" className="line" />
                        </svg>
                    </div>
                    <div className="content" id="scroll-container" ref={this.scrollContainer}>
                        <PageContent />
                    </div>
                </div>
            </Layout>
        );
    }
}
