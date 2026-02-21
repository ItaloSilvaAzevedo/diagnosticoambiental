// Exibe o formulário inicial
function iniciardiagnostico() {
    document.getElementById("form-section").classList.remove("hidden"); // Mostrar o formulário
    document.getElementById("botaoiniciar").classList.add("hidden"); // Esconder o botão iniciar
    document.getElementById("trust").classList.add("hidden"); // Esconder a seção de confiança
}

// Envio do formulário pro n8n e exibir mensagem de loading

document.getElementById("initialForm").addEventListener("submit", async function(e) {
    e.preventDefault(); // Impede o recarregamento da página

    // Mostra loading e esconde formulário
    document.getElementById("loader").classList.remove("hidden");
    document.getElementById("form-section").classList.add("hidden");
    document.getElementById("confiaca").classList.remove("hidden");
    window.scrollTo(0, document.body.scrollHeight);

    // Cria FormData a partir do formulário
    const formulário = document.getElementById("initialForm");
    const formData = new FormData(formulário); 
    // Converte para objeto simples
    const data = Object.fromEntries(formData.entries()); 
    
    
    // Envia os dados para a API usando fetch
    try {
        const response = await fetch("https://greencept.app.n8n.cloud/webhook/sonar", {
            method: "POST",
            // Envia como FormData (multipart/form-data)
            body: formData
        });

        if (response.ok) {
            const result = await response.text(); 
            
            // Esconde loading
            document.getElementById("loader").classList.add("hidden");

            // Mostra seção de resultado
            document.getElementById("result-section").classList.remove("hidden");
            
            // Injeta resposta do n8n na tela
            document.getElementById("resultContent").innerHTML = `
                ${result}`;
            
            console.log("Resposta do n8n:", result); // Depuração: Exibe a resposta no console

                window.scrollTo(0, document.body.scrollHeight);
            }

        else {
            alert("Erro ao enviar: " + response.status);
        }
    } 
    
    catch (error) {
        console.error("Erro de rede:", error);
        alert("Não foi possível enviar o formulário.");
    }
});

// whatsapp
window.addEventListener('scroll', function() {
    var btn = document.querySelector('.btn-whatsapp');
    if (window.scrollY > 100) {
        btn.style.opacity = '1';
    } else {
        btn.style.opacity = '0.8';
    }
});






