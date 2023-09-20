/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import newsData from './news_data.json';
import news_banner_data from "./news_banner_data.json";
import NewsCard from './src/components/NewsCard';

const App = () => {
  const renderNews = ({item}) => {
    return <NewsCard news={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
      
        <FlatList
          ListHeaderComponent={() => (
            <View>
                <Text style={styles.headerText}>News</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        {
          news_banner_data.map((bannernews) => {
            return(<Image key={bannernews.id} source={{uri:bannernews.imageUrl}} style={styles.bannerImage} />);
          })
        }
        </ScrollView>
        </View>
          )}
          keyExtractor={item => item.u_id.toString()}
          data={newsData}
          renderItem={renderNews}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  bannerImage: {
    height:Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 2

  },
  headerText: {
    fontSize:40,
    fontWeight:'bold',
    textAlign:'center',
    marginVertical:10
  }
});

export default App;
