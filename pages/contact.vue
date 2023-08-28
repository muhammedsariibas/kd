<template>
  <v-col cols="12" sm="12" md="12" style="padding: 0" class="d-flex flex-wrap">
    <v-col id="contactHeader" cols="12" sm="12" style="padding: 0;">
      <v-img cover src="/contact.jpg">
        <v-col style="height: 100%" class="d-flex justify-start align-end"
          ><v-card-title style="color: white"
            ><span
              style="
                font-size: 80px;
                font-family: 'Teko', sans-serif;
                color: white;
              "
              >İLETİŞİM</span
            ></v-card-title
          ></v-col
        >
      </v-img>
    </v-col>
    <v-col
      cols="12"
      sm="12"
      md="12"
      class="d-flex justify-center flex-wrap"
    >
      <v-col cols="12" sm="3" md="3">
        <v-card style="border-radius: 0; height: 100%">
          <v-card-title
            class="d-flex justify-space-between"
            style="
              font-family: 'Teko', sans-serif;
              color: black;
              font-size: xx-large;
            "
          >
            ADRES
            <v-icon style="font-size: 30px">mdi-map-marker</v-icon>
          </v-card-title>
          <divider></divider>
          <v-card-text
            style="
              font-family: 'Teko', sans-serif;
              color: black;
              font-size: x-large;
            "
          >
            G Plus, Bağlar mahallesi Mimarsinan Caddesi NO:37/1 İç Kapı:211, A
            Blok, 34209 Bağcılar/İstanbul
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3" md="3">
        <v-card style="border-radius: 0; height: 100%">
          <v-card-title
            class="d-flex justify-space-between"
            style="
              font-family: 'Teko', sans-serif;
              color: black;
              font-size: xx-large;
            "
          >
            E-MAİL
            <v-icon style="font-size: 30px">mdi-email</v-icon>
          </v-card-title>
          <divider></divider>
          <v-card-text
            style="
              font-family: 'Teko', sans-serif;
              color: black;
              font-size: x-large;
            "
          >
            jamrock140@gmail.com
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3" md="3">
        <v-card style="border-radius: 0; height: 100%">
          <v-card-title
            class="d-flex justify-space-between"
            style="
              font-family: 'Teko', sans-serif;
              color: black;
              font-size: xx-large;
            "
          >
            TELEFON
            <v-icon style="font-size: 30px">mdi-phone</v-icon>
          </v-card-title>
          <divider></divider>
          <v-card-text
            style="
              font-family: 'Teko', sans-serif;
              color: black;
              font-size: xx-large;
            "
          >
            537 207 1748
          </v-card-text>
        </v-card>
      </v-col>
    </v-col>
    <v-col
      cols="12"
      sm="12"
      md="12"
      class="d-flex flex-wrap justify-center pt-0"
    >
      <v-col cols="12" sm="11" md="11">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.0082149122422!2d28.812431576221336!3d41.02507621838999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5b3eb863a73%3A0xd315a7ae7499525c!2sKD%20Dizayn%20ve%20Mimarl%C4%B1k!5e0!3m2!1str!2str!4v1692175725697!5m2!1str!2str"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </v-col>
    </v-col>
  </v-col>
</template>

<script setup>

</script>

<style>
@media screen and (max-width: 600px) {
    #contactHeader {
        height: 250px;
    }
}
@media screen and (min-width: 600px) {
    #contactHeader {
        height: 500px;
    }
}
</style>