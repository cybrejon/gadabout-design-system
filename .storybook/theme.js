import { create } from 'storybook/theming';
import logo from './logo.svg';

export default create({
	base: 'light',
	brandTitle: 'Gadabout.ai',
	brandImage: logo,

	textColor: '#152622',
	textInverseColor: '#ffffff',
	colorPrimary: '#284841',
	colorSecondary: '#5d7f16',
	appBorderColor: '#d5d9d8',
	appHoverBg: '#d5d9d8',
	barHoverColor: '#d5d9d8',
	barSelectedColor: '#5d7f16',
	buttonBg: '#ecf4f2',
	buttonBorder: '#284841',
	booleanSelectedBg: '#5d7f16',
	appBg: '#ecf4f2',

	inputBorderRadius: 12,

	fontBase: "'Inter Variable', sans-serif",

	appBorderRadius: 18
});
