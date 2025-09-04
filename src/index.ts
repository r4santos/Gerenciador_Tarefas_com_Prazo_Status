const tarefaController = require('./controller/tarefaController');
const tarefaView = require('./view/tarefaView');

async function main() {
  let sair = false;
  while (!sair) {
    const opcao = await tarefaView.exibirMenu();
    switch (opcao) {
      case '1':
        await tarefaController.adicionarNovaTarefa();
        break;
      case '2':
        await tarefaController.listarTodasTarefas();
        break;
      case '3':
        await tarefaController.completarTarefa();
        break;
      case '4':
        await tarefaController.removerTarefa();
        break;
      case '5':
        sair = true;
        tarefaView.mensagem('Saindo...', 'info');
        process.exit(0);
        break;
      default:
        tarefaView.mensagem('Opção inválida!', 'erro');
    }
  }
}

main();
