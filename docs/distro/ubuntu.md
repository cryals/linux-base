---
title: Ubuntu
description: Ubuntu — дистрибутив операционной системы Linux, разработанный компанией Canonical Ltd.. В основе — ядро Linux, обеспечивающее взаимодействие между программным обеспечением и оборудованием. 
---

# Ubuntu

<div style="
  display: inline-block;
  margin-top: 1rem;
  padding: 10px 20px;
  background-color: white;
  border-radius: 5px;
  text-decoration: none;
">
  <img
    src="https://i.postimg.cc/6pGytdXy/Canonical-Ubuntu.png"
    alt="Логотип Ubuntu"
    style="vertical-align: middle;"
  />
</div>

**Ubuntu** — это один из самых популярных дистрибутивов Linux, известный своей простотой и удобством для новичков. Многие пользователи выбирают его благодаря минимальной необходимости работы с терминалом и огромному сообществу, которое всегда готово помочь.

::: info Основные особенности
- **Простота использования**: Интуитивно понятный интерфейс и минимальная настройка "из коробки".
- **Большое сообщество**: Огромное количество документации, форумов и гайдов на любые темы.
- **Регулярные обновления**: Поддержка долговременных релизов (LTS) и частые обновления безопасности.
- **Широкий выбор ПО**: Доступ к тысячам приложений через Центр приложений Ubuntu.
- **Поддержка оборудования**: Хорошая совместимость с большинством аппаратных конфигураций.
:::

## Подготовка к установке Ubuntu Desktop
---

::: timeline Шаг 1: Обзор
В этом руководстве вы узнаете, как скачать и установить Ubuntu Desktop 24.04 LTS на ваш ноутбук или компьютер. Процесс установки интуитивно понятен и не требует глубоких технических знаний. Установщик задаст несколько вопросов, и в большинстве случаев можно просто выбирать параметры по умолчанию.
:::

::: timeline Шаг 2: Что вам понадобится
1.  **Ноутбук или ПК** с как минимум 25 ГБ свободного места на диске.
2.  **Флеш-накопитель** объемом от 12 ГБ (рекомендуется).
:::

::: timeline Шаг 3: Проверка совместимости и резервное копирование
*   **Совместимость**: Ubuntu работает на большинстве устройств. Для гарантированной совместимости рекомендуется использовать устройства из списка [сертифицированного оборудования Ubuntu](https://ubuntu.com/certified).
*   **Резервная копия**: Перед началом установки обязательно сохраните все важные файлы на внешний диск или в облачное хранилище. Если вы устанавливаете Ubuntu на тот же диск, где находится Windows, это особенно важно.
:::

::: timeline Шаг 4: Загрузка образа Ubuntu
<img src="https://canonical-ubuntu-desktop-documentation.readthedocs-hosted.com/en/latest/_images/download-an-ubuntu-image.png" style="vertical-align: middle; border-radius: 5px; width: 80%; max-width: auto;"/>
1.  Перейдите на официальную страницу загрузки: <a href="https://ubuntu.com/download/desktop">Ubuntu</a>.
2.  Скачайте последнюю LTS-версию (например, Ubuntu 24.04 LTS). Файл будет иметь название вида <code>ubuntu-24.04.-desktop-amd64.iso</code>.
:::

::: timeline Шаг 5: Создание загрузочной флешки
Запишите скачанный образ Ubuntu на USB-накопитель, чтобы создать установочный носитель. Это не то же самое, что просто копировать скачанный образ: для этого потребуется специальное программное обеспечение.

Мы будем использовать приложение <b>balenaEtcher</b>, поскольку оно работает на Linux, Windows и macOS.
*   **Процесс**:
    1. На сайте balenaEtcher выберите версию, соответствующую вашей текущей операционной системе.
    2.  Загрузите и установите инструмент.
<img src="https://canonical-ubuntu-desktop-documentation.readthedocs-hosted.com/en/latest/_images/download-etcher.png" style="vertical-align: middle; border-radius: 5px; width: 80%; max-width: auto;"/>
    3.  Вставьте флеш-накопитель.
    4.  Запустите balenaEtcher, выберите скачанный образ Ubuntu и вашу флешку.
<img src="https://canonical-ubuntu-desktop-documentation.readthedocs-hosted.com/en/latest/_images/select-iso.png" style="vertical-align: middle; border-radius: 5px; width: 80%; max-width: auto;"/>
    5.  Нажмите **Flash!** для записи. *Процесс сотрет все данные на флешке*.

Теперь у вас есть USB-накопитель, который можно использовать в качестве установочного носителя Ubuntu.
:::

::: timeline Шаг 6: Загрузка с флешки
1. Вставьте USB-накопитель в ноутбук или ПК, на который вы хотите установить Ubuntu.

2. Перезагрузите компьютер.

3. Ваше устройство должно распознать установочный носитель и запустить установщик Ubuntu.

Если нет, перезагрузите его снова. На этот раз удерживайте кнопку <code>F12</code> во время загрузки. В появившемся меню загрузки выберите USB-устройство.

<code>F12</code> — наиболее распространённая клавиша для вызова меню загрузки системы, но <code>Escape</code>, <code>F2</code> и <code>F10</code> являются распространёнными альтернативами. Если вы не уверены, обратите внимание на краткое сообщение при запуске системы: оно часто подсказывает, какую клавишу нажать для доступа к меню загрузки. Вы также можете найти нужную клавишу в документации к вашему ноутбуку или ПК.
:::

::: timeline Шаг 7: Начало работы с установщиком
После загрузки с флешки откроется установщик Ubuntu. Следуйте шагам:
1.  **Язык**: Выберите язык интерфейса и установки.
<img src="https://canonical-ubuntu-desktop-documentation.readthedocs-hosted.com/en/latest/_images/choose-your-language.jpeg" style="vertical-align: middle; border-radius: 5px; width: 80%; max-width: auto;"/>
2.  **Раскладка клавиатуры**: Выберите раскладку, обычно «Русская».
<img src="https://canonical-ubuntu-desktop-documentation.readthedocs-hosted.com/en/latest/_images/keyboard-layout.jpeg" style="vertical-align: middle; border-radius: 5px; width: 80%; max-width: auto;"/>
3.  **Обновления и ПО**: Подключитесь к интернету и отметьте опции загрузки обновлений и установки стороннего программного обеспечения (графические драйверы, кодеки) для лучшей совместимости.
<img src="https://canonical-ubuntu-desktop-documentation.readthedocs-hosted.com/en/latest/_images/internet-connection.jpeg" style="vertical-align: middle; border-radius: 5px; width: 80%; max-width: auto;"/>
4.  **Тип установки**: Выберите «Установить Ubuntu» для продолжения.
<img src="https://canonical-ubuntu-desktop-documentation.readthedocs-hosted.com/en/latest/_images/try-or-install-ubuntu.jpeg" style="vertical-align: middle; border-radius: 5px; width: 80%; max-width: auto;"/>
:::

::: timeline Шаг 8: Настройка диска (важный шаг!)
*   **Для новичков (рекомендуется)**: Выберите **«Стереть диск и установить Ubuntu»**. Это автоматически настроит диск и сделает Ubuntu единственной системой.
<img src="https://canonical-ubuntu-desktop-documentation.readthedocs-hosted.com/en/latest/_images/type-of-installation.jpeg" style="vertical-align: middle; border-radius: 5px; width: 80%; max-width: auto;"/>
*   **Для двойной загрузки с Windows**: Если на диске есть Windows, установщик может предложить опцию **«Установить Ubuntu рядом с Windows»**.
*   **Для опытных пользователей**: Выберите **«Другой вариант»** для ручного разбиения диска на разделы.
<img src="https://canonical-ubuntu-desktop-documentation.readthedocs-hosted.com/en/latest/_images/disk-setup.jpeg" style="vertical-align: middle; border-radius: 5px; width: 80%; max-width: auto;"/>
*   **Шифрование (опционально)**: Для безопасности данных можно включить шифрование. *Обязательно запишите и сохраните в надежном месте пароль для расшифровки, иначе данные будут утеряны безвозвратно*.
<img src="https://canonical-ubuntu-desktop-documentation.readthedocs-hosted.com/en/latest/_images/advanced-features.jpeg" style="vertical-align: middle; border-radius: 5px; width: 80%; max-width: auto;"/>
:::

::: timeline Шаг 9: Создание учетной записи
*   Введите ваше имя, имя компьютера в сети, имя пользователя (логин) и надежный пароль.
*   Выберите, требуется ли ввод пароля при каждом входе в систему или вход должен выполняться автоматически.
<img src="https://canonical-ubuntu-desktop-documentation.readthedocs-hosted.com/en/latest/_images/create-your-account.jpeg" style="vertical-align: middle; border-radius: 5px; width: 80%; max-width: auto;"/>
:::

::: timeline Шаг 10: Завершение установки
1.  Выберите ваш **часовой пояс** на карте.
<img src="https://canonical-ubuntu-desktop-documentation.readthedocs-hosted.com/en/latest/_images/select-your-timezone.jpeg" style="vertical-align: middle; border-radius: 5px; width: 80%; max-width: auto;"/>
2.  Просмотрите сводку настроек и нажмите **«Установить»**.
<img src="https://canonical-ubuntu-desktop-documentation.readthedocs-hosted.com/en/latest/_images/slideshow.jpeg" style="vertical-align: middle; border-radius: 5px; width: 80%; max-width: auto;"/>
3.  Дождитесь окончания копирования файлов и настройки системы. Это займет некоторое время.
4.  После завершения установки появится запрос на перезагрузку. Нажмите **«Перезагрузить сейчас»** и извлеките флеш-накопитель, когда появится соответствующее сообщение.
<img src="https://canonical-ubuntu-desktop-documentation.readthedocs-hosted.com/en/latest/_images/installation-complete.jpeg" style="vertical-align: middle; border-radius: 5px; width: 80%; max-width: auto;"/>
:::

::: timeline Шаг 11: Первый запуск
1.  После перезагрузки компьютер загрузится в Ubuntu.
2.  Если вы включали шифрование диска, введите заданную парольную фразу.
3.  На экране входа в систему введите ваш пароль.
:::

::: timeline Шаг 12: Обновление системы
Сразу после установки рекомендуется обновить систему.
*   **Через графический интерфейс**: Запустите приложение **«Программа обновления Ubuntu»** и следуйте инструкциям.
*   **Через Терминал** (Ctrl+Alt+T):
    ```bash
    sudo apt update
    sudo apt upgrade
    ```
    Введите `Y` для подтверждения установки обновлений.
:::

::: timeline Шаг 13: Знакомство с рабочим столом
После входа в систему вы увидите чистый рабочий стол GNOME — стандартную среду Ubuntu.
- **Панель приложений**: Слева расположены значки часто используемых приложений
- **Верхняя панель**: Содержит меню системы, индикаторы и настройки
- **Активности**: Нажмите `Super` (Win) для доступа к обзору рабочих мест и поиска приложений

<img src="https://canonical-ubuntu-desktop-documentation.readthedocs-hosted.com/en/latest/_images/ubuntu-24-04-desktop.jpeg" style="vertical-align: middle; border-radius: 5px; width: 80%; max-width: auto;"/>
:::

::: timeline Шаг 14: Настройка системы и установка драйверов
1. Откройте **Параметры системы** из меню приложений
2. Проверьте раздел **«Обновления Ubuntu»** для установки проприетарных драйверов
3. В разделе **«Драйверы устройств»** выберите рекомендуемые драйверы для вашего оборудования
4. Настройте Wi-Fi, Bluetooth и другие периферийные устройства

*Совет: Для видеокарт NVIDIA всегда устанавливайте рекомендуемые драйверы для лучшей производительности.*
:::

::: timeline Шаг 15: Установка необходимого ПО
Ubuntu включает базовый набор программ, но вам может понадобиться дополнительное ПО:

**Через Центр приложений Ubuntu:**
- **Браузеры**: Firefox предустановлен, можно добавить Chrome
- **Офисные приложения**: LibreOffice (уже установлен)
- **Мультимедиа**: VLC, GIMP, Audacity
- **Разработка**: Visual Studio Code, Git

**Через терминал:**
```bash
sudo apt install vlc gimp audacity
```
:::

::: timeline Шаг 16: Настройка резервного копирования
Рекомендуем сразу настроить резервное копирование:
1. Откройте **Параметры** → **Хранилище** → **Резервные копии**
2. Включите автоматическое резервное копирование
3. Выберите папки для резервирования (Документы, Изображения и т.д.)
4. Укажите внешний диск или облачное хранилище

*Важно: Регулярное резервное копирование спасет ваши данные в случае проблем с системой.*
:::

## Альтернативные варианты Ubuntu
---

::: info Выбор редакции Ubuntu
В зависимости от ваших потребностей и оборудования, можно выбрать другую редакцию Ubuntu:

- **Ubuntu Server**: Для серверов и разработки без графического интерфейса
- **Kubuntu**: С окружением KDE Plasma для любителей Windows-подобного интерфейса
- **Xubuntu**: С легковесным XFCE для старых компьютеров
- **Lubuntu**: С LXQt для очень слабого оборудования
- **Ubuntu MATE**: Классический интерфейс с низкими требованиями
:::

### Установка Ubuntu в виртуальной машине
Если вы не готовы к полной установке, попробуйте Ubuntu в виртуальной машине:

**С помощью VirtualBox:**
1. Скачайте и установите [VirtualBox](https://www.virtualbox.org/)
2. Создайте новую виртуальную машину
3. Выделите 2-4 ГБ ОЗУ и 25 ГБ места на диске
4. Загрузитесь с созданного установочного ISO-образа

*Преимущество: Можно тестировать Ubuntu без изменения основной системы.*

### Установка WSL2 в Windows 10/11
Для разработчиков идеально подходит подсистема Windows для Linux:

```powershell
wsl --install
```
Или для конкретной версии Ubuntu:
```powershell
wsl --install -d Ubuntu-24.04
```

## Решение распространенных проблем
---

::: timeline Проблема 1: Не загружается установщик
- **Причина**: Неправильная запись образа на флешку
- **Решение**: Перезапишите флешку с помощью Rufus (Windows) или dd (Linux)
- **Проверка**: Скачайте образ заново и проверьте контрольную сумму SHA256
:::

::: timeline Проблема 2: Черный экран после установки
- **Причина**: Проблемы с драйверами NVIDIA
- **Решение**: При загрузке нажмите `Shift` для выбора режима восстановления
- **Альтернатива**: В меню GRUB добавьте параметр `nomodeset` к строке загрузки
:::

::: timeline Проблема 3: Не работает Wi-Fi
- **Причина**: Отсутствуют проприетарные драйверы
- **Решение**: Подключитесь по кабелю и установите драйверы через "Дополнительные драйверы"
- **Временное решение**: Используйте USB-модем для первоначальной настройки
:::

::: timeline Проблема 4: Не определяется жесткий диск
- **Причина**: Включен режим Intel RST в BIOS
- **Решение**: Переключите режим SATA с RST на AHCI в настройках BIOS/UEFI
- **Важно**: Это может потребовать переустановки Windows
:::

## Полезные команды для новичков
---

```bash
# Обновление системы
sudo apt update && sudo apt upgrade

# Поиск пакетов
apt search имя_пакета

# Установка программ
sudo apt install имя_пакета

# Удаление программ
sudo apt remove имя_пакета

# Просмотр информации о системе
neofetch

# Очистка системы
sudo apt autoremove
sudo apt autoclean
```

## Дополнительные ресурсы
---

- **Официальная документация**: [help.ubuntu.com](https://help.ubuntu.com)
- **Русскоязычное сообщество**: [ubuntu.ru](https://ubuntu.ru/)
- **Форум поддержки**: [askubuntu.com](https://askubuntu.com)
- **База знаний**: [wiki.ubuntu.com](https://wiki.ubuntu.com/)

Поздравляем с успешной установкой!
Теперь у вас есть полностью функционирующая система Ubuntu. Не бойтесь экспериментировать и изучать новые возможности. Помните, что сообщество Ubuntu всегда готово помочь в решении любых вопросов.