import cfg from '@lib/cfg';
import MetaTags from '@lib/components/MetaTags';
import Head from 'next/head';
import type { FC } from 'react';

export interface Props {
	title?: string;
	description?: string;
}

const Layout: FC<Props> = (props) => {
	const { title = `${cfg.title}-${cfg.subtitle}`, children } = props;

	if (props.description === undefined) {
		props = { ...props, description: cfg.description };
	}

	return (
		<>
			<Head>
				<title>{title}</title>
				<MetaTags {...props} />
			</Head>

			{children}
		</>
	);
};

export default Layout;
