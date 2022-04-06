import { Box, Image, Text, Button } from 'native-base'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { addCart, removeAll } from '../redux/actions/cart';
function RecipieItem({recipie,cart}) {
    const [added,setAdded] = React.useState(false)
    // console.log(recipie)
    
    console.log(recipie._id)
    console.log(cart)
    const updateCart = async()=>{
        if(added){
            removeAll(recipie._id.toString())
        }else{
            addCart(recipie._id.toString())
        }
        
        // addCart
    }
    React.useEffect(()=>{
        if(cart && cart.items){
            const isInCart = !cart.items.every((item)=>{
                return item.recipie._id.toString() !== recipie._id.toString()
            })
            setAdded(isInCart)
        }
    },[cart,recipie])
    return (
        <Box
            _light={{
                bg:'white'
            }}
            
            display='flex'
            flexDirection='row'
            shadow='1'
            margin='2'
            padding='2'
            position='relative'
            
        >
            <Box>
                <Image 
                    source={{uri: recipie.image}} 
                    alt={recipie.name} 
                    style={{
                        width:100,
                        height:100,
                        borderRadius:2
                    }}
                />
            </Box>
            <Box
                paddingLeft={2}
                flex={1}
            >
                <Text
                    fontWeight={700}
                    fontSize={18}
                >{recipie.name}</Text>
                <Text
                    _light={{
                        color:'gray.500'
                    }}
                >{recipie.description.substring(0,30)}...</Text>
                <Box
                    display='flex'
                    flexDirection='row'
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
                            {(recipie.rating.rated)/recipie.rating.count}
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
                            {recipie.price}
                        </Text>
                    </Box>
                    
                    
                </Box>
                <Box
                   
                >

                </Box>
                <Button
                    // startIcon={<AntDesign name="minuscircleo"  color="black" />}
                    // endIcon={<AntDesign name="pluscircleo"  color="black" />}
                    _light={{
                        bg: '#FF8718',
                    }}
                    width='70'
                    padding='1'
                    position='absolute'
                    right='0'
                    bottom='0'
                    onPress={updateCart}
                    isLoading={recipie._id.toString() === cart.loadingRecipie}
                >
                    {added?'Remove':'Add'}
                </Button>
            </Box>
            {console.log(added)}
        </Box>
    )
}

export default RecipieItem