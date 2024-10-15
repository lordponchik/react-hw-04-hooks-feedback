<h1 id="home">Homework :clipboard:</h1>

## react-hw-04-hooks-feedback

- 🇺🇸 [English](#en)
- 🇺🇦 [Ukrainian](#uk)
- 🇷🇺 [Russian](#ru)

---

<h3 id="en">📚 EN 📚</h3>

# Acceptance criteria

- Repository `react-hw-04-hooks-feedback` created
- When submitting homework, there are two links: to the source files and working

pages of each task on `GitHub Pages`.

- When running the task code, there are no errors or warnings in the console.
- Each component has a separate file in the `src/components` folder.
- `propTypes` are described for the components.
- Everything that the component expects as props is passed to it when called.
- JS code is clean and clear, `Prettier` is used.
- Styling is done by `CSS modules` or `Styled Components`.
- Refactor the task code
  [Review widget](https://github.com/lordponchik/react-hw-02-phonebook) using
  React hooks.

# Feedback widget

Like most companies, Expresso Cafe collects feedback from its customers. Your
task is to create an application for collecting statistics. There are only three
options for feedback: good, neutral and bad.

## Step 1

The application should display the number of reviews collected for each
category. The application should not save review statistics between different
sessions (page refresh).

The application state must be of the following type, new properties cannot be
added.

```bash
state = {
good: 0,
neutral: 0,
bad: 0
}
```

The interface may look like this.

![preview](./hw/step-1.png)

## Step 2

Expand the functionality of the application so that the interface displays more
statistics about the collected reviews. Add a display of the total number of
reviews collected from all categories and the percentage of positive reviews. To
do this, create helper methods `countTotalFeedback()` and
`countPositiveFeedbackPercentage()`, which calculate these values ​​​​based on
the data in the state (calculated data).

![preview](./hw/step-2.png)

## Step 3

Refactor the application. The application state should remain in the root
component `<App>`.

- Move the statistics display to a separate component

`<Statistics good={} neutral={} bad={} total={} positivePercentage={}>`.

- Move the button block to the

`<FeedbackOptions options={} onLeaveFeedback={}>` component.

- Create a `<Section title="">` component that renders a section with a title
  and

children. Wrap each of `<Statistics>` and `<FeedbackOptions>` in

the created section component.

## Step 4

Extend the functionality of the application so that the statistics block is
rendered only after at least one review has been collected. Message about
absence of statistics move to the component
`<Notification message="There is no feedback">`.

![preview](./hw/preview.gif)

---

---

<h3 id="uk">📚 UK 📚 <a href="#home">⬆ Home ⬆</a></h3>

# Критерії прийому

- Створено репозиторій `react-hw-04-hooks-feedback`
- При здачі домашньої роботи є два посилання: на вихідні файли та робітники
  сторінки кожного завдання на `GitHub Pages`.
- При запуску коду завдання, в консолі немає помилок та попереджень.
- Для кожного компонента є окремий файл у папці `src/components`.
- Для компонентів описано `propTypes`.
- Все, що компонент чекає у вигляді пропсів, передається йому при виклику.
- JS-код чистий та зрозумілий, використовується `Prettier`.
- Стилізація виконана `CSS-модулями` або `Styled Components`.
- Проведи рефакторинг коду завдання
  [Віджет відгуків](https://github.com/lordponchik/react-hw-02-phonebook)
  використовуючи React-хуки.

# Віджет відгуків

Як і більшість компаній, кафе Expresso збирає відгуки від своїх клієнтів. Твоє
завдання – створити додаток для збору статистики. Є лише три варіанти зворотний
зв'язок: добре, нейтрально і погано.

## Крок 1

Програма повинна відображати кількість зібраних відгуків для кожної категорії.
Програма не повинна зберігати статистику відгуків між різними сесіями (Оновлення
сторінки).

Стан програми обов'язково має бути наступного виду, додавати нові властивості не
можна.

```bash
state = {
 good: 0,
 neutral: 0,
 bad: 0
}
```

Інтерфейс може мати такий вигляд.

![preview](./hw/step-1.png)

## Крок 2

Розшир функціонал програми так, щоб в інтерфейсі відображалося більше статистики
про зібрані відгуки. Додай відображення загальної кількості зібраних відгуків з
усіх категорій та відсоток позитивних відгуків. Для цього створи допоміжні
методи `countTotalFeedback()` та `countPositiveFeedbackPercentage()`, що
підраховують ці значення ґрунтуючись на даних у стані (обчислювані дані).

![preview](./hw/step-2.png)

## Крок 3

Виконай рефакторинг програми. Стан програми повинен залишатися в кореневому
компоненті `<App>`.

- Винеси відображення статистики в окремий компонент
  `<Statistics good={} neutral={} bad={} total={} positivePercentage={}>`.
- Винеси блок кнопок у компонент
  `<FeedbackOptions options={} onLeaveFeedback={}>`.
- Створи компонент `<Section title="">`, який рендерить секцію із заголовком та
  дітей (діти). Оберни кожен з '<Statistics>' і '<FeedbackOptions>' в створений
  компонент секції.

## Крок 4

Розшир функціонал програми так, щоб блок статистики рендерувався тільки після
того, як було зібрано хоча б один відгук. Повідомлення про відсутність
статистики винеси в компонент `<Notification message="There is no feedback">`.

![preview](./hw/preview.gif)

---

---

<h3 id="ru">📚 RU 📚 <a href="#home">⬆ Home ⬆</a></h3>

# Критерии приема

- Создан репозиторий `react-hw-04-hooks-feedback`
- При сдаче домашней работы есть две ссылки: на исходные файлы и рабочие
  страницы каждого задания на `GitHub Pages`.
- При запуске кода задания, в консоли нету ошибок и предупреждений.
- Для каждого компонента есть отдельный файл в папке `src/components`.
- Для компонентов описаны `propTypes`.
- Все что компонент ожидает в виде пропсов, передается ему при вызове.
- JS-код чистый и понятный, используется `Prettier`.
- Стилизация выполнена `CSS-модулями` или `Styled Components`.
- Проведи рефакторинг кода задания
  [Виджет отзывов](https://github.com/lordponchik/react-hw-02-phonebook)
  используя React-хуки.

# Виджет отзывов

Как и большинство компаний, кафе Expresso собирает отзывы от своих клиентов.
Твоя задача - создать приложение для сбора статистики. Есть всего три варианта
обратной связи: хорошо, нейтрально и плохо.

## Шаг 1

Приложение должно отображать количество собранных отзывов для каждой категории.
Приложение не должно сохранять статистику отзывов между разными сессиями
(обновление страницы).

Состояние приложения обязательно должно быть следующего вида, добавлять новые
свойства нельзя.

```bash
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
```

Интерфейс может выглядеть так.

![preview](./hw/step-1.png)

## Шаг 2

Расширь функционал приложения так, чтобы в интерфейсе отображалось больше
статистики о собранных отзывах. Добавь отображение общего количества собранных
отзывов из всех категорий и процент положительных отзывов. Для этого создай
вспомогательные методы `countTotalFeedback()` и
`countPositiveFeedbackPercentage()`, подсчитывающие эти значения основываясь на
данных в состоянии (вычисляемые данные).

![preview](./hw/step-2.png)

## Шаг 3

Выполни рефакторинг приложения. Состояние приложения должно оставаться в
корневом компоненте `<App>`.

- Вынеси отображение статистики в отдельный компонент
  `<Statistics good={} neutral={} bad={} total={} positivePercentage={}>`.
- Вынеси блок кнопок в компонент
  `<FeedbackOptions options={} onLeaveFeedback={}>`.
- Создай компонент `<Section title="">`, который рендерит секцию с заголовком и
  детей (children). Оберни каждый из `<Statistics>` и `<FeedbackOptions>` в
  созданный компонент секции.

## Шаг 4

Расширь функционал приложения так, чтобы блок статистики рендерился только после
того, как был собран хотя бы один отзыв. Сообщение об отсутствиии статистики
вынеси в компонент `<Notification message="There is no feedback">`.

![preview](./hw/preview.gif)
