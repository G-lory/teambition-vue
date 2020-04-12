#！ /bin/bash
npm run build
cd ./dist
cp index.html 404.html
git init
git remote add origin https://github.com/G-lory/teambition-vue.git
git add .
git commit -m 'deploy'
git checkout -b gh-pages
git push -u origin gh-pages -f