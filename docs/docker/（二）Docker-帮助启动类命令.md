---
title: （二）Docker-帮助启动类命令
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
  帮助启动类命令，关于docker的启动、停止、状态和帮助
:::
<!-- more -->

### 1. 启动docker

```shell
systemctl start docker
```

### 2. 停止docker

```shell
systemctl stop docker 
```

### 3. 重启docker

```shell
systemctl restart docker
```

#### 4. 查看docker状态

```shell
systemctl status docker
```

### 5. 开机启动

```shell
systemctl enable docker
```

### 6. 查看docker概要信息

```shell
docker info
```

### 7. 查看帮助文档

```shell
docker --help
```

### 8. 查看命令帮助文档

```shell
docker [具体命令] --help
```



