#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 编译成静态文件
vuepress build

# 进入文件
cd public

git init
git add .
git commit -m '部署博客'

# git remote add blog_mahy https://gitee.com/mahy_yel/mahy_yel.git
git remote add blog_mahy https://github.com/itmahy/mahy_yel.github.io.git
git checkout -b deploy
git push -f blog_mahy deploy
# git push

cd ..
rm -rf ./public