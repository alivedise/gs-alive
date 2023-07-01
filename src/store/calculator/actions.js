import lzbase62 from "lzbase62";
import ATTRIBUTES from "@/constants/attributes";

const actions = {
  updateActiveEcho({
    commit,
    dispatch,
    rootGetters,
  }, data) {
    if (data && data.echo) {
      if (data.echo.series.indexOf('天司') >= 0) {
        commit('clearExistingGodPrisonEcho', rootGetters['echo/echoMapById']);
      }
    }
    commit('updateActiveEcho', data);
    dispatch('setAttributeIfNecessary', ATTRIBUTES.getIndex(rootGetters['echo/echoMapById'][data.echo.id].attribute));
  },
  updateActiveMach({
    commit,
    dispatch,
    rootGetters,
  }, data) {
    commit('updateActiveMach', data);
    dispatch('setAttributeIfNecessary', ATTRIBUTES.getIndex(rootGetters['mach/machMapById'][data.mach.id].attribute));
  },
  setAttributeIfNecessary({
    commit,
    state,
  }, data) {
    if (state.attribute === -1 || state.attribute === '') {
      commit('updateAttribute', data);
    }
  },
  loadData({
    commit,
  }, data) {
    data = JSON.parse(lzbase62.decompress(data));
    const [ version, parameters, equipments] = data;
    commit('updateParameters', parameters);
    commit('updateEquipments', equipments);
  },
};

export default actions;
