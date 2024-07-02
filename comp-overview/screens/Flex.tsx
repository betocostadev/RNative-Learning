import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

const Box = ({ color }: { color: string }) => {
  return (
    <View
      style={{
        height: 100,
        width: 75,
        backgroundColor: color,
        flex: 1,
      }}
    ></View>
  )
}

const SmallBox = ({ color }: { color: string }) => {
  return (
    <View
      style={{
        height: 50,
        width: 50,
        backgroundColor: color,
      }}
    ></View>
  )
}

export default function Flex() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.title}>Flexbox container and children</Text>
          </View>
          <View style={styles.flexSectionOne}>
            <Box color="blue" />
            <Box color="red" />
          </View>
          <View style={styles.flexSectionTwo}>
            <Box color="green" />
            <Box color="yellow" />
            <Box color="purple" />
          </View>
          <View style={styles.flexSectionThree}>
            <View style={{ alignSelf: 'flex-start' }}>
              <SmallBox color="red" />
              <SmallBox color="green" />
              <SmallBox color="blue" />
            </View>
            <SmallBox color="purple" />
            <SmallBox color="pink" />
            <SmallBox color="gold" />
          </View>
          <View style={styles.flexSectionFour}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <SmallBox color="red" />
              <SmallBox color="green" />
              <SmallBox color="blue" />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}
            >
              <SmallBox color="orange" />
              <SmallBox color="red" />
              <SmallBox color="magenta" />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end',
                alignContent: 'space-around',
                flexWrap: 'wrap',
              }}
            >
              <SmallBox color="orange" />
              <SmallBox color="red" />
              <SmallBox color="magenta" />
              <SmallBox color="blue" />
              <SmallBox color="red" />
              <SmallBox color="green" />
              <SmallBox color="orange" />
              <SmallBox color="red" />
              <SmallBox color="yellow" />
              <SmallBox color="blue" />
              <SmallBox color="brown" />
              <View
                style={{
                  height: 50,
                  width: 50,
                  backgroundColor: 'lightblue',
                  flexGrow: 1,
                }}
              ></View>
              <View
                style={{
                  height: 50,
                  width: 50,
                  backgroundColor: 'lightgreen',
                  flexShrink: 1,
                }}
              ></View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: 'gray',
  },
  // Changed the height of the flexSectionOne to 250
  // Flex: 1 isn't used in this example due to the height being set
  // Change this to use a ScrollView
  flexSectionOne: {
    height: 250,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  flexSectionTwo: {
    height: 250,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
  },
  flexSectionThree: {
    height: 250,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'blue',
  },
  flexSectionFour: {
    height: 350,
    borderWidth: 1,
    borderColor: 'blue',
  },
  title: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
})
