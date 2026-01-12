import {BuildOptions} from "./types/config";
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';

export function buildDevServer({port}: BuildOptions): DevServerConfiguration {
    return {
        historyApiFallback: true,
        port,
        hot: true,
        client: {
            overlay: false
        }
    }
}
