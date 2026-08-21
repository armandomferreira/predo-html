// Usuário cadastrado para teste
const usuarioCorreto = "admin";
const senhaCorreta = "1234";

function login() {

    const usuario = document.getElementById("usuario").value;
        const senha = document.getElementById("senha").value;
            const mensagem = document.getElementById("mensagem");

                // Verifica se os campos estão preenchidos
                    if (usuario === "" || senha === "") {
                            mensagem.textContent = "Preencha todos os campos!";
                                    mensagem.style.color = "red";
                                            return;
                                                }

                                                    // Verifica se o usuário existe
                                                        if (usuario !== usuarioCorreto) {
                                                                mensagem.textContent = "Usuário não existe!";
                                                                        mensagem.style.color = "red";
                                                                                return;
                                                                                    }

                                                                                        // Verifica a senha
                                                                                            if (senha !== senhaCorreta) {
                                                                                                    mensagem.textContent = "Senha incorreta!";
                                                                                                            mensagem.style.color = "red";
                                                                                                                    return;
                                                                                                                        }

                                                                                                                            // Login realizado
                                                                                                                                mensagem.textContent = "Login realizado com sucesso!";
                                                                                                                                    mensagem.style.color = "green";

                                                                                                                                        // Vai para a página de sucesso
                                                                                                                                            setTimeout(function() {
                                                                                                                                                    window.location.href = "sucesso.html";
                                                                                                                                                        }, 1000);
                                                                                                                                                        }