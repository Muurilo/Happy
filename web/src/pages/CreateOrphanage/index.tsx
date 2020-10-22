import React from "react";
import { useState } from "react";
import { Marker } from "react-leaflet";

import PrimaryButton from "../../components/PrimaryButton";
import Sidebar from "../../components/Sidebar";

import "./styles.css";
import { FiPlus } from "react-icons/fi";
import Map from "../../components/Map";
import happyMapIcon from "../../components/Map/happMapIcon";
import newOrphanageIcon from "../../components/Map/newOrphanageIcon";
import { getTsBuildInfoEmitOutputFilePath } from "typescript";

export default function OrphanagesMap() {
  const [isOpenWeeksEnds, setOpenWeekends] = useState(false);
  const [files, setFiles] = useState([]);
  const [orphanageLocation, setOrphanageLocation] = useState(Array);

  function handleChange(e: any) {
    console.log(...files);
  }

  function openWeekends() {
    setOpenWeekends(true);
  }

  function closeWeekends() {
    setOpenWeekends(false);
  }

  function selectLocation(latlng: any) {
    setOrphanageLocation([latlng.lat, latlng.lng]);
  }

  return (
    <div id="page-create-orphanage">
      <Sidebar />

      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <div id="map-container">
              <Map
                zoomControl={false}
                onclick={(e) => {
                  selectLocation(e.latlng);
                }}
                style={{
                  width: "100%",
                  height: 280,
                  borderRadius: "20px",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                  cursor: "pointer",
                }}
              >
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[-20.5373624, -47.4023653]}
                />
                {orphanageLocation[0] ? (
                  <Marker
                    interactive={false}
                    icon={newOrphanageIcon}
                    position={[
                      Number(orphanageLocation[0]),
                      Number(orphanageLocation[1]),
                    ]}
                  />
                ) : null}
              </Map>
              <div className="tip">
                Clique no mapa para adicionar a localização
              </div>
            </div>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="number">Número de Whatsapp</label>
              <input id="number" />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>
              {files.length < 1 ? (
                <>
                  <button className="new-image">
                    <FiPlus size={24} color="#15b6d6" />
                  </button>
                </>
              ) : null}
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário das visitas</label>
              <input id="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  onClick={openWeekends}
                  className={isOpenWeeksEnds === true ? "active" : undefined}
                >
                  Sim
                </button>
                <button
                  type="button"
                  onClick={closeWeekends}
                  className={isOpenWeeksEnds === false ? "active" : undefined}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <PrimaryButton type="submit">Confirmar</PrimaryButton>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
