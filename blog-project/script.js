document.addEventListener("DOMContentLoaded", function () {
    const blogPosts = document.getElementById("blog-posts");
    const addPostForm = document.getElementById("add-post-form");
    const imageInput = document.getElementById("image-url");
    const titleInput = document.getElementById("post-title");
    const textArea = document.getElementById("post-text");
    const savePostButton = document.getElementById("save-post-button");
    const loginButton = document.getElementById("login-button");

    let token = localStorage.getItem("token"); // Recuperar o token do armazenamento local

    // Função para verificar se o usuário está autenticado (com base no token JWT)
    function isAuthenticated() {
        return !!token;
    }

    // Função para fazer login
    function login() {
        // Neste exemplo, você pode definir um token JWT fixo
        token = "seu_token_jwt_aqui";
        localStorage.setItem("token", token);
        toggleAddPostForm();
        toggleLoginButton();
    }

    // Função para fazer logout
    function logout() {
        token = null;
        localStorage.removeItem("token");
        toggleAddPostForm();
        toggleLoginButton();
    }

    // Função para exibir o formulário de adição de post se o usuário estiver autenticado
    function toggleAddPostForm() {
        if (isAuthenticated()) {
            addPostForm.style.display = "block";
        } else {
            addPostForm.style.display = "none";
        }
    }

    // Função para alternar o texto do botão de login com base no estado de autenticação
    function toggleLoginButton() {
        if (isAuthenticated()) {
            loginButton.textContent = "Logout";
        } else {
            loginButton.textContent = "Login";
        }
    }

    // Adicionar um novo post (apenas para usuários autenticados)
    savePostButton.addEventListener("click", () => {
        if (isAuthenticated()) {
            const image = imageInput.value;
            const title = titleInput.value;
            const text = textArea.value;

            const newPost = { image, title, text };

            fetch("posts.json")
                .then((response) => response.json())
                .then((data) => {
                    data.posts.unshift(newPost); // Adicionar o novo post no início do array

                    fetch("posts.json", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    })
                        .then(() => {
                            loadPosts(); // Recarregar os posts
                        });
                });

            // Limpar os campos de entrada
            imageInput.value = "";
            titleInput.value = "";
            textArea.value = "";
        }
    });

    // Botão de login / logout
    loginButton.addEventListener("click", () => {
        if (isAuthenticated()) {
            logout();
        } else {
            login();
        }
    });

    toggleLoginButton();
    toggleAddPostForm();
});
