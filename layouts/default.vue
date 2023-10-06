<template>
  <div style="height: 100vh" v-scroll="handleScroll">
    <v-layout class="d-flex flex-wrap">
      <v-app-bar
        flat
        id="appBarBackground"
        style="background-color: transparent; padding: 40px 40px"
      >
        <template v-slot:prepend>
          <v-app-bar-nav-icon
            @click="dialog = !dialog"
            class="hidden-md-and-up"
          ></v-app-bar-nav-icon>
        </template>

        <v-col>
          <NuxtLink class="nuxt-link" to="/">
          <v-app-bar-title class="pl-10 pt-10 pb-10 appBar">
            <v-img
              style="background-color: transparent"
              :width="80"
              cover
              src="../logos/kdpng.png"
              
            ></v-img>
          </v-app-bar-title>
        </NuxtLink>
        </v-col>
        <v-col
          class="divider hidden-md-and-down d-flex flex-wrap justify-space-around"
          cols="12"
          sm="4"
          md="4"
          
        >
          <v-col class="d-flex justify-end" style="padding: 0">
            <v-btn
              class="hidden-md-and-down"
              color="white"
              v-for="icon in icons"
              :key="icon"
              :icon="icon"
              variant="text"
            ></v-btn>
          </v-col>

          <v-divider
            class="border-opacity-50 hidden-md-and-down"
            color="white"
          ></v-divider>

          <span
            class="hidden-md-and-down text-center text-subtitle-2 cursor"
            style="color: white; padding: 5px"
          >
            <NuxtLink class="nuxt-link" to="/">ANASAYFA</NuxtLink>
          </span>

          <span
            class="hidden-md-and-down text-center text-subtitle-2 cursor"
            style="color: white; padding: 5px"
          >
            <NuxtLink class="nuxt-link" to="/projects">PROJELERİMİZ</NuxtLink>
          </span>

          <span
            class="hidden-md-and-down text-center text-subtitle-2 cursor"
            style="color: white; padding: 5px"
          >
            KURUMSAL
          </span>

        

          <span
            class="hidden-md-and-down text-center text-subtitle-2 cursor"
            style="color: white; padding: 5px"
          >
            <NuxtLink class="nuxt-link" to="/contact">İLETİŞİM</NuxtLink>
          </span>
        </v-col>
      </v-app-bar>

      <v-dialog
        class="d-flex justify-center align-center"
        style="background-color: rgb(0, 0, 0, 0.9)"
        v-model="dialog"
        width="500"
      >
        <v-list
          theme="dark"
          class="d-flex flex-wrap justify-center align-center"
          style="background-color: transparent"
        >
          <v-col cols="12" sm="12" md="12"
            ><v-list-item
              class="d-flex justify-center cursor"
              style="background-color: transparent"
              ><NuxtLink class="nuxt-link" to="/"
                >ANASAYFA</NuxtLink
              ></v-list-item
            ></v-col
          >
          <v-col cols="12" sm="12" md="12"
            ><v-list-item
              class="d-flex justify-center cursor"
              style="background-color: transparent"
              ><NuxtLink class="nuxt-link" to="/projects"
                >PROJELERİMİZ</NuxtLink
              ></v-list-item
            ></v-col
          >
          <v-col cols="12" sm="12" md="12"
            ><v-list-item
              class="d-flex justify-center cursor"
              style="background-color: transparent"
              >Kurumsal</v-list-item
            ></v-col
          >
          
          <v-col cols="12" sm="12" md="12"
            ><v-list-item
              class="d-flex justify-center cursor"
              style="background-color: transparent"
              ><NuxtLink class="nuxt-link" to="/contact"
                >İLETİŞİM</NuxtLink
              ></v-list-item
            ></v-col
          >
        </v-list>
      </v-dialog>

      <slot />

      <v-btn
        href="https://api.whatsapp.com/send?phone=905372071748"
        size="70"
        icon
        color="success"
        style="position: fixed; bottom: 40px; right: 40px; z-index: 100000000"
      >
        <v-icon size="40">mdi-whatsapp</v-icon></v-btn
      >
      <v-col style="padding: 0">
        <v-footer
          style="background-color: rgb(236, 236, 236)"
          class="text-center d-flex flex-column"
        >
          <div>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              :icon="icon"
              variant="text"
            ></v-btn>
          </div>

          <v-col class="pt-0 d-flex flex-wrap">
            <v-col cols="12" sm="6" md="6" class="d-flex justify-center">
              <v-list style="background-color: transparent">
                <v-list-item-title class="text-start font-weight-bold"
                  >HIZLI MENÜ</v-list-item-title
                >
                <v-divider></v-divider>
                <v-list-item-content class="d-flex">
                  <v-list-item-title class="text-subtitle-2 cursor"
                    ><NuxtLink
                      style="text-decoration: none; color: black"
                      to="/"
                      >Anasayfa</NuxtLink
                    ></v-list-item-title
                  >
                </v-list-item-content>
                <v-list-item-content class="d-flex pt-2 cursor">
                  <v-list-item-title class="text-subtitle-2"
                    ><NuxtLink
                      style="text-decoration: none; color: black"
                      to="/projects"
                      >Projelerimiz</NuxtLink
                    ></v-list-item-title
                  >
                </v-list-item-content>
                <v-list-item-content class="d-flex pt-2 cursor">
                  <v-list-item-title class="text-subtitle-2"
                    >Kurumsal</v-list-item-title
                  >
                </v-list-item-content>
               
                <v-list-item-content class="d-flex pt-2 cursor">
                  <v-list-item-title class="text-subtitle-2"
                    ><NuxtLink
                      style="text-decoration: none; color: black"
                      to="/contact"
                      >İletişim</NuxtLink
                    ></v-list-item-title
                  >
                </v-list-item-content>
              </v-list>
            </v-col>

            <v-col cols="12" sm="6" md="6" class="d-flex justify-center">
              <v-list style="background-color: transparent">
                <v-list-item-title
                  class="text-start font-weight-bold hidden-md-and-down"
                  >BİZE ULAŞIN</v-list-item-title
                >
                <v-divider></v-divider>
                <v-list-item-content class="d-flex">
                  <v-icon class="mr-4">mdi-map-marker</v-icon>

                  <v-list-item-title
                    >Balmumcu Mahallesi, Bestekar Şevki Bey Sokak <br />
                    <div class="text-start">
                      No:37 34349 Besiktaş / İSTANBUL
                    </div></v-list-item-title
                  >
                </v-list-item-content>
                <v-list-item-content class="d-flex">
                  <v-icon class="mr-4">mdi-phone</v-icon>

                  <v-list-item-title>05372971748</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content class="d-flex">
                  <v-icon class="mr-4">mdi-email</v-icon>

                  <v-list-item-title>jamrock140@gmail.com</v-list-item-title>
                </v-list-item-content>
              </v-list>
            </v-col>
          </v-col>

          <v-divider></v-divider>

          <div>{{ new Date().getFullYear() }} — <strong>KD DESIGN</strong></div>
        </v-footer>
      </v-col>
    </v-layout>
  </div>
</template>

<script setup>
function handleScroll(value) {
  if (window.scrollY == 0) {
    document.getElementById("appBarBackground").style.backgroundColor =
      "transparent";
    document.getElementById("appBarBackground").style.padding = "40px";
    document.getElementById("appBar").style.marginLeft = "100px";
  } else {
    document.getElementById("appBarBackground").style.backgroundColor =
      "rgba(0, 0, 0, 0.4)";
    document.getElementById("appBarBackground").style.padding = "10px";
  }
}
let dialog = ref(false);
let icons = ref([
  "mdi-facebook",
  "mdi-twitter",
  "mdi-linkedin",
  "mdi-instagram",
]);
</script>

<style>
@media screen and (max-width: 600px) {
  .divider {
    display: none;
  }
}
.cursor {
  cursor: pointer;
}
#appBarBackground {
  transition: background-color 0.6s ease;
  transition: padding 1s;
}
v-list-item-content {
  padding-top: 18px;
}
.nuxt-link {
  text-decoration: none;
  color: white;
}
</style>