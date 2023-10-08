import React, { Component } from "react";
import { Map, Marker} from "@googlemaps/react-wrapper";

import { GoogleApiWrapper } from "@googlemaps/react-wrapper"

class MapContainer extends Component {
  constructor(props) {
    super(props);

    // État pour stocker les coordonnées sélectionnées sur la carte
    this.state = {
      selectedLocation: null,
    };
  }

  // Fonction pour mettre à jour les coordonnées lorsque l'utilisateur clique sur la carte
  handleMapClick = (mapProps, map, clickEvent) => {
    const lat = clickEvent.latLng.lat();
    const lng = clickEvent.latLng.lng();
    this.setState({ selectedLocation: { lat, lng } });

    // Appeler une fonction de rappel pour envoyer les coordonnées à la page parent
    if (this.props.onLocationSelect) {
      this.props.onLocationSelect({ lat, lng });
    }
  };

  render() {
    const { google } = this.props;
    const { selectedLocation } = this.state;

    return (
      <Map
        google={google}
        zoom={14}
        initialCenter={{ lat: 48.8566, lng: 2.3522 }} // Coordonnées initiales (par exemple, Paris)
        onClick={this.handleMapClick} // Gérer les clics sur la carte
      >
        {/* Marqueur pour l'emplacement sélectionné */}
        {selectedLocation && (
          <Marker
            position={selectedLocation}
            title="Emplacement sélectionné"
          />
        )}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "VOTRE_CLE_API", // Remplacez par votre propre clé API Google Maps
})(MapContainer);
