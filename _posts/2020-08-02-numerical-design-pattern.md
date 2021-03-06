---
layout: post
title:  数値計算プログラムをオブジェクト指向で設計する
date: 2020-08-02
---

`数値計算 デザインパターン`でGoogle検索した結果＋αの中から気になるページをまとめてみた．

- 解説記事
    - [オブジェクト指向数値計算-I : 数値計算におけるオブジェクト指向技術](https://doi.org/10.11509/isciesci.55.3_100)
    - [オブジェクト指向数値計算-II : オブジェクト指向数値計算ライブラリ](https://doi.org/10.11509/isciesci.55.5_204)
    - [オブジェクト指向数値計算-III : 数値計算のためのプログラミング言語](https://doi.org/10.11509/isciesci.55.7_284)
    - [オブジェクト指向数値計算-IV : 制御系のモデリングとシミュレーション](https://doi.org/10.11509/isciesci.55.9_392)
    - [オブジェクト指向数値計算-V : 制御系モデリング・シミュレーションツール](https://doi.org/10.11509/isciesci.55.11_486)
    - [オブジェクト指向数値計算-VI : オブジェクト指向数値計算の可能性](https://doi.org/10.11509/isciesci.56.1_42)

- ブログ
    - [数値計算屋にはFortranは捨てなくても良いけどソフトウェアエンジニアリングを学んでほしい](https://hpcmemo.hatenablog.com/entry/2019/03/22/024916)
    - [「コードの書き方がわからない」と大学の先生に聞いたこと](http://www.susumuis.info/entry/20101127/p1)

- 書籍（Amazonリンク）
    - [『オブジェクト指向UIデザイン──使いやすいソフトウェアの原理』(WEB+DB PRESS plusシリーズ)](https://www.amazon.co.jp/dp/4297113511)
    - [『Java言語で学ぶデザインパターン入門』](https://www.amazon.co.jp/dp/4797327030)
    - [『Java言語で学ぶデザインパターン入門 マルチスレッド編』](https://www.amazon.co.jp/dp/4797331623)

## 背景

多体系物理学で用いられるようなシミュレーション手法をもっと手軽にPoC -> 本番投入できたら嬉しいとずっと思っていた．

例えば**格子上の相互作用スピン系のモンテカルロシミュレーション**はまさに典型例で，初期状態を

`init_state := _initialize_by_config(...)`

みたいに与えておいてから

`state, history = init_state.update(sample_algorithm, **params)`

みたいにしてアップデートができれば素敵だなと思うわけである（内部的には第1の戻り値を`self`で与えて第2の戻り値はそこに至るまでの時系列全部を与えれば情報としては足りるだろう）．

もちろん既に[ALPS](http://alps.comp-phys.org/static/pydocs2.2/)のようなライブラリがあることは承知しているが，個人的にはモンスターパッケージを作らずにミニマムな構成でオブジェクト指向を貫くことに少しばかり興味がある．

自分もプログラミングの勉強を従前にできているとは決して言えないが，他にも重たい数値計算を伴う多体系物理学の研究タスクはたくさんあるし，そういった分野の人達が本質的なことだけに集中するための課題をプログラミングサイドから解決するのは割と憧れだったりする．