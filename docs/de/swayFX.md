# SwayFX

<div style="
  display: inline-block;
  margin-top: 1rem;
  padding: 10px 20px;
  background-color: #202634;
  border-radius: 5px;
  text-decoration: none;
">
  <img
    src="https://i.imgur.gg/3WRugEV-68747470733a2f2f692e706f7374696d672e63632f545077593767336a2f756e626c7572696d61676561692d6368726f6d65.jpg"
    alt="Логотип SwayFX"
    style="vertical-align: middle; height: auto; width: auto"
  />
</div>

**SwayFX** — это форк популярного Wayland-композитора Sway с добавлением визуальных эффектов и улучшений интерфейса. Он сочетает стабильность и производительность Sway с современными визуальными улучшениями, предлагая пользователям лучшее из двух миров.

::: info Основные особенности
- **Визуальные эффекты**: Закругленные углы, прозрачность, размытие
- **Совместимость с Sway**: Полная поддержка конфигов и скриптов Sway
- **Производительность**: Оптимизированная работа даже с эффектами
- **i3-подобный workflow**: Привычный рабочий процесс для пользователей i3wm
- **Стабильность**: Наследует надежную основу Sway
:::

## О проекте

### История
- **2021 год**: Создание SwayFX как форка Sway с визуальными улучшениями
- **2022 год**: Добавление основных эффектов и стабилизация
- **2023 год**: Улучшение производительности и добавление новых функций
- **2024 год**: Поддержка современных Wayland-стандартов

### Основные компоненты
1. **SwayFX Compositor** — основной композитный сервер
2. **SwayFX IPC** — совместимость с Sway IPC
3. **Effects System** — система визуальных эффектов
4. **Window Management** — унаследованная от Sway система управления окнами

## Возможности

### **Визуальные эффекты**
- Закругленные углы окон
- Полупрозрачность и размытие фона
- Тени окон и подсветка
- Анимации переходов и фокуса

### **Управление окнами**
- Полная поддержка тайлинга от Sway
- Совместимость с конфигурационными файлами Sway
- Горячие клавиши и режимы ввода
- Рабочие пространства и привязка окон

### **Кастомизация**
- Конфигурация через файл `config` (совместимый со Sway)
- Настройка эффектов прозрачности и размытия
- Цветовые схемы и внешний вид
- Поддержка пользовательских скриптов

### **Производительность**
- Низкое потребление ресурсов
- Эффективный рендеринг даже с эффектами
- Поддержка современных графических драйверов
- Оптимизация для разработки и повседневного использования

## Рекомендуемые приложения для SwayFX

### **Базовые утилиты**
- **waybar** — настраиваемая панель для Wayland
- **rofi** или **wofi** — запускатели приложений
- **grim** + **slurp** — создание скриншотов
- **wl-clipboard** — управление буфером обмена

### **Терминалы**
- **foot** — нативный Wayland-терминал
- **alacritty** — быстрый кроссплатформенный терминал
- **kitty** — GPU-ускоренный терминал

### **Файловые менеджеры**
- **thunar** — функциональный файловый менеджер
- **nemo** — современный файловый менеджер
- **ranger** — консольный файловый менеджер

### **Текстовые редакторы**
- **neovim** — расширяемый текстовый редактор
- **micro** — простой и современный редактор
- **kate** — мощный редактор с подсветкой синтаксиса

### **Браузеры**
- **firefox** — популярный веб-браузер
- **chromium** — браузер с открытым исходным кодом
- **qutebrowser** — браузер с управлением клавиатурой

### **Мультимедиа**
- **mpv** — универсальный медиаплеер
- **imv** — простой просмотрщик изображений
- **pulsemixer** — управление аудио

## Установка SwayFX

На данный момент нет популярных дистрибутивов, которые по умолчанию идут со SwayFX. Для использования требуется ручная установка:

::: code-group

```shell [Arch Linux]
# Установка из AUR
yay -S swayfx-git

# Или сборка из исходников
git clone https://github.com/swayfx/swayfx.git
cd swayfx
meson build
ninja -C build
sudo ninja -C build install
```

```shell [Fedora]
# Установка зависимостей
sudo dnf install meson gcc-c++ wayland-devel wayland-protocols-devel \
    libevdev-devel json-c-devel pcre2-devel pango-devel cairo-devel \
    gdk-pixbuf2-devel scdoc

# Сборка из исходников
git clone https://github.com/swayfx/swayfx.git
cd swayfx
meson build
ninja -C build
sudo ninja -C build install
```

```shell [Ubuntu/Debian/Mint/PopOS]
# Установка зависимостей
sudo apt update
sudo apt install meson build-essential wayland-protocols \
    libwayland-dev libevdev-dev libjson-c-dev libpcre2-dev \
    libpango1.0-dev libcairo2-dev libgdk-pixbuf2.0-dev scdoc

# Сборка из исходников
git clone https://github.com/swayfx/swayfx.git
cd swayfx
meson build
ninja -C build
sudo ninja -C build install
```

```shell [OpenSUSE]
# Установка зависимостей
sudo zypper install meson gcc-c++ wayland-devel wayland-protocols-devel \
    libevdev-devel json-c-devel pcre2-devel pango-devel cairo-devel \
    gdk-pixbuf-devel scdoc

# Сборка из исходников
git clone https://github.com/swayfx/swayfx.git
cd swayfx
meson build
ninja -C build
sudo ninja -C build install
```

```shell [ALT Linux]
# Установка зависимостей
sudo apt-get install meson gcc-c++ wayland-devel wayland-protocols-devel \
    libevdev-devel json-c-devel pcre2-devel pango-devel cairo-devel \
    gdk-pixbuf-devel scdoc git

# Сборка из исходников
git clone https://github.com/swayfx/swayfx.git
cd swayfx
meson build
ninja -C build
sudo ninja -C build install
```

```shell [RedOS]
# Установка зависимостей
sudo dnf install meson gcc-c++ wayland-devel wayland-protocols-devel \
    libevdev-devel json-c-devel pcre2-devel pango-devel cairo-devel \
    gdk-pixbuf2-devel scdoc git

# Сборка из исходников
git clone https://github.com/swayfx/swayfx.git
cd swayfx
meson build
ninja -C build
sudo ninja -C build install
```

:::

## Настройка SwayFX

После установки создайте конфигурационный файл:

```bash
mkdir -p ~/.config/sway
cp /etc/sway/config ~/.config/sway/
```

Пример минимальной конфигурации с эффектами:
```bash
# ~/.config/sway/config

# Включение эффектов SwayFX
corner_radius 8
smart_corner_radius on

# Настройка прозрачности
default_alpha 0.95
inactive_alpha 0.85

# Тени окон
shadow_enabled yes
shadow_radius 20

# Размытие
blur_enabled yes
blur_radius 10
```

## Скриншоты

<img src="https://github.com/WillPower3309/swayfx/blob/master/assets/swayfx_screenshot.jpg?raw=true" alt="SwayFX Desktop" style="vertical-align: middle; border-radius: 5px; width: 100%; max-width: 800px;"/>

*Официальный скриншот SwayFX с демонстрацией эффектов размытия.*

<img src="https://preview.redd.it/swayfx-first-wm-and-first-rice-v0-t0p59arf2adf1.png?width=1080&crop=smart&auto=webp&s=472dccfbe1c816b972c9e85f76557c04618ed9e9" alt="SwayFX Effects" style="vertical-align: middle; border-radius: 5px; width: 100%; max-width: 800px;"/>

*Пример рабочего стола Hyprland от Blu2023*

<img src="https://preview.redd.it/swayfx-at-night-hopping-for-tomorrow-tomorrow-night-v0-kgowzbbzebpc1.jpg?width=1080&crop=smart&auto=webp&s=c03dea307b4a8e6a4a866cec047eaa97c8eae76e" style="vertical-align: middle; border-radius: 5px; width: 100%; max-width: 800px;"/>

*Пример рабочего стола Hyprland от CryptographerHappy77*

## SwayFX vs Hyprland

| Критерий | SwayFX | Hyprland |
|----------|-----------|-----------|
| **Основа** | Форк Sway с эффектами | Нативная реализация |
| **Визуальные эффекты** | ⭐⭐⭐⭐ (хорошие) | ⭐⭐⭐⭐⭐ (расширенные) |
| **Производительность** | ⭐⭐⭐ (средняя) | ⭐⭐⭐⭐ (высокая) |
| **Кастомизация** | ⭐⭐⭐ (ограниченная) | ⭐⭐⭐⭐⭐ (полная) |
| **Стабильность** | ⭐⭐⭐ (зависит от эффектов) | ⭐⭐⭐⭐ (стабильная) |
| **Сообщество** | ⭐⭐ (небольшое) | ⭐⭐⭐⭐ (активное) |
| **Документация** | ⭐⭐ (ограниченная) | ⭐⭐⭐⭐ (хорошая) |

## Плюсы и минусы SwayFX

### **Плюсы**
- **Совместимость с Sway** — работает с существующими конфигами
- **Стабильная основа** — наследует надежность Sway
- **Умеренные эффекты** — визуальные улучшения без излишеств
- **Простота миграции** — легко перейти с Sway
- **Сообщество Sway** — доступ к обширным ресурсам Sway

### **Минусы**
- **Ограниченные эффекты** — по сравнению с Hyprland
- **Меньше инноваций** — в основном следует за Sway
- **Меньшее развитие** — ограниченная команда разработчиков
- **Зависимость от Sway** — развитие зависит от основного проекта

## История версий SwayFX

| Версия | Дата | Основные изменения |
|--------|------|-------------------|
| **1.0** | 2021 | Первый стабильный релиз на основе Sway |
| **1.5** | 2022 | Добавление основных визуальных эффектов |
| **1.7** | 2023 | Улучшения производительности и стабильности |
| **1.8** | 2024 | Совместимость с новыми версиями Sway |

## Лицензия

SwayFX распространяется под лицензией **MIT**.

## Полезные ссылки

- **GitHub**: [github.com/swayfx/swayfx](https://github.com/swayfx/swayfx)
- **Документация**: [github.com/swayfx/swayfx/wiki](https://github.com/swayfx/swayfx/wiki)
- **Sway Документация**: [swaywm.org](https://swaywm.org/)
- **Сообщество**: [reddit.com/r/swaywm](https://reddit.com/r/swaywm)
- **Исходный код**: [github.com/swayfx/swayfx](https://github.com/swayfx/swayfx)