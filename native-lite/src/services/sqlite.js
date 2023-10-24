import * as SQLite from 'expo-sqlite'

// function openConnection() {
//   const database = SQLite.openDatabase('db.db')
//   console.log(database)
//   return database
// }

// export const db = openConnection()

export const DatabaseConnection = {
  getConnection: () => SQLite.openDatabase('database.db'),
}
