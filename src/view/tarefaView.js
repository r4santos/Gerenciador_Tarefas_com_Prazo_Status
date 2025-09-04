const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta) {
    return new Promise(resolve => readline.question(pergunta, resolve));
}

module.exports = {
    async exibirMenu() {
        console.log('\n=== Gerenciador de Tarefas ===');
        console.log('1. Criar nova tarefa');
        console.log('2. Ver todas as tarefas');
        console.log('3. Completar tarefa');
        console.log('4. Remover tarefa');
        console.log('5. Sair');
        const opcao = await perguntar('Escolha uma opção: ');
        return opcao;
    },

    async coletarDadosTarefa() {
        const titulo = await perguntar('Título da tarefa: ');
        const descricao = await perguntar('Descrição (opcional): ');
        const prazo = await perguntar('Data limite (YYYY-MM-DD): ');
        return { titulo, descricao, prazo };
    },

    mostrarTarefas(tarefas) {
        if (!tarefas.length) {
            console.log('Nenhuma tarefa encontrada.');
            return;
        }
        tarefas.forEach(tarefa => {
            const status = tarefa.isCompleta ? 'Concluída' : 'Pendente';
            const agendamento = tarefa.agendamento;
            const atraso = agendamento && agendamento.isAtrasado ? 'ATRASADA' : '';
            console.log(`\nID: ${tarefa.id}`);
            console.log(`Título: ${tarefa.titulo}`);
            console.log(`Descrição: ${tarefa.descricao || '-'}`);
            console.log(`Prazo: ${agendamento ? agendamento.dataLimite.toISOString().slice(0, 10) : '-'}`);
            console.log(`Status: ${status} ${atraso}`);
        });
    },

    mensagem(msg, tipo = 'info') {
        const prefixo = tipo === 'erro' ? '[ERRO]' : tipo === 'sucesso' ? '[OK]' : '[INFO]';
        console.log(`${prefixo} ${msg}`);
    }
};
