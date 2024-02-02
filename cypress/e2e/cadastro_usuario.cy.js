/// <reference types = "cypress"/>

import commum_page from '../support/pages/commum_page';
import cadastro_page from '../support/pages/cadastro_usuario_page'

describe('Cadastro de usuário', () => {

    beforeEach('acessar cadastro usuário',() => {
        commum_page.acessarCadastroUsuario()
    })

    it.only('Campo nome vazio', () => {
       cadastro_page.clicarCadastrar() 
       cadastro_page.validarMensagemErro("O campo nome deve ser prenchido" )
    });

    it('Campo Email vazio', () => {
        
    });
    it('Campo Email inválido', () => {
        
    });

    it('Campo Senha  vazio', () => {
        
    });
    it('Campo Senha  inválido', () => {
        
    });

    it('Cadastro de usuário com sucesso', () => {
        
    });

    });
