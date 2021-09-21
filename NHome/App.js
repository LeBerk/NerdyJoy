import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import BuyScreen from './components/BuyPoints';
import AssistantScreen from './components/Assistant';
import FeatureScreen from './components/Features';
import GiftcardsScreen from './components/GiftCards';

class HomeScreen extends React.Component{
render()  {
return (  
     <View style={styles.container}>       
         <Text style={styles.home}>HOME</Text> 
         <View style={{left: 150, bottom: 40}}>
             <Image source={require('./assets/top.png')} />
         </View>
         <Text style={{color: '#061DAB', fontSize: 20, fontWeight: 'bold', left: 150, bottom: 40}}>100NP</Text>      
         
         <View style={styles.buybotton}>
             <TouchableOpacity onPress={() => this.props.navigation.navigate('BuyScreen')}>
                 <Text style={styles.buytext}>Buy Points</Text>
             </TouchableOpacity>
         </View>
         <Text style={{fontSize: 16, color: '#263238'}}>See your progress</Text>
         <Text style={{fontSize: 10, color: '#607d8b'}}>Days you have learned!</Text>
         <Image source={require('./assets/calender.png')} />
         <View style={styles.cardhome1}>
             <View style={{left: 230, top: 20}}>
                 <Image source={require('./assets/monkey.png')}/>
             </View>
             <Text style={{fontSize: 34, fontWeight: 'bold', color: '#18191f', bottom: 90, left: 15}}>Buy new pets & assistants!</Text>
             <View style={styles.botton1}>              
                 <TouchableOpacity onPress={()=> this.props.navigation.navigate('Assistant')}>
                     <Text style={{fontSize: 12, color: '#fff', fontWeight: 'bold', top: 10, textAlign: 'center'}}>Go!</Text>
                </TouchableOpacity>
             </View>
         </View>

         <View style={styles.cardhome2}>
             <View style={{left: 230, top: 50}}>
                 <Image source={require('./assets/treasure.png')} />
             </View>
             <Text style={{fontSize: 34, fontWeight: 'bold', color: '#141415', bottom: 50, left: 15}}>Claim cool perks with points</Text>
             <View style={styles.botton2}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Perks')}>
                 <Text style={{color: '#fff', top: 7, textAlign: 'center'}}>Claim</Text>
              </TouchableOpacity>
             </View>
         </View>
     </View>  
 );  
 }
}

class LessonScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>       
       <Text style={styles.DailyLessons}>Daily Lesson </Text> 
       <View style={styles.LessonContainer}>
        <Text style={styles.LessonName}>How to make money in the stock market</Text>
            <View style={styles.Button}>
                <Text style={{left: 15, top: 8, fontWeight: 'bold', fontSize: 18}}>Read</Text>
            </View>
            <Text style={{top: 150, left: 20, fontSize: 17, fontWeight: 'bold'}}>Berk LEE</Text>
            <Text style={{top: 150, left: 20, fontSize: 13}}>30 March, 20</Text>
       </View>      
    </View>  
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>       
        <Text>Profile Screen</Text>      
    </View>  
    );
  }
}

class PerksScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Icon size={30} name={'leftcircleo'} style={{right: 180, top: 35}}/>      
      <Text style={styles.textfeature}>Perks</Text>
          <View style={styles.card1}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Features')}>
                  <Image source={require('./assets/lock.png')} style={{ left: 100, top: 50}}/>
              </TouchableOpacity>
          </View>
          <Text style={{fontSize: 25, fontWeight: 'bold', top: 23}}>In-app Perks</Text>
          <View style={styles.card2}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('GiftCards')}>
              <Image source={require('./assets/cards.png')} style={{ left: 60, top: 50}}/>
            </TouchableOpacity>
          </View>
          <Text style={{fontWeight: 'bold', fontSize: 25, textAlign: 'center', top: 23}}>Gift Cards</Text>
          <View style={styles.card3}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Assistant')}>
              <Image source={require('./assets/clothes.png')} style={{left: 80, top: 50}}/>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 25, fontWeight: 'bold', top: 23}}> Assistant Accessories</Text>
   </View>    
    );
  }
}

const navOptionHandler = (navigation) => ({
  header: false
})

const LessonStack = createStackNavigator({
  Lesson: { 
    screen: LessonScreen, 
    navigationOptions: navOptionHandler 
  },
});

const HomeStack = createStackNavigator({
  Home: { 
    screen: HomeScreen, 
    navigationOptions: navOptionHandler
  },
  BuyScreen: { 
    screen: BuyScreen,
    navigationOptions: navOptionHandler 
  },
  Assistant: {
    screen: AssistantScreen,
    navigationOptions: navOptionHandler
  },
  Perks: {
    screen: PerksScreen,
    navigationOptions: navOptionHandler
  },
  Features: {
    screen: FeatureScreen,
    navigationOptions: navOptionHandler
  },
  GiftCards: {
    screen: GiftcardsScreen,
    navigationOptions: navOptionHandler
  }
});

const ProfileStack = createStackNavigator({
  Profile: { screen: ProfileScreen },
});

export default createAppContainer(createBottomTabNavigator(
  {
    Lessons: { screen: LessonStack },
    Home: { screen: HomeStack },
    Profile: { screen: ProfileStack},
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Lesson') {
          iconName = 'file1';
        } else if (routeName === 'Home') {
          iconName = 'home';
        }
        else if (routeName === 'Profile') {
          iconName = 'profile';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
  }
));

const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
       flexDirection: 'column',
      justifyContent: 'center',  
      alignItems: 'center'  
  }, 
  home: {
      fontWeight: 'bold',
      fontSize: 44,
      right: 130,
  },
  buybotton:{
      width: 100,
      height: 22,
      borderRadius: 16,
      backgroundColor: '#DC7515',
      left: 150,
      bottom: 35
  },
  buytext: {
      fontSize: 15,
      color: '#fff',
      textAlign: 'center'
  },
  cardhome1: {
      backgroundColor: '#ffbd12',
      width: 327,
      height: 154,
      borderRadius: 16,
  },
  botton1: {
      width: 53,
      height: 36,
      borderRadius: 12,
      backgroundColor: '#18191f',
      bottom: 80,
      left: 15
  },
  botton2: {
      width: 53,
      height: 36,
      borderRadius: 12,
      backgroundColor: '#18191f',
      bottom: 40,
      left: 15
  },
  cardhome2: {
      backgroundColor: '#cf26d2',
      width: 327,
      height: 156,
      borderRadius: 16,
      top: 20
  },
  DailyLessons: {
    fontSize: 44,
    fontWeight: 'bold'
},
LessonContainer: {
    backgroundColor: '#FFF3F8',
    borderRadius: 16,
    width: 327,
    height: 396
},
LessonName: {
    fontSize: 50,
    fontWeight: 'bold',
    left: 40,
    top: 100,
},
Button: {
    backgroundColor: '#FFBD12',
    height: 36,
    width: 65,
    borderRadius: 12,
    top: 180,
    left: 225
}, 
textfeature: {
  fontSize: 27,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#18191F',
},
card1: {
  height: 212,
  width: 327,
  top: 24,
  borderRadius: 12,
  backgroundColor: '#5906C3'
},
card2: {
  height: 212,
  width: 327,
  top: 24,
  borderRadius: 12,
  backgroundColor: '#122AFF'
},
card3: {
  height: 212,
  width: 327,
  top: 24,
  borderRadius: 12,
  backgroundColor: '#FA00FF'
}
});  




