import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import ArtCards from './pages/ArtCards';
import ArtFullDetails from './pages/ArtFullDetails';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();
  const [arts, setArts] = useState([]);
  useEffect(() => {
    fetch('/arts.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch events (${response.status} ${response.statusText})`,
          );
        }
        return response.json();
      })
      .then((data) => setArts(data.Arts))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
      <Route
            path="/profile"
            element={
              <>
                <PageTitle title="Profile " />
                <PageTitle title="Profile " />
                <Profile />
              </>
            }
          />
        
        <Route path="/arts/:artId" element={<ArtFullDetails arts={arts} />} />
        <Route
          index
          element={
            <>
              <PageTitle title="eCommerce Dashboard " />
              <ECommerce />
            </>
          }
        />
          
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar " />
              <Calendar />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements " />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout " />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables " />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings " />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart " />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts " />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons " />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin " />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup " />
              <SignUp />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
