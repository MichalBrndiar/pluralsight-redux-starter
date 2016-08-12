import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';

process.env.NODE_ENV = 'production';

webpack(webpackConfig).run((err, status) => {
    if (err) {
        console.log(err);
        return 1;
    }

    const jsonStatus = status.toJson();
    if (jsonStatus.hasErrors) {
        return jsonStatus.errors.map(err => console.log(err));
    }

    console.log(`Webpack states: ${status}`);

    return 0;
});