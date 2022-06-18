/* eslint-disable linebreak-style */
import React from 'react';
import propTypes from 'prop-types';

function Card({ data }) {
  const {
    location,
    current,
  } = data;

  return (
    <div className="flex bg-white mt-10 rounded-lg shadow-md">
      <div className="p-6">
        <div className="text-center">
          <span className="block text-xl font-bold text-slate-700">{location.name}</span>
          <span className="text-slate-400 text-sm font-medium">{`${location.region}, ${location.country}`}</span>
        </div>
        <div className="font-bold text-slate-700 flex mt-4 mb-2">
          <span className="text-8xl">{current.temp_c}</span>
          <span className="text-2xl mt-3">°C</span>
        </div>
      </div>
      <div className="text-slate-700 font-medium justify-center items-center p-6 bottom-0">
        <div className="flex justify-center flex-col items-center ">
          <img src={current.condition.icon} alt="" />
          <span>{current.condition.text}</span>
          <div className="flex">
            <span>{`Sensação térmica: ${current.wind_kph}`}</span>
            <span className="text-xs">°C</span>
          </div>
          <span>{`Velocidade do vento: ${current.wind_kph} km/h`}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  data: propTypes.object,
}.isRequired;
