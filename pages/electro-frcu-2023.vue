<template>
  <PlanDeEstudios
    title="Ingeniería Electromecánica (2023)"
    subtitle="UTN-FRCU"
    titleIcon="mdi-cog"
    progresoTitle="Ingeniero/a"
    dbName="materiasElectro2023"
    :materiasProp="materias"
    :horasElectivasProp="28"
  />
</template>

<script>
import PlanDeEstudios from "@/components/PlanDeEstudios";
import electro from "../static/electro-frcu-2023.json";

export default {
  components: { PlanDeEstudios },
  data() {
    return {
      materias: electro,
    };
  },
};
</script>
