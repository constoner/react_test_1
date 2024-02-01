# Тестовое задание на позицию Frontend-разработчик (React)

деплой тут https://constoner.github.io/react_test_1/

## Задание

Используя React, TypeScript (обязательно), RTK Query, React Router DOM 6, JSON Placeholder и FSD-архитектуру сделайте простое приложение:

1. главная страница - список постов (бесконечный скролл + виртуализация)
2. каждый пост в списке - это строка: номер + заголовок + описание обрезанное "...", если не влезает + кнопка "просмотр"
3. кнопка "просмотр" ведет на отдельный роут, где отображается полная информация о посте в произвольной форме + кнопка "назад"

## Стэк

- typescript
- react 18
- react router dom 6
- rtk query
- react-virtualized
- react-window
- react-window-infinite-loader
- bootstrap 5
- bootstrap icons
- json placeholder
- github pages for deploy

## Исползование

- старт dev-сервера: `npm run start`
- создание билда: `npm run build`
- деплой на **gh-pages** автоматический, при пуше билда в ветку `master` _(не забыть указать верный **url** в package.json: homepage)_
