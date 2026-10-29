---
title: "CrackShot"
updated: 2026-01-21T02:56:36+09:00
author: "pizzaharumaki"
seesaa: https://seesaawiki.jp/toro_server/d/CrackShot
---

このサーバーで銃の要素を実現しているプラグイン。基幹コマンドは<b>/shot</b>。  
銃に限らず、爆弾や落雷も実装している。

<a id="content_1"></a>
## 目次

- [目次](#content_1)
- [コマンド](#content_2)
- [銃の一覧](#content_3)
- [カスタム重火器](#content_4)
  - [役立つ資料](#content_4_1)
  - [簡単なサンプル](#content_4_2)

<a id="content_2"></a>
## コマンド

<b>/shot list</b>  
銃のIDを一覧表示する

<b>/shot get 銃のID</b>  
銃を取得する

<a id="content_3"></a>
## 銃の一覧

<table>
<tr><th>ID</th><th>名前</th><th>概要</th></tr>
<tr><td>gauss</td><td>Gauss Shotgun</td><td>ポンプアクションショットガン</td></tr>
<tr><td>carbine</td><td>Carbine</td><td>グレネードランチャー付きアサルトライフル</td></tr>
<tr><td>deagle</td><td>Desert Eagle</td><td>二刀流ピストル</td></tr>
<tr><td>bazooka</td><td>Bazooka</td><td>ロケットランチャー</td></tr>
<tr><td>python</td><td>Python</td><td>タクティカルナイフ付きリボルバー</td></tr>
<tr><td>riotshield</td><td>Riot Shield</td><td>プロテクションデバイス</td></tr>
<tr><td>olympia</td><td>Olympia</td><td>中折式ショットガン</td></tr>
<tr><td>hunting</td><td>Hunting Rifle</td><td>ボルトアクションライフル</td></tr>
<tr><td>type95</td><td>Type 95</td><td>アサルトライフル</td></tr>
<tr><td>ak-47</td><td>AK-47</td><td>アサルトライフル</td></tr>
<tr><td>flashbang</td><td>Flashbang</td><td>手榴弾</td></tr>
<tr><td>toaster</td><td>toaster</td><td>焼夷地雷</td></tr>
<tr><td>airstrike</td><td>Harrier Strike</td><td>精密な空爆</td></tr>
<tr><td>putty</td><td>Putty</td><td>遠隔爆発物</td></tr>
<tr><td>c4</td><td>C4</td><td>遠隔爆発物</td></tr>
<tr><td>trinket</td><td>Trinket</td><td>ブービートラップ</td></tr>
<tr><td>cocopops</td><td>CocoPops</td><td>クラスター爆弾</td></tr>
<tr><td colspan="3" style="background-color:#cccccc">カスタム重火器</td></tr>
<tr><td>glock17</td><td>Glock 17</td><td>自動拳銃</td></tr>
</table>

<a id="content_4"></a>
## カスタム重火器

CrackShotプラグインでは文字さえ打てれば自分でパラメーターなどをいじった銃を作成することができます。  
より詳細な手順は[公式の説明(英語)](https://github.com/Shampaggon/CrackShot/wiki/The-Complete-Guide-to-CrackShot)を読んでみましょう。  
完成品は拡張子を<b>.yml</b>にしてAdminの人に「<b>/plugins/crackshot/weapons</b>にこのファイルを追加してくださいませんか？」とお願いしてみましょう。

<a id="content_4_1"></a>
### 役立つ資料

**アイテムID**  
<https://www.minecraftinfo.com/IDList.htm>

**サウンドID**  
<https://github.com/Shampaggon/CrackShot/wiki/List-of-Accepted-Sounds>

<a id="content_4_2"></a>
### 簡単なサンプル

YMLにおいて、trueは真(肯定)・falseは偽(否定)を表します  
もっと設定できる項目はあります。詳しくは公式ドキュメントで。

```
ExamplePistol:
    Item_Information:
        Item_Name: "&eチュートリアル用銃"
        Item_Type: 417 #アイテムID
        Item_Lore: "&e1行目の説明がこれになり、|&e2行目の説明がここになります。|&e改行は増やせます。"
        Sounds_Acquired: BAT_TAKEOFF-1-1-0 #サウンドID-ボリューム-ピッチ-遅延
    Shooting:
        Dual_Wield: false #二刀流？
        Right_Click_To_Shoot: false #右クリで射撃する？
        Cancel_Left_Click_Block_Damage: true #左クリックでブロックを破壊しないようにする？
        Cancel_Right_Click_Interactions: true #右クリックでアイテムを動かさないようにする？
        Delay_Between_Shots: 0 #発射ごとの遅延
        Recoil_Amount: 1 #反動の強さ
        Projectile_Amount: 1 #発射する数
        Projectile_Type: snowball #弾 (使用可能：snowball/arrow/egg/grenade/flare/fireball/witherskull/energy/splash)
        Projectile_Speed: 5 #発射速度
        Projectile_Flames: false #弾は燃えながら飛ぶ？ (snowball/egg/arrow/splashだけ)
        Projectile_Incendiary:
            Enable: false #被弾したらついでに燃える？
            Duration: 60 #何ティック燃える？
        Projectile_Damage: 2 #被弾ダメージ
        Bullet_Spread: 2 #弾の速度
    Reload:
        Enable: true
        Reload_Amount: 18 #装填できる数
        Reload_Bullets_Individually: false #弾を1個ずつ装填する？
        Reload_Duration: 10 #リロード間隔
        Destroy_When_Empty: false #リロードを禁止し、弾切れで壊れるようにする？
        Sounds_Reloading: さっきと同じ構文 #リロード時の音
```
