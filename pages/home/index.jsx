import React, { useContext } from 'react'
import NomadeContext from '../../components/context/nomadeContext'

const Home = () => {
  const { info } = useContext(NomadeContext);
  
  return (
    <div>
      <ul>
        <li>Latetude: {info.geoCode.latitude}</li>
        <li>Longetude: {info.geoCode.longitude}</li>
        <li>Local: {info.name}</li>
        <li>{`nivel de segurança para lgbt: ${info.safetyScores.lgbtq}`}</li>
        <li>{`nivel de segurança mulheres: ${info.safetyScores.women}`}</li>
      </ul>
    </div>
  )
}

export default Home