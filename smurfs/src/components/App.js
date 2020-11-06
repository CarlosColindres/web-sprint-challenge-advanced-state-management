import React from "react";
import "./App.css";
import { NewSmurfForm } from "./NewSmurfForm";
import {useEffect} from 'react'
import {fetchSmurfs, postSmurfs} from '../store/action'
import {connect} from 'react-redux'
import { Smurfs } from "./Smurfs";
const App = ({smurfsArr, isLoading, fetchSmurfs, postSmurfs}) => {
    useEffect(() => {
     fetchSmurfs()
    }, [])

    if(isLoading) {
      return <h1>Loading please wait...</h1>
    }

    return (
      <div className="App">
        <NewSmurfForm postSmurfs={postSmurfs}/>
        {smurfsArr.map((smurf, idx) => <Smurfs key={idx} smurf={smurf}/>)}
      </div>
    );
  }

const mapStateToProps = (state) => {
  const {isLoading, smurfsArr} = state
  return {
    isLoading,
    smurfsArr
  }
}

export default connect(mapStateToProps, {fetchSmurfs, postSmurfs})(App);
