import React, { useState, useEffect } from 'react';
import { KakaoMap, Marker } from '@stickyboard/kakao-map';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import RefreshRoundedIcon from '@material-ui/icons/RefreshRounded';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
    },
    title: {
        fontSize: 14,
    },
    refresh: {
        position: 'fixed',
        width: '56px',
        height: '56px',
        left: '16px',
        top: '16px',
        zIndex: 1050,
        backgroundColor: '#03a9f4',
        color: '#fff',
        boxShadow: '0px 3px 10px -1px rgba(0,0,0,0.3)',
        '&:focus': {
            backgroundColor: '#03a9f4',
        },
        '&:hover': {
            backgroundColor: '#0398db',
        },
    },
    rIcon: {
        fontSize: '1.5rem',
    },
    spinner: {
        zIndex: 1050,
    },
    wrapper: {
        width: '100%',
        height: '70%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const cityList = [
    'seoul',
    'chuncheon',
    'seosan',
    'gangneung',
    'chungju',
    'daejeon',
    'andong',
    'jeonju',
    'gwangju',
    'daegu',
    'ulsan',
    'jeju',
    'mokpo',
    'yeosu',
    'busan',
];

const SimpleCard = ({ details }) => {
    const classes = useStyles();

    return (
        <Card key={details} className={classes.root}>
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom>
                    {details.city}
                </Typography>
                <Typography variant="h5" component="h2">
                    {details.type}
                </Typography>
                <Typography variant="body2" component="p">
                    {details.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

function MapViewKakaoMap(props) {
    const classes = useStyles();
    const [dataObjs, setDataObjs] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const setWeather = async () => {
        let result = {};
        for (let i = 0; i < cityList.length; i++) {
            const cityName = cityList[i];
            await fetch(
                // `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
                `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${'3dae235cf1b980a7814ab71411ea9d3b'}`
            )
                .then((res) => res.json())
                .then((data) => {
                    const {
                        coord: { lat, lon },
                        weather: [{ main, description, icon }],
                    } = data;

                    result[cityName] = {
                        lat: lat,
                        lon: lon,
                        type: main,
                        description: description,
                        icon: icon,
                    };
                });
        }
        setDataObjs(result);
    };

    const createMarkers = () => {
        let result = [];
        for (let i = 0; i < cityList.length; i++) {
            const city = cityList[i];
            const data = dataObjs[city];
            result.push(
                <Marker
                    key={city}
                    latitude={data.lat}
                    longitude={data.lon}
                    details={{
                        city: city,
                        type: data.type,
                        description: data.description,
                    }}
                    markerImgSrc={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
                    markerImgWidth={80}
                    markerImgHeight={80}
                    iwComponent={SimpleCard}
                />
            );
        }
        return result;
    };

    const fetchData = async () => {
        setIsLoading(false);
        await setWeather();
        setIsLoading(true);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <IconButton onClick={() => fetchData()} className={classes.refresh}>
                <RefreshRoundedIcon />
            </IconButton>
            <KakaoMap
                level={12}
                longitude={127.857718}
                latitude={36.516045}
                // appKey={process.env.KAKAO_APP_KEY}
                appKey={'f497469deae5f398968a824a120e5dcc'} // TEMPORARY CODE FOR DEPLOYING
                zoomable={false}>
                {isLoading ? (
                    createMarkers()
                ) : (
                    <div className={classes.wrapper}>
                        <CircularProgress
                            className={classes.spinner}
                            size={50}
                        />
                    </div>
                )}
            </KakaoMap>
        </>
    );
}

export default MapViewKakaoMap;
