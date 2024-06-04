import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import colors from '../../src/theme/colors.js';
import { ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const HomeScreen = () => {
    const [opacity, setOpacity] = useState(100);

    const [result, setResult] = useState(0);
    const [resultDate, setResultDate] = useState("");

    const THINGSPEAK_API_KEY = 'YOUR_THINGSPEAK_API_KEY'; 
    const YOUR_CHANNEL_ID = 'YOUR_CHANNEL_ID';

    const [temperatureData, setTemperatureData] = useState({
        labels: ["null"],
        datasets: [{ data: [0] }],
      });

      const [humidityData, setHumidityData] = useState({
        labels: ["null"],
        datasets: [{ data: [0] }],
      });

      const [distanceData, setDistanceData] = useState({
        labels: ["null"],
        datasets: [{ data: [0] }],
      });

      const [piezoData, setPiezoData] = useState({
        labels: ["null"],
        datasets: [{ data: [0] }],
      });
    
      useEffect(() => {

        const getAllData = async () =>{
            getTemperatureData();
            getHumidityData();
            getDistanceData();
            getPiezoData();
        }


        const getTemperatureData = async () => {
          const results = "";
    
          try {
            const response = await axios.get(
              `https://api.thingspeak.com/channels/${YOUR_CHANNEL_ID}/fields/2.json`,
              {
                params: {
                  api_key: THINGSPEAK_API_KEY,
                  results,
                },
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            );
    
            const responseData = response.data;

            const feeds = responseData.feeds;
            const labels = feeds
            .filter((feed) => {
                const timestamp = new Date(feed.created_at);
                const hours = timestamp.getHours();
                const mins = timestamp.getMinutes();
                return !isNaN(parseFloat(feed.field2)) && hours >= 19 && hours < 20 ;
            }).map((feed) => {
                const timestamp = new Date(feed.created_at);
                return `${timestamp.getHours()}:${timestamp.getMinutes()}`;
            });

            
            
            const data = feeds
                .filter((feed) => {
                    const timestamp = new Date(feed.created_at);
                    const hours = timestamp.getHours();
                    return !isNaN(parseFloat(feed.field2)) && hours >= 19 && hours < 20;
                })
                .map((feed) => parseFloat(feed.field2));
            
            
            setTemperatureData({
                labels: [labels],
                datasets: [
                {
                    data: data,
                },
                ],
            });
            } catch (error) {
            console.error(error.message);
            }
        };

        const getHumidityData = async () => {
            const results = "";
      
            try {
              const response = await axios.get(
                `https://api.thingspeak.com/channels/${YOUR_CHANNEL_ID}/fields/3.json`,
                {
                  params: {
                    api_key: THINGSPEAK_API_KEY,
                    results,
                  },
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
              );
      
              const responseData = response.data;
  
              const feeds = responseData.feeds;
              const labels = feeds
              .filter((feed) => {
                  const timestamp = new Date(feed.created_at);
                  const hours = timestamp.getHours();
                  const mins = timestamp.getMinutes();
                  return !isNaN(parseFloat(feed.field3)) && hours >= 19 && hours < 20 ;
              }).map((feed) => {
                  const timestamp = new Date(feed.created_at);
                  return `${timestamp.getHours()}:${timestamp.getMinutes()}`;
              });
  
              
              
              const data = feeds
                  .filter((feed) => {
                      const timestamp = new Date(feed.created_at);
                      const hours = timestamp.getHours();
                      return !isNaN(parseFloat(feed.field3)) && hours >= 19 && hours < 20;
                  })
                  .map((feed) => parseFloat(feed.field3));
              
              
              setHumidityData({
                  labels: [labels],
                  datasets: [
                  {
                      data: data,
                  },
                  ],
              });
              } catch (error) {
              console.error(error.message);
              }
          };

          const getDistanceData = async () => {
            const results = "";
      
            try {
              const response = await axios.get(
                `https://api.thingspeak.com/channels/${YOUR_CHANNEL_ID}/fields/1.json`,
                {
                  params: {
                    api_key: THINGSPEAK_API_KEY,
                    results,
                  },
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
              );
      
              const responseData = response.data;
  
              const feeds = responseData.feeds;
              const labels = feeds
              .filter((feed) => {
                  const timestamp = new Date(feed.created_at);
                  const hours = timestamp.getHours();
                  const mins = timestamp.getMinutes();
                  return !isNaN(parseFloat(feed.field1)) && hours >= 19 && hours < 20 ;
              }).map((feed) => {
                  const timestamp = new Date(feed.created_at);
                  return `${timestamp.getHours()}:${timestamp.getMinutes()}`;
              });
  
              
              
              const data = feeds
                  .filter((feed) => {
                      const timestamp = new Date(feed.created_at);
                      const hours = timestamp.getHours();
                      return !isNaN(parseFloat(feed.field1)) && hours >= 19 && hours < 20;
                  })
                  .map((feed) => parseFloat(feed.field1));
              
              
              setDistanceData({
                  labels: [labels],
                  datasets: [
                  {
                      data: data,
                  },
                  ],
              });
              } catch (error) {
              console.error(error.message);
              }
          };

          const getPiezoData = async () => {
            const results = "";
            try {
              const response = await axios.get(
                `https://api.thingspeak.com/channels/${YOUR_CHANNEL_ID}/fields/1.json`,
                {
                  params: {
                    api_key: THINGSPEAK_API_KEY,
                    results,
                  },
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
              );
      
              const responseData = response.data;
  
              const feeds = responseData.feeds;
              const labels = feeds
              .filter((feed) => {
                  const timestamp = new Date(feed.created_at);
                  const hours = timestamp.getHours();
                  const mins = timestamp.getMinutes();
                  return !isNaN(parseFloat(feed.field1)) && mins >= 7 && mins < 24;
              }).map((feed) => {
                  const timestamp = new Date(feed.created_at);
                  return `${timestamp.getHours()}:${timestamp.getMinutes()}`;
              });
  
              
              
              const data = feeds
                  .filter((feed) => {
                      const timestamp = new Date(feed.created_at);
                      const hours = timestamp.getHours();
                      const mins = timestamp.getMinutes();
                      return !isNaN(parseFloat(feed.field1))  && mins >= 7 && mins < 24;
                  })
                  .map((feed) => parseFloat(feed.field1));
              
              
              setPiezoData({
                  labels: [labels],
                  datasets: [
                  {
                      data: data,
                  },
                  ],
              });
              } catch (error) {
              console.error(error.message);
              }
          };

          

        const fetchData = async () => {
          await getAllData();
        };
      
        fetchData();
      
        const intervalId = setInterval(async () => {
          await fetchData();
        }, 5000);
      
        return () => {
          clearInterval(intervalId);
        };
        

        }, []);

        const logLastData = () => {

          const temp = temperatureData.datasets[0].data?.slice(-1)[0] ? temperatureData.datasets[0].data?.slice(-1)[0] : 0;
          const hum = humidityData.datasets[0].data?.slice(-1)[0]? humidityData.datasets[0].data?.slice(-1)[0] : 0;
          const dis = distanceData.datasets[0].data?.slice(-1)[0]? distanceData.datasets[0].data?.slice(-1)[0] : 0;
          const piezo = piezoData.datasets[0].data?.slice(-1)[0]? piezoData.datasets[0].data?.slice(-1)[0] : 0;
          console.log("Temperature Data:", temp);
          console.log("Humidity Data:", hum);
          console.log("Distance Data:", dis);
          console.log("Piezo Data:", piezo);
          console.log("-----------------------");
          const resultTemp = (temp * (-15/100)) + ((hum / 2) * (35/100)) + ((dis / 10) * (-10/100)) + ((piezo / 100) * (40/100));
          setResult(resultTemp);
          setResultDate(Date().toString());
          console.log("Result:", resultTemp);
          console.log("Date:", temperatureData.labels[-1]);

          console.log("-----------------------");
          console.log("Is Freezing:", result>18);
      };


        useEffect(() => {
          logLastData();
        },[temperatureData, piezoData, humidityData, distanceData]);
    
      if (piezoData.labels.length == 0 && temperatureData.labels.length == 0 && humidityData.labels.length == 0 && distanceData.labels.length == 0 ) {
        
        return null;
      }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white',}}>
             <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
            <View 
            style={[styles.headerWrapper]}
            >
                
                <View style={{display: 'flex', flexDirection:'row', justifyContent:'space-between', alignItems: 'center',}}>
                    <View style={styles.titleContainer}>
                        <Text style={[styles.title]}>Anti Freeze Project</Text>
                        <Text style={[styles.subtitle]}>Last Data Calculation: {result}</Text>
                        <Text style={[styles.subtitle]}>Last Data Date: {resultDate}</Text>

                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
                             <Text style={[styles.subtitle]}>Threshold: 20</Text>

                             { result > 20 ? (
                             <View style={{height: 35, width: 150, backgroundColor: 'rgba(255, 0, 0, 0.3)', marginLeft: 30, borderRadius: 15, justifyContent:'center', alignItems: 'center', marginTop: 10}}><Text style={{color: 'red', fontWeight:'bold'}}>Karlanma Var</Text></View>

                             ) : <View style={{height: 35, width: 150, backgroundColor: 'rgba(0, 255, 0, 0.5)', marginLeft: 30, borderRadius: 15, justifyContent:'center', alignItems: 'center', marginTop: 10}}><Text style={{color: 'green', fontWeight:'bold'}}>Karlanma Yok</Text></View> 
                            
                            }
                           
                        </View>
                  
                    </View>
            
                </View>
                
            </View>
                

            </View>

            <View style={styles.scrollWrapper}>
                <ScrollView 
        scrollEventThrottle={16} style={styles.devicesScroll} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}   >


                <Text style={{fontWeight: 'bold'}}> Temperature </Text>
                <LineChart
                data={temperatureData}
                width={300}
                height={200}
                yAxisSuffix="C"
                chartConfig={{
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                    borderRadius: 16,
                },
                propsForDots: {
                    r: '3',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                },
                }}
                bezier
                style={{
                marginTop: 10,
                marginBottom: 50,
                borderRadius: 16,
                }}
                />

            <Text style={{fontWeight: 'bold'}}> Humidity </Text>
                <LineChart
                data={humidityData}
                width={300}
                height={200}
                yAxisSuffix="%"
                chartConfig={{
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                    borderRadius: 16,
                },
                propsForDots: {
                    r: '3',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                },
                }}
                bezier
                style={{
                marginTop: 10,
                marginBottom: 50,
                borderRadius: 16,
                }}
                />

                
            <Text style={{fontWeight: 'bold'}}> Distance </Text>
                <LineChart
                data={distanceData}
                width={300}
                height={200}
                yAxisSuffix="mm"
                chartConfig={{
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                    borderRadius: 16,
                },
                propsForDots: {
                    r: '3',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                },
                }}
                bezier
                style={{
                    marginTop: 10,
                    marginBottom: 50,
                    borderRadius: 16,
                }}
                />

<Text style={{fontWeight: 'bold'}}> Piezo Data </Text>
                <LineChart
                data={piezoData}
                width={300}
                height={200}
                yAxisSuffix="mV"
                chartConfig={{
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                    borderRadius: 16,
                },
                propsForDots: {
                    r: '3',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                },
                }}
                bezier
                style={{
                    marginTop: 10,
                    marginBottom: 50,
                    borderRadius: 16,
                }}
                />
                </ScrollView>
            </View>

           
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    scrollWrapper: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: colors.lightgrey,
        borderTopWidth: 1,
        marginTop: 90

    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.black,
    },

    subtitle: {
        fontSize: 20,
        color: colors.black,
        marginTop: 14
    },
   
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: "flex-start",
        marginLeft: 20
    },
    devicesScroll: {
        marginTop: 20
    },
   
});

export default HomeScreen;