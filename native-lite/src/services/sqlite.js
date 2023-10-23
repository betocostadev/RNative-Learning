import * as SQLite from 'expo-sqlite'

function openConnection() {
  const database = SQLite.openDatabase('db.notes')
  return database
}

export const db = openConnection()
