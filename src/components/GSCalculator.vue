<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <!-- C. 輸出期望傷害數字 -->
        <v-card>
          <v-card-text>
            <p><v-chip label>期望單體傷害</v-chip><h2>{{ expectedDamage }}</h2></p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col cols="6">
            <v-text-field label="攻擊力" v-model="calculator.parameters.attack" type="number"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field label="對boss攻擊力" v-model="calculator.parameters.bossAttack" type="number"></v-text-field>
          </v-col>
        </v-row>
        <v-text-field v-show="showAll" label="敏捷力" v-model="calculator.parameters.agility" type="number"></v-text-field>
        <v-text-field v-show="showAll" label="爆擊率" v-model="calculator.parameters.criticalRate" type="number"></v-text-field>
        <v-row>
          <v-col cols="6">
            <v-text-field label="爆擊傷害" v-model="calculator.parameters.criticalDamage" type="number"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field label="對boss爆擊傷害" v-model="calculator.parameters.bossCriticalDamage" type="number"></v-text-field>
          </v-col>
        </v-row>
        <v-text-field color="lime" label="相性倍率" v-model="calculator.parameters.elementBonus" type="number"></v-text-field>
        <v-text-field v-show="showAll" label="防禦無視" v-model="calculator.parameters.defenseCut" type="number"></v-text-field>
        <v-row>
          <v-col cols="6">
            <v-text-field label="與傷增加" v-model="calculator.parameters.extraDamage" type="number"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field label="對boss與傷" v-model="calculator.parameters.bossExtraDamage" type="number"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field label="技能傷害" v-model="calculator.parameters.skillDamage" type="number"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field label="單體技能傷害" v-model="calculator.parameters.singleSkillDamage" type="number"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-show="showAll" label="範圍技能傷害" v-model="calculator.parameters.areaSkillDamage" type="number"></v-text-field>
          </v-col>
        </v-row>
        <v-text-field v-show="showAll" label="普通攻擊傷害" v-model="calculator.parameters.normalAttackDamage" type="number"></v-text-field>
        <v-text-field v-show="showAll" label="大招傷害" v-model="calculator.parameters.limitDamage" type="number"></v-text-field>
        <v-text-field v-show="showAll" label="小怪傷害" v-model="calculator.parameters.mobDamage" type="number"></v-text-field>
        <v-text-field v-show="showAll" label="破壞傷害" v-model="calculator.parameters.breakDamage" type="number"></v-text-field>
        <v-text-field v-show="showAll" label="破壞力" v-model="calculator.parameters.breakPower" type="number"></v-text-field>
        <v-text-field v-show="showAll" label="命中力" v-model="calculator.parameters.hit" type="number"></v-text-field>
        <v-text-field v-show="showAll" label="貫通力" v-model="calculator.parameters.penetration" type="number"></v-text-field>
        <v-text-field v-show="showAll" label="格擋無視" v-model="calculator.parameters.blockCut" type="number"></v-text-field>
        <!-- 其他輸入欄位依此類推 -->
        <!-- ... -->
      </v-col>
      <v-col cols="6">
        <!-- B. 特殊裝備檢查區 -->
        <v-checkbox v-model="calculator.equipments.specialAF1" label="妖怪之王系列AF"></v-checkbox>
        <v-checkbox v-model="calculator.equipments.specialAF2" label="精靈王系列AF"></v-checkbox>
        <v-checkbox v-show="showAll" v-model="calculator.equipments.specialAF3" label="心臟系列AF"></v-checkbox>
        <v-checkbox v-model="calculator.equipments.specialGW1" label="對屬暴傷系列GW(風法/水刀/土槍/光坦)"></v-checkbox>
        <v-checkbox v-model="calculator.equipments.specialGW2" label="對屬與傷系列GW(火主/水法/土坦/暗刺/風槍/光法)"></v-checkbox>
        <!-- 其他 checkbox 輸入欄位依此類推 -->
        <!-- ... -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  data() {
    return {
      showAll: false,
    };
  },
  watch: {
    urldata() {
      this.$emit('update');
    },
  },
  computed: {
    ...mapState(['calculator']),
    ...mapGetters('calculator', ['urldata', 'expectedDamage']),
  },
};
</script>

<style>
h2 {
  display: inline-block;
}
</style>
