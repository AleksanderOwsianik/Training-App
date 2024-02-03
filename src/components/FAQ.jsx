import { useState } from 'react';

const FAQ = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <div className={`faq-container ${isExpanded ? 'expanded' : ''}`}>
      <h4 onClick={toggleExpansion}>FAQ</h4>
      {isExpanded && (
        <div className='faq-content'>
          <h3>Frequently Asked Questions</h3>
          <h3>
            **Where can I find more information about exercises?** - Visit the
            <a
              href='https://www.exercise.com/exercises/?search=&'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              Exercise.com
            </a>{' '}
            or{' '}
            <a
              href='https://www.fabrykasily.pl/atlas-cwiczen'
              target='_blank'
              rel='noopener noreferrer'
            >
              Fabryka Siły
            </a>{' '}
            website for a complete exercise atlas.
          </h3>
          <h3>Chest:</h3>
          <ol>
            <li>
              <strong>Barbell Bench Press:</strong>
              <p>
                - Classic chest exercise, lying on a bench and lifting the
                barbell.
              </p>
            </li>
            <li>
              <strong>Incline Barbell Bench Press:</strong>
              <p>
                - Similar to flat bench press but performed on an inclined
                bench, targeting different parts of the chest.
              </p>
            </li>
            <li>
              <strong>Flat Bench Barbell Press:</strong>
              <p>
                - Similar to flat bench press but performed on a flat bench.
              </p>
            </li>
            <li>
              <strong>Dumbbell Bench Press:</strong>
              <p>
                - Alternative to barbell bench press, allowing greater freedom
                of movement.
              </p>
            </li>
            <li>
              <strong>Incline Dumbbell Bench Press:</strong>
              <p>
                - Performed on an inclined bench with dumbbells, engaging
                different parts of the chest.
              </p>
            </li>
            <li>
              <strong>Push-ups:</strong>
              <p>
                - Exercise using body weight, engaging chest, arms, and triceps
                muscles.
              </p>
            </li>
            <li>
              <strong>Pull-over:</strong>
              <p>
                - Executed on a bench, engaging chest muscles and latissimus
                dorsi.
              </p>
            </li>
            <li>
              <strong>Cable Crossover:</strong>
              <p>
                - Involves chest muscles in a cable movement towards the body.
              </p>
            </li>
            <li>
              <strong>Dips:</strong>
              <p>
                - Exercise engaging chest, triceps, and forearms on parallel
                bars.
              </p>
            </li>
            <li>
              <strong>Flyes on Upper Cable Machine:</strong>
              <p>
                - Similar to flyes, performed on a cable machine, engaging chest
                muscles.
              </p>
            </li>
            <li>
              <strong>Parallel Bar Dips:</strong>
              <p>
                - Dips performed on parallel bars, requiring arm and chest
                strength.
              </p>
            </li>
            <li>
              <strong>Flyes:</strong>
              <p>
                - Executed with dumbbells or a cable machine, engaging the
                lateral parts of the chest.
              </p>
            </li>
            <li>
              <strong>Straight Arm Dumbbell Pullover:</strong>
              <p>
                - Involves extending the arms with a dumbbell, targeting chest
                and back muscles.
              </p>
            </li>
          </ol>
          <p>Remember to adjust the weight, number of repetitions, and sets.</p>

          <h3>Shoulders:</h3>
          <ol>
            <li>
              <strong>Barbell Overhead Press:</strong>
              <p>
                - Lying on a flat bench or standing, lift the barbell overhead.
              </p>
            </li>
            <li>
              <strong>Dumbbell Overhead Press:</strong>
              <p>
                - Similar to barbell overhead press, but using dumbbells instead
                of a barbell.
              </p>
            </li>
            <li>
              <strong>Arnold Press:</strong>
              <p>
                - Combines lifting dumbbells overhead with a rotation of the
                arms during the exercise.
              </p>
            </li>
            <li>
              <strong>Face Pulls:</strong>
              <p>
                - Using cable lines, pull the cable towards your face, engaging
                the muscles around the shoulder blades.
              </p>
            </li>
            <li>
              <strong>Dumbbell Lateral Raises:</strong>
              <p>
                - Lifting dumbbells to the sides, focusing on the lateral
                shoulder muscles.
              </p>
            </li>
            <li>
              <strong>Shrugs:</strong>
              <p>
                - Raising shoulders using a barbell or dumbbells, focusing on
                the upper part of the shoulders.
              </p>
            </li>
            <li>
              <strong>Lateral Raises:</strong>
              <p>
                - Lifting dumbbells to the sides, targeting the lateral shoulder
                muscles.
              </p>
            </li>
            <li>
              <strong>Front Raises:</strong>
              <p>
                - Lifting dumbbells to the front, targeting the front shoulder
                muscles.
              </p>
            </li>
            <li>
              <strong>Rear Delt Flyes:</strong>
              <p>
                - Lying on an inclined bench, lifting dumbbells backward,
                targeting the rear shoulder muscles.
              </p>
            </li>
            <li>
              <strong>Rotator Cuff Exercises:</strong>
              <p>
                - Various exercises like internal and external arm rotations to
                strengthen the rotator cuff muscles.
              </p>
            </li>
            <li>
              <strong>Upright Rows:</strong>
              <p>
                - Lifting dumbbells or a barbell upward, bringing them close to
                the body.
              </p>
            </li>
            <li>
              <strong>Behind the Neck Press:</strong>
              <p>
                - Pressing the barbell overhead, starting from behind the neck.
              </p>
            </li>
            <li>
              <strong>Barbell Shrugs with Overhead Hold:</strong>
              <p>
                - Shrugging shoulders with a barbell, then holding it overhead
                for a period.
              </p>
            </li>
          </ol>
          <p>
            Remember to adjust the weight, number of repetitions, and sets
            according to your fitness level. It is also beneficial to include a
            variety of shoulder exercises in your training to stimulate
            different muscle groups.
          </p>

          <h3>Biceps Training:</h3>
          <ol>
            <li>
              <strong>Dumbbell Bicep Curl:</strong>
              <p>
                - Standing with dumbbells in both hands, lift them upwards by
                twisting your wrists.
              </p>
            </li>
            <li>
              <strong>Barbell Bicep Curl:</strong>
              <p>
                - Standing with a barbell in front of you, lift it upwards by
                twisting your wrists.
              </p>
            </li>
            <li>
              <strong>Hammer Curls:</strong>
              <p>
                - Holding dumbbells along the body with a hammer grip and
                lifting them upwards.
              </p>
            </li>
            <li>
              <strong>Concentration Curls:</strong>
              <p>
                - Sitting on a bench, lift a dumbbell in one hand, focusing on
                isolating the bicep muscle.
              </p>
            </li>
            <li>
              <strong>Preacher Curls:</strong>
              <p>
                - Lifting a barbell or dumbbells on a Preacher bench, providing
                support for the arms, eliminating cheat movements.
              </p>
            </li>
            <li>
              <strong>Incline Dumbbell Curls:</strong>
              <p>
                - Lifting dumbbells on an inclined bench, changing the angle for
                different parts of the biceps.
              </p>
            </li>
            <li>
              <strong>Reverse Barbell Curls:</strong>
              <p>
                - Lifting the barbell with hands facing downward, emphasizing
                the forearm and brachialis muscles.
              </p>
            </li>
            <li>
              <strong>Spider Curls:</strong>
              <p>
                - Lifting dumbbells or a barbell on a bench, exposing the
                biceps.
              </p>
            </li>
            <li>
              <strong>Zottman Curls:</strong>
              <p>
                - Combination of traditional and hammer grip dumbbell curls.
              </p>
            </li>
            <li>
              <strong>Cable Bicep Curls:</strong>
              <p>
                - Lifting arms using the upper cable, focusing on maintaining
                tension in the muscles.
              </p>
            </li>
            <li>
              <strong>21s:</strong>
              <p>
                - Combination of three different dumbbell curl movements,
                dividing a set into three parts of seven repetitions each.
              </p>
            </li>
            <li>
              <strong>Chin-Ups:</strong>
              <p>
                - Performing pull-ups with an underhand grip, engaging biceps
                and back muscles.
              </p>
            </li>
          </ol>
          <p>
            Remember to adjust the weight and number of repetitions to your
            fitness level. Diversity in biceps training is essential to
            stimulate different parts of the muscle.
          </p>

          <h3>Triceps Training:</h3>
          <ol>
            <li>
              <strong>Triceps Dips:</strong>
              <p>
                - Lifting the body, supporting on parallel bars. Can also use
                dip bars in the gym.
              </p>
            </li>
            <li>
              <strong>French Press:</strong>
              <p>
                - Lying on a bench, hold the barbell overhead, bend elbows,
                lowering the barbell behind the head, then straighten arms.
              </p>
            </li>
            <li>
              <strong>Diamond Push-Ups:</strong>
              <p>
                - Push-ups with hands positioned under the chest in a diamond
                shape.
              </p>
            </li>
            <li>
              <strong>Triceps Kickbacks:</strong>
              <p>
                - Lifting dumbbells backward, keeping arms along the body, then
                straightening elbows.
              </p>
            </li>
            <li>
              <strong>Triceps Rope Pushdown:</strong>
              <p>- Using cable attachment, pull it down, bending the elbows.</p>
            </li>
            <li>
              <strong>Close-Grip Bench Press:</strong>
              <p>- Bench pressing with a narrow grip, targeting triceps.</p>
            </li>
            <li>
              <strong>Skull Crushers:</strong>
              <p>
                - Lying on a bench, bend elbows, lowering the barbell towards
                the forehead, then straighten arms.
              </p>
            </li>
            <li>
              <strong>Overhead Triceps Extension:</strong>
              <p>
                - Holding a dumbbell or barbell overhead, bend elbows and lower
                the weight behind the head, then straighten arms.
              </p>
            </li>
            <li>
              <strong>One-Arm Triceps Pushdown:</strong>
              <p>- Pulling down the cable with one hand.</p>
            </li>
            <li>
              <strong>Triceps Band Pull-Down:</strong>
              <p>
                - Pulling down a resistance band, focusing on triceps tension.
              </p>
              <p>
                Tips: Choose weights that make the last repetitions in each set
                challenging. Remember to warm up adequately before starting your
                workout to prevent injuries. Maintain control over the movement
                during each exercise, avoiding cheating or excessive use of
                other body parts. Allow muscles to rest between sets, but keep
                the breaks not too long.
              </p>
            </li>
          </ol>
          <h3>Forearm Training:</h3>
          <ol>
            <li>
              <strong>Dumbbell Wrist Extension:</strong>
              <p>
                - Sitting on a bench or chair, forearms resting on knees,
                lifting dumbbells upward.
              </p>
            </li>

            <li>
              <strong>Dumbbell Wrist Flexion:</strong>
              <p>
                - Similar to the previous exercise but lifting dumbbells
                downward with palms facing down.
              </p>
            </li>

            <li>
              <strong>Wrist Roller:</strong>
              <p>
                - Holding a wrist roller in front, winding and unwinding it,
                lifting and lowering the weight.
              </p>
            </li>

            <li>
              <strong>Farmers Walk:</strong>
              <p>
                - Walking with heavy dumbbells in both hands held along the
                body.
              </p>
            </li>

            <li>
              <strong>Reverse Curl:</strong>
              <p>
                - Lifting a barbell with palms facing down, focusing on forearm
                muscles.
              </p>
            </li>

            <li>
              <strong>
                -Wrist Rotation (Pronation and Supination with Dumbbell):
              </strong>
              <p>
                - Holding dumbbells in both hands, rotating wrists in both
                directions.
              </p>
            </li>

            <li>
              <strong>Plate Pinch:</strong>
              <p>
                - Gripping two flat plates with both hands to strengthen the
                grip.
              </p>
            </li>

            <li>
              <strong>Forearm Plank:</strong>
              <p>
                - Holding a plank position on forearms, engaging muscles
                throughout the body, including the forearms.
              </p>
            </li>
            <p>
              Tips: Choose weights that make the last repetitions in each set
              challenging. Remember to warm up adequately before starting your
              workout to prevent injuries. Maintain control over the movement
              during each exercise, avoiding cheating or excessive use of other
              body parts. Allow muscles to rest between sets, but keep the
              breaks not too long.
            </p>
          </ol>

          <h3>Back Training:</h3>
          <ol>
            <li>
              <strong>Wide-Grip Pull-Ups:</strong>
              <p>
                - Pulling up on a bar with a wide grip, primarily targeting the
                latissimus dorsi.
              </p>
            </li>

            <li>
              <strong>Chin-Ups:</strong>
              <p>
                - Pulling up on a bar with an underhand grip, also engaging the
                biceps muscles.
              </p>
            </li>

            <li>
              <strong>Barbell Rows:</strong>
              <p>
                - Leaning forward, holding a barbell, and lifting it upward
                along the body.
              </p>
            </li>

            <li>
              <strong>Dumbbell Rows:</strong>
              <p>
                - Supporting one hand and one knee on a bench, lifting dumbbells
                with hands hanging down.
              </p>
            </li>

            <li>
              <strong>Lat Pulldowns:</strong>
              <p>
                - Using an upper pulley, pulling the cable down to chest level.
              </p>
            </li>

            <li>
              <strong>Seated Cable Rows:</strong>
              <p>
                - Sitting on a rowing machine, pulling the cable toward the
                abdomen.
              </p>
            </li>

            <li>
              <strong>Face Pulls:</strong>
              <p>
                - Using the upper cable, pulling the cable towards the face,
                engaging shoulder and upper back muscles.
              </p>
            </li>

            <li>
              <strong>Smith Machine Rows:</strong>
              <p>
                - Performing rows on a Smith machine while holding the barbell.
              </p>
            </li>

            <li>
              <strong>Incline Dumbbell Rows:</strong>
              <p>- Lying on an inclined bench and lifting dumbbells upward.</p>
            </li>

            <li>
              <strong>Hyperextensions:</strong>
              <p>
                - Performing deadlifts on a hyperextension bench, focusing on
                the lower back.
              </p>
            </li>

            <li>
              <strong>Lat Pushdowns:</strong>
              <p>
                - Pulling the cable down using a pushdown machine, engaging
                shoulder and back muscles.
              </p>
            </li>

            <li>
              <strong>Reverse Flyes:</strong>
              <p>
                - Lying on an inclined bench with dumbbells in hand, raising
                arms to the sides.
              </p>
            </li>
            <p>
              Tips: Use different grips and types of loads to diversify
              latissimus dorsi muscle training. Ensure proper technique to avoid
              injuries. Start your workout with a warm-up and finish with
              stretching. Rest between sets, adjusting the loads based on your
              fitness level.
            </p>
          </ol>
          <h3>Leg Training:</h3>
          <ol>
            <li>
              <strong>Squats:</strong>
              <p>- Classic squats, with or without a barbell on the back.</p>
            </li>

            <li>
              <strong>Deadlift:</strong>
              <p>
                - Barbell deadlift with various grips (standard, sumo, double
                overhand).
              </p>
            </li>

            <li>
              <strong>Leg Press:</strong>
              <p>
                - Leg press machine exercise, primarily engaging the thigh
                muscles.
              </p>
            </li>

            <li>
              <strong>Leg Extensions:</strong>
              <p>
                - Leg extension machine exercise, focusing on quadriceps
                muscles.
              </p>
            </li>

            <li>
              <strong>Leg Curls:</strong>
              <p>
                - Leg curl machine exercise, concentrating on hamstring muscles.
              </p>
            </li>

            <li>
              <strong>Sled Push:</strong>
              <p>
                - Pushing a heavy sled or cart forward, engaging the entire leg.
              </p>
            </li>

            <li>
              <strong>Calf Raises:</strong>
              <p>
                - Raising heels on a calf raise machine, targeting the calf
                muscles.
              </p>
            </li>

            <li>
              <strong>Lunges:</strong>
              <p>
                - Forward, backward, or lateral lunges with or without added
                resistance.
              </p>
            </li>

            <li>
              <strong>Smith Machine Lunges:</strong>
              <p>
                - Performing lunges on a Smith machine with the barbell on the
                back.
              </p>
            </li>

            <li>
              <strong>Box Jumps:</strong>
              <p>- Jumping onto a box, developing leg strength and speed.</p>
            </li>

            <li>
              <strong>Bulgarian Split Squats:</strong>
              <p>
                - Bulgarian split squats with one foot elevated on a bench and
                the other bent forward.
              </p>
            </li>

            <li>
              <strong>Jump Rope:</strong>
              <p>- Jumping rope, excellent for leg endurance.</p>
            </li>
            <p>
              Tips: Choose weights that make the last repetitions in each set
              challenging. Remember to warm up adequately before starting your
              workout to prevent injuries. Maintain control over the movement
              during each exercise, avoiding cheating or excessive use of other
              body parts. Allow muscles to rest between sets, but keep the
              breaks not too long.
            </p>
          </ol>

          <h3>Abdominal Training:</h3>
          <ol>
            <li>
              <strong>Crunches:</strong>
              <p>
                - Lying on the back, bending the torso towards the knees,
                lifting the upper body off the ground.
              </p>
            </li>

            <li>
              <strong>Leg Raises:</strong>
              <p>
                - Lying on the back, lifting legs upward, controlling the
                movement.
              </p>
            </li>

            <li>
              <strong>Plank:</strong>
              <p>
                - Holding a plank position, both on forearms and extended arms.
              </p>
            </li>

            <li>
              <strong>Plank Leg Raises:</strong>
              <p>
                - In plank position, lifting one leg upward while maintaining a
                stable posture.
              </p>
            </li>

            <li>
              <strong>Mountain Climbers:</strong>
              <p>
                - From plank position, alternately bringing knees to the chest.
              </p>
            </li>

            <li>
              <strong>Russian Twists:</strong>
              <p>
                - Sitting on the floor, rotating the torso left and right while
                keeping hands together.
              </p>
            </li>

            <li>
              <strong>Reverse Crunches:</strong>
              <p>
                - Lying on the back, lifting hips upward, bending the knees.
              </p>
            </li>

            <li>
              <strong>Side Plank:</strong>
              <p>
                - Holding a side plank position, maintaining stability on one
                hand.
              </p>
            </li>

            <li>
              <strong>Bicycle Crunches:</strong>
              <p>
                - Lying on the back, alternating leg bending and torso rotation.
              </p>
            </li>

            <li>
              <strong>Hollow Body Hold:</strong>
              <p>
                - Lying on the back, simultaneously lifting legs and upper body,
                holding the position.
              </p>
            </li>

            <li>
              <strong>V-Ups:</strong>
              <p>
                - Lying on the back, lifting both legs and upper body to create
                a V shape.
              </p>
            </li>

            <li>
              <strong>Windshield Wipers:</strong>
              <p>
                - Lying on the back, lifting legs and rotating them left and
                right above the floor.
              </p>
            </li>

            <li>
              <strong>Dragon Flags:</strong>
              <p>
                - Lying on the back, lifting both legs and torso, maintaining
                stability.
              </p>
            </li>
          </ol>
          <p>Q: How does this app work?</p>
          <p>A: This app allows you to create and manage your training plan.</p>
        </div>
      )}
    </div>
  );
};

export default FAQ;
