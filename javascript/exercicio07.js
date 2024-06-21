// Exercício 7: Calculadora de salário líquido
let salarioBruto = 6000;
let aliquota1 = 0.08;
let aliquota2 = 0.09;
let aliquota3 = 0.11;
let aliquotaMax = 570.88;
let aliquotaInss;
let salarioBase;
let aliquotaIrrf;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
  aliquotaInss = salarioBruto * aliquota1
} else if (salarioBruto <= 2594.92) {
  aliquotaInss = salarioBruto * aliquota2
} else if (salarioBruto <= 5189.82) {
  aliquotaInss = salarioBruto * aliquota3
} else {
  aliquotaInss = aliquotaMax
}

salarioBase = salarioBruto - aliquotaInss;


if (salarioBase <= 1903.98) {
  aliquotaIrrf = 0;
  deducaoIrrf = 0;
} else if (salarioBase >= 1909.99 && salarioBase <= 2826.65) {
  aliquotaIrrf = ( salarioBase * 0.075) - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  aliquotaIrrf = (salarioBase * 0.15) - 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  aliquotaIrrf = (salarioBase * 0.225) - 636.13;
} else {
  aliquotaIrrf = (salarioBase * 0.275) - 869.36;
};

salarioLiquido = salarioBase - aliquotaIrrf;

console.log(`salário liquido de R$ ${salarioBase - aliquotaIrrf}`);