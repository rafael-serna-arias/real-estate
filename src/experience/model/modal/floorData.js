import FirstFloor from "@/assets/images/first-floor.webp"
import SecondFloor from "@/assets/images/second-floor.webp"
import ThirdFloor from "@/assets/images/third-floor.webp"
import RoofFloor from "@/assets/images/roof-floor.webp"

import PlanFloor1 from "@/assets/images/plan-floor-1.webp"
import PlanFloor2 from "@/assets/images/plan-floor-2.webp"
import PlanFloor3 from "@/assets/images/plan-floor-3.webp"
import PlanRoof from "@/assets/images/plan-roof.webp"






export const floorData = {
    1: {
        image: FirstFloor,
        tipologia: "A",
        title: "Floor 1",
        description: "Enjoy premium amenities within the building and convenient access to shopping, dining, parks, and essential services just minutes away.",
        area: "71",
        price: "150.000",
        plan: PlanFloor1
    
    },

    2: {
        image: SecondFloor,
        title: "Floor 2",
        tipologia: "B",
        description: "Enjoy premium amenities within the building and convenient access to shopping, dining, parks, and essential services just minutes away.",
        area: "66",
        price: "100.000",
        plan: PlanFloor2
    },

    3: {
        image: ThirdFloor,
        title: "Floor 2",
        tipologia: "C",
        description: "Enjoy premium amenities within the building and convenient access to shopping, dining, parks, and essential services just minutes away.",
        area: "66",
        price: "100.000",
        plan: PlanFloor3
    },

    4: {
        image: RoofFloor,
        title: "Floor 2",
        tipologia: "D",
        description: "Enjoy premium amenities within the building and convenient access to shopping, dining, parks, and essential services just minutes away.",
        area: "66",
        price: "100.000",
        plan: PlanRoof
    }
}