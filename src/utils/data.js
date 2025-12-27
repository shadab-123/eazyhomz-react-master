import { ROUTES } from "./constants";
import { useTranslation } from "react-i18next";

// Navbar and Footer
export const COMPANY_NAME_1 = "Eazyhomz";
export const COMPANY_NAME_2 = ".";
export const COPYRIGHT = "Copyright @ All Rights Reserved";
export const NAVLINKS = ['places', 'about']

export const NAV_ROUTE_LINK = () => {
    const { t } = useTranslation();
    const NAV_ROUTE_LINKS = [
        {
            text: t('NAV_ROUTE_LINKS.DASHBOARD'),
            to: ROUTES.DASHBOARD,
            nestedLinks: [],
            havingNestedRoute: false,
            isDisable:false
        },
        {
            text: t('NAV_ROUTE_LINKS.ARCHITECTURE'),
            to: ROUTES.LIVING_AREA,
            nestedLinks: [],
            havingNestedRoute: false,
            isDisable:true
        },
        {
            text: t('NAV_ROUTE_LINKS.INTERIOR'),
            to: ROUTES.INTERIOR,
            nestedLinks: [
                {
                    text: t('NAV_ROUTE_LINKS.FULL_HOME_INTERIOR'),
                    to: ROUTES.KITCHEN,
                    nestedLinks: [],
                    havingNestedRoute: false
                },
                {
                    text: t('NAV_ROUTE_LINKS.BEDROOM_IDEAS'),
                    to: ROUTES.BEDROOM,
                    nestedLinks: [],
                    havingNestedRoute: false
                },
                {
                    text: t('NAV_ROUTE_LINKS.KITCHEN_IDEAS'),
                    to: ROUTES.KITCHEN,
                    nestedLinks: [],
                    havingNestedRoute: false
                },
                {
                    text: t('NAV_ROUTE_LINKS.BATHROOM_IDEAS'),
                    to: ROUTES.BATHROOM,
                    nestedLinks: [],
                    havingNestedRoute: false
                },
                {
                    text: t('NAV_ROUTE_LINKS.KIDS_ROOM_DESIGN'),
                    to: ROUTES.KIDS_ROOM,
                    nestedLinks: [],
                    havingNestedRoute: false
                },
                {
                    text: t('NAV_ROUTE_LINKS.STUDY_ROOM_DESIGN'),
                    to: ROUTES.STUDY_ROOM,
                    nestedLinks: [],
                    havingNestedRoute: false
                },
                // {
                //     text: t('NAV_ROUTE_LINKS.TV_UNIT_DESIGN'),
                //     to: ROUTES.TV_UNIT,
                //     nestedLinks: [],
                //     havingNestedRoute: false
                // },
                // {
                //     text: t('NAV_ROUTE_LINKS.WARDROBE_DESIGN'),
                //     to: ROUTES.WARDROBE,
                //     nestedLinks: [],
                //     havingNestedRoute: false
                // }
            ],
            havingNestedRoute: true

        },

        {
            text: t('NAV_ROUTE_LINKS.LANDSCAPE'),
            to: ROUTES.KITCHEN,
            nestedLinks: [],
            havingNestedRoute: false,
            isDisable:true
        },
        // {
        //     text: t('NAV_ROUTE_LINKS.BIM_Solution'),
        //     to: ROUTES.BEDROOM,
        //     nestedLinks: [],
        //     havingNestedRoute: false
        // },
        
        {
            text: t('NAV_ROUTE_LINKS.E_MODULAR'),
            to: ROUTES.E_MODULAR,
             nestedLinks: [
                {
                    text: t('NAV_ROUTE_LINKS.TV_UNIT_DESIGN'),
                    to: ROUTES.TV_UNIT,
                    nestedLinks: [],
                    havingNestedRoute: false
                },
                {
                    text: t('NAV_ROUTE_LINKS.WARDROBE_DESIGN'),
                    to: ROUTES.WARDROBE,
                    nestedLinks: [],
                    havingNestedRoute: false
                }
            ],
            havingNestedRoute: true,
            isDisable:false
        },
        // {
        //     text: t('NAV_ROUTE_LINKS.JOIN_US'),
        //     to: ROUTES.BATHROOM,
        //     nestedLinks: [],
        //     havingNestedRoute: false
        // },
    ]
    return NAV_ROUTE_LINKS;
}


export const DASHBOARD_DATA = {
    HERO_SECTION: {
        HEADING1: "Dream",
        HEADING2: "Design",
        HEADING3: "Build",
    },
    WHY_US: {
        HEADING: "Why Eazyhomz",
        WHY_US_CARD_DATA: [
            {
                id: "1",
                logoPath: "/assets/images/globe_icon.svg",
                text: 'Get your keys in 45 days*',
            },
            {
                id: "2",
                logoPath: "/assets/images/why-us-2.png",
                text: 'Transparent Price',
            },
            {
                id: "3",
                logoPath: "/assets/images/why-us-3.png",
                text: 'Personalised Design',
            },
            {
                id: "4",
                logoPath: "/assets/images/why-us-4.png",
                text: 'Flat 5 Year Warranty*',
            },
            {
                id: "5",
                logoPath: "/assets/images/why-us-5.png",
                text: 'No Hidden Cost',
            },
        ],
    },
    HOME_DESIGN_DATA: {
        HEADING: "Home Design Made Eazy",
        SUB_HEADING: "When you give your home the Eazyhomz touch, you get both beauty from functionality. We employ state-of-the-art technology to ensure your features a flawless look that lasts a very long time.",
        BUTTON_TEXT: "Book Free Consultation",
    },
    INTERIOR_NEEDS: {
        HEADING: "One stop solution for all your home interior needs​",
        SUB_HEADING: "Your all-in-one destination for exceptional interior design and renovation solutions. With our expert team of designers, architects, and craftsmen, we offer a seamless process from concept to completion. Whether you’re seeking a modern update or a complete transformation, we’re here to bring your vision to life.",
        CARD_SLIDER_DATA: [
            {
                IMAGE_PATH: '/assets/images/img1.jpg',
                HEADING: "Modular Solution",
                SUB_HEADING: "Kitchen Wardrobe & service storage",
                BUTTON_TEXT: "View More",
            },
            {
                IMAGE_PATH: '/assets/images/img1.jpg',
                HEADING: "Modular Solution",
                SUB_HEADING: "Kitchen Wardrobe & service storage",
                BUTTON_TEXT: "View More",
            },
            {
                IMAGE_PATH: '/assets/images/img1.jpg',
                HEADING: "Modular Solution",
                SUB_HEADING: "Kitchen Wardrobe & service storage",
                BUTTON_TEXT: "View More",
            },
            {
                IMAGE_PATH: '/assets/images/img1.jpg',
                HEADING: "Modular Solution",
                SUB_HEADING: "Kitchen Wardrobe & service storage",
                BUTTON_TEXT: "View More",
            },

        ]
    },
    DESIGN_INSPIRATION: {
        HEADING: "Home design inspiration​",
        SUB_HEADING: "Elevate your space with timeless elegance and modern flair through our inspired interior design concepts.",
        IMAGE_SLIDER_DATA_1: {
            IMAGE_PATHS: [
                "/assets/images/living%20room/Living%20Room%20Design%201.jpg",
                "/assets/images/living%20room/Living%20Room%20Design%202.jpg",
                "/assets/images/living%20room/Living%20Room%20Design%203.jpg",
                "/assets/images/living%20room/Living%20Room%20Design%204.jpg",
                "/assets/images/living%20room/Living%20Room%20Design%205.jpg",
                "/assets/images/living%20room/Living%20Room%20Design%206.jpg",
                "/assets/images/living%20room/Living%20Room%20Design%207.jpg",
                "/assets/images/living%20room/Living%20Room%20Design%208.jpg",
                "/assets/images/living%20room/Living%20Room%20Design%209.jpg",
                "/assets/images/living%20room/Living%20Room%20Design%2010.jpg",
                "/assets/images/living%20room/Living%20Room%20Design%2011.jpg",
                "/assets/images/living%20room/Living%20Room%20Design%2012.jpg",
                "/assets/images/living%20room/Living%20Room%20Design%2013.jpg",
                "/assets/images/living%20room/Living%20Room%20Design%2014.jpg",
                "/assets/images/living%20room/Living%20Room%20Design%2015.jpg",
            ],
            IMAGE_SLIDER_HEADING: "Living Area"
        },
        IMAGE_SLIDER_DATA_2: {
            IMAGE_PATHS: [
                "/assets/images/kitchen/Kitchen%20Design%201.jpg",
                "/assets/images/kitchen/Kitchen%20Design%202.jpg",
                "/assets/images/kitchen/Kitchen%20Design%203.jpg",
                "/assets/images/kitchen/Kitchen%20Design%204.jpg",
                "/assets/images/kitchen/Kitchen%20Design%205.jpg",
                "/assets/images/kitchen/Kitchen%20Design%206.jpg",
                "/assets/images/kitchen/Kitchen%20Design%207.jpg",
                "/assets/images/kitchen/Kitchen%20Design%208.jpg",
                "/assets/images/kitchen/Kitchen%20Design%209.jpg",
                "/assets/images/kitchen/Kitchen%20Design%2010.jpg",
                "/assets/images/kitchen/Kitchen%20Design%2011.jpg",
                "/assets/images/kitchen/Kitchen%20Design%2012.jpg",
                "/assets/images/kitchen/Kitchen%20Design%2013.jpg",
                "/assets/images/kitchen/Kitchen%20Design%2014.jpg",
                "/assets/images/kitchen/Kitchen%20Design%2015.jpg",
            ],
            IMAGE_SLIDER_HEADING: "Kitchen"
        },
        IMAGE_SLIDER_DATA_3: {
            IMAGE_PATHS: [
                "/assets/images/bedroom/Bedroom%20Design%201.jpg",
                "/assets/images/bedroom/Bedroom%20Design%202.jpg",
                "/assets/images/bedroom/Bedroom%20Design%203.jpeg",
                "/assets/images/bedroom/Bedroom%20Design%204.jpg",
                "/assets/images/bedroom/Bedroom%20Design%205.jpg",
                "/assets/images/bedroom/Bedroom%20Design%206.jpg",
                "/assets/images/bedroom/Bedroom%20Design%207.jpg",
                "/assets/images/bedroom/Bedroom%20Design%208.jpg",
                "/assets/images/bedroom/Bedroom%20Design%209.jpg",
                "/assets/images/bedroom/Bedroom%20Design%2010.jpg",
                "/assets/images/bedroom/Bedroom%20Design%2011.jpg",
                "/assets/images/bedroom/Bedroom%20Design%2012.jpg",
                "/assets/images/bedroom/Bedroom%20Design%2013.jpg",
                "/assets/images/bedroom/Bedroom%20Design%2014.jpg",
                "/assets/images/bedroom/Bedroom%20Design%2015.jpg",
            ],
            IMAGE_SLIDER_HEADING: "Bedroom"
        },
        IMAGE_SLIDER_DATA_4: {
            IMAGE_PATHS: [
                "/assets/images/bathroom/Bathroom%20Design%201.jpg",
                "/assets/images/bathroom/Bathroom%20Design%202.jpg",
                "/assets/images/bathroom/Bathroom%20Design%203.jpg",
                "/assets/images/bathroom/Bathroom%20Design%204.jpg",
                "/assets/images/bathroom/Bathroom%20Design%205.jpg",
                "/assets/images/bathroom/Bathroom%20Design%206.jpg",
                "/assets/images/bathroom/Bathroom%20Design%207.jpg",
                "/assets/images/bathroom/Bathroom%20Design%208.jpg",
                "/assets/images/bathroom/Bathroom%20Design%209.jpg",
                "/assets/images/bathroom/Bathroom%20Design%2010.jpg",
                "/assets/images/bathroom/Bathroom%20Design%2011.jpg",
                "/assets/images/bathroom/Bathroom%20Design%2012.jpg",
                "/assets/images/bathroom/Bathroom%20Design%2013.jpg",
                "/assets/images/bathroom/Bathroom%20Design%2014.jpg",
                "/assets/images/bathroom/Bathroom%20Design%2015.jpg",
            ],
            IMAGE_SLIDER_HEADING: "Bathroom"
        },
        IMAGE_SLIDER_DATA_5: {
            IMAGE_PATHS: [
                "/assets/images/wardrobe/Wardrobe%20Design%201.jpg",
                "/assets/images/wardrobe/Wardrobe%20Design%202.jpg",
                "/assets/images/wardrobe/Wardrobe%20Design%203.jpg",
                "/assets/images/wardrobe/Wardrobe%20Design%204.jpg",
                "/assets/images/wardrobe/Wardrobe%20Design%205.jpg",
                "/assets/images/wardrobe/Wardrobe%20Design%206.jpg",
                "/assets/images/wardrobe/Wardrobe%20Design%207.jpg",
                "/assets/images/wardrobe/Wardrobe%20Design%208.jpg",
                "/assets/images/wardrobe/Wardrobe%20Design%209.jpg",
                "/assets/images/wardrobe/Wardrobe%20Design%2010.jpg",
                "/assets/images/wardrobe/Wardrobe%20Design%2011.jpg",
                "/assets/images/wardrobe/Wardrobe%20Design%2012.jpg",
                "/assets/images/wardrobe/Wardrobe%20Design%2013.jpg",
                "/assets/images/wardrobe/Wardrobe%20Design%2014.jpg",
                "/assets/images/wardrobe/Wardrobe%20Design%2015.jpg",
            ],
            IMAGE_SLIDER_HEADING: "Wardrobe"
        },
        IMAGE_SLIDER_DATA_6: {
            IMAGE_PATHS: [
                "/assets/images/img1.jpg",
                "/assets/images/img2.jpg",
                "/assets/images/img3.jpg"
            ],
            IMAGE_SLIDER_HEADING: "Emodular"
        }
    },
    ESTIMATION_SECTION: {
        HEADING: "Get the estimate for your Home​",
        SUB_HEADING: "Calculate the approximate cost of doing up your home interiors.",
        ESTIMATION_DATA: [
            {
                id: "1",
                heading: "Full Home Interiors",
                logoPath: "/assets/images/interior1.png",
                text: 'Get estimate for your full home interior',
                buttonText: "Get Free Estimation"
            },
            {
                id: "2",
                heading: "Kitchen",
                logoPath: "/assets/images/interior2.png",
                text: 'Get estimate for your full kitchen interior',
                buttonText: "Get Free Estimation"
            },
            {
                id: "3",
                heading: "Washroom",
                logoPath: "/assets/images/interior3.png",
                text: 'Get estimate for your full washroom interior',
                buttonText: "Get Free Estimation"
            },
            {
                id: "4",
                heading: "Wardrobe",
                logoPath: "/assets/images/interior4.png",
                text: 'Get estimate for your full wardroom interior',
                buttonText: "Get Free Estimation"
            },
        ],
    },
    STEPS_SECTION: {
        HEADING: "Home Interiors in Eazy Steps",
        STEP_CARDS: [
            {
                id: '1',
                image: "/assets/images/step-1.jpg",
                heading: "Dream",
                subHeading: "Get in touch with our design experts & tell us your design requirements"
            },
            {
                id: '2',
                image: "/assets/images/step-2.png",
                heading: "Design",
                subHeading: "Our experts will give you best design solution as per your need & budget."
            },
            {
                id: '3',
                image: "/assets/images/step-3.png",
                heading: "Build",
                subHeading: "Transition seamlessly into your new space with our hassle-free services."
            },
        ]
    }
}

export const FOOTER_DATA = {
    HEADING: "Eazyhomz",
    ADDRESS_DATA: {
        mail: "care@eazyhomz.com",
        phone1: "+971 563163635",
        phone2: "+91 8376091234",
        address1: "Dubai, UAE",
        address2: "Delhi, India"
    }
}


//Bedroom-data

export const BEDROOM_DATAS = () => {
    const { t } = useTranslation();
    const BEDROOM_DATA = {
        HEADING: t('BEDROOM_DATA.HEADING'),
        SUB_HEADING: t('BEDROOM_DATA.SUB_HEADING'),
        BEDROOM_CARD_DATA: [
            {
                id: "1",
                category: "bedroom",
                logoPath: "/assets/images/bedroom/Bedroom%20Design%201.jpg",
                text: t('BEDROOM_DATA.CARD_TEXT', { number: 1 }),
                buttonText: t('BEDROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "2",
                category: "bedroom",
                logoPath: "/assets/images/bedroom/Bedroom%20Design%202.jpg",
                text: t('BEDROOM_DATA.CARD_TEXT', { number: 2 }),
                buttonText: t('BEDROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "3",
                category: "bedroom",
                logoPath: "/assets/images/bedroom/Bedroom%20Design%203.jpeg",
                text: t('BEDROOM_DATA.CARD_TEXT', { number: 3 }),
                buttonText: t('BEDROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "4",
                category: "bedroom",
                logoPath: "/assets/images/bedroom/Bedroom%20Design%204.jpg",
                text: t('BEDROOM_DATA.CARD_TEXT', { number: 4 }),
                buttonText: t('BEDROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "5",
                category: "bedroom",
                logoPath: "/assets/images/bedroom/Bedroom%20Design%205.jpg",
                text: t('BEDROOM_DATA.CARD_TEXT', { number: 5 }),
                buttonText: t('BEDROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "6",
                category: "bedroom",
                logoPath: "/assets/images/bedroom/Bedroom%20Design%206.jpg",
                text: t('BEDROOM_DATA.CARD_TEXT', { number: 6 }),
                buttonText: t('BEDROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "7",
                category: "bedroom",
                logoPath: "/assets/images/bedroom/Bedroom%20Design%207.jpg",
                text: t('BEDROOM_DATA.CARD_TEXT', { number: 7 }),
                buttonText: t('BEDROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "8",
                category: "bedroom",
                logoPath: "/assets/images/bedroom/Bedroom%20Design%208.jpg",
                text: t('BEDROOM_DATA.CARD_TEXT', { number: 8 }),
                buttonText: t('BEDROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "9",
                category: "bedroom",
                logoPath: "/assets/images/bedroom/Bedroom%20Design%209.jpg",
                text: t('BEDROOM_DATA.CARD_TEXT', { number: 9 }),
                buttonText: t('BEDROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "10",
                category: "bedroom",
                logoPath: "/assets/images/bedroom/Bedroom%20Design%2010.jpg",
                text: t('BEDROOM_DATA.CARD_TEXT', { number: 10 }),
                buttonText: t('BEDROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "11",
                category: "bedroom",
                logoPath: "/assets/images/bedroom/Bedroom%20Design%2011.jpg",
                text: t('BEDROOM_DATA.CARD_TEXT', { number: 11 }),
                buttonText: t('BEDROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "12",
                category: "bedroom",
                logoPath: "/assets/images/bedroom/Bedroom%20Design%2012.jpg",
                text: t('BEDROOM_DATA.CARD_TEXT', { number: 12 }),
                buttonText: t('BEDROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "13",
                category: "bedroom",
                logoPath: "/assets/images/bedroom/Bedroom%20Design%2013.jpg",
                text: t('BEDROOM_DATA.CARD_TEXT', { number: 13 }),
                buttonText: t('BEDROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "14",
                category: "bedroom",
                logoPath: "/assets/images/bedroom/Bedroom%20Design%2014.jpg",
                text: t('BEDROOM_DATA.CARD_TEXT', { number: 14 }),
                buttonText: t('BEDROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "15",
                category: "bedroom",
                logoPath: "/assets/images/bedroom/Bedroom%20Design%2015.jpg",
                text: t('BEDROOM_DATA.CARD_TEXT', { number: 15 }),
                buttonText: t('BEDROOM_DATA.BUTTON_TEXT')
            }
        ]
    }
    return BEDROOM_DATA
}

//kitchen-data
export const KITCHEN_DATAS = () => {
    const { t } = useTranslation();
    const KITCHEN_DATA = {
        HEADING: t('KITCHEN_DATA.HEADING'),
        SUB_HEADING: t('KITCHEN_DATA.SUB_HEADING'),
        KITCHEN_CARD_DATA: [
            {
                id: "1",
                category: "kitchen",
                logoPath: "/assets/images/kitchen/Kitchen%20Design%201.jpg",
                text: t('KITCHEN_DATA.CARD_TEXT', { number: 1 }),
                buttonText: t('KITCHEN_DATA.BUTTON_TEXT')
            },
            {
                id: "2",
                category: "kitchen",
                logoPath: "/assets/images/kitchen/Kitchen%20Design%202.jpg",
                text: t('KITCHEN_DATA.CARD_TEXT', { number: 2 }),
                buttonText: t('KITCHEN_DATA.BUTTON_TEXT')
            },
            {
                id: "3",
                category: "kitchen",
                logoPath: "/assets/images/kitchen/Kitchen%20Design%203.jpg",
                text: t('KITCHEN_DATA.CARD_TEXT', { number: 3 }),
                buttonText: t('KITCHEN_DATA.BUTTON_TEXT')
            },
            {
                id: "4",
                category: "kitchen",
                logoPath: "/assets/images/kitchen/Kitchen%20Design%204.jpg",
                text: t('KITCHEN_DATA.CARD_TEXT', { number: 4 }),
                buttonText: t('KITCHEN_DATA.BUTTON_TEXT')
            },
            {
                id: "5",
                category: "kitchen",
                logoPath: "/assets/images/kitchen/Kitchen%20Design%205.jpg",
                text: t('KITCHEN_DATA.CARD_TEXT', { number: 5 }),
                buttonText: t('KITCHEN_DATA.BUTTON_TEXT')
            },
            {
                id: "6",
                category: "kitchen",
                logoPath: "/assets/images/kitchen/Kitchen%20Design%206.jpg",
                text: t('KITCHEN_DATA.CARD_TEXT', { number: 6 }),
                buttonText: t('KITCHEN_DATA.BUTTON_TEXT')
            },
            {
                id: "7",
                category: "kitchen",
                logoPath: "/assets/images/kitchen/Kitchen%20Design%207.jpg",
                text: t('KITCHEN_DATA.CARD_TEXT', { number: 7 }),
                buttonText: t('KITCHEN_DATA.BUTTON_TEXT')
            },
            {
                id: "8",
                category: "kitchen",
                logoPath: "/assets/images/kitchen/Kitchen%20Design%208.jpg",
                text: t('KITCHEN_DATA.CARD_TEXT', { number: 8 }),
                buttonText: t('KITCHEN_DATA.BUTTON_TEXT')
            },
            {
                id: "9",
                category: "kitchen",
                logoPath: "/assets/images/kitchen/Kitchen%20Design%209.jpg",
                text: t('KITCHEN_DATA.CARD_TEXT', { number: 9 }),
                buttonText: t('KITCHEN_DATA.BUTTON_TEXT')
            },
            {
                id: "10",
                category: "kitchen",
                logoPath: "/assets/images/kitchen/Kitchen%20Design%2010.jpg",
                text: t('KITCHEN_DATA.CARD_TEXT', { number: 10 }),
                buttonText: t('KITCHEN_DATA.BUTTON_TEXT')
            },
            {
                id: "11",
                category: "kitchen",
                logoPath: "/assets/images/kitchen/Kitchen%20Design%2011.jpg",
                text: t('KITCHEN_DATA.CARD_TEXT', { number: 11 }),
                buttonText: t('KITCHEN_DATA.BUTTON_TEXT')
            },
            {
                id: "12",
                category: "kitchen",
                logoPath: "/assets/images/kitchen/Kitchen%20Design%2012.jpg",
                text: t('KITCHEN_DATA.CARD_TEXT', { number: 12 }),
                buttonText: t('KITCHEN_DATA.BUTTON_TEXT')
            },
            {
                id: "13",
                category: "kitchen",
                logoPath: "/assets/images/kitchen/Kitchen%20Design%2013.jpg",
                text: t('KITCHEN_DATA.CARD_TEXT', { number: 13 }),
                buttonText: t('KITCHEN_DATA.BUTTON_TEXT')
            },
            {
                id: "14",
                category: "kitchen",
                logoPath: "/assets/images/kitchen/Kitchen%20Design%2014.jpg",
                text: t('KITCHEN_DATA.CARD_TEXT', { number: 14 }),
                buttonText: t('KITCHEN_DATA.BUTTON_TEXT')
            },
            {
                id: "15",
                category: "kitchen",
                logoPath: "/assets/images/kitchen/Kitchen%20Design%2015.jpg",
                text: t('KITCHEN_DATA.CARD_TEXT', { number: 15 }),
                buttonText: t('KITCHEN_DATA.BUTTON_TEXT')
            },
        ]
    }
    return KITCHEN_DATA
}

//Living area data
export const LIVING_AREA_DATAS = () => {
    const { t } = useTranslation();
    const LIVING_AREA_DATA = {
        HEADING: t('LIVING_AREA_DATA.HEADING'),
        SUB_HEADING: t('LIVING_AREA_DATA.SUB_HEADING'),
        LIVING_AREA_CARD_DATA: [
            {
                id: "1",
                category: "living_room",
                logoPath: "/assets/images/living%20room/Living%20Room%20Design%201.jpg",
                text: t('LIVING_AREA_DATA.CARD_TEXT', { number: 1 }),
                buttonText: t('LIVING_AREA_DATA.BUTTON_TEXT')
            },
            {
                id: "2",
                category: "living_room",
                logoPath: "/assets/images/living%20room/Living%20Room%20Design%202.jpg",
                text: t('LIVING_AREA_DATA.CARD_TEXT', { number: 2 }),
                buttonText: t('LIVING_AREA_DATA.BUTTON_TEXT')
            },
            {
                id: "3",
                category: "living_room",
                logoPath: "/assets/images/living%20room/Living%20Room%20Design%203.jpg",
                text: t('LIVING_AREA_DATA.CARD_TEXT', { number: 3 }),
                buttonText: t('LIVING_AREA_DATA.BUTTON_TEXT')
            },
            {
                id: "4",
                category: "living_room",
                logoPath: "/assets/images/living%20room/Living%20Room%20Design%204.jpg",
                text: t('LIVING_AREA_DATA.CARD_TEXT', { number: 4 }),
                buttonText: t('LIVING_AREA_DATA.BUTTON_TEXT')
            },
            {
                id: "5",
                category: "living_room",
                logoPath: "/assets/images/living%20room/Living%20Room%20Design%205.jpg",
                text: t('LIVING_AREA_DATA.CARD_TEXT', { number: 5 }),
                buttonText: t('LIVING_AREA_DATA.BUTTON_TEXT')
            },
            {
                id: "6",
                category: "living_room",
                logoPath: "/assets/images/living%20room/Living%20Room%20Design%206.jpg",
                text: t('LIVING_AREA_DATA.CARD_TEXT', { number: 6 }),
                buttonText: t('LIVING_AREA_DATA.BUTTON_TEXT')
            },
            {
                id: "7",
                category: "living_room",
                logoPath: "/assets/images/living%20room/Living%20Room%20Design%207.jpg",
                text: t('LIVING_AREA_DATA.CARD_TEXT', { number: 7 }),
                buttonText: t('LIVING_AREA_DATA.BUTTON_TEXT')
            },
            {
                id: "8",
                category: "living_room",
                logoPath: "/assets/images/living%20room/Living%20Room%20Design%208.jpg",
                text: t('LIVING_AREA_DATA.CARD_TEXT', { number: 8 }),
                buttonText: t('LIVING_AREA_DATA.BUTTON_TEXT')
            },
            {
                id: "9",
                category: "living_room",
                logoPath: "/assets/images/living%20room/Living%20Room%20Design%209.jpg",
                text: t('LIVING_AREA_DATA.CARD_TEXT', { number: 9 }),
                buttonText: t('LIVING_AREA_DATA.BUTTON_TEXT')
            },
            {
                id: "10",
                category: "living_room",
                logoPath: "/assets/images/living%20room/Living%20Room%20Design%2010.jpg",
                text: t('LIVING_AREA_DATA.CARD_TEXT', { number: 10 }),
                buttonText: t('LIVING_AREA_DATA.BUTTON_TEXT')
            },
            {
                id: "11",
                category: "living_room",
                logoPath: "/assets/images/living%20room/Living%20Room%20Design%2011.jpg",
                text: t('LIVING_AREA_DATA.CARD_TEXT', { number: 11 }),
                buttonText: t('LIVING_AREA_DATA.BUTTON_TEXT')
            },
            {
                id: "12",
                category: "living_room",
                logoPath: "/assets/images/living%20room/Living%20Room%20Design%2012.jpg",
                text: t('LIVING_AREA_DATA.CARD_TEXT', { number: 12 }),
                buttonText: t('LIVING_AREA_DATA.BUTTON_TEXT')
            },
            {
                id: "13",
                category: "living_room",
                logoPath: "/assets/images/living%20room/Living%20Room%20Design%2013.jpg",
                text: t('LIVING_AREA_DATA.CARD_TEXT', { number: 13 }),
                buttonText: t('LIVING_AREA_DATA.BUTTON_TEXT')
            },
            {
                id: "14",
                category: "living_room",
                logoPath: "/assets/images/living%20room/Living%20Room%20Design%2014.jpg",
                text: t('LIVING_AREA_DATA.CARD_TEXT', { number: 14 }),
                buttonText: t('LIVING_AREA_DATA.BUTTON_TEXT')
            },
            {
                id: "15",
                category: "living_room",
                logoPath: "/assets/images/living%20room/Living%20Room%20Design%2015.jpg",
                text: t('LIVING_AREA_DATA.CARD_TEXT', { number: 15 }),
                buttonText: t('LIVING_AREA_DATA.BUTTON_TEXT')
            }
        ]
    }
    return LIVING_AREA_DATA
}


//bathroom data
export const BATHROOM_DATAS = () => {
    const { t } = useTranslation();
    const BATHROOM_DATA = {
        HEADING: t('BATHROOM_DATA.HEADING'),
        SUB_HEADING: t('BATHROOM_DATA.SUB_HEADING'),
        BATHROOM_CARD_DATA: [
            {
                id: "1",
                category: "bathroom",
                logoPath: "/assets/images/bathroom/Bathroom%20Design%201.jpg",
                text: t('BATHROOM_DATA.CARD_TEXT', { number: 1 }),
                buttonText: t('BATHROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "2",
                category: "bathroom",
                logoPath: "/assets/images/bathroom/Bathroom%20Design%202.jpg",
                text: t('BATHROOM_DATA.CARD_TEXT', { number: 2 }),
                buttonText: t('BATHROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "3",
                category: "bathroom",
                logoPath: "/assets/images/bathroom/Bathroom%20Design%203.jpg",
                text: t('BATHROOM_DATA.CARD_TEXT', { number: 3 }),
                buttonText: t('BATHROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "4",
                category: "bathroom",
                logoPath: "/assets/images/bathroom/Bathroom%20Design%204.jpg",
                text: t('BATHROOM_DATA.CARD_TEXT', { number: 4 }),
                buttonText: t('BATHROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "5",
                category: "bathroom",
                logoPath: "/assets/images/bathroom/Bathroom%20Design%205.jpg",
                text: t('BATHROOM_DATA.CARD_TEXT', { number: 5 }),
                buttonText: t('BATHROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "6",
                category: "bathroom",
                logoPath: "/assets/images/bathroom/Bathroom%20Design%206.jpg",
                text: t('BATHROOM_DATA.CARD_TEXT', { number: 6 }),
                buttonText: t('BATHROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "7",
                category: "bathroom",
                logoPath: "/assets/images/bathroom/Bathroom%20Design%207.jpg",
                text: t('BATHROOM_DATA.CARD_TEXT', { number: 7 }),
                buttonText: t('BATHROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "8",
                category: "bathroom",
                logoPath: "/assets/images/bathroom/Bathroom%20Design%208.jpg",
                text: t('BATHROOM_DATA.CARD_TEXT', { number: 8 }),
                buttonText: t('BATHROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "9",
                category: "bathroom",
                logoPath: "/assets/images/bathroom/Bathroom%20Design%209.jpg",
                text: t('BATHROOM_DATA.CARD_TEXT', { number: 9 }),
                buttonText: t('BATHROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "10",
                category: "bathroom",
                logoPath: "/assets/images/bathroom/Bathroom%20Design%2010.jpg",
                text: t('BATHROOM_DATA.CARD_TEXT', { number: 10 }),
                buttonText: t('BATHROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "11",
                category: "bathroom",
                logoPath: "/assets/images/bathroom/Bathroom%20Design%2011.jpg",
                text: t('BATHROOM_DATA.CARD_TEXT', { number: 11 }),
                buttonText: t('BATHROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "12",
                category: "bathroom",
                logoPath: "/assets/images/bathroom/Bathroom%20Design%2012.jpg",
                text: t('BATHROOM_DATA.CARD_TEXT', { number: 12 }),
                buttonText: t('BATHROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "13",
                category: "bathroom",
                logoPath: "/assets/images/bathroom/Bathroom%20Design%2013.jpg",
                text: t('BATHROOM_DATA.CARD_TEXT', { number: 13 }),
                buttonText: t('BATHROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "14",
                category: "bathroom",
                logoPath: "/assets/images/bathroom/Bathroom%20Design%2014.jpg",
                text: t('BATHROOM_DATA.CARD_TEXT', { number: 14 }),
                buttonText: t('BATHROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "15",
                category: "bathroom",
                logoPath: "/assets/images/bathroom/Bathroom%20Design%2015.jpg",
                text: t('BATHROOM_DATA.CARD_TEXT', { number: 15 }),
                buttonText: t('BATHROOM_DATA.BUTTON_TEXT')
            }
        ]
    }
    return BATHROOM_DATA
}

//Kids Room data
export const KIDS_ROOM_DATAS = () => {
    const { t } = useTranslation();
    const KIDS_ROOM_DATA = {
        HEADING: t('KIDS_ROOM_DATA.HEADING'),
        SUB_HEADING: t('KIDS_ROOM_DATA.SUB_HEADING'),
        KIDS_ROOM_CARD_DATA: [
            {
                id: "1",
                category: "kids_room",
                logoPath: "/assets/images/kids%20room/Kids%20Room%20Design%201.jpg",
                text: t('KIDS_ROOM_DATA.CARD_TEXT', { number: 1 }),
                buttonText: t('KIDS_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "2",
                category: "kids_room",
                logoPath: "/assets/images/kids%20room/Kids%20Room%20Design%202.jpg",
                text: t('KIDS_ROOM_DATA.CARD_TEXT', { number: 2 }),
                buttonText: t('KIDS_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "3",
                category: "kids_room",
                logoPath: "/assets/images/kids%20room/Kids%20Room%20Design%203.jpg",
                text: t('KIDS_ROOM_DATA.CARD_TEXT', { number: 3 }),
                buttonText: t('KIDS_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "4",
                category: "kids_room",
                logoPath: "/assets/images/kids%20room/Kids%20Room%20Design%204.jpg",
                text: t('KIDS_ROOM_DATA.CARD_TEXT', { number: 4 }),
                buttonText: t('KIDS_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "5",
                category: "kids_room",
                logoPath: "/assets/images/kids%20room/Kids%20Room%20Design%205.jpg",
                text: t('KIDS_ROOM_DATA.CARD_TEXT', { number: 5 }),
                buttonText: t('KIDS_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "6",
                category: "kids_room",
                logoPath: "/assets/images/kids%20room/Kids%20Room%20Design%206.jpg",
                text: t('KIDS_ROOM_DATA.CARD_TEXT', { number: 6 }),
                buttonText: t('KIDS_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "7",
                category: "kids_room",
                logoPath: "/assets/images/kids%20room/Kids%20Room%20Design%207.jpg",
                text: t('KIDS_ROOM_DATA.CARD_TEXT', { number: 7 }),
                buttonText: t('KIDS_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "8",
                category: "kids_room",
                logoPath: "/assets/images/kids%20room/Kids%20Room%20Design%208.jpg",
                text: t('KIDS_ROOM_DATA.CARD_TEXT', { number: 8 }),
                buttonText: t('KIDS_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "9",
                category: "kids_room",
                logoPath: "/assets/images/kids%20room/Kids%20Room%20Design%209.jpg",
                text: t('KIDS_ROOM_DATA.CARD_TEXT', { number: 9 }),
                buttonText: t('KIDS_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "10",
                category: "kids_room",
                logoPath: "/assets/images/kids%20room/Kids%20Room%20Design%2010.jpg",
                text: t('KIDS_ROOM_DATA.CARD_TEXT', { number: 10 }),
                buttonText: t('KIDS_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "11",
                category: "kids_room",
                logoPath: "/assets/images/kids%20room/Kids%20Room%20Design%2011.jpg",
                text: t('KIDS_ROOM_DATA.CARD_TEXT', { number: 11 }),
                buttonText: t('KIDS_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "12",
                category: "kids_room",
                logoPath: "/assets/images/kids%20room/Kids%20Room%20Design%2012.jpg",
                text: t('KIDS_ROOM_DATA.CARD_TEXT', { number: 12 }),
                buttonText: t('KIDS_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "13",
                category: "kids_room",
                logoPath: "/assets/images/kids%20room/Kids%20Room%20Design%2013.jpg",
                text: t('KIDS_ROOM_DATA.CARD_TEXT', { number: 13 }),
                buttonText: t('KIDS_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "14",
                category: "kids_room",
                logoPath: "/assets/images/kids%20room/Kids%20Room%20Design%2014.jpg",
                text: t('KIDS_ROOM_DATA.CARD_TEXT', { number: 14 }),
                buttonText: t('KIDS_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "15",
                category: "kids_room",
                logoPath: "/assets/images/kids%20room/Kids%20Room%20Design%2015.jpg",
                text: t('KIDS_ROOM_DATA.CARD_TEXT', { number: 15 }),
                buttonText: t('KIDS_ROOM_DATA.BUTTON_TEXT')
            }
        ]
    }
    return KIDS_ROOM_DATA
}


//Study Room data
export const STUDY_ROOM_DATAS = () => {
    const { t } = useTranslation();
    const STUDY_ROOM_DATA = {
        HEADING: t('STUDY_ROOM_DATA.HEADING'),
        SUB_HEADING: t('STUDY_ROOM_DATA.SUB_HEADING'),
        STUDY_ROOM_CARD_DATA: [
            {
                id: "1",
                category: "study_room",
                logoPath: "/assets/images/study%20room/Study%20Room%20Design%201.jpg",
                text: t('STUDY_ROOM_DATA.CARD_TEXT', { number: 1 }),
                buttonText: t('STUDY_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "2",
                category: "study_room",
                logoPath: "/assets/images/study%20room/Study%20Room%20Design%202.jpg",
                text: t('STUDY_ROOM_DATA.CARD_TEXT', { number: 2 }),
                buttonText: t('STUDY_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "3",
                category: "study_room",
                logoPath: "/assets/images/study%20room/Study%20Room%20Design%203.jpg",
                text: t('STUDY_ROOM_DATA.CARD_TEXT', { number: 3 }),
                buttonText: t('STUDY_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "4",
                category: "study_room",
                logoPath: "/assets/images/study%20room/Study%20Room%20Design%204.jpg",
                text: t('STUDY_ROOM_DATA.CARD_TEXT', { number: 4 }),
                buttonText: t('STUDY_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "5",
                category: "study_room",
                logoPath: "/assets/images/study%20room/Study%20Room%20Design%205.jpg",
                text: t('STUDY_ROOM_DATA.CARD_TEXT', { number: 5 }),
                buttonText: t('STUDY_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "6",
                category: "study_room",
                logoPath: "/assets/images/study%20room/Study%20Room%20Design%206.jpg",
                text: t('STUDY_ROOM_DATA.CARD_TEXT', { number: 6 }),
                buttonText: t('STUDY_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "7",
                category: "study_room",
                logoPath: "/assets/images/study%20room/Study%20Room%20Design%207.jpg",
                text: t('STUDY_ROOM_DATA.CARD_TEXT', { number: 7 }),
                buttonText: t('STUDY_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "8",
                category: "study_room",
                logoPath: "/assets/images/study%20room/Study%20Room%20Design%208.jpg",
                text: t('STUDY_ROOM_DATA.CARD_TEXT', { number: 8 }),
                buttonText: t('STUDY_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "9",
                category: "study_room",
                logoPath: "/assets/images/study%20room/Study%20Room%20Design%209.jpg",
                text: t('STUDY_ROOM_DATA.CARD_TEXT', { number: 9 }),
                buttonText: t('STUDY_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "10",
                category: "study_room",
                logoPath: "/assets/images/study%20room/Study%20Room%20Design%2010.jpg",
                text: t('STUDY_ROOM_DATA.CARD_TEXT', { number: 10 }),
                buttonText: t('STUDY_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "11",
                category: "study_room",
                logoPath: "/assets/images/study%20room/Study%20Room%20Design%2011.jpg",
                text: t('STUDY_ROOM_DATA.CARD_TEXT', { number: 11 }),
                buttonText: t('STUDY_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "12",
                category: "study_room",
                logoPath: "/assets/images/study%20room/Study%20Room%20Design%2012.jpg",
                text: t('STUDY_ROOM_DATA.CARD_TEXT', { number: 12 }),
                buttonText: t('STUDY_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "13",
                category: "study_room",
                logoPath: "/assets/images/study%20room/Study%20Room%20Design%2013.jpg",
                text: t('STUDY_ROOM_DATA.CARD_TEXT', { number: 13 }),
                buttonText: t('STUDY_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "14",
                category: "study_room",
                logoPath: "/assets/images/study%20room/Study%20Room%20Design%2014.jpg",
                text: t('STUDY_ROOM_DATA.CARD_TEXT', { number: 14 }),
                buttonText: t('STUDY_ROOM_DATA.BUTTON_TEXT')
            },
            {
                id: "15",
                category: "study_room",
                logoPath: "/assets/images/study%20room/Study%20Room%20Design%2015.jpg",
                text: t('STUDY_ROOM_DATA.CARD_TEXT', { number: 15 }),
                buttonText: t('STUDY_ROOM_DATA.BUTTON_TEXT')
            }
        ]
    }
    return STUDY_ROOM_DATA
}


//TV Unit data
export const TV_UNIT_DATAS = () => {
    const { t } = useTranslation();
    const TV_UNIT_DATA = {
        HEADING: t('TV_UNIT_DATA.HEADING'),
        SUB_HEADING: t('TV_UNIT_DATA.SUB_HEADING'),
        TV_UNIT_CARD_DATA: [
            {
                id: "1",
                category: "tv_unit",
                logoPath: "/assets/images/tv%20unit/TV%20Unit%20Design%201.jpg",
                text: t('TV_UNIT_DATA.CARD_TEXT', { number: 1 }),
                buttonText: t('TV_UNIT_DATA.BUTTON_TEXT')
            },
            {
                id: "2",
                category: "tv_unit",
                logoPath: "/assets/images/tv%20unit/TV%20Unit%20Design%202.jpg",
                text: t('TV_UNIT_DATA.CARD_TEXT', { number: 2 }),
                buttonText: t('TV_UNIT_DATA.BUTTON_TEXT')
            },
            {
                id: "3",
                category: "tv_unit",
                logoPath: "/assets/images/tv%20unit/TV%20Unit%20Design%203.jpg",
                text: t('TV_UNIT_DATA.CARD_TEXT', { number: 3 }),
                buttonText: t('TV_UNIT_DATA.BUTTON_TEXT')
            },
            {
                id: "4",
                category: "tv_unit",
                logoPath: "/assets/images/tv%20unit/TV%20Unit%20Design%204.jpg",
                text: t('TV_UNIT_DATA.CARD_TEXT', { number: 4 }),
                buttonText: t('TV_UNIT_DATA.BUTTON_TEXT')
            },
            {
                id: "5",
                category: "tv_unit",
                logoPath: "/assets/images/tv%20unit/TV%20Unit%20Design%205.jpg",
                text: t('TV_UNIT_DATA.CARD_TEXT', { number: 5 }),
                buttonText: t('TV_UNIT_DATA.BUTTON_TEXT')
            },
            {
                id: "6",
                category: "tv_unit",
                logoPath: "/assets/images/tv%20unit/TV%20Unit%20Design%206.jpg",
                text: t('TV_UNIT_DATA.CARD_TEXT', { number: 6 }),
                buttonText: t('TV_UNIT_DATA.BUTTON_TEXT')
            },
            {
                id: "7",
                category: "tv_unit",
                logoPath: "/assets/images/tv%20unit/TV%20Unit%20Design%207.jpg",
                text: t('TV_UNIT_DATA.CARD_TEXT', { number: 7 }),
                buttonText: t('TV_UNIT_DATA.BUTTON_TEXT')
            },
            {
                id: "8",
                category: "tv_unit",
                logoPath: "/assets/images/tv%20unit/TV%20Unit%20Design%208.jpg",
                text: t('TV_UNIT_DATA.CARD_TEXT', { number: 8 }),
                buttonText: t('TV_UNIT_DATA.BUTTON_TEXT')
            },
            {
                id: "9",
                category: "tv_unit",
                logoPath: "/assets/images/tv%20unit/TV%20Unit%20Design%209.jpg",
                text: t('TV_UNIT_DATA.CARD_TEXT', { number: 9 }),
                buttonText: t('TV_UNIT_DATA.BUTTON_TEXT')
            },
            {
                id: "10",
                category: "tv_unit",
                logoPath: "/assets/images/tv%20unit/TV%20Unit%20Design%2010.jpg",
                text: t('TV_UNIT_DATA.CARD_TEXT', { number: 10 }),
                buttonText: t('TV_UNIT_DATA.BUTTON_TEXT')
            },
            {
                id: "11",
                category: "tv_unit",
                logoPath: "/assets/images/tv%20unit/TV%20Unit%20Design%2011.jpg",
                text: t('TV_UNIT_DATA.CARD_TEXT', { number: 11 }),
                buttonText: t('TV_UNIT_DATA.BUTTON_TEXT')
            },
            {
                id: "12",
                category: "tv_unit",
                logoPath: "/assets/images/tv%20unit/TV%20Unit%20Design%2012.jpg",
                text: t('TV_UNIT_DATA.CARD_TEXT', { number: 12 }),
                buttonText: t('TV_UNIT_DATA.BUTTON_TEXT')
            },
            {
                id: "13",
                category: "tv_unit",
                logoPath: "/assets/images/tv%20unit/TV%20Unit%20Design%2013.jpg",
                text: t('TV_UNIT_DATA.CARD_TEXT', { number: 13 }),
                buttonText: t('TV_UNIT_DATA.BUTTON_TEXT')
            },
            {
                id: "14",
                category: "tv_unit",
                logoPath: "/assets/images/tv%20unit/TV%20Unit%20Design%2014.jpg",
                text: t('TV_UNIT_DATA.CARD_TEXT', { number: 14 }),
                buttonText: t('TV_UNIT_DATA.BUTTON_TEXT')
            },
            {
                id: "15",
                category: "tv_unit",
                logoPath: "/assets/images/tv%20unit/TV%20Unit%20Design%2015.jpg",
                text: t('TV_UNIT_DATA.CARD_TEXT', { number: 15 }),
                buttonText: t('TV_UNIT_DATA.BUTTON_TEXT')
            }
        ]
    }
    return TV_UNIT_DATA
}


//Wardrobe-data
export const WARDROBE_DATAS = () => {
    const { t } = useTranslation();
    const WARDROBE_DATA = {
        HEADING: t('WARDROBE_DATA.HEADING'),
        SUB_HEADING: t('WARDROBE_DATA.SUB_HEADING'),
        WARDROBE_CARD_DATA: [
            {
                id: "1",
                category: "wardrobe",
                logoPath: "/assets/images/wardrobe/Wardrobe%20Design%201.jpg",
                text: t('WARDROBE_DATA.CARD_TEXT', { number: 1 }),
                buttonText: t('WARDROBE_DATA.BUTTON_TEXT')
            },
            {
                id: "2",
                category: "wardrobe",
                logoPath: "/assets/images/wardrobe/Wardrobe%20Design%202.jpg",
                text: t('WARDROBE_DATA.CARD_TEXT', { number: 2 }),
                buttonText: t('WARDROBE_DATA.BUTTON_TEXT')
            },
            {
                id: "3",
                category: "wardrobe",
                logoPath: "/assets/images/wardrobe/Wardrobe%20Design%203.jpg",
                text: t('WARDROBE_DATA.CARD_TEXT', { number: 3 }),
                buttonText: t('WARDROBE_DATA.BUTTON_TEXT')
            },
            {
                id: "4",
                category: "wardrobe",
                logoPath: "/assets/images/wardrobe/Wardrobe%20Design%204.jpg",
                text: t('WARDROBE_DATA.CARD_TEXT', { number: 4 }),
                buttonText: t('WARDROBE_DATA.BUTTON_TEXT')
            },
            {
                id: "5",
                category: "wardrobe",
                logoPath: "/assets/images/wardrobe/Wardrobe%20Design%205.jpg",
                text: t('WARDROBE_DATA.CARD_TEXT', { number: 5 }),
                buttonText: t('WARDROBE_DATA.BUTTON_TEXT')
            },
            {
                id: "6",
                category: "wardrobe",
                logoPath: "/assets/images/wardrobe/Wardrobe%20Design%206.jpg",
                text: t('WARDROBE_DATA.CARD_TEXT', { number: 6 }),
                buttonText: t('WARDROBE_DATA.BUTTON_TEXT')
            },
            {
                id: "7",
                category: "wardrobe",
                logoPath: "/assets/images/wardrobe/Wardrobe%20Design%207.jpg",
                text: t('WARDROBE_DATA.CARD_TEXT', { number: 7 }),
                buttonText: t('WARDROBE_DATA.BUTTON_TEXT')
            },
            {
                id: "8",
                category: "wardrobe",
                logoPath: "/assets/images/wardrobe/Wardrobe%20Design%208.jpg",
                text: t('WARDROBE_DATA.CARD_TEXT', { number: 8 }),
                buttonText: t('WARDROBE_DATA.BUTTON_TEXT')
            },
            {
                id: "9",
                category: "wardrobe",
                logoPath: "/assets/images/wardrobe/Wardrobe%20Design%209.jpg",
                text: t('WARDROBE_DATA.CARD_TEXT', { number: 9 }),
                buttonText: t('WARDROBE_DATA.BUTTON_TEXT')
            },
            {
                id: "10",
                category: "wardrobe",
                logoPath: "/assets/images/wardrobe/Wardrobe%20Design%2010.jpg",
                text: t('WARDROBE_DATA.CARD_TEXT', { number: 10 }),
                buttonText: t('WARDROBE_DATA.BUTTON_TEXT')
            },
            {
                id: "11",
                category: "wardrobe",
                logoPath: "/assets/images/wardrobe/Wardrobe%20Design%2011.jpg",
                text: t('WARDROBE_DATA.CARD_TEXT', { number: 11 }),
                buttonText: t('WARDROBE_DATA.BUTTON_TEXT')
            },
            {
                id: "12",
                category: "wardrobe",
                logoPath: "/assets/images/wardrobe/Wardrobe%20Design%2012.jpg",
                text: t('WARDROBE_DATA.CARD_TEXT', { number: 12 }),
                buttonText: t('WARDROBE_DATA.BUTTON_TEXT')
            },
            {
                id: "13",
                category: "wardrobe",
                logoPath: "/assets/images/wardrobe/Wardrobe%20Design%2013.jpg",
                text: t('WARDROBE_DATA.CARD_TEXT', { number: 13 }),
                buttonText: t('WARDROBE_DATA.BUTTON_TEXT')
            },
            {
                id: "14",
                category: "wardrobe",
                logoPath: "/assets/images/wardrobe/Wardrobe%20Design%2014.jpg",
                text: t('WARDROBE_DATA.CARD_TEXT', { number: 14 }),
                buttonText: t('WARDROBE_DATA.BUTTON_TEXT')
            },
            {
                id: "15",
                category: "wardrobe",
                logoPath: "/assets/images/wardrobe/Wardrobe%20Design%2015.jpg",
                text: t('WARDROBE_DATA.CARD_TEXT', { number: 15 }),
                buttonText: t('WARDROBE_DATA.BUTTON_TEXT')
            }
        ]
    }
    return WARDROBE_DATA
}



//Design ideas
export const DESIGN_IDEAS_DATAS = () => {
    const { t } = useTranslation();
    const DESIGN_IDEAS_DATA = {
        HEADING: t('DESIGN_IDEAS_DATA.HEADING'),
        SUB_HEADING: t('DESIGN_IDEAS_DATA.SUB_HEADING'),
        DESIGN_IDEAS_CARD_DATA: [
            {
                id: "1",
                category: ROUTES.LIVING_AREA,
                logoPath: "/assets/images/living%20room/Living%20Room%20Design%201.jpg",
                text: t('DESIGN_IDEAS_DATA.CARD_TEXT', { text_to_replace: t('GLOBAL_KEYWORDS.LIVING_AREA') }),

                buttonText: t('DESIGN_IDEAS_DATA.BUTTON_TEXT')
            },
            {
                id: "2",
                category: ROUTES.KITCHEN,
                logoPath: "/assets/images/kitchen/Kitchen%20Design%201.jpg",
                text: t('DESIGN_IDEAS_DATA.CARD_TEXT', { text_to_replace: t('GLOBAL_KEYWORDS.KITCHEN') }),
                buttonText: t('DESIGN_IDEAS_DATA.BUTTON_TEXT')
            },
            {
                id: "3",
                category: ROUTES.BEDROOM,
                logoPath: "/assets/images/bedroom/Bedroom%20Design%201.jpg",
                text: t('DESIGN_IDEAS_DATA.CARD_TEXT', { text_to_replace: t('GLOBAL_KEYWORDS.BEDROOM') }),
                buttonText: t('DESIGN_IDEAS_DATA.BUTTON_TEXT')
            },
            {
                id: "4",
                category: ROUTES.BATHROOM,
                logoPath: "/assets/images/bathroom/Bathroom%20Design%201.jpg",
                text: t('DESIGN_IDEAS_DATA.CARD_TEXT', { text_to_replace: t('GLOBAL_KEYWORDS.BATHROOM') }),
                buttonText: t('DESIGN_IDEAS_DATA.BUTTON_TEXT')
            },
            {
                id: "5",
                category: ROUTES.KIDS_ROOM,
                logoPath: "/assets/images/kids%20room/Kids%20Room%20Design%201.jpg",
                text: t('DESIGN_IDEAS_DATA.CARD_TEXT', { text_to_replace: t('GLOBAL_KEYWORDS.KIDS_ROOM') }),
                buttonText: t('DESIGN_IDEAS_DATA.BUTTON_TEXT')
            },
            {
                id: "6",
                category: ROUTES.STUDY_ROOM,
                logoPath: "/assets/images/study%20room/Study%20Room%20Design%201.jpg",
                text: t('DESIGN_IDEAS_DATA.CARD_TEXT', { text_to_replace: t('GLOBAL_KEYWORDS.STUDY_ROOM') }),
                buttonText: t('DESIGN_IDEAS_DATA.BUTTON_TEXT')
            },
            {
                id: "7",
                category: ROUTES.TV_UNIT,
                logoPath: "/assets/images/tv%20unit/TV%20Unit%20Design%201.jpg",
                text: t('DESIGN_IDEAS_DATA.CARD_TEXT', { text_to_replace: t('GLOBAL_KEYWORDS.TV_UNIT') }),
                buttonText: t('DESIGN_IDEAS_DATA.BUTTON_TEXT')
            },
            {
                id: "8",
                category: ROUTES.WARDROBE,
                logoPath: "/assets/images/wardrobe/Wardrobe%20Design%208.jpg",
                text: t('DESIGN_IDEAS_DATA.CARD_TEXT', { text_to_replace: t('GLOBAL_KEYWORDS.WARDROBE') }),
                buttonText: t('DESIGN_IDEAS_DATA.BUTTON_TEXT')
            },
        ]
    }
    return DESIGN_IDEAS_DATA
}


export const INTERIOR_DATAS = () => {
    const { t } = useTranslation();
    const INTERIOR_DATA = {
        HEADING: t('INTERIOR_DATA.HEADING'),
        SUB_HEADING: t('INTERIOR_DATA.SUB_HEADING'),
        INTERIOR_DATA_CARD_DATA: [
            {
                id: "1",
                category: ROUTES.LIVING_AREA,
                logoPath: "/assets/images/living%20room/Living%20Room%20Design%201.jpg",
                text: t('INTERIOR_DATA.CARD_TEXT', { text_to_replace: t('GLOBAL_KEYWORDS.LIVING_AREA') }),

                buttonText: t('INTERIOR_DATA.BUTTON_TEXT')
            },
            {
                id: "2",
                category: ROUTES.KITCHEN,
                logoPath: "/assets/images/kitchen/Kitchen%20Design%201.jpg",
                text: t('INTERIOR_DATA.CARD_TEXT', { text_to_replace: t('GLOBAL_KEYWORDS.KITCHEN') }),
                buttonText: t('INTERIOR_DATA.BUTTON_TEXT')
            },
            {
                id: "3",
                category: ROUTES.BEDROOM,
                logoPath: "/assets/images/bedroom/Bedroom%20Design%201.jpg",
                text: t('INTERIOR_DATA.CARD_TEXT', { text_to_replace: t('GLOBAL_KEYWORDS.BEDROOM') }),
                buttonText: t('INTERIOR_DATA.BUTTON_TEXT')
            },
            {
                id: "4",
                category: ROUTES.BATHROOM,
                logoPath: "/assets/images/bathroom/Bathroom%20Design%201.jpg",
                text: t('INTERIOR_DATA.CARD_TEXT', { text_to_replace: t('GLOBAL_KEYWORDS.BATHROOM') }),
                buttonText: t('INTERIOR_DATA.BUTTON_TEXT')
            },
            {
                id: "5",
                category: ROUTES.KIDS_ROOM,
                logoPath: "/assets/images/kids%20room/Kids%20Room%20Design%201.jpg",
                text: t('INTERIOR_DATA.CARD_TEXT', { text_to_replace: t('GLOBAL_KEYWORDS.KIDS_ROOM') }),
                buttonText: t('INTERIOR_DATA.BUTTON_TEXT')
            },
            {
                id: "6",
                category: ROUTES.STUDY_ROOM,
                logoPath: "/assets/images/study%20room/Study%20Room%20Design%201.jpg",
                text: t('INTERIOR_DATA.CARD_TEXT', { text_to_replace: t('GLOBAL_KEYWORDS.STUDY_ROOM') }),
                buttonText: t('INTERIOR_DATA.BUTTON_TEXT')
            },
            {
                id: "7",
                category: ROUTES.TV_UNIT,
                logoPath: "/assets/images/tv%20unit/TV%20Unit%20Design%201.jpg",
                text: t('INTERIOR_DATA.CARD_TEXT', { text_to_replace: t('GLOBAL_KEYWORDS.TV_UNIT') }),
                buttonText: t('INTERIOR_DATA.BUTTON_TEXT')
            },
            {
                id: "8",
                category: ROUTES.WARDROBE,
                logoPath: "/assets/images/wardrobe/Wardrobe%20Design%208.jpg",
                text: t('INTERIOR_DATA.CARD_TEXT', { text_to_replace: t('GLOBAL_KEYWORDS.WARDROBE') }),
                buttonText: t('INTERIOR_DATA.BUTTON_TEXT')
            },
        ]
    }
    return INTERIOR_DATA
}
