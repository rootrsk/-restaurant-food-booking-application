import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Homescreen from './HomeScreen';
import DashboardScreen from './DashboardScreen'
import DrawerContent from '../components/DrawerContent';
import { Badge, Box, Button, IconButton, useColorMode } from 'native-base';
import ProfileScreen from './ProfileScreen';
import HelpScreen from './HelpScreen';
import LogoutScreen from './LogoutScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Drawer = createDrawerNavigator();
import { connect } from 'react-redux'
const DrawerContainer = (props) => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={props=><DrawerContent {...props} />}
            screenOptions = {{
                headerStyle: {
                    backgroundColor: colorMode === 'light' ? '#fff' : '#000e21', 
                },
                headerTintColor: colorMode==='light'?'#000':'#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerRight:()=>(
                    <Box>
                        <Badge 
                            colorScheme="info" 
                            rounded="full" 
                            mb={-4} mr={0} 
                            zIndex={1} 
                            variant="solid" 
                            alignSelf="flex-end" 
                            _text={{
                                fontSize: 10
                            }}
                        >
                            {(props.cart && props.cart.items) ? props.cart.items.length: ''}
                        </Badge>
                       <IconButton 
                            onPress={()=>props.navigation.navigate('Cart')}
                            icon={<MaterialCommunityIcons name="cart" size={24} color="black" />}    
                        /> 
                    </Box>
                    
                )
            }}
        >
            <Drawer.Screen name="Home" component={Homescreen} options={{headerShown: true}}  />
            <Drawer.Screen name="Profile" component={ProfileScreen} options={{headerShown: true}}  /> 
            <Drawer.Screen name="Help" component={HelpScreen} options={{headerShown: true}}  /> 
            <Drawer.Screen name="Logout" component={LogoutScreen} options={{headerShown: true}}  /> 
        </Drawer.Navigator>
    )
}
const mapStateToProps = state => state
export default connect(mapStateToProps)(DrawerContainer)

const styles = StyleSheet.create({})