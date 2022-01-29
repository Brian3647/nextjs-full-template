import styles from './index.module.scss';

interface Props {
	target: string;
}

export default function ScrollButton({ target }: Props) {
	return (
		<div className={styles.scroll}>
			<a href={target}>
				<span></span>
			</a>
		</div>
	);
}
