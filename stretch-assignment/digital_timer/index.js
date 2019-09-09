const digits = document.querySelector('.digits');
const sTens = document.getElementById('secondTens');
const sOnes = document.getElementById('secondOnes');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');

const wrapper = document.createElement('div');
document.querySelector('body').appendChild(wrapper);
wrapper.setAttribute('class', 'wrapper');
wrapper.style.cssText = 'display: flex; flex-direction: column; align-items: center';
digits.parentNode.insertBefore(wrapper, digits);
wrapper.appendChild(digits);

const buttonContainer = document.createElement('div');
buttonContainer.setAttribute('class', 'btn-wrapper');
wrapper.appendChild(buttonContainer);

const startButton = document.createElement('button');
startButton.textContent = 'Start';
startButton.style.cssText = 'width: 122px; padding: 0.5rem 2rem; font-size: 1.5rem; background-color: green; color: white; border-radius: 4px; text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);';
buttonContainer.appendChild(startButton);

const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.style.cssText = 'width: 122px; padding: 0.5rem 2rem; font-size: 1.5rem; background-color: black; color: white; border-radius: 4px; text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);';
buttonContainer.appendChild(resetButton);

const toggleButtonDisplay = (display) => {
  startButton.style.display = display;
};

class Timer {
  static startTimer() {
    toggleButtonDisplay('none');
    let time = 0;
    const timer = setInterval(() => {
      time += 1;
      msTens.textContent = Math.floor((time) % 10).toString();
      msHundreds.textContent = Math.floor((time / 10) % 10).toString();
      sOnes.textContent = Math.floor((time / 100) % 10).toString();
      sTens.textContent = Math.floor((time / 1000) % 10).toString();

      if (sTens.textContent === '1') {
        toggleButtonDisplay('inline-block');
        digits.style.color = 'red';
        clearInterval(timer);
      }
    }, 10);
  }

  static resetTimer() {
    const time = 0;
    msTens.textContent = time.toString();
    msHundreds.textContent = time.toString();
    sOnes.textContent = time.toString();
    sTens.textContent = time.toString();
    digits.style.color = 'black';
  }
}

startButton.addEventListener('click', Timer.startTimer);
resetButton.addEventListener('click', Timer.resetTimer);
