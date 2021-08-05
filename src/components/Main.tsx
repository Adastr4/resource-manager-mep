import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
// Imports for device
import { Devices } from '../views/Devices';
import { AboutDevice } from '../views/DeviceDetails/AboutDevice';
import { ManageDevice } from '../views/DeviceDetails/ManageDevice';
// Imports for administrator
import { RegisterUser } from '../views/Administrator/RegisterUser';
import { RegisterDevice } from '../views/Administrator/RegisterDevice';

const Main = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <>
            {/* Routes for the device*/}
            <Route exact path="/alldevices" component={Devices} />
            <Route exact path="/device/:deviceId" component={AboutDevice} />
            <Route
              exact
              path="/device/:deviceId/manage"
              component={ManageDevice}
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
            {/* Routes for administrator */}
            <Route exact path="/registerdevice" component={RegisterDevice} />
            <Route exact path="/registeruser" component={RegisterUser} />
          </>
        </Layout>
      </Switch>
    </Router>
  );
};

export default Main;
