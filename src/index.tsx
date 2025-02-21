import React from 'react'
// @ts-ignore
import ReactDOM from 'react-dom/client'
import { App } from './App'

// Получение элемента контейнера из DOM

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// Проверка наличия контейнера
if (!root) {
    throw new Error('Не найден элемент с ID "root".')
}

// Создание корня React

// Отображение компонента App в контейнере
root.render(<App />)
