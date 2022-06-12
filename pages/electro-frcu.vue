<template>
  <PlanDeEstudios
    title="Ingeniería Electromecánica"
    subtitle="UTN-FRCU"
    titleIcon="mdi-cog"
    progresoTitle="Ingeniero/a"
    dbName="materiasElectro"
    :materiasProp="materias"
    :horasElectivasProp="44"
  />
</template>

<script>
import PlanDeEstudios from "@/components/PlanDeEstudios";
import electro from "../static/electro-frcu.json";

export default {
  components: { PlanDeEstudios },
  data() {
    return {
      materias: electro,
    };
  },
};
</script>
