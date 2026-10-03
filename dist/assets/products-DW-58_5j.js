/* empty css              */(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:1,name:`モイストクレンジング`,price:3e3,category:`クレンジング`,image:`../images/products/product01.jpg`,description:`うるおいを守りながら、やさしくメイクを落とします。
洗い上がりもしっとり、毎日心地よく使えるクレンジングです。`},{id:2,name:`スムースフォームウォッシュ`,price:2500,category:`洗顔`,image:`../images/products/product02.jpg`,description:`皮脂や毛穴の汚れ、肌のざらつきが気になる方に。
きめ細かな泡でやさしく洗い、すっきりとした肌に整えます。`},{id:3,name:`バランスローション`,price:3500,category:`化粧水`,image:`../images/products/product03.jpg`,description:`ベタつきや乾燥など、肌のバランスが気になる方に。
必要なうるおいを補い、すこやかで整った肌へ導きます。`},{id:4,name:`モイストローション`,price:3500,category:`化粧水`,image:`../images/products/product04.jpg`,description:`乾燥や肌のカサつきが気になる肌に、たっぷりのうるおいを。
みずみずしくなじみ、しっとりとなめらかな肌に整えます。`},{id:5,name:`センシティブローション`,price:3800,category:`化粧水`,image:`../images/products/product05.jpg`,description:`乾燥による肌のゆらぎや、刺激が気になりやすい方に。
肌にうるおいを与え、すこやかな状態を保つローションです。`},{id:6,name:`ブライトセラム`,price:4800,category:`美容液`,image:`../images/products/product06.jpg`,description:`乾燥によるくすみや、肌の明るさが気になる方に。
うるおいを与えながら、明るく透明感のある印象の肌へ。`},{id:7,name:`ポアリファイニングセラム`,price:4500,category:`美容液`,image:`../images/products/product07.jpg`,description:`毛穴の目立ちや黒ずみ、肌のざらつきが気になる方に。
うるおいを与えながら、なめらかで整った肌へ導きます。`},{id:8,name:`アクティブバランスセラム`,price:4500,category:`美容液`,image:`../images/products/product08.jpg`,description:`皮脂によるベタつきや、繰り返す肌荒れが気になる方に。
肌のうるおいと油分のバランスを整え、すこやかな肌へ。`},{id:9,name:`モイストリペアセラム`,price:5e3,category:`美容液`,image:`../images/products/product09.jpg`,description:`乾燥やカサつき、肌のごわつきが気になる方に。
うるおいをしっかり補い、しっとり柔らかな肌に整えます。`},{id:10,name:`モイスチャークリーム`,price:4200,category:`保湿クリーム`,image:`../images/products/product10.jpg`,description:`乾燥によるつっぱりや、うるおい不足が気になる肌に。
濃密なうるおいで肌を包み込み、しっとり感をキープします。`},{id:11,name:`バランシングジェル`,price:4e3,category:`保湿ジェル`,image:`../images/products/product11.jpg`,description:`皮脂によるベタつきと乾燥、どちらも気になる肌に。
軽やかなジェルでうるおいを補い、みずみずしく整えます。`},{id:12,name:`リペアナイトクリーム`,price:5500,category:`保湿クリーム`,image:`../images/products/product12.jpg`,description:`夜になると乾燥や肌のごわつきが気になる方に。
眠っている間の保湿ケアで、翌朝しっとりなめらかな肌へ。`}],t=document.querySelectorAll(`.product-detail-button`),n=document.querySelector(`#product-detail`),r=document.querySelector(`#product-modal`);t.forEach(t=>{t.addEventListener(`click`,()=>{let i=Number(t.dataset.productId),a=e.find(e=>e.id===i);a&&n&&(n.innerHTML=`
            <button id="modal-close">×</button>
            <img src="${a.image}" alt="${a.name}">
            <p><span class="category-icon">${a.category}</span></p>
            <h2>${a.name}</h2>
            <p>${a.price}円</p>
            <p>${a.description}</p>
            `,r.style.display=`flex`),document.querySelector(`#modal-close`)?.addEventListener(`click`,()=>{r.style.display=`none`})})});