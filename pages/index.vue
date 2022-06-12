<template>
  <v-row>
    <v-col
      v-for="(carrera, i) in planes"
      :key="i"
      cols="12"
      sm="8"
      md="4"
      l="3"
      xl="2"
    >
      <v-card :color="carrera.color" :to="carrera.to">
        <v-card-title x-large>
          <v-icon x-large style="margin: 10px">
            {{ carrera.icon }}
          </v-icon>
          {{ carrera.title }}
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      planes: [
        {
          to: "/civil-frcu",
          title: "Ingeniería Civil UTN-FRCU",
          icon: "mdi-hard-hat",
          color: "yellow",
        },
        {
          to: "/isi-frcu",
          title: "Ingeniería en Sistema de Información UTN-FRCU",
          icon: "mdi-laptop",
          color: "green",
        },
      ],
    };
  },
};
</script>
