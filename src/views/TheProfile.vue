<template>
  <div class="profile">
    <div class="profile-header">
      <div class="profile-container">
        <h1>MINHA CONTA</h1>
        <h2>
          ENCONTRE EXCURSÕES MARAVILHOSAS. <br />
          REÚNA SUA FAMÍLIA OU AMIGOS E VÁ CURTIR.
        </h2>
      </div>
    </div>
    <div class="profile-form-container">
      <p class="profile-form-container-title">Complete seu Perfil</p>

      <div class="profile-form-container-photo">
        <img id="image" src="@/assets/images/input_file_placeholder.png" />
        <input type="file" />
      </div>

      <p class="profile-form-container-subtitle">Dados Pessoais</p>
      <div class="personal-info-form">
        <div class="d-flex gap-2 mb-1">
          <select class="w-30">
            <option value="">Doc</option>
            <option value="rg">RG</option>
            <option value="cpf">CPF</option>
          </select>
          <input class="default-input w-70" type="text" placeholder="Número do documento" />
        </div>

        <div class="d-flex gap-2 mb-1">
          <input class="default-input w-25" type="date" placeholder="Data Nasc." />
          <select class="w-25">
            <option value="">Sexo</option>
            <option value="">Masc.</option>
            <option value="">Fem.</option>
          </select>
          <input class="default-input w-25" type="tel" placeholder="Celular" />
          <input class="default-input w-25" type="tel" placeholder="Telefone" />
        </div>

        <div class="d-flex gap-2">
          <input class="default-input w-50" type="password" placeholder="Senha*" />
          <input class="default-input w-50" type="password" placeholder="Confirme a Senha*" />
        </div>
      </div>

      <p class="profile-form-container-subtitle">Endereço</p>
      <div class="d-flex gap-2 mb-1">
        <input class="default-input w-25" type="text" placeholder="CEP" />
        <input class="default-input w-50" type="text" placeholder="Logradouro" />
        <input class="default-input w-25" type="text" placeholder="Complemen." />
      </div>
      <div class="d-flex gap-2 mb-1">
        <input class="default-input w-50" type="text" placeholder="Bairro" />
        <input
          class="default-input w-50"
          type="text"
          placeholder="Cidade
        "
        />
      </div>
      <select class="w-25">
        <option value="">Estado</option>
        <option value="AC">Acre</option>
        <option value="AL">Alagoas</option>
        <option value="AP">Amapá</option>
        <option value="AM">Amazonas</option>
        <option value="BA">Bahia</option>
        <option value="CE">Ceará</option>
        <option value="DF">Distrito Federal</option>
        <option value="ES">Espírito Santo</option>
        <option value="GO">Goiás</option>
        <option value="MA">Maranhão</option>
        <option value="MT">Mato Grosso</option>
        <option value="MS">Mato Grosso do Sul</option>
        <option value="MG">Minas Gerais</option>
        <option value="PA">Pará</option>
        <option value="PB">Paraíba</option>
        <option value="PR">Paraná</option>
        <option value="PE">Pernambuco</option>
        <option value="PI">Piauí</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="RN">Rio Grande do Norte</option>
        <option value="RS">Rio Grande do Sul</option>
        <option value="RO">Rondônia</option>
        <option value="RR">Roraima</option>
        <option value="SC">Santa Catarina</option>
        <option value="SP">São Paulo</option>
        <option value="SE">Sergipe</option>
        <option value="TO">Tocantins</option>
      </select>

      <div class="profile-form-container-actions">
        <button class="default-button">PULAR</button>
        <button class="button-primary">SALVAR</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  margin-top: 1rem;

  &-container {
    max-width: 110rem;
    margin: auto;
  }

  &-header {
    background-image: url('@/assets/images/cadastro_header.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 7rem 0;

    h1 {
      margin-bottom: 0.4rem;
    }
  }
}

.personal-info-form {
  margin-bottom: 2.4rem;
}
.profile-form-container {
  max-width: 75rem;
  margin: 8rem auto;

  &-title {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 3.2rem;
  }

  &-subtitle {
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 1.4rem;
  }

  &-photo {
    margin-bottom: 1rem;

    input {
      display: none;
    }
  }

  &-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;

    .default-button {
      margin-right: 2rem;
    }
  }
}

@media (max-width: 992px) {
  .profile {
    &-header {
      padding: 2rem 4rem;
    }

    &-form-container {
      margin-top: 0;
      margin-bottom: 0;
      padding: 2rem;
    }
  }
}
</style>
