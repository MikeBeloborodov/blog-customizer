import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';

import { Text } from '../text';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import { OnClick } from '../arrow-button/ArrowButton';

import { OptionType, fontFamilyOptions } from 'src/constants/articleProps';
import { fontSizeOptions } from 'src/constants/articleProps';
import { fontColors } from 'src/constants/articleProps';
import { backgroundColors } from 'src/constants/articleProps';
import { contentWidthArr } from 'src/constants/articleProps';

export type ChangeSelectFn = (selection: OptionType) => void;

interface PropsArticleParamsForm {
	toggleOpenFn: OnClick;
	openState: boolean;
	submitForm: (evt: React.SyntheticEvent) => void;
	setDefaultOptions: OnClick;
	fontFamilyOption: OptionType;
	setFontFamilyOption: ChangeSelectFn;
	fontSizeOption: OptionType;
	setFontSizeOption: ChangeSelectFn;
	fontColorOption: OptionType;
	setFontColorOption: ChangeSelectFn;
	backgroundColorOption: OptionType;
	setBackgroundColorOption: ChangeSelectFn;
	contentWidthOption: OptionType;
	setContentWidthOption: ChangeSelectFn;
}

export const ArticleParamsForm = ({
	toggleOpenFn,
	openState,
	submitForm,
	setDefaultOptions,
	fontFamilyOption,
	setFontFamilyOption,
	fontSizeOption,
	setFontSizeOption,
	fontColorOption,
	setFontColorOption,
	backgroundColorOption,
	setBackgroundColorOption,
	contentWidthOption,
	setContentWidthOption,
}: PropsArticleParamsForm) => {
	return (
		<>
			<ArrowButton toggleOpenFn={toggleOpenFn} openState={openState} />
			<aside
				className={
					openState
						? clsx(styles.container, styles.container_open)
						: clsx(styles.container)
				}>
				<form className={styles.form} onSubmit={submitForm}>
					<Text as='h2' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>
					<Select
						title='шрифт'
						selected={fontFamilyOption}
						options={fontFamilyOptions}
						onChange={setFontFamilyOption}
					/>
					<RadioGroup
						title='размер шрифта'
						name='font-size'
						selected={fontSizeOption}
						options={fontSizeOptions}
						onChange={setFontSizeOption}
					/>
					<Select
						title='цвет шрифта'
						selected={fontColorOption}
						options={fontColors}
						onChange={setFontColorOption}
					/>
					<Separator />
					<Select
						title='цвет фона'
						selected={backgroundColorOption}
						options={backgroundColors}
						onChange={setBackgroundColorOption}
					/>
					<Select
						title='ширина контента'
						selected={contentWidthOption}
						options={contentWidthArr}
						onChange={setContentWidthOption}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={setDefaultOptions} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
