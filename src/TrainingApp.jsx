import React, { useState, useEffect } from 'react';
import ExerciseList from '@components/ExerciseList';
import './main.scss';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vcvnxuxqzbyoikhsszqq.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjdm54dXhxemJ5b2lraHNzenFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyNjk1NTYsImV4cCI6MjAyMTg0NTU1Nn0.Shuy3YGPYjRC4lxzre-NW2B0TbnfMjVR0zUxNoY_RWs';
const supabase = createClient(supabaseUrl, supabaseKey);

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

  const [formData, setFormData] = useState({
    nickname: '',
    email: '',
    text: 'You need help, ask me.',
  });

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
            name: selectedExercise, //zmiana
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormData({
      nickname: '',
      email: '',
      message: '',
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleExerciseDetailsChange = (e) => {
    const { name, value } = e.target;
    setExerciseDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
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
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
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
      {selectedCategories.length > 0 && <ExerciseList exercises={exercises} />}

      <form onSubmit={handleFormSubmit}>
        <label>
          {' '}
          Nickname:
          <input
            type='text'
            name='nickname'
            value={formData.nickname}
            onChange={handleFormChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleFormChange}
          />
        </label>
        <br />
        <label>
          Text:
          <textarea
            name='text'
            value={formData.text}
            onChange={handleFormChange}
          />
        </label>
        <br />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export default TrainingApp;
