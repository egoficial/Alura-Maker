# Alura Course Auto Completer

Este script JavaScript automatiza a conclusão de aulas nos cursos da Alura, clicando automaticamente no botão para a próxima aula após marcar a aula atual como concluída.

## Bookmarklet

Para facilitar o uso do script, você pode adicioná-lo como um bookmarklet na sua barra de favoritos. Siga os passos abaixo:

1. **Crie o Bookmarklet**:
   - Copie o seguinte código:

   ```javascript
   javascript:(async () => { const cookies = document.cookie; const urlAtual = window.location.href; const botaoProximaAula = document.getElementsByClassName("bootcamp-next-button")[0]; if (botaoProximaAula) { const partes = urlAtual.split("/"); const nomeAula = partes[4]; const idAula = partes[6]; console.log(`NomeAula: ${nomeAula} IdAula: ${idAula}`); try { const response = await fetch(`https://cursos.alura.com.br/course/${nomeAula}/task/${idAula}/mark-video`, { method: "POST", credentials: "include", headers: { "Content-Type": "application/json", "Cookie": cookies } }); console.log("Sucesso!, Aula Concluída!"); } catch (erro) { console.error("Erro!, Falha ao marcar a aula:", erro); } setTimeout(() => { botaoProximaAula.click(); }, 200); } else { console.error("Botão da Próxima Aula não encontrado!"); alert("Botão da Próxima Aula não encontrado!"); } })();
    ```
   - Agora direcione para a barra de favoritos!.

## Funcionalidades

- **Marcação de Aula Concluída**: O script envia uma solicitação POST para a API da Alura, informando que a aula foi concluída.
- **Navegação Automática**: Após marcar a aula, o script aguarda 200 milissegundos e clica automaticamente no botão para ir para a próxima aula.
- **Log de Status**: O script registra mensagens de sucesso ou erro no console para acompanhamento.

## Pré-requisitos

- O script deve ser executado em um navegador com acesso à página de um curso da Alura.
- É necessário estar logado na plataforma da Alura.

## Como Usar

1. **Abra o Console do Navegador**: Acesse a página de uma aula do curso da Alura e abra as ferramentas de desenvolvedor (geralmente pressionando F12 ou Ctrl + Shift + I).
  
2. **Cole o Script**: Copie o script fornecido e cole-o no console.

3. **Execute o Script**: Pressione Enter para executar o script.

4. **Aguarde a Conclusão**: O script marcará a aula como concluída e automaticamente navegará para a próxima aula.

## Observações

- **Uso Responsável**: Este script deve ser utilizado com responsabilidade. A automação excessiva pode violar os termos de uso da Alura.
- **Mudanças na Estrutura do Site**: O script pode parar de funcionar se a Alura alterar a estrutura da página ou a API. Verifique e atualize o script conforme necessário.
- **Cookies**: O script utiliza os cookies do navegador para manter a sessão ativa. Não remova os cookies durante a execução.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou relatar problemas.

## Licença

Este projeto está licenciado sob a Mozilla Public License Version 2.0. Consulte o arquivo LICENSE para mais detalhes.

---

**Atenção**: Este script é uma ferramenta de automação e deve ser usado de acordo com as diretrizes e políticas da Alura. O uso indevido pode resultar em penalizações na conta.