import { Box, Button, ScrollView, Text } from 'native-base';
import React from 'react';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import RecipieList from '../components/RecipieList';
import { fetchCart } from '../redux/actions/cart';
import { fetchRecipies } from '../redux/actions/recipie';

const Homescreen = (props) => {
    useEffect(() => {
        if(props.recipie && props.recipie.recipies && props.recipie.recipies.length === 0){
            fetchRecipies()
            fetchCart()
        }
        
        return () => {

        }
    }, [])
    return (
        <ScrollView 
            // bg='gray.300' 
            _dark={{bg:'#002B39'}}
        >
            {props.recipie && props.recipie.recipies && 
            
                <RecipieList 
                    recipies={props.recipie.recipies} 
                    cart = {props.cart}
                />
            }
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({})
const mapStateToProps = state => state

export default connect(mapStateToProps)(Homescreen);
