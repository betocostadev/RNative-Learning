import { FlatList, StyleSheet, Text, View } from 'react-native'
import { theme } from '../../theme/theme'
import { useEffect, useState } from 'react'
import { PersistedCountdownState } from '../../types/countdown'
import { getFromStorage } from '../../utils/storage'
import { EStorageKeys } from '../../types/general'
import { format } from 'date-fns'
import { FULL_DATE_FORMAT } from '../../utils/constants'

export default function HistoryScreen() {
  const [countdownState, setCountdownState] =
    useState<PersistedCountdownState>()

  useEffect(() => {
    const init = async () => {
      const value = await getFromStorage(EStorageKeys.countdown)
      setCountdownState(value)
    }
    init()
  }, [])

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
      data={countdownState?.completedAtTimestamps}
      ListEmptyComponent={() => (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No tasks completed yet 🙈.</Text>
        </View>
      )}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <Text style={styles.listItemText}>
            ✅ at {format(item, FULL_DATE_FORMAT)}
          </Text>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  contentContainer: {
    marginTop: 12,
  },
  listItem: {
    backgroundColor: theme.colors.lightGrey,
    marginHorizontal: 8,
    padding: 16,
    borderRadius: 6,
    marginBottom: 8,
    alignItems: 'center',
  },
  listItemText: {
    fontSize: theme.fontSize.LG,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 18,
  },
  emptyText: {
    fontSize: theme.fontSize.LG,
  },
})
