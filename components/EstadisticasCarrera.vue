<template>
  <v-footer dark padless>
    <v-container flat tile class="text-center">
      <v-card-text class="white--text pt-0">
        <v-row>
          <v-col cols="12" sm="12" md="12">
            <v-card class="mx-auto pa-4" outlined>
              <v-card-title class="justify-center">Materias</v-card-title>
              <v-card-text class="text-center">
                <v-row>
                  <v-col cols="12" sm="4" md="4">
                    <v-card outlined>
                      <v-card-title class="justify-center"
                        >Aprobadas</v-card-title
                      >
                      <v-card-text class="text-center">
                        <p class="display-2 mb-2">
                          {{ cantMateriasAprobadas }}/{{ totalMaterias }}
                        </p>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" sm="4" md="4">
                    <v-card outlined>
                      <v-card-title class="justify-center"
                        >Regulares</v-card-title
                      >
                      <v-card-text class="text-center">
                        <p class="display-2 mb-2">
                          {{ cantMateriasRegulares }}/{{ totalMaterias }}
                        </p>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" sm="4" md="4">
                    <v-card outlined>
                      <v-card-title class="justify-center"
                        >Cursando</v-card-title
                      >
                      <v-card-text class="text-center">
                        <p class="display-2 mb-2">
                          {{ cantMateriasCursando }}/{{ totalMaterias }}
                        </p>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="4">
            <v-card class="mx-auto pa-4" outlined>
              <v-card-title class="justify-center"
                >Horas electivas</v-card-title
              >
              <v-card-text class="text-center">
                <p class="display-2 mb-2">
                  {{ horasElectivas }}/{{ horasElectivasRequeridas }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="4">
            <v-card class="mx-auto pa-4" outlined>
              <v-card-title class="justify-center"
                >Horas semanales cursando</v-card-title
              >
              <v-card-text class="text-center">
                <p class="display-2 mb-2">
                  {{ horasSemanales }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="4">
            <v-card class="mx-auto pa-4" outlined>
              <v-card-title class="justify-center">Promedio</v-card-title>
              <v-card-text class="text-center">
                <p class="display-2">{{ promedio }}</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="12">
            <v-card class="mx-auto pa-4" outlined>
              <v-card-title class="justify-center">{{
                progresoTitulo
              }}</v-card-title>
              <v-card-text class="text-center">
                <p class="display-2 mb-2">{{ progreso }}%</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "EstadisticasCarrera",
  props: {
    cantMateriasAprobadas: {
      type: Number,
      required: true,
    },
    cantMateriasRegulares: {
      type: Number,
      required: true,
    },
    cantMateriasCursando: {
      type: Number,
      required: true,
    },
    totalMaterias: {
      type: Number,
      required: true,
    },
    horasElectivas: {
      type: Number,
      required: true,
    },
    horasElectivasRequeridas: {
      type: Number,
      required: true,
    },
    horasSemanales: {
      type: Number,
      required: true,
    },
    promedio: {
      type: String,
      required: true,
    },
    progreso: {
      type: [String, Number],
      required: true,
    },
    progresoTitulo: {
      type: String,
      required: true,
    },
  },
};
</script>
