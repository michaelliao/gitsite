# GitSite简介

GitSite是一个基于现代Web技术的文档平台，任何个人和团队都可以通过Git组织并编写文档，并自动生成符合HTML5标准的Web网站。

GitSite is a document platform based on modern Web technology, any individual and team can organize and write documents through Git, and automatically generate HTML5-compliant web sites.

![](test.png)

Git是目前最流行的版本控制系统，而GitHub等托管平台则提供了强大而可靠的Git仓库托管。许多个人和团队在GitHub这样的平台通过Git管理Markdown文档。GitSite不要求使用专业的前端构建工具，也无需繁琐的配置，即可快速基于Git仓库的Markdown文档生成Web网站，而网站的所有内容均为静态页面。

Git is currently the most popular version control system, and hosting platforms such as GitHub provide powerful and reliable hosting of Git repositories. Many individuals and teams manage Markdown documents through Git on platforms like GitHub. GitSite does not require the use of specialized front-end build tools, nor does it require cumbersome configuration to quickly generate a web site based on Markdown documents from Git repositories, and all contents on the site is static HTML pages.

## GitSite适合哪些用户

GitSite的设计目标是支持不多于1万个Markdown文档的Git仓库，他们通常是产品文档、知识库、个人博客或者一本书籍。如果文档的数量非常庞大，您可能需要考虑使用数据库管理，因为GitSite基于静态页面的方式会使得前端搜索显著变慢。

GitSite is designed to support Git repositories with no more than 10,000 Markdown documents, usually product documentation, knowledge bases, personal blogs, or a book. If the number of documents is very large, you may want to consider using database management, as GitSite's static page-based approach can slow down front-end searches significantly.