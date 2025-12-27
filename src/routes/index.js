import { Suspense, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { appRoutes } from './app.routes';
import CircularProgress from '@mui/material/CircularProgress';
import NotFound from '../pages/404';

const AppRoutePages = () => {

  return (
    <Suspense fallback={<div style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:'center'}}> <CircularProgress  color="error" /></div>} >
      <Routes >
        {
          <>
            {
              appRoutes.USER_ROUTES.map((route, index) => (
                  < Route
                    key={`${route}-index`}
                    {...route}
                  />
              ))
            }
          </>
        }
        {
          <Route path="*" element={<NotFound />} />
        }
      </Routes>
    </Suspense>
  );
}

export default AppRoutePages;