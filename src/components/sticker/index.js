// src/components/sticker/index.js

import loadable from '@loadable/component';

// Recharts
const RechartsLineChart = loadable(() => import('./RechartsLineChart'));
const RechartsBarChart = loadable(() => import('./RechartsBarChart'));
const RechartsComposedChart = loadable(() => import('./RechartsComposedChart'));
const RechartsMultiLineChart = loadable(() =>
    import('./RechartsMultiLineChart')
);
const RechartsPieChart = loadable(() => import('./RechartsPieChart'));
const RechartsAreaChart = loadable(() => import('./RechartsAreaChart'));
const RechartsRadarChart = loadable(() => import('./RechartsRadarChart'));
const RechartsScatterChart = loadable(() => import('./RechartsScatterChart'));
const RechartsTinyChart = loadable(() => import('./RechartsTinyChart'));
const RechartsTreeMap = loadable(() => import('./RechartsTreeMap'));
const RechartsStackedBarChart = loadable(() =>
    import('./RechartsStackedBarChart')
);
// Weather
const OpenWeatherMap = loadable(() => import('./OpenWeatherMap'));
const OpenWeatherMap3days = loadable(() => import('./OpenWeatherMap3days'));
const OpenWeatherMap7days = loadable(() => import('./OpenWeatherMap7days'));
const YahooWeather = loadable(() => import('./YahooWeather'));
const YahooWeatherForecast = loadable(() => import('./YahooWeatherForecast'));
const WeatherMarkdown = loadable(() => import('./WeatherMarkdown'));
const WeatherCardList = loadable(() => import('./WeatherCardList'));
const WeatherWordCloud = loadable(() => import('./WeatherWordCloud'));
// MapView
const MapViewMapBox = loadable(() => import('./MapViewMapBox'));
const MapViewKakaoMap = loadable(() => import('./MapViewKakaoMap'));

export default {
    Recharts: [
        {
            Name: 'RechartsLineChart',
            Description: 'RechartsLineChart sample',
            Component: RechartsLineChart,
        },
        {
            Name: 'RechartsBarChart',
            Description: 'RechartsBarChart sample',
            Component: RechartsBarChart,
        },
        {
            Name: 'RechartsComposedChart',
            Description: 'RechartsComposedChart sample',
            Component: RechartsComposedChart,
        },
        {
            Name: 'RechartsMultiLineChart',
            Description: 'RechartsMultiLineChart sample',
            Component: RechartsMultiLineChart,
        },
        {
            Name: 'RechartsPieChart',
            Description: 'RechartsPieChart sample',
            Component: RechartsPieChart,
        },
        {
            Name: 'RechartsAreaChart',
            Description: 'RechartsAreaChart sample',
            Component: RechartsAreaChart,
        },
        {
            Name: 'RechartsRadarChart',
            Description: 'RechartsRadarChart sample',
            Component: RechartsRadarChart,
        },
        {
            Name: 'RechartsScatterChart',
            Description: 'RechartsScatterChart sample',
            Component: RechartsScatterChart,
        },
        {
            Name: 'RechartsTinyChart',
            Description: 'RechartsTinyChart sample',
            Component: RechartsTinyChart,
        },
        {
            Name: 'RechartsTreeMap',
            Description: 'RechartsTreeMap sample',
            Component: RechartsTreeMap,
        },
        {
            Name: 'RechartsStackedBarChart',
            Description: 'RechartsStackedBarChart sample',
            Component: RechartsStackedBarChart,
        },
    ],
    Weather: [
        {
            Name: 'OpenWeatherMap',
            Description: 'OpenWeatherMap sample',
            Component: OpenWeatherMap,
        },
        {
            Name: 'OpenWeatherMap3days',
            Description: 'OpenWeatherMap3days sample',
            Component: OpenWeatherMap3days,
        },
        {
            Name: 'OpenWeatherMap7days',
            Description: 'OpenWeatherMap7days sample',
            Component: OpenWeatherMap7days,
        },
        {
            Name: 'YahooWeather',
            Description: 'YahooWeather sample',
            Component: YahooWeather,
        },
        {
            Name: 'YahooWeatherForecast',
            Description: 'YahooWeatherForecast sample',
            Component: YahooWeatherForecast,
        },
        {
            Name: 'WeatherMarkdown',
            Description: 'WeatherMarkdown sample',
            Component: WeatherMarkdown,
        },
        {
            Name: 'WeatherCardList',
            Description: 'WeatherCardList sample',
            Component: WeatherCardList,
        },
        {
            Name: 'WeatherWordCloud',
            Description: 'WeatherWordCloud sample',
            Component: WeatherWordCloud,
        },
    ],
    Map: [
        {
            Name: 'MapViewMapBox',
            Description: 'MapViewMapBox sample',
            Component: MapViewMapBox,
        },
        {
            Name: 'MapViewKakaoMap',
            Description: 'MapViewKakaoMap sample',
            Component: MapViewKakaoMap,
        },
    ],
};
