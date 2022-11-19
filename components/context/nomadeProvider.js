import Nomade from "./nomadeContext";

const NomadeProvider = ({ children }) => {
  
  // funçoes de chamada de api

  const data = {}
  return (
    <Nomade.Provider value={data}>{children}</Nomade.Provider>
  );
}

NomadeProvider.protoTypes = {
  children: protoTypes.node.isRequired,
};

export default NomadeProvider;