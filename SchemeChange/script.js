/* Зміна кольорової схеми (світла / темна) залежно від налаштування
 * або автоматично (за налаштуванням ОС або браузера)
 * 
 * Для правильної роботи необхідно мати мінімальну структуру:
 *  - fieldset
 *    + legend    (підпис для читачів, сумується зі значенням радіо)
 *    + input:radio   (name="..." value="light")
 *    + input:radio   (name="..." value="auto")
 *    + input:radio   (name="..." value="dark")
 *    * інші допоміжні структури для стилізації
 * 
 * 1. Зчитуємо в змінні:
 *    - списки таблиць стилів з позначками схеми (через дата-атрибут);
 *    - наявність системної переваги темної теми;
 *    - список радіокнопок, відповідальних за зміну схеми
 * 2. 
 *  
 * 3.
 */

const lightStyles = document.querySelectorAll('link[data-scheme=light]');
const darkStyles = document.querySelectorAll('link[data-scheme=dark]');
const darkSchemeMedia = matchMedia('(prefers-color-scheme: dark)');
const switcherRadios = document.querySelectorAll('.switcher__radio');


setupSwitcher();
setupScheme();





function setupSwitcher(){
  const savedScheme = getSavedScheme();

  if (savedScheme !== null) {
    const currentRadio = document.querySelector(`.switcher__radio[value=${savedScheme}]`);
    currentRadio.checked = true;
  }

  // конвертуємо список вузлів в масив і кожному додаємо прослуховувач
  [...switcherRadios].forEach(radio => {
    radio.addEventListener('change', function(event){
      setScheme(event.target.value); // light / auto / dark
    });
  });
}


function setupScheme() {
  const savedScheme = getSavedScheme();
  const systemScheme = getSystemScheme();

  if (savedScheme == null) return;
  
  if (savedScheme != systemScheme) {
    setScheme(savedScheme);
  }
}




function setScheme(scheme) {
  switchMedia(scheme);

  if (scheme == 'auto'){
    clearScheme();
  } else {
    saveScheme(scheme);
  }
}




function switchMedia(scheme) {
  let lightMedia;
  let darkMedia;

  if (scheme == 'auto') {
    lightMedia = '(prefers-color-scheme: light)';
    darkMedia = '(prefers-color-scheme: dark)';
  } else {
    lightMedia = (scheme == 'light') ? 'all' : 'not all';
    darkMedia = (scheme == 'dark') ? 'all' : 'not all';
  }

  [...lightStyles].forEach(link => {
    link.media = lightMedia;
  });
  
  [...darkStyles].forEach(link => {
    link.media = darkMedia;
  });
}


function getSystemScheme() {
  // перевіряє, что відповідає умові?
  const darkScheme = darkSchemeMedia.matches;
  
  return darkScheme ? 'dark' : 'light';
}


// saved scheme (get / save / remove)
function getSavedScheme() {
  return localStorage.getItem('color-scheme');
}
function saveScheme(scheme) {
  localStorage.setItem('color-scheme', scheme);
}
function clearScheme() {
  localStorage.removeItem('color-scheme');
}


