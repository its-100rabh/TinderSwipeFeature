import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import data from './data';
import { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Card = ({ card }) => (
  <View style={[styles.cardmain, { backgroundColor: card.color }]}>
  </View>
)

export default function App() {
  const [index, setIndex] = useState(0);
  const onSwiped = () => {
    setIndex((index + 1) % data.length); //for the number of cards
  }
  return (
    <View style={styles.container}>
      <Swiper
        cards={data}
        cardIndex={index}
        renderCard={(card) => <Card card={card} />}
        onSwiped={onSwiped}
        stackSize={3}
        stackScale={10}
        stackSeparation={55}
        disableBottomSwipe
        disableTopSwipe
        animateOverlayLabelsOpacity
        animateCardOpacity
        backgroundColor='transparent'
        overlayLabels={{
          left: {
            element: (
              <Entypo name="circle-with-cross" size={100} color="red" /> //cross icon
            ),
            style: {
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 40,
                paddingRight: 20
              }
            }
          },
          right: {
            element: (
              <AntDesign name="checkcircle" size={100} color="yellowgreen" /> //check icon
            ),
            style: {
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 50,
                paddingLeft: 20
              }
            }
          },
        }}

      />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardmain: {
    flex: 1,
    borderRadius: 10,
    shadowRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    marginLeft: 10,
    marginTop: 38,
    width: 326,
    maxHeight: 550
  },

});
