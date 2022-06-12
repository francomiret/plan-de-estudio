<template>
  <PlanDeEstudios
    title="Ingeniería Civil UTN-FRCU"
    titleIcon="mdi-hard-hat"
    progresoTitle="Ingeniero/a"
    dbName="materiasCivil"
    :materiasProp="materias"
    :horasElectivasProp="44"
  />
</template>

<script>
import PlanDeEstudios from "@/components/PlanDeEstudios";
import data from "../static/civil-frcu.json";

export default {
  name: "IndexPage",
  components: { PlanDeEstudios },
  data() {
    return {
      materias: data,
    };
  },
};
</script>
