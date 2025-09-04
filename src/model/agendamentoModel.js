const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    async adicionarAgendamento(tarefaId, dataLimite) {
        return await prisma.agendamento.create({
            data: {
                tarefaId,
                dataLimite,
                isAtrasado: false
            }
        });
    },

    async atualizarStatusAgendamento() {
        const agora = new Date();
        const agendamentos = await prisma.agendamento.findMany();
        const promises = agendamentos.map(agendamento => {
            const atrasado = agora > agendamento.dataLimite;
            if (agendamento.isAtrasado !== atrasado) {
                return prisma.agendamento.update({
                    where: { id: agendamento.id },
                    data: { isAtrasado: atrasado }
                });
            }
            return null;
        });
        // Executa apenas as atualizações necessárias
        return Promise.all(promises.filter(Boolean));
    }
};
