import webpack from 'webpack';
import 'webpack-dev-server';
import path from 'path';
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        build: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        src: path.resolve(__dirname, 'src'),
        html: path.resolve(__dirname, 'public', 'index.html')
    };

    const mode = env?.mode || 'development';
    const isDev = mode === 'development';
    const port = env?.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        isDev,
        paths,
        port
    })

    return config;
}
