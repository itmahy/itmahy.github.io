---
title: （三）Docker-镜像命令
author: mahy
date: 2023-06-21
sidebar: 'auto'
email: mahy_yel@163.com
categories:
 - 运维
tags:
 - docker
publish: true
---

:::tip

   Docker-镜像命令，操作镜像的一些命令

:::

<!-- more -->



### 1. 列出本地主机上的镜像

```shell
[root@localhost ~] docker images [OPTIONS]
[OPTIONS]
 -a 列出本地所有的镜像 (含历史映像层)
 -q 只显示镜像ID
```

### 2. 查询镜像

```shell
[root@localhost ~]docker search [OPTIONS] [镜像名字]
[OPTIONS]
 --limit N  只列出N个镜像，默认25个
eg:
[root@localhost ~]docker search --limit 5 redis
```

### 3. 下载镜像

```shell
[root@localhost ~]docker pull 镜像名字:TAG  
这里[TAG]是版本号，如果没有添加 TAG 则默认为 latest 最新版
eg:
[root@localhost ~]docker pull centos:7.6.12
```

### 4. 查看镜像、容器、数据卷所占的空间

```shell
[root@localhost ~]docker system df
```

### 5. 删除镜像

```shell
[root@localhost ~]docker rmi 镜像ID or 镜像名:TAG     #删除单个镜像
[root@localhost ~]docker rmi -f 镜像ID or 镜像名:TAG     #强制删除单个镜像
[root@localhost ~]docker rmi -f 镜像名1:TAG1 镜像名2:TAG2 ....      #强制删除多个镜像
[root@localhost ~]docker rmi-f $(docker images -qa)     #删除全部
```





