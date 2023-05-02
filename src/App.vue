<template>
  <main :class="`min-vh-100 ${mode === 'light' ? 'light' : 'dark'}`">
    <HeaderNav @change-mode="changeMode" :mode="mode"></HeaderNav>
    <router-view></router-view>
  </main>
</template>
<script setup>
import HeaderNav from './components/HeaderNav.vue'
import { ref, onMounted } from 'vue';

const mode = ref('light')

const changeMode = () => {
  if (mode.value === 'light') {
    mode.value = 'dark'
    localStorage.setItem('mode', mode.value)
  } else if (mode.value === 'dark') {
    mode.value = 'light'
    localStorage.setItem('mode', mode.value)
  }
}


onMounted(() => {
  if (localStorage.getItem('mode')) {
    mode.value = localStorage.getItem('mode')
  }
})

</script>
<style lang="scss" >
* {
  box-sizing: border-box;
}

:root {
  // ### Neutral
  --Dark-Blue-Dark-Mode-Elements: hsl(209, 23%, 22%);
  --Very-Dark-Blue-Dark-Mode-Background: hsl(207, 26%, 17%);

  --Very-Dark-Blue-Light-Mode-Text: hsl(200, 15%, 8%);
  --Dark-Gray-Light-Mode-Input: hsl(0, 0%, 52%);
  --Very-Light-Gray-Light-Mode-Background: hsl(0, 0%, 98%);

  --White-Dark-Mode-Text-And-Light-Mode-Elements: hsl(0, 0%, 100%);
}

body {
  font-family: 'Nunito Sans', sans-serif;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  color: initial;

  &:hover {
    color: initial;
  }
}

main {
  transition: 0.2s;

  &.light {
    background-color: var(--Very-Light-Gray-Light-Mode-Background);

    .loading {
      .circle {
        border: 15px solid var(--White-Dark-Mode-Text-And-Light-Mode-Elements);
      }
    }

    header {
      background-color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);

      h1 {
        color: var(--Very-Dark-Blue-Light-Mode-Text);
      }
    }

    .home-page {
      form {
        i {
          color: var(--Dark-Gray-Light-Mode-Input);
        }

        input {
          background-color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);

          &::placeholder {
            color: var(--Dark-Gray-Light-Mode-Input);
          }
        }

        .select-box {
          .drop-down {
            background-color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);

            span,
            i {
              color: var(--Very-Dark-Blue-Light-Mode-Text);
            }
          }

          .menu {
            background-color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);

            li {
              color: var(--Very-Dark-Blue-Light-Mode-Text);
            }
          }
        }
      }

      .the-countries {
        .box {
          background-color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);

          &:hover {
            box-shadow: 0 2px 10px rgba(75, 75, 75, 0.575);
          }

          .info {
            background-color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);
          }
        }

        .load-butn {
          background-color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);

          &:hover {
            background-color: var(--Dark-Blue-Dark-Mode-Elements);
            color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);
          }
        }
      }

      .scroll-to-top-butn {
        background-color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);

        &:hover {
          background-color: var(--Dark-Blue-Dark-Mode-Elements);
          color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);
        }
      }
    }

    .inner-page {
      .back-button {
        background-color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);

        &:hover {
          background-color: var(--Dark-Blue-Dark-Mode-Elements);
          color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);
        }
      }
    }
  }

  &.dark {
    background-color: var(--Very-Dark-Blue-Dark-Mode-Background);

    .loading {
      .circle {
        border: 15px solid var(--White-Dark-Mode-Text-And-Light-Mode-Elements);
      }
    }

    header {
      background-color: var(--Dark-Blue-Dark-Mode-Elements);

      h1 {
        color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);
      }

      .dark-light-butn {

        i,
        span {
          color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);
        }
      }
    }

    .home-page {
      form {
        i {
          color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);
        }

        input {
          background-color: var(--Dark-Blue-Dark-Mode-Elements);
          color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);
          transition: 0.2s;

          &::placeholder {
            color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);
          }
        }

        .select-box {
          transition: 0.2s;

          .drop-down {
            background-color: var(--Dark-Blue-Dark-Mode-Elements);
            transition: 0.2s;

            span,
            i {
              color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);
            }
          }

          .menu {
            background-color: var(--Dark-Blue-Dark-Mode-Elements);

            li {
              color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);
            }
          }
        }
      }

      .the-countries {
        .box {
          background-color: var(--Dark-Blue-Dark-Mode-Elements);

          &:hover {
            box-shadow: 0 2px 10px rgba(22, 22, 22, 0.938);
          }

          .info {
            transition: 0.2s;
            background-color: var(--Dark-Blue-Dark-Mode-Elements);

            h2,
            .info-box span {
              transition: 0.2s;
              color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);
            }
          }
        }

        .load-butn {
          background-color: var(--Dark-Blue-Dark-Mode-Elements);
          color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);

          &:hover {
            background-color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);
            color: var(--Very-Dark-Blue-Light-Mode-Text);
          }
        }
      }

      .scroll-to-top-butn {
        background-color: var(--Dark-Blue-Dark-Mode-Elements);
        color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);

        &:hover {
          background-color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);
          color: var(--Very-Dark-Blue-Light-Mode-Text);
        }
      }
    }

    .inner-page {
      color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);
      .back-button {
        background-color: var(--Dark-Blue-Dark-Mode-Elements);
        color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);

        &:hover {
          background-color: var(--White-Dark-Mode-Text-And-Light-Mode-Elements);
          color: var(--Very-Dark-Blue-Light-Mode-Text);
        }
      }
      .borders {
        .border-country {
          background-color: var(--Dark-Blue-Dark-Mode-Elements);
        }
      }
    }
  }
}
</style>