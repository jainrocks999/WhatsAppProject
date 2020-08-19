import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
//import { connect } from 'react-redux';
//import Toast from 'react-native-simple-toast';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      navigateTo: props.navigation.getParam('navigateTo'),
      showPassword: true,
      User_Name: '',
      Email: '',
      Phone_Number: '',
      Password: '',
      Repeat_Password: '',
    };
  }

  toggleSwitch() {
    this.setState({showPassword: !this.state.showPassword});
  }
  doRegister = () => {
    const {User_Name, Email, Password, Phone_Number, navigateTo} = this.state;
    // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if (Email == '') {
      //Toast.show('Please enter valid e-mail address.');
    } else if (Password == '') {
      //Toast.show('Please enter password.');
    } else if (Phone_Number == '') {
      //Toast.show('Please enter phone number');
    } else if (User_Name == '') {
      // Toast.show('Please enter name');
    } else {
      console.log(
        'Register Detail' + Email + User_Name + Password + Phone_Number,
      );

      this.props.dispatch({
        type: 'User_Register_Request',
        User_Name: User_Name,
        Password: Password,
        navigation: this.props.navigation,
        navigateTo,
      });
    }
  };
  render() {
    return (
      <View style={{flex: 1, padding: 14, backgroundColor: '#fff'}}>
        {/* <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('FirstPage')}>
            <Image
              source={require('./arrow.png')}
              resizeMode={'stretch'}
              style={{width: 20, height: 15, color: 'grey'}}
            />
          </TouchableOpacity>
          <Text style={styles.register}>Register Now</Text>
          <Text style={styles.please}>Please fill detail for register</Text>
        </View> */}

        <Text style={[styles.register, {textAlign: 'center'}]}>
          New User Registration
        </Text>

        <View style={{marginTop: 50}}>
          <View style={styles.input}>
            <TextInput
              style={{paddingLeft: 10}}
              placeholder={'User ID'}
              placeholderTextColor={'#B0B3B7'}
              keyboardType="numeric"
              onChangeText={(Phone_Number) => {
                this.setState({Phone_Number: Phone_Number});
              }}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.input2}>
              <TextInput
                style={{paddingLeft: 10}}
                placeholder={'First Name'}
                keyboardType="numeric"
                onChangeText={(Phone_Number) => {
                  this.setState({Phone_Number: Phone_Number});
                }}
              />
            </View>
            <View style={styles.input2}>
              <TextInput
                style={{paddingLeft: 10}}
                placeholder={'Last Name'}
                keyboardType="numeric"
                onChangeText={(Phone_Number) => {
                  this.setState({Phone_Number: Phone_Number});
                }}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.input2}>
              <TextInput
                style={{paddingLeft: 10}}
                placeholder={'Email'}
                keyboardType="numeric"
                onChangeText={(Phone_Number) => {
                  this.setState({Phone_Number: Phone_Number});
                }}
              />
            </View>
            <View style={styles.input2}>
              <TextInput
                style={{paddingLeft: 10}}
                placeholder={'Company'}
                keyboardType="numeric"
                onChangeText={(Phone_Number) => {
                  this.setState({Phone_Number: Phone_Number});
                }}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={[
                styles.input2,
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
              ]}>
              <TextInput
                style={{paddingLeft: 10}}
                placeholder={'--Country--'}
                keyboardType="numeric"
                onChangeText={(Phone_Number) => {
                  this.setState({Phone_Number: Phone_Number});
                }}
              />
              <Image
                style={{height: 20, width: 20}}
                source={require('./arrow.png')}
              />
            </View>
            <View
              style={[
                styles.input2,
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
              ]}>
              <TextInput
                style={{paddingLeft: 10}}
                placeholder={''}
                keyboardType="numeric"
                onChangeText={(Phone_Number) => {
                  this.setState({Phone_Number: Phone_Number});
                }}
              />
              <Image
                style={{height: 20, width: 20}}
                source={require('./arrow.png')}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.input2}>
              <TextInput
                style={{paddingLeft: 10}}
                placeholder={'City'}
                keyboardType="numeric"
                onChangeText={(Phone_Number) => {
                  this.setState({Phone_Number: Phone_Number});
                }}
              />
            </View>
            <View style={styles.input2}>
              <TextInput
                style={{paddingLeft: 10}}
                placeholder={'Pincode'}
                keyboardType="numeric"
                onChangeText={(Phone_Number) => {
                  this.setState({Phone_Number: Phone_Number});
                }}
              />
            </View>
          </View>

          <View style={styles.input}>
            <TextInput
              style={{paddingLeft: 10}}
              placeholder={'Address'}
              keyboardType="numeric"
              onChangeText={(Phone_Number) => {
                this.setState({Phone_Number: Phone_Number});
              }}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={[styles.input2, {backgroundColor: '#E9ECEF'}]}>
              <TextInput
                style={{paddingLeft: 10}}
                placeholder={'+91'}
                placeholderTextColor={'black'}
                keyboardType="numeric"
                onChangeText={(Phone_Number) => {
                  this.setState({Phone_Number: Phone_Number});
                }}
              />
            </View>
            <View style={styles.input2}>
              <TextInput
                style={{paddingLeft: 10}}
                placeholder={'Pincode'}
                keyboardType="numeric"
                onChangeText={(Phone_Number) => {
                  this.setState({Phone_Number: Phone_Number});
                }}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={this.doRegister}>
          <Text style={[{color: 'white'}, styles.font]}>Register</Text>
        </TouchableOpacity>
        {/* <View style={styles.exit}>
          <Text style={{color: '#98999a'}}>Existing User?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={[{color: '#5f85e5'}, styles.font]}> Login Now</Text>
          </TouchableOpacity>
        </View> */}
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Details' + JSON.stringify(state.isFetching));
  return {
    isFetching: state.isFetching,
  };
};

export default Registration;

//   constructor(props) {
//     super(props);
//     this.toggleSwitch = this.toggleSwitch.bind(this);
//     this.state = {
//       navigateTo:props.navigation.getParam('navigateTo'),
//       showPassword: true,
//       User_Name:'',
//       Email:'',
//       Phone_Number:'',
//       Password:'',
//       Repeat_Password:''
//     };
//   }

//   toggleSwitch() {
//     this.setState({showPassword: !this.state.showPassword});
//   }
//   doRegister=()=>{
//     const {User_Name,Email,Password,Phone_Number,navigateTo} = this.state;
//         // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
//          if (Email == '') {
//          Toast.show('Please enter valid e-mail address.');
//          } else if(Password== ''){
//              Toast.show('Please enter password.')
//          }
//          else if(Phone_Number==''){
//            Toast.show('Please enter phone number')
//          }
//           else if(User_Name==''){
//             Toast.show('Please enter name')
//           }
//          else{
//          console.log('Register Detail'+Email+User_Name+Password+Phone_Number)

//              this.props.dispatch({type:'User_Register_Request',
//              User_Name:User_Name,Password:Password,
//               navigation:this.props.navigation,navigateTo})
//          }
//    }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Icon
//           style={{color: 'black'}}
//           onPress={() => this.props.navigation.navigate('FirstPage')}
//           name="arrow-back"
//           size={30}
//         />

//         <Text style={styles.headText}>Registration</Text>
//         <View style={styles.textInputContainer}>
//           <Icon
//             style={{color: 'black'}}
//             onPress={() => this.props.navigation.toggleDrawer()}
//             name="person-outline"
//             size={20}
//           />

//           <TextInput
//             style={{paddingLeft: 10}}
//             placeholder={'User Name'}
//             placeholderTextColor={'black'}
//             onChangeText={(User_Name)=>this.setState({User_Name:User_Name})}
//           />
//         </View>
//         <View style={styles.textInputContainer}>
//           <Icon
//             style={{color: 'black'}}
//             onPress={() => this.props.navigation.toggleDrawer()}
//             name="mail-open-outline"
//             size={20}
//           />

//           <TextInput
//             style={{paddingLeft: 10}}
//             placeholder={'Email'}
//             placeholderTextColor={'black'}
//             onChangeText={(Email)=>{this.setState({Email:Email})}}
//           />
//         </View>

//         <View style={styles.textInputContainer}>
//           <Icon
//             style={{color: 'black'}}
//             onPress={() => this.props.navigation.toggleDrawer()}
//             name="call-outline"
//             size={20}
//           />

//           <TextInput
//             style={{paddingLeft: 10}}
//             placeholder={'Phone Number'}
//             placeholderTextColor={'black'}
//             onChangeText={(Phone_Number)=>{this.setState({Phone_Number:Phone_Number})}}
//           />
//         </View>
//         <View style={styles.textInputContainer}>
//           <Icon
//             style={{color: 'black'}}
//             onPress={() => this.props.navigation.navigate('AuthNavigator')}
//             name="lock-closed-outline"
//             size={20}
//           />

//           <TextInput
//             style={{paddingLeft: 10}}
//             placeholder={'Password'}
//             placeholderTextColor={'black'}
//             onChangeText={(Password)=>{this.setState({Password:Password})}}
//           />
//         </View>
//         <View style={styles.textInputContainer}>
//           <Icon
//             style={{color: 'black'}}
//             onPress={() => this.props.navigation.toggleDrawer()}
//             name="lock-closed-outline"
//             size={20}
//           />

//           <TextInput
//             style={{paddingLeft: 10}}
//             placeholder={'Repeat Password'}
//             placeholderTextColor={'black'}
//             secureTextEntry={this.state.showPassword}
//             onChangeText={(Repeat_Password)=>this.setState({Repeat_Password:Repeat_Password})}
//           />
//         </View>
//         <Text style={styles.text}>Alternative login methods</Text>
//         <View style={styles.iconContainer}>
//           <Image
//             style={styles.icons}
//             source={require('../../assets/images/twitter.png')}
//           />
//           <Image
//             style={styles.icons}
//             source={require('../../assets/images/fb.png')}
//           />
//           <Image
//             style={styles.icons}
//             source={require('../../assets/images/google.png')}
//           />
//         </View>
//         <LoginButton title={'Register'} onPress={this.doRegister} />
//       </View>
//     );
//   }
// }
// const mapStateToProps=(state)=>{
//   console.log('Details'+JSON.stringify(state.isFetching))
//     return{
//         isFetching:state.isFetching,
//     }
//   }

//   export default connect(mapStateToProps)(Registration)
