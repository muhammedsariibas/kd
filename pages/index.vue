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
          <source src="../videos/kd-pc.mp4" />
        </video>

        <v-col style="padding: 0; background-color: #a4a4a4">
          <video
            class="hidden-md-and-up"
            style="width: 100%"
            autoplay="autoplay"
            muted
          >
            <source src="../videos/kd-phone.mp4" />
          </video>
        </v-col>
      </v-carousel-item>
      <v-carousel-item
        class="d-flex justify-center align-center"
        src="/cubes.jpg"
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
        src="/inovasion.png"
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
        src="/workmanship.jpg"
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
            style="width: 100%; border-radius: 0; height: 400px"
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
            <v-card-text class="d-flex flex-wrap justify-center align-center">
              <v-col
                ><v-carousel
                  cycle
                  cover
                  hide-delimiters
                  :show-arrows="false"
                  color="#FFD54F"
                >
                  <v-carousel-item
                    cover
                    v-for="(i, index) in projectImg"
                    :key="index"
                  >
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
                        <NuxtLink class="nuxt-link" to="/projects">
                          <v-btn
                            variant="text"
                            class="hidden-md-and-down"
                            style="
                              font-family: 'Teko', sans-serif;
                              font-size: x-large;
                              color: #383e42;
                            "
                          >
                            DEVAM EDİN
                          </v-btn>
                        </NuxtLink>
                      </div>
                      <v-img :src="i.img" style="opacity: 0.5"></v-img>
                    </v-col>
                  </v-carousel-item>
                </v-carousel> </v-col
            ></v-card-text>
            <v-card-actions
              class="d-flex justify-center"
              style="position: absolute; bottom: 10px; left: 10px; right: 10px"
            >
              <v-btn
                to="projects"
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
                Alanlarımız
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

    <v-col cols="12" sm="12" md="12" class="px-0 pb-0">
      <v-hover v-slot="{ isHovering, props }">
        <v-card class="rounded-0" color="grey-lighten-4" v-bind="props">
          <v-img id="hoverSet" :aspect-ratio="16 / 9" cover src="/solar.jpg">
            <v-expand-transition style="height: 30%">
              <div
                v-if="isHovering"
                class="d-flex transition-fast-in-fast-out bg-success v-card--reveal-solar flex-wrap justify-center"
                style="height: 100%"
              >
                <span
                  style="font-family: 'Teko', sans-serif; font-size: 30px"
                  class="d-flex flex-wrap justify-center px-15"
                >
                  Çağımızın yeni ihtiyacı olan yenilenebilir enerji (güneş ,
                  rüzgar enerji sistemleri) konusunda uzman ekibimiz ve
                  tecrübelerimizle sizlere teknik destek olabiliyor, dilerseniz
                  ürünleriniz hakkında danışmanlık verebiliyoruz.
                </span>
              </div>
            </v-expand-transition>
          </v-img>
        </v-card>
      </v-hover>
    </v-col>

    <v-col cols="12" sm="12" md="12" class="px-0 py-0">
      <v-hover v-slot="{ isHovering, props }">
        <v-card class="rounded-0" color="grey-lighten-4" v-bind="props">
          <v-img id="hoverSet" :aspect-ratio="16 / 9" cover src="/solar.jpg">
            <v-expand-transition style="height: 30%">
              <div
                v-if="isHovering"
                class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal-solar flex-wrap justify-center"
                style="height: 100%"
              >
                <span
                  style="font-family: 'Teko', sans-serif; font-size: 30px"
                  class="d-flex flex-wrap justify-center px-15"
                >
                Elektrikli araçlarınız için şarj istasyonlarınızı kuruyoruz. Kurulu istasyonunuz varsa her türlü teknik destek sağlıyoruz.
                </span>
              </div>
            </v-expand-transition>
          </v-img>
        </v-card>
      </v-hover>
    </v-col>

    <v-col
      cols="12"
      sm="12"
      md="12"
      id="lengthHeight"
      class="d-flex flex-wrap align-center justify-center"
      style="background-image: linear-gradient(#424242, #e0e0e0)"
    >
      <h1 class="d-flex justify-center align-item" id="chartjsHeader">
        Tutkumuz ve Deneyimimizle Başarıyı Şekillendiriyoruz
      </h1>
    </v-col>

    <v-parallax id="parallax" src="/power.jpg">
      <v-col
        cols="12"
        sm="12"
        md="12"
        class="d-flex flex-wrap justify-space-around align-center"
        style="padding-top: 150px; padding-bottom: 150px"
      >
        <v-col
          cols="12"
          sm="3"
          md="3"
          class="px-0 py-0 d-flex justify-center align-center"
          style="height: 320px"
        >
          <canvas id="successChart"></canvas>
        </v-col>
        <v-col
          cols="12"
          sm="3"
          md="3"
          class="px-0 py-0 d-flex justify-center align-center"
          style="height: 320px"
        >
          <canvas id="successChart2"></canvas>
        </v-col>
        <v-col
          cols="12"
          sm="3"
          md="3"
          class="px-0 py-0 d-flex justify-center align-center"
          style="height: 320px"
        >
          <canvas id="successChart3"></canvas>
        </v-col>
      </v-col>
    </v-parallax>
  </v-col>
</template>
<script setup>
import Chart from "chart.js/auto";

const successChart = ref(null);

onMounted(() => {
  createChart();
});
// function onScroll(value){
//   console.log(value.target.scrollTop)
// }

let projectImg = [
  {
    img: "../bursa-fibabank/IMG_4537.PNG",
  },
  {
    img: "../bursa-fibabank/IMG_4538.PNG",
  },
  {
    img: "../bursa-fibabank/IMG_4539.PNG",
  },
  {
    img: "../bursa-fibabank/IMG_4540.PNG",
  },
  {
    img: "../bursa-fibabank/IMG_4541.PNG",
  },
  {
    img: "../bursa-fibabank/IMG_4542.PNG",
  },

  { img: "../dhl-kayseri/IMG_4543.PNG" },
  { img: "../dhl-kayseri/IMG_4544.PNG" },
  { img: "../dhl-kayseri/IMG_4545.PNG" },
  { img: "../dhl-kayseri/IMG_4546.PNG" },
  { img: "../dhl-kayseri/IMG_4547.PNG" },
  { img: "../dhl-kayseri/IMG_4548.PNG" },

  { img: "../garanti-kutahya/IMG_4549.PNG" },
  { img: "../garanti-kutahya/IMG_4550.PNG" },
  { img: "../garanti-kutahya/IMG_4551.PNG" },
  { img: "../garanti-kutahya/IMG_4552.PNG" },
  { img: "../garanti-kutahya/IMG_4553.PNG" },
  { img: "../garanti-kutahya/IMG_4554.PNG" },
];

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
          let fontSize = (height / 80).toFixed(2);
          ctx.font = fontSize + "em sans-serif";

          ctx.textBaseline = "middle";

          let text = "100%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2.3;
          ctx.fillStyle = "white";
          ctx.fillText(text, textX, textY);
          ctx.save();
        },
      },
    ],
    options: {
      maintainAspectRatio: false, // Genişlik ve yükseklik oranının korunmasını devre dışı bırakır
      aspectRatio: 6,
      plugins: {
        title: {
          display: true,
          text: "TUTKU",
          font: {
            size: 30, // Alt başlık yazı tipi boyutu,
            weight: 1,
          },
          color: "white",
          position: "bottom",
        },
      },

      cutout: 230,
      radius: 100,
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
          let fontSize = (height / 80).toFixed(2);
          ctx.font = fontSize + "em sans-serif";

          ctx.textBaseline = "middle";

          let text = "100%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2.3;
          ctx.fillStyle = "white";
          ctx.fillText(text, textX, textY);
          ctx.save();
        },
      },
    ],
    options: {
      plugins: {
        title: {
          display: true,
          text: "DENEYİM",
          font: {
            size: 30, // Alt başlık yazı tipi boyutu,
            weight: 1,
          },
          color: "white",
          position: "bottom",
        },
      },
      cutout: 240,
      radius: 100,
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
          let fontSize = (height / 80).toFixed(2);
          ctx.font = fontSize + "em sans-serif";

          ctx.textBaseline = "middle";

          let text = "100%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2.3;
          ctx.fillStyle = "white";
          ctx.fillText(text, textX, textY);
          ctx.save();
        },
      },
    ],
    options: {
      plugins: {
        title: {
          display: true,
          text: "BAŞARI",
          font: {
            size: 30, // Alt başlık yazı tipi boyutu,
            weight: 1,
          },
          color: "white",
          position: "bottom",
        },
      },
      cutout: 240,
      radius: 100,
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
  #parallax {
    height: 1200px;
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
  #hoverSet {
    height: 600px;
    background-color: transparent;
  }
  #parallax {
    height: 600px;
  }
}

.v-card--reveal-solar {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>