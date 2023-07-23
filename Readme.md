# Taro V2EX

此项目展示了如何在 Taro 中使用 [React Hooks](https://reactjs.org/docs/hooks-intro.html)，需要 Taro 3.6 以上版本构建。

> 基于 [taro-v2ex-hooks](https://github.com/NervJS/taro-v2ex-hooks) 开发.

- [教程](https://docs.taro.zone/docs/guide)
- [taro-v2ex-hooks](https://github.com/NervJS/taro-v2ex-hooks)



这个项目使用了 Taro 构建了一个 [V2ex](www.v2ex.com) 论坛小程序。主要目的在于展示如何使用 TypeScript 构建 Taro 项目和使用 Redux 跨组件/路由传递消息。

[![v2ex.gif](https://i.loli.net/2018/08/15/5b73d86a54514.gif)](https://i.loli.net/2018/08/15/5b73d86a54514.gif)


## 运行

```bash
$ pnpm install
$ pnpm run build:weapp --watch
```

## 限制

宥于 V2EX API 的限制，本项目有几个限制：

1. 没有「获取更多」的这个 API，除了回复可以全部载入之外所有 API 都不能加载更多信息；
2. 每个 IP 每小时只能访问 API 100 次，超过便无法访问；
3. 无法跨域，因此没有 h5 版本；

## TODO

- 使用 eslint、prettier、husky、lint-staged、commitline 去做规范
