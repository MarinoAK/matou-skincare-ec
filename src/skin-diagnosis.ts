import { skinTypes } from "./skinTypes";
import { products } from "./products";

const startButton = document.querySelector("#start-diagnosis");
const diagnosisIntro = document.querySelector("#diagnosis-intro");

//各質問
const diagnosisQuestion1 = document.querySelector("#diagnosis-question1");
const diagnosisQuestion2a = document.querySelector("#diagnosis-question2a");
const diagnosisQuestion2b = document.querySelector("#diagnosis-question2b");
const diagnosisQuestion3a = document.querySelector("#diagnosis-question3a");
const diagnosisQuestion3b = document.querySelector("#diagnosis-question3b");
const diagnosisQuestion3c = document.querySelector("#diagnosis-question3c");

// Q1の回答ボタン
const answerYes1 = diagnosisQuestion1?.querySelector(".answer-yes");
const answerNo1 = diagnosisQuestion1?.querySelector(".answer-no");

// Q2-Aの回答ボタン
const answerYes2a = diagnosisQuestion2a?.querySelector(".answer-yes");
const answerNo2a = diagnosisQuestion2a?.querySelector(".answer-no");

// Q2-Bの回答ボタン
const answerYes2b = diagnosisQuestion2b?.querySelector(".answer-yes");
const answerNo2b = diagnosisQuestion2b?.querySelector(".answer-no");

// Q3-Aの回答ボタン
const answerYes3a = diagnosisQuestion3a?.querySelector(".answer-yes");
const answerNo3a = diagnosisQuestion3a?.querySelector(".answer-no");

// Q3-Bの回答ボタン
const answerYes3b = diagnosisQuestion3b?.querySelector(".answer-yes");
const answerNo3b = diagnosisQuestion3b?.querySelector(".answer-no");

// Q3-Cの回答ボタン
const answerYes3c = diagnosisQuestion3c?.querySelector(".answer-yes");
const answerNo3c = diagnosisQuestion3c?.querySelector(".answer-no");

// 診断結果
const diagnosisResult = document.querySelector("#diagnosis-result");
const resultSkinType = document.querySelector("#result-skin-type");
const resultDescription = document.querySelector("#result-description");
const resultCareAdvice = document.querySelector("#result-care-advice");
const recommendedProducts = document.querySelector("#recommended-products"); 
const restartButton = document.querySelector("#restart-diagnosis");


// Q1の分岐
if (startButton && diagnosisIntro && diagnosisQuestion1) {
    startButton.addEventListener("click", () => {
        diagnosisIntro.setAttribute("hidden", "");
        diagnosisQuestion1.removeAttribute("hidden");
    });
}

if (diagnosisQuestion1 && diagnosisQuestion2a && diagnosisQuestion2b && answerYes1 && answerNo1) {
    answerYes1.addEventListener("click", () => {
            diagnosisQuestion1.setAttribute("hidden", "");
            diagnosisQuestion2a.removeAttribute("hidden");
        });

    answerNo1.addEventListener("click", () => {
            diagnosisQuestion1.setAttribute("hidden", "");
            diagnosisQuestion2b.removeAttribute("hidden");
        });
}

// Q2-Aの分岐
if (diagnosisQuestion2a && diagnosisQuestion3a && diagnosisQuestion3b && answerYes2a && answerNo2a) {
    answerYes2a.addEventListener("click", () => {
        diagnosisQuestion2a.setAttribute("hidden", "");
        diagnosisQuestion3a.removeAttribute("hidden");
    });

    answerNo2a.addEventListener("click", () => {
        diagnosisQuestion2a.setAttribute("hidden", "");
        diagnosisQuestion3b.removeAttribute("hidden");
    });
}

// Q2-Bの分岐
if (diagnosisQuestion2b && diagnosisQuestion3b && diagnosisQuestion3c && answerYes2b && answerNo2b) {
    answerYes2b.addEventListener("click", () => {
        diagnosisQuestion2b.setAttribute("hidden", "");
        diagnosisQuestion3c.removeAttribute("hidden");
    });

    answerNo2b.addEventListener("click", () => {
        diagnosisQuestion2b.setAttribute("hidden", "");
        diagnosisQuestion3b.removeAttribute("hidden");
    });

}

// Q3-Aの分岐
if (diagnosisQuestion3a && diagnosisResult && answerYes3a && answerNo3a) {
    answerYes3a.addEventListener("click", () => {
        diagnosisQuestion3a.setAttribute("hidden", "");
        showDiagnosisResult("oily");
    });

    answerNo3a.addEventListener("click", () => {
        diagnosisQuestion3a.setAttribute("hidden", "");
        showDiagnosisResult("combination");
    });
}

// Q3-Bの分岐
if (diagnosisQuestion3b && diagnosisResult && answerYes3b && answerNo3b) {
    answerYes3b.addEventListener("click", () => {
        diagnosisQuestion3b.setAttribute("hidden", "");
        showDiagnosisResult("combination");
    });

    answerNo3b.addEventListener("click", () => {
        diagnosisQuestion3b.setAttribute("hidden", "");
        showDiagnosisResult("normal");
    });
}

// Q3-Cの分岐
if (diagnosisQuestion3c && diagnosisResult && answerYes3c && answerNo3c) {
    answerYes3c.addEventListener("click", () => {
        diagnosisQuestion3c.setAttribute("hidden", "");
        showDiagnosisResult("dry");
    });

    answerNo3c.addEventListener("click", () => {
        diagnosisQuestion3c.setAttribute("hidden", "");
        showDiagnosisResult("normal");
    });
}

//診断結果
function showDiagnosisResult(skinTypeId: string) {
    const selectedSkinType = skinTypes.find((skinType) => {
        return skinType.id === skinTypeId;
    });

     // おすすめ商品を取得
    const selectedProducts = products.filter((product) => {
        return selectedSkinType?.recommendedProductIds.includes(product.id);
    });

    // おすすめ商品カードを表示
    if (recommendedProducts) {
        recommendedProducts.innerHTML = "";

        selectedProducts.forEach((product) => {
            const productCard = document.createElement("div");

            productCard.classList.add("recommended-product-card");

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h4>${product.name}</h4>
                    <p>${product.price.toLocaleString()}円</p>
                    <p>${product.shortDescription}</p>
                    <a href="./product-detail.html?id=${product.id}">商品詳細を見る</a>

                </div>
            `;

            recommendedProducts.appendChild(productCard);
        });
    }

    if (selectedSkinType && resultSkinType && resultDescription && resultCareAdvice) {
        resultSkinType.textContent = selectedSkinType.name;
        resultDescription.textContent = selectedSkinType.description;
        resultCareAdvice.textContent = selectedSkinType.careAdvice;
    }

    if (diagnosisResult) {
        diagnosisResult.removeAttribute("hidden");
    }
}

// もう一度診断する
if (restartButton && diagnosisResult && diagnosisIntro) {
    restartButton.addEventListener("click", () => {
        diagnosisResult.setAttribute("hidden", "");
        diagnosisIntro.removeAttribute("hidden");
    });
}