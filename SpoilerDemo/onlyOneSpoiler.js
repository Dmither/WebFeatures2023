/* ----------------------------------------------------------
 * Для використання одиничного спойлера потрібно створити структуру:
 * - спойлер
 *   - заголовок спойлера
 *   - тіло спойлера (буде зменшуватись)
 *     - контент спойлера (задає висоту тіла)
 *       + елемент контената 1
 *       + елемент контената 2
 *       + елемент контената N
 * 
 * Для використання пов'язаних спойлерів (акордеон)
 * - блок для спойлерів акордеону 
 *   - спойлер 1
 *     - заголовок спойлера
 *     - тіло спойлера (буде зменшуватись)
 *       - контент спойлера (задає висоту тіла)
 *         + елемент контената 1
 *         + елемент контената 2
 *         + елемент контената N
 *   + спойлер 2
 *   + спойлер N
 * ----------------------------------------------------------
 * Один або колекцію спойлерів передаємо в OnlyOneSpoiler
 * Колекція пов'язує групу спойлерів, які відкриваються по-черзі
 */

function InitSpoiler(spoiler){

  // is iterable? ---------------------------------------------------
  if (spoiler[Symbol.iterator] != undefined){
    spoiler.forEach(block => {
      let contentHeight = block.children[1].children[0].offsetHeight;
  
      // hide content in closed spoilers
      block.children[1].style.overflow = 'hidden';
  
      // do have active class?
      if (block.classList.contains('_opened')){
        block.children[1].style.height = String(contentHeight) + 'px';
      } else {
        block.children[1].style.height = 0;
      }
    
      // click event for title
      block.children[0].addEventListener('click', function(event){
        if (block.classList.contains('_opened')){
          block.classList.remove('_opened');
          block.children[1].style.height = '0';
        } else {
          spoiler.forEach(item => {
            if (item.classList.contains('_opened')){
              item.classList.remove('_opened');
              item.children[1].style.height = '0';
            }
          });
          block.classList.add('_opened');
          block.children[1].style.height = String(contentHeight) + 'px';
        }
      });
    });
  } 
  // ----------------------------------------------------------------
  else {
    let contentHeight = spoiler.children[1].children[0].offsetHeight;
    
    spoiler.children[1].style.overflow = 'hidden';

    if (spoiler.classList.contains('_opened')){
      spoiler.children[1].style.height = String(contentHeight) + 'px';
    } else {
      spoiler.children[1].style.height = 0;
    }

    spoiler.children[0].addEventListener('click', function(event){
      if (spoiler.classList.contains('_opened')){
        spoiler.classList.remove('_opened');
        spoiler.children[1].style.height = '0';
      } else {
        spoiler.classList.add('_opened');
        spoiler.children[1].style.height = String(contentHeight) + 'px';
      }
    });
  }
}