# Conectar o jogo à planilha de resultados

A planilha escolhida já está configurada no script [`registrar-resultados.gs`](./registrar-resultados.gs). O script cria uma aba chamada **Resultados** e registra data e hora, nome, pontuação, total de desafios e ID de cada tentativa.

## Ativar o registro automático

1. Abra a [planilha de resultados](https://docs.google.com/spreadsheets/d/1FJXNdB0gREh04mfUPNuLD80sYisQ_KOEwKl_8pgMowQ/edit).
2. No menu, escolha **Extensões → Apps Script**.
3. Substitua o conteúdo do arquivo `Code.gs` pelo conteúdo de `registrar-resultados.gs` e salve.
4. Clique em **Implantar → Nova implantação**.
5. Selecione **App da Web**. Em **Executar como**, escolha sua conta. Em **Quem pode acessar**, escolha **Qualquer pessoa**. Isso permite que as alunas enviem a tentativa sem acesso de leitura à planilha; o script só acrescenta os campos definidos acima.
6. Clique em **Implantar**, autorize o acesso à planilha e copie a URL do app da Web, que termina em `/exec`.
7. Envie essa URL para atualizar o jogo e ativar o envio automático para todas as alunas.

A URL do app é um endpoint público de envio. Não coloque dados pessoais além do nome e do resultado da atividade nessa planilha.
