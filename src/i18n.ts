
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: {
                dont: "Don't ",
                damage: "Damage ",
                title: "Nature with Your Car ",
                subtitle: "Change Your Old Car to an Electric Car ",
                now: "Now ",
                available: "We Have More than 1.000 Electric Car Available",
                contact: "Contact Us",
                why: "Why Electric Car?",
                whyUs: "Why Us?",
                because:
                    "Our mission is to provide sustainable and convenient transportion option to our customers ",
                findThe: "Find the ",
                bestDeal: "Best Deal ",
                forYou: "For You s",
                check: "Check ",
                shippingCost: "Shipping Cost ",
                from: "From ",
                to: "To ",
                estimation: "Estimation ",
                chooseProvince: "Choose Province ",
                chooseCity: "Choose City ",
                service: "Service ",
                description: "Description ",
                estimationCost: "Estimation Cost ",
                etd: "Estimation ETD ",
                carWeight: "*Estimation Car Weight = 2.700 kg ",
                courier: "*Service Available = JNE ",
                checkCost: "Check ",
                findUs: "Find Us ",
                contactUs: "Contact Us "
            },
        },
        ind: {
            translation: {
                dont: "Jangan ",
                damage: "Rusak ",
                title: "Alam dengan Mobilmu ",
                subtitle: "Ganti Mobil Lamamu dengan Mobil Listrik ",
                now: "Sekarang ",
                available: "Kami punya lebih dari 1.000 Mobil Listrik yang Tersedia ",
                contact: "Hubungi Kami ",
                why: "Kenapa Harus Pilih Mobil Listrik? ",
                whyUs: "Kenapa Pilih Kami? ",
                because:
                    "Misi kami adalah menyediakan pilihan transportasi yang berkelanjutan dan nyaman bagi pelanggan kami ",
                findThe: "Temukan ",
                bestDeal: "Penawaran Terbaik ",
                forYou: "Untukmu ",
                check: "Cek ",
                shippingCost: "Tarif Ongkir ",
                from: "Asal Kota ",
                to: "Kota Tujuan ",
                estimation: "Estimasi ",
                chooseProvince: "Pilih Provinsi ",
                chooseCity: "Pilih Kota ",
                service: "Layanan ",
                description: "Deskripsi ",
                estimationCost: "Estimasi Biaya ",
                etd: "Estimasi ETD ",
                carWeight: "*Estimati Berat Mobil = 2.700 kg",
                courier: "*Layanan Tersedia = JNE ",
                checkCost: "Cek Tarif ",
                findUs: "Termukan Kami ",
                contactUs: "Hubungi Kami "
            },
        },
    },
});

export default i18n;
