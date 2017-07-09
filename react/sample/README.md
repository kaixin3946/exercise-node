This is a sample application that goes along with the backstop media book: React Edge 2nd edition. It shows how to structure a large app so that it's highly maintainable.

It used react@0.14 and react-router@1.

## Getting started

Fetch the dependencies. If you don't have node/npm installed I recommend [nvm].

[nvm]: https://github.com/creationix/nvm

    npm install

To run the normal development server on localhost:8080 with the assets on localhost:8081:

    ./scripts/dev

To run the development pages on localhost:9080 and assets on localhost:9081:

    ./scripts/dev --dev-pages

There are some more options:

    $ ./scripts/dev -h
    Options:
      -h, --help          Show help                                        [boolean]
      --asset-url         where assets are to be served from
      --main-url          the main web server root
      --prod              do a development build (default)                 [boolean]
      --only-dev-server   only serve assets                                [boolean]
      --only-main-server  don't run dev-server                             [boolean]
      --dev-pages         instead of running the main app, run the individual
                          component pages

## Development Pages

The development pages allow you to view individual components. Hot reloading is supported here, so you can very quickly make changes.

It allows you to see many variations of the component at once, and serves as documentation.

> TODO: (picture of development pages)

## Docs

Many directories have .md files in them. These serve as an explaination for you and any other developers joining the project. I recommend not deleting them, and adding more docs specific to your application in a similar way.

## Atomic

Atoms are your low level components. Included is set of atoms that allow you to build most things. Unlike third party component libraries, these are your own to modify or remove. Atoms such as `<Box>` and `<Header>` allow you to avoid using dom components directly in higher level views, and encourage consistency across large applications.

Read more about this in the README.md in the [atoms], [molecules], [organisms], and [pages] directories.

[atoms]: src/atoms/README.md
[molecules]: src/molecules/README.md
[organisms]: src/organisms/README.md
[pages]: src/pages/README.md

## Flux

The flux library used here is reflux. It's simple but powerful.

