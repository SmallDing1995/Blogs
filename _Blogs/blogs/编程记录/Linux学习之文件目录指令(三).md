---
title: Linux学习之文件目录指令(三).md
date: 2023/03/02
tags:
    - Linux
categories:
    - 编程记录
---
# cd 打开指令

::: hljs-left

1. cd .. 返回上一目录
2. cd  返回家目录

:::

# mkdir 创建指令

基本语法 mkdir  目录名称
参数 -p 创建多级目录

# rmdir 删除==空==目录指令

基本语法 rmdir  目录名称
如果要删除非空 目录 rmdir -rf 目录名称

# touch 创建空文件指令

touch 文件名

# cp 拷贝指令

基本语法 cp [选项] source dest

递归拷贝
cp -r  source dest

强制覆盖不提示 \cp -r source dest

# rm 移除文件或者目录

rm [选项] 文件或者目录

-r 递归删除整个文件夹
-f 强制删除不提示

# mv 指令 移动文件与目录或重命名

mv oldfilename  newfilename(重命名) 在同一个目录就是重命名
mv /temp/xxx /newdir (移动文件)

# cat 命令 查看文件内容

基础命令 cat [选项] 文件
常用选项 -n  显示行号
