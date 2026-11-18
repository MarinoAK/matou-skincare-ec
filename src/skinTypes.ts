export interface SkinType {
  id: string;
  name: string;
  description: string;
  skinConcerns: string[];
  careAdvice: string;
  recommendedProductIds: number[];
}

export const skinTypes: SkinType[] = [
  {
    id: "oily",
    name: "脂性肌",
    description: "皮脂の分泌が多く、テカリや毛穴が気になりやすい肌タイプです。",
    skinConcerns: ["皮脂", "テカリ", "毛穴"],
    careAdvice: "皮脂を取りすぎず、肌の水分バランスを整えるケアがおすすめです。",
    recommendedProductIds: [3, 8, 11],
  },
  {
    id: "combination",
    name: "混合肌",
    description: "皮脂が多い部分と乾燥しやすい部分が混在する肌タイプです。",
    skinConcerns: ["テカリ", "毛穴", "部分的な乾燥"],
    careAdvice: "部位ごとの肌状態に合わせて保湿や皮脂ケアを調整しましょう。",
    recommendedProductIds: [2, 5, 7],
  },
  {
    id: "normal",
    name: "普通肌",
    description: "水分と油分のバランスが比較的整っている肌タイプです。",
    skinConcerns: ["肌状態の維持"],
    careAdvice: "現在の肌状態を維持できるよう、保湿と紫外線対策を続けましょう。",
    recommendedProductIds: [1, 6, 12],
  },
  {
    id: "dry",
    name: "乾燥肌",
    description: "肌の水分や油分が不足しやすく、つっぱりや乾燥が気になる肌タイプです。",
    skinConcerns: ["乾燥", "つっぱり感", "粉吹き"],
    careAdvice: "保湿を重視し、肌のうるおいを守るケアがおすすめです。",
    recommendedProductIds: [4, 9, 10],
  },
];