import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

//const haeHenkilot = () => {
//  console.log("effect");
//  let data = axios.get("http://localhost:3001/persons").then((response) => {
//    console.log("promise fulfilled");
//    return response.data;
//  });
//  return data;
//};


const haeHenkilot = newObject => {
    const request = axios.get(baseUrl, newObject)
    return request.then(response => response.data)
  }

//const asetaHenkilo = ({ person }) => {
//  let data = axios
//    .post("http://localhost:3001/persons", person)
//    .then((response) => {
//      return response.data;
//    });
//  return data;
//};

const asetaHenkilo = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
  }

  const poistaHenkilo = (id) => {
    const delRequest = axios.delete(`${baseUrl}/${id}`)
    return delRequest.then(response => response.data)
  }
  

export default {
  haeHenkilot: haeHenkilot,
  asetaHenkilo: asetaHenkilo,
  poistaHenkilo: poistaHenkilo,
};
