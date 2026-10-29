---
title: "プラグイン：ImageOnMap"
updated: 2026-07-28T15:47:21+09:00
author: "pizzaharumaki"
seesaa: https://seesaawiki.jp/toro_server/d/%a5%d7%a5%e9%a5%b0%a5%a4%a5%f3%a1%a7ImageOnMap
---

<table>
<tr><td colspan="3" style="background-color:#bbb"></td></tr>
<tr><td style="background-color:#bbb"></td><td style="background-color:#ddd">このプラグインは1.20.4以前で動作していました。</td><td style="background-color:#bbb"></td></tr>
<tr><td style="background-color:#bbb"></td><td style="background-color:#ddd">代替プラグインは→<a href="../02_Plugins/プラグイン：ImageFrame.md">プラグイン：ImageFrame</a></td><td style="background-color:#bbb"></td></tr>
<tr><td colspan="3" style="background-color:#bbb"></td></tr>
</table>

<a id="content_1"></a>
## 注意事項

![](../attachments/c1c7012b7e8c6a0f95800add33b29ff8.png)  
ImageOnMapは、諸事情により60枚までとなっております。  
制限なく画像をマイクラ内で使いたい場合は→[MarumaSign](../02_Plugins/Mod：MarumaSign.md)

<a id="content_2"></a>
## 概要

ImageOnMapは、画像を地図に変換するプラグインです。  
高速道路の看板や、鉄道駅の電光掲示板等にご利用いただけます。  
![](../attachments/daf2c402e32860259b506ded48e3928b.png)

<a id="content_3"></a>
## 目次

- [注意事項](#content_1)
- [概要](#content_2)
- [目次](#content_3)
- [画像を変換してみよう！](#content_4)
  - [1.ダイレクトリンクを取得する](#content_4_1)
  - [2.変換する](#content_4_2)
- [コマンド一覧](#content_5)

<a id="content_4"></a>
## 画像を変換してみよう！

<a id="content_4_1"></a>
### 1.ダイレクトリンクを取得する

※  
画像のサイズは128x128で1枚、サイズが大きいと地図も増えます。  
事前に調節しておきましょう。  
まず画像をURLとして利用できるようにアップロードしよう。ここではImgBBというサービスを使う。<b><u>アップローダーはお好みでどうぞ。</u></b>  
<https://ja.imgbb.com/>  
まずは、アカウントを作成する。そしてアップロードする、するとダイレクトリンクがコピーできるので、コピーしてこの工程は完了。

<a id="content_4_2"></a>
### 2.変換する

<b>/tomap [先程のダイレクトリンク]</b> で変換完了。  
128x128以下ならインベントリに、でなければ/mapsを用いて地図を手に入れることができる。

<a id="content_5"></a>
## コマンド一覧

| 構文 | 効果 | 権限 | 備考 |
| --- | --- | --- | --- |
| /tomap \<URL> | 画像リンクを地図に変換します | 誰でも | (なし) |
| /maps | 今まで変換した画像の一覧を表示します | 誰でも | (なし) |
