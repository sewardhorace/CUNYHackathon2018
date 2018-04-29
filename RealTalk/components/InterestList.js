import React from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'whitesmoke',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remove: {
    marginLeft: 10,
    marginBottom: 2,
    color: '#CD5C5C',
    fontSize: 26,
  },
  completed: {
    backgroundColor: 'whitesmoke',
  },
})

export class InterestList extends React.Component {

  renderItem = (item, i) => {
    const itemStyle = false ? [styles.item, styles.completed] : styles.item
    return (
      <View key={i} style={itemStyle}>
        <Text> {item} </Text>
      </View>
    )
  }

  render() {
    const {items} = this.props

    return (
      <ScrollView style={styles.container}>
        {items.map(this.renderItem)}
      </ScrollView>
    )
  }
}