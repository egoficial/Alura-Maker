"use strict";

(async () => {
    const cookies = document.cookie;
    const urlAtual = window.location.href;
    const botaoProximaAula = document.getElementsByClassName("bootcamp-next-button")[0];

    if (botaoProximaAula) {
        const partes = urlAtual.split("/");
        const nomeAula = partes[4];
        const idAula = partes[6];
        console.log(`NomeAula: ${nomeAula} IdAula: ${idAula}`);

        try {
            const response = await fetch(`https://cursos.alura.com.br/course/${nomeAula}/task/${idAula}/mark-video`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    "Cookie": cookies
                }
            });
            console.log("Sucesso!, Aula Concluída!");
        } catch (erro) {
            console.error("Erro!, Falha ao marcar a aula:", erro);
        }

        setTimeout(() => {
            botaoProximaAula.click();
        }, 200); //? 0,2 Segundos de TimeOut
    } else {
        console.error("Botão da Próxima Aula não encontrado!");
        alert("Botão da Próxima Aula não encontrado!");
    }
})();