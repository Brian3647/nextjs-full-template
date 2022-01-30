import cfg from '@lib/cfg';
import type { FC } from 'react';

export interface Props {
	title?: string;
	description?: string;
	image?: string;
}

const MetaTags: FC<Props> = ({
	title = cfg.title,
	description = cfg.description,
	image = cfg.banner
}) => (
	<>
		<meta name='description' content={description} />
		<meta name='robots' content='index, follow' />
		<meta name='author' content={cfg.title + ' authors'} />
		<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
		<meta property='og:type' content='text/html' />
		<meta property='og:title' content={title} />
		<meta property='og:description' content={description} />
		<meta property='og:image' content={image} />
	</>
);

export default MetaTags;
