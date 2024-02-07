import React from 'react';
import PropTypes from 'prop-types';

function ExerciseList({ exercises, onRemoveExercise }) {
  return (
    <div>
      <h2 style={{ fontSize: '25px', color: '#2b64a0c5' }}>
        Your Own Training Plan For Today
      </h2>
      {Object.entries(exercises).map(([category, categoryExercises]) => {
        if (categoryExercises.length > 0) {
          return (
            <div key={category}>
              <h3 className='exercise-category'> {category} </h3>
              <ul style={{ fontSize: '10px' }}>
                {categoryExercises.map((exercise, index) => (
                  <li key={index}>
                    {exercise.name} - Series {exercise.details.series}{' '}
                    Repetitions {exercise.details.repetitions}
                    <button
                      className='remove-button'
                      onClick={() => onRemoveExercise(category, index)}
                    >
                      x
                    </button>
                  </li>
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
  onRemoveExercise: PropTypes.func.isRequired,
};

export default ExerciseList;
