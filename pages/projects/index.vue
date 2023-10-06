<template>
  <v-col cols="12" sm="12" md="12" style="padding: 0" class="d-flex flex-wrap">
    <v-col cols="12" md="12" sm="12" style="padding: 0">
      <v-img
        cover
        lazy-src="../projects-main2.jpg"
        src="../projects-main2.jpg"
        class="d-flex"
      >
        <v-col id="emptyCol"> </v-col>
        <v-col class="d-flex justify-center"
          ><v-card-title id="header" style="color: white"
            ><span style="font-family: 'Teko', sans-serif; color: white"
              >PROJELERİMİZ</span
            ></v-card-title
          ></v-col
        >
        <v-col class="d-flex justify-center">
          <v-col cols="12" sm="7" md="7" class="d-flex justify-center"
            ><v-card-text id="content" style="color: white"
              ><span style="font-family: 'Teko', sans-serif; color: white">
                Alanında birikimli ekibimiz, sektör genelinde edindiğimiz zengin
                deneyimlerimizle birleşerek, her ölçekteki proje ve talebinize
                etkili çözümler sunuyor. Projelerinizin gereksinimlerini
                titizlikle analiz ediyor, bütçe, zamanlama ve kullanım
                ihtiyaçlarınızı en uygun dengeyle karşılamak üzere özenle
                planlar oluşturuyoruz. Size özel stratejiler geliştiriyor,
                projenizin her aşamasında yanınızda olarak hedeflerinize emin
                adımlarla ilerlemenizi sağlıyoruz. Amacımız, müşteri odaklı
                yaklaşımımızla kaliteli sonuçlar elde etmek ve iş birliği içinde
                benzersiz projeler ortaya koymaktır.</span
              ></v-card-text
            >
          </v-col>
        </v-col>
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="grey-lighten-4"
              indeterminate
            ></v-progress-circular>
          </div>
        </template>
      </v-img>
    </v-col>
    <v-col cols="12" sm="12" md="12">
      <v-col cols="12" sm="12" md="12" class="d-flex flex-wrap">
        <v-card-title
          style="
            font-family: 'Teko', sans-serif;
            color: black;
            font-size: xx-large;
            font-weight: bold;
          "
          >#BURSA FİBABANK</v-card-title
        >
        <v-divider class="border-opacity-100"></v-divider>

        <v-col cols="12" sm="12" md="12" class="d-flex flex-wrap">
          <v-col cols="12" sm="4" md="4" v-for="i in Bursa" :key="i">
            <v-hover v-slot="{ isHovering, props }">
              <v-card style="padding: 0" v-bind="props">
                <v-img :src="i.img"></v-img>

                <v-overlay
                  :model-value="isHovering"
                  contained
                  scrim="#036358"
                  class="align-center justify-center"
                >
                  
                  <v-icon @click="showImage(i.img)" style="color: white;">
                    mdi-magnify-plus-outline
                  </v-icon>
               
                </v-overlay>
              </v-card>
            </v-hover>
          </v-col>
        </v-col>
      </v-col>
    </v-col>

    <v-col cols="12" sm="12" md="12" class="d-flex flex-wrap">
      <v-card-title
        style="
          font-family: 'Teko', sans-serif;
          color: black;
          font-size: xx-large;
          font-weight: bold;
        "
        >#DHL KAYSERİ</v-card-title
      >
      <v-divider class="border-opacity-100"></v-divider>

      <v-col cols="12" sm="12" md="12" class="d-flex flex-wrap">
        <v-col cols="12" sm="4" md="4" v-for="i in Kayseri" :key="i">
          <v-hover v-slot="{ isHovering, props }">
            <v-card style="padding: 0" v-bind="props">
              <v-img :src="i.img"></v-img>

              <v-overlay
                :model-value="isHovering"
                contained
                scrim="#036358"
                class="align-center justify-center"
              >
              <v-icon @click="showImage(i.img)" style="color: white;">
                    mdi-magnify-plus-outline
                  </v-icon>
                
              </v-overlay>
            </v-card>
          </v-hover>
        </v-col>
      </v-col>
    </v-col>

    <v-col cols="12" sm="12" md="12" class="d-flex flex-wrap">
      <v-card-title
        style="
          font-family: 'Teko', sans-serif;
          color: black;
          font-size: xx-large;
          font-weight: bold;
        "
        >#Kütahya Garanti Bankası</v-card-title
      >
      <v-divider class="border-opacity-100"></v-divider>

      <v-col cols="12" sm="12" md="12" class="d-flex flex-wrap">
        <v-col cols="12" sm="4" md="4" v-for="i in Kutahya" :key="i">
          <v-hover v-slot="{ isHovering, props }">
            <v-card style="padding: 0" v-bind="props">
              <v-img :src="i.img"></v-img>
              <v-overlay
                :model-value="isHovering"
                contained
                scrim="#036358"
                class="align-center justify-center"
              >
              <v-icon @click="showImage(i.img)" style="color: white;">
                    mdi-magnify-plus-outline
                  </v-icon>
                
              </v-overlay>
            </v-card>
          </v-hover>
        </v-col>
      </v-col>
    </v-col>

    <v-dialog
      v-model="dialog"
      class="d-flex justify-center"
      style="background-color: rgb(0, 0, 0, 0.9)"
    >
      <v-col style="height: 80vh" class="d-flex justify-center">
        <v-img :src="imageDirectory"></v-img>
      </v-col>
    </v-dialog>
  </v-col>
</template>
<script setup>
onMounted(() => {
  image.value = "..//projects-main2.jpg";
});
let image = ref(null);
let imageDirectory = ref(null);
let dialog = ref(false);
let Bursa = [
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
];

let Kayseri = [
  { img: "../dhl-kayseri/IMG_4543.PNG" },
  { img: "../dhl-kayseri/IMG_4544.PNG" },
  { img: "../dhl-kayseri/IMG_4545.PNG" },
  { img: "../dhl-kayseri/IMG_4546.PNG" },
  { img: "../dhl-kayseri/IMG_4547.PNG" },
  { img: "../dhl-kayseri/IMG_4548.PNG" },
];

let Kutahya = [
  { img: "../garanti-kutahya/IMG_4549.PNG" },
  { img: "../garanti-kutahya/IMG_4550.PNG" },
  { img: "../garanti-kutahya/IMG_4551.PNG" },
  { img: "../garanti-kutahya/IMG_4552.PNG" },
  { img: "../garanti-kutahya/IMG_4553.PNG" },
  { img: "../garanti-kutahya/IMG_4554.PNG" },
];

function showImage(img) {
  imageDirectory.value = img;
  dialog.value = true;
}
</script>

<style>
.main-photo {
  filter: blur(0px);
  -webkit-filter: blur(1px);
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
  #header {
    animation: slide-in 2s ease-in-out;
    font-size: xx-large;
  }
  #content {
    animation: slide-in-right 2s ease-in-out;
    font-size: medium;
  }
  #emptyCol {
    height: 250px;
  }
}
@media screen and (min-width: 600px) {
  #header {
    animation: slide-in 2s ease-in-out;
    font-size: 80px;
  }
  #content {
    animation: slide-in-right 2s ease-in-out;
    font-size: 30px;
  }
  #emptyCol {
    height: 190px;
  }
}
</style>