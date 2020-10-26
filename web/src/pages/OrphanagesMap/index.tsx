import React, { useEffect, useState } from 'react';
import Api from '../../services/api';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

import mapMarkerImg from '../../assets/images/map-marker.svg';
import Map from '../../components/Map';

import './styles.css';

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

export default function OrphanagesMap() {
  const [mapData, setMapData] = useState(Array);

  useEffect(function () {
    Api.get('/orphanages').then(function (response: any) {
      setMapData(response.data);
    });
  }, []);
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Franca</strong>
          <span>São Paulo</span>
        </footer>
      </aside>
      {
        <>
          <Map>
            {mapData.map((orphanage: any, index: number) => {
              let [latitude, longitude] = orphanage.location.split(',');

              return (
                <Marker
                  icon={happyMapIcon}
                  position={[Number(latitude), Number(longitude)]}
                  key={index}
                >
                  <Popup
                    closeButton={false}
                    minWidth={240}
                    maxWidth={240}
                    className="map-popup"
                  >
                    {orphanage.name}
                    <Link to={`/orphanages/${orphanage.id}`}>
                      <FiArrowRight size={20} color="#fff" />
                    </Link>
                  </Popup>
                </Marker>
              );
            })}
          </Map>
        </>
      }
      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}
