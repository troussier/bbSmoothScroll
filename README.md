# bbSmoothScroll## 概要下記の特徴を持ったスムーズスクロールプラグインです。- スムーズスクロール中にマウスボタンやキーボードなどの操作を行うとスクロールがキャンセルされます。- ストップする位置を決めることが出来ます。- ロケーションバーのURIにハッシュを付与するかしないか選べます。## 使い方```$('.scroll').bbSmoothScroll();``````<a href="#jumpto" class="scroll">FIRE<a>```## オプション    duration: 800 //integer。単位ms。スムーズスクロールの持続時間    padding: 0 //integer。単位px。ターゲットからの距離    pushHash: true //boolean。ロケーションバーのURIにハッシュを付与するかしないか## data属性による操作### スピード: data-bbss-duration```<a href="#jumpto" class="scroll" data-bbss-duration="3000">3000msかけてスクロールします。<a>```### 位置: data-bbss-padding```<a href="#jumpto" class="scroll" data-bbss-padding="200">ターゲット要素の200px上で止まります。<a><a href="#jumpto" class="scroll" data-bbss-padding="-100">ターゲット要素の100px下で止まります。<a>```### ハッシュの付与: data-bbss-push-hash```<a href="#jumpto" class="scroll" data-bbss-push-hash="1">ロケーションバーのURIに"#jumpto"を付与します。<a><a href="#jumpto" class="scroll" data-bbss-push-hash="0">ロケーションバーのURIに"#jumpto"を付与しません。<a>```## TODO- 例外的にスムーズスクロールさせない機能- 他ページから遷移して来たときの対応