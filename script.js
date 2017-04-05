function Button(next, element, enabled) {
  this.next = next;
  this.element = element;
  this.enabled = enabled;
}

function toggleButton(button) {
  button.element.classList.toggle('disabled');
  button.enabled = !(button.enabled);
  button.next.element.classList.toggle('disabled');
  button.next.enabled = !(button.enabled);
}

function shuffleButtonLinks(buttonList) {
  let currIndex = buttonList.length, temp, randIndex;
  while(currIndex !== 0) {
    randIndex = Math.floor(Math.random() * currIndex);
    currIndex -= 1;
    temp = buttonList[currIndex];
    buttonList[currIndex] = buttonList[randIndex];
    buttonList[randIndex] = temp;
  }

  for(i = 0; i < buttonList.length; i++) {
    buttonList[i].next = buttonList[(i+1) % buttonList.length];
  }
}

const buttonList = [];

window.onload = function() {
  buttonList.push(new Button(null, document.getElementById('button0'), true));
  buttonList.push(new Button(null, document.getElementById('button1'), true));
  buttonList.push(new Button(null, document.getElementById('button2'), true));
  buttonList.push(new Button(null, document.getElementById('button3'), true));
  shuffleButtonLinks(buttonList);
}
