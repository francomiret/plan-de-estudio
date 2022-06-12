<template>
  <PlanDeEstudios
    title="Ingeniería en Sistemas de Información UTN-FRCU"
    titleIcon="mdi-laptop"
    progresoTitle="Ingeniero/a"
    dbName="materiasIsi"
    :materiasProp="materias"
    :horasElectivasProp="44"
  />
</template>

<script>
import PlanDeEstudios from "@/components/PlanDeEstudios";
import data from "../static/isi-frcu.json";

export default {
  components: { PlanDeEstudios },
  data() {
    return {
      materias: data,
    };
  },
};
</script>
