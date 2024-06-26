# React + TypeScript + ReduxToolkit + ReactHookForm + Vite 
<h1>Информация по запуску</h1>
<h2>git clone url - cклонируйте репозиторий к себе в IDE или редактор кода</h2>
<h2>npm init - подгрузите все необходимые зависимости</h2>
<h2>npm run dev - запустите проект</h2>

# Идеи для реализации
-Полностью свалидировать формы(с помощью либы ReacthHookForm)
-Каждый документ кликабельный и мы можем перейти на страницу его просмотра, можем заполнять авторов документа и выставлять статусы важности, которые также будут отображаться в табличке
-Редактирование данных в таблице без модального окна(так будет намного практичнее)
- Модульная архитектура приложения полностью поддерживает скейлинг
- В дальнейшем использование контейнеризации, например Docker, для облегчения развертывания и масштабирования приложения
- Использовать практики (CI/CD) для автоматизации процессов сборки, тестирвания
- Jest для тестирования
- Использование облачных сервисов для хранения данных и обработки запросов, что также облегчает масштабирование
# Скриншоты данного проекта

<h3>Неавторизованный пользователь при входе в приложение получает предложение авторизоваться</h3>
<img src="https://github.com/flavokrkkk/test-task-app/blob/master/screens/2024-05-29_11-14-44.png">

<h3>Реализована форма с регистрацией, при успешном входе токен отправляется в LocalStorage, откуда уже помещается в следующие запросы, которые требуеют авторизации, также выполнена валидация формы с помощью ReactHookForm, где обработаны все частные случаи и дисейблед кнопки, если в полях ввода ничего не находится</h3>
<img src="https://github.com/flavokrkkk/test-task-app/blob/master/screens/2024-05-29_11-14-31.png">

<h3>Токен помещается в LocalStorage при успешной авторизации пользователя, и благодаря этому после перезагрузки пользователь, который был авторизован остается в приложении, но также есть кнопка "Выйти" для принудительного выхода</h3>
<img src="https://github.com/flavokrkkk/test-task-app/blob/master/screens/2024-05-29_11-55-44.png">

<h3>После успешного входа на главной странице мы видим таблицу с данными, которые подгружаются с помощью токена авторизации в заголовках запроса, также реализованы спиннеры загрузки/отправки данных, прикрелены к каждому запросу на сервер</h3>
<img src="https://github.com/flavokrkkk/test-task-app/blob/master/screens/2024-05-29_11-15-14.png">

<h3>Реализовано добавление новых документов с помощью модального окна, внутри него находится форма, которую мы должны заполнить, чтобы добавить новый документ, пропуск какого-то поля не допускается, обязательно заполняем все полностью и также дисейблед кнопки, если какое-то из полей ввода не заполнено</h3>
<img src="https://github.com/flavokrkkk/test-task-app/blob/master/screens/2024-05-29_11-15-21.png">

<h3>Пример заполненной формы добавления нового документа в таблицу</h3>
<img src="https://github.com/flavokrkkk/test-task-app/blob/master/screens/2024-05-29_11-16-17.png">

<h3>Реализовано удаление документа из таблицы, поучаем id текущего документа (т.е на который тыкнули), удаленная запись сразу пропадает из таблицы</h3>
<img src="https://github.com/flavokrkkk/test-task-app/blob/master/screens/2024-05-29_11-53-14.png">

<h3>Реализовано редактирование строк в таблице, также получаем текущую строку, которую хотим изменить и у нее уже меянем все нужные нам поля, реализовано также с помощью модального окна</h3>
<img src="https://github.com/flavokrkkk/test-task-app/blob/master/screens/2024-05-29_11-54-19.png">

# Обработка ошибок в приложении
<h3>Ошибка при авторизации ('Ввели не правильный пароль')</h3>
<img src="https://github.com/flavokrkkk/test-task-app/blob/master/screens/2024-05-29_12-52-31.png">

<h3>Ошибка при редактировании ('URL передан неверно и другие частные случаи')</h3>
<img src="https://github.com/flavokrkkk/test-task-app/blob/master/screens/2024-05-29_12-54-33.png">

<h3>Ошибка при попытке удалить строку ('URL или ID передан неверно или невалидны и другие частные случаи)</h3>
<img src="https://github.com/flavokrkkk/test-task-app/blob/master/screens/2024-05-29_12-54-59.png">

<h3>Ошибка при создании строки ('URL передан неверно и другие частные случаи)</h3>
<img src="https://github.com/flavokrkkk/test-task-app/blob/master/screens/2024-05-29_12-56-18.png">
