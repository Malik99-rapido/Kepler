import React from 'react';
import KeplerGl from 'kepler.gl';

const Kepler = () => {
    return (
        <KeplerGl
                id="map"
                width={window.innerWidth}
                mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_TOKEN}
                height={window.innerHeight}
            />
    )
}

export default Kepler;