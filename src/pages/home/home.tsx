import React from 'react';

import { Button } from '../../components/';

const Home = () => {
  return (
    <div style={{margin: '50px auto', width: '250px'}}>
      <Button onClick={() => console.log('button work')} text="Click me for test"/>
    </div>
  )
}

export default Home;