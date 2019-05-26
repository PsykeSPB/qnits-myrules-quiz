<template>
  <div class="form">
    <form v-on:submit.prevent>
      <div class="form-item"
        v-bind:class="{ 'error': isPhoneError }"
      >
        <div class="form-item__text">
          Введите имя
        </div>
        <i class="mdi mdi-account"/>
        <input type="text"
          v-model="name"
          placeholder="Имя"
          name="name"
          required="required"
          class="form-item__input"
        >
        <div class="form-item__error">
          {{ nameErrorMsg }}
        </div>
      </div>
      <div class="form-item"
        v-bind:class="{ 'error': isPhoneError }"
      >
        <div class="form-item__text">
          Введите телефон
        </div>
        <i class="mdi mdi-phone"/>
        <input type="phone"
          v-model="phone"
          placeholder="Телефон"
          name="phone"
          required="required"
          class="form-item__input"
        >
        <div class="form-item__error">
          {{ phoneErrorMsg }}
        </div>
      </div>
      <div class="form-item">
        <i class="mdi mdi-check-circle btn"></i>
        <input type="submit"
          value="Заказать со скидкой"
          class="form-item__btn"
          @click="trySub()"
        >
      </div>
    </form>
    <div class="agree"
      @click="agreed = !agreed"
    >
      <span
        class="check"
        v-bind:class="{ 'checked': agreed }"
      ></span>
      C <a class="link" href="../politics.html" target="_blank">Политикой конфиденциальности</a>
      ознакомлен
    </div>
  </div>
</template>

<script>
export default {
  name: 'FinalPageForm',
  data: () => ({
    agreed: true,
    name: '',
    phone: '',
    isNameError: false,
    isPhoneError: false,
    nameErrorMsg: 'Введите корректное имя',
    phoneErrorMsg: 'Введите корректный номер телефона',
  }),
  computed: {
    nPhone() {
      return this.phone.replace('+7', '8').replace(/[\s\-\(\)]+/g, '');
    },
    query() {
      const query = window.location.search.length > 0
        ? `${window.location.search}&`
        : '?';

      const add = this.$store.state.result
        .map((item, ind) => `step${ind}=${item}`)
        .join('&');

      return `${query}${add}`;
    },
  },
  methods: {
    trySub() {
      if (this.validate()) this.submit();
    },
    validate() {
      if (!(this.nPhone.match(/^\d{7}$/g) || this.nPhone.match(/^\d{11}$/g))) {
        this.isPhoneError = true;
        return false;
      }
      
      if (this.name.lenght < 3) {
        this.isNameError = true;
        return false;
      }

      return true;
    },
    submit() {
      this.axios.get('api.json')
        .then(({ data }) => {
          const params = {
            name: this.name,
            phone: this.phone,
            external_id: + new Date(),
            ...data.params,
          };
          const order = {
            qnit_id: data.qnit_id,
            token: data.token,
            method: data.method,
            params: params,
          };

          // this.axios.post('http://api.qnits.ru/api', order)
          //   .then(resp => {
          //     window.location.assign(`/thanks.html${this.query}`);
          //   })
          //   .catch(err => {
          //     console.error(err);
          //   });

          window.location.assign(`/thanks.html${this.query}`);
        })
        .catch(err => {
          console.error(err);
        })
    },
  },
};
</script>


<style lang="scss">
@import "~@/assets/sass/shared";

.form {
  display: inline-block;
  width: 57%;
  padding: 30px 45px;
  box-shadow: 2.5px 8.7px 40px 0 rgba(0,0,0,0.11);
  margin-left: 12px;
  border: 1.2px solid #e8e8e8;
  @media (max-width: 991px) and (min-width: 768px) {
    width: auto;
  }
  @media (max-width: 767px) {
    display: block;
    margin: 0 auto;
    padding: 15px;
    width: 100%;
  }

  &-item {
    margin-bottom: 15px;
    position: relative;

    &__text {
      font-size: 12px;
      text-transform: uppercase;
      color: #2e2e54;
      font-family: 'MuseoCyrlMedium';
      margin-bottom: 5px;
      letter-spacing: 1.2px;
    }

    &__input {
      border-radius: 4px;
      border: 1.2px solid #c0c4c3;
      width: 100%;
      height: 60px;
      font-size: 15px;
      outline-color: $action-color;
      padding-left: 5.3rem;
      @media (max-width: 991px) {
        height: 49px;
      }
    }

    &__btn {
      color: #fff;
      margin-top: 10px;
      width: 100%;
      border-radius: 5px;
      background-color: #63b723;
      padding: 12px 30px;
      border: none;
      outline: none;
      font-size: 18px;
      box-shadow: 1.7px 5.8px 21px 0 rgba(81,185,5,0.5) !important;
      text-align: center;
    }

    &__error {
      display: none;
      color: red;
      font-style: italic;
    }

    &.error {
      & .form-item__input {
        border: 1.2px solid  red;        
      }      

      & .form-item__error {
        display: block;
      }
    }
  }
}

.mdi {
  color: #dbdbdb;
  font-size: 21px;
  top: 41px;
  left: 20px;
  position: absolute;
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  @media (max-width: 991px) {
    top: 36px;
  }

  &.btn {
    top: 18px;
    left: 6px;
  }
}

.agree {
  font-size: 12px;
  color: #aca7c7;
  position: relative;
  padding-left: 20px;
  cursor: pointer;
  line-height: 16px;

  &:hover {
    color: rgba(0,0,0,0.67);
  }

  & .check {
    position: absolute;
    content: '';
    width: 12px;
    height: 12px;
    left: 0px;
    top: 2px;
    border-radius: 2px;
    background: #e6e5eb;

    &.checked {
      background-size: 11px !important;
      background: #63b723 url(~@/assets/img/check.svg) center 49% no-repeat;
    }
  }

  & .link {
    color: #63b723;
  }
}
</style>
