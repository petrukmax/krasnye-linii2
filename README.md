# Archive Lines Preview

Создай рабочий preview существующего сайта «Красные линии» по этому техническому описанию и не делай пустой шаблон.

Сайт — русскоязычный архив первоисточников 2007–2024. Визуальный стиль: тёмный редакционный/архивный интерфейс, почти чёрный фон, тонкие золотисто-бронзовые линии и акценты, заголовки с классической serif-типографикой, навигация с широкими буквенными интервалами. Верх сайта: маленькая надпись «АРХИВ ПЕРВОИСТОЧНИКОВ · 2007–2024», крупный заголовок «Красные линии», подзаголовок «Речи, лекции и интервью, без которых нельзя понять истоки нынешнего противостояния». Ниже горизонтальное меню: «ГЛАВНАЯ», «БЛОК I», «БЛОК II», «БЛОК III», «БЛОК IV», «GITHUB / UCOZ».

Главная должна выглядеть как визуальный архив: большой hero-баннер с тёмной исторической библиотекой/архивным столом, старой картой на стене и стопками документов; поверх/рядом — аккуратная навигация к блокам. Сделай адаптивную версию для мобильного.

Нужна работающая маршрутизация и страницы блоков I–IV, а также страницы отдельных материалов. Добавь корректные 404, favicon, manifest и статические ресурсы. Все ссылки должны работать без перезагрузки и при прямом открытии URL.

Ключевая задача: приложение должно реально собираться и открываться в live preview Lovable. Не используй TanStack Start/Nitro/серверную БД/авторизацию — это исходные зависимости старого проекта, которые не нужны для архивного статического сайта. Выбери максимально надёжный стек React + Vite + TypeScript, с Tailwind или обычным CSS. Контент сделай локальным и структурированным, чтобы его легко было расширять. Сначала реализуй полностью рабочий сайт, затем проверь ошибки сборки и маршрутизации и исправь их.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://krasnye-linii2.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/612da146-3097-43af-87d5-777744786d60).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
