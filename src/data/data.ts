export interface IArticle {
    title: string
    description: string
    image: string
}

export const DataArticle: IArticle[] = [
    {
        title: "Reduce Noise Pollution",
        description: "The electric engine in a car works with electricity which does not produce the noisy sound of an internal combustion engine.",
        image: "../image/noise.png"
    },
    {
        title: "Reduce Air Pollution",
        description: "Electric cars do not produce carbon dioxide emissions and other gases that contribute to global warming and climate change.",
        image: "../image/pollution.png"
    },
    {
        title: "Reduce the Use of Fuel",
        description: "Electric cars can reduce dependence on increasingly limited fuel oil.",
        image: "../image/fuel.png"
    }
]

export interface IBranding {
    id: number
    description: string
    count: string
}

export const DataBranding: IBranding[] = [
    {
        id: 1,
        description: "Vehicle Ready",
        count: "1000+"
    },
    {
        id: 2,
        description: "Office in the World",
        count: "30+"
    },
    {
        id: 3,
        description: "Year Warranty is Valid",
        count: "10+"
    },
    {
        id: 4,
        description: "Happy Customer",
        count: "400+"
    },
]
export interface ICarList {
    id: number
    merk: string
    type: string
    image: string
    price: number
    description: ICarDescription
}

export interface ICarDescription {
    dimention: IDimention
    motorAndPerformance: IMotorAndPerformance
    battery: string
    charging: ICharging
    interiorAndFeatures: string
}

export interface IDimention {
    length: string
    width: string
    height: string
    wheelbase: string
}

export interface IMotorAndPerformance {
    electricMotorPower: string
    torque: string
    maximumSpeed: string
    range: string
}

export interface ICharging {
    standardCharging: string
    fastCharging: string
}

export const DataCarList: ICarList[] = [
    {
        id: 1,
        merk: "Hyundai",
        type: "Kona Electric",
        image: "../image/hyundai-kona-electric.png",
        price: 750000000,
        description: {
            dimention: {
                length: "4,180 mm",
                width: "1,800 mm",
                height: "1,570 mm",
                wheelbase: "2,600 mm"
            },
            motorAndPerformance: {
                electricMotorPower: "Up to 150 kW (204 PS)",
                torque: "Up to 395 Nm",
                maximumSpeed: "Approximately 167 km/h (104 mph)",
                range: "Up to 484 km (301 miles) (WLTP cycle)"
            },
            battery: "Lithium-ion battery pack: Various capacities available (typically around 64 kWh)",
            charging: {
                standardCharging: "AC charging (Type 2 connector)",
                fastCharging: "DC fast charging (up to 100 kW)"
            },
            interiorAndFeatures: "Modern interior with tech features including touchscreen infotainment system, digital instrument cluster, and various driver assistance systems."
        }
    },
    {
        id: 2,
        merk: "Hyundai",
        type: "Ionic Electric",
        image: "../image/hyundai-ionic-electric.png",
        price: 682000000,
        description: {
            dimention: {
                length: "4,470 mm",
                width: "1,820 mm",
                height: "1,460 mm",
                wheelbase: "2,700 mm"
            },
            motorAndPerformance: {
                electricMotorPower: "Up to 100 kW (136 PS)",
                torque: "Up to 295 Nm",
                maximumSpeed: "Approximately 165 km/h (103 mph)",
                range: "Up to 311 km (193 miles) (WLTP cycle)"
            },
            battery: "Lithium-ion battery pack: 38.3 kWh",
            charging: {
                standardCharging: "AC charging (Type 2 connector)",
                fastCharging: "DC fast charging (up to 100 kW)"
            },
            interiorAndFeatures: "Comfortable and efficient interior design with ample cargo space and modern infotainment system."
        }
    },
    {
        id: 3,
        merk: "Hyundai",
        type: "Ionic 5",
        image: "../image/hyundai-ioniq-5.png",
        price: 720000000,
        description: {
            dimention: {
                length: "4,635 mm",
                width: "1,890 mm",
                height: "1,605 mm",
                wheelbase: "3,000 mm"
            },
            motorAndPerformance: {
                electricMotorPower: "Up to 225 kW (306 PS)",
                torque: "Up to 605 Nm",
                maximumSpeed: "Approximately 185 km/h (115 mph)",
                range: "Up to 481 km (WLTP cycle)"
            },
            battery: "Various battery options: 58 kWh and 72.6 kWh",
            charging: {
                standardCharging: "AC charging (Type 2 connector)",
                fastCharging: "DC fast charging (up to 350 kW)"
            },
            interiorAndFeatures: "Futuristic interior with adjustable seats and a spacious cabin, featuring advanced technology including augmented reality heads-up display (AR HUD) and a large touchscreen infotainment system."
        }
    },
    {
        id: 4,
        merk: "Wuling",
        type: "Hong Guang MINI EV",
        image: "../image/wuling-hongguang.png",
        price: 152000000,
        description: {
            dimention: {
                length: "2,917 mm",
                width: "1,493 mm",
                height: "1,621 mm",
                wheelbase: "1,940 mm"
            },
            motorAndPerformance: {
                electricMotorPower: "20 kW (approximately 27 horsepower)",
                torque: "-",
                maximumSpeed: "Approximately 100 km/h (about 62 mph)",
                range: "Varies, typically around 120-170 km (75-105 miles) on a single charge"
            },
            battery: "Lithium-ion battery pack",
            charging: {
                standardCharging: "AC charging (household socket)",
                fastCharging: "DC fast charging (up to 80% in about 50 minutes to 1 hour)"
            },
            interiorAndFeatures: "Basic interior suitable for urban commuting, seating for up to four passengers, minimalist design."
        }
    },
    {
        id: 5,
        merk: "Wuling",
        type: "Air EV",
        image: "../image/wuling-air-ev.png",
        price: 190000000,
        description: {
            dimention: {
                length: "4,150 mm",
                width: "1,740 mm",
                height: "1,600 mm",
                wheelbase: "2,620 mm"
            },
            motorAndPerformance: {
                electricMotorPower: "Up to 45 kW (approximately 61 horsepower)",
                torque: "-",
                maximumSpeed: "Approximately 120 km/h (about 75 mph)",
                range: "Up to 300 km (186 miles) on a single charge (NEDC cycle)"
            },
            battery: "Lithium-ion battery pack",
            charging: {
                standardCharging: "AC charging",
                fastCharging: "DC fast charging capability for quicker recharge times"
            },
            interiorAndFeatures: "Spacious interior with seating for up to five passengers. Modern infotainment system and connectivity features. Advanced driver assistance systems (ADAS) for enhanced safety"
        }
    },
    {
        id: 6,
        merk: "Lexus",
        type: "UX 300e",
        image: "../image/lexus-ux-300e.png",
        price: 1464000000,
        description: {
            dimention: {
                length: "4,495 mm",
                width: "1,840 mm",
                height: "1,545 mm",
                wheelbase: "2,640 mm"
            },
            motorAndPerformance: {
                electricMotorPower: "150 kW (204 PS)",
                torque: "300 Nm",
                maximumSpeed: "Approximately 160 km/h (99 mph)",
                range: "Up to 315 km (196 miles) on a single charge (WLTP cycle)"
            },
            battery: "Lithium-ion battery pack: 54.3 kWh",
            charging: {
                standardCharging: "AC charging (Type 2 connector)",
                fastCharging: "DC fast charging (up to 50 kW)"
            },
            interiorAndFeatures: "Premium interior with Lexus' signature craftsmanship and luxury amenities. Advanced infotainment system and driver assistance features"
        }
    },
    {
        id: 7,
        merk: "Mini Cooper",
        type: "SE (MINI Electric)",
        image: "../image/mini-cooper.png",
        price: 1024000000,
        description: {
            dimention: {
                length: "3,850 mm",
                width: "1,727 mm",
                height: "1,432 mm",
                wheelbase: "2,495 mm"
            },
            motorAndPerformance: {
                electricMotorPower: "135 kW (184 PS)",
                torque: "270 Nm",
                maximumSpeed: "Limited to 150 km/h (93 mph)",
                range: "Up to 230-270 km (143-168 miles) on a single charge"
            },
            battery: "Lithium-ion battery pack: 32.6 kWh usable capacity",
            charging: {
                standardCharging: "AC charging (Type 2 connector (up to 11 kW))",
                fastCharging: "DC fast charging (CCS Combo 2 (up to 50 kW))"
            },
            interiorAndFeatures: "Retains the iconic MINI design with a modern interior and premium materials. MINI Connected infotainment system with navigation and digital instrument cluster. Driver assistance systems and safety features typical of modern MINI models"
        }
    }
]

