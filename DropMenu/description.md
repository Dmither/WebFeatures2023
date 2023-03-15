## Структура
```
<div class="dropdown">
  <div class="dropdown__title" >DropDown</div>
  <ul class="dropdown__list">
    <li><a href="" class="dropdown__item">Option 1</a></li>
    <li><a href="" class="dropdown__item">Option 2</a></li>
  </ul>
</div>
```
## Стилі

Для обгортки:  
```.dropdown {position: relative;}```

Для контейнера:  
```
.dropdown__list {
	position: absolute;
	top: 0;
	left: 0;
	min-width: -webkit-max-content;
	min-width: -moz-max-content;
	min-width: max-content;
	width: 100%;
	opacity: 0;
	height: 0;
	overflow: hidden;
	top 100% (left: 100%); }
```
Для контейнера при наведенні на обгортку або фокусі на елементі:
```
.dropdown:hover .dropdown__list,
.dropdown_active .dropdown__list {
	opacity: 100%;
	height: -webkit-max-content;
	height: -moz-max-content;
	height: max-content; }
```