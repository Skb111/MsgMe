import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, View } from 'react-native'
import ScreenWrapper from '../components/ScreenWrapper'
import { hp, wp } from '../helpers/common'


const welcome = () => {
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* {WELCOME IMAGE} */}
        <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/welcome.png')} />
      </View>
    </ScreenWrapper>
  )
}

export default welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: wp(4)
  },
  welcomeImage:{
    height:hp(30),
    width: wp(100),
    alignSelf: 'center'
  }
})