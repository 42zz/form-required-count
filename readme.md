# form-required-count
フォーム内の入力項目総数と必須項目数をカウントする

## デモ
[デモ](https://42zz.github.io/form-required-count/index.html) 

## 使い方
```
<p>残り必須項目数：<span id="remaining"></span>件</p>
<p>全体必須項目数：<span id="total"></span>件</p>
<form id="target">
<input type="text" name="your-name" required>
</form>
```

```
<script src="dist/main.bundle.js"></script>
<script src="dist/main.js"></script>
<script>
    const formInit = new reqForm(
        'フォーム要素のID',
        '必須項目数のID',
        '残り必須項目数のID'
        );
</script>
```

* フォーム内のrequired属性の数をカウントする
* ユーザーが入力したrequired属性のフィールドがあれば、全体の必須項目数から差し引く（未入力があれば加算する）
* nameの値がかぶっている場合はカウントスキップ（ラジオボタン等）
* 必須項目が埋まっていない場合はsubmitをdisabledにする


## 注意
バリデーションは行っていない。あくまで簡易的なフォーム内の必須項目数カウンタ
Formタグ内のname属性で要素のカウントを行っているのでname属性は必ず指定する。