import cfg from '@lib/cfg';
import ScrollButton from '../ScrollButton';
import styles from './index.module.scss';
import type { FC } from 'react';

interface Props {
	scrollTarget?: string;
	title?: string;
	subtitle?: string;
	description?: string;
}

const Hero: FC<Props> = (props) => {
	const {
		title = cfg.title,
		subtitle = '"' + cfg.subtitle + '"',
		description = cfg.description,
		scrollTarget
	} = props;

	return (
		<div className={styles.hero}>
			<h1 className={styles.title}>{title}</h1>
			<h2 className={styles.subtitle}>{subtitle}</h2>
			<h3 className={styles.description}>{description}</h3>
			{scrollTarget && <ScrollButton target={scrollTarget} />}
		</div>
	);
};

export default Hero;
