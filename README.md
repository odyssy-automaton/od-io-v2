# Odyssy.io V2

## Getting Started

```
$ yarn
```

To test the CMS locally, you'll need run a production build of the site:

```
$ yarn build
$ yarn serve
```

To run a development server:

```
$ yarn develop
```

#### Purgecss

This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [bulma](https://bulma.io/). The bulma builds are usually ~170K but reduced 90% by purgecss.
