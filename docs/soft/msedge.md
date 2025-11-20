---
title: Microsoft Edge
description: Современный веб-браузер от Microsoft на базе Chromium
head:
  - - meta
    - name: keywords
      content: Microsoft Edge, браузер, Chromium, Microsoft, синхронизация, Windows, приватность, безопасность
---

# Microsoft Edge

Microsoft Edge — веб-браузер от компании Microsoft, впервые выпущенный в 2015 году одновременно с Windows 10 в качестве замены Internet Explorer. Поначалу работал на собственном движке EdgeHTML, однако в 2019 году Microsoft перевела браузер на открытый движок Chromium для обеспечения лучшей совместимости с веб-стандартами и богатой библиотекой расширений Chrome Web Store.

## Основные возможности

**Интеграция с сервисами Microsoft** — встроенная синхронизация с OneDrive, Office Online, Teams и другими сервисами экосистемы Microsoft.

**Коллекции** — организация контента с помощью коллекций для исследований, проектов и планирования покупок с возможностью экспорта в Word и Excel.

**Режим IE** — встроенная совместимость с устаревшими веб-приложениями, требующими Internet Explorer.

**Вертикальные вкладки** — альтернативное расположение вкладок сбоку для удобной работы с большим количеством открытых страниц.

**Защита от отслеживания** — три уровня защиты конфиденциальности с блокировкой трекеров и вредоносных сайтов.

**Спящие вкладки** — автоматическая выгрузка неактивных вкладок из памяти для экономии системных ресурсов.

**Встроенные инструменты** — скриншоты, веб-захват, режим чтения, математический решатель и переводчик.

## Версии Microsoft Edge

**Stable (Стабильная)** — основная версия с проверенными обновлениями, рекомендуется для повседневного использования.

**Beta** — тестовая версия с новыми функциями, выходящая за несколько недель до стабильного релиза.

**Dev** — версия для разработчиков с еженедельными обновлениями, содержит экспериментальные функции.

## Установка

Выберите подходящий способ установки Microsoft Edge для вашей системы:

::: code-group

```shell [UBUNTU, DEBIAN, MINT, POPOS]
# Установка необходимых пакетов
sudo apt install software-properties-common curl ca-certificates gnupg -y

# Импорт GPG ключа Microsoft
curl -fsSL https://packages.microsoft.com/keys/microsoft.asc | sudo gpg --dearmor -o /usr/share/keyrings/microsoft-edge.gpg

# Добавление репозитория
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-edge.gpg] https://packages.microsoft.com/repos/edge stable main" | sudo tee /etc/apt/sources.list.d/microsoft-edge.list

# Установка
sudo apt update
sudo apt install microsoft-edge-stable
```

```shell [FEDORA]
# Импорт GPG ключа
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc

# Добавление репозитория
sudo dnf config-manager --add-repo https://packages.microsoft.com/yumrepos/edge

# Установка
sudo dnf install microsoft-edge-stable
```

```shell [OPENSUSE]
# Импорт GPG ключа
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc

# Добавление репозитория
sudo zypper addrepo https://packages.microsoft.com/yumrepos/edge microsoft-edge

# Установка
sudo zypper install microsoft-edge-stable
```

```shell [ARCH LINUX]
# Установка из AUR
yay -S microsoft-edge-stable-bin
```

```shell [ALT LINUX, EPM PLAY]
epm play edge
```

```shell [REDOS]
# Импорт GPG ключа
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc

# Добавление репозитория
sudo dnf config-manager --add-repo https://packages.microsoft.com/yumrepos/edge

# Установка
sudo dnf install microsoft-edge-stable
```

```shell [FLATPAK]
flatpak install flathub com.microsoft.Edge
```

```shell [EPM]
epm install edge
```

:::

::: info
Microsoft Edge автоматически добавляет свой репозиторий в систему при установке через официальные пакеты, обеспечивая получение обновлений.
:::

::: warning Региональные ограничения
Microsoft Edge может быть недоступен для установки в некоторых регионах из-за лицензионных ограничений. Flatpak-версия является неофициальной сборкой.
:::

### Установка Beta и Dev версий

Для установки тестовых версий используйте:

::: code-group

```shell [UBUNTU, DEBIAN, MINT, POPOS]
# Beta версия
sudo apt install microsoft-edge-beta

# Dev версия
sudo apt install microsoft-edge-dev
```

```shell [FEDORA]
# Beta версия
sudo dnf install microsoft-edge-beta

# Dev версия
sudo dnf install microsoft-edge-dev
```

:::

## Особенности работы

### Синхронизация с аккаунтом Microsoft

Microsoft Edge предлагает облачную синхронизацию данных:

1. Откройте Настройки → Профили
2. Войдите в аккаунт Microsoft
3. Выберите данные для синхронизации:
   - Избранное и закладки
   - Пароли
   - История просмотров
   - Открытые вкладки
   - Расширения
   - Коллекции
   - Настройки

::: tip
Синхронизация позволяет продолжать работу на разных устройствах с сохранением всех данных между Windows, macOS, Linux, iOS и Android.
:::

### Работа с коллекциями

Коллекции помогают организовать исследования и проекты:

1. Нажмите на иконку Коллекции (или Ctrl+Shift+Y)
2. Создайте новую коллекцию
3. Добавляйте веб-страницы, изображения и заметки
4. Экспортируйте коллекцию в Word, Excel или OneNote
5. Поделитесь коллекцией с другими пользователями

### Вертикальные вкладки

Альтернативное расположение вкладок:

1. Нажмите на иконку вертикальных вкладок слева от адресной строки
2. Вкладки переместятся на боковую панель
3. Используйте поиск по вкладкам для быстрого доступа
4. Группируйте вкладки по темам

### Спящие вкладки

Экономия ресурсов системы:

1. Откройте Настройки → Система и производительность
2. Включите «Экономить ресурсы с помощью спящих вкладок»
3. Настройте время до перехода в спящий режим (по умолчанию 2 часа)
4. Добавьте исключения для важных сайтов

## Полезные советы и дополнения

### Настройка приватности

Для защиты конфиденциальности:

1. **Выбор уровня защиты от отслеживания**:
   - Настройки → Конфиденциальность, поиск и службы
   - Выберите Базовый, Сбалансированный или Строгий

2. **Блокировка нежелательных сайтов**:
   - Включите Microsoft Defender SmartScreen
   - Активируйте защиту от потенциально нежелательных приложений

3. **Управление данными**:
   - Настройте автоматическую очистку данных при закрытии
   - Отключите отправку диагностических данных

### Использование режима чтения

Упрощённый режим для чтения текста:

1. Откройте статью или длинный текст
2. Нажмите на иконку книги в адресной строке (или F9)
3. Настройте размер шрифта и тему оформления
4. Используйте функцию чтения вслух

### Веб-захват и скриншоты

Создание скриншотов веб-страниц:

1. Нажмите Ctrl+Shift+S или кликните на иконку «...» → Веб-захват
2. Выберите область или всю страницу для захвата
3. Добавьте аннотации и пометки
4. Сохраните или поделитесь скриншотом

### Работа с расширениями

Microsoft Edge совместим с расширениями Chrome:

1. Откройте [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/)
2. Или используйте [Chrome Web Store](https://chrome.google.com/webstore)
3. Нажмите «Добавить в Edge»
4. Управляйте расширениями через edge://extensions

::: info
Для использования Chrome Web Store включите опцию «Разрешить расширения из других магазинов» в настройках расширений.
:::

### Математический решатель

Встроенный инструмент для решения математических задач:

1. Выделите математическое выражение на веб-странице
2. Кликните правой кнопкой мыши
3. Выберите «Решить с Math Solver»
4. Просмотрите пошаговое решение

## Решение проблем

### Не запускается браузер

Если Microsoft Edge не запускается:

**Проверка конфликтов пакетов:**
```sh
# Для Ubuntu/Debian
sudo apt --fix-broken install

# Для Fedora
sudo dnf check
sudo dnf install --best --allowerasing
```

**Сброс настроек:**
```sh
# Удаление профиля пользователя
rm -rf ~/.config/microsoft-edge/

# Удаление кэша
rm -rf ~/.cache/microsoft-edge/
```

### Проблемы с воспроизведением видео

При проблемах с медиаконтентом:

::: code-group

```shell [UBUNTU, DEBIAN, MINT, POPOS]
sudo apt install ubuntu-restricted-extras ffmpeg
```

```shell [FEDORA]
sudo dnf install ffmpeg
```

```shell [ARCH LINUX]
sudo pacman -S ffmpeg
```

:::

**Проверка аппаратного ускорения:**
1. Введите `edge://gpu` в адресную строку
2. Проверьте статус аппаратного ускорения
3. Если нужно, отключите через `edge://flags`

### Конфликты репозиториев

Если возникают конфликты источников:

```sh
# Удаление дублирующихся записей
sudo rm /etc/apt/sources.list.d/microsoft-edge*.list

# Повторное добавление репозитория
curl -fsSL https://packages.microsoft.com/keys/microsoft.asc | sudo gpg --dearmor -o /usr/share/keyrings/microsoft-edge.gpg

echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-edge.gpg] https://packages.microsoft.com/repos/edge stable main" | sudo tee /etc/apt/sources.list.d/microsoft-edge.list
```

### Высокое потребление памяти

Для оптимизации использования ресурсов:

1. **Включите спящие вкладки**:
   - Настройки → Система и производительность → Экономить ресурсы

2. **Отключите ненужные расширения**:
   - edge://extensions → Отключите неиспользуемые

3. **Ограничьте процессы**:
   - Запуск с флагом `--process-per-site`

```sh
microsoft-edge --process-per-site
```

### Проблемы с синхронизацией

Если синхронизация не работает:

1. Проверьте подключение к интернету
2. Откройте Настройки → Профили → Синхронизация
3. Выйдите из аккаунта и войдите снова
4. Проверьте статус службы Microsoft в браузере
5. Очистите кэш синхронизации:
   ```sh
   rm -rf ~/.config/microsoft-edge/Default/Sync*
   ```

## Дополнительные настройки

### Импорт данных из других браузеров

Microsoft Edge позволяет импортировать данные:

1. Откройте Настройки → Профили
2. Нажмите «Импортировать данные браузера»
3. Выберите браузер-источник (Chrome, Firefox, Opera и т.д.)
4. Отметьте данные для импорта
5. Нажмите «Импортировать»

### Настройка поисковых систем

Изменение поисковой системы по умолчанию:

1. Откройте Настройки → Конфиденциальность, поиск и службы
2. Прокрутите до раздела «Службы»
3. Выберите «Адресная строка и поиск»
4. Выберите поисковую систему из списка
5. Или добавьте собственную через «Управление поисковыми системами»

### Использование режима IE

Для устаревших веб-приложений:

1. Введите `edge://settings/defaultBrowser` в адресную строку
2. Настройте параметры режима Internet Explorer
3. Добавьте сайты, требующие режим IE
4. При посещении таких сайтов Edge автоматически переключится

### Настройка автозаполнения

Управление данными автозаполнения:

1. Откройте Настройки → Профили → Пароли
2. Включите или отключите сохранение паролей
3. Настройте автозаполнение адресов и платёжных данных
4. Используйте генератор надёжных паролей

## Обновление и удаление

### Обновление Microsoft Edge

::: code-group

```shell [UBUNTU, DEBIAN, MINT, POPOS]
sudo apt update
sudo apt upgrade microsoft-edge-stable
```

```shell [FEDORA]
sudo dnf update microsoft-edge-stable
```

```shell [FLATPAK]
flatpak update com.microsoft.Edge
```

:::

### Удаление Microsoft Edge

::: code-group

```shell [UBUNTU, DEBIAN, MINT, POPOS]
# Удаление браузера
sudo apt remove microsoft-edge-stable

# Удаление репозитория и ключа
sudo rm /etc/apt/sources.list.d/microsoft-edge.list
sudo rm /usr/share/keyrings/microsoft-edge.gpg
```

```shell [FEDORA]
# Удаление браузера
sudo dnf remove microsoft-edge-stable

# Удаление репозитория
sudo rm /etc/yum.repos.d/microsoft-edge.repo
```

```shell [FLATPAK]
flatpak uninstall com.microsoft.Edge
```

:::

## Системные требования

Для оптимальной работы Microsoft Edge на Linux необходимо:

- **Процессор:** процессор с частотой 1 ГГц или выше
- **Оперативная память:** минимум 1 ГБ (рекомендуется 4 ГБ и более)
- **Место на диске:** не менее 500 МБ свободного пространства
- **Система:** 64-битная версия Linux
- **Библиотеки:** GTK+ 3.10 или выше

## Ссылки и ресурсы

- [Официальный сайт Microsoft Edge](https://www.microsoft.com/edge)
- [Магазин расширений Edge](https://microsoftedge.microsoft.com/addons/)
- [Документация и поддержка](https://support.microsoft.com/microsoft-edge)
- [Сообщество Microsoft Edge Insider](https://www.microsoftedgeinsider.com/)
- [Отчёты об ошибках](https://github.com/MicrosoftEdge/Status/issues)

---

**Примечание:** Microsoft Edge предоставляет современный опыт веб-серфинга с глубокой интеграцией в экосистему Microsoft, что делает его отличным выбором для пользователей, активно использующих сервисы компании.