import {DatabaseConnection} from './sqlite'
import {
  CREATE_NEW_TABLE,
  DELETE_FROM,
  INSERT_INTO,
  PRIMARY_KEY_AUTOINCREMENT,
  SELECT_ALL_FROM,
  SET,
  UPDATE,
  VALUES,
  WHERE,
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

export async function updateNote(note) {
  return new Promise(resolve => {
    db.transaction(transaction => {
      transaction.executeSql(
        `${UPDATE} Notes ${SET} title = ?, category = ?, text = ? ${WHERE} id = ?;`,
        [note.title, note.category, note.text, note.id],
        () => {
          resolve('Note updated!')
        },
      )
    })
  })
}

export async function deleteNote(note) {
  return new Promise(resolve => {
    db.transaction(transaction => {
      transaction.executeSql(
        `${DELETE_FROM} Notes ${WHERE} id = ?;`,
        [note.id],
        () => {
          resolve('Note deleted!')
        },
      )
    })
  })
}

export async function getAllNotes() {
  return new Promise(resolve => {
    db.transaction(transaction => {
      transaction.executeSql(
        `${SELECT_ALL_FROM} Notes;`,
        [],
        (transaction, result) => {
          resolve(result.rows._array)
        },
      )
    })
  })
}
