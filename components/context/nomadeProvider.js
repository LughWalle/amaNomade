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
  const [info, setInfo] = useState([
    {
      name: "Acre",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Alagoas",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Amapá",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Amazonas",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Bahia",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Ceará",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Espírito Santo",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Goiás",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Maranhão",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Mato Grosso",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Minas Gerais",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Pará",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Paraíba",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Paraná",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Pernambuco",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Piauí",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Rio de Janeiro",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Rio Grande do Norte",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Rio Grande do Sul ",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Rondônia",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Roraima",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Santa Catarina ",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "São Paulo",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Sergipe",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Tocantins",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    },
    {
      name: "Distrito Federal ",
      safetyScores: {
        lgbtq: Math.floor(Math.random() * 100) + 1,
        medical: Math.floor(Math.random() * 100) + 1,
        overall: Math.floor(Math.random() * 100) + 1,
        physicalHarm: Math.floor(Math.random() * 100) + 1,
        politicalFreedom: Math.floor(Math.random() * 100) + 1,
        theft: Math.floor(Math.random() * 100) + 1,
        women: Math.floor(Math.random() * 100) + 1,
      }
    }
  ]
  )

  // funçoes de chamada de api
  const getInfo = async () => {
    // TODO::ADD ALL CITY AND NEIGHBORHOOD
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
    // getInfo()
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