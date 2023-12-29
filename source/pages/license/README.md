# MIT License

Copyright 2023 Michael Liao

```mermaid
---
title: Flowchart
---
flowchart TD
    A[Start] --> B{Is it?}
    B -->|Yes| C[OK]
    C --> D[Rethink]
    D --> B
    B ---->|No| E[End]
```

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

```mermaid
---
title: Sequence Diagram Demo
---
sequenceDiagram
    actor Alice
    autonumber
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    Note right of John: John should response
    John-->>-Alice: Hi Alice, I can hear you!
    Note over Alice,John: A typical interaction
    John-->>-Alice: I feel great!
    loop Every minute
        John-->Alice: Hello!
    end
    opt Extra response
        Alice->>Alice: End
    end
```

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

```mermaid
pie showData
    title Pie Demo
    "Apple" : 42.96
    "Orange" : 50.05
    "Banana" : 10.01
    "Raspberry" : 5
```

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
