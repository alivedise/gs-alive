import lzbase62 from 'lzbase62';

const theGetters = {
  expectedDamage(state) {
    return Math.round(
      (Number(state.parameters.attack) + Number(state.parameters.bossAttack)) *
      (
        100 + Number(state.parameters.extraDamage) + Number(state.parameters.bossExtraDamage) +
          (state.equipments.specialAF1 ? 40 : 0) +
          (state.equipments.specialAF2 ? 20 : 0) +
          (state.equipments.specialGW2 ? 25 : 0)
      ) / 100 *
      (100 + Number(state.parameters.elementBonus)) / 100 *
      (
        100 + Number(state.parameters.criticalDamage) +
          Number(state.parameters.bossCriticalDamage) +
          (state.equipments.specialGW1 ? 25 : 0)
      ) / 100 *
      (100 + Number(state.parameters.skillDamage) + Number(state.parameters.singleSkillDamage)) / 100
    );
  },
  urldata(state) {
    const parameters = Object.values(state.parameters);
    delete state.equipments[undefined];
    const equipments = Object.values(state.equipments);
    const data = [
      state.version, // data versioning
      parameters, // echo data
      equipments, // machine data
      [], // special af data
      [], // special gw data
    ];
    console.log(data);
    return lzbase62.compress(JSON.stringify(data));
  },
};
export default theGetters;
