import PropTypes from "prop-types";
import NomadeContext from "./nomadeContext.js";
import Amadeus from "amadeus"
import { NEXT_PUBLIC_CLIENT_ID, NEXT_PUBLIC_CLIENT_SECRET } from "../../pages/config";
import { useEffect, useState } from "react";

const NomadeProvider = ({ children }) => {
  const amadeus = new Amadeus({
    clientId: NEXT_PUBLIC_CLIENT_ID,
    clientSecret: NEXT_PUBLIC_CLIENT_SECRET
  });

  // funçoes de chamada de api
  const mock = {
    type: "safety-rated-location",
    id: "Q930402753",
    self: {
      type: "https://test.api.amadeus.com/v1/safety/safety-rated-locations/Q930402753",
      methods: [
        "GET"
      ]
    },
    subType: "DISTRICT",
    name: "La Dreta de l'Eixample (Barcelona)",
    geoCode: {
      "latitude": 41.3963097,
      "longitude": 2.1653831
    },
    safetyScores: {
      lgbtq: 37,
      medical: 69,
      overall: 44,
      physicalHarm: 34,
      politicalFreedom: 50,
      theft: 42,
      women: 33
    }
  }
  const [info, setInfo] = useState(mock)

  const getInfo = async () => {
    let response = undefined
    response = await amadeus.safety.safetyRatedLocations.get({
      latitude: 41.397158,
      longitude: 2.160873
    })
    console.log(response);

    const data = response ? JSON.parse(response.body).data[0] : mock

    setInfo(data)
  }

  useEffect(() => {
    getInfo()

  }, [])

  const data = {
    info,
  }
  return (
    <NomadeContext.Provider value={data}>{children}</NomadeContext.Provider>
  );
}

NomadeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NomadeProvider;