<template>
  <div id="app">
    <div class="header p-4">
      <div class="row m-0 d-flex align-items-center menu">
        <div class="col px-0 d-flex justify-content-start d-lg-none">
          <img alt="Menu" src="./assets/img/icons/menu_icon.png">
        </div>
        <div class="col col-lg-3 px-0 d-flex justify-content-center">
          <img alt="Logo" class="logo" src="./assets/img/icons/logo.png">
        </div>
        <div class="col px-0 d-flex justify-content-end">
          <img class="d-md-none" alt="Login" src="./assets/img/icons/login_icon.png">
          <div class="d-none d-lg-block">
            <div class="d-flex h-full align-items-center mx-4">
              <p class="text-white text-sm mb-0 mx-3">Blog</p>
              <p class="text-white text-sm mb-0 mx-3">Promociones</p>
              <p class="text-white text-sm mb-0 mx-3 text-nowrap">Preguntas Frecuentes</p>
              <p class="text-white text-sm mb-0 mx-3">Contáctanos</p>
            </div>
          </div>
          <div class="d-none btn d-md-block text-white rounded-pill border px-4 py-3 text-sm">
            Iniciar sesión
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-container">
      <div class="main-content justify-content-center">
        <div class="mb-4 content-info">
          <p class="text-white h1 mt-5 mb-1 text-nowrap text-center mt-md-0 mb-md-3"><strong>Sé tu propio cambista.</strong></p>
          <p class="text-white h6 text-center max-w-xs">Seguro, rápido y al mejor cambio</p>
          <p class="text-xxs text-white d-none d-md-block max-w-xs">Inscritos en la Superintendencia de Banca, Seguros y AFP.</p>
          <div class="d-none btn d-md-block text-white rounded-pill border px-3 py-3 text-sm text-center max-w-xs">
            Crear cuenta
          </div>
          <p class="text-xs text-white d-none d-md-block max-w-xs mt-2 mr-1"><u>¿Cómo funciona?</u></p>
        </div>
        <div class="position-relative d-flex justify-content-center">
          <div class="mx-4 rounded-xl p-2 pb-4 calculator" style="background-color: #EEEEEE; max-width: 360px;">
            <div class="m-0 rounded-lg bg-white px-4 py-3">
              <div class="col px-0 calculator-content">
                <div class="row col-lg-6">
                  <div class="col-7 col-lg-12 d-flex flex-column justify-content-start">
                    <p class="text-start my-1 text-sm"><strong>Envías</strong></p>
                    <p class="h3 text-start"><u>100.000,00</u></p>
                  </div>
                  <div class="d-flex col-5 justify-content-center align-items-center mb-3 d-lg-none">
                    <p class="mx-2 mb-0 text-xs">SOLES</p>
                    <div>
                      <img style="margin-bottom: 3px;" alt="Peru" src="./assets/img/countries/peru.png">
                    </div>
                  </div>
                </div>
                <div class="position-relative division col-12">
                  <div class="d-none d-lg-block">
                    <div class="d-flex">
                      <div class="col-6 d-flex align-items-center">
                        <p class="mx-2 mb-0 text-xs">SOLES</p>
                        <div>
                          <img style="margin-bottom: 3px;" alt="Peru" src="./assets/img/countries/peru.png">
                        </div>
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <p class="mx-5 mb-0 text-xs receive-currency">DÓLARES</p>
                        <div>
                          <img style="margin-bottom: 3px;" alt="USA" src="./assets/img/countries/usa.png">
                        </div>
                      </div>
                    </div>
                  </div>

                  
                  <hr class="mt-lg-1">
                  <div class="rounded-circle position-absolute btn btn-info btn-change" style="top: -26px; right: 20px;">
                    <img alt="Peru" src="./assets/img/icons/change_icon.png">
                  </div>
                </div>
                <div class="row mt-3 mb-1 col-lg-6 mt-lg-0 receive-box">
                  <div class="col-7 col-lg-12 d-flex flex-column justify-content-start">
                    <p class="text-start my-1 text-sm"><strong>Recibes</strong></p>
                    <p class="h3 text-start"><u>100.000,00</u></p>
                  </div>
                  <div class="d-flex col-5 justify-content-center align-items-center mt-2 d-lg-none">
                    <p class="mx-2 mb-0 text-xs">DÓLARES</p>
                    <div>
                      <img style="margin-bottom: 3px;" alt="Peru" src="./assets/img/countries/usa.png">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column mt-3 currency-values justify-content-center">
              <p class="mb-0 text-xs text-center mx-2">Tipo de Cambio</p>
              <p class="text-sm text-center"><strong><u>Compra: 3.398 </u></strong> | Venta: 3.426</p>
            </div>
            <p class="text-xs mb-4 px-2 text-center"><u>¿Tienes un código promocional? Ingrésalo acá</u></p>
          </div>
          <div class="text-black position-absolute btn btn-warning rounded-pill btn-primary get-btn" style="bottom: -27px; padding: 14px 55px;">
            <strong>¡A cambiar!</strong>
          </div>
          <div class="col px-0 position-absolute d-none d-lg-block" style="bottom: -180px; right: -65px;">
            <img alt="Man" src="./assets/img/man.png">
          </div>
        </div>
      </div>

      <div class="px-4 pt-4 mb-5 d-md-flex content-operations">
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
    height: 700px;
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
  @media screen and (min-width: $desktop) {
    margin-top: -520px;
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
    @media screen and (min-width: $desktop) {
      max-width: 1000px;
    }
  }
}
.content-operations {
  max-width: 400px;
  margin: auto;
  margin-top: 30px;
  @media screen and (min-width: $tablet) {
    max-width: 585px;
    .bank-logos {
      margin-right: 30px;
    }
  }
  @media screen and (min-width: $desktop) {
    margin-right: 550px;
    margin-top: 105px;
  }
}
.pipe {
  height: 75px !important;
  width: 1px;
}
.max-w-container {
  max-width: 1200px;
  margin: auto;
}
.h1 {
  @media screen and (min-width: $desktop) {
    font-size: 50px !important;
    max-width: 400px;
  }
}
.calculator {
  @media screen and (min-width: $desktop) {
    width: 550px;
    height: 280px;
    max-width: none !important;
    .calculator-content {
      display: flex;
      flex-wrap: wrap;
    }
    .receive-currency {
      margin-right: 8px !important;
    }
    .division {
      order: -1;
    }
    .btn-change {
      top: 60px !important;
      right: 45% !important;
    }
    .receive-box {
      padding-left: 75px;
    }
    .currency-values {
      flex-direction: row;
    }
  }

}
    .get-btn {
        @media screen and (min-width: $desktop) {

      bottom: 45px !important;}
    }
</style>
