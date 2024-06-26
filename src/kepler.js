import React from 'react';
import KeplerGl from 'kepler.gl';

const Kepler = () => {
    return (
        <KeplerGl
                id="map"
                width={window.innerWidth}
                mapboxApiAccessToken={"you rtoken here "}
                height={window.innerHeight}
            />
    )
}

export default Kepler;