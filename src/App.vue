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
@font-face {
  font-family: 'Pangolin';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Pangolin Regular'), local('Pangolin-Regular'), url(https://fonts.gstatic.com/s/pangolin/v5/cY9GfjGcW0FPpi-tWMfA79z4i6BHFpY.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
@font-face {
  font-family: 'Pangolin';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Pangolin Regular'), local('Pangolin-Regular'), url(https://fonts.gstatic.com/s/pangolin/v5/cY9GfjGcW0FPpi-tWMfJ79z4i6BHFpY.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: 'Pangolin';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Pangolin Regular'), local('Pangolin-Regular'), url(https://fonts.gstatic.com/s/pangolin/v5/cY9GfjGcW0FPpi-tWMfC79z4i6BHFpY.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: 'Pangolin';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Pangolin Regular'), local('Pangolin-Regular'), url(https://fonts.gstatic.com/s/pangolin/v5/cY9GfjGcW0FPpi-tWMfD79z4i6BHFpY.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Pangolin';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Pangolin Regular'), local('Pangolin-Regular'), url(https://fonts.gstatic.com/s/pangolin/v5/cY9GfjGcW0FPpi-tWMfN79z4i6BH.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

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
