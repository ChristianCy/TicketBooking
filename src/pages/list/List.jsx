
import React from 'react';
import Navbar from '../../components/Navigationbar/navbar';
import Header from '../../components/Headerr/header';
import Feature from '../../components/features/feature';


function List() {
  return (
    <><><div><Navbar /><Header type="list" /></div><div><Feature></Feature></div></><div><Feature></Feature></div></>
  );
}

export default List;