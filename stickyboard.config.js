module.exports = {
    metadata: {
        title: 'WeatherBoard',
        description: 'Dashboard for monitoring the weather.',
    },
    env: {
        NODE_ENV: process.env.NODE_ENV,
        MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
        KAKAO_APP_KEY:process.env.KAKAO_APP_KEY,
    },
};
