---
title: Яндекс Браузер
description: Быстрый и безопасный браузер Яндекса для компьютера.
head:
  - - meta
    - name: keywords
      content: Яндекс Браузер, браузер, Яндекс, безопасность, защита
---

# Яндекс Браузер

Яндекс Браузер — быстрый и безопасный браузер Яндекса для компьютера, смартфонов и планшетов на Android и iOS (iPhone и iPad). Ускоряет загрузку при медленном соединении, защищает от вирусов и мошенников, делает поиск удобнее.

## Издания Яндекс Браузера

**Яндекс Браузер** — Быстрый и безопасный браузер со встроенной технологией активной защиты Protect. Она проверяет скачиваемые файлы на вирусы, предупреждает об опасных сайтах, защищает подключение к общественным сетям и ваши пароли.

**Яндекс Браузер для организаций** — Защита от вредоносных программ, фишинга и кражи паролей. Простая настройка в пару кликов на всю компанию и выделенная техподдержка.

**Яндекс Браузер Бета-версия** — Все новые возможности Яндекс Браузера, отзывы о последних версиях и общение с разработчиками в [блоге Яндекс Браузера](https://dzen.ru/yandexbrowser).

::: info
С версии `23.5.1.753`, устанавливается **Яндекс Браузер для организаций** — специальная сборка, поддерживающая корпоративные функции, например, управление при помощи групповых политик. Однако её можно использовать и на домашних компьютерах.
:::

## Установка

Для установки Яндекс Браузера используйте следующие команду(-ы):

::: code-group

```shell [Ubuntu, Debian, Mint, PopOS]
echo "deb [arch=amd64] http://repo.yandex.ru/yandex-browser/deb/ stable main" | sudo tee /etc/apt/sources.list.d/yandex-browser.list
wget https://repo.yandex.ru/yandex-browser/YANDEX-BROWSER-KEY.GPG -O- | sudo apt-key add -
sudo apt update
sudo apt install yandex-browser
```

```shell [Fedora]
sudo sh -c 'echo "[yandex-browser]
name=yandex-browser
baseurl=https://repo.yandex.ru/yandex-browser/rpm/stable/\$basearch/
enabled=1
gpgcheck=1
gpgkey=https://repo.yandex.ru/yandex-browser/YANDEX-BROWSER-KEY.GPG" > /etc/yum.repos.d/yandex-browser.repo'

sudo dnf install yandex-browser
```

```shell [OpenSuse]
sudo zypper ar https://repo.yandex.ru/yandex-browser/rpm/stable/x86_64/ yandex-browser
sudo zypper install yandex-browser
```

```shell [Arch Linux]
yay -S yandex-browser
```

```shell [Alt Linux]
su -
apt-get update
apt-get install yandex-browser-stable
```

```shell [Astra Linux]
nano /etc/apt/sources.list
deb https://dl.astralinux.ru/astra/stable/1.8_x86-64/repository-extended/ 1.8_x86-64 main contrib non-free
// выйти из nano
sudo apt update
sudo apt install yandex-browser-stable
```

```shell [RedOS]
sudo dnf install yandex-browser-stable
```

```shell [Flatpak]
sudo flatpak install flathub ru.yandex.Browser
```

```shell [EPM]
epm install yandex-browser
```

```shell [Snap]
snap install yandex-browser
```

:::

## Полезные советы и дополнения

### Запуск Яндекс Браузера в оконном интерфейсе Wayland

По умолчанию Яндекс Браузер запускается в оконном интерфейсе X11. Для запуска в оконном интерфейсе Wayland:

1. Введите в Умную строку адрес `browser://flags`.
2. Введите в строку поиска флаг `#ozone-platform-hint`.
3. Выберите значение `Auto` для опции `Preferred Ozone platform`.
4. Перезапустите Яндекс Браузер и проверьте результат.

![Запуск Яндекс Браузера в оконном интерфейсе Wayland](/yandex-browser/yandex-browser-2.gif)

Запустить Яндекс Браузер через терминал, указав дополнительные опции запуска:

```shell
yandex-browser-stable --ozone-platform-hint=auto
```

::: info
С версии `24.6.1.893` приложения Яндекс Браузера, параметр запуска по умолчанию `--ozone-platform-hint=auto`.
:::

### Как вернуть стандартный вид окна в рабочем окружении GNOME

По умолчанию Браузер не использует системную рамку окна в Linux и изменяет дизайн элементов управления. Если вы хотите вернуть стандартный вид окна и элементов управления Linux:

1. Введите в Умную строку адрес `browser://flags`.
2. Введите в строку поиска флаг `#enable-system-frame`.
3. Включите опцию `System window controls`.
4. Перезапустите Браузер и проверьте результат.

::: warning
Данная настройка является экспериментальной, после её включения возможны неполадки в работе Браузера. В этом случае отключите опцию и напишите нам через форму.
:::

![Стандартный вид окна в рабочем окружении GNOME](/yandex-browser/yandex-browser.gif)

### Video DownloadHelper

**Video DownloadHelper** — расширение для скачивания видео. Для его корректной работы в Яндекс Браузере необходимо установить приложение-компаньон VdhCoApp.

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
rm $HOME/.config/yandex-browser/NativeMessagingHosts/net.downloadhelper.coapp.json
echo -e '{\n"type": "stdio",\n"allowed_origins": [\n"chrome-extension://lmjnegcaeklhafolokijcfjliaokphfk/",\n"chrome-extension://pfoiagbblcbmognbkekfpodpidedkmcc/",\n"chrome-extension://jmkaglaafmhbcpleggkmaliipiilhldn/",\n"chrome-extension://fojefjolbhfidomcaelhceoldmmpcaga/"\n],\n  "name": "net.downloadhelper.coapp",\n"description": "Video DownloadHelper companion app",\n"path": "'$HOME'/.local/share/vdhcoapp-2.0.10/vdhcoapp"\n}' >> $HOME/.config/yandex-browser/NativeMessagingHosts/net.downloadhelper.coapp.json
```

Запускаем Яндекс Браузер.

## Известные проблемы

### Не воспроизводится видео в Яндекс Браузере

Откройте терминал и запустите **Яндекс Браузер**:

```shell
yandex-browser-stable
```

Если в терминале вы получили ответ «Ffmpeg version is OK! Let's use it.» , а видео не воспроизводится, то в строке браузера вводим команду:

```
browser://flags/#external-media
```

Отключите опцию, выбрав «Disabled», в появившемся информере, подтверждаем перезагрузку **Яндекс Браузера**.

### Как исправить артефакты «моргания» в Яндекс Браузере при использовании закрытых драйверов NVIDIA

Открыть Яндекс Браузер, произвести дополнительную настройку:

1. В поисковой строке запустить: `browser://flags/`.
2. Введите в строку поиска флаг `#enable-vulkan`, включите опцию Enabled.
3. Введите в строку поиска флаг `#enable-flutter-suggest`, включите опцию Disabled.
4. Перезапустите Яндекс Браузер и проверьте результат.

### Сбой графики при открытии Яндекс Браузера

После обновления операционной системы Яндекс Браузер происходит сбой графики:

Удалите пользовательскую конфигурацию у пользователя:

```shell
rm -rfv .config/yandex-browser/
```

При обновлении драйвера, иногда достаточно очистить кэш-файлы с графической обработкой или отображением графики:

```shell
rm -rfv .config/yandex-browser/Default/GPUCache
```

![Графический сбой в Яндекс Браузере](/yandex-browser/yandex-browser-1.jpg 'Графический сбой в Яндекс Браузере')

## Стиль браузера светлый/тёмный стиль

Чтобы настроить тему браузера в соответствии с вашим светлым или тёмным стилем рабочего окружения GNOME, откройте настройки, перейдите в раздел «Интерфейс» и в блоке «Цветовая схема» выберите вариант «Как в системе».

![Выбор цветовой схемы](/yandex-browser/yandex-browser-4.png 'Выберите вариант «Как в системе».')

### Отключить окно фонового режима

В рабочем окружении GNOME нет интерфейса трея на верхней панели, поэтому окно фоновых приложений выглядит именно так, как на скриншоте.

![Окно фоновых процессов](/yandex-browser/yandex-browser-3.png 'Окно фоновых процессов')

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