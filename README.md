## Steps to deploy on cloud
```
# Go to cloud shell

# Clone the repo
git clone https://<USERNAME>:<PASSWORD>@github.com/ObiwanTest/react-gh-page-test1.git

# cd into repo
cd react-gh-page-test1

# Target cloud foundary region
ibmcloud target --cf

# Push app to cf
ibmcloud cf push
```

## Deploy to GitHub Pages
```
yarn deploy
```

## Repo Initial Steps (For reference)
```
# Clone repo.
git clone git@github.com:ObiwanTest/react-gh-page-test1.git

# Create new react app.
npx create-react-app .

# Install gh-pages dependency.
yarn add gh-pages

# Open package.json in editor
# 1. Add homepage field on the same level as "name".
"homepage": "https://obiwantest.github.io/react-gh-page-test1/"

# 2. Add predeploy and deploy fields under scripts.
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
```

