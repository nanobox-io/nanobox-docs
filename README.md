# Nanobox Documentation

This repo house all of the documentation for [Nanobox](https://nanobox.io). These docs are built in [Middleman](https://middlemanapp.com/).

## Up and Running
```bash
# clone the project
git clone https://github.com/nanobox-io/nanobox-docs.git

# cd into nanobox-docs
cd nanobox-docs

# add a dns alias for the dev docs
nanobox dns add local docs.nanobox.dev

# run the app
nanobox run middleman
```

The docs will be available in your browser at `docs.nanobox.dev:4567` and will live-reload as changes are made.

### Contributing
Contributions to the Nanobox documentation are welcome and encouraged. We realize the majority of fixes will mainly be typos and we appreciate the additional eyes. To submit contributions to the docs, please follow the [Nanobox Contribution Process & Guidelines](https://docs.nanobox.io/contributing/).
