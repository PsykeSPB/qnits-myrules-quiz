<template>
  <div class="questions__wrapper">
    <div class="questions__question-title">
      Потеют ли ваши ноги?
    </div>
    <div class="questions-variants">
      <div class="questions-variants__textVariant"
        v-bind:class="{ 'selected': selection[0] }"
        @click="select(0)"
      >
        <label class="b-radio radio" tabindex="0">
          <input type="radio" value="1">
          <span class="check"></span>
          <span class="control-label">
            <div class="answer">
              <div class="answer__title">
                Да, это доставляет ощутимый дискомфорт
              </div>
            </div>
          </span>
        </label>
      </div>

      <div class="questions-variants__textVariant"
        v-bind:class="{ 'selected': selection[1] }"
        @click="select(1)"
      >
        <label class="b-radio radio" tabindex="1">
          <input type="radio" value="1">
          <span class="check"></span>
          <span class="control-label">
            <div class="answer">
              <div class="answer__title">
                Да, но меня это не смущает
              </div>
            </div>
          </span>
        </label>
      </div>

      <div class="questions-variants__textVariant"
        v-bind:class="{ 'selected': selection[2] }"
        @click="select(2)"
      >
        <label class="b-radio radio" tabindex="2">
          <input type="radio" value="1">
          <span class="check"></span>
          <span class="control-label">
            <div class="answer">
              <div class="answer__title">
                Нет, мне повезло :)
              </div>
            </div>
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step0',
  data: () => ({
    selection: [
      false,
      false,
      false,
    ],
  }),
  methods: {
    select(id) {
      this.selection.fill(false).splice(id, 1, true);
      this.$store.dispatch('answer', { variant: id, sum: 240 });
    },
  },
};
</script>


<style lang="scss" scoped>
.questions {
  &__wrapper {
    margin-top: 30px;
    @media (max-width: 991px) {
      margin-top: 20px;
      position: relative;
    }
  }

  &__question {
    &-title {
      font-size: 28px;
      margin-bottom: 20px;
      font-family: 'MuseoCyrlMedium';
      color: #363636;
      @media (max-width: 1199px) and (min-width: 992px) {
        font-size: 24px;
      }
      @media (max-width: 991px) {
        font-size: 24px;
      }
      @media (max-width: 767px) {
        font-size: 19px;
      }
    }
  }

  &-variants {
    margin-top: 20px;

    &__textVariant {
      -webkit-border-radius: 5px;
      display: inline-block;
      -moz-border-radius: 5px;
      width: 374px;
      margin-right: 10px;
      border-radius: 5px;
      border: 1px solid rgba(217,216,230,0.55);
      margin-bottom: 20px;
      transition: 0.5s;
      @media (max-width: 1199px) and (min-width: 992px) {
        width: 298px;
      }
      @media (max-width: 991px) {
        width: 100%;
      }

      & .check {
        background-color: #e8e8e8;
        width: 20px;
        height: 20px;
        position: absolute;
        border-radius: 30px;
        @media (max-width: 1199px) and (min-width: 992px) {
          height: 15px;
          width: 15px;
        }
      }

      &.selected {
        border: solid 1px rgba(81,185,5,0.5);
        box-shadow: 0 1px 12px 0 #63b723;

        & .check {
          border: 2px solid #63b723;
          background-color: #fff !important;
        }

        & .check:before {
          position: absolute;
          content: '';
          background-color: #63b723;
          -webkit-animation: check 0.1s linear;
          animation: check 0.1s linear;
          width: 12px;
          height: 12px;
          top: 0;
          border-radius: 8px;
          right: 0;
          left: 0;
          bottom: 0;
          margin: auto;
          @media (max-width: 1199px) and (min-width: 992px) {
            width: 9px;
            height: 9px;
          }
        }
      }
    }
  }

  .radio {
    position: relative;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .b-radio {
    padding: 15px;
    margin: 0 !important;
    cursor: pointer;
    outline: none;
    @media (max-width: 1199px) and (min-width: 992px) {
      padding-left: 5px;
    }

    & input[type=radio] {
      display: none;
    }
  }

  .answer {
    margin-left: 30px;
    font-size: 16px;
    font-family: 'MuseoCyrlRegular';
    color: #4a4a4a;
    @media (max-width: 1199px) and (min-width: 992px) {
      margin-left: 23px;
      font-size: 13px;
    }

    &__title {
      font-weight: 700;
    }
  }
}
</style>
