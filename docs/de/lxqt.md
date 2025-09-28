---
title: LXQt — Лёгкая среда рабочего стола на основе Qt
description: LXQt — это лёгкая и быстрая среда рабочего стола для Linux и BSD, основанная на Qt. Она не нагружает систему и предлагает классический интерфейс с современным дизайном.
---

# LXQt

<div style="
  display: inline-block;
  margin-top: 1rem;
  padding: 10px 20px;
  background-color: white;
  border-radius: 5px;
  text-decoration: none;
">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Helix_lxqt.svg"
    alt="Логотип Helix LXQt"
    style="vertical-align: middle;"
  />
</div>



**LXQt** — это лёгкая и высокопроизводительная графическая среда рабочего стола для Unix-подобных операционных систем, включая Linux и BSD. Она является продолжением проекта **LXDE**, но, в отличие от него, построена на основе **Qt** вместо **GTK+**. Благодаря минималистичному интерфейсу и низкому потреблению системных ресурсов, **LXQt** идеально подходит для старых или маломощных устройств.

::: info Основные особенности
- **Лёгкость**: Не нагружает систему, не тормозит и не зависает.
- **Модульность**: Все компоненты можно настраивать и заменять.
- **Современный дизайн**: Классический интерфейс с современным видом.
- **Поддержка Qt**: Использует **Qt 5** и **Qt 6**, что обеспечивает высокую производительность.
- **Независимость от оконного менеджера**: Может работать с любым оконным менеджером, например, **Openbox** или **KWin**.
:::


## О проекте

**LXQt** — это результат слияния двух проектов:
- **LXDE-Qt** — версия **LXDE**, портированная на **Qt**.
- **Razor-qt** — проект, направленный на создание лёгкой среды рабочего стола на основе **Qt**.

### Почему LXQt?
- **Минимальное потребление ресурсов**: Идеально подходит для старых компьютеров и нетбуков.
- **Гибкость**: Можно настроить под свои нужды.
- **Совместимость**: Работает на большинстве дистрибутивов **Linux** и **BSD**.

## Возможности

### Модульные компоненты
- **Мощный файловый менеджер** ([PCManFM-qt](https://github.com/lxqt/pcmanfm-qt)): Поддержка вкладок, закладок, быстрого поиска.
- **Настраиваемый внешний вид**: Темы, иконки, шрифты.
- **Панели с плагинами**: Можно добавлять и настраивать виджеты.
- **Независимость от оконного менеджера**: Работает с **Openbox**, **KWin**, **i3** и другими.

### Приложения
- **PCManFM-qt** — Файловый менеджер.
- **LXImage-qt** — Просмотрщик изображений.
- **QTerminal** — Терминальный эмулятор.
- **Qps** — Просмотрщик процессов.
- **Screengrab** — Утилита для создания скриншотов.
- **LXQt-archiver** — Архиватор.
- **LXQt-runner** — Запускатор приложений и калькулятор.


## Дистрибутивы с LXQt
<custom-element data-json="%7B%22type%22%3A%22table-metadata%22%2C%22attributes%22%3A%7B%22title%22%3A%22%D0%94%D0%B8%D1%81%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82%D0%B8%D0%B2%D1%8B%20%D1%81%20LXQt%22%7D%7D" />
| Дистрибутив          | Ссылка                                                                 |
|----------------------|-----------------------------------------------------------------------|
| **Lubuntu (ветвь ubuntu)**          | [lubuntu.me](https://lubuntu.me/)                                      |
| **Manjaro**          | [manjaro.org](https://manjaro.org/)                                    |
| **Debian**           | [debian.org](https://www.debian.org/)                                |
| **Arch Linux**       | [archlinux.org](https://archlinux.org/)                              |
| **Void Linux**       | [voidlinux.org](https://voidlinux.org/)                              |
| **FreeBSD**          | [freebsd.org](https://www.freebsd.org/)                              |
| **ALT Linux**        | [altlinux.org](https://www.altlinux.org/)                            |
| **Fedora**        | [fedoraproject.org](https://fedoraproject.org/spins)                            |


## Скриншоты

<img src="https://lxqt-project.org/images/screenshots/ambiance.png" alt="LXQt" style="vertical-align: middle; border-radius: 5px;"/>

*Пример рабочего стола LXQt с темой Ambiance.*

<img src="https://preview.redd.it/lxqt-clean-and-comfy-e-ink-vibes-v0-95le7yo4j4if1.jpg?width=1080&crop=smart&auto=webp&s=b306195a6f06cb5dd92292b17e7cee3e478447f4" alt="LXQt" style="vertical-align: middle; border-radius: 5px;"/>

*Пример рабочего стола LXQt от dr_buttnugget.*

<img src="https://preview.redd.it/lxqt-openbox-netbsd-desktop-eddition-v0-rfm8rq3vihqd1.png?width=1080&crop=smart&auto=webp&s=925d04d73a35e2c916aea5da742d3e136250600e" alt="LXQt" style="vertical-align: middle; border-radius: 5px;"/>

*Пример рабочего стола LXQt от Ramiferous.*

## Установка

Инструкции по установке **LXQt** для различных дистрибутивов можно найти в **[вики-репозитории LXQt](https://github.com/lxqt/lxqt/wiki/How-to-install-LXQt)**.


## Сообщество и поддержка

- **Обсуждения**: [GitHub Discussions](https://github.com/lxqt/lxqt/discussions)
- **Отслеживание ошибок**: [GitHub Issues](https://github.com/lxqt/lxqt/issues)
- **Вики**: [LXQt Wiki](https://github.com/lxqt/lxqt/wiki)
- **Матрикс**: `#lxqt:matrix.org`
- **Telegram**: [LXQt Project](https://t.me/lxqt)
- **IRC**: `#lxqt` на **OFTC**


## Лицензия

**LXQt** распространяется под лицензиями **GNU GPL 2.0+** и **GNU LGPL 2.1+**.


## Дополнительные ссылки

- [Официальный сайт LXQt](https://lxqt-project.org/)
- [Блог LXQt](https://blog.lxqt.org/)
- [Релизы LXQt](https://lxqt-project.org/release/)
- [Скриншоты](https://lxqt-project.org/screenshots/)
- [Переводы](https://translate.lxqt-project.org/)
- [GitHub](https://github.com/lxqt/lxqt)