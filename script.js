:root {
  --background: #323437;
  --button: #252729;
  --button-hover: #ffffff;
  --button-hover-text: #000000;
  --container: #252729;
  --text: #ffffff;
}

body {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: var(--background);
  color: var(--text);
}

.options-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.option-button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: var(--button);
  color: var(--text);
}

.option-button:hover {
  background-color: var(--button-hover);
  color: var(--button-hover-text);
}

.quiz-container {
  background-color: var(--container);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.question {
  font-size: 24px;
  margin-bottom: 20px;
}

.options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

.option {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: var(--background);
  color: var(--text);
}

.option:hover {
  background-color: var(--button-hover);
  color: var(--button-hover-text);
}

.result {
  font-size: 20px;
  margin-bottom: 20px;
}

.next-button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 auto;
  background-color: var(--container);
  color: var(--text);
  /* text-transform: uppercase; */
}

.next-button:hover {
  background-color: var(--button-hover);
  color: var(--button-hover-text);
}

.restart-button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 auto;
  background-color: var(--container);
  color: var(--text);
  /* text-transform: uppercase; */
  display: none;
}

.restart-button:hover {
  background-color: var(--button-hover);
  color: var(--button-hover-text);
}
