<template>
  <div id="app">
    <div class="header p-4">
      <div class="row m-0 d-flex align-items-center menu">
        <div class="col px-0 d-flex justify-content-start d-lg-none">
          <img alt="Vue logo" style="height: 29px;" src="./assets/img/icons/menu_icon.png">
        </div>
        <div class="col col-lg-3 px-0 d-flex justify-content-center">
          <img alt="Vue logo" class="logo" src="./assets/img/icons/logo.png">
        </div>
        <div class="col px-0 d-flex justify-content-end">
          <img class="d-md-none" alt="Vue logo" src="./assets/img/icons/login_icon.png">
          <div class="d-none d-lg-block">
            <div class="d-flex h-full align-items-center mx-4">
              <p class="text-white text-sm mb-0 mx-3">Blog</p>
              <p class="text-white text-sm mb-0 mx-3">Promociones</p>
              <p class="text-white text-sm mb-0 mx-3 text-nowrap">Preguntas Frecuentes</p>
              <p class="text-white text-sm mb-0 mx-3">Contáctanos</p>
            </div>
          </div>
          <div class="d-none d-md-block text-white rounded-pill border px-4 py-3 text-sm">
            Iniciar sesión
          </div>
        </div>
      </div>
    </div>
    <div class="main-content justify-content-center">
      <div class="mb-4 content-info">
        <p class="text-white h1 mt-5 mb-1 text-nowrap text-center mt-md-0 mb-md-3"><strong>Sé tu propio cambista.</strong></p>
        <p class="text-white h6 text-center max-w-xs">Seguro, rápido y al mejor cambio</p>
        <p class="text-xxs text-white d-none d-md-block max-w-xs">Inscritos en la Superintendencia de Banca, Seguros y AFP.</p>
        <div class="d-none d-md-block text-white rounded-pill border px-3 py-3 text-sm text-center max-w-xs">
          Crear cuenta
        </div>
        <p class="text-xs text-white d-none d-md-block max-w-xs mt-2 mr-1"><u>¿Cómo funciona?</u></p>
      </div>
      <div class="position-relative d-flex justify-content-center">
        <div class="mx-4 rounded-xl p-2 pb-4" style="background-color: #EEEEEE; max-width: 360px;">
          <div class="m-0 rounded-lg bg-white px-4 py-3">
            <div class="col px-0">
              <div class="row">
                <div class="col-7 d-flex flex-column justify-content-start">
                  <p class="text-start my-1 text-sm"><strong>Envías</strong></p>
                  <p class="h3 text-start"><u>100.000,00</u></p>
                </div>
                <div class="d-flex col-5 justify-content-center align-items-center mb-3">
                  <p class="mx-2 mb-0 text-xs">SOLES</p>
                  <div>
                    <img style="margin-bottom: 3px;" alt="Peru" src="./assets/img/countries/peru.png">
                  </div>
                </div>
              </div>
              <div class="position-relative">
                <hr>
                <div class="rounded-circle position-absolute btn btn-info" style="top: -26px; right: 20px;">
                  <img alt="Peru" src="./assets/img/icons/change_icon.png">
                </div>
              </div>
              <div class="row mt-3 mb-1">
                <div class="col-7 d-flex flex-column justify-content-start">
                  <p class="text-start my-1 text-sm"><strong>Recibes</strong></p>
                  <p class="h3 text-start"><u>100.000,00</u></p>
                </div>
                <div class="d-flex col-5 justify-content-center align-items-center mt-2">
                  <p class="mx-2 mb-0 text-xs">DÓLARES</p>
                  <div>
                    <img style="margin-bottom: 3px;" alt="Peru" src="./assets/img/countries/usa.png">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="mb-0 mt-3 text-xs text-center">Tipo de Cambio</p>
          <p class="text-sm text-center"><strong><u>Compra: 3.398 </u></strong> | Venta: 3.426</p>
          <p class="text-xs mb-4 px-2 text-center"><u>¿Tienes un código promocional? Ingrésalo acá</u></p>
        </div>
        <div class="text-black position-absolute btn btn-warning rounded-pill btn-primary" style="bottom: -27px; padding: 14px 55px;">
          <strong>¡A cambiar!</strong>
        </div>
      </div>
    </div>

    <div class="px-4 mx-auto pt-4 mb-5 d-md-flex mt-5 content-operations">
      <div class="bank-logos">
        <p class="mb-2 text-xs text-nowrap text-center">Operaciones de cambio inmediatas a través de:</p>
        <div class="row mb-1 d-flex">
          <div class="col-6 px-0">
            <img alt="BCP" src="./assets/img/banks/bcp.png">
            <p class="text-xs text-center text-secondary">Todos los días</p>
          </div>
          <div class="col-6 px-0">
            <img alt="Interbank" src="./assets/img/banks/interbank.png">
            <p class="text-xs text-center text-secondary">de Lunes a Sábados</p>
          </div>
        </div>
      </div>
      <hr class="d-none d-md-block pipe mx-2"/>
      <p class="col-8 col-md-4 mx-auto text-xs text-center d-flex justify-content-center align-items-center">Operaciones interbancarias a todos los bancos de Lima</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Argentum';
  src: URL('./fonts/ArgentumSans-Light.ttf') format('truetype');
}
* {
  font-family: 'Argentum', sans-serif;
}
$tablet: 768px;
$desktop: 992px;

.logo {
  max-height: 29px;
  @media screen and (min-width: $tablet) {
    max-height: 40px;
  }
}
.rounded-xl {
  border-radius: 16px !important;
}
.rounded-lg {
  border-radius: 12px !important;
}
.text-xxs {
  font-size: 10px;
}
.text-xs {
  font-size: 12px;
}
.text-sm {
  font-size: 14px;
}
.h-full {
  height: 100%;
}
.header {
  background-image: url('./assets/img/bg-mobile.jpg');
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: $tablet) {
    height: 570px;
    background-image: url('./assets/img/bg-tablet.png');
  }
  @media screen and (min-width: $desktop) {
    height: 570px;
    background-image: url('./assets/img/bg-desktop.png');
    .menu {
      max-width: 1200px;
      margin: auto !important;
    }
  }
}
.main-content {
  margin-top: -350px;
  @media screen and (min-width: $tablet) {
    margin-top: -430px;
    display: flex;
  }
  .content-info {
    @media screen and (min-width: $tablet) {
      max-width: 285px;
      padding-left: 40px;
      .max-w-xs {
        max-width: 170px;
      }
      p {
        text-align: left !important;
        white-space: normal !important;
      }
    }
  }
}
.content-operations {
  max-width: 400px;
  @media screen and (min-width: $tablet) {
    max-width: 585px;
    .bank-logos {
      margin-right: 30px;
    }
  }
}
.pipe {
  height: 75px !important;
  width: 1px;
}
</style>
