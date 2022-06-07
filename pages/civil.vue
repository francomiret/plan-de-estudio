<template>
  <v-row>
    <v-col
      v-for="(año, i) in años"
      :key="i"
      cols="12"
      sm="8"
      md="4"
      l="3"
      xl="2"
    >
      <v-card>
        <v-card-title>{{ año }}° Año</v-card-title>
        <div
          v-for="(cuatrimestre, i) in cuatrimestres"
          :key="i"
          v-if="materias(año, cuatrimestre).length"
        >
          <v-subheader v-if="cuatrimestre === '0'">Anual</v-subheader>
          <v-subheader v-if="cuatrimestre === '1'"
            >Primer Cuatrimestre</v-subheader
          >
          <v-subheader v-if="cuatrimestre === '2'"
            >Segundo Cuatrimestre</v-subheader
          >

          <div style="margin: 5px">
            <v-expansion-panels>
              <v-expansion-panel
                v-for="(materia, i) in materias(año, cuatrimestre)"
                :key="i"
              >
                <v-expansion-panel-header :color="getColor(materia)">
                  <v-row>
                    <v-col>
                      {{ materia.nombre }}
                      <template>
                        <v-chip x-small v-if="materia.integradora">
                          INTEGRADORA
                        </v-chip>
                      </template>
                      <template>
                        <v-chip x-small v-if="materia.electiva">
                          ELECTIVA
                        </v-chip>
                      </template>
                    </v-col>
                    <v-col cols="4">
                      <strong>{{ materia.horas }} hs.</strong></v-col
                    >
                  </v-row>

                  <template v-if="!materiaHabilitada(materia)" v-slot:actions>
                    <v-icon color="error"> mdi-alert-circle </v-icon>
                  </template>
                </v-expansion-panel-header>

                <v-expansion-panel-content :color="getColor(materia)">
                  <div v-if="!materiaHabilitada(materia)">
                    <p><strong> Necesitas regulares</strong></p>
                    <p
                      v-for="(materia, i) in materiasRegulares(materia)"
                      :key="i"
                    >
                      {{ materia.nombre }}
                      <template>
                        <v-chip x-small :color="getColor(materia)">
                          {{ materia.estado }}
                        </v-chip>
                      </template>
                    </p>
                    <v-divider></v-divider>
                    <p><strong> Necesitas aprobadas</strong></p>
                    <p
                      v-for="(materia, i) in materiasAprobadas(materia)"
                      :key="i"
                    >
                      {{ materia.nombre }}
                      <template>
                        <v-chip x-small :color="getColor(materia)">
                          {{ materia.estado }}
                        </v-chip>
                      </template>
                    </p>
                  </div>
                  <div v-else>
                    <v-btn-toggle>
                      <v-btn
                        @click="cambiarEstadoMateria(materia.id, 'desaprobada')"
                        >D</v-btn
                      >
                      <v-btn
                        @click="cambiarEstadoMateria(materia.id, 'cursando')"
                        color="primary"
                        >C</v-btn
                      >
                      <v-btn
                        @click="cambiarEstadoMateria(materia.id, 'regular')"
                        color="warning"
                        >R</v-btn
                      >
                      <v-btn
                        @click="cambiarEstadoMateria(materia.id, 'aprobada')"
                        color="success"
                        >A</v-btn
                      >
                    </v-btn-toggle>
                    <!-- <v-text-field
                      :disabled="!estaAprobada(materia)"
                      v-model="materia.nota"
                      type="number"
                      label="Nota"
                      outlined
                    ></v-text-field> -->
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import data from "../static/data.json";
export default {
  name: "IndexPage",
  data() {
    return {
      data: data,
      años: new Set(data.map((x) => x.ano)),
      cuatrimestres: new Set(data.map((x) => x.cuatrimestre)),
    };
  },
  methods: {
    getColor(currentMateria) {
      const estado = this.data.find(
        (materia) => materia.id === currentMateria.id
      ).estado;
      if (estado === "aprobada") {
        return "success";
      } else if (estado === "regular") {
        return "warning";
      } else if (estado === "cursando") {
        return "primary";
      }
    },

    materiasRegulares(materia) {
      const materiasRegulares = [];
      materia.paraCursar.necesitaRegular.forEach((element) => {
        materiasRegulares.push(this.data.find((x) => x.id === element));
      });
      return materiasRegulares;
    },

    materiasAprobadas(materia) {
      const materiasAprobadas = [];
      materia.paraCursar.necesitaRegular.forEach((element) => {
        materiasAprobadas.push(this.data.find((x) => x.id === element));
      });
      return materiasAprobadas;
    },
    estaAprobada(materia) {
      if (materia.estado !== "aprobada") {
        return false;
      } else {
        return true;
      }
    },
    materiaHabilitada(materia) {
      const materiasRegularesEstado = this.materiasRegulares(materia).map(
        (x) => x.estado
      );
      const materiasAprobadasEstado = this.materiasAprobadas(materia).map(
        (x) => x.estado
      );
      if (
        materiasAprobadasEstado.every((x) => x === "aprobada") &&
        !materiasRegularesEstado.some(
          (x) => x === "desprobada" || x === "cursando"
        )
      ) {
        return true;
      } else {
        return false;
      }
    },

    actualizarEstados() {
      let materias = [];
      this.data.forEach((x) => {
        if (!this.materiaHabilitada(x)) {
          materias.push({ ...x, estado: "desaprobada" });
        } else {
          materias.push(x);
        }
      });
      this.data = materias;
    },

    cambiarEstadoMateria(id, estado) {
      this.data.find((materia) => materia.id === id).estado = estado;
      this.actualizarEstados();
      localStorage.setItem("materiasCivil", JSON.stringify(this.data));
    },

    materias(año, cuatrimestre) {
      return data.filter(
        (materia) =>
          materia.ano === año && materia.cuatrimestre === cuatrimestre
      );
    },
  },
  mounted() {
    if (localStorage.getItem("materiasCivil")) {
      this.data = JSON.parse(localStorage.getItem("materiasCivil"));
    } else {
      localStorage.setItem("materiasCivil", JSON.stringify(this.data));
    }
  },
};
</script>
