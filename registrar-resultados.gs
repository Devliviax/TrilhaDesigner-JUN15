const PLANILHA_ID = '1FJXNdB0gREh04mfUPNuLD80sYisQ_KOEwKl_8pgMowQ';
const ABA_RESULTADOS = 'Resultados';

function doPost(e) {
  const dados = JSON.parse(e.postData.contents || '{}');
  const nome = limparTexto(dados.nome, 50);
  const pontos = Number(dados.pontos);
  const total = Number(dados.total);
  const tentativa = limparTexto(dados.tentativa, 80);

  if (!nome || !Number.isFinite(pontos) || !Number.isFinite(total) || total < 1 || pontos < 0 || pontos > total) {
    throw new Error('Dados da atividade inválidos.');
  }

  const planilha = SpreadsheetApp.openById(PLANILHA_ID);
  let aba = planilha.getSheetByName(ABA_RESULTADOS);
  if (!aba) aba = planilha.insertSheet(ABA_RESULTADOS);
  if (aba.getLastRow() === 0) {
    aba.appendRow(['Data e hora', 'Nome', 'Pontos', 'Total de desafios', 'ID da tentativa']);
    aba.setFrozenRows(1);
  }
  aba.appendRow([new Date(), nome, pontos, total, tentativa]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function limparTexto(valor, limite) {
  let texto = String(valor || '').trim().slice(0, limite);
  // Evita que texto enviado pelo aluno seja interpretado como fórmula na planilha.
  if (/^[=+\-@]/.test(texto)) texto = "'" + texto;
  return texto;
}
