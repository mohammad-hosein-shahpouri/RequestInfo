import L from "leaflet";
import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
} from "react";
import { NetworkInfoContext } from "../utils/models/Context";
import "leaflet/dist/leaflet.css";
import { TimeInfo } from "./TimeInfo";
import { ClientInfo } from "./ClientInfo";
import MarkerIcon from "leaflet/dist/images/marker-icon.png";
import { History } from "./History";

export function NetworkInfo() {
  const mapRef = useRef<HTMLDivElement>(null);

  const { Info } = useContext(NetworkInfoContext);
  const flagUrl =
  import.meta.env.VITE_FLAG_IMAGE_URL +
    Info.country_code2 +
    import.meta.env.VITE_FLAG_IMAGE_TYPE;

  useEffect(() => {
    var icon = L.icon({
      iconUrl: MarkerIcon,
    });

    var map = L.map(mapRef.current!).setView(
      {
        lat: Number(Info.latitude),
        lng: Number(Info.longitude),
      },
      13
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map
    );

    L.marker(
      {
        lat: Number(Info.latitude),
        lng: Number(Info.longitude),
      },
      { icon }
    )
      .addTo(map)
      .bindPopup("Your Location")
      .openPopup();
  });

  return (
    <Fragment>
      <div className="w-11/12 lg:w-5/12">
        <h1 className="text-center mb-0 mt-2">You're connected to:</h1>
        <h1 className="text-center">{Info.ip}</h1>
      </div>
      <div className="w-11/12 lg:w-5/12 flex flex-col">
        <h2 className="text-center">From {Info.country_name}</h2>
        <img
          src={flagUrl}
          id="flag"
          alt={Info.country_name}
          className="rounded-lg"
        />
      </div>
      <div className="w-11/12 lg:w-5/12">
        <h3 className="text-center mt-2">On Map:</h3>
        <div className="rounded-lg" ref={mapRef} id="map"></div>
      </div>

      <div className="w-full lg:w-5/12">
        <h3 className="text-center mt-2">Extra Information:</h3>
        <div className="flex flex-row justify-between">
          <h4>Continent:</h4>
          <h4>{Info.continent_name}</h4>
        </div>
        <div className="flex flex-row justify-between">
          <h4>State:</h4>
          <h4>{Info.state_prov}</h4>
        </div>
        <div className="flex flex-row justify-between">
          <h4>City:</h4>
          <h4>{Info.city}</h4>
        </div>
        <div className="flex flex-row justify-between">
          <h4>District:</h4>
          <h4>{Info.district}</h4>
        </div>
        <div className="flex flex-row justify-between">
          <h4>ISP:</h4>
          <h4>{Info.isp}</h4>
        </div>
        <div className="flex flex-row justify-between">
          <h4>Internet TLD:</h4>
          <h4>{Info.country_tld}</h4>
        </div>
        <div className="flex flex-row justify-between">
          <h4>Calling Code:</h4>
          <h4>{Info.calling_code}</h4>
        </div>
        <hr />
        <TimeInfo />
        <hr />
        <ClientInfo />
        <hr />
        <History />
      </div>
    </Fragment>
  );
}
