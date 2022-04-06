import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Box,ScrollView, useToast } from 'native-base';
// import { fetchImage } from '../redux/actions/image';
import { connect } from 'react-redux';

const DashboardScreen = (props) => {
    const toast = useToast()
    return (
        <ScrollView 
            bg='gray.300' 
            h={900}
            _dark={{bg:'#002B39'}}    
        >
            
        </ScrollView>
    )
}
const mapStateToProps = state =>state

export default connect(mapStateToProps) (DashboardScreen);

const styles = StyleSheet.create({});
