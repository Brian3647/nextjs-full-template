import styles from './index.module.scss';
import type { FC } from 'react';

interface Props {
	target: string;
}

const ScrollButton: FC<Props> = ({ target }) => (
	<div className={styles.scroll}>
		<a href={target}>
			<span></span>
		</a>
	</div>
);

export default ScrollButton;
