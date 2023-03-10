# Веб-технології

## Робота браузера

### Навігація

1. **DNS-запит** - браузер піднімається по ієрархії серверів з метою отримати IP-адресу, яка відповідає вказаному доменному імені, починаючи зі власного файлу імен в системі. Пошук відбувається по іменах, починаючи з кінця (для maps.google.com спочатку знаходиться сервер, відповідальний за com, потім за google, далі за maps).
2. **TCP-рукопотискання** - перед встановленням з'єднання браузер та сервер обмінюються трьома повідомленнями, в яких визначаютсья параметри з'єднання. **TLS-переговори** - визначають правила шифрування, опціонально для безпечного з'єднання (як по протоколу HTTPS).
3. **Запит** браузера на сервер (зазвичай сторінка).

### Відповідь на запит

4. **Перший пакет** (14КБ) - відправка сервером заголовків та вмісту HTML (зазвичай). Кожен наступний пакет буде в 2 рази більший.
5. **Підтвердження** - браузер відправляє на сервер підтвердження отриманого пакету.

### Парсинг даних

6. **Побудова DOM** - створення на основі HTML-документу дерево токенів (елементів, що складаються з тегів та їх атрибутів). Паралельно відправляє запити на завантаження всіх неблокуючих елементів, а сканер передзагрузки відправляє запити на високопріорітетні ресурси (CSS, JS, fonts).
7. **Побудова CSSOM** - створення дерева стилів (каскадом, від загальних до специфічних).
8. **Допрацювання процесів** - довантаження та обробка інших необхідних для рендеру елементів, **компіляція JS**, **побудова AOM** (об'єктної модулі доступності, без якої не почнуть обробляти голосові помічники та екранні читачі).

### Рендер

9. **Стилізація** - побудова дерева рендеру комбінуванням DOM та CSSOM. В дерево рендеру влючаються елементи, які міють бути відображені (навіть невидимі, що займають місце).
10. **Компоновка** (layout) - первинне прорахування розміру та положення вузлів (наступні перерахування відбуваються в окремих процесах - reflow).
11. **Відображення** (paint) - відображення кожного вузла на екрані (вперше - first meaningful paint - перше значиме відображення)
12. **Композиція** - прорахування послідовності відображення накладених шарів.

### Інтерактивність

13. Довантаження відкладених JS, запуск обробки скриптів. До завершення обробки інтерактивність сторінки недоступна.