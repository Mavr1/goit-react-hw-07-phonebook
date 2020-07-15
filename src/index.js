// TODO:
// [x] Создан репозиторий goit-react-hw-07-phonebook
// [x] Удали код отвечающий за хранение и чтение контактов из локального хранилища.
// [x] Добавь в приложение Телефонной книги работу с бекендом для хранения контактов.
// [x] Создай локальный бекенд для разработки при помощи библиотеки json-server.
// [x] Используй этот db.json для базы данных, будет один ендпоинт /contacts.
// [x] Напиши Redux-операции для работы с асинхронными запросами по паттерну request, success и error.
// [x] Добавь селекторы в файл contactsSelectors и сделай мемоизацию селекторов там, где необходимо.
// [] Переделать на Slice.
// [] Переделать на Hooks.
// [x] Исправить алерт.

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
