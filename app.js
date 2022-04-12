const storageInput = document.getElementById('input-text');
const textOutput = document.getElementById('output-text');
const saveTextSession = document.getElementById('btn-saveS');
const saveTextLocal = document.getElementById('btn-saveL');
const getTextSession = document.getElementById('btn-getS');
const getTextLocal = document.getElementById('btn-getL');

const storedSessionInput = sessionStorage.getItem('textInput');
const storedLocalInput = localStorage.getItem('textInput');

//if (storageInput){
//    textOutput.textContent = storedInput;
//}

storageInput.addEventListener('ionChange', letter => {
    textOutput.textContent = letter.target.value;   
});

const saveToSessionStorage = () => {
    sessionStorage.setItem('textInput', textOutput.textContent);
    console.log("Saved to Session Storage");
}

const saveToLocalStorage = () => {
    localStorage.setItem('textInput', textOutput.textContent);
    console.log("Saved to Local Storage");
}

const getSessionStorage = () => {
    const sessionData = sessionStorage.getItem('textInput');
    console.log("Session data is ", sessionData);
}

const getLocalStorage = () => {
    const localData = localStorage.getItem('textInput');
    console.log("Local data is", localData);
}

const sessionStoredItem = sessionStorage.getItem('textInput');
const localStoredItem = sessionStorage.getItem('textInput');


saveTextSession.addEventListener('click', saveToSessionStorage);
saveTextLocal.addEventListener('click', saveToLocalStorage);

getTextSession.addEventListener('click', getSessionStorage);
getTextLocal.addEventListener('click', getLocalStorage);