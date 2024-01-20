import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ExerciseList({ exercises }) {
  return (
    <div>
      <h2>Your Own Training Plan For Today</h2>
      {Object.entries(exercises).map(([category, categoryExercises]) => {
        if (categoryExercises.length > 0) {
          return (
            <div key={category}>
              <h2 className='exercise-category'>{category}</h2>
              <ul>
                {categoryExercises.map((exercise, index) => (
                  <li key={index}>{exercise}</li>
                ))}
              </ul>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

ExerciseList.propTypes = {
  exercises: PropTypes.object.isRequired,
};
export default ExerciseList;
