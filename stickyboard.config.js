module.exports = {
    metadata: {
        title: 'WeatherBoard',
        description: 'Dashboard for monitoring the weather.',
    },
    env: {
        NODE_ENV: process.env.NODE_ENV,
        MAPBOX_TOKEN: JSON.stringify(process.env.MAPBOX_TOKEN),
    },
};
