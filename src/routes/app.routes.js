import React from 'react';

import { ROUTES } from '../utils/constants';

const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Bedroom = React.lazy(() => import('../pages/Bedroom'));
const BedroomDetails = React.lazy(() => import('../pages/Bedroom/BedroomDetails'));
const Bathroom = React.lazy(() => import('../pages/Bathroom'));
const BathroomDetails = React.lazy(() => import('../pages/Bathroom/BathroomDetails'));
const Wardrobe = React.lazy(() => import('../pages/Wardrobe'));
const WardrobeDetails = React.lazy(() => import('../pages//Wardrobe/WardrobeDetails'));
const Kitchen = React.lazy(() => import('../pages/Kitchen'));
const KitchenDetails = React.lazy(() => import('../pages/Kitchen/KitchenDetails'));
const LivingArea = React.lazy(() => import('../pages/LivingArea'));
const LivingAreaDetails = React.lazy(() => import('../pages/LivingArea/LivingAreaDetails'));
const KidsRoom = React.lazy(() => import('../pages/KidsRoom'));
const KidsRoomDetails = React.lazy(() => import('../pages/KidsRoom/KidsRoomDetails'));
const StudyRoom = React.lazy(() => import('../pages/StudyRoom'));
const StudyRoomDetails = React.lazy(() => import('../pages/StudyRoom/StudyRoomDetails'));
const TVUnit = React.lazy(() => import('../pages/TVUnit'));
const TVUnitDetails = React.lazy(() => import('../pages/TVUnit/TVUnitDetails'));
const InteriorDesign = React.lazy(() => import('../pages/InteriorDesign'));
const FurnitureByEasyHomez = React.lazy(() => import('../pages/FurnitureByEasyHomez'));
const EModular = React.lazy(() => import('../pages/EModular'));

const NotFound = React.lazy(() => import('../pages/404'));


export const appRoutes = {
  AUTH_ROUTES: [],
  USER_ROUTES: [
    {
      path: ROUTES.DASHBOARD,
      exact: true,
      element: <Dashboard />,
    },
    {
      path: ROUTES.BEDROOM,
      exact: true,
      element: <Bedroom />,
    },
    {
      path: ROUTES.BATHROOM,
      exact: true,
      element: <Bathroom />,
    },
    {
      path: ROUTES.INTERIOR,
      exact: true,
      element: <InteriorDesign />,
    },
    {
      path: ROUTES.KITCHEN,
      exact: true,
      element: <Kitchen />,
    },
    {
      path: ROUTES.LIVING_AREA,
      exact: true,
      element: <LivingArea />,
    },
    {
      path: ROUTES.LIVING_AREA_DETAILS,
      exact: true,
      element: <LivingAreaDetails />,
    },
    {
      path: ROUTES.KIDS_ROOM,
      exact: true,
      element: <KidsRoom />,
    },
    {
      path: ROUTES.KIDS_ROOM_DETAILS,
      exact: true,
      element: <KidsRoomDetails />,
    },
    {
      path: ROUTES.WARDROBE,
      exact: true,
      element: <Wardrobe />,
    },
    {
      path: ROUTES.WARDROBE_DETAILS,
      exact: true,
      element: <WardrobeDetails />,
    },
    {
      path: ROUTES.TV_UNIT,
      exact: true,
      element: <TVUnit />,
    },
    {
      path: ROUTES.TV_UNIT_DETAILS,
      exact: true,
      element: <TVUnitDetails />,
    },
    {
      path: ROUTES.STUDY_ROOM,
      exact: true,
      element: <StudyRoom />,
    },
    {
      path: ROUTES.STUDY_ROOM_DETAILS,
      exact: true,
      element: <StudyRoomDetails />,
    },
    {
      path: ROUTES.FURNITURE_BY_EASYHOMEZ,
      exact: true,
      element: <FurnitureByEasyHomez />,
    },
    {
      path: ROUTES.E_MODULAR,
      exact: true,
      element: <EModular />,
    },
    {
      path: ROUTES.BEDROOM_DETAILS,
      exact: true,
      element: <BedroomDetails/>,
    },
    {
      path: ROUTES.KITCHEN_DETAILS,
      exact: true,
      element: <KitchenDetails/>,
    },
    {
      path: ROUTES.BATHROOM_DETAILS,
      exact: true,
      element: <BathroomDetails/>,
    },
  ],

  MISCELLANEOUS_ROUTES: [
    {
      path: ROUTES.NOT_FOUND,
      exact: true,
      element: <NotFound />,
    },
  ], 
};