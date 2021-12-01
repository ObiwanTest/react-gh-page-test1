## Deploy to GitHub Pages
```
yarn deploy
```

## Setup Steps
```
# Clone repo.
git clone ...

# Create new react app.
npx create-react-app .

# Install gh-pages dependency.
yarn add gh-pages

# Open package.json in editor
# 1. Add homepage field on the same level as "name".
"homepage": "https://github.com/ObiwanTest/react-gh-page-test1"

# 2. Add predeploy and deploy fields under scripts.
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
```

