# QRCode

To create a QRCode, add text inside a fenced code block with the `qrcode` identifier.

GitSite's QRCode rendering capability uses [qrcode-svg](https://github.com/papnkukn/qrcode-svg): an open source, JavaScript-based library.

    ```qrcode
    https://gitsite.org
    ```

The text inside the fenced code block will be converted to a QRCode:

```qrcode
https://gitsite.org
```

You can specify some extra arguments to control the QRCode:

| Parameter             | Description                                     |
|-----------------------|-------------------------------------------------|
| ecl=[l\|m\|h\|q]      | The error correction level, default to `ecl=m`. |
| width=[size-in-px]    | The width in px, default to `width=256`.        |
| [left\|center\|right] | The alignment of the QRCode, default to `left`. |
| info                  | Display the text content, if present.           |
| link                  | Display the text as URL, if `info` present and the text is a valid link. |

Example:

    ```qrcode ecl=l width=200 center info link
    https://gitsite.org
    ```

```qrcode ecl=l width=200 center info link
https://gitsite.org
```
