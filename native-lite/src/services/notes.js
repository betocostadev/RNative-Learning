import {db} from './sqlite'
import {CREATE_NEW_TABLE, PRIMARY_KEY_AUTOINCREMENT} from '../utils/constants'

export function createTable() {
  db.transaction(transaction => {
    transaction.executeSql(
      `${CREATE_NEW_TABLE} Notes (id INTEGER ${PRIMARY_KEY_AUTOINCREMENT}, title TEXT, category TEXT);`,
    )
  })
}
