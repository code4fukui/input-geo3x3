# input-geo3x3

地理座標を入力し、[Geo3x3](https://geo3x3.com/)形式で取得するためのインタラクティブなマップを提供するカスタムWebコンポーネント（`<input-geo3x3>`）です。

## デモ

https://code4fukui.github.io/input-geo3x3/

## 特徴

- **インタラクティブなマップ入力**: 地理的位置を視覚的に選択できるマップインターフェースを提供します。
- **Geo3x3出力**: コンポーネントの値は、マップの中心を表すGeo3x3コードになります。
- **自動精度調整**: マップのズームレベルに基づいて、Geo3x3のレベル（精度）を自動的に調整します。
- **柔軟な初期化**: 初期位置は、Geo3x3文字列、`[latitude, longitude]`配列、または`{lat, lng}`オブジェクトを使用して設定できます。

## 使い方

1. **コンポーネントのモジュールをインポートします:**

    ```html
    <script type="module" src="https://code4fukui.github.io/input-geo3x3/input-geo3x3.js"></script>
    ```

2. **HTMLに要素を追加します:**

    ```html
    <input-geo3x3 id="geo-input"></input-geo3x3>
    ```

## API

### 値の取得

現在のGeo3x3コードは、`.value`プロパティから読み取ります。ユーザーがマップをパンまたはズームするたびに`onchange`イベントが発生します。

```javascript
const geoInput = document.getElementById("geo-input");

geoInput.onchange = () => {
  console.log(geoInput.value); // 例: "E91387397"
};
```

### 値の設定

`.value`プロパティに値を代入することで、マップの位置を設定します。

```javascript
// Geo3x3文字列で設定
geoInput.value = "E91387397";

// [緯度, 経度]配列で設定
geoInput.value = [35.943521, 136.188637];

// {lat, lng}オブジェクトで設定
geoInput.value = { lat: 36.065216, lng: 136.221716 };
```

## 依存関係

このコンポーネントは、以下のモジュールをベースに構築されており、これらをインポートしています:
- [input-latlng](https://github.com/code4fukui/input-latlng)
- [Geo3x3.js](https://geo3x3.com/)

## ライセンス

MIT License
