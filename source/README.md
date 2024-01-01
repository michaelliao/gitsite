# Home

<div style="margin:4rem 0;text-align:center;font-weight:600;">
<p style="font-size:4rem;line-height:5rem;">Rapidly build modern websites</p>
<p style="font-size:4rem;line-height:5rem;">from Markdown documents in Git</p>
</div>

<p style="font-size:2rem;line-height:2.5rem;text-align:center;margin:2rem;">GitSite build your well-organized Markdown documents and other resources to static web site that can be deployed simply to GitHub page, etc.</p>

```mermaid center
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

Manage your docs in Git repository and rebuild on changes automatically.

