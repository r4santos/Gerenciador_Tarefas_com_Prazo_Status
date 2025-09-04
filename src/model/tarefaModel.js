const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {

    async criarTarefa(dadosTarefa) {
        return await prisma.tarefa.create({
            data: dadosTarefa,
            include: { agendamento: true }
        });
    },

    async buscarTodasTarefas() {
        return await prisma.tarefa.findMany({
            include: { agendamento: true }
        });
    },

    async atualizarTarefa(id, dados) {
        return await prisma.tarefa.update({
            where: { id },
            data: dados,
            include: { agendamento: true }
        });
    },

    async deletarTarefa(id) {
        // Remove o agendamento vinculado primeiro
        await prisma.agendamento.deleteMany({ where: { tarefaId: id } });
        // Remove a tarefa
        return await prisma.tarefa.delete({ where: { id } });
    }
};
