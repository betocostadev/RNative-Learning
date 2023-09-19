import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createNativeStackNavigator()

import Main from './screens/Main/Main'
import Repositories from './screens/Repositories/Repositories'
import CreateRepo from './screens/CreateRepo/CreateRepo'
import RepositoryInfo from './screens/RepositoryInfo/RepositoryInfo'

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Main"
          options={{ title: 'Perfil' }}
          component={Main}
        />
        <Tab.Screen name="Repositories" component={Repositories} />
        <Tab.Screen
          name="CreateRepository"
          options={{ title: 'Criar Repositório' }}
          component={CreateRepo}
        />
        <Tab.Screen
          name="RepositoryInfo"
          options={{ title: 'Repositório Info' }}
          component={RepositoryInfo}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
