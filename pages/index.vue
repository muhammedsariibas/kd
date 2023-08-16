<template>
  <v-col
    cols="12"
    sm="12"
    md="12"
    style="padding: 0; background-color: rgb(236, 236, 236)"
  >
    <v-carousel
      :cycle="true"
      :interval="6000"
      style="height: 100vh"
      color="#FFD54F"
    >
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
          ><v-icon size="x-large" color="white"
            >mdi-chevron-right</v-icon
          ></v-btn
        >
      </template>
      <v-carousel-item cover>
        <video
          class="hidden-md-and-down"
          style="width: 100%"
          autoplay="autoplay"
          muted
        >
          <source src="../videos/kdlogo.mp4" />
        </video>

        <v-col style="padding: 0; height: 100%; background-color: #aeaeae">
          <video
            class="hidden-md-and-up"
            style="width: 100%"
            autoplay="autoplay"
            muted
          >
            <source src="../videos/kdlogo9-16.mp4" />
          </video>
        </v-col>
      </v-carousel-item>
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
      style="padding-top: 100px"
    >
      <v-col cols="12" sm="4" md="4">
        <v-hover v-slot="{ isHovering, props }" open-delay="200">
          <v-card
            :elevation="isHovering ? 20 : 8"
            :class="{ 'on-hover': isHovering }"
            v-bind="props"
            style="width: 100%; border-radius: 0; height: 450px"
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
            <v-card-actions
              style="position: absolute; bottom: 10px; left: 10px; right: 10px"
              class="d-flex justify-center"
            >
              <v-btn> DEVAM EDİN </v-btn></v-card-actions
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
            <v-card-text style="padding-top: 20px">
              <v-col style="height: 250px"
                ><v-carousel
                  cycle
                  cover
                  hide-delimiters
                  :show-arrows="false"
                  color="#FFD54F"
                >
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
                          font-size: x-large;
                        "
                      >
                        Bursa Şube
                      </div>
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        style="opacity: 0.5"
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
                  </v-carousel-item> </v-carousel></v-col
            ></v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn class="hidden-md-and-up">
                DEVAM EDin
              </v-btn></v-card-actions
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
            style="width: 100%; border-radius: 0; height: 450px"
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
            <v-card-actions
              style="position: absolute; bottom: 10px; left: 10px; right: 10px"
              class="d-flex justify-center"
            >
              <v-btn> DEVAM EDin </v-btn></v-card-actions
            >
          </v-card>
        </v-hover>
      </v-col>
    </v-col>

    <v-col
      cols="12"
      sm="12"
      md="12"
      class="d-flex flex-wrap align-end"
      style="
        padding: 0;
        background-image: linear-gradient(#424242, #e0e0e0);
        height: 800px;
      "
    >
      <v-col cols="12" sm="4" md="4" class="pb-0 pl-0 pr-0">
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            style="border-radius: 0;"
            color="grey-lighten-4"
            v-bind="props"
          >
            <v-img
              :aspect-ratio="16 / 9"
              cover
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            >
              <v-expand-x-transition>
                <div
                  v-if="isHovering"
                  class="d-flex transition-fast-in-fast-out v-card--reveal-left text-h2"
                  style="height: 50%"
                >
                  null
                </div>
              </v-expand-x-transition>
            </v-img>
          </v-card>
        </v-hover>
        <v-col style="background-color: green;opacity: 0.9;height: 100px;">aasdas</v-col>
      </v-col>

      <v-col cols="12" sm="4" md="4" class="pb-0 pl-0 pr-0">
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            style="border-radius: 0;"
            color="grey-lighten-4"
            v-bind="props"
          >
            <v-img
              :aspect-ratio="16 / 9"
              cover
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            >
              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="d-flex transition-fast-in-fast-out v-card--reveal-middle text-h2"
                  style="height: 50%"
                >
                  null
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
        <v-col style="background-color: green;opacity: 0.9;height: 100px;">aasdas</v-col>
      </v-col>

      <v-col cols="12" sm="4" md="4" class="pb-0 pl-0 pr-0">
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            style="border-radius: 0;"
            color="grey-lighten-4"
            v-bind="props"
          >
            <v-img
              :aspect-ratio="16 / 9"
              cover
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            >
              <v-expand-x-transition>
                <div
                  v-if="isHovering"
                  class="d-flex transition-fast-in-fast-out v-card--reveal-right text-h2"
                  style="height: 50%"
                >
                  null
                </div>
              </v-expand-x-transition>
            </v-img>
          </v-card>
        </v-hover>
        <v-col style="background-color: green;opacity: 0.9;height: 100px;">aasdas</v-col>
      </v-col>
    </v-col>
  </v-col>
</template>
<script setup>
</script>

<style lang="scss">
.v-window__controls {
  padding: 0 0;
}

.v-window {
  &-x-transition,
  &-x-reverse-transition,
  &-y-transition,
  &-y-reverse-transition {
    &-enter-active,
    &-leave-active {
      transition: 2s cubic-bezier(0.25, 0.8, 0.5, 1) !important;
    }
  }
}

.v-card--reveal-left {
  align-items: center;
  left: 0px;
  bottom: 0;
  justify-content: center;
  background-color:brown;
  position: absolute;
  width: 100%;
}
.v-card--reveal-middle {
  align-items: center;
  left: 0px;
  bottom: 0;
  justify-content: center;
  background-color: green;
  position: absolute;
  width: 100%;
}
.v-card--reveal-right {
  align-items: center;
  right: 0px;
  bottom: 0;
  justify-content: center;
  background-color: purple;
  position: absolute;
  width: 100%;
}
</style>