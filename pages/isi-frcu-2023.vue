<template>
  <PlanDeEstudios
    title="Ingeniería en Sistemas de Información"
    subtitle="UTN-FRCU"
    titleIcon="mdi-laptop"
    progresoTitle="Ingeniero/a"
    dbName="materiasIsi2023"
    :materiasProp="materias"
    :horasElectivasProp="44"
  />
</template>

<script>
import PlanDeEstudios from "@/components/PlanDeEstudios";
import isi from "../static/isi-frcu-2023.json";

export default {
  components: { PlanDeEstudios },
  data() {
    return {
      materias: isi,
    };
  },
};
</script>
