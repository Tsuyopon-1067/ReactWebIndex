import * as React from 'react'
import './App.css';
import IconList from './IconList/IconList.js';
// 1. import `ChakraProvider` component
import {
  ChakraProvider,
} from '@chakra-ui/react';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <IconList />
    </ChakraProvider>
  )
}
export default App;
