<template>
  <component
    :is="routableTag"
    :to="routableTag === 'router-link' ? to : false"
    :id="id"
    :class="buttonClasses"
  >
    <b-icon
      :icon="icon"
      :class="iconClasses"
      font-scale="2"
    />
    <b-tooltip
      v-if="tooltip"
      :target="`${id}`"
      triggers="hover"
    >
      {{ tooltip }}
    </b-tooltip>
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: [String, Object],
      default: ''
    },
    tooltip: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    isBack: {
      type: Boolean,
      default: false
    },
    isGrey: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      id: null
    }
  },

  computed: {
    routableTag () {
      return this.to ? 'router-link' : 'button'
    },

    isLink () {
      return this.routableTag() === 'router-link'
    },

    buttonClasses () {
      return {
        'round-button': true,
        'round-button_back': this.isBack,
        'round-button_grey': this.isGrey
      }
    },

    iconClasses () {
      return {
        'round-button__icon': true,
        'round-button__icon_grey': this.isGrey
      }
    }
  },

  mounted () {
    this.id = this._uid
  }
}
</script>

<style lang="less">
.round-button {
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 40px;
  right: 40px;
  background: #2c3e50;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  transition: all 0.3s;

  @media (max-width: 768px) {
    height: 45px;
    width: 50%;
    border-radius: 0;
    bottom: 0;
    right: 0;
  }

  &_back {
    right: auto;
    left: 40px;

    @media (max-width: 768px) {
      left: 0;
    }
  }

  &_grey {
    background: #f5f5f5;
    border: 1px solid #2c3e50;
  }

  &:hover {
    box-shadow: 0 0 20px 0 rgba(50, 50, 50, 0.75);
    transform: scale(1.03);
  }

  &__icon {
    color: #fff;

    &_grey {
      color: #2c3e50;
    }
  }
}
</style>
