# Home

<div style="margin:4rem 0;text-align:center;font-weight:600;">
<p style="font-size:4rem;line-height:5rem;text-wrap:balance;">Rapidly build modern websites from Markdown documents in Git</p>
</div>

<p style="font-size:2rem;line-height:2.5rem;text-align:center;margin:2rem;text-wrap:balance;">GitSite build your well-organized Markdown documents and other resources to static web site that can be deployed simply to GitHub page, etc.</p>

```mermaid align=center
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
    deploy --> nginx[Self-Hosted Nginx]
```

<p style="font-size:2rem;line-height:2.5rem;text-align:center;margin:2rem;text-wrap:balance;">GitSite supports Markdown documents, embedded videos, mathematical expressions, ASCII art, QR code, diagrams, and even sheet music!</p>
