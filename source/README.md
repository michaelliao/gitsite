# Home

# Rapidly build modern websites from Markdown documents in Git

---

### GitSite can build your well-organized Markdown documents with other resources to static web site deployed to GitHub pages, etc.

```mermaid
flowchart LR
    md[Markdown Docs]
    gitsite[gitsite-cli Tool]
    build{Build}
    deploy{Deploy}
    html[Static Web Site]
    md --> build
    gitsite --> build
    build --> html
    html --> deploy
    deploy --> github[GitHub Page]
    deploy --> gitlab[GitLab Page]
    deploy --> cloudflare[CloudFlare Page]
    deploy --> vercel[Vercel]
    deploy --> s3[S3 Website Hosting]
    deploy --> nginx[Self-Hosted Nginx]
    build --> PDF
```

Example:

A GitHub Repo: [https://github.com/michaelliao/gitsite](https://github.com/michaelliao/gitsite) can be deployed to:

- GitHub: [https://gitsite.puppylab.org](https://gitsite.puppylab.org)
- GitLab: [https://gitlab.gitsite.puppylab.org](https://gitlab.gitsite.puppylab.org)
- Cloudflare: [https://cloudflare.gitsite.puppylab.org](https://cloudflare.gitsite.puppylab.org)

### GitSite supports Markdown documents, embedded videos, mathematical expressions, ASCII art, QR code, diagrams, and even sheet music!

# [Read User Guide »](/books/gitsite-guide/index.html)
