<template>
  <div class="position-relative d-flex justify-content-center">
    <div class="mx-4 rounded-xl p-2 pb-4 calculator">
      <div class="m-0 rounded-lg bg-white px-4 py-3">
        <div class="col px-0 calculator-content">
          <div class="row col-lg-6">
            <div class="col-7 col-lg-12 d-flex flex-column justify-content-start">
              <p class="text-start my-1 text-sm"><strong>Envías</strong></p>
              <p class="h3 text-start"><u>
                <input v-model="sendMoney" type="number" @keyup="getMoneyValue" class="input-money underline"/>
              </u></p>
            </div>
            <div class="d-flex col-5 justify-content-center align-items-center mb-3 d-lg-none">
              <p class="mx-2 mb-0 text-xs">
                {{ changeDollars ? 'SOLES' : 'DÓLARES' }}
              </p>
              <div>
                <img v-if="changeDollars" class="country-img" alt="Peru" src="@/assets/img/countries/peru.png">
                <img v-else class="country-img" alt="USA" src="@/assets/img/countries/usa.png">
              </div>
            </div>
          </div>
          <div class="position-relative division col-12">
            <div class="d-none d-lg-block">
              <div class="d-flex">
                <div class="col-6 d-flex align-items-center">
                  <p class="mx-2 mb-0 text-xs">
                    {{ changeDollars ? 'SOLES' : 'DÓLARES' }}
                  </p>
                  <div>
                    <img v-if="changeDollars" class="country-img" alt="Peru" src="@/assets/img/countries/peru.png">
                    <img v-else class="country-img" alt="USA" src="@/assets/img/countries/usa.png">
                  </div>
                </div>
                <div class="col-6 d-flex align-items-center">
                  <p class="mx-5 mb-0 text-xs receive-currency">
                    {{ !changeDollars ? 'SOLES' : 'DÓLARES' }}
                  </p>
                  <div>
                    <img v-if="!changeDollars" class="country-img" alt="Peru" src="@/assets/img/countries/peru.png">
                    <img v-else class="country-img" alt="USA" src="@/assets/img/countries/usa.png">
                  </div>
                </div>
              </div>
            </div>

            
            <hr class="mt-lg-1">
            <div @click="changeOrder" class="rounded-circle position-absolute btn btn-info btn-change" style="top: -26px; right: 20px;">
              <img alt="Peru" src="@/assets/img/icons/change_icon.png">
            </div>
          </div>
          <div class="row mt-3 mb-1 col-lg-6 mt-lg-0 receive-box">
            <div class="col-7 col-lg-12 d-flex flex-column justify-content-start">
              <p class="text-start my-1 text-sm"><strong>Recibes</strong></p>
              <p class="h3 text-start"><u>
                <input type="number" v-model="getMoney" @keyup="sendMoneyValue"  class="input-money underline"/>  
              </u></p>
            </div>
            <div class="d-flex col-5 justify-content-center align-items-center mt-2 d-lg-none">
              <p class="mx-2 mb-0 text-xs">{{ !changeDollars ? 'SOLES' : 'DÓLARES' }}</p>
              <div>
                <img v-if="!changeDollars" class="country-img" alt="Peru" src="@/assets/img/countries/peru.png">
                <img v-else class="country-img" alt="USA" src="@/assets/img/countries/usa.png">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column mt-3 currency-values justify-content-center">
        <p class="mb-0 text-xs text-center mx-2">Tipo de Cambio</p>
        <p class="text-sm text-center">
          <span :class="{'underline': changeDollars}">Compra: {{this.currentType}}</span> | 
          <span :class="{'underline': !changeDollars}">Venta: {{this.currentTypeSell}}</span>
        </p>
      </div>
      <p class="text-xs mb-4 px-2 text-center"><u>¿Tienes un código promocional? Ingrésalo acá</u></p>
    </div>
    <div class="text-black position-absolute btn btn-warning rounded-pill btn-primary get-btn" style="bottom: -27px; padding: 14px 55px;">
      <strong>¡A cambiar!</strong>
    </div>
    <div class="col px-0 position-absolute d-none d-lg-block" style="bottom: -180px; right: -65px;">
      <img alt="Man" src="@/assets/img/man.png">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Calculator',
  data() {
    return {
      getMoney: 0,
      sendMoney: 0,
      changeDollars: true
    }
  },
  computed: {
    ...mapGetters({
      currentType: 'getCurrentType',
      currentTypeSell: 'getCurrentTypeSell',
    }),
  },
  methods: {
    getMoneyValue() {
      if(!this.changeDollars) {
        this.getMoney = this.sendMoney * this.currentTypeSell
      } else {
        this.getMoney = this.sendMoney / this.currentType
      }
    },
    sendMoneyValue() {
      if(!this.changeDollars) {
        this.sendMoney = this.getMoney / this.currentTypeSell
      } else {
        this.sendMoney = this.getMoney * this.currentType
      }
    },
    changeOrder() {
      this.changeDollars = !this.changeDollars
      this.sendMoney = this.getMoney
      this.getMoneyValue()
    }
  },
  created() {
    this.$store.dispatch('setCurrencyData');
  }
}
</script>

<style lang="scss">
$desktop: 992px;
.calculator {
  background-color: #EEEEEE;
  width: 90%;
  max-width: 360px;
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
      flex-direction: row !important;
    }
  }
  .country-img {
    margin-bottom: 3px;
  }
}
</style>
