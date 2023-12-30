/*
Render a code block into emoji.

Markdown:

```emoji
Hello, :wave:
:smile: Haha
```

Rendered as:

<p>Hello, 👋</p>
<p>😄 Haha</p>
*/
import MarkdownIt from "markdown-it";

const escapeHtml = MarkdownIt().utils.escapeHtml;

const mapping = {
    ':smile:': '😄',
    ':heart_eyes:': '😍',
    ':broken_heart:': '💔',
    ':thumbsup:': '👍',
    ':wave:': '👋',
    ':ok_hand:': '👌',
};

function replaceEmoji(str) {
    for (let key in mapping) {
        let value = mapping[key];
        for (; ;) {
            let old = str;
            str = str.replace(key, value);
            if (str === old) {
                break;
            }
        }
    }
    return str;
}

export default function (md, type, args, str) {
    if (type !== 'emoji') {
        return null;
    }
    console.log(`generate emoji...`);
    let ps = [];
    let lines = str.split('\n');
    for (let line of lines) {
        line = line.trim();
        if (line) {
            ps.push('<p>' + escapeHtml(replaceEmoji(line)) + '</p>');
        }
    }
    return ps.join('\n');
};
