export const dataListProvince = {
    "rajaongkir": {
        "query": [],
        "status": {
            "code": 200,
            "description": "OK"
        },
        "results": [
            {
                "province_id": "1",
                "province": "Bali"
            },
            {
                "province_id": "2",
                "province": "Bangka Belitung"
            },
            {
                "province_id": "3",
                "province": "Banten"
            },
            {
                "province_id": "4",
                "province": "Bengkulu"
            },
            {
                "province_id": "5",
                "province": "DI Yogyakarta"
            },
            {
                "province_id": "6",
                "province": "DKI Jakarta"
            },
            {
                "province_id": "7",
                "province": "Gorontalo"
            },
            {
                "province_id": "8",
                "province": "Jambi"
            },
            {
                "province_id": "9",
                "province": "Jawa Barat"
            },
            {
                "province_id": "10",
                "province": "Jawa Tengah"
            },
            {
                "province_id": "11",
                "province": "Jawa Timur"
            },
            {
                "province_id": "12",
                "province": "Kalimantan Barat"
            },
            {
                "province_id": "13",
                "province": "Kalimantan Selatan"
            },
            {
                "province_id": "14",
                "province": "Kalimantan Tengah"
            },
            {
                "province_id": "15",
                "province": "Kalimantan Timur"
            },
            {
                "province_id": "16",
                "province": "Kalimantan Utara"
            },
            {
                "province_id": "17",
                "province": "Kepulauan Riau"
            },
            {
                "province_id": "18",
                "province": "Lampung"
            },
            {
                "province_id": "19",
                "province": "Maluku"
            },
            {
                "province_id": "20",
                "province": "Maluku Utara"
            },
            {
                "province_id": "21",
                "province": "Nanggroe Aceh Darussalam (NAD)"
            },
            {
                "province_id": "22",
                "province": "Nusa Tenggara Barat (NTB)"
            },
            {
                "province_id": "23",
                "province": "Nusa Tenggara Timur (NTT)"
            },
            {
                "province_id": "24",
                "province": "Papua"
            },
            {
                "province_id": "25",
                "province": "Papua Barat"
            },
            {
                "province_id": "26",
                "province": "Riau"
            },
            {
                "province_id": "27",
                "province": "Sulawesi Barat"
            },
            {
                "province_id": "28",
                "province": "Sulawesi Selatan"
            },
            {
                "province_id": "29",
                "province": "Sulawesi Tengah"
            },
            {
                "province_id": "30",
                "province": "Sulawesi Tenggara"
            },
            {
                "province_id": "31",
                "province": "Sulawesi Utara"
            },
            {
                "province_id": "32",
                "province": "Sumatera Barat"
            },
            {
                "province_id": "33",
                "province": "Sumatera Selatan"
            },
            {
                "province_id": "34",
                "province": "Sumatera Utara"
            }
        ]
    }
}

export const dataListCity = {
    "rajaongkir": {
        "query": {
            "province": "1"
        },
        "status": {
            "code": 200,
            "description": "OK"
        },
        "results": [
            {
                "city_id": "17",
                "province_id": "1",
                "province": "Bali",
                "type": "Kabupaten",
                "city_name": "Badung",
                "postal_code": "80351"
            },
            {
                "city_id": "32",
                "province_id": "1",
                "province": "Bali",
                "type": "Kabupaten",
                "city_name": "Bangli",
                "postal_code": "80619"
            },
            {
                "city_id": "94",
                "province_id": "1",
                "province": "Bali",
                "type": "Kabupaten",
                "city_name": "Buleleng",
                "postal_code": "81111"
            },
            {
                "city_id": "114",
                "province_id": "1",
                "province": "Bali",
                "type": "Kota",
                "city_name": "Denpasar",
                "postal_code": "80227"
            },
            {
                "city_id": "128",
                "province_id": "1",
                "province": "Bali",
                "type": "Kabupaten",
                "city_name": "Gianyar",
                "postal_code": "80519"
            },
            {
                "city_id": "161",
                "province_id": "1",
                "province": "Bali",
                "type": "Kabupaten",
                "city_name": "Jembrana",
                "postal_code": "82251"
            },
            {
                "city_id": "170",
                "province_id": "1",
                "province": "Bali",
                "type": "Kabupaten",
                "city_name": "Karangasem",
                "postal_code": "80819"
            },
            {
                "city_id": "197",
                "province_id": "1",
                "province": "Bali",
                "type": "Kabupaten",
                "city_name": "Klungkung",
                "postal_code": "80719"
            },
            {
                "city_id": "447",
                "province_id": "1",
                "province": "Bali",
                "type": "Kabupaten",
                "city_name": "Tabanan",
                "postal_code": "82119"
            }
        ]
    }
}

export const dataCost = {
    "rajaongkir": {
        "query": {
            "origin": "501",
            "destination": "114",
            "weight": 1700,
            "courier": "jne"
        },
        "status": {
            "code": 200,
            "description": "OK"
        },
        "origin_details": {
            "city_id": "501",
            "province_id": "5",
            "province": "DI Yogyakarta",
            "type": "Kota",
            "city_name": "Yogyakarta",
            "postal_code": "55111"
        },
        "destination_details": {
            "city_id": "114",
            "province_id": "1",
            "province": "Bali",
            "type": "Kota",
            "city_name": "Denpasar",
            "postal_code": "80227"
        },
        "results": [
            {
                "code": "jne",
                "name": "Jalur Nugraha Ekakurir (JNE)",
                "costs": [
                    {
                        "service": "JTR",
                        "description": "JNE Trucking",
                        "cost": [
                            {
                                "value": 70000,
                                "etd": "5-6",
                                "note": ""
                            }
                        ]
                    },
                    {
                        "service": "REG",
                        "description": "Layanan Reguler",
                        "cost": [
                            {
                                "value": 46000,
                                "etd": "2-3",
                                "note": ""
                            }
                        ]
                    }
                ]
            }
        ]
    }
}