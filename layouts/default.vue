<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          :prepend-icon="item.icon"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            :to="child.to"
          >
            <v-list-item-action>
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="child.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn to="/" icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" padless app>
      <v-container flat tile class="text-center">
        <p class="footer__authoring">
          Hecho con <span>❤</span> por <strong>Franco Miret</strong>
        </p>
        <small class="footer__authoring">
          Inspirado en
          <a href="https://valentincosta.com/isi/"
            >Plan de estudio ISI - Valentin Costa</a
          >
        </small>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          action: "mdi-silverware-fork-knife",
          items: [
            {
              icon: "mdi-hard-hat",
              title: "Civil",
              to: "/civil-frcu",
            },
            {
              icon: "mdi-laptop",
              title: "ISI",
              to: "/isi-frcu",
            },
          ],
          title: "UTN-FRCU",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Plan de estudios",
    };
  },
};
</script>
