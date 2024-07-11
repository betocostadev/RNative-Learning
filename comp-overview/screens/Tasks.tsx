import { useReducer, useState } from 'react'
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

type Task = { id: string; name: string; isDone: boolean }

type TaskAction =
  | { type: 'addTask'; payload: Task }
  | { type: 'removeTask'; payload: { id: string } }
  | { type: 'toggleTask'; payload: { id: string } }

interface TasksState {
  tasks: Task[]
}

export default function Tasks() {
  const [inputValue, setInputValue] = useState('')

  const taskReducer = (state: TasksState, action: TaskAction): TasksState => {
    switch (action.type) {
      case 'addTask':
        setInputValue('')
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        }
      case 'removeTask':
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload.id),
        }
      case 'toggleTask':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id
              ? { ...task, isDone: !task.isDone }
              : task
          ),
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(taskReducer, { tasks: [] } as TasksState)

  const handleAddTask = () => {
    dispatch({
      type: 'addTask',
      payload: { id: inputValue, name: inputValue, isDone: false },
    })
  }

  const ListItem = ({ item }: { item: Task }) => {
    return (
      <View style={styles.listItem}>
        <Text
          style={
            item.isDone
              ? [styles.listItemText, styles.listItemDone]
              : styles.listItemText
          }
          id={item.id}
        >
          {item.name}
        </Text>
        <View style={styles.listItemButtons}>
          <TouchableOpacity
            onPress={(_) =>
              dispatch({ type: 'toggleTask', payload: { id: item.id } })
            }
          >
            <Text>✅</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(_) =>
              dispatch({ type: 'removeTask', payload: { id: item.id } })
            }
          >
            <Text>🗑️</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
      <View style={styles.inline}>
        <TextInput
          style={styles.enter}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <Button title="Add Task" onPress={handleAddTask} color="#eeeeee" />
      </View>
      <FlatList
        style={styles.list}
        data={state.tasks}
        ListHeaderComponent={
          <Text style={styles.listExtraText}>Your tasks</Text>
        }
        ListEmptyComponent={
          <Text style={styles.listExtraText}>No tasks for today</Text>
        }
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(task) => task.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6f5ef2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: '#e6e6e6',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  enter: {
    margin: 10,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#100d66',
    width: '80%',
    color: 'white',
    padding: 6,
    fontSize: 14,
  },
  big: {
    fontSize: 40,
  },
  inline: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  list: {
    width: '80%',
  },
  listItem: {
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#d5d5d5',
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: '#fff',
  },
  listItemText: {
    flex: 2,
    color: 'white',
    fontSize: 18,
  },
  listItemDone: {
    color: '#bdbdbd',
    textDecorationStyle: 'double',
    textDecorationColor: '#2d2d2d',
    textDecorationLine: 'line-through',
  },
  listItemButtons: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  listExtraText: {
    alignSelf: 'center',
    fontSize: 20,
    margin: 8,
    color: 'white',
  },
})
