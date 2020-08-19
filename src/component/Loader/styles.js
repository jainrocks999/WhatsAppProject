import {StyleSheet} from 'react-native';
//import Colors from '../../Config/Colors';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'rgba(248,249,249,0.5)',
        justifyContent: 'center',
        alignItems:'center',
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        zIndex:999
    },
    loadingview:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 10,
    },
    txt:{
      marginLeft: 10,
      marginTop: 5
    },
   
})