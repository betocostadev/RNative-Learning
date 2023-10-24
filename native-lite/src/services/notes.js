import {DatabaseConnection} from './sqlite'
import {
  CREATE_NEW_TABLE,
  FROM,
  INSERT_INTO,
  PRIMARY_KEY_AUTOINCREMENT,
  SELECT,
  VALUES,
} from '../utils/constants'

const db = DatabaseConnection.getConnection()

export function createTable() {
  db.transaction(transaction => {
    transaction.executeSql(
      `${CREATE_NEW_TABLE} Notes (id INTEGER ${PRIMARY_KEY_AUTOINCREMENT}, title TEXT, category TEXT, text TEXT);`,
    )
  })
}

export async function createNote(note) {
  return new Promise(resolve => {
    db.transaction(transaction => {
      transaction.executeSql(
        `${INSERT_INTO} Notes (title, category, text) ${VALUES} (?, ?, ?);`,
        [note.title, note.category, note.text],
        () => {
          resolve('Note added!')
        },
      )
    })
  })
}

export async function getAllNotes() {
  return new Promise(resolve => {
    db.transaction(transaction => {
      transaction.executeSql(
        `${SELECT} * ${FROM} Notes;`,
        [],
        (transaction, result) => {
          resolve(result.rows._array)
        },
      )
    })
  })
}
