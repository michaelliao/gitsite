# Using Markdown Plugin

通过编写Plugin可以扩展Markdown语法。GitSite内置了几个Plugin。

## 创建ASCII图案

通过Code Block类型`ascii`可以创建ASCII图案：

To create an ASCII block, just add identifier `ascii` to code blocks:

    ```ascii
    ┌────────────────────────────────────────────────────────┐
    │Command Prompt                                    - □ x │
    ├────────────────────────────────────────────────────────┤
    │Microsoft Windows [Version 10.0.0]                      │
    │(c) 2015 Microsoft Corporation. All rights reserved.    │
    │                                                        │
    │C:\> python                                             │
    │Python 3.10.1 ...                                       │
    │[MSC v... 64 bit (AMD64)] on win32                      │
    │Type "help", "copyright", "credits" or "license"...     │
    │>>> _                                                   │
    │                                                        │
    │                                                        │
    └────────────────────────────────────────────────────────┘
    ```

```ascii
┌────────────────────────────────────────────────────────┐
│Command Prompt                                    - □ x │
├────────────────────────────────────────────────────────┤
│Microsoft Windows [Version 10.0.0]                      │
│(c) 2015 Microsoft Corporation. All rights reserved.    │
│                                                        │
│C:\> python                                             │
│Python 3.10.1 ...                                       │
│[MSC v... 64 bit (AMD64)] on win32                      │
│Type "help", "copyright", "credits" or "license"...     │
│>>> _                                                   │
│                                                        │
│                                                        │
└────────────────────────────────────────────────────────┘
```

## Creating Alert

To create an alert, just add identifier `alert` and sub type like `info` to code blocks:

    ```alert info
    Please note that **Nodejs** requires a version >= 20.
    ```

```alert info
Please note that **Nodejs** requires a version >= 20.
```

Sub types can be `info`, `success`, `warning` or `danger`:

```alert info
INFO: the request was fully filled.
```

```alert success
SUCCSS: the request was fully filled.
```

```alert warning
WARNING: Could not process the request because file was not found.
```

```alert danger
DANGER: Could not process the request because file was not found.
```

## Creating Q&A

You can create a Q&A form by add identifier `question` and subtype.

A single selection form:

``` question radio
Which browser first support **JavaScript**?
---
    Internet Explorer
[x] Netscape Navigator
    Mozilla Firefox
    Google Chrome
```

A multi selection form:

``` question checkbox
The planets that in the solar system:
---
[x] Earth
[x] Mercury
    Moon
    Halley
[x] Jupiter
```

A text input form:

``` question text
The largest planet in the solar system is:
----
Jupiter
```

A text input form but ignore the case of answer:

``` question text ignorecase
The largest planet in the solar system is (ignore case):
----
Jupiter
```

A date input form:

``` question date
When were the first modern Olympic Games held?
----
1896-04-06
```
