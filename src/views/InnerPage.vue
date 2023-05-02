<template>
    <div class="inner-page py-5">
        <Loading v-if="loading"></Loading>
        <div v-else class="container">
            <router-link to="/" class="back-button btn px-4 p-1 fw-semibold mb-5">
                <span class="fs-5 me-1">&larr; </span>
                Back
            </router-link>
            <div class="country-details d-flex align-items-center py-5 justify-content-between gap-5"
                v-for="(country, index) in countryDetails" :key="index">
                <div class="left-side w-50">
                    <img class="w-100" :src="country.flags.svg" alt="">
                </div>
                <div class="right-side flex-fill">
                    <h2 class="country-name fw-bold mb-4">{{ country.name.common }}</h2>
                    <div class="inf-cont d-flex align-items-start mb-5 justify-content-between gap-4">
                        <div class="left-info w-100">
                            <div class="info-box mb-1">
                                <span class="fw-semibold">Native Name: </span>
                                <span>{{ Object.values(country.name.nativeName)[0].common }}</span>
                            </div>
                            <div class="info-box mb-1">
                                <span class="fw-semibold">Population: </span>
                                <span>{{ country.population.toLocaleString('en-US') }}</span>
                            </div>
                            <div class="info-box mb-1">
                                <span class="fw-semibold">Region: </span>
                                <span>{{ country.region }}</span>
                            </div>
                            <div class="info-box mb-1">
                                <span class="fw-semibold">Sub Region: </span>
                                <span>{{ country.subregion }}</span>
                            </div>
                            <div class="info-box d-flex gap-1">
                                <span class="fw-semibold">Capital: </span>
                                <div>
                                    <span v-if="!country.capital">Unknown</span>
                                    <span v-else>{{ country.capital.join(', ') }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="right-info w-100">
                            <div class="info-box mb-1 d-flex gap-1">
                                <span class="fw-semibold">Top Level Domain: </span>
                                <div>
                                    <span>{{ formatString(country.tld) }}</span>
                                </div>
                            </div>
                            <div class="info-box mb-1 d-flex gap-1">
                                <span class="fw-semibold">Currencies: </span>
                                <div>
                                    <span>{{ formatNameOfCurrency(country.currencies) }}</span>
                                </div>
                            </div>
                            <div class="info-box d-flex gap-1">
                                <span class="fw-semibold">Languages: </span>
                                <div>
                                    <span>{{ formatString(country.languages) }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="borders d-flex align-items-center gap-3">
                        <span class="fw-semibold">Border Countries: </span>
                        <div class="d-flex align-items-center gap-3 flex-wrap">
                            <span v-if="!country.borders">Unknown</span>
                            <span v-else class="border-country p-1 px-4" v-for="(border, index) in country.borders"
                                :key="index">
                                {{ border }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import Loading from '../components/Loading.vue';

const routes = useRoute()
const countryDetails = ref([])
const loading = ref(false)



const formatString = (obj) => {
    if (Array.isArray(obj)) {
        return obj.join(', ')
    } else {
        let newArr = Object.values(obj)
        return newArr.join(', ')
    }
}

const formatNameOfCurrency = (obj) => {
    let newArr = []
    Object.values(obj).forEach(el => newArr.push(el.name))
    return newArr.join(', ')
}

onMounted(async () => {
    loading.value = true
    await fetch(`https://restcountries.com/v3.1/name/${routes.params.countryName}`)
        .then(response => response.json())
        .then(data => {
            loading.value = false
            countryDetails.value = data
        })
})
</script>
<style lang="scss" scoped>
.inner-page {
    .btn {
        box-shadow: 0 2px 5px rgba(24, 24, 24, 0.137);
    }

    .country-details {
        .left-side {
            box-shadow: 0 2px 5px rgba(24, 24, 24, 0.137);

            img {
                object-fit: cover;
                min-width: 200px;
            }
        }

        .borders {
            &>div {
                flex-basis: 65%;
            }

            .border-country {
                box-shadow: 0 2px 5px rgba(24, 24, 24, 0.137);
            }
        }
    }

    @media (max-width: 767px) {
        .country-details {
            flex-direction: column;
            align-items: flex-start !important;

            .left-side {
                width: 100% !important;
            }

            .right-side {
                width: 100%;

                &>div {
                    flex-direction: column;
                }

                .inf-cont {
                    gap: 50px !important;

                    .info-box {
                        &:not(:last-child) {
                            margin-bottom: 10px !important;
                        }
                    }
                }

                .borders {
                    align-items: flex-start !important;

                    &>div {
                        align-self: center;
                    }
                }
            }
        }
    }
}
</style>