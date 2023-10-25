import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

export function Note({id, title, category, text, selectNote}) {
  const categories = {
    Personal: '#FF924F',
    Others: '#00911F',
    Work: '#2F71EB',
  }

  const styles = styleFunction(categories[category])

  return (
    <TouchableOpacity style={styles.card} onPress={() => selectNote(id)}>
      <Text style={styles.title}> {title} </Text>
      <Text style={styles.category}> {category} </Text>
      <Text style={styles.text} numberOfLines={5}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styleFunction = color =>
  StyleSheet.create({
    card: {
      borderRadius: 8,
      backgroundColor: '#ffffff',
      paddingVertical: 8,
      paddingHorizontal: 16,
      marginHorizontal: 16,
      marginBottom: 8,
      borderTopWidth: 5,
      borderColor: color,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      marginBottom: 4,
    },
    category: {
      borderRadius: 4,
      backgroundColor: color,
      padding: 4,
      color: '#FAFAFA',
      alignSelf: 'flex-start',
    },
    text: {
      lineHeight: 28,
    },
  })
