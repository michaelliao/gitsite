# Home

# Rapidly build modern websites from Markdown documents in Git</p>

---

### GitSite can build your well-organized Markdown documents and other resources to static web site deployed to GitHub pages, etc.

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
    deploy --> s3[S3 Website Hosting]
    deploy --> vercel[Vercel]
    deploy --> nginx[Self-Hosted Nginx]
```

Example:

A GitHub Repo: https://github.com/michaelliao/gitsite can be deployed to:

- GitHub: https://gitsite.org
- GitLab: https://gitlab.gitsite.org
- Cloudflare: https://cloudflare.gitsite.org
- Vercel: https://vercel.gitsite.org

### GitSite supports Markdown documents, embedded videos, mathematical expressions, ASCII art, QR code, diagrams, and even sheet music!

# [Read User Guide »](/books/gitsite-guide/index.html)
