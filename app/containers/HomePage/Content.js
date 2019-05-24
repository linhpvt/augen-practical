import React, { useContext } from 'react';
import { HomeContext } from './index';

export default function Content() {
  const homeContext = useContext(HomeContext);
  return (
    <div>react context: {homeContext.username}</div>
  )
}
