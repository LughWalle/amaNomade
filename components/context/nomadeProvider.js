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
  const [info, setInfo] = useState([])

  // funçoes de chamada de api
  const getInfo = async () => {
    const response = await amadeus.safety.safetyRatedLocations.bySquare.get({
      north: 41.397158,
      west: 2.160873,
      south: 41.394582,
      east: 2.177181
    })
    const data = JSON.parse(response.body).data[0]
    console.log(data);
    setInfo(data)
  }
  
  //console.log(response.body)
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