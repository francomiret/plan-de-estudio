<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-text>
          <p class="headline">Universidad Tecnológica Nacional</p>
          <p class="subtitle-2">Facultad Regional Concepción del Uruguay</p>
        </v-card-text>
        <v-card-text>
          <v-row>
            <v-col v-for="(carrera, i) in utnFrcu" :key="i" cols="12" sm="6">
              <v-card :color="carrera.color" :to="carrera.to">
                <v-card-text>
                  <p class="title">
                    <v-icon>
                      {{ carrera.icon }}
                    </v-icon>
                    {{ carrera.title }}
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      utnFrcu: [
        {
          to: "/civil-frcu",
          title: "Ingeniería Civil",
          icon: "mdi-hard-hat",
          color: "yellow lighten-2",
        },
        {
          to: "/civil-frcu-2023",
          title: "Ingeniería Civil (2023)",
          icon: "mdi-hard-hat",
          color: "yellow lighten-2",
        },
        {
          to: "/electro-frcu",
          title: "Ingeniería Electromecánica",
          icon: "mdi-cog",
          color: "red lighten-2",
        },
        {
          to: "/electro-frcu-2023",
          title: "Ingeniería Electromecánica (2023)",
          icon: "mdi-cog",
          color: "red lighten-2",
        },
        {
          to: "/isi-frcu",
          title: "Ingeniería en Sistemas de Información",
          icon: "mdi-laptop",
          color: "green lighten-2",
        },
        {
          to: "/isi-frcu-2023",
          title: "Ingeniería en Sistemas de Información (2023)",
          icon: "mdi-laptop",
          color: "green lighten-2",
        },
        {
          to: "/analista-frcu",
          title: "Analista Universitario de Sistemas",
          icon: "mdi-laptop",
          color: "blue lighten-2",
        },
        {
          to: "/loi-frcu",
          title: "Licenciatura en Organización Industrial",
          icon: "mdi-account-group",
          color: "purple lighten-2",
        },
      ],
    };
  },
};
</script>
