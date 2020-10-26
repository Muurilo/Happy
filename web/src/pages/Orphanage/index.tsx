import React, { useEffect, useState } from 'react';
import Api from '../../services/api';
import { useParams } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Marker } from 'react-leaflet';
import L from 'leaflet';

import mapMarkerImg from '../../assets/images/map-marker.svg';

import PrimaryButton from '../../components/PrimaryButton';
import Sidebar from '../../components/Sidebar';
import Map from '../../components/Map';

import './styles.css';

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

export default function Orphanage() {
  const [orphanageData, setOrphanageData] = useState<any>(Object);
  const [dataLoaded, setDataLoaded] = useState(false);
  let { id } = useParams<any>();

  useEffect(() => {
    Api.get(`/orphanages/${id}`).then((response: any) => {
      setOrphanageData(response.data[0]);
      setDataLoaded(true);
    });
  }, []);

  return (
    <div id="page-orphanage">
      <Sidebar />

      <main>
        {dataLoaded === true ? (
          <div className="orphanage-details">
            <img
              src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
              alt="Lar das meninas"
            />

            <div className="images">
              <button className="active" type="button">
                <img
                  src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                  alt="Lar das meninas"
                />
              </button>
              <button type="button">
                <img
                  src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                  alt="Lar das meninas"
                />
              </button>
              <button type="button">
                <img
                  src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                  alt="Lar das meninas"
                />
              </button>
              <button type="button">
                <img
                  src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                  alt="Lar das meninas"
                />
              </button>
              <button type="button">
                <img
                  src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                  alt="Lar das meninas"
                />
              </button>
              <button type="button">
                <img
                  src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                  alt="Lar das meninas"
                />
              </button>
            </div>

            <div className="orphanage-details-content">
              <h1>{orphanageData.name}</h1>
              <p>{orphanageData.about}</p>

              <div className="map-container">
                <Map
                  interactive={false}
                  center={[
                    Number(orphanageData.location.split(',')[0]),
                    Number(orphanageData.location.split(',')[1]),
                  ]}
                  zoom={16}
                  style={{ width: '100%', height: 280 }}
                >
                  <Marker
                    interactive={false}
                    icon={happyMapIcon}
                    position={[
                      Number(orphanageData.location.split(',')[0]),
                      Number(orphanageData.location.split(',')[1]),
                    ]}
                  />
                </Map>

                <footer>
                  <a
                    href={`https://www.google.com/maps/@${Number(
                      orphanageData.location.split(',')[0]
                    )},${orphanageData.location.split(',')[1]},20z`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Ver rotas no Google Maps
                  </a>
                </footer>
              </div>

              <hr />

              <h2>Instruções para visita</h2>
              <p>{orphanageData.instructions}</p>

              <div className="open-details">
                <div className="hour">
                  <FiClock size={32} color="#15B6D6" />
                  Segunda à Sexta <br />
                  {orphanageData.visit_hour}
                </div>
                <div
                  className={
                    orphanageData.open_weekend === true
                      ? 'open-on-weekends'
                      : 'not-open-on-weekends'
                  }
                >
                  <FiInfo
                    size={32}
                    color={
                      orphanageData.open_weekend === true
                        ? '#39CC83'
                        : '#FF669D'
                    }
                  />
                  {orphanageData.open_weekend === true ? (
                    <>
                      Atendemos <br />
                      fim de semana
                    </>
                  ) : (
                    <>
                      Não atendemos <br />
                      fim de semana
                    </>
                  )}
                </div>
              </div>

              <PrimaryButton type="button">
                <FaWhatsapp size={20} color="#FFF" />
                Entrar em contato
              </PrimaryButton>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}
