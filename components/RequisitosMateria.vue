<template>
  <v-container v-if="necesitaRegular.length || necesitaAprobada.length">
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>{{ titulo }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div v-if="necesitaRegular.length">
            <v-card-subtitle style="color: orangered"
              >Regulares</v-card-subtitle
            >
            <v-card-text>
              <p v-for="(materia, i) in necesitaRegular" :key="i">
                <small>
                  {{ materia.nombre }}
                  <v-chip x-small :color="getColor(materia.estado)">
                    {{ materia.estado }}
                  </v-chip>
                  <v-icon
                    small
                    v-if="!materiaCumpleRequisitos(materia)"
                    color="error"
                  >
                    mdi-alert-circle
                  </v-icon>
                </small>
              </p>
            </v-card-text>
          </div>

          <div v-if="necesitaAprobada.length">
            <v-card-subtitle style="color: green">Aprobadas</v-card-subtitle>
            <v-card-text>
              <p v-for="(materia, i) in necesitaAprobada" :key="i">
                <small>
                  {{ materia.nombre }}
                  <v-chip x-small :color="getColor(materia.estado)">
                    {{ materia.estado }}
                  </v-chip>
                  <v-icon
                    small
                    v-if="!materiaCumpleRequisitos(materia)"
                    color="error"
                  >
                    mdi-alert-circle
                  </v-icon>
                </small>
              </p>
            </v-card-text>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  name: "RequisitosMateria",
  props: {
    titulo: {
      type: String,
      required: true,
    },
    necesitaRegular: {
      type: Array,
      default: () => [],
    },
    necesitaAprobada: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getColor(estado) {
      if (estado === "APROBADA") {
        return "success";
      } else if (estado === "REGULAR") {
        return "warning";
      } else if (estado === "CURSANDO") {
        return "primary";
      }
    },
    materiaCumpleRequisitos(materia) {
      if (materia.estado === "APROBADA") return true;
      if (materia.estado === "REGULAR") return true;
      return false;
    },
  },
};
</script>
