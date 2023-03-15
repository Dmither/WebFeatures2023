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

export function InitSpoiler(spoiler){
  // for iterable structures ----------------------------------------
  if (spoiler[Symbol.iterator] != undefined){
    spoiler.forEach(block => {
      prepareSpoiler(block);

      block.children[0].addEventListener('click', function(event){
        if (block.classList.contains('_opened')){
          closeSpoiler(block)
        } else {
          spoiler.forEach(item => {
            if (item.classList.contains('_opened')){
              closeSpoiler(item)
            }
          });
          openSpoiler(block)
        }
      });
    });
  }

  // for not iterable structures -------------------------------------
  else {
    prepareSpoiler(spoiler);

    spoiler.children[0].addEventListener('click', function(event){
      if (spoiler.classList.contains('_opened')){
        closeSpoiler(spoiler);
      } else {
        openSpoiler(spoiler);
      }
    });
  }
}


function prepareSpoiler(spoiler, contentHeight){
  // hide content in closed spoilers
  spoiler.children[1].style.overflow = 'hidden';

  // do have _opened class?
  if (spoiler.classList.contains('_opened')){
    spoiler.children[1].style.height = String(spoiler.children[1].children[0].offsetHeight) + 'px';
  } else {
    spoiler.children[1].style.height = 0;
  }
}


function openSpoiler(spoiler, contentHeight=0){
  spoiler.classList.add('_opened');
  spoiler.children[1].style.height = String(spoiler.children[1].children[0].offsetHeight) + 'px';
}


function closeSpoiler(spoiler){
  spoiler.classList.remove('_opened');
  spoiler.children[1].style.height = '0';
}