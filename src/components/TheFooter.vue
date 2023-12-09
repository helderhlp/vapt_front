<template>
  <div class="container">
    <footer class="footer">
      <div class="institutional">
        <h3>Institucional</h3>
        <ul>
          <li><router-link to="/sobre"> Sobre o Vaptvou </router-link></li>
          <li><router-link to="/"> Informações Coronavírus </router-link></li>
        </ul>
      </div>
      <div class="politics-conditions">
        <h3>Políticas e Condições</h3>
        <ul>
          <li><router-link to="/politica-privacidade"> Política de privacidade </router-link></li>
          <li>
            <router-link to="/termos-condicoes"> Termos e condições de uso Excursões </router-link>
          </li>
          <li>
            <router-link to="/politicas-normas-seguranca">
              Política e normas de segurança
            </router-link>
          </li>
        </ul>
      </div>
      <div class="site">
        <h3>Site</h3>
        <ul>
          <li><router-link to="/"> Destinos </router-link></li>
          <li><router-link to="/"> Excursões</router-link></li>
          <li><router-link to="/"> Ofertas Especiais</router-link></li>
          <li><router-link to="/"> Todas as Excursões</router-link></li>
          <li><router-link to="/"> Contato</router-link></li>
          <li><router-link to="/"> Cadastrar como excursionista</router-link></li>
          <li><router-link to="/"> Minha Conta / Cadastra-se</router-link></li>
        </ul>
      </div>
    </footer>
    <div class="rights">
      <p>
        © 2020 Vaptvou - Todos os diretos reservados - Criattech Soluções em Tecnologia da
        Informação LTDA - CNPJ: 32.518.884/0001-67
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: #004d55;
}
.footer {
  max-width: 120rem;
  margin: auto;
  color: $white;
  display: flex;
  gap: 8rem;
  padding: 6rem 4rem;

  h3 {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }

  li {
    margin-bottom: 0.8rem;

    a {
      color: $white;

      &:hover {
        color: $primary;
      }
    }
  }
}

.rights {
  background-color: #d9ecec;

  p {
    font-size: 1.2rem;
    padding: 1.4rem 0;
    text-align: center;
  }
}

@media (max-width: 992px) {
  .footer {
    padding: 4rem;
    gap: 4rem;
    flex-direction: column;
  }
}
</style>
