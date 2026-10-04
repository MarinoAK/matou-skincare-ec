export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

import product01 from "../images/products/product01.jpg";
import product02 from "../images/products/product02.jpg";
import product03 from "../images/products/product03.jpg";
import product04 from "../images/products/product04.jpg";
import product05 from "../images/products/product05.jpg";
import product06 from "../images/products/product06.jpg";
import product07 from "../images/products/product07.jpg";
import product08 from "../images/products/product08.jpg";
import product09 from "../images/products/product09.jpg";
import product10 from "../images/products/product10.jpg";
import product11 from "../images/products/product11.jpg";
import product12 from "../images/products/product12.jpg";
export const products: Product[] = [
  {
    id: 1,
    name: "モイストクレンジング",
    price: 3000,
    category: "クレンジング",
    image: product01,
    description: "うるおいを守りながら、やさしくメイクを落とします。\n洗い上がりもしっとり、毎日心地よく使えるクレンジングです。"
  },
  {
    id: 2,
    name: "スムースフォームウォッシュ",
    price: 2500,
    category: "洗顔",
    image: product02,
    description: "皮脂や毛穴の汚れ、肌のざらつきが気になる方に。\nきめ細かな泡でやさしく洗い、すっきりとした肌に整えます。"
  },
  {
    id: 3,
    name: "バランスローション",
    price: 3500,
    category: "化粧水",
    image: product03,
    description: "ベタつきや乾燥など、肌のバランスが気になる方に。\n必要なうるおいを補い、すこやかで整った肌へ導きます。"
  },
  {
    id: 4,
    name: "モイストローション",
    price: 3500,
    category: "化粧水",
    image: product04,
    description: "乾燥や肌のカサつきが気になる肌に、たっぷりのうるおいを。\nみずみずしくなじみ、しっとりとなめらかな肌に整えます。"
  },
  {
    id: 5,
    name: "センシティブローション",
    price: 3800,
    category: "化粧水",
    image: product05,
    description: "乾燥による肌のゆらぎや、刺激が気になりやすい方に。\n肌にうるおいを与え、すこやかな状態を保つローションです。"
  },
  {
    id: 6,
    name: "ブライトセラム",
    price: 4800,
    category: "美容液",
    image: product06,
    description: "乾燥によるくすみや、肌の明るさが気になる方に。\nうるおいを与えながら、明るく透明感のある印象の肌へ。"
  },
  {
    id: 7,
    name: "ポアリファイニングセラム",
    price: 4500,
    category: "美容液",
    image: product07,
    description: "毛穴の目立ちや黒ずみ、肌のざらつきが気になる方に。\nうるおいを与えながら、なめらかで整った肌へ導きます。"
  },
  {
    id: 8,
    name: "アクティブバランスセラム",
    price: 4500,
    category: "美容液",
    image: product08,
    description: "皮脂によるベタつきや、繰り返す肌荒れが気になる方に。\n肌のうるおいと油分のバランスを整え、すこやかな肌へ。"
  },
  {
    id: 9,
    name: "モイストリペアセラム",
    price: 5000,
    category: "美容液",
    image: product09,
    description: "乾燥やカサつき、肌のごわつきが気になる方に。\nうるおいをしっかり補い、しっとり柔らかな肌に整えます。"
  },
  {
    id: 10,
    name: "モイスチャークリーム",
    price: 4200,
    category: "保湿クリーム",
    image: product10,
    description: "乾燥によるつっぱりや、うるおい不足が気になる肌に。\n濃密なうるおいで肌を包み込み、しっとり感をキープします。"
  },
  {
    id: 11,
    name: "バランシングジェル",
    price: 4000,
    category: "保湿ジェル",
    image: product11,
    description: "皮脂によるベタつきと乾燥、どちらも気になる肌に。\n軽やかなジェルでうるおいを補い、みずみずしく整えます。"
  },
  {
    id: 12,
    name: "リペアナイトクリーム",
    price: 5500,
    category: "保湿クリーム",
    image: product12,
    description: "夜になると乾燥や肌のごわつきが気になる方に。\n眠っている間の保湿ケアで、翌朝しっとりなめらかな肌へ。"
  }
];
