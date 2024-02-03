import React, { useState } from 'react';
import ExerciseList from '@components/ExerciseList';
import './main.scss';
import ContactForm from '@components/ContactForm';
import AllContacts from '@components/AllContacts';
import FAQ from './components/FAQ';

const allExercises = {
  Chest: [
    'Bench Press',
    'Incline Bench Press',
    'Flat Bench Press',
    'Dumbbell Press',
    'Incline Dumbbell Press',
    'Push-ups',
    'Pull-over',
    'Cable Crossover',
    'Dips',
    'Flyes on Upper Cable Machine',
    'Parallel Bar Dips',
    'Flyes',
    'Straight Arm Dumbbell Pullover',
  ],
  Shoulders: [
    'Overhead Barbell Press',
    'Overhead Dumbbell Press',
    'Arnold Press',
    'Face Pulls',
    'Lateral Raises with Dumbbells',
    'Shrugs',
    'Lateral Raises',
    'Front Raises',
    'Rear Delt Flyes',
    'Rotator Cuff Exercises',
    'Upright Rows',
    'Behind the Neck Press',
    'Barbell Shrugs with Overhead Hold',
  ],
  Biceps: [
    'Dumbbell Biceps Curl',
    'Barbell Biceps Curl',
    'Hammer Curls',
    'Concentration Curls',
    'Preacher Curls',
    'Incline Dumbbell Curls',
    'Reverse Barbell Curls',
    'Spider Curls',
    'Zottman Curls',
    'Cable Biceps Curls',
    '21s',
    'Chin-Ups',
  ],
  Triceps: [
    'Triceps Dips',
    'French Press',
    'Diamond Push-Ups',
    'Triceps Kickbacks',
    'Triceps Rope Pushdown',
    'Close-Grip Bench Press',
    'Skull Crushers',
    'Overhead Triceps Extension',
    'One-Arm Triceps Pushdown',
    'Triceps Band Pull-Down',
  ],
  Forearm: [
    'Dumbbell Wrist Extension',
    'Dumbbell Wrist Flexion',
    'Wrist Roller',
    "Farmer's Walk",
    'Reverse Curl',
    'Pronation and Supination with Dumbbell',
    'Plate Pinch',
    'Forearm Plank',
  ],

  Back: [
    'Wide-Grip Pull-Ups',
    'Chin-Ups',
    'Barbell Rows',
    'Dumbbell Rows',
    'Lat Pulldowns',
    'Seated Cable Rows',
    'Face Pulls',
    'Smith Machine Rows',
    'Incline Dumbbell Rows',
    'Hyperextensions',
    'Lat Pushdown',
    'Reverse Flyes',
  ],

  Legs: [
    'Squats',
    'Deadlift',
    'Leg Press',
    'Leg Extensions',
    'Leg Curls',
    'Sled Push',
    'Calf Raises',
    'Lunges',
    'Smith Machine Lunges',
    'Box Jumps',
    'Bulgarian Split Squats',
    'Jump Rope',
  ],

  Abs: [
    'Crunches',
    'Leg Raises',
    'Plank',
    'Plank Leg Raises',
    'Moutain Climbers',
    'Russian Twists',
    'Reverse Crunches',
    'Side Plank',
    'Bicycle Crunches',
    'Hollow Body Hold',
    'V-Ups',
    'Windshield Wipers',
    'Dragon Flags',
  ],
};

function TrainingApp() {
  const [selectedCategory, setSelectedCategory] = useState('Chest');
  const [selectedExercise, setSelectedExercise] = useState('');
  const [exercises, setExercises] = useState(
    Object.fromEntries(
      Object.keys(allExercises).map((category) => [category, []]),
    ),
  );
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [exerciseDetails, setExerciseDetails] = useState({
    series: 3,
    repetitions: 10,
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedExercise('');
  };

  const addExercise = () => {
    if (
      selectedExercise.trim() !== '' &&
      !exercises[selectedCategory].includes(selectedExercise)
    ) {
      setExercises((prevExercises) => {
        const updatedExercises = { ...prevExercises };
        updatedExercises[selectedCategory] = [
          ...prevExercises[selectedCategory],
          {
            name: selectedExercise,
            details: {
              series: exerciseDetails.series,
              repetitions: exerciseDetails.repetitions,
            },
          },
        ];
        return updatedExercises;
      });

      if (!selectedCategories.includes(selectedCategory)) {
        setSelectedCategories((prevSelectedCategories) => [
          ...prevSelectedCategories,
          selectedCategory,
        ]);
      }

      setSelectedExercise('');
    }
  };

  const handleExerciseDetailsChange = (e) => {
    const { name, value } = e.target;
    setExerciseDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  const removeExercise = (category, index) => {
    setExercises((prevExercises) => {
      const updatedExercises = { ...prevExercises };
      updatedExercises[category] = [
        ...prevExercises[category].slice(0, index),
        ...prevExercises[category].slice(index + 1),
      ];
      return updatedExercises;
    });
  };

  return (
    <div className='training-plan'>
      <img
        src='/src/assets/Logo_Ród.png'
        alt='logo'
        style={{ width: '150px', height: '150px' }}
      />
      <h1 className='custom-heading'>Non_Coach</h1>
      <div className='custom-buttons'>
        <button onClick={() => handleCategoryChange('Chest')}>
          Chest Exercises
        </button>
        <button onClick={() => handleCategoryChange('Shoulders')}>
          Shoulders Exercises
        </button>
        <button onClick={() => handleCategoryChange('Biceps')}>
          Biceps Exercises
        </button>
        <button onClick={() => handleCategoryChange('Triceps')}>
          Triceps Exercises
        </button>
        <button onClick={() => handleCategoryChange('Forearm')}>
          Forearm Exercises
        </button>
        <button onClick={() => handleCategoryChange('Back')}>
          Back Exercises
        </button>
        <button onClick={() => handleCategoryChange('Legs')}>
          Leg Exercises
        </button>
        <button onClick={() => handleCategoryChange('Abs')}>
          Abs Exercises
        </button>
      </div>

      <div className='custom-parameter'>
        <label className='parameter' htmlFor='exerciseSelect'>
          Choose an exercise:
        </label>
        <select
          id='exerciseSelect'
          value={selectedExercise}
          onChange={(e) => setSelectedExercise(e.target.value)}
        >
          <option value=''>Select an exercise</option>
          {allExercises[selectedCategory].map((exercise, index) => (
            <option key={index} value={exercise}>
              {exercise}
            </option>
          ))}
        </select>
        <label className='parameter' htmlFor='series'>
          Series:
        </label>
        <select
          type='number'
          id='series'
          name='series'
          value={exerciseDetails.series}
          onChange={handleExerciseDetailsChange}
        >
          {[...Array(10).keys()].map((value) => (
            <option key={value + 1} value={value + 1}>
              {value + 1}
            </option>
          ))}
        </select>

        <label className='parameter' htmlFor='repetitions'>
          Repetitions:
        </label>
        <select
          type='number'
          id='repetitions'
          name='repetitions'
          value={exerciseDetails.repetitions}
          onChange={handleExerciseDetailsChange}
        >
          {[...Array(20).keys()].map((value) => (
            <option key={value + 1} value={value + 1}>
              {value + 1}
            </option>
          ))}
        </select>
      </div>

      <button className='add' onClick={addExercise}>
        Add Exercise
      </button>
      {selectedCategories.length > 0 && (
        <ExerciseList exercises={exercises} onRemoveExercise={removeExercise} />
      )}
      <ContactForm />
      <AllContacts />
      <FAQ />
    </div>
  );
}

export default TrainingApp;
