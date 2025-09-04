<h1 align="center">Gerenciador de Tarefas CLI\</h1>

<p align="center">
 <a href="#objective">Objective</a> •
 <a href="#about">About</a> •
 <a href="#installation">Installation</a> • 
 <a href="#technology">Technology</a> • 
 <a href="#author">Author</a> •
</p>

-----

<h2 id="about">📝 About</h2>
Este projeto é um aplicativo de linha de comando (CLI) para gerenciamento de tarefas. Ele foi desenvolvido com uma arquitetura modular, seguindo o padrão MVC (Model-View-Controller), e utiliza dois modelos de dados interconectados para oferecer funcionalidades avançadas, como prazos e status de atraso.

### 1. Modelagem de Dados

A aplicação lida com duas entidades principais que se relacionam: **Tarefa** e **Agendamento**. A modelagem de dados é definida no `schema.prisma`.

  * **Modelo Tarefa**

      * `id`: `String`. Identificador único.
      * `titulo`: `String`. Título da tarefa.
      * `descricao`: `String?`. Descrição opcional.
      * `isCompleta`: `Boolean`. Padrão: `false`.
      * `dataCriacao`: `DateTime`. Padrão: data atual.
      * `agendamento`: `Agendamento?`. Relacionamento opcional com um Agendamento.

  * **Modelo Agendamento**

      * `id`: `String`.
      * `tarefaId`: `String`. Chave que identifica a tarefa à qual este agendamento pertence.
      * `dataLimite`: `DateTime`. Data limite para a conclusão.
      * `isAtrasado`: `Boolean`. Padrão: `false`.
      * `tarefa`: `Tarefa`. Relacionamento de volta para a Tarefa.

### 2\. Funcionalidades e Responsabilidades por Camada

A aplicação é dividida em três camadas principais:

  * **Camada Model**: A única com acesso direto ao banco de dados (MongoDB), utilizando **Prisma Client**. Gerencia as operações de **CRUD** para as tarefas e os agendamentos, incluindo a lógica para verificar o status de atraso.

  * **Camada Controller**: Atua como intermediário entre a View e o Model. Recebe a entrada do usuário, executa a lógica de negócio e manipula os dados através do Model.

  * **Camada View**: A interface com o usuário no terminal. Exibe menus, coleta dados do usuário e apresenta a lista de tarefas com status de conclusão e atraso.

-----

<h2 id="installation">📲 Installation</h2>

1.  Clone o repositório:

    ```bash
    git clone https://github.com/r4santos/Gerenciador_Tarefas_com_Prazo_Status.git
    ```

    ```bash
    cd Gerenciador_Tarefas_com_Prazo_Status
    ```

2.  Instale as dependências do projeto:

    ```bash
    npm i
    ```

3.  Configure o banco de dados MongoDB e o Prisma.

4.  Execute a aplicação:

    ```bash
    npm start
    ```

-----

<h2 id="technology">🛠️ Technology</h2>

As seguintes ferramentas foram utilizadas na construção do projeto:

  * **IDE**: <a href="https://code.visualstudio.com/">Visual Studio Code</a>
  * **SDK**: <a href="https://nodejs.org/en">Node.js</a>
  * **Database**: <a href="https://www.mongodb.com/">MongoDB</a>
  * **ORM**: <a href="https://www.prisma.io/">Prisma</a>

-----

<h2 id="author"> Author\</h2>

Developed by <a href="https://www.linkedin.com/in/rafael-santos-8a0b44313//" target="_blank">Rafael Santos</a>