# Mathematical expressions

To enable clear communication of mathematical expressions, GitSite supports LaTeX formatted math within Markdown. For more information, see [LaTeX/Mathematics](http://en.wikibooks.org/wiki/LaTeX/Mathematics) in Wikibooks.

GitSite's math rendering capability uses [Katex](https://katex.org/): an open source, JavaScript-based display engine.

## Writing inline expressions

You can surround the expression with dollar symbols `$`.

```markdown
This sentence uses `$` delimiters to show math inline:  $\sqrt{3x-1}+(1+x)^2$
```

This sentence uses `$` delimiters to show math inline:  $\sqrt{3x-1}+(1+x)^2$

## Writing expressions as blocks

To add a math expression as a block, start a new line and delimit the expression with two dollar symbols `$$`.

```markdown
$$
\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
$$
```

$$
\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
$$

## Writing chemical equations

The Katex also supports chemical equations by the [mhchem](https://mhchem.github.io/MathJax-mhchem/) extension.

```markdown
Chemical equation example: $\ce{CO2 + C -> 2 CO}$.
```

Chemical equation example: $\ce{CO2 + C -> 2 CO}$.

A complex chemical equation as a block:

```markdown
$$
\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}
$$
```

$$
\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}
$$
