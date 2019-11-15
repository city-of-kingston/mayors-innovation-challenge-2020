import React from 'react';
import Router from 'next/router';

// const urlPrefix = process.env.NODE_ENV === 'production' ? '' : '';

const NextLink = ({ href, label=false, children, className = '',
					Element = (({ children, ...props }) => <a {...props}>{children}</a>),
				}) => (
	<Element href={href + (label || typeof children === 'string'?`#     >>     ${label || children}`: '')}
		className={['next-link', className].join(' ')}
		onClick={(e) => { e.preventDefault(); Router.push(href); return false; }}>{children}</Element>
);

export default NextLink;
