---
title: "プラグイン：MarumasaCar"
updated: 2026-01-07T10:43:48+09:00
author: "pizzaharumaki"
seesaa: https://seesaawiki.jp/toro_server/d/%a5%d7%a5%e9%a5%b0%a5%a4%a5%f3%a1%a7MarumasaCar
---

MarumasaCarはAdminのまるまさ氏によって開発された自動車プラグイン。事前にTOROServerのサーバーリソースパックを適用している必要がある。  
<u>遊び終えたら必ず片付けてください。</u>

<a id="content_1"></a>
## 目次

- [目次](#content_1)
- [出し方/消し方](#content_2)
- [使える自動車の種類](#content_3)
  - [AT車について](#content_3_1)
  - [SmoothCarについて](#content_3_2)

<a id="content_2"></a>
## 出し方/消し方

以下のコマンドを実行して手に入れた防具建てを設置するだけです。

```
/give @p minecraft:armor_stand{EntityTag:{id:armor_stand,ShowArms:1b,Tags:["ここにIDを入力"]}} 1
```

IDの一覧は次の項で紹介します。

シフトを押しながら右クリックで乗り物を消せます(消せなくなった場合は、必ず運営に自分で報告する事)

<a id="content_3"></a>
## 使える自動車の種類

<table>
<tr><th>ID</th><th>作者</th><th>定員</th><th>AT車?<a href="#annotation1">(※1)</a></th><th>滑らかに動く?<a href="#annotation2">(※2)</a></th></tr>
<tr><td>marumasa.minuma</td><td>MarumasaUSB</td><td>2</td><td>❌</td><td>❌</td></tr>
<tr><td>marumasa.smooth_example</td><td>MarumasaUSB</td><td>2</td><td>❌</td><td>✅</td></tr>
<tr><td>fhrk.simpletruck</td><td>fhrk_</td><td>4</td><td>❌</td><td>❌</td></tr>
<tr><td>fhrk.simplebus</td><td>fhrk_</td><td>13</td><td>❌</td><td>❌</td></tr>
<tr><td>salmon.car</td><td>rupirupi_</td><td>7</td><td>❌</td><td>❌</td></tr>
<tr><td>toilet.sedans13</td><td>_woodtoilet</td><td>6</td><td>❌</td><td>❌</td></tr>
<tr><td>toilet.t34tankq</td><td>_woodtoilet</td><td>1</td><td>❌</td><td>❌</td></tr>
<tr><td>salmon.keitruck</td><td>rupirupi_</td><td>5</td><td>❌</td><td>❌</td></tr>
<tr><td>tetsuota.luup</td><td>nukonuko_221</td><td>1</td><td>❌</td><td>❌</td></tr>
<tr><td>toilet.t72b3</td><td>_woodtoilet</td><td>1</td><td>❌</td><td>❌</td></tr>
<tr><td>toilet.rx7fd3se</td><td>_woodtoilet</td><td>4</td><td>❌</td><td>❌</td></tr>
<tr><td>toilet.180sx</td><td>_woodtoilet</td><td>4</td><td>❌</td><td>❌</td></tr>
<tr><td>kokeishi.bus</td><td>Kokeishi001</td><td>15</td><td>❌</td><td>❌</td></tr>
<tr><td colspan="5" style="background-color:#ccc">以下 現在使用不可</td></tr>
<tr><td style="background-color:#faa">marumasa.minumaat</td><td>MarumasaUSB</td><td>2</td><td>✅</td><td>❌</td></tr>
<tr><td style="background-color:#faa">salmon.carat</td><td>rupirupi_</td><td>7</td><td>✅</td><td>❌</td></tr>
<tr><td style="background-color:#faa">toilet.sedans13at</td><td>_woodtoilet</td><td>6</td><td>✅</td><td>❌</td></tr>
</table>

<a id="content_3_1"></a>
### <a id="annotation1"></a>AT車について

<span style="color:#ff0000">致命的なバグが発見されたため現在使用不可です。復活しない可能性もあります。</span>

AT車はホットバーがシフトレバーになる車です。降りればインベントリはもとに戻ります。  
ちなみに、インベントリからクラクションやウィンカーも操作できます。

<a id="content_3_2"></a>
### <a id="annotation2"></a>SmoothCarについて

SmoothCarはまるまさ氏が作った滑らかに動く車です。まだ対応車両は少ないです。
