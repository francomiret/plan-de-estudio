<template>
  <PlanDeEstudios
    title="Ingeniería Civil (2023)"
    subtitle="UTN-FRCU"
    titleIcon="mdi-hard-hat"
    progresoTitle="Ingeniero/a"
    dbName="materiasCivil2023"
    :materiasProp="materias"
    :horasElectivasProp="28"
  />
</template>

<script>
import PlanDeEstudios from "@/components/PlanDeEstudios";
import data from "../static/civil-frcu-new.json";

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
