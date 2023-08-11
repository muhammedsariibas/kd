<template>
  <v-col
    cols="12"
    sm="12"
    md="12"
    style="padding: 0; background-color: rgb(236, 236, 236)"
  >
    <v-carousel style="height: 100vh" color="#FFD54F">
      <template v-slot:prev="{ props }">
        <v-btn
          style="border-radius: 0"
          height="80"
          variant="elevated"
          color="#383e42"
          @click="props.onClick"
          ><v-icon size="x-large" color="white">mdi-chevron-left</v-icon></v-btn
        >
      </template>
      <template v-slot:next="{ props }">
        <v-btn
          style="border-radius: 0"
          height="80"
          variant="elevated"
          color="#383e42"
          @click="props.onClick"
          ><v-icon size="x-large" color="white">mdi-chevron-right</v-icon></v-btn
        >
      </template>
      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
      ></v-carousel-item>
    </v-carousel>
    <v-col
      cols="12"
      sm="12"
      md="12"
      class="d-flex flex-wrap justify-center"
      style="padding-top: 100px;"
      
    >
      <v-col cols="12" sm="4" md="4">
        <v-hover v-slot="{ isHovering, props }" open-delay="200">
          <v-card
            :elevation="isHovering ? 20 : 8"
            :class="{ 'on-hover': isHovering }"
            v-bind="props"
            style="width: 100%; border-radius: 0; height:450px"
          >
            <v-card-title class="d-flex justify-center"
              ><h2 style="font-family: 'Lobster', sans-serif; color: #383e42">
                Şirketimiz
              </h2></v-card-title
            >
            <v-card-text style="padding: 40px; height: 278px"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              iure? Totam alias ipsam enim et neque. Repellat inventore harum
              necessitatibus, magnam optio repellendus. Nesciunt ipsum mollitia
              consequatur illo, magni minima?</v-card-text
            >
            <v-card-actions style="position: absolute; bottom: 10px;left: 10px;right: 10px;" class="d-flex justify-center">
              <v-btn> DEVAM EDin </v-btn></v-card-actions
            >
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-hover v-slot="{ isHovering, props }" open-delay="200">
          <v-card
            :elevation="isHovering ? 16 : 8"
            :class="{ 'on-hover': isHovering }"
            v-bind="props"
            style="width: 100%; border-radius: 0; height: 100%"
          >
            <v-card-title class="d-flex justify-center"
              ><h2 style="font-family: 'Lobster', sans-serif; color: #383e42">
                Projelerimiz
              </h2></v-card-title
            >
            <v-card-text style="padding-top: 20px"
              >
              <v-col style="height: 250px;"><v-carousel
                cycle
                cover
                hide-delimiters
                :show-arrows="false"
                color="#FFD54F"
              >
                <v-carousel-item cover>
                  <v-col
                    class="d-flex justify-center align-center"
                    style="padding: 0 ;"
                  >
                    <div
                      style="
                        z-index: 1000000;
                        position: absolute;
                        font-family: 'Lobster', sans-serif;
                        font-size:x-large;"

                    >
                      Bursa Şube
                    </div>
                    <v-img
                      
                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                      style="opacity: 0.5;"
                    ></v-img>
                  </v-col>
                </v-carousel-item>
                <v-carousel-item cover>
                  <v-col
                    class="d-flex justify-center align-center"
                    style="padding: 0"
                  >
                    <div
                      style="
                        z-index: 1000000;
                        position: absolute;
                        font-family: 'Lobster', sans-serif;
                      "
                    >
                      Bursa Şube
                    </div>
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                      style="opacity: 0.5"
                    ></v-img>
                  </v-col>
                </v-carousel-item> </v-carousel
            ></v-col></v-card-text>
            <v-card-actions class="d-flex justify-center ">
              <v-btn class="hidden-md-and-up"> DEVAM EDin </v-btn></v-card-actions
            >
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-hover v-slot="{ isHovering, props }" open-delay="200">
          <v-card
            :elevation="isHovering ? 16 : 8"
            :class="{ 'on-hover': isHovering }"
            v-bind="props"
            style="width: 100%; border-radius: 0;height: 450px;"
          >
            <v-card-title class="d-flex justify-center"
              ><h2 style="font-family: 'Lobster', sans-serif; color: #383e42">
                Şirketimiz
              </h2></v-card-title
            >
            <v-card-text style="padding: 40px; height: 278px"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              iure? Totam alias ipsam enim et neque. Repellat inventore harum
              necessitatibus, magnam optio repellendus. Nesciunt ipsum mollitia
              consequatur illo, magni minima?</v-card-text
            >
            <v-card-actions style="position: absolute; bottom: 10px;left: 10px;right: 10px;" class="d-flex justify-center">
              <v-btn> DEVAM EDin </v-btn></v-card-actions
            >
          </v-card>
        </v-hover>
      </v-col>
    </v-col>

    <v-col style="padding: 0;background-image:linear-gradient(#424242, #E0E0E0); height: 800px;">

    </v-col>
  </v-col>
</template>
<script setup>
</script>

<style >
.v-window__controls {
  padding: 0 0;
}
</style>