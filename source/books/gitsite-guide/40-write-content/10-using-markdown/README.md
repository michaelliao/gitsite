# Using Markdown

When `.command()` is invoked with a description argument, this tells Commander that you're going to use stand-alone executables for subcommands. Commander will search the files in the directory of the entry script for a file with the name combination command-subcommand, like pm-install or pm-search in the example below. The search includes trying common file extensions, like .js. You may specify a custom name (and path) with the executableFile configuration option. You may specify a custom search directory for subcommands with .executableDir().
