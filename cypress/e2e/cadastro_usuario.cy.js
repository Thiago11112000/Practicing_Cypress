/// <reference types = "cypress"/>
import { faker } from '@faker-js/faker';
import commum_page from '../support/pages/commum_page';
import cadastro_page from '../support/pages/cadastro_usuario_page'

describe('Cadastro de usuário', () => {

    const randomName = faker.person.fullName(); 
    const randomEmail =  faker.internet.email();
    beforeEach('acessar cadastro usuário',() => {
        commum_page.acessarCadastroUsuario()
    })

    it('Campo nome vazio', () => {
       cadastro_page.clicarCadastrar() 
       cadastro_page.validarMensagemErro("O campo nome deve ser prenchido" )
    });

    it('Campo Email vazio', () => {
        cadastro_page.preencherNome(randomName)
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    });
    
    it('Campo Email inválido', () => {
        cadastro_page.preencherNome(randomName)
        
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    });
    it('Campo Email inválido', () => {
        cadastro_page.preencherNome(randomName)
        cadastro_page.preencherEmail(randomName)
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    });

    it('Campo Senha  vazio', () => {
        cadastro_page.preencherNome(randomName)
        cadastro_page.preencherEmail(randomEmail)
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    });
    it('Campo Senha  inválido', () => {
        cadastro_page.preencherNome(randomName)
        cadastro_page.preencherEmail(randomEmail)
        cadastro_page.preencherSenha('12345')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Cadastro de usuário com sucesso', () => {
        cadastro_page.preencherNome(randomName)
        cadastro_page.preencherEmail(randomEmail)
        cadastro_page.preencherSenha('123456')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemSucesso(randomName)
    });

    });
