import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from 'react-navigation';
import Login from '../pages/Login'
import SignupWorker from "../pages/SignupWorker";
import SignupRecruiter from "../pages/SignupRecruiter";
import DashboardRecruiter from "../pages/DashboardRecruiter";
import DashboardWorker from "../pages/DashboardWorker"
const screens = {    

    Login: {
        screen: Login
    },

    SignupRecruiter : {
        screen: SignupRecruiter,
        navigationOptions: {
            title: 'Sign up (recruiter profile)'
        }
    },

    SignupWorker: {
        screen: SignupWorker,
        navigationOptions: {
            title: 'Sign up (worker profile)'
        }
    },
    DashboardWorker : {
        screen: DashboardWorker,
        navigationOptions: {
            title: 'Dashboard (worker profile)'
        }
    },
    DashboardRecruiter : {
        screen: DashboardRecruiter,
        navigationOptions: {
            title: 'Dashboard (recruiter profile)'
        }
    },
    
}       
const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)