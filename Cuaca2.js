import React from 'react';
import { AppRegistry, StyleSheet, Text, Button, TextInput, View, Image, ActivityIndicator } from 'react-native';

const iconTemp = require('./Icon/temper.png');
const iconWind = require('./Icon/wind.png');
const iconMain = require('./Icon/ohsunny.png');
const iconDesc = require('./Icon/sunsunny.png');
const iconSunrise = require('./Icon/sunrise.png');
const iconSunset = require('./Icon/sunset.png');
const iconPressure = require('./Icon/pressure.png');
const iconHumidity = require('./Icon/humidity.png');
const iconSeaLvl = require('./Icon/sea.png');
const iconGndLvl = require('./Icon/tanah.png');

export default class Cuaca2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      city:'',
      showLoading: true,
      forecast:{
        main: '-',
        description: '-',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sealvl: 0,
        gndLvl: 0,
        speed: 0,
      }
    };
  }

  componentWillMount(){
    setTimeout(()=>{
      this.setState({
        showLoading: false
      })
    },
    3000)
  }

  async getWeather(){

  try{

    let response = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+ '&appid=d78323d711bc7127713ef3f0406d4113&units=metric'

    );

    let responseJson = await response.json();
    return this.setState({
      forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp,
          sunrise: responseJson.sys.sunrise,
          sunset: responseJson.sys.sunset,
          pressure: responseJson.main.pressure,
          humidity: responseJson.main.humidity,
          seaLvl: responseJson.main.sea_level,
          gndLvl: responseJson.main.grnd_level,
          speed: responseJson.wind.speed
      }
    });
  }catch (error){
    console.error(error)
  }
}


  render() {
    return (

    <View style={styles.containerMain}>

      <View style={styles.boxHeader}>
          <Text style={{ textAlign: 'center', padding: 45, fontSize: 25, color: '#E8F5E9'}} >Aplikasi Ramalan Cuaca</Text>
      </View>

      <View style={styles.boxPencarian}>
          <Text style={{ textAlign: 'center', padding: 1, fontSize: 20 , color: '#E8F5E9'}}>Masukan Nama Kota</Text>

          <View style={styles.textBoxStyle}>
          <TextInput style = {{height: 40}}
              placeholder="Masukkan Nama Kota"
              onChangeText={(city)=>this.setState({city})}
          />
          </View>

          <View style={styles.buttonStyle}>
          <Button
              onPress={
                () => this.getWeather()
              }
              title="Lihat"
              color="#87CEEB"
              accessibilityLabel="Klik untuk melihat"
            />
          </View>
      </View>


      <View style={styles.isiTengah}>

        <View style={styles.boxItem}>
          <View style={styles.BoxItemInner}>
            <Image source={iconTemp} style={styles.boxIcon} />
            <View style={styles.boxItemValue}>
              <Text style = {{padding: 2, fontSize: 16, color: 'white'}} >Temp : {this.state.forecast.temp} 'C</Text>
            </View>
          </View>
        </View>

        <View style={styles.boxItem}>
          <View style={styles.BoxItemInner}>
            <Image source={iconWind} style={styles.boxIcon} />
            <View style={styles.boxItemValue}>
              <Text style = {{padding: 2, fontSize: 16, color: 'white'}} >Wind Speed: {this.state.forecast.speed}</Text>
            </View>
          </View>
        </View>

        <View style={styles.boxItem}>
          <View style={styles.BoxItemInner}>
            <Image source={iconMain} style={styles.boxIcon} />
            <View style={styles.boxItemValue}>
              <Text style = {{padding: 2, fontSize: 16, color: 'white'}} >Main : {this.state.forecast.main}</Text>
            </View>
          </View>
        </View>

        <View style={styles.boxItem}>
          <View style={styles.BoxItemInner}>
            <Image source={iconDesc} style={styles.boxIcon} />
            <View style={styles.boxItemValue}>
              <Text style = {{padding: 2, fontSize: 16, color: 'white'}} >Main Desc : {this.state.forecast.description}</Text>
            </View>
          </View>
        </View>

        <View style={styles.boxItem}>
          <View style={styles.BoxItemInner}>
            <Image source={iconSunrise} style={styles.boxIcon} />
            <View style={styles.boxItemValue}>
              <Text style = {{padding: 2, fontSize: 16, color: 'white'}} >Sunrise : {this.state.forecast.sunrise}</Text>
            </View>
          </View>
        </View>

        <View style={styles.boxItem}>
          <View style={styles.BoxItemInner}>
            <Image source={iconSunset} style={styles.boxIcon} />
            <View style={styles.boxItemValue}>
              <Text style = {{padding: 2, fontSize: 16, color: 'white'}} >Sunset : {this.state.forecast.sunset}</Text>
            </View>
          </View>
        </View>

        <View style={styles.boxItem}>
          <View style={styles.BoxItemInner}>
            <Image source={iconPressure} style={styles.boxIcon} />
            <View style={styles.boxItemValue}>
              <Text style = {{padding: 2, fontSize: 16, color: 'white'}} >Pressure : {this.state.forecast.pressure}</Text>
            </View>
          </View>
        </View>

        <View style={styles.boxItem}>
          <View style={styles.BoxItemInner}>
            <Image source={iconHumidity} style={styles.boxIcon} />
            <View style={styles.boxItemValue}>
              <Text style = {{padding: 2, fontSize: 16, color: 'white'}} >Humidity : {this.state.forecast.humidity} % </Text>
            </View>
          </View>
        </View>

        <View style={styles.boxItem}>
          <View style={styles.BoxItemInner}>
            <Image source={iconSeaLvl} style={styles.boxIcon} />
            <View style={styles.boxItemValue}>
              <Text style = {{padding: 2, fontSize: 16, color: 'white'}} >Sea Level : {this.state.forecast.seaLvl}</Text>
            </View>
          </View>
        </View>

        <View style={styles.boxItem}>
          <View style={styles.BoxItemInner}>
            <Image source={iconGndLvl} style={styles.boxIcon} />
            <View style={styles.boxItemValue}>
              <Text style = {{padding: 2, fontSize: 16, color: 'white'}} >Ground Level : {this.state.forecast.gndLvl}</Text>
            </View>
          </View>
        </View>

      </View>

      <View style={styles.boxFotter}>
          <Text style={{ textAlign: 'center', padding: 3, fontSize: 14}} >Copy Right TasyaPermata @App</Text>
      </View>

</View>
    );
  }
}


const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#87CEEB',
    flex: 1,
    flexDirection: 'column'
  },
  boxFotter: {
    height: '10%',
    backgroundColor: '#4169E1',
  },
  boxHeader: {
    height: '15%',
    backgroundColor: '#4169E1',
  },

  boxPencarian: {
    //flex: 0.7,
    height: '20%',
    backgroundColor: '#4169E1',
    margin: 10
  },
  isiTengah: {
    //flex: 1,
    height: '55%',
    //backgroundColor: '#81C784',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    //justifyContent: 'space-around',
    //alignItems: 'center',
    flexDirection: 'row',
    flexWrap: "wrap",
    //padding: 5
  },
  buttonStyle: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center'
  },
  textBoxStyle: {
    //flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  boxItem: {
    width: '50%',
    height: '20%',
    padding: 5,
  },
  BoxItemInner: {
    flex: 1,
    backgroundColor: '#4169E1',
    flexDirection: 'row',
    flexWrap: "wrap",
    borderColor: 'black',
    borderWidth: 2
  },
  boxIcon: {
    width: '35%',
    height: '100%',
    backgroundColor: '#AFEEEE',
    justifyContent: 'center',
  },
  boxItemValue: {
    width: '65%',
    height: '100%',
    justifyContent: 'center',
  },
  containerLoading:{
    padding: '50%',
    justifyContent: 'space-around',
    alignItems: 'center',
  }


});
