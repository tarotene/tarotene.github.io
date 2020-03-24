---
layout: post
title: ページリニューアル
date: 2020/03/24
---

[Web記事](https://aloerina01.github.io/blog/2016-10-02-2)を参考に，[Jekyll-now](https://github.com/barryclark/jekyll-now)+[自家製はてなアイコン](https://gist.github.com/tarotene/3cc061b5aa32cbf8a2e36ce402af0bbe)でリニューアルを行いました．

参考のために書いておくと，Jekyllフォルダ直下の `/_sass/_svg-icons.scss` に
```css
&.hatena { background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M20%2040C8.972%2040%200%2031.029%200%2020%200%208.972%208.972%200%2020%200c11.03%200%2020%208.972%2020%2020%200%2011.029-8.97%2020-20%2020zm0-37.456c-9.626%200-17.457%207.83-17.457%2017.456S10.374%2037.457%2020%2037.457c9.627%200%2017.458-7.831%2017.458-17.457%200-9.626-7.831-17.456-17.458-17.456zm2.33%207.58c-.978-1.978-1.574-3.902-1.876-5.024v14.166a1.301%201.301%200%2001-.454%202.52%201.3%201.3%200%2001-.381-2.542V5.085c-.3%201.119-.897%203.052-1.88%205.04-1.53%203.096-3.438%205.827-3.438%205.827l1.22%2016.702s1.16%201.295%204.511%201.296h.005c3.351-.001%204.512-1.296%204.512-1.296l1.22-16.702s-1.909-2.731-3.44-5.828z%22%20fill%3D%22%23333%22%20fill-rule%3D%22nonzero%22%2F%3E%3C%2Fsvg%3E'); }
```
という項目を適当に追加し，同じく `/_includes/svg-icons.html` にも
```html
{% if site.footer-links.hatena %}<a href="https://{{ site.footer-links.hatena }}.hatena.com"><i class="svg-icon hatena"></i></a>{% endif %}
```
と書き加えます．すると，`/_config.yml` の `footer-links:` 以下で
```yml
hatena: trtn
```
と設定することで，html側の変数 `site.footer-links.hatena` が有効になります[^shikumi]．

Jekyll-now（とその派生テーマ）では様々なアイコンを有効化できるみたいですが，日本国内のSNSやブログサービスのアイコンは用意されていないので自分で作る必要があります．自分は，[はてな公式](https://hatenacorp.jp/press/resource)からダウンロードした素材を 40x40 に縮小したものをそのまま base64 に変換して使っています[^base]．同じようにやれば，他のサービスでも素材さえ用意すればアイコンを増やせるはずです[^Qiita]．

[^shikumi]: この仕組みを理解するのに，Web系の知識がない私は数時間を費やしました．
[^base]: base64は画像などをCSS上にインライン展開するのに必要です．
[^Qiita]: ちなみに大手技術情報シェアサービスであるところのQiitaでは公式アイコンが配布されていませんでした．残念．