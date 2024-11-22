function calcular() {
    const mediaSemestre1 = parseFloat(document.getElementById("mediaSemestre1").value);
    const mediaSemestre2 = parseFloat(document.getElementById("mediaSemestre2").value);
  
    if (isNaN(mediaSemestre1) || isNaN(mediaSemestre2)) {
      alert("Entrada inválida! Por favor, insira apenas números.");
      return;
    }
  
    const mediaAtual = (mediaSemestre1 + mediaSemestre2) / 2;
    const notaNecessariaSemestre3 = (7 * 3) - (mediaAtual * 2);
  
      let resultado = `Média atual: ${mediaAtual.toFixed(2)}`;
      if (notaNecessariaSemestre3 >= 0 && notaNecessariaSemestre3 <= 10) {
          resultado += `<br>Nota necessária na média do Semestre 3 para média 7: ${notaNecessariaSemestre3.toFixed(2)}`;
      } else {
          resultado += "<br>Média 7 inalcançável com as notas informadas.";
      }
  
    document.getElementById("resultado").innerHTML = resultado;
  }