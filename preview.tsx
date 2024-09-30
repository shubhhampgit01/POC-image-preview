import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  clamp,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import ArrowIcon from './assets/icon';

const Preview = () => {
  const width = Dimensions.get('screen').width - 20;
  const boxSize = 80;
  const height = 350;
  const translationX = useSharedValue(width / 2 - boxSize / 2);
  const translationY = useSharedValue(height / 2 - boxSize / 2);
  const prevTranslationX = useSharedValue(150);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {translateX: translationX.value},
      {translateY: translationY.value},
    ],
  }));

  const pan = Gesture.Pan()
    .onStart(() => {
      prevTranslationX.value = translationX.value;
    })
    .onUpdate(event => {
      const maxTranslateX = width - 80;
      // translationX.value = prevTranslationX.value + event.translationX;
      translationX.value = clamp(
        prevTranslationX.value + event.translationX,
        0,
        maxTranslateX,
      );
      console.log(translationX.value);
    })
    .runOnJS(true);

  const leftImageStyle = useAnimatedStyle(() => ({
    width: translationX.value + boxSize / 2,
  }));

  const rightImageStyle = useAnimatedStyle(() => ({
    width: width / 2 - (translationX.value - (width / 2 - boxSize / 2)),
  }));
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <Text style={{color: 'white', fontSize: 30, fontWeight: 700}}>
        Compare
      </Text>
      <GestureHandlerRootView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            borderRadius: 30,
            overflow: 'hidden',
            height: height,
            width: width,
            flexDirection: 'row',
            gap: 10,
            position: 'relative',
          }}>
          <Animated.View style={[leftImageStyle]}>
            <Image
              style={{position: 'absolute', height: '100%', width: '100%'}}
              source={require('./assets/img/image1.jpg')}
            />
          </Animated.View>
          <GestureDetector gesture={pan}>
            <Animated.View
              style={[
                animatedStyles,
                {
                  height: boxSize,
                  width: boxSize,
                  zIndex: 999,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 30,
                  backgroundColor: 'white',
                  position: 'absolute',
                  transform: [{translateY: 150}],
                  borderRadius: 40,
                },
              ]}>
              <View style={{transform: [{rotate: '-90deg'}]}}>
                <ArrowIcon color={'black'} height={10} width={20} />
              </View>
              <View style={{transform: [{rotate: '90deg'}]}}>
                <ArrowIcon color={'black'} height={10} width={20} />
              </View>
            </Animated.View>
          </GestureDetector>

          <Animated.View style={[rightImageStyle]}>
            <Image
              style={{position: 'absolute', height: '100%', width: '100%'}}
              source={require('./assets/img/image2.jpg')}
            />
          </Animated.View>
        </View>
      </GestureHandlerRootView>
    </View>
  );
};

export default Preview;
