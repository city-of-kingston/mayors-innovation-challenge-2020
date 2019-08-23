import React from 'react';
import Link from 'next/link';

const urlPrefix = process.env.NODE_ENV === 'production' ? '' : '';

const NextLink = ({ href, children }) => (
	<Link href={urlPrefix + href}>{children}</Link>
);

export default NextLink;
