---
title: Google Chrome
description: Быстрый и безопасный браузер от Google для компьютера.
head:
  - - meta
    - name: keywords
      content: Google Chrome, браузер, Google, безопасность, защита
---

# Google Chrome

Google Chrome — быстрый и безопасный браузер от Google для компьютера, смартфонов и планшетов на Android и iOS (iPhone и iPad). Ускоряет загрузку при медленном соединении, защищает от вирусов и мошенников, делает поиск удобнее.

## Издания Google Chrome

**Google Chrome** — Быстрый и безопасный браузер с встроенной технологией активной защиты. Он проверяет скачиваемые файлы на вирусы, предупреждает об опасных сайтах, защищает подключение к общественным сетям и ваши пароли.

**Google Chrome для организаций** — Защита от вредоносных программ, фишинга и кражи паролей. Простая настройка в пару кликов на всю компанию и выделенная техподдержка.

**Google Chrome Бета-версия** — Все новые возможности Google Chrome, отзывы о последних версиях и общение с разработчиками в [блоге Google Chrome](https://chromeenterprise.google/).

::: info
С версии `100.0.4896.127`, устанавливается **Google Chrome для организаций** — специальная сборка, поддерживающая корпоративные функции, например, управление при помощи групповых политик. Однако её можно использовать и на домашних компьютерах.
:::

## Установка

Для установки Google Chrome используйте следующие команды:

::: code-group

```shell [Ubuntu, Debian, Mint, PopOS]
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb
```

```shell [Fedora]
sudo dnf install https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
```

```shell [OpenSuse]
sudo zypper install https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
```

```shell [Arch Linux]
yay -S google-chrome
```

```shell [Flatpak]
sudo flatpak install flathub com.google.Chrome
```

```shell [EPM]
epm install chrome
```

:::

## Полезные советы и дополнения

### Запуск Google Chrome в оконном интерфейсе Wayland

По умолчанию Google Chrome запускается в оконном интерфейсе X11. Для запуска в оконном интерфейсе Wayland:

1. Введите в адресную строку `chrome://flags/`.
2. Введите в строку поиска флаг `#ozone-platform-hint`.
3. Выберите значение `Auto` для опции `Preferred Ozone platform`.
4. Перезапустите Google Chrome и проверьте результат.

Запустить Google Chrome через терминал, указав дополнительные опции запуска:

```shell
google-chrome --ozone-platform-hint=auto
```

::: info
С версии `100.0.4896.127` приложения Google Chrome, параметр запуска по умолчанию `--ozone-platform-hint=auto`.
:::

### Как вернуть стандартный вид окна в рабочем окружении GNOME

По умолчанию Chrome не использует системную рамку окна в Linux и изменяет дизайн элементов управления. Если вы хотите вернуть стандартный вид окна и элементов управления Linux:

1. Введите в адресную строку `chrome://flags/`.
2. Введите в строку поиска флаг `#enable-system-frame`.
3. Включите опцию `System window controls`.
4. Перезапустите Chrome и проверьте результат.

::: warning
Данная настройка является экспериментальной, после её включения возможны неполадки в работе браузера. В этом случае отключите опцию и напишите нам через форму.
:::

### Video DownloadHelper

**Video DownloadHelper** — расширение для скачивания видео. Для его корректной работы в Google Chrome необходимо установить приложение-компаньон VdhCoApp.

Для установки приложения компаньона используем консоль и EPM версии **3.60.9** или выше:

```shell
epm play vdhcoapp
```

Если вы используете **Video DownloadHelper** и столкнулись с проблемой обновления приложения-компаньона, выполните следующие действия:

```shell
cd ~
wget https://github.com/aclap-dev/vdhcoapp/releases/download/v2.0.10/vdhcoapp-2.0.10-linux-x86_64.tar.bz2
tar xf vdhcoapp-2.0.10-linux-x86_64.tar.bz2 -C $HOME/.local/share/
$HOME/.local/share/vdhcoapp-2.0.10/vdhcoapp install
rm $HOME/.config/google-chrome/NativeMessagingHosts/net.downloadhelper.coapp.json
echo -e '{\n"type": "stdio",\n"allowed_origins": [\n"chrome-extension://lmjnegcaeklhafolokijcfjliaokphfk/",\n"chrome-extension://pfoiagbblcbmognbkekfpodpidedkmcc/",\n"chrome-extension://jmkaglaafmhbcpleggkmaliipiilhldn/",\n"chrome-extension://fojefjolbhfidomcaelhceoldmmpcaga/"\n],\n  "name": "net.downloadhelper.coapp",\n"description": "Video DownloadHelper companion app",\n"path": "'$HOME'/.local/share/vdhcoapp-2.0.10/vdhcoapp"\n}' >> $HOME/.config/google-chrome/NativeMessagingHosts/net.downloadhelper.coapp.json
```

Запускаем Google Chrome.

## Известные проблемы

### Не воспроизводится видео в Google Chrome

Откройте терминал и запустите **Google Chrome**:

```shell
google-chrome
```

Если в терминале вы получили ответ «Ffmpeg version is OK! Let's use it.» , а видео не воспроизводится, то в строке браузера вводим команду:

```
chrome://flags/#external-media
```

Отключите опцию, выбрав «Disabled», в появившемся информере, подтверждаем перезагрузку **Google Chrome**.

### Как исправить артефакты «моргания» в Google Chrome при использовании закрытых драйверов NVIDIA

Открыть Google Chrome, произвести дополнительную настройку:

1. В поисковой строке запустить: `chrome://flags/`.
2. Введите в строку поиска флаг `#enable-vulkan`, включите опцию Enabled.
3. Введите в строку поиска флаг `#enable-flutter-suggest`, включите опцию Disabled.
4. Перезапустите Google Chrome и проверьте результат.

### Сбой графики при открытии Google Chrome

После обновления операционной системы Google Chrome происходит сбой графики:

Удалите пользовательскую конфигурацию у пользователя:

```shell
rm -rfv .config/google-chrome/
```

При обновлении драйвера, иногда достаточно очистить кэш-файлы с графической обработкой или отображением графики:

```shell
rm -rfv .config/google-chrome/Default/GPUCache
```

## Стиль браузера светлый/тёмный стиль

Чтобы настроить тему браузера в соответствии с вашим светлым или тёмным стилем рабочего окружения GNOME, откройте настройки, перейдите в раздел «Интерфейс» и в блоке «Цветовая схема» выберите вариант «Как в системе».

### Отключить окно фонового режима

В рабочем окружении GNOME нет интерфейса трея на верхней панели, поэтому окно фоновых приложений выглядит именно так, как на скриншоте.

Вы можете отключить данную функцию, тем самым скрыть данное окно, для этого:

- Нажмите на значок перехода в главное меню (три горизонтальные полоски на верхней панели).
- Выберите пункт «Настройки».
- В разделе «Системные» найдите блок «Фоновый режим».
- Снимите отметку у параметра «Разрешить работу в фоне».

#### Зачем нужен фоновый режим?

В фоновом режиме часть функций браузера продолжает работать даже после его закрытия и включается автоматически при запуске компьютера.

Вот несколько функций(задач), которые даёт работа браузера в фоновом режиме:

- Регулярное обновление антивирусных баз.
- Более быстрое открытие браузера при запуске, что особенно важно, когда открыто много вкладок.
- Получение уведомлений от сайтов.
- Работа фоновых расширений, таких как прокси-расширения.

---

**Примечание:** Необходимо добавить соответствующие изображения для иллюстрации.