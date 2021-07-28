import axios from "axios";
import { getBackendURL } from "../connectors/connections";

export const SET_LISTA_GESTORES = "SET_LISTA_GESTORES";
export function set_lista_personajes(listaGestores) {
  return {
    type: SET_LISTA_GESTORES,
    listaGestores: listaGestores,
  };
}

export function fetchDataGestores() {
  return function (dispatch) {
    return axios.get(getBackendURL() + "/api/gestores").then((result) => {
      dispatch(set_lista_personajes(result.data))
    });
  };
}
