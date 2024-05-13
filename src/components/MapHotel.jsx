import { Map, Marker } from "pigeon-maps"
import { useState } from "react";


const MapHotel = () => {
    const [hue, setHue] = useState(0)
    const color = `#ec4899`
    return (
        <div>
            <Map height={300} defaultCenter={[23.8159, 90.4089]} defaultZoom={11}>

                <Marker
                    width={50}
                    anchor={[23.8159, 90.4089]}
                    color={color}
                    onClick={() => setHue(hue + 20)}
                />
               
            </Map>
        </div>
    );
};

export default MapHotel;