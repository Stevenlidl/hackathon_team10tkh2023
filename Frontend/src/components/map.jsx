import {
    GoogleMap, useJsApiLoader, MarkerClusterer
} from '@react-google-maps/api';
import locations from '../mapData';
import MapMarker from './locationMarker';
import { apiKey } from '../constants';

export default function Map() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: apiKey
    });

    console.log(apiKey)
    return (
        <div>
            {isLoaded &&
                <GoogleMap
                    zoom={10.58}
                    center={{ lat: 40.755, lng: -73.94 }}
                    mapContainerStyle={{ height: "500px", width: "500px" }}
                    clickableIcons={false}
                    options={{
                        fullscreenControl: false,
                        mapTypeControl: false,
                        streetViewControl: false,
                        zoomControlOptions: { position: google.maps.ControlPosition.TOP_RIGHT }
                    }}
                >
                    {
                        locations.map((borough, index) => {
                            return (
                                <MarkerClusterer key={index}>
                                    {
                                        (clusterer) => {
                                            return (
                                                borough.map((location, index) => {
                                                    return (
                                                        <MapMarker {...location} clusterer={clusterer} key={index + 20} />
                                                    )
                                                })
                                            )
                                        }
                                    }
                                </MarkerClusterer>
                            )
                        })
                    }
                </GoogleMap>
            }
        </div>
    )
};
