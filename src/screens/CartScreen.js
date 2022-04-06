import { StyleSheet } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import { Box, Button, IconButton, Image, ScrollView, Text } from 'native-base'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { addCart, removeCart } from '../redux/actions/cart';
const CartScreen = (props) => {
    const [seats,setSeats] = React.useState(1)
    const seatHandler =(seats) =>{
        if(seats===0)
            return 
        if(seats===11)
            return 
        setSeats(seats)
    }
    return (
        <ScrollView>
            {
                props.cart && props.cart.items && props.cart.items.map((item,index)=>{
                    return (
                        <Box 
                            m='2'
                            p='2'
                            key={index} 
                            borderRadius='2'
                            shadow='1'
                            _light={{
                                bg:'white'
                            }}
                            display='flex'
                            flexDirection='row'
                        >   
                            <Box
                                display='flex'
                                flexDirection='row'
                            >
                                <Box>
                                    <Image 
                                        source={{uri: item.recipie.image}} 
                                        alt={item.recipie.name} 
                                        style={{
                                            width:100,
                                            height:100,
                                            borderRadius:2
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Box
                                flex='1'
                            >
                                <Text
                                    fontWeight={700}
                                    fontSize={18}
                                    ml='2'
                                >
                                    {item.recipie && item.recipie.name && item.recipie.name}
                                </Text>
                                <Box 
                                    display='flex'
                                    flexDirection='row'
                                    p='2'
                                    justifyContent='space-between'
                                >
                                    <Box
                                        display='flex'
                                        flexDirection='row'
                                        alignItems='center'

                                    >
                                        <FontAwesome name="star" size={16} color="#71717a" />
                                        <Text 
                                            fontWeight={700}
                                            fontSize={18}
                                            marginLeft='1'
                                            _light={{
                                                color:'gray.500'
                                            }}
                                        >
                                            {(item.recipie.rating.rated)/item.recipie.rating.count}
                                        </Text>
                                    </Box>
                                    <Box
                                        display='flex'
                                        flexDirection='row'
                                        alignItems='center'

                                    >
                                        <FontAwesome5 name="rupee-sign" size={16} color="#71717a" />
                                        <Text 
                                            fontWeight={700}
                                            fontSize={18}
                                            marginLeft='1'
                                            _light={{
                                                color:'gray.500'
                                            }}
                                        >
                                            {item.recipie.price}
                                        </Text>
                                    </Box>
                                </Box>
                                <Box
                                    display='flex'
                                    flexDirection='row'
                                    justifyContent='space-between'
                                    pl='2'
                                    
                                >

                                    <Box
                                        display='flex'
                                        flexDirection='row'
                                        alignItems='center'

                                    >
                                        <FontAwesome5 name="rupee-sign" size={16} color="#71717a" />
                                        <Text 
                                            fontWeight={700}
                                            fontSize={18}
                                            marginLeft='1'
                                            _light={{
                                                color:'gray.500'
                                            }}
                                        >
                                            {item.recipie.price*item.count}
                                        </Text>
                                    </Box>
                                    <Box
                                        display='flex'
                                        flexDirection = 'row'
                                        alignItems='center'
                                    >
                                        <Button 
                                            variant='ghost'
                                            isLoading={props.cart.loadingRecipie === item.recipie._id}
                                            leftIcon={
                                                <AntDesign name="minuscircle" size={18} color="#FF8718" />
                                            }
                                            _pressed={{
                                                bg:'transparent'
                                            }}
                                            
                                            onPress={()=>removeCart(item.recipie._id)}
                                        />
                                        <Text
                                            fontSize={18}
                                        >{item.count}</Text>
                                        <Button 
                                            variant='ghost'
                                            leftIcon={
                                                <AntDesign name="pluscircle" size={18} color="#FF8718" />
                                            }
                                            isLoading={props.cart.loadingRecipie === item.recipie._id}
                                            onPress={()=>addCart(item.recipie._id)}
                                            pressed={{
                                                bg:'transparent'
                                            }}
                                            
                                        />
                                    </Box>    
                                </Box>
                                   
                            </Box>
                        </Box>
                    )
                })
            }
            <Box
                m='2'
                p='2'
                _light={{
                    bg:'white',
                }}
                display='flex'
                flexDirection='row'
                alignItems='center'
                justifyContent='space-between'
            >   
                <Text
                    fontWeight={700}
                >
                    Seats
                </Text>
                <Box
                    display='flex'
                    flexDirection = 'row'
                    alignItems='center'
                >
                    <Button 
                        variant='ghost'
                        leftIcon={
                            <AntDesign name="minuscircle" size={18} color="#FF8718" />
                        }
                        _pressed={{
                            bg:'transparent'
                        }}
                        
                        onPress={()=>seatHandler(seats-1)}
                    />
                    <Text
                        fontSize={18}
                    >{seats}</Text>
                    <Button 
                        variant='ghost'
                        leftIcon={
                            <AntDesign name="pluscircle" size={18} color="#FF8718" />
                        }
                        onPress={()=>seatHandler(seats+1)}
                        pressed={{
                            bg:'transparent'
                        }}
                        
                    />
                </Box>  
            </Box>
            <Box>
                <Button
                    mt='5'
                    m='2'
                    mb='7'
                    _light={{
                        bg:'blueGray.900'
                    }}
                    onPress={()=>{
                        props.navigation.navigate('Order',{seats})
                    }}
                >
                    Continue
                </Button>
            </Box>
        </ScrollView>
    )
}

const mapStateToProps = state => state
export default connect(mapStateToProps) (CartScreen)

const styles = StyleSheet.create({

})