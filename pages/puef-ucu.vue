<template>
  <PlanDeEstudios
    title="Profesorado Universitario en Educación Física"
    subtitle="U.C.U"
    titleIcon="mdi-dumbbell"
    progresoTitle="Profesor/a"
    dbName="materiasPuefUCU"
    :materiasProp="materias"
  />
</template>

<script>
import PlanDeEstudios from "@/components/PlanDeEstudios";
import data from "../static/puef-ucu.json";

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
