import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

interface PropsArrowButton {
	toggleOpenFn: OnClick;
	openState: boolean;
}

export const ArrowButton = ({ toggleOpenFn, openState }: PropsArrowButton) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			onClick={toggleOpenFn}
			className={
				openState
					? clsx(styles.container, styles.container_open)
					: clsx(styles.container)
			}>
			<img src={arrow} alt='иконка стрелочки' className={styles.arrow} />
		</div>
	);
};
