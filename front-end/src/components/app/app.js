import '@babel/polyfill';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Redirect, Switch } from 'react-router';
import HashRouter from 'react-router-dom/es/HashRouter';
import '../../../style/base.scss';
import * as routes from '../../routes';

// custom components
import Landing from '../landing/landing';
import NavUi from '../nav-ui/nav-ui';
import Callback from '../callback/callback';
import Dashboard from '../dashboard/dashboard';
import DashboardEdit from '../dashboard/dashboard-edit';
import AuthRedirect from '../auth-redirect/auth-redirect';
import Projects from '../open-projects/open-projects';
import ProjectDetails from '../project-details/project-details';
import ProjectEdit from '../project-details/project-editing';
import NewProject from '../project-form/new-project-form';
import AboutUs from '../about-us/about-us';
import ThankYou from '../thank-you/thank-you';
import Footer from '../footer/footer';

class App extends React.Component {
  render() {
    return (
        <div>
          <HashRouter basename={process.env.CDN_URL}>
            <div className='main-container'>
              <NavUi location={location} />
              <Switch>
              <Route exact path={routes.SITE_ROOT_FRONTEND} component={Landing}/>
              <Route path={routes.LOGIN_FRONTEND} component={Landing}/>
              <Route path={routes.LOGOUT_FRONTEND} component={Landing}/>
              <Route path={routes.SIGNUP_FRONTEND} component={Landing}/>
              <Route path={routes.CALLBACK_FRONTEND} component={Callback}/>
              <Route path={routes.DASHBOARD_FRONTEND} component={Dashboard}/>
              <Route path={routes.DASHBOARD_EDIT_FRONTEND} component={DashboardEdit}/>
              <Route path={routes.PROJECT_DETAILS_FRONTEND} component={ProjectDetails}/>
              <Route exact path={routes.PROJECTS_FRONTEND} component={Projects}/>
              <Route path={routes.PROJECT_NEW_FRONTEND} component={NewProject}/>
              <Route path={routes.PROJECT_EDIT_FRONTEND} component={ProjectEdit}/>
              <Route path={routes.ABOUT_US_FRONTEND} component={AboutUs}/>
              <Route path={routes.THANK_YOU_FRONTEND} component={ThankYou}/>
              </Switch>
              <Footer />
            </div>
          </HashRouter>
        </div>
    );
  }
}

export default App;
