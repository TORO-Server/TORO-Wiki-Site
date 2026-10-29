---
title: "CoreProtect"
updated: 2020-05-30T00:48:06+09:00
author: "barusugan_pocketkie"
seesaa: https://seesaawiki.jp/toro_server/d/CoreProtect
---

![](https://proxy.spigotmc.org/2705382484a190b9fbbc00f8a5b2db46c3d3362b?url=http%3A%2F%2Fuserfolio.com%2Fuploads%2Fcoreprotect2-banner.png)

このサーバーには「CoreProtect」というブロック操作履歴を記録するプラグインが導入されており、  
誰がブロックを設置したか等を調べることができます。

**目次**

- [使い方](#content_1)
  - [機能のON・OFF](#content_1_1)
  - [ログの取り方](#content_1_2)
  - [ログの見方](#content_1_3)
- [コマンド一覧](#content_2)
  - [一般](#content_2_4)
  - [運営向け](#content_2_5)
    - [パラメータ](#content_2_5_1)

<a id="content_1"></a>
## 使い方

<a id="content_1_1"></a>
### 機能のON・OFF

ブロック操作履歴の確認機能を有効にするには、<b>/co i</b> と実行します。  
<span style="color:#009999">CoreProtect</span> - Inspector now enabled. と表示されると有効になります。

無効にする際も、<b>/co i</b> と実行します。  
<span style="color:#009999">CoreProtect</span> - Inspector now disabled. と表示されると無効になります。

<a id="content_1_2"></a>
### ログの取り方

機能を有効にした後、ブロックを**左クリック**すると、その位置のログを取得できます。  
また、**右クリック**すると、クリックしたその面の上の位置のログを取得できます。

レバーやドアなどの右クリックで変化するブロックは、**右クリック**で使用履歴を取得できます。（左クリック時は上記と同じ）

<a id="content_1_3"></a>
### ログの見方

![](../attachments/746ac9ee867574af9e60dfff08a7f623.png)

- ----- <span style="color:#009999">CoreProtect</span> ----- <u><b>(x座標/y座標/z座標)</b></u> ← どこのログを見ているかを表しています。
- <span style="color:#999"><u>**x.xx/h ago**</u></span> ← 何時間前に編集されたかを表しています。(「h」は「hour」の略で、日本語で「〜時間」という意味です。)
- <span style="color:#999">x.xx/h ago</span> - <span style="color:#009999"><u>**DOorDIE**</u></span> ← 編集した人を表しています。
- <span style="color:#999">x.xx/h ago</span> - <span style="color:#009999">DOorDIE</span> <u>**removed**</u> ← ブロックを取り除いたことを表しています。
- <span style="color:#999">x.xx/h ago</span> - <span style="color:#009999">DOorDIE</span> <u>**placed**</u> ← ブロックを設置したことを表しています。
- <span style="color:#999">x.xx/h ago</span> - <span style="color:#009999">DOorDIE</span> placed <span style="color:#009999"><u>**rails**</u></span> ← レールを設置したことを表しています。

ロールバックされたものは <span style="color:#999">x.xx/h ago</span> - <span style="color:#009999">~~DOorDIE~~</span> ~~placed~~ <span style="color:#009999">~~rails~~</span> のように取り消し線が引かれています。  
ページがある場合は、<b>/co l ページ数</b> でページを変えることができます。

<a id="commandlist"></a>

<a id="content_2"></a>
## コマンド一覧

<a id="content_2_4"></a>
### 一般

| コマンド | 説明 | 短縮形 |
| --- | --- | --- |
| /co inspect | ログ取得モードのON,OFF | /co i |
| /co lookup <ページ> | 取得したログのページ替え | /co l |

<a id="content_2_5"></a>
### 運営向け

| コマンド | 説明 | 短縮形 |
| --- | --- | --- |
| /co lookup <パラメータ> | 指定したパラメータでログ情報を取得 | /co l |
| /co near | 自身を中心に半径5ブロック内のログを取得<br>(多少時間がかかります) |  |
| /co rollback <パラメータ> | 指定したパラメータのログをもとに巻き戻す | /co rb |
| /co restore <パラメータ> | 指定したパラメータでrollbackした部分を戻す | /co rs |
| /co undo | rollbackまたはrestoreしたことを取り消す |  |

<a id="content_2_5_1"></a>
#### パラメータ

| パラメータ | 説明 | 例 |
| --- | --- | --- |
| u:<プレイヤー名> | プレイヤーを指定 「,」で複数指定可 | u:Steve |
| t:<時間> | 現在からの時間の範囲を指定<br>1w=1週間,1d=1日,1h=1時間,1m=1分,1s=1秒 | t:2d |
| r:<範囲> | 範囲を指定<br>10=半径10ブロック,#global=サーバー内のワールド全体,<br>#<ワールド名>=指定ワールド全体,#we=WorldEditの指定範囲 | r:#main |
| a:<行動> | 行動を指定<br>block=ブロック設置と破壊(+block=設置,-block=破壊),click=右クリック,<br>container=チェストへの出し入れ(+container=入れ,-container=出し),kill=mob殺害 | a:-block |
| b:<ブロック> | ブロックを指定 「,」で複数指定可 | b:tnt,lava |
| e:<ブロック> | ブロックを除外 「,」で複数指定可 | e:stone,dirt |
| #preview | rollbackまたはrestoreを実行する前に確認をいれる |  |
| #verbose | rollbackまたはrestore時の追加情報を表示 |  |
| #silent | rollbackまたはrestore時の情報を最小限にする |  |

例：Steveの2日前までの行動をメインワールド内の範囲で確認つきでロールバックする

> /co rb u:Steve t:2d r:#main #preview

例：Steveの10時間前までに設置した水と溶岩とそれらによって生成されたブロックをWorldEditで指定した範囲でロールバックする

> /co rb u:Steve,#water,#lava a:+block b:stone,cobblestone,obsidian,water,flowing_water,lava,flowing_lava t:10h r:#we

---

[公式コマンド一覧（英語）](http://minerealm.com/community/viewtopic.php?f=32&t=6781)

他、わからないことがございましたら運営や他の住民の方へお聞きいただけると幸いです。
