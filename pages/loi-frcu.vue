<template>
  <PlanDeEstudios
    title="Licenciatura en Organización Industrial"
    subtitle="UTN-FRCU"
    titleIcon="mdi-account-group"
    progresoTitle="Licenciado/a"
    dbName="materiasLoi"
    :materiasProp="materias"
    :horasElectivasProp="21"
  />
</template>

<script>
import PlanDeEstudios from "@/components/PlanDeEstudios";
import loi from "../static/loi-frcu.json";

export default {
  components: { PlanDeEstudios },
  data() {
    return {
      materias: loi,
    };
  },
};
</script>
