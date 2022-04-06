import React,{useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView,Text,Heading,Box,Flex,Divider,useColorMode,Button,useToast } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux'
// import {postApi,getApi} from '../utils/userApi'
import { removeUser } from '../redux/actions/auth';
import * as SecureStore from 'expo-secure-store';
// import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";
const LogoutScreen = (props) => {
    const [isLoading,setIsLoading] =useState(false)
    const [isLoadingV,setIsLoadingV] = useState(false)
    const [isLoadingP,setIsLoadingP] = useState(false)
    const toast = useToast()
    const logoutHandler = async() =>{
        setIsLoading(true)
        try {
            let result = await SecureStore.getItemAsync('authtoken');
            if (result) {
                await SecureStore.deleteItemAsync('authtoken');
                removeUser()
            } else {
                removeUser()
            }
        } catch (error) {
            console.log(error)
        }
        
        setIsLoading(false)
    }
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box
            _light={{backgroundColor:'gray.300'}}
            _dark={{backgroundColor:'blueGray.800'}}
            style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                flex:1
            }}
        >
            <Box
                _light={{backgroundColor:'#ffffff'}}
                _dark={{backgroundColor:'darkBlue.900'}}
                p='3'
                w={320}
            >
                <Heading>Manage Account</Heading>
                <Divider mb='2' />
                <Button 
                    isLoading={isLoading} 
                    isLoadingText='Logging out' 
                    onPress={logoutHandler} 
                    _light={{
                        bg:'darkBlue.900'
                    }}
                    _hover={{
                        bg:'black'
                    }}
                    _pressed={{
                        bg:'darkBlue.700',
                    }}
                >Logout</Button>
            </Box>
        </Box>
    )
}
const mapStateToProps=(state)=> state.auth
export default connect(mapStateToProps) (LogoutScreen)

const styles = StyleSheet.create({})
