import { Map, Marker } from "pigeon-maps"


const MapHotel = () => {
 
    return (
        <div className=''>
            <Map height={300} defaultCenter={[23.8159,90.4089]} defaultZoom={11}>
                <Marker width={50} anchor={[23.8159,90.4089]} />
            </Map>
        </div>
    );
};

export default MapHotel;