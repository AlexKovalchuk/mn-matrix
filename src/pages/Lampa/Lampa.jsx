import React, { useEffect, Fragment } from 'react';
import { connect } from "react-redux";

const LampaComponent = props => {
  const { lampaReducer } = props
  useEffect(() => {
    console.log('lampaReducer', lampaReducer);
  }, [lampaReducer])

  return (
    <div className='lampa-page-container'>
      <h1>Lampa Page</h1>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    lampaReducer: state.lampaReducer
  };
};

const mapDispatchToProps = {}

export const Lampa = connect(mapStateToProps, mapDispatchToProps)(LampaComponent);
