<template>
  <div>
    <v-card-text>
      <v-row style="display: flex">
        <v-col style="flex: 1">
          <p class="headline">
            <v-icon>{{ titleIcon }}</v-icon>
            {{ title }}
          </p>
          <p class="subtitle-1">
            {{ subtitle }}
          </p>
        </v-col>
        <v-col cols="12" sm="4" md="4" lg="4" class="text-right">
          <v-btn color="error" outlined @click="resetearProgreso">
            <v-icon left>mdi-refresh</v-icon>
            Resetear Progreso
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
    <v-row>
      <v-col v-for="(año, i) in años" :key="i" cols="12" sm="6" md="4" xl="3">
        <v-card>
          <v-card-title>
            {{ año }}° Año
            <v-btn
              style="margin-left: 10px"
              small
              :color="getButtonColor(año)"
              icon
              @click="aprobarAño(año)"
              ><v-icon>mdi-check</v-icon></v-btn
            >
          </v-card-title>

          <v-card-text>
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
                <v-expansion-panels focusable>
                  <v-expansion-panel
                    v-for="(materia, i) in materias(año, cuatrimestre)"
                    :key="i"
                  >
                    <v-expansion-panel-header :color="getColor(materia.estado)">
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
                          <template>
                            <v-chip x-small v-if="materia.optativa">
                              OPTATIVA
                            </v-chip>
                          </template>
                        </v-col>
                        <v-col cols="4">
                          <strong>{{ materia.horas }} hs</strong></v-col
                        >
                      </v-row>

                      <template
                        v-if="
                          !materiasAprobadasHabilitadas(materia) ||
                          !materiasRegularesHabilitadas(materia)
                        "
                        v-slot:actions
                      >
                        <v-icon color="error"> mdi-alert-circle </v-icon>
                      </template>
                    </v-expansion-panel-header>

                    <v-expansion-panel-content>
                      <RequisitosMateria
                        titulo="Para cursar necesito"
                        :necesitaRegular="materiasRegularesParaCursar(materia)"
                        :necesitaAprobada="materiasAprobadasParaCursar(materia)"
                      />
                      <RequisitosMateria
                        v-if="materia.paraRendir"
                        titulo="Para rendir necesito"
                        :necesitaRegular="materiasRegularesParaRendir(materia)"
                        :necesitaAprobada="materiasAprobadasParaRendir(materia)"
                      />
                      <v-container>
                        <v-select
                          dense
                          :items="[
                            'DESAPROBADA',
                            'CURSANDO',
                            'REGULAR',
                            'APROBADA',
                          ]"
                          v-model="materia.estado"
                          label="Condición"
                          filled
                          rounded
                          @change="
                            cambiarEstadoMateria(
                              materia.id,
                              materia.estado,
                              null
                            )
                          "
                        ></v-select>

                        <div v-if="materia.estado === 'APROBADA'">
                          <v-select
                            dense
                            type="number"
                            :items="[4, 5, 6, 7, 8, 9, 10]"
                            v-model="materia.nota"
                            label="Nota"
                            filled
                            rounded
                            @change="
                              cambiarEstadoMateria(
                                materia.id,
                                'APROBADA',
                                materia.nota
                              )
                            "
                            clearable
                          ></v-select>
                        </div>
                      </v-container>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <EstadisticasCarrera
      :cantMateriasAprobadas="cantMateriasAprobadas"
      :cantMateriasRegulares="cantMateriasRegulares"
      :cantMateriasCursando="cantMateriasCursando"
      :totalMaterias="data.length"
      :horasElectivas="totalHorasElectivas"
      :horasElectivasRequeridas="horasElectivasProp"
      :horasSemanales="totalHorasSemanales"
      :promedio="String(promedioTotal)"
      :progreso="String(progresoTotal)"
      :progresoTitulo="progresoTitle"
    />
  </div>
</template>
<script>
import RequisitosMateria from "./RequisitosMateria.vue";
import EstadisticasCarrera from "./EstadisticasCarrera.vue";

export default {
  components: {
    RequisitosMateria,
    EstadisticasCarrera,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    titleIcon: {
      type: String,
      default: "",
    },
    progresoTitle: {
      type: String,
      required: true,
    },
    dbName: {
      type: String,
      required: true,
    },
    materiasProp: {
      type: Array,
      required: true,
    },
    horasElectivasProp: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      data: this.materiasProp,
      cantMateriasAprobadas: 0,
      cantMateriasRegulares: 0,
      cantMateriasCursando: 0,
      totalHorasElectivas: 0,
      progresoTotal: 0,
      totalHorasSemanales: 0,
      promedioTotal: 0,
      años: new Set(this.materiasProp.map((x) => x.ano)),
      cuatrimestres: new Set(this.materiasProp.map((x) => x.cuatrimestre)),
    };
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

    progreso(materias) {
      let horasObligatorias = 0;
      let horasPS = 0;
      if (materias.find((x) => x.id === "99")) {
        horasPS = materias.find((x) => x.id === "99").horas / 32;
      }
      materias
        .filter((x) => x.electiva !== true && x.id !== "99")
        .map((x) => parseInt(x.horas))
        .forEach((x) => (horasObligatorias += x));
      let horasObligatoriasAprobadas = 0;
      materias
        .filter(
          (x) => x.electiva !== true && x.estado === "APROBADA" && x.id !== "99"
        )
        .map((x) => parseInt(x.horas))
        .forEach((x) => (horasObligatoriasAprobadas += x));
      const horasElectivasAprobadas =
        this.totalHorasElectivas > this.horasElectivasProp
          ? this.horasElectivasProp
          : this.totalHorasElectivas;
      const horasTotalesMinimas =
        horasObligatorias + horasPS + this.horasElectivasProp;
      if (
        materias.find((x) => x.id === "99") &&
        materias.find((x) => x.id === "99").estado === "APROBADA"
      ) {
        horasObligatoriasAprobadas += horasPS;
      }
      this.progresoTotal = (
        ((horasObligatoriasAprobadas + horasElectivasAprobadas) /
          horasTotalesMinimas) *
        100
      ).toFixed(2);
    },

    cantidadMateriasAprobadas(materias) {
      this.cantMateriasAprobadas = materias.filter(
        (x) => x.estado === "APROBADA"
      ).length;
    },

    cantidadMateriasRegulares(materias) {
      this.cantMateriasRegulares = materias.filter(
        (x) => x.estado === "REGULAR"
      ).length;
    },

    cantidadMateriasCursando(materias) {
      this.cantMateriasCursando = materias.filter(
        (x) => x.estado === "CURSANDO"
      ).length;
    },

    horasElectivas(materias) {
      this.totalHorasElectivas = 0;
      const materiasElectivas = materias.filter(
        (x) => x.estado === "APROBADA" && x.electiva === true
      );
      materiasElectivas.forEach((x) => {
        this.totalHorasElectivas = parseInt(x.horas) + this.totalHorasElectivas;
      });
    },

    horasSemanales(materias) {
      this.totalHorasSemanales = 0;
      const materiasCursando = materias.filter((x) => x.estado === "CURSANDO");
      materiasCursando.forEach((x) => {
        this.totalHorasSemanales = parseInt(x.horas) + this.totalHorasSemanales;
      });
    },

    materiasRegularesParaCursar(materia) {
      const materiasRegulares = [];
      materia.paraCursar.necesitaRegular.forEach((element) => {
        materiasRegulares.push(this.data.find((x) => x.id === element));
      });
      return materiasRegulares;
    },

    materiasAprobadasParaCursar(materia) {
      const materiasAprobadas = [];
      materia.paraCursar.necesitaAprobada.forEach((element) => {
        materiasAprobadas.push(this.data.find((x) => x.id === element));
      });
      return materiasAprobadas;
    },

    materiasRegularesParaRendir(materia) {
      if (!materia.paraRendir?.necesitaRegular) return [];
      const materiasRegulares = [];
      materia.paraRendir.necesitaRegular.forEach((element) => {
        materiasRegulares.push(this.data.find((x) => x.id === element));
      });
      return materiasRegulares;
    },

    materiasAprobadasParaRendir(materia) {
      if (!materia.paraRendir?.necesitaAprobada) return [];
      const materiasAprobadas = [];
      materia.paraRendir.necesitaAprobada.forEach((element) => {
        materiasAprobadas.push(this.data.find((x) => x.id === element));
      });
      return materiasAprobadas;
    },

    estaAprobada(materia) {
      if (materia.estado !== "APROBADA") {
        return false;
      } else {
        return true;
      }
    },

    materiasRegularesHabilitadas(materia) {
      const materiasRegulareshanilitadas = this.materiasRegularesParaCursar(
        materia
      )
        .map((x) => x.estado)
        .every((x) => x === "REGULAR" || x === "APROBADA");

      if (materiasRegulareshanilitadas) {
        return true;
      } else {
        return false;
      }
    },

    promedio(materias) {
      if (materias.length) {
        this.promedioTotal = 0;
        let acumuladorNotas = 0;
        const materiasAprobadasNotas = materias
          .filter((x) => x.estado === "APROBADA" && x.nota !== null)
          .map((x) => parseInt(x.nota));
        materiasAprobadasNotas.forEach((x) => (acumuladorNotas += x));
        const division =
          acumuladorNotas /
          (materiasAprobadasNotas.length ? materiasAprobadasNotas.length : 1);
        this.promedioTotal = division.toFixed(2);
      }
    },

    materiasAprobadasHabilitadas(materia) {
      const materiasAprobadasHabilitadasParaCursar =
        this.materiasAprobadasParaCursar(materia)
          .map((x) => x.estado)
          .every((x) => x === "APROBADA");

      const materiasAprobadasHabilitadasParaRendir =
        this.materiasAprobadasParaRendir(materia)
          .map((x) => x.estado)
          .every((x) => x === "APROBADA");
      if (
        materiasAprobadasHabilitadasParaCursar ||
        materiasAprobadasHabilitadasParaRendir
      ) {
        return true;
      } else {
        return false;
      }
    },

    cambiarEstadoMateria(id, estado, nota = null) {
      this.data.find((materia) => materia.id === id).nota = nota;
      this.data.find((materia) => materia.id === id).estado = estado;
      localStorage.setItem(this.dbName, JSON.stringify(this.data));
      this.data = JSON.parse(localStorage.getItem(this.dbName));
      this.actualizarEstadisticas(this.data);
    },
    aprobarAño(año) {
      this.data
        .filter((materia) => materia.ano === año)
        .forEach((x) => (x.estado = "APROBADA"));
      localStorage.setItem(this.dbName, JSON.stringify(this.data));
      this.data = JSON.parse(localStorage.getItem(this.dbName));
      this.actualizarEstadisticas(this.data);
    },
    getButtonColor(año) {
      if (
        this.data
          .filter((materia) => materia.ano === año)
          .every((x) => x.estado === "APROBADA")
      ) {
        return "success";
      }
    },

    actualizarEstadisticas(materias) {
      this.cantidadMateriasAprobadas(materias);
      this.cantidadMateriasRegulares(materias);
      this.cantidadMateriasCursando(materias);
      this.horasElectivas(materias);
      this.horasSemanales(materias);
      this.progreso(materias);
      this.promedio(materias);
    },

    materias(año, cuatrimestre) {
      return this.data.filter(
        (materia) =>
          materia.ano === año && materia.cuatrimestre === cuatrimestre
      );
    },

    resetearProgreso() {
      if (
        confirm(
          "¿Estás seguro que deseas resetear todo el progreso? Esta acción no se puede deshacer."
        )
      ) {
        localStorage.removeItem(this.dbName);
        location.reload();
      }
    },
  },

  mounted() {
    if (localStorage.getItem(this.dbName)) {
      this.data = JSON.parse(localStorage.getItem(this.dbName));
    } else {
      localStorage.setItem(this.dbName, JSON.stringify(this.data));
    }

    this.cantMateriasAprobadas = this.data.filter(
      (x) => x.estado === "APROBADA"
    ).length;
    this.cantidadMateriasRegulares(
      this.data.filter((x) => x.estado === "REGULAR")
    );
    this.cantidadMateriasCursando(
      this.data.filter((x) => x.estado === "CURSANDO")
    );
    this.actualizarEstadisticas(this.data);
  },
};
</script>
<style>
.v-expansion-panel-content__wrap {
  padding: 0px !important;
}
</style>
