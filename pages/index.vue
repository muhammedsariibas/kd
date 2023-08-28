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

        <v-col style="padding: 0; height: 100%; background-color: #a4a4a4">
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
        class="d-flex justify-center align-center"
        src="../assets/cubes.jpg"
        cover
      >
        <v-col style="height: 100vh" class="d-flex flex-wrap align-center">
          <v-col cols="12" sm="2" md="2"></v-col>
          <v-col cols="12" sm="8" md="8">
            <span id="inovasion" class="d-flex flex-wrap">MÜŞTERİ ODAKLI </span>
            <span id="inovasionContent" class="d-flex flex-wrap"
              >Müşterilerimizin ihtiyaçlarını en iyi şekilde karşılamak için
              çalışıyoruz.</span
            >
          </v-col>
        </v-col>
      </v-carousel-item>
      <v-carousel-item
        class="d-flex justify-center align-center"
        src="../assets/inovasion.png"
        cover
      >
        <v-col style="height: 100vh" class="d-flex flex-wrap align-center">
          <v-col cols="12" sm="2" md="2"></v-col>
          <v-col cols="12" sm="8" md="8">
            <span id="inovasion" class="d-flex flex-wrap">İNOVASYON</span>
            <span id="inovasionContent" class="d-flex flex-wrap"
              >Sıra Dışı Tasarımlar, Benzersiz Mekânlar: İnovasyonla Geleceği
              İnşa Ediyoruz</span
            >
          </v-col>
        </v-col>
      </v-carousel-item>
      <v-carousel-item
        class="d-flex justify-center align-center"
        src="../assets/workmanship.jpg"
        cover
      >
        <v-col style="height: 100vh" class="d-flex flex-wrap align-center">
          <v-col cols="12" sm="2" md="2"></v-col>
          <v-col cols="12" sm="8" md="8">
            <span id="inovasion" class="d-flex flex-wrap"
              >KALİTELİ İŞÇİLİK
            </span>
            <span id="inovasionContent" class="d-flex flex-wrap"
              >İşçiliğimizle projeleri kusursuzca hayata geçiriyor, her detaya
              özen gösteriyoruz.</span
            >
          </v-col>
        </v-col>
      </v-carousel-item>
    </v-carousel>
    <v-col
      cols="12"
      sm="12"
      md="12"
      class="d-flex flex-wrap justify-center pt-10 pb-10"
      style="padding-top: 100px"
    >
      <v-col cols="12" sm="4" md="4">
        <v-hover v-slot="{ isHovering, props }" open-delay="200">
          <v-card
            :elevation="isHovering ? 20 : 8"
            :class="{ 'on-hover': isHovering }"
            v-bind="props"
            style="width: 100%; border-radius: 0; height: 100%"
          >
            <v-card-title class="d-flex justify-center pt-8"
              ><h2
                style="
                  font-family: 'Teko', sans-serif;
                  font-size: xxx-large;
                  color: #383e42;
                "
              >
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
              <v-btn
                style="
                  font-family: 'Teko', sans-serif;
                  font-size: x-large;
                  color: #383e42;
                "
              >
                DEVAM EDİN
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
            style="width: 100%; border-radius: 0; height: 460px"
          >
            <v-card-title class="d-flex justify-center pt-8"
              ><h2
                style="
                  font-family: 'Teko', sans-serif;
                  font-size: xxx-large;
                  color: #383e42;
                "
              >
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
            <v-card-actions
              class="d-flex justify-center"
              style="position: absolute; bottom: 10px; left: 10px; right: 10px"
            >
              <v-btn
                class="hidden-md-and-up"
                style="
                  font-family: 'Teko', sans-serif;
                  font-size: x-large;
                  color: #383e42;
                "
              >
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
            style="width: 100%; border-radius: 0; height: 100%"
          >
            <v-card-title class="d-flex justify-center pt-8"
              ><h2
                style="
                  font-family: 'Teko', sans-serif;
                  font-size: xxx-large;
                  color: #383e42;
                "
              >
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
              <v-btn
                style="
                  font-family: 'Teko', sans-serif;
                  font-size: x-large;
                  color: #383e42;
                "
              >
                DEVAM EDin
              </v-btn></v-card-actions
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
      style="padding: 0; background-image: linear-gradient(#424242, #e0e0e0)"
      
    >
      <v-col
        cols="12"
        sm="12"
        md="12"
        id="lengthHeight"
        class="d-flex flex-wrap align-center justify-center"
      >
        <h1 class="d-flex justify-center align-item" id="chartjsHeader">
          Tutkumuz ve Deneyimimizle Başarıyı Şekillendiriyoruz
        </h1>
      </v-col>
      <v-col cols="12" sm="4" md="4" class="pb-0 pl-0 pr-0">
        <canvas id="successChart"></canvas>
      </v-col>
      <v-col cols="12" sm="4" md="4" class="pb-0 pl-0 pr-0">
        <canvas id="successChart2"></canvas>
      </v-col>
      <v-col cols="12" sm="4" md="4" class="pb-0 pl-0 pr-0">
        <canvas id="successChart3"></canvas>
      </v-col>
      
    </v-col>
  </v-col>
</template>
<script setup>
import Chart from "chart.js/auto";

const successChart = ref(null);

onMounted(() => {
  createChart()
});
// function onScroll(value){
//   console.log(value.target.scrollTop)
// }


function createChart() {
  const x = document.getElementById("successChart");
  new Chart(x, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [1],
          backgroundColor: ["white"],
        },
      ],
    },
    plugins: [
      {
        id: "text",
        afterDraw: function (chart, a, b) {
          let width = chart.width,
            height = chart.height,
            ctx = chart.ctx;

          ctx.restore();
          let fontSize = (height / 150).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          
          ctx.textBaseline = "middle";

          let text = "100%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
          ctx.fillStyle="white";
          ctx.fillText(text, textX, textY);
          ctx.save();
        },
      },
    ],
    options: {
      cutout: 240,
      radius: 120,
      events: [],
    },
  });

  const two = document.getElementById("successChart2");
  new Chart(two, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [1],
          backgroundColor: ["white"],
        },
      ],
    },
    plugins: [
      {
        id: "text",
        afterDraw: function (chart, a, b) {
          let width = chart.width,
            height = chart.height,
            ctx = chart.ctx;

          ctx.restore();
          let fontSize = (height / 150).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          
          ctx.textBaseline = "middle";

          let text = "100%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
          ctx.fillStyle="white";
          ctx.fillText(text, textX, textY);
          ctx.save();
        },
      },
    ],
    options: {
      cutout: 240,
      radius: 120,
      events: [],
    },
  });

  const three = document.getElementById("successChart3");
  new Chart(three, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [1],
          backgroundColor: ["white"],
        },
      ],
    },
    plugins: [
      {
        id: "text",
        afterDraw: function (chart, a, b) {
          let width = chart.width,
            height = chart.height,
            ctx = chart.ctx;

          ctx.restore();
          let fontSize = (height / 150).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          
          ctx.textBaseline = "middle";

          let text = "100%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
          ctx.fillStyle="white";
          ctx.fillText(text, textX, textY);
          ctx.save();
        },
      },
    ],
    options: {
      cutout: 240,
      radius: 120,
      events: [],
    },
  });
}
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
  background-color: brown;
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

@keyframes slide-in {
  0% {
    transform: translateX(-100%); /* Başlangıç pozisyonu */
  }
  100% {
    transform: translateX(0); /* Bitiş pozisyonu */
  }
}

@keyframes slide-in-right {
  0% {
    transform: translateX(100%); /* Başlangıç pozisyonu, sağda */
  }
  100% {
    transform: translateX(0); /* Bitiş pozisyonu, merkez */
  }
}

@media screen and (max-width: 600px) {
  #inovasion {
    animation: slide-in 2s ease-in-out;
    z-index: 100000000px;
    font-family: "Teko", sans-serif;
    color: white;
    font-size: 40px;
  }
  #inovasionContent {
    animation: slide-in-right 2s ease-in-out;
    z-index: 100000000px;
    font-family: "Teko", sans-serif;
    color: white;
    font-size: 25px;
  }
  #chartjsHeader {
    font-family: "Teko", sans-serif;
    font-size: 20px;
    color: white;
  }
  #lengthHeight {
    height: 250px;
    background-color: transparent;
  }
}
@media screen and (min-width: 600px) {
  #inovasion {
    animation: slide-in 2s ease-in-out;
    z-index: 100000000px;
    font-family: "Teko", sans-serif;
    color: white;
    font-size: 80px;
  }
  #inovasionContent {
    animation: slide-in-right 2s ease-in-out;
    z-index: 100000000px;
    font-family: "Teko", sans-serif;
    color: white;
    font-size: 30px;
  }
  #chartjsHeader {
    font-family: "Teko", sans-serif;
    font-size: 60px;
    color: white;
  }
  #lengthHeight {
    height: 400px;
    background-color: transparent;
  }
}
</style>