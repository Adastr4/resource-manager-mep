import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Devices } from '../views/Devices';
import { AboutDevice } from '../views/DeviceDetails/AboutDevice';
import Layout from './Layout';

const Main = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <>
            <Route exact path="/alldevices" component={Devices} />
            {/* Routes for the device's detail */}
            <Route exact path="/device/:deviceId" component={AboutDevice} />
            <Route
              exact
              path="/device/:deviceId/manage"
              component={AboutDevice}
            />
            <Route
              exact
              path="/device/:deviceId/overview"
              component={AboutDevice}
            />
            <Route
              exact
              path="/device/:deviceId/comandi"
              component={AboutDevice}
            />
            <Route
              exact
              path="/device/:deviceId/rawdata"
              component={AboutDevice}
            />
          </>
        </Layout>
      </Switch>
    </Router>
  );
};

export default Main;
