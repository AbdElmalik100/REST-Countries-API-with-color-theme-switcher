<template>
    <div class="home-page py-5">
        <div class="container">
            <form class="d-flex align-items-center justify-content-between" @submit.prevent>
                <div class="position-relative flex-fill">
                    <i class="search-icon fa-solid fa-magnifying-glass position-absolute"></i>
                    <input v-model="searchInput" class="search p-3 border-0 px-4 w-50 rounded-1" type="text"
                        placeholder="Search for a country...">
                </div>
                <div class="select-box position-relative">
                    <div @click="openMenu = !openMenu"
                        class="drop-down p-3 px-4 rounded-1 d-flex align-items-center gap-5 justify-content-between">
                        <span class="label d-block fw-semibold text-capitalize">{{ filterRegion === '' ? 'Filter By Region'
                            : filterRegion === 'americas' ? 'America' : filterRegion }}</span>
                        <i class="arrow-down fa-solid fa-chevron-down fa-sm"></i>
                    </div>
                    <ul :class="`menu w-100 d-flex flex-column position-absolute rounded-1 ${openMenu ? 'active' : ''}`">
                        <li class="fw-semibold" @click="filterRegion = 'africa'">Africa</li>
                        <li class="fw-semibold" @click="filterRegion = 'americas'">America</li>
                        <li class="fw-semibold" @click="filterRegion = 'asia'">Asia</li>
                        <li class="fw-semibold" @click="filterRegion = 'europe'">Europe</li>
                        <li class="fw-semibold" @click="filterRegion = 'oceania'">Oceania</li>
                    </ul>
                </div>
            </form>
            <div class="the-countries py-5 min-vh-100 position-relative">
                <Loading v-if="loading"></Loading>
                <div v-else class="row">
                    <div class="col-lg-3 col-md-4 mb-4 " v-for="(country, index) in filteration" :key="index">
                        <router-link :to="`/${country.name.common}`"
                            class="box d-block text-decoration-none rounded-1 h-100 position-relative">
                            <div class="img-cont">
                                <img class="img-fluid w-100 h-100" :src="country.flags.png" alt="">
                            </div>
                            <div class="info p-4 w-100">
                                <h2 class="country-name fw-bolder fs-6 mb-3">
                                    {{ country.name.common }}
                                </h2>
                                <div class="info-box population mb-1">
                                    <span class="fw-semibold">Population: </span>
                                    <span>{{ country.population.toLocaleString('en-US') }}</span>
                                    <!-- <span>{{ country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}</span> -->
                                </div>
                                <div class="info-box region mb-1">
                                    <span class="fw-semibold">Region: </span>
                                    <span>{{ country.region }}</span>
                                </div>
                                <div class="info-box capital d-flex gap-1">
                                    <span class="fw-semibold">Capital: </span>
                                    <div class="w-100 d-flex">
                                        <span v-if="!country.capital">Unknown</span>
                                        <span v-else>{{ country.capital.join(', ') }}</span>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="text-center mt-5" v-if="loadMore < mainCountries.length && loadMoreButton">
                    <button @click="loadMoreBtn" class="load-butn fw-semibold btn rounded-1 px-4 p-2">Load More</button>
                </div>
            </div>
            <ScrollToTop></ScrollToTop>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import Loading from '../components/Loading.vue';
import ScrollToTop from '../components/ScrollToTop.vue';

const openMenu = ref(false)
const filterRegion = ref('')
const searchInput = ref('')
const mainCountries = ref([])
const countries = ref([])
const loading = ref(false)
const loadMoreButton = ref(true)

const loadMore = ref(50)

let filteration = []

watch([searchInput, filterRegion], ([newVal, newVal2]) => {
    if (newVal !== '') {
        loadMoreButton.value = false
        filteration = computed(() => mainCountries.value.filter(el => el.name.common.toLowerCase().includes(searchInput.value) || el.name.common.includes(searchInput.value)))
    } else if (newVal2 !== '') {
        loadMoreButton.value = true
        filteration = computed(() => countries.value.filter(el => el.region.toLowerCase() === filterRegion.value))
    } else if (newVal === '') {
        loadMoreButton.value = true
        filteration = computed(() => countries.value)
    }
})




const loadMoreBtn = () => {
    let tempLoadMore = loadMore.value
    loadMore.value += 50
    if (loadMore.value === 250) {
        loadMore.value--
    }
    if (loadMore.value <= mainCountries.value.length) {
        for (let i = tempLoadMore; i < loadMore.value; i++) {
            countries.value.push(mainCountries.value[i])
        }
    }
}


onMounted(async () => {
    loading.value = true
    await fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            loading.value = false
            mainCountries.value = data
            for (let i = 0; i < loadMore.value; i++) {
                countries.value.push(mainCountries.value[i])
            }
            filteration = countries.value
            mainCountries.value = mainCountries.value.filter(el => el.name.common !== 'Israel')   // Fuck Israel ♥
        })
})


window.addEventListener('click', (e) => {
    if (e.target.classList[0] !== 'drop-down' && e.target.classList[0] !== 'menu' && e.target.classList[0] !== 'label' && e.target.classList[0] !== 'arrow-down') {
        openMenu.value = false
    }
})
</script>
<style lang="scss">
.home-page {
    form {

        input,
        .select-box,
        .menu {
            box-shadow: 0 2px 5px rgba(24, 24, 24, 0.137);
        }

        input {
            padding-left: 60px !important;
            outline: none;
        }

        i.search-icon {
            top: 50%;
            transform: translateY(-50%);
            left: 25px;
        }

        .select-box {
            width: 227px;

            .drop-down {
                cursor: pointer;

                span,
                i {
                    user-select: none;
                }
            }

            .menu {
                left: 0;
                top: 50px;
                opacity: 0;
                z-index: -1;
                transition: 0.2s;

                &.active {
                    top: 62px;
                    opacity: 1;
                    z-index: 15555;
                }

                li {
                    cursor: pointer;
                    transition: 0.2s;
                    padding: 8px 24px;

                    &:hover {
                        transform: translateX(15px);
                    }
                }
            }
        }
    }

    .the-countries {
        a.box {
            box-shadow: 0 2px 5px rgba(24, 24, 24, 0.137);
            cursor: pointer;
            transition: 0.2s;

            &:hover {
                transform: scale(1.05);
            }

            .img-cont {
                height: 150px;

                img {
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                    object-fit: cover;
                }
            }

            .info {
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;
            }
        }

        .load-butn {
            box-shadow: 0 2px 5px rgba(24, 24, 24, 0.137);
            transition: 0.2s;
        }
    }

    @media (max-width: 767px) {
        form {
            flex-direction: column;
            gap: 25px;
            align-items: start !important;

            &>div:first-child,
            input {
                width: 100% !important;
            }
        }

        .the-countries {
            .box {
                width: 80%;
                margin: auto;
            }
        }
    }
}
</style>