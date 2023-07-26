# Version bumps

For bumping major minor or patch versions to npm package.json use this npm scripts

```json
"scripts": {
    "bump:major": "npm version major --force --no-git-tag-version",
    "bump:minor": "npm version minor --force --no-git-tag-version",
    "bump:patch": "npm version patch --force --no-git-tag-version",
},```