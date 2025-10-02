# Fedora Linux

<div style="
  display: inline-block;
  margin-top: 1rem;
  padding: 10px 20px;
  background-color: white;
  border-radius: 5px;
  text-decoration: none;
">
  <img
    src="https://i.postimg.cc/tgKXgxDT/unblurimageai.jpg"
    alt="Логотип Fedora"
    style="vertical-align: middle; height: 100%; width: 100%;"
  />
</div>

**Fedora Linux** — это передовой, сообществом-ориентированный дистрибутив, разрабатываемый при поддержке Red Hat. Fedora славится своей **актуальностью**, **инновационностью** и ролью **тестовой площадки** для будущих технологий Red Hat Enterprise Linux (RHEL). Дистрибутив идеально подходит для разработчиков, системных администраторов и энтузиастов, ценящих стабильность без ущерба для новейших функций.

::: info Основные особенности
- **Свежие технологии**: Всегда актуальные версии ядра, GNOME, Wayland и других компонентов  
- **Безопасность по умолчанию**: SELinux, строгая политика обновлений, полная поддержка шифрования  
- **Официальные редакции**: Workstation, Server, IoT и Cloud — под любую задачу  
- **Открытость и прозрачность**: Полностью свободный дистрибутив с открытым процессом разработки  
- **Интеграция с RHEL**: Идеальная среда для тестирования решений, совместимых с корпоративным Linux  
:::

## Подготовка к установке Fedora

::: timeline Шаг 1: Обзор  
В этом руководстве вы узнаете, как скачать и установить Fedora Workstation — основную редакцию для повседневного использования. Установка проста, но при этом сохраняет гибкость и контроль над системой. Fedora отлично подходит как для новичков, так и для опытных пользователей.  
:::

::: timeline Шаг 2: Что вам понадобится  
- Компьютер с x86_64-архитектурой  
- Минимум 4 ГБ ОЗУ (рекомендуется 8 ГБ и выше)  
- 20 ГБ свободного места на диске (рекомендуется 30–50 ГБ)  
- USB-флешка объёмом от 8 ГБ  
- Доступ в интернет (рекомендуется для обновлений и драйверов)  
:::

::: timeline Шаг 3: Проверка совместимости и резервное копирование  
- Fedora поддерживает большинство современных процессоров, видеокарт и Wi-Fi-адаптеров  
- Перед установкой сохраните важные файлы на внешний носитель  
- Убедитесь, что BIOS/UEFI настроен на загрузку с USB  
:::

::: timeline Шаг 4: Загрузка образа Fedora  
Перейдите на официальный сайт: [getfedora.org](https://getfedora.org)  
Выберите редакцию:
- **Fedora Workstation** — для повседневного использования (GNOME по умолчанию)  
- **Fedora Server** — для серверов и инфраструктуры  
- **Fedora IoT** — для встраиваемых устройств и edge-вычислений  

Скачайте ISO-образ последней версии (например, `Fedora-Workstation-Live-x86_64-XX.iso`).  
:::

::: timeline Шаг 5: Создание загрузочного носителя с Fedora Media Writer  
**Рекомендуемый способ** — официальная утилита **Fedora Media Writer**:

- **Windows / macOS / Linux**:  
  1. Скачайте с [getfedora.org/Workstation](https://getfedora.org/en/workstation/) или напрямую:  
     - [Windows](https://github.com/FedoraQt/MediaWriter/releases/latest)  
     - [macOS](https://github.com/FedoraQt/MediaWriter/releases/latest)  
     - [Linux (Flatpak)](https://flathub.org/apps/org.fedoraproject.MediaWriter)  
  2. Запустите программу  
  3. Выберите образ Fedora (или дайте Media Writer скачать его автоматически)  
  4. Выберите вашу флешку и нажмите **Write to disk**

> 💡 Преимущества Media Writer:  
> - Автоматическая проверка целостности образа  
> - Поддержка нескольких версий Fedora на одном носителе  
> - Простой и безопасный интерфейс без риска повредить загрузчик

Альтернативы:
- **balenaEtcher** — кроссплатформенный и надёжный  
- **dd (Linux)**:  
  ```bash
  sudo dd if=Fedora-*.iso of=/dev/sdX bs=4M status=progress oflag=sync
  ```
  (замените `/dev/sdX` на устройство флешки — определить через `lsblk`)
:::

::: timeline Шаг 6: Загрузка с флешки  
- Вставьте флешку и перезагрузите компьютер  
- Нажмите клавишу входа в Boot Menu (обычно `F12`, `Esc`, `F10`)  
- Выберите загрузку с USB-устройства  
- После загрузки вы попадёте в **Live-режим** — можно протестировать систему без установки  
:::

::: timeline Шаг 7: Начало установки  
1. На рабочем столе откройте значок **«Install to Hard Drive»**  
2. Выберите язык интерфейса (например, Русский)  
3. Следуйте пошаговому мастеру установки (Anaconda Installer)  
:::

::: timeline Шаг 8: Настройка диска  
Выберите один из вариантов:
- **Автоматическая разметка** — для простой установки (рекомендуется)  
- **Установить рядом с другой ОС** — для двойной загрузки  
- **Пользовательская разметка** — для опытных пользователей  

> 💡 Fedora по умолчанию использует **Btrfs** (начиная с версии 33+) с поддержкой мгновенных снимков через **Snapper**.  
> Также доступно шифрование диска (LUKS) — включите его для защиты данных.  
:::

::: timeline Шаг 9: Настройка региона и клавиатуры  
- Выберите ваш регион и часовой пояс  
- Настройте раскладку клавиатуры (рекомендуется «Русская» + «Английская»)  
:::

::: timeline Шаг 10: Создание учётной записи  
Введите:
- Ваше имя  
- Имя компьютера (например, `fedora-pc`)  
- Имя пользователя (логин)  
- Пароль  
- При необходимости отметьте **«Make this user administrator»** (для sudo)  
:::

::: timeline Шаг 11: Завершение установки  
- Установщик скопирует файлы и настроит систему  
- По завершении нажмите **«Reboot System»**  
- Извлеките флешку после перезапуска  
:::

::: timeline Шаг 12: Первый запуск  
- Войдите в систему с созданным паролем  
- При первом запуске система предложит:
  - Настроить онлайн-аккаунты (Google, Microsoft и др.)
  - Включить автоматические обновления
  - Установить проприетарные кодеки и драйверы (через GNOME Software)
:::

## Первые шаги после установки

::: timeline Шаг 13: Обновление системы  
Обязательно обновите систему сразу после установки:
```bash
sudo dnf upgrade --refresh
```
Или через **GNOME Software → Обновления**  
:::

::: timeline Шаг 14: Установка дополнительного ПО  
Fedora включает:
- Браузер Firefox  
- Офис LibreOffice  
- Текстовый редактор, терминал, архиватор  

Для установки других программ:
- Через **GNOME Software**  
- Через терминал:  
  ```bash
  sudo dnf install vlc gimp git neofetch
  ```
- Для Flatpak-приложений (включены по умолчанию):  
  ```bash
  flatpak install flathub com.spotify.Client
  ```
:::

::: timeline Шаг 15: Настройка системы  
- Откройте **Настройки** → **Параметры конфиденциальности**, **Энергосбережение**, **Клавиатура**  
- Установите **GNOME Tweaks** для расширенной настройки рабочего стола  
- Включите **Timeshift** или используйте встроенные **Btrfs-снимки** для резервного копирования  
:::

## Альтернативные варианты

::: tip Официальные и сторонние редакции Fedora  
- **Fedora Workstation** — стандартная редакция с GNOME  
- **Fedora Server** — для серверов с Cockpit и Ansible  
- **Fedora IoT** — для устройств с минимальным отпечатком  
- **Spins** — альтернативные окружения: KDE Plasma, Xfce, LXQt, MATE и др.  
- **Labs** — специализированные сборки: Astronomy, Games, Security, Python и др.  
:::

## Установка в виртуальной машине

- Используйте **VirtualBox**, **VMware** или **GNOME Boxes**  
- Выделите 2–4 ГБ ОЗУ и 30–50 ГБ диска  
- Загрузитесь с ISO-образа и следуйте обычной установке  
- Преимущество: безопасное тестирование без риска для основной ОС  

## Решение распространённых проблем

::: timeline Проблема 1: Не загружается установщик  
**Причина**: Secure Boot или неправильная запись образа  
**Решение**:  
- Отключите Secure Boot в BIOS  
- Перезапишите флешку через **Fedora Media Writer**  
:::

::: timeline Проблема 2: Нет Wi-Fi или звука  
**Причина**: Отсутствуют проприетарные firmware или драйверы  
**Решение**:  
- Установите RPM Fusion:  
  ```bash
  sudo dnf install https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
  sudo dnf groupupdate multimedia --setop="install_weak_deps=False" --exclude=PackageKit-gstreamer-plugin
  ```
- Установите `firmware-*` пакеты при необходимости  
:::

::: timeline Проблема 3: Двойная загрузка с Windows не работает  
**Причина**: Windows Fast Startup или отсутствие обнаружения Windows в GRUB  
**Решение**:  
- Отключите Fast Startup в Windows  
- В Fedora выполните:  
  ```bash
  sudo dnf install os-prober
  sudo grub2-mkconfig -o /boot/grub2/grub.cfg
  ```
:::

::: timeline Проблема 4: Система тормозит на старом ПК  
**Решение**: Установите **Fedora Xfce Spin** или **LXQt Spin** — лёгкие и быстрые альтернативы  
:::

## Полезные команды для новичков

```bash
# Обновление системы
sudo dnf upgrade --refresh

# Поиск пакета
dnf search ключевое_слово

# Установка программы
sudo dnf install имя_пакета

# Удаление программы
sudo dnf remove имя_пакета

# Информация о системе
cat /etc/fedora-release
uname -a
neofetch

# Просмотр дисков
df -h
lsblk

# Управление службами
sudo systemctl enable --now имя_сервиса
```

## Дополнительные ресурсы

- 🌐 **Официальный сайт**: [getfedora.org](https://getfedora.org)  
- 📚 **Официальная документация**: [docs.fedoraproject.org](https://docs.fedoraproject.org)  
- 🧰 **Fedora Media Writer**: [github.com/FedoraQt/MediaWriter](https://github.com/FedoraQt/MediaWriter)  
- 💬 **Форум поддержки**: [discussion.fedoraproject.org](https://discussion.fedoraproject.org)  
- 📰 **Блог Fedora**: [fedoramagazine.org](https://fedoramagazine.org)  
- 📦 **Пакеты и репозитории**: [packages.fedoraproject.org](https://packages.fedoraproject.org)  
- 🧪 **Wiki**: [fedoraproject.org/wiki](https://fedoraproject.org/wiki)  
- 📺 **YouTube**: [Fedora Project](https://www.youtube.com/@fedoraproject)  
- 🧪 **Reddit**: [r/Fedora](https://www.reddit.com/r/Fedora/)  
- 📱 **Telegram**: `@fedora_linux`, `@fedora_ru`  
- 💬 **Matrix/IRC**: [#fedora:matrix.org](https://matrix.to/#/#fedora:matrix.org)  
- 🛠️ **RPM Fusion** (проприетарные драйверы и кодеки): [rpmfusion.org](https://rpmfusion.org)  

::: tip Поздравляем с установкой Fedora Linux!  
Вы получили современную, безопасную и инновационную операционную систему, которая находится на переднем крае развития Linux. Fedora — это не просто дистрибутив, это сообщество, движущее экосистему вперёд. Удачи, и пусть ваш терминал всегда будет зелёным!  
:::