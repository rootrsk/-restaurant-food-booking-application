import { Box } from 'native-base'
import React from 'react'
import RecipieItem from './RecipieItem'

function RecipieList({recipies,cart}) {
    return (
        <Box>
            {recipies && recipies.map((recipie,index)=>{
                return <RecipieItem recipie={recipie} key={index} cart={cart} />
            })}
        </Box>
    )
}

export default RecipieList