
import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,HeaderStyleInterpolators,TransitionPresets } from '@react-navigation/stack';
import Homescreen from './screens/HomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from  './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ForgotScreen from './screens/ForgotScreen';
import CartScreen from './screens/CartScreen'
import OrderScreen from './screens/OrderScreen'
import { connect } from 'react-redux';
import DrawerContainer from './screens/DrawerContainer';
const Stack = createStackNavigator();

const Main = (props) => {
    // console.log(props)
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    ...TransitionPresets.SlideFromRightIOS,
                    headerShown: false,
                }}
            >
                { !(props.auth && props.auth.token) ?
                    <Stack.Group
                        screenOptions={{
                            ...TransitionPresets.SlideFromRightIOS,
                        }}
                    >
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Signup" component={SignupScreen} />
                        <Stack.Screen name="Forgot" component={ForgotScreen} />
                    </Stack.Group>:
                    <>
                        <Stack.Group screenOptions={{headerShown:true}} >
                            <Stack.Screen name="Drawer" component={DrawerContainer} options={{headerShown:false}} />
                            <Stack.Screen name="Home" component={Homescreen} />
                            <Stack.Screen name="Cart" component={CartScreen}  />
                            <Stack.Screen name="Order" component={OrderScreen}  />
                        </Stack.Group>
                    </>
                    
                }  
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const mapStateToProps = state => state
export default connect(mapStateToProps) (Main);
