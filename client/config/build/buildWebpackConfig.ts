import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import TerserPlugin from "terser-webpack-plugin";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, isDev, mode} = options;

    return {
        mode,
        entry: paths.entry,
        devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        output: {
            filename: 'main.[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/'
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        optimization: !isDev ? { minimize: true, minimizer: [new TerserPlugin()] } : undefined
    }
}
