"use strict";

window.onload = () => {
  // Total questions
  let questions = 23;

// Question Counter (which question are we on)
  let questionCounter = 0;
  
// Test logic:
  let answers = `You should enter `;
  let questionArray = [
    `${answers} your rim size ("18", "19", "20" etc)`,
    `${answers} your pets name`,
    `${answers} a noun`,
    `${answers} your favourite movie`,
    `${answers} the nicest word you have ever heard`,
    `${answers} your favourite actor`,
    `${answers} a sport you like`,
    `${answers} a profession that you don't like (plural-tense, i.e. "painters")`,
    `${answers} a date of your birthday`,
    `${answers} your mothers name`,
    `${answers} your nickname`,
    `${answers} your favourite tennis player`,
    `${answers} your profession`,
    `${answers} a model of your car`,
    `${answers} the city you live in`,
    `${answers} a number of your siblings`,
    `${answers} a number`,
    `${answers} your favourite country`,
    `${answers} a famous museum`,
    `${answers} your favourite soft-drink`,
    `${answers} an adjectiv`,
    `${answers} a synonym of bad`,
    `${answers} a plot of the film in one word`,
  ];
  
  let userInputs = []; 
  for (let i = questions; i >= 0; i--) {
  console.log(
  questionArray[questionCounter] + '(${questions} questions left)`);
  
  userInputs.push(prompt(questionArray[questionCounter] + '(${questions} questions left)`));
  if (userInputs "") {
  console.log("The user didn't write anything") 
  } else {
  console.log(userInputs);
  }
  questionCounter++;
  questions--;
    
  let theStory = `<h2> In his ${userInputs[0]}, Josh bought a ${userInputs[1]}. After that he completed ${userInputs[2]} and watched ${userInputs[3]}. Josh was to shy to admit that he is ${userInputs[4]}. After all, his friend ${userInputs[5]} always remembered him about that.</h2>
  <h2>Josh likes ${userInputs[6]} very much, but in the heart he is ${userInputs[7]}. However in ${userInputs[8]} he showed himself to the world not in the best way. But ${userInputs[9]} still loved him for being what he was. When he was younger she called him ${userInputs[10]}, as it remembered her that he will never became ${userInputs[11]}.</h2>
  <h2>Now he is ${userInputs[12]}. The job is not as good as ${userInputs[13]}, but he like being able to live in ${userInputs[14]}. Josh has ${userInputs[15]} dogs now and ${userInputs[16]} wives. He still would like to go to ${userInputs[17]} to see ${userInputs[18]} and drink ${userInputs[19]}. But being ${userInputs[20]} and ${userInputs[21]} he knows, that it will not be a possible ${userInputs[22]}.</h2>`
  console.log(theStory);
  alert ('All done! Ready for your totally-accurate, not-at-all confusing history of tech?');
  
  console.log(theStory);
  document.write(theStory);
  git add .
  git commit -m ""
  git push -u origin main
  };
  
