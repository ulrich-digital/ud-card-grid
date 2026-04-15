const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
	...defaultConfig,
	entry: {
		'card-grid-editor-script': path.resolve(__dirname, 'src/blocks/card-grid/index.js'),
		'card-grid-editor-style': path.resolve(__dirname, 'src/css/card-grid/editor.scss'),
		'card-grid-frontend-script': path.resolve(__dirname, 'src/blocks/card-grid/frontend.js'),
		'card-grid-frontend-style': path.resolve(__dirname, 'src/css/card-grid/frontend.scss'),
		'card-grid-item-editor-script': path.resolve(__dirname, 'src/blocks/card-grid-item/index.js'),
		'card-grid-item-editor-style': path.resolve(__dirname, 'src/css/card-grid-item/editor.scss'),
		'card-grid-item-frontend-script': path.resolve(__dirname, 'src/blocks/card-grid-item/frontend.js'),
		'card-grid-item-frontend-style': path.resolve(__dirname, 'src/css/card-grid-item/frontend.scss'),
	},
	output: {
		...defaultConfig.output,
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
	},
};
