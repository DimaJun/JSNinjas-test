import { BuildOptions } from './types/config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin } from 'webpack';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import ESLintWebpackPlugin from 'eslint-webpack-plugin';

export function buildPlugins({ isDev }: BuildOptions) {
	const isProd = !isDev;

	const plugins = [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './public/index.html',
		}),
		new ProgressPlugin(),
	];

	if (isDev) {
		plugins.push(
			new ReactRefreshPlugin({
				overlay: false,
			})
			// new ESLintWebpackPlugin({
			// 	extensions: ['js', 'jsx', 'ts', 'tsx'],
			// 	configType: 'flat',
			// 	emitWarning: isDev,
			// 	failOnError: false,
			// })
		);
	}

	if (isProd) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[contenthash:8].css',
			})
		);
	}

	return plugins;
}
