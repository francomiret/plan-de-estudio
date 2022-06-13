<template>
  <PlanDeEstudios
    title="Analista Universitario de Sistemas"
    subtitle="UTN-FRCU"
    titleIcon="mdi-laptop"
    progresoTitle="Analista"
    dbName="materiasAnalista"
    :materiasProp="materias"
    :horasElectivasProp="0"
  />
</template>

<script>
import PlanDeEstudios from "@/components/PlanDeEstudios";
import analista from "../static/analista-frcu.json";

export default {
  name: "IndexPage",
  components: { PlanDeEstudios },
  data() {
    return {
      materias: analista,
    };
  },
};
</script>
