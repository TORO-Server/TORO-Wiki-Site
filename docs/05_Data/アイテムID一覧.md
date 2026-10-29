---
title: "アイテムID一覧"
updated: 2020-04-27T00:09:36+09:00
author: "barusugan_pocketkie"
seesaa: https://seesaawiki.jp/toro_server/d/%a5%a2%a5%a4%a5%c6%a5%e0ID%b0%ec%cd%f7
---

**/iinfo**で手に持っているアイテムのIDを調べられます。  
  
**目次**  
  

* [ブロックID一覧 1.12.2版](#content_1)
  + [ジャンル一覧](#content_1_1)
  + [一覧](#content_1_2)
  + [データ値](#content_1_3)
    - [石](#content_1_3_1)
    - [土](#content_1_3_2)
    - [木材](#content_1_3_3)
    - [苗木](#content_1_3_4)
    - [砂](#content_1_3_5)
    - [原木](#content_1_3_6)
    - [葉](#content_1_3_7)
    - [スポンジ](#content_1_3_8)
    - [砂岩](#content_1_3_9)
    - [草](#content_1_3_10)
    - [花](#content_1_3_11)
    - [重ねた石ハーフ](#content_1_3_12)
    - [石ハーフ](#content_1_3_13)
    - [石レンガ](#content_1_3_14)
    - [重ねた木材ハーフ](#content_1_3_15)
    - [木材ハーフ](#content_1_3_16)
    - [丸石の壁](#content_1_3_17)
    - [ネザー水晶ブロック](#content_1_3_18)
    - [アカシアの葉](#content_1_3_19)
    - [アカシアの原木](#content_1_3_20)
    - [プリズマリン](#content_1_3_21)
    - [大きな花](#content_1_3_22)
    - [赤い砂岩](#content_1_3_23)
    - [重ねた赤い砂岩ハーフ](#content_1_3_24)
    - [赤い砂岩ハーフ](#content_1_3_25)
    - [プルプァハーフ](#content_1_3_26)
    - [色](#content_1_3_27)
* [アイテムID一覧 1.12.2版](#content_2)
  + [一覧](#content_2_4)

  
  

<a id="content_1"></a>
### ブロックID一覧 1.12.2版

ブロック名に「S」がついているものは、[データ値](#data)を指定して種類を変えることができます。

<a id="content_1_1"></a>
#### ジャンル一覧

検索する際に入力してみてください。

| ジャンル名 | 説明 |
| --- | --- |
| 自然 | 自然を感じさせるもの |
| 木 | 木や木で構成されたもの |
| 石 | 石や石で構成されたもの |
| RS | レッドストーン関係 |
| 落下 | 落下するもの |
| 光 | 光源になるもの |
| 装飾 | 飾り付けに良さそうなもの |
| 右 | 右クリックで反応するもの |
| ネザー | ネザーによくあるもの |
| エンド | エンドによくあるもの |

<a id="content_1_2"></a>
#### 一覧

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 数字ID | ブロック名 | 文字ID | ジャンル |
| --- | --- | --- | --- |
| 0 | 空気 | air | 自然 |
| 1 | 石 [S](#stone) | stone | 自然 石 |
| 2 | 草ブロック | grass | 自然 |
| 3 | 土 [S](#dirt) | dirt | 自然 |
| 4 | 丸石 | cobblestone | 石 |
| 5 | オークの木材 [S](#planks) | planks | 木 |
| 6 | オークの苗木 [S](#sapling) | sapling | 自然 装飾 木 |
| 7 | 岩盤 | bedrock | 自然 石 |
| 8 | 水流 S | flowing\_water | 自然 落下 |
| 9 | 水 S | water | 自然 落下 |
| 10 | 溶岩流 S | flowing\_lava | 自然 落下 光 |
| 11 | 溶岩 S | lava | 自然 落下 光 |
| 12 | 砂 [S](#sand) | sand | 自然 落下 |
| 13 | 砂利 | gravel | 自然 落下 |
| 14 | 金鉱石 | gold\_ore | 自然 石 |
| 15 | 鉄鉱石 | iron\_ore | 自然 石 |
| 16 | 石炭鉱石 | coal\_ore | 自然 石 |
| 17 | 原木 [S](#log) | log | 自然 木 |
| 18 | 葉 [S](#leaves) | leaves | 自然 木 |
| 19 | スポンジ [S](#sponge) | sponge |  |
| 20 | ガラス | glass | 装飾 |
| 21 | ラピスラズリ鉱石 | lapis\_ore | 自然 石 |
| 22 | ラピスラズリブロック | lapis\_block | 石 装飾 |
| 23 | ディスペンサー S | dispenser | RS 右 |
| 24 | 砂岩 [S](#sandstone) | sandstone | 自然 石 |
| 25 | 音符ブロック | note\_block | RS 右 |
| 26 | ベッド S | bed | 装飾 右 |
| 27 | パワードレール S | golden\_rail | RS |
| 28 | ディテクターレール S | detector\_rail | RS |
| 29 | 粘着ピストン S | sticky\_piston | RS |
| 30 | クモの巣 | web | 装飾 |
| 31 | 草 [S](#tallgrass) | tallgrass | 自然 装飾 |
| 32 | 枯れ木 | deadbush | 自然 装飾 木 |
| 33 | ピストン S | piston | RS |
| 34 | ピストン移動部 S | piston\_head | RS |
| 35 | 羊毛 [S](#color) | wool | 装飾 |
| 36 | ピストンで動かされたブロック ? | piston\_extension |  |
| 37 | タンポポ | yellow\_flower | 自然 装飾 |
| 38 | ポピー [S](#red_flower) | red\_flower | 自然 装飾 |
| 39 | 茶キノコ | brown\_mushroom | 自然 装飾 |
| 40 | 赤キノコ | red\_mushroom | 自然 装飾 |
| 41 | 金ブロック | gold\_block | 石 装飾 |
| 42 | 鉄ブロック | iron\_block | 石 装飾 |
| 43 | 重ねた石ハーフブロック [S](#double_stone_slab) | double\_stone\_slab | 石 装飾 |
| 44 | 石ハーフブロック [S](#stone_slab) | stone\_slab | 石 装飾 |
| 45 | レンガブロック | brick\_block | 石 |
| 46 | TNT | tnt | RS |
| 47 | 本棚 | bookshelf | 装飾 木 |
| 48 | 苔石 | mossy\_cobblestone | 石 自然 |
| 49 | 黒曜石 | obsidian | 石 |
| 50 | 松明 S | torch | 装飾 木 光 |
| 51 | 炎 S | fire | 装飾 光 |
| 52 | モンスタースポナー ? | mob\_spawner |  |
| 53 | オークの階段 S | oak\_stairs | 装飾 木 |
| 54 | チェスト S | chest | 装飾 木 右 |
| 55 | レッドストーン回路 S | redstone\_wire | RS |
| 56 | ダイヤモンド鉱石 | diamond\_ore | 石 自然 |
| 57 | ダイヤモンドブロック | diamond\_block | 石 装飾 |
| 58 | 作業台 | crafting\_table | 装飾 木 右 |
| 59 | 小麦 S | wheat | 自然 |
| 60 | 耕地 S | farmland | 自然 |
| 61 | かまど S | furnace | 装飾 石 右 |
| 62 | 燃焼中のかまど S | lit\_furnace | 装飾 石 右 光 |
| 63 | 立て看板 S | standing\_sign | 装飾 木 |
| 64 | オークのドア S | wooden\_door | 装飾 RS 木 右 |
| 65 | 梯子 S | ladder | 装飾 木 |
| 66 | レール S | rail | 装飾 |
| 67 | 丸石の階段 S | stone\_stairs | 石 装飾 |
| 68 | 壁看板 S | wall\_sign | 装飾 木 |
| 69 | レバー S | lever | RS 右 |
| 70 | 石の感圧版 S | stone\_pressure\_plate | RS |
| 71 | 鉄のドア S | iron\_door | 装飾 RS |
| 72 | 木の感圧版 S | wooden\_pressure\_plate | RS 木 |
| 73 | レッドストーン鉱石 | redstone\_ore | 石 自然 |
| 74 | 光るレッドストーン鉱石 | lit\_redstone\_ore | 石 自然 光 |
| 75 | レッドストーントーチ(off) S | unlit\_redstone\_torch | RS |
| 76 | レッドストーントーチ(on) S | redstone\_torch | RS 光 |
| 77 | 石のボタン S | stone\_button | RS |
| 78 | 雪(層) S | snow\_layer | 自然 装飾 |
| 79 | 氷 | ice | 自然 装飾 |
| 80 | 雪 | snow | 自然 |
| 81 | サボテン S | cactus | 自然 |
| 82 | 粘土 | clay | 自然 |
| 83 | サトウキビ S | reeds | 自然 |
| 84 | ジュークボックス S | jukebox | 装飾 右 |
| 85 | オークのフェンス | fence | 装飾 木 |
| 86 | カボチャ S | pumpkin | 自然 装飾 |
| 87 | ネザーラック | netherrack | ネザー |
| 88 | ソウルサンド | soul\_sand | ネザー |
| 89 | グロウストーン | glowstone | 装飾 ネザー 光 |
| 90 | ネザーポータル | portal | 装飾 ネザー 光 |
| 91 | ジャック・オ・ランタン S | lit\_pumpkin | 装飾 光 |
| 92 | ケーキ S | cake | 装飾 右 |
| 93 | レッドストーンリピーター(off) S | unpowered\_repeater | RS 右 |
| 94 | レッドストーンリピーター(on) S | powered\_repeater | RS 右 |
| 95 | 色付きガラス [S](#color) | stained\_glass | 装飾 |
| 96 | トラップドア S | trapdoor | 装飾 RS 木 右 |
| 97 | シルバーフィッシュ入りのブロック S | monster\_egg | 石 |
| 98 | 石レンガ [S](#stonebrick) | stonebrick | 石 |
| 99 | 茶キノコ(ブロック) S | brown\_mushroom\_block | 自然 |
| 100 | 赤キノコ(ブロック) S | red\_mushroom\_block | 自然 |
| 101 | 鉄格子 | iron\_bars | 装飾 |
| 102 | 板ガラス | glass\_pane | 装飾 |
| 103 | スイカ | melon\_block | 自然 |
| 104 | カボチャの茎 S | pumpkin\_stem | 自然 |
| 105 | スイカの茎 S | melon\_stem | 自然 |
| 106 | つる S | vine | 自然 装飾 |
| 107 | フェンスゲート S | fence\_gate | 装飾 RS 木 右 |
| 108 | レンガの階段 S | brick\_stairs | 石 装飾 |
| 109 | 石レンガの階段 S | stone\_brick\_stairs | 石 装飾 |
| 110 | 菌糸 | mycelium | 自然 |
| 111 | スイレンの葉 | waterlily | 自然 装飾 |
| 112 | ネザーレンガ | nether\_brick | ネザー |
| 113 | ネザーレンガフェンス | nether\_brick\_fence | 装飾 ネザー |
| 114 | ネザーレンガの階段 S | nether\_brick\_stairs | 装飾 ネザー |
| 115 | ネザーウォート S | nether\_wart | 自然 ネザー |
| 116 | エンチャントテーブル | enchanting\_table | 装飾 右 |
| 117 | 醸造台 | brewing\_stand | 装飾 右 光 |
| 118 | 大釜 | cauldron | 装飾 右 |
| 119 | エンドポータル | end\_portal | エンド 光 |
| 120 | エンドポータルブロック S | end\_portal\_block | エンド 右 光 |
| 121 | エンドストーン | end\_stone | エンド |
| 122 | ドラゴンの卵 | dragon\_egg | エンド 落下 光 |
| 123 | レッドストーンランプ(off) | redstone\_lamp | RS |
| 124 | レッドストーンランプ(on) | lit\_redstone\_lamp | RS 光 |
| 125 | 重ねた木材ハーフブロック [S](#double_wooden_slab) | double\_wooden\_slab | 装飾 木 |
| 126 | 木材ハーフブロック [S](#wooden_slab) | wooden\_slab | 装飾 木 |
| 127 | カカオの実 S | cocoa | 自然 |
| 128 | 砂岩の階段 S | sandstone\_stairs | 装飾 石 |
| 129 | エメラルド鉱石 | emerald\_ore | 自然 石 |
| 130 | エンダーチェスト S | ender\_chest | 装飾 右 光 |
| 131 | トリップワイヤーフック S | tripwire\_hook | 装飾 RS |
| 132 | トリップワイヤー S | tripwire | 装飾 RS |
| 133 | エメラルドブロック | emerald\_block | 石 装飾 |
| 134 | マツの木の階段 S | spruce\_stairs | 装飾 木 |
| 135 | シラカバの木の階段 S | birch\_stairs | 装飾 木 |
| 136 | ジャングルの木の階段 S | jungle\_stairs | 装飾 木 |
| 137 | コマンドブロック S | command\_block | RS 右 |
| 138 | ビーコン | beacon | 装飾 右 光 |
| 139 | 丸石の壁 [S](#cobblestone_wall) | cobblestone\_wall | 石 装飾 |
| 140 | 植木鉢 S | flower\_pot | 装飾 右 |
| 141 | ニンジン S | carrots | 自然 |
| 142 | ジャガイモ S | potatoes | 自然 |
| 143 | 木のボタン | wooden\_button | RS 木 右 |
| 144 | Mobの頭 S | skull | 装飾 |
| 145 | 金床 S | anvil | 装飾 右 落下 |
| 146 | トラップチェスト S | trapped\_chest | 装飾 RS 木 右 |
| 147 | 重量感圧板(軽) S | light\_weighted\_pressure\_plate | RS |
| 148 | 重量感圧板(重) S | heavy\_weighted\_pressure\_plate | RS |
| 149 | レッドストーンコンパレーター(off) S | unpowered\_comparator | RS 右 |
| 150 | レッドストーンコンパレーター(on) S | powered\_comparator | RS 右 |
| 151 | 日照センサー | daylight\_detector | RS 右 |
| 152 | レッドストーンブロック | redstone\_block | 石 装飾 RS |
| 153 | ネザー水晶鉱石 | quartz\_ore | 石 ネザー |
| 154 | ホッパー S | hopper | 装飾 RS 右 |
| 155 | ネザー水晶ブロック [S](#quartz_block) | quartz\_block | 石 装飾 ネザー |
| 156 | ネザー水晶の階段 S | quartz\_stairs | 石 装飾 ネザー |
| 157 | アクティベーターレール S | activator\_rail | RS |
| 158 | ドロッパー S | dropper | RS 右 |
| 159 | 色付き粘土 [S](#color) | stained\_hardened\_clay | 装飾 |
| 160 | 色付き板ガラス [S](#color) | stained\_glass\_pane | 装飾 |
| 161 | アカシアの葉 [S](#leaves2) | leaves2 | 自然 木 |
| 162 | アカシアの原木 [S](#log2) | log2 | 自然 木 |
| 163 | アカシアの木の階段 S | acacia\_stairs | 装飾 木 |
| 164 | ダークオークの木の階段 S | dark\_oak\_stairs | 装飾 木 |
| 165 | スライムブロック | slime |  |
| 166 | バリアブロック | barrier |  |
| 167 | 鉄のトラップドア S | iron\_trapdoor | 装飾 RS |
| 168 | プリズマリン [S](#prismarine) | prismarine |  |
| 169 | シーランタン | sea\_lantern | 装飾 光 |
| 170 | 干草の俵 | hay\_block | 装飾 |
| 171 | カーペット [S](#color) | carpet | 装飾 |
| 172 | 堅焼き粘土 | hardened\_clay |  |
| 173 | 石炭ブロック | coal\_block | 石 装飾 |
| 174 | 氷塊 | packed\_ice | 自然 |
| 175 | 大きな花 [S](#double_plant) | double\_plant | 自然 装飾 |
| 176 | 立て旗 S | standing\_banner | 装飾 |
| 177 | 壁旗 S | wall\_banner | 装飾 |
| 178 | 日照センサー(逆) | daylight\_detector\_inverted | RS 右 |
| 179 | 赤い砂岩 [S](#red_sandstone) | red\_sandstone | 石 |
| 180 | 赤い砂岩の階段 S | red\_sandstone\_stairs | 石 装飾 |
| 181 | 重ねた赤い砂岩ハーフブロック [S](#double_stone_slab2) | double\_stone\_slab2 | 石 装飾 |
| 182 | 赤い砂岩ハーフブロック [S](#stone_slab2) | stone\_slab2 | 石 装飾 |
| 183 | マツのフェンスゲート S | spruce\_fence\_gate | 装飾 RS 木 右 |
| 184 | シラカバのフェンスゲート S | birch\_fence\_gate | 装飾 RS 木 右 |
| 185 | ジャングルのフェンスゲート S | jungle\_fence\_gate | 装飾 RS 木 右 |
| 186 | ダークオークのフェンスゲート S | dark\_oak\_fence\_gate | 装飾 RS 木 右 |
| 187 | アカシアのフェンスゲート S | acacia\_fence\_gate | 装飾 RS 木 右 |
| 188 | マツのフェンス | spruce\_fence | 装飾 木 |
| 189 | シラカバのフェンス | birch\_fence | 装飾 木 |
| 190 | ジャングルのフェンス | jungle\_fence | 装飾 木 |
| 191 | ダークオークのフェンス | dark\_oak\_fence | 装飾 木 |
| 192 | アカシアのフェンス | acacia\_fence | 装飾 木 |
| 193 | マツのドア S | spruce\_door | 装飾 RS 木 右 |
| 194 | シラカバのドア S | birch\_door | 装飾 RS 木 右 |
| 195 | ジャングルのドア S | jungle\_door | 装飾 RS 木 右 |
| 196 | アカシアのドア S | acacia\_door | 装飾 RS 木 右 |
| 197 | ダークオークのドア S | dark\_oak\_door | 装飾 RS 木 右 |
| 198 | エンドロッド S | end\_rod | 装飾 エンド 光 |
| 199 | コーラスプラント | chorus\_plant | 自然 エンド |
| 200 | コーラスフラワー | chorus\_flower | 自然 エンド |
| 201 | プルプァブロック | purpur\_block | エンド |
| 202 | 柱プルプァブロック S | purpur\_pillar | エンド |
| 203 | プルプァの階段 S | purpur\_stairs | エンド |
| 204 | 重ねたプルプァハーフブロック S | purpur\_block\_slab2 | エンド |
| 205 | プルプァハーフブロック [S](#purpur_block_slab) | purpur\_block\_slab | エンド |
| 206 | エンドストーンレンガ | end\_bricks | エンド |
| 207 | ビートルート S | beetroots | 自然 |
| 208 | 草の道 | grass\_path | 装飾 自然 |
| 209 | エンドゲートウェイ | end\_gateway | エンド 光 |
| 210 | リピートコマンドブロック S | repeating\_command\_block | RS 右 |
| 211 | チェーンコマンドブロック S | chain\_command\_block | RS 右 |
| 212 | 薄氷 S | frosted\_ice | 自然 |
| 213 | マグマブロック | magma | ネザー 光 |
| 214 | ネザーウォートブロック | nether\_wart\_block | ネザー |
| 215 | 赤いネザーレンガ | red\_nether\_brick | ネザー |
| 216 | 骨ブロック S | bone\_block |  |
| 217 | ストラクチャーヴォイド | structure\_void |  |
| 218 | オブザーバー S | observer | RS |
| 219 | 白シュルカーボックス S | white\_shulker\_box | 装飾 右 |
| 220 | 橙シュルカーボックス S | orange\_shulker\_box | 装飾 右 |
| 221 | 赤紫シュルカーボックス S | magenta\_shulker\_box | 装飾 右 |
| 222 | 空シュルカーボックス S | light\_blue\_shulker\_box | 装飾 右 |
| 223 | 黄シュルカーボックス S | yellow\_shulker\_box | 装飾 右 |
| 224 | 黄緑シュルカーボックス S | lime\_shulker\_box | 装飾 右 |
| 225 | 桃シュルカーボックス S | pink\_shulker\_box | 装飾 右 |
| 226 | 灰シュルカーボックス S | gray\_shulker\_box | 装飾 右 |
| 227 | 薄灰シュルカーボックス S | silver\_shulker\_box | 装飾 右 |
| 228 | 青緑シュルカーボックス S | cyan\_shulker\_box | 装飾 右 |
| 229 | 紫シュルカーボックス S | purple\_shulker\_box | 装飾 右 |
| 230 | 青シュルカーボックス S | blue\_shulker\_box | 装飾 右 |
| 231 | 茶シュルカーボックス S | brown\_shulker\_box | 装飾 右 |
| 232 | 緑シュルカーボックス S | green\_shulker\_box | 装飾 右 |
| 233 | 赤シュルカーボックス S | red\_shulker\_box | 装飾 右 |
| 234 | 黒シュルカーボックス S | black\_shulker\_box | 装飾 右 |
| 235 | 白彩釉テラコッタ S | white\_glazed\_terracotta | 装飾 |
| 236 | 橙彩釉テラコッタ S | orange\_glazed\_terracotta | 装飾 |
| 237 | 赤紫彩釉テラコッタ S | magenta\_glazed\_terracotta | 装飾 |
| 238 | 空彩釉テラコッタ S | light\_blue\_glazed\_terracotta | 装飾 |
| 239 | 黄彩釉テラコッタ S | yellow\_glazed\_terracotta | 装飾 |
| 240 | 黄緑彩釉テラコッタ S | lime\_glazed\_terracotta | 装飾 |
| 241 | 桃彩釉テラコッタ S | pink\_glazed\_terracotta | 装飾 |
| 242 | 灰彩釉テラコッタ S | gray\_glazed\_terracotta | 装飾 |
| 243 | 薄灰彩釉テラコッタ S | light\_gray\_glazed\_terracotta | 装飾 |
| 244 | 青緑彩釉テラコッタ S | cyan\_glazed\_terracotta | 装飾 |
| 245 | 紫彩釉テラコッタ S | purple\_glazed\_terracotta | 装飾 |
| 246 | 青彩釉テラコッタ S | blue\_glazed\_terracotta | 装飾 |
| 247 | 茶彩釉テラコッタ S | brown\_glazed\_terracotta | 装飾 |
| 248 | 緑彩釉テラコッタ S | green\_glazed\_terracotta | 装飾 |
| 249 | 赤彩釉テラコッタ S | red\_glazed\_terracotta | 装飾 |
| 250 | 黒彩釉テラコッタ S | black\_glazed\_terracotta | 装飾 |
| 251 | コンクリート [S](#color) | concrete | 石 |
| 252 | コンクリートパウダー [S](#color) | concrete\_powder | 落下 |
| 253 | なし |  |  |
| 254 | なし |  |  |
| 255 | ストラクチャーブロック S | structure\_block | 右 |

<a id="content_1_3"></a>
#### データ値

<a id="content_1_3_1"></a>
##### 石

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | 石 |
| 1 | 花崗岩 |
| 2 | 磨かれた花崗岩 |
| 3 | 閃緑岩 |
| 4 | 磨かれた閃緑岩 |
| 5 | 安山岩 |
| 6 | 磨かれた安山岩 |

<a id="content_1_3_2"></a>
##### 土

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | 土 |
| 1 | 粗い土 |
| 2 | ポドゾル |

<a id="content_1_3_3"></a>
##### 木材

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | オークの木材 |
| 1 | マツの木材 |
| 2 | シラカバの木材 |
| 3 | ジャングルの木材 |
| 4 | アカシアの木材 |
| 5 | ダークオークの木材 |

<a id="content_1_3_4"></a>
##### 苗木

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | オークの苗木 |
| 1 | マツの苗木 |
| 2 | シラカバの苗木 |
| 3 | ジャングルの苗木 |
| 4 | アカシアの苗木 |
| 5 | ダークオークの苗木 |

<a id="content_1_3_5"></a>
##### 砂

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | 砂 |
| 1 | 赤砂 |

<a id="content_1_3_6"></a>
##### 原木

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | オークの原木 |
| 1 | マツの原木 |
| 2 | シラカバの原木 |
| 3 | ジャングルの原木 |

<a id="content_1_3_7"></a>
##### 葉

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | オークの葉 |
| 1 | マツの葉 |
| 2 | シラカバの葉 |
| 3 | ジャングルの葉 |

<a id="content_1_3_8"></a>
##### スポンジ

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | スポンジ |
| 1 | 濡れたスポンジ |

<a id="content_1_3_9"></a>
##### 砂岩

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | 砂岩 |
| 1 | 模様砂岩 |
| 2 | 滑らかな砂岩 |

<a id="content_1_3_10"></a>
##### 草

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | 枯れ木 |
| 1 | 草 |
| 2 | シダ |

<a id="content_1_3_11"></a>
##### 花

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | ポピー |
| 1 | ヒスイラン |
| 2 | レンゲソウ |
| 3 | ヒナソウ |
| 4 | 赤色のチューリップ |
| 5 | 橙色のチューリップ |
| 6 | 白色のチューリップ |
| 7 | 桃色のチューリップ |
| 8 | フランスギク |

<a id="content_1_3_12"></a>
##### 重ねた石ハーフ

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | 石ハーフ |
| 1 | 砂岩ハーフ |
| 2 | 木材(石)ハーフ |
| 3 | 丸石ハーフ |
| 4 | レンガハーフ |
| 5 | 石レンガハーフ |
| 6 | ネザーレンガハーフ |
| 7 | ネザー水晶ハーフ |
| 8 | 滑らかな石ハーフ |
| 9 | 滑らかな砂岩ハーフ |
| 15 | 滑らかなネザー水晶ハーフ |

<a id="content_1_3_13"></a>
##### 石ハーフ

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | 石ハーフ |
| 1 | 砂岩ハーフ |
| 2 | 木材(石)ハーフ |
| 3 | 丸石ハーフ |
| 4 | レンガハーフ |
| 5 | 石レンガハーフ |
| 6 | ネザーレンガハーフ |
| 7 | ネザー水晶ハーフ |
| 8 | 上石ハーフ |
| 9 | 上砂岩ハーフ |
| 10 | 上木材(石)ハーフ |
| 11 | 上丸石ハーフ |
| 12 | 上レンガハーフ |
| 13 | 上石レンガハーフ |
| 14 | 上ネザーレンガハーフ |
| 15 | 上ネザー水晶ハーフ |

<a id="content_1_3_14"></a>
##### 石レンガ

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | 石レンガ |
| 1 | 苔石レンガ |
| 2 | ひび石レンガ |
| 3 | 模様石レンガ |

<a id="content_1_3_15"></a>
##### 重ねた木材ハーフ

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | オークの木材ハーフ |
| 1 | マツの木材ハーフ |
| 2 | シラカバの木材ハーフ |
| 3 | ジャングルの木材ハーフ |
| 4 | アカシアの木材ハーフ |
| 5 | ダークオークの木材ハーフ |

<a id="content_1_3_16"></a>
##### 木材ハーフ

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | オークの木材ハーフ |
| 1 | マツの木材ハーフ |
| 2 | シラカバの木材ハーフ |
| 3 | ジャングルの木材ハーフ |
| 4 | アカシアの木材ハーフ |
| 5 | ダークオークの木材ハーフ |
| 8 | 上オークの木材ハーフ |
| 9 | 上マツの木材ハーフ |
| 10 | 上シラカバの木材ハーフ |
| 11 | 上ジャングルの木材ハーフ |
| 12 | 上アカシアの木材ハーフ |
| 13 | 上ダークオークの木材ハーフ |

<a id="content_1_3_17"></a>
##### 丸石の壁

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | 丸石の壁 |
| 1 | 苔丸石の壁 |

<a id="content_1_3_18"></a>
##### ネザー水晶ブロック

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | ネザー水晶 |
| 1 | 模様ネザー水晶 |
| 2 | 上下柱ネザー水晶 |
| 3 | 南北柱ネザー水晶 |
| 4 | 東西柱ネザー水晶 |

<a id="content_1_3_19"></a>
##### アカシアの葉

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | アカシアの葉 |
| 1 | ダークオークの葉 |

<a id="content_1_3_20"></a>
##### アカシアの原木

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | アカシアの原木 |
| 1 | ダークオークの原木 |

<a id="content_1_3_21"></a>
##### プリズマリン

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | プリズマリン |
| 1 | プリズマリンレンガ |
| 2 | ダークプリズマリン |

<a id="content_1_3_22"></a>
##### 大きな花

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | ヒマワリ |
| 1 | ライラック |
| 2 | 高い草 |
| 3 | 高いシダ |
| 4 | バラ |
| 5 | ボタン |

<a id="content_1_3_23"></a>
##### 赤い砂岩

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | 赤い砂岩 |
| 1 | 模様赤い砂岩 |
| 2 | 滑らかな赤い砂岩 |

<a id="content_1_3_24"></a>
##### 重ねた赤い砂岩ハーフ

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | 赤い砂岩ハーフ |
| 8 | 滑らかな赤い砂岩ハーフ |

<a id="content_1_3_25"></a>
##### 赤い砂岩ハーフ

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | 赤い砂岩ハーフ |
| 8 | 上赤い砂岩ハーフ |

<a id="content_1_3_26"></a>
##### プルプァハーフ

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | アイテム名 |
| --- | --- |
| 0 | プルプァハーフ |
| 8 | 上プルプァハーフ |

<a id="content_1_3_27"></a>
##### 色

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 値 | 色 |
| --- | --- |
| 0 | 白 |
| 1 | 橙 |
| 2 | 赤紫 |
| 3 | 空 |
| 4 | 黄 |
| 5 | 黄緑 |
| 6 | 桃 |
| 7 | 灰 |
| 8 | 薄灰 |
| 9 | 青緑 |
| 10 | 紫 |
| 11 | 青 |
| 12 | 茶 |
| 13 | 緑 |
| 14 | 赤 |
| 15 | 黒 |

<a id="content_2"></a>
### アイテムID一覧 1.12.2版

<a id="content_2_4"></a>
#### 一覧

![](../attachments/386696e9903dfdfe8057eaf0b13380d0.gif)

| 数字ID | アイテム名 | 文字ID | ジャンル |
| --- | --- | --- | --- |
| 256 | 鉄のシャベル | iron\_shovel |  |
|  |  |  |  |

  

---

参考サイト: [Minecraft Wiki日本語版](https://minecraft-ja.gamepedia.com/Java_Edition%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E5%80%A4/%E5%B9%B3%E5%9D%A6%E5%8C%96%E5%89%8D) , [Minecraft ID List](https://minecraft-ids.grahamedgecombe.com/)