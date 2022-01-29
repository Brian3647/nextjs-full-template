import cfg from '@lib/cfg';
import MetaTags from '@lib/components/MetaTags';
import Head from 'next/head';

export interface Props {
	title?: string;
	description?: string;
	children: React.ReactNode | React.ReactNode[];
}

export default function Layout(props: Props) {
	const { title = cfg.title + ' - ' + cfg.subtitle, children = <></> } = props;

	if (props.description === undefined) {
		props.description = cfg.description;
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
}
