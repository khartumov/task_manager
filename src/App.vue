<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="less">
@import (css) url('https://fonts.googleapis.com/css2?family=Pangolin&display=swap');

body {
  background-color: #fff;
  background-image: linear-gradient(rgba(244,244,250,.8) 1px,transparent 0),
                    linear-gradient(#f4f4fa 1px,transparent 0),
                    linear-gradient(90deg,rgba(244,244,250,.8) 1px,transparent 0),
                    linear-gradient(90deg,#f4f4fa 1px,transparent 0),
                    linear-gradient(transparent 3px,#fff 0,#fff 94px,transparent 0),
                    linear-gradient(90deg,#f4f4fa 3px,transparent 0,transparent 94px,#f4f4fa 0);
  background-size: 24px 24px,96px 96px,24px 24px,96px 96px,96px 96px,96px 96px;
}

#app {
  font-family: 'Pangolin', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 37px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
}

.title {
  text-align: center;
}

// TODO: move to component
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
