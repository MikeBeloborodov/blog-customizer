import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { OptionType, defaultArticleState } from './constants/articleProps';
import { useChangeSelect } from './components/select/hooks/useChangeSelect';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

export interface IAllOptions {
	fontFamilyOption: OptionType;
	fontSizeOption: OptionType;
	fontColor: OptionType;
	backgroundColor: OptionType;
	contentWidth: OptionType;
}

const App = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const [fontFamilyOption, setFontFamilyOption] = useChangeSelect(
		defaultArticleState.fontFamilyOption
	);
	const [fontSizeOption, setFontSizeOption] = useChangeSelect(
		defaultArticleState.fontSizeOption
	);
	const [fontColorOption, setFontColorOption] = useChangeSelect(
		defaultArticleState.fontColor
	);
	const [backgroundColorOption, setBackgroundColorOption] = useChangeSelect(
		defaultArticleState.backgroundColor
	);
	const [contentWidthOption, setContentWidthOption] = useChangeSelect(
		defaultArticleState.contentWidth
	);

	const [allOptions, setAllOptions] = useState<IAllOptions>({
		fontFamilyOption: fontFamilyOption,
		fontSizeOption: fontSizeOption,
		fontColor: fontColorOption,
		backgroundColor: backgroundColorOption,
		contentWidth: contentWidthOption,
	});

	function toggleOpen() {
		setIsOpen((oldVal) => !oldVal);
	}

	function handleClose() {
		setIsOpen(false);
	}

	function setDefaultOptions() {
		setAllOptions(defaultArticleState);
		setFontFamilyOption(defaultArticleState.fontFamilyOption);
		setFontSizeOption(defaultArticleState.fontSizeOption);
		setFontColorOption(defaultArticleState.fontColor);
		setBackgroundColorOption(defaultArticleState.backgroundColor);
		setContentWidthOption(defaultArticleState.contentWidth);
	}

	function submitForm(evt: React.SyntheticEvent) {
		evt.preventDefault();
		setAllOptions({
			fontFamilyOption: fontFamilyOption,
			fontSizeOption: fontSizeOption,
			fontColor: fontColorOption,
			backgroundColor: backgroundColorOption,
			contentWidth: contentWidthOption,
		});
	}

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': allOptions.fontFamilyOption.value,
					'--font-size': allOptions.fontSizeOption.value,
					'--font-color': allOptions.fontColor.value,
					'--container-width': allOptions.contentWidth.value,
					'--bg-color': allOptions.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				toggleOpenFn={toggleOpen}
				openState={isOpen}
				submitForm={submitForm}
				setDefaultOptions={setDefaultOptions}
				fontFamilyOption={fontFamilyOption}
				setFontFamilyOption={setFontFamilyOption}
				fontSizeOption={fontSizeOption}
				setFontSizeOption={setFontSizeOption}
				fontColorOption={fontColorOption}
				setFontColorOption={setFontColorOption}
				backgroundColorOption={backgroundColorOption}
				setBackgroundColorOption={setBackgroundColorOption}
				contentWidthOption={contentWidthOption}
				setContentWidthOption={setContentWidthOption}
			/>
			<Article closeFn={handleClose} />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
