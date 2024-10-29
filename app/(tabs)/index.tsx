import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import LottieView from 'lottie-react-native';

export default function HomeScreen() {

  const onAnimationFinished = () => { 
    alert('done')
  }
  return (
    <ParallaxScrollView
      headerBackgroundColor={{dark: '#1D3D47' }}
      headerImage={
        null
      }>
      <View style={styles.container}>
        <LottieView
          source={require('@/assets/lottie/lottie.json')}
          autoPlay
          loop={false}
          style={{ width: 200, height: 200 }}
          onAnimationFinish={onAnimationFinished}
        />
      </View>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
