const tarefaModel = require('../model/tarefaModel');
const agendamentoModel = require('../model/agendamentoModel');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta) {
    return new Promise(resolve => readline.question(pergunta, resolve));
}

module.exports = {
    async adicionarNovaTarefa() {
        const titulo = await perguntar('Título da tarefa: ');
        const descricao = await perguntar('Descrição (opcional): ');
        const prazo = await perguntar('Data limite (YYYY-MM-DD): ');
        const dadosTarefa = {
            titulo,
            descricao: descricao || null
        };
        const tarefa = await tarefaModel.criarTarefa(dadosTarefa);
        await agendamentoModel.adicionarAgendamento(tarefa.id, new Date(prazo));
        console.log('Tarefa e agendamento criados com sucesso!');
    },

    async listarTodasTarefas() {
        await agendamentoModel.atualizarStatusAgendamento();
        const tarefas = await tarefaModel.buscarTodasTarefas();
        console.log('Lista de tarefas:', tarefas);
    },

    async completarTarefa() {
        const id = await perguntar('ID da tarefa para completar: ');
        await tarefaModel.atualizarTarefa(id, { isCompleta: true });
        console.log('Tarefa marcada como completa!');
    },

    async removerTarefa() {
        const id = await perguntar('ID da tarefa para remover: ');
        await tarefaModel.deletarTarefa(id);
        console.log('Tarefa e agendamento removidos!');
    }
};
