import { StyleSheet, View } from 'react-native'
import React,{ useEffect, useState } from 'react'
import { postApi } from '../utils/userApi'
import { ScrollView,Box, Text, Divider, Button } from 'native-base'
const url = 'https://0d00-2409-4064-2c06-7ed3-6e60-90cb-31fb-e684.ngrok.io'
const OrderScreen = (props) => {
    const [loading,setLoading] = useState(false)
    const [options,setOptions] = useState({})
    const [order,setOrder] = useState(null)
    const createOrder = async() =>{
        setLoading(true)
        const {data,error} =  await postApi(`/user/order`,{seats:props.route.params.seats})
        if(error){
            return console.log(error)
        }
        if(data){
            setOrder(data)
        }
        setLoading(false)
    }
    useEffect(()=>{
        createOrder()
        // return null
    },[])
    return (
        <ScrollView>
            <Box>
                {loading && <Text>Loading</Text>}
            </Box>
            <Box
                _light={{
                    bg:'white'
                }}
                m='2'
                p='2'
                shadow='1'
            >
                {
                    order && order.items && order.items.map((item,index)=>{
                        return (
                            <Box key={index}
                                display='flex'
                                flexDirection='row'
                                justifyContent='space-between'
                            >
                                
                                <Text
                                    fontWeight={700}
                                >
                                    {item.name} * {item.count}
                                </Text>
                                <Text
                                    fontWeight = {
                                        700
                                    }
                                >
                                    ₹{item.price * item.count}
                                </Text>
                                
                            </Box>
                        )
                    })
                }
                
                {order && 
                    <Box>
                        <Divider />
                        <Box 
                            display='flex'
                            flexDirection='row'
                            justifyContent='space-between'
                            pt='2'
                            pb='2'
                        >
                        
                            <Text
                                fontWeight={700}
                            >
                                Total
                            </Text>
                            <Text
                                fontWeight={700}
                            >
                                ₹{order &&  order.total_amount}
                            </Text>
                        
                        </Box>
                        <Divider />
                        <Box 
                            display='flex'
                            flexDirection='row'
                            justifyContent='space-between'
                            
                        >
                        
                            <Text>
                                Booked Seats
                            </Text>
                            <Text>
                                {order &&  order.seats}
                            </Text>
                        
                        </Box>
                    </Box>
                    
                }
            </Box>
            {order && 
                <Box>
                    <Button
                        m='2'
                    >
                        Pay Now                                                          
                    
                    </Button>
                </Box>  
            }
            
        </ScrollView>
    )
}

export default OrderScreen

const styles = StyleSheet.create({})