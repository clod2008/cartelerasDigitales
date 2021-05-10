// import { videosCarousel01 } from "../data/videos";

// variables Globales
// let tipoDeSponsorCar01;
// let videosCarousel01;
// var videosCarousel01 = require('../data/videos');
let videosCarousel02;
let videosCarousel03;
let videosPopUp;
let carouselP1Urls = [];
let carouselP2Urls = [];
let carouselP3Urls = [];
let popUpUrls = [];
let popUpInterval = [];
let cont = 0;
let todosLosVideos;


// Funciones Globales
function Siguiente() {
  $("#carouselExampleInterval1").carousel("next");
  $("#carouselExampleInterval2").carousel("next");
  $("#carouselExampleInterval3").carousel("next");
}


// da dimencion a los mapas
// const alturaContenedor = document.getElementById('carouselExampleInterval1');
 
// const alturaMapa = alturaContenedor.clientWidth;
// console.log(alturaMapa);
// $(document).ready(function () {
//     $('#mapa01').css('height',alturaMapa);
//     $('#mapa02').css('height',alturaMapa);

// });


// Inicia los videos
function todosEnCero() {
  for (i = 0; i < todosLosVideos.length; i++) {
    todosLosVideos[i].currentTime = 0;
  }
}

//Data P1
fetch("../data/videosCarousel01.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // videosCarousel01 = data;
    for (var i = 0; i < data.videos.length; i++) {
      const { url } = data.videos[i];
      carouselP1Urls.push(url);
    }
    imprimirListaUrlsCar01();
    $(document).ready(function () {
      $("#slot01 div:first-child").addClass("active");
    });
  });

//Data P2
fetch("../data/videosCarousel02.json")
  .then((response) => {
    return response.json();
  })
  .then((data2) => {
    videosCarousel02 = data2;
    const vidCar02 = videosCarousel02.videos;
    for (var i = 0; i < vidCar02.length; i++) {
      const { url } = vidCar02[i];
      carouselP2Urls.push(url);
    }
  })
  .then((response) => {
    imprimirListaUrlsCar02();
  })
  .then((response) => {
    $(document).ready(function () {
      $("#slot02 div:first-child").addClass("active");
    });
  });

//Data P3
fetch("../data/videosCarousel03.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    videosCarousel03 = data;
    const vidCar03 = videosCarousel03.videos;
    for (var i = 0; i < vidCar03.length; i++) {
      const { url } = vidCar03[i];
      carouselP3Urls.push(url);
    }
  })
  .then((response) => {
    imprimirListaUrlsCar03();
  })
  .then((response) => {
    $(document).ready(function () {
      $("#slot03 div:first-child").addClass("active");
    });
  });

// Data PopUp
fetch("../data/videosPopUp.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    videosPopUp = data;
    const vidPopUp = videosPopUp.videos;
    for (var i = 0; i < vidPopUp.length; i++) {
      const { url } = vidPopUp[i];
      popUpUrls.push(url);
    };
    for (var i = 0; i < vidPopUp.length; i++) {
      const { dataInterval } = vidPopUp[i];
      popUpInterval.push(dataInterval);
    };
  })
  .then((response) => {
    imprimirListaUrlsPopUp();
  })
  .then((response) => {
    $(document).ready(function () {
      $("#PopUp div:first-child").addClass("active");
    });
  });

// Crea el carousel 1
const imprimirListaUrlsCar01 = () => {
  for (var i = 0; i < carouselP1Urls.length; i++) {
    // console.log(carouselP1Urls[i]);
    $("#slot01").append(
      '<div class="carousel-item" data-interval="500000">' +
        '<video src="' +
        carouselP1Urls[i] +
        '"  muted autoplay loop class="d-block w-100">' +
        '</video>'+
        '</div>'
    );
  }
};

// Crea el carousel 2
const imprimirListaUrlsCar02 = () => {
  for (var i = 0; i < carouselP2Urls.length; i++) {
    // console.log(carouselP2Urls[i]);
    $("#slot02").append(
      '<div class="carousel-item" data-interval="500000">' +
        '<video src="' +
        carouselP2Urls[i] +
        '"  muted autoplay loop class="d-block w-100">' +
        '</video>'+
        '</div>'
    );
  }
};
// Crea el carousel 3
const imprimirListaUrlsCar03 = () => {
  for (var i = 0; i < carouselP3Urls.length; i++) {
    // console.log(carouselP3Urls[i]);
    $("#slot03").append(
      '<div class="carousel-item" data-interval="500000">' +
        '<video src="' +
        carouselP3Urls[i] +
        '"  muted autoplay loop class="d-block w-100">' +
        '</video>'+
        '</div>'
    );
  }
};

// Crea Pop Up
const imprimirListaUrlsPopUp = () => {
  for (var i = 0; i < popUpUrls.length; i++) {
    // console.log(popUpUrls[i]);
    $("#PopUp").append(
      '<div class="carousel-item" data-interval=' + '"' + popUpInterval[i]+'">' +
      // '<div class="marcoPopUp"></div>' +
      '<video src="' +
        popUpUrls[i] +
        '"  muted autoplay loop class="d-block w-100">' +
        '</video>'+'</div>'
    );
  }
};


function lista () {
  for (var i = 0; i < carouselP1Urls.length; i++) {
      $("#listadoDeVideos").append(
        '<div>' +
          '<video src="' +
          carouselP1Urls[i] +
          '"  muted autoplay loop class="d-block w-100">' +
          '</video>'+
          '</div>'
      );
    };
    for (var i = 0; i < carouselP2Urls.length; i++) {
        $("#listadoDeVideos").append(
          '<div>' +
            '<video src="' +
            carouselP2Urls[i] +
            '"  muted autoplay loop class="d-block w-100">' +
            '</video>'+
            '</div>'
        );
      };
      for (var i = 0; i < carouselP3Urls.length; i++) {
          $("#listadoDeVideos").append(
            '<div>' +
              '<video src="' +
              carouselP3Urls[i] +
              '"  muted autoplay loop class="d-block w-100">' +
              '</video>'+
              '</div>'
          );
        };
  }


///////// CONTADOR ////////
function contador() {
  const contador = document.getElementById("contador");

  cont++;
  if (cont % 12 == 0) {
    // <= define el intervalo en segundos
    // console.log("Tiempo");
    Siguiente();
    todosLosVideos = document.querySelectorAll("video");
    todosEnCero();
  }
  // if ((cont > 10) && (cont < 20)) {
  //   lista()
  //   imprimirListaUrlsCar01();
  //   imprimirListaUrlsCar02();
  //   imprimirListaUrlsCar01();
  //   imprimirListaUrlsPopUp();

  // };
  // if (cont > 30){
  //   $("#listadoDeVideos").hide();
  // }
}
setInterval("contador()", 1000); //Define lo que dura un segundo
///////// CONTADOR ////////

     


  



