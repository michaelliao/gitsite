# Create site

To create a new site, use:

```bash
$ npx gitsite-cli new -d site
```

The `site` directory specified by `-d` argument is created by `gitsite-cli`.

A typical site has the following directories:

```ascii
<your-site>
├── layout         <-- all themes
│   └── default    <-- a theme named 'default'
│
└── source         <-- contains all markdown docs
    │
    ├── books             <-- all books
    │   ├── user-guide    <-- a book
    │   │   ├── book.yml  <-- book name, author and description
    │   │   ├── 10-introduction  <-- chapter order and short name
    │   │   │   ├── README.md    <-- chapter content
    │   │   │   └── test.png     <-- static resources used in the chapter
    │   │   ├── 20-installation  <-- chapter
    │   │   │   ├── README.md
    │   │   │   ├── 10-create-repo  <-- sub chapter
    │   │   │   │   └── README.md
    │   │   │   ├── 20-workflow     <-- sub chapter
    │   │   │   │   └── README.md
    │   │   │   └── 30-deploy       <-- sub chapter
    │   │   │       └── README.md
    │   │   └── ...  <-- more chapters
    │   └── ...  <-- more books
    │
    ├── blogs                 <-- all blogs
    │   ├── 2021-01-01-hello  <-- blog date and short name
    │   │   ├── README.md     <-- blog content
    │   │   └── hello.jpg     <-- static resources used in the blog
    │   └── ...               <-- more blogs
    │
    ├── pages             <-- all pages
    │   ├── about         <-- about page
    │   │   ├── README.md <-- page content
    │   │   └── html5.png <-- static resources used in the page
    │   └── ...           <-- more pages
    │
    ├── 404.md       <-- display as 404 page if not found
    ├── README.md    <-- display as home page
    ├── favicon.ico  <-- favicon
    ├── site.yml     <-- site config
    └── static       <-- static resources
        ├── custom.css
        ├── logo.png
        └── ...
```

