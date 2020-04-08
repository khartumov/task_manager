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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;
}

.title {
  text-align: center;
}

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
    width: 45px;
  }

  &_back {
    right: auto;
    left: 40px;
  }

  &:hover {
    box-shadow: 0 0 20px 0 rgba(50, 50, 50, 0.75);
    transform: scale(1.03);
  }

  &__icon {
    color: #fff;
  }
}
</style>
