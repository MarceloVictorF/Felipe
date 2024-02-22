let total = 0;

export function addValue(value) {
  total += value;
  document.getElementById("total").value = total.toFixed(2);
}