function Button(next, element, enabled) {
    this.next = next;
    this.element = element;
    this.enabled = enabled;
}

function toggleButton(button) {
    button.element.classList.toggle('disabled');
    button.enabled = !(button.enabled);
    toggleText(button);
    button.next.element.classList.toggle('disabled');
    button.next.enabled = !(button.next.enabled);
    toggleText(button.next);
    let done = true;
    buttonList.forEach(function(item) {
        done &= !item.enabled
    });
    if (done) {
        displayEnd();
    }
}

function toggleText(button) {
    if (button.enabled) {
        button.element.innerHTML = "<p>On</p>";
    } else {
        button.element.innerHTML = "<p>Off</p>";
    }
}

function displayEnd() {
    document.getElementById("congratsDiv").classList.add("congratsDivVisible");
}

function shuffleButtonLinks(buttonList) {
    let currIndex = buttonList.length,
        temp, randIndex;
    while (currIndex !== 0) {
        randIndex = Math.floor(Math.random() * currIndex);
        currIndex -= 1;
        temp = buttonList[currIndex];
        buttonList[currIndex] = buttonList[randIndex];
        buttonList[randIndex] = temp;
    }

    for (i = 0; i < buttonList.length; i++) {
        buttonList[i].next = buttonList[(i + 1) % buttonList.length];
    }
}

function resetPuzzle() {
    buttonList.forEach(function(item) {
        item.element.classList.remove('disabled');
        item.enabled = true;
    });
    buttonList = [];
    document.getElementById("congratsDiv").classList.remove("congratsDivVisible");
    buttonList.push(new Button(null, document.getElementById('button0'), true));
    buttonList.push(new Button(null, document.getElementById('button1'), true));
    buttonList.push(new Button(null, document.getElementById('button2'), true));
    buttonList.push(new Button(null, document.getElementById('button3'), true));
    shuffleButtonLinks(buttonList.slice(0));
}

let buttonList = [];
let buttonCount = 4;

window.onload = function() {
    resetPuzzle();
}
