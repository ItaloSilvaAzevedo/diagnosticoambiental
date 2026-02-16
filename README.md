# DiagnosticoAmbiental

🌱 Diagnóstico Ambiental – Página de Captação

Este projeto consiste em uma aplicação web voltada para a coleta e análise de informações ambientais por meio de um formulário interativo. O sistema integra automação de fluxo de dados, inteligência artificial e comunicação com o usuário para fornecer diagnósticos ambientais personalizados.

🚀 Funcionalidades

Formulário de entrada  
O usuário preenche dados ambientais referentes ao empreendimento diretamente na página.

Integração com N8N  
Após o envio, os dados são encaminhados para o N8N, que orquestra o fluxo de processamento.

Armazenamento em banco de dados  
Todas as informações coletadas são registradas em um banco de dados para consulta e histórico.

Análise por Inteligência Artificial  
Os dados são processados por um modelo de IA que gera um diagnóstico ambiental.

🔄 Feedback ao usuário

  Um resumo do diagnóstico é exibido na tela.

  Um relatório completo em HTML é enviado por e-mail ao usuário.

🛠️ Tecnologias Utilizadas

Frontend: HTML5, CSS3, JavaScript

Backend: Integração via n8n

Banco de Dados: Nativo n8n

Agente de IA: Google Gemine chat Model

Email Service: n8n

📂 Estrutura do Projeto

Código
/public
   ├── index.html        # Página principal com formulário
   ├── styles.css        # Estilos da aplicação
   └── script.js         # Lógica de envio e interação

/backend
   ├── n8n-workflow.json # Fluxo configurado no n8n
   
/docs
   └── README.md         # Documentação do projeto

🔄 Fluxo de Funcionamento

Usuário preenche e envia o formulário.

Dados são enviados ao n8n.

n8n armazena os dados no banco de dados.

IA processa os dados e gera diagnóstico ambiental.

Usuário recebe:

Resumo na tela.

Relatório completo por e-mail.

📧 Contato

Para dúvidas, sugestões ou suporte, entre em contato com o desenvolvedor:
Email: italosilvaazevedo@gmail.com
