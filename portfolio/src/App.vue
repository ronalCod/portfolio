<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div class="portfolio pt-[50px] pl-28 pr-28 bg-[#d6d5d2]">
    <div class="portfolio_container bg-[#f3f3f3] rounded-b-[60PX] rounded-t-[60PX]">
      <div class="div1 w-full bg-[#f0efee] p-8 pt-14 pl-14 pr-14 rounded-t-[60px] rounded-b-[60PX]">
        <div class="div1_contain_main w-full pb-20">
          <div class="head flex justify-between w-full">
            <div class="flex flex-row justify-center items-center">
              <div>ronaldo.yonlonfin@epitech.eu</div>
              <button class="pt-1 pb-1 pl-4 pr-4 ml-3 bg-white rounded-xl">Copy</button>
              <button class="p-2 pt-1 pb-1 pl-4 pr-4 bg-white ml-4 rounded-xl">CVs</button>
            </div>
            <div class="">
              <a href="">Linkedin / </a>
              <a href="">Dribble / </a>
              <a href="">Instagram</a>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="">
            <img
              src="../src/assets/img/profilpic.jpeg"
              alt=""
              srcset=""
              class="w-44 rounded-full"
            />
          </div>
          <div class="text-6xl mt-12">Developper FullStack</div>
          <div class="mt-11  mb-28">
            <button
              type="button"
              class="bg-gray-800 text-slate-50 pl-4 pr-6 pt-2 pb-2 text-center rounded-2xl"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>

      <div class="p-8 flex items-center flex-wrap justify-between rounded-b-[60PX]">
        <div class="w-30">
          <img src="../src/assets/img/AngularIcon.jpg" alt="" srcset="" width="200px" />
        </div>
        <div class="">
          <img src="../src/assets/img/Flask.png" alt="" srcset="" class="w-30"  width="200px" />
        </div>
        <div class="">
          <img src="../src/assets/img/AngularIcon.jpg" alt="" srcset="" class="w-30"  width="200px" />
        </div>
        <div class="">
          <img src="../src/assets/img/Flask.png" alt="" srcset="" class="w-30"  width="200px" />
        </div><div class="">
          <img src="../src/assets/img/AngularIcon.jpg" alt="" srcset="" class="w-30"  width="200px" />
        </div>
        <div class="">
          <img src="../src/assets/img/Flask.png" alt="" srcset="" class="w-30"   width="200px"/>
        </div><div class="">
          <img src="../src/assets/img/AngularIcon.jpg" alt="" srcset=""  width="200px"/>
        </div>
        <div class="">
          <img src="../src/assets/img/Flask.png" alt="" srcset=""  width="200px"/>
        </div>
      </div>

      <div class="formation_experience bg-[#f0efee] flex flex-col w-full p-6">
        <div class="title pl-40 pr-40 text-5xl pb-16 text-center">Formations et Experiences</div>
        <div class="flex items-center justify-between w-full pl-9 pr-9">
          <div class="formation w-[47%]">
            <ul class="list-disc">
              <li class="lis">Lience en informatique de Gestion ENEAM</li>
              <li class="mt-6">
                Formation en Developpement FullStack (Coding Academy) à Epitech Bénin
              </li>
              <li class="mt-6">
                Formation En product management organisée par Epitech Bénin
              </li>
            </ul>
          </div>
          <div class="experiences w-[47%]">
            <ul class="list-decimal">
              <li class="">Stage professionel de 3 mois à LawChef</li>
              <li class="mt-6">Stage professionel de 3 mois à UNIR Services</li>
              <li class="mt-6">Developper Front-end (Angular) 2 ans à digit consults</li>
              <li class="mt-6">
                Formation en Developpement FullStack (Coding Academy) à Epitech Bénin
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="contacts pb-40 flex justify-center flex-col items-center">
        <div class="icone"><img src="../src/assets/img/contact.png" alt="" srcset="" width="300px" ></div>
        <div>
          <p>Pour vos prochains projets</p>
        </div>
        <div class="contact_btns">
          <button type="button">
            <i class='bx bxl-gmail'></i>
            Email
          </button>
          <button type="button">
            <a href="">
              <i class='bx bxl-whatsapp'></i>
              whatsApp
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
