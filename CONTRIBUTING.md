# Contribuindo com os membros da Comunidade DevParaná

Adoraríamos que você contribuísse com o projeto e ajudasse a torná-la ainda melhor do que é hoje! Como contribuidor, aqui estão as diretrizes que gostaríamos que você seguisse:

- [Código de Conduta](#coc)
- [Feature Requests](#feature)
- [Regras de codificação](#rules)
- [Estrutura do repositório](#repo)

## <a id="coc"></a> Código de Conduta

Ajude-nos a manter a comunidade DevPR aberta e inclusiva. Por favor, leia e siga nosso [Código de Conduta](CODE_OF_CONDUCT.md).

Se você quiser conversar sobre a questão em tempo real, entre em contato por meio de [nosso Slack](https://slack.devparana.org).

## <a id="feature"></a> Sente falta de algum recurso?

Você pode _solicitar_ um novo recurso [iniciando uma discussão](https://github.com/developerparana/recursos/discussions/new).
Se você gostaria de _implementar_ um novo recurso, considere o tamanho da alteração para determinar as etapas corretas para prosseguir:

- Para um **novo recurso**, primeiro inicie uma discussão e esboce sua proposta para que possa ser avaliada.
  Esse processo nos permite coordenar melhor nossos esforços, evitar a duplicação de trabalho e ajudá-lo a elaborar a alteração para que seja aceita com sucesso no projeto.

  **Nota**: Adicionar um novo tópico à documentação, ou reescrever significativamente um tópico, conta como um novo recurso.

- **Pequenos recursos** podem ser criados e diretamente [enviados como um pull request](#submit-pr).

## <a id="submit-pr"></a> Diretrizes de submissão

---

### <a id="submit-pr"></a> Enviando um Pull Request (PR)

Antes de enviar sua solicitação (PR), considere as seguintes diretrizes:

1. Pesquise no [GitHub](https://github.com/developerparana/recursos/pulls) um PR aberto ou fechado relacionado ao seu envio.
   Você não quer duplicar os esforços existentes.

1. Certifique-se de que um problema descreve o problema que você está corrigindo ou documenta o design do recurso que você deseja adicionar.
   Discutir o design antecipadamente ajuda a garantir que estamos prontos para aceitar seu trabalho.

1. Faça um fork do repositório developerparana/recursos.

1. Faça suas alterações em um novo branch:

   ```shell
   git checkout -b my-fix-branch main
   ```

1. Crie seu patch, **incluindo casos de teste apropriados**.

1. Siga nossas [Regras de codificação](#rules).

1. Faça commit de suas mudanças usando uma mensagem de commit descritiva que segue nossas [convenções de mensagem de commit](#commit).
   A adesão a essas convenções é necessária porque as notas de versão são geradas automaticamente a partir dessas mensagens.

   ```shell
   npm run commit
   ```

   > **\*Nota**: a opção de linha de comando opcional commit `-a` irá automaticamente" adicionar "e" rm "os arquivos editados.\*

1. Envie seu branch para o GitHub:

   ```shell
   git push origin my-fix-branch
   ```

1. No GitHub, envie uma solicitação de pull para `recursos:main`.

### Revisão de uma pull request

A organização Dev Paraná reserva-se o direito de não aceitar solicitações de pull de membros da comunidade que não tenham sido bons cidadãos na comunidade. Tal comportamento inclui não seguir o [código de conduta DevPR](CODE_OF_CONDUCT.md) e se aplica dentro ou fora dos canais gerenciados Dev Paraná.

#### Como abordar o feedback da revisão

Se solicitarmos alterações por meio de revisões de código:

1. Faça as atualizações necessárias para o código.

1. Execute novamente os conjuntos de teste para garantir que os testes ainda estejam passando.

1. Crie um commit de correção e envie para seu repositório GitHub (isso atualizará sua solicitação de pull):

   ```shell
   git commit --all --fixup HEAD
   git push
   ```

É isso aí! Obrigado pela sua contribuição!

##### Atualizando a mensagem de confirmação

Um revisor pode frequentemente sugerir mudanças em uma mensagem de confirmação (por exemplo, para adicionar mais contexto para uma mudança ou aderir às nossas [diretrizes de mensagem de confirmação] (# commit)).
Para atualizar a mensagem de commit do último commit em seu branch:

1. Confira sua branch:

   ```shell
   git checkout my-fix-branch
   ```

2. Corrija o último commit e modifique a mensagem de commit:

   ```shell
   git commit --amend
   ```

3. Envie para seu repositório GitHub:

   ```shell
   git push --force-with-lease
   ```

> NOTA: <br />
> Se você precisa atualizar a mensagem de commit de um commit anterior, você pode usar `git rebase` no modo interativo.
> Consulte os [documentos git](https://git-scm.com/docs/git-rebase#_interactive_mode) para obter mais detalhes.

#### Depois que sua pull request for mesclada

Depois que sua pull request for mesclada, você pode excluir com segurança seu branch e extrair as alterações do repositório principal (upstream):

- Exclua o branch remoto no GitHub por meio da IU da Web do GitHub ou do shell local da seguinte maneira:

  ```shell
  git push origin --delete my-fix-branch
  ```

- Confira o branch main:

  ```shell
  git checkout main -f
  ```

- Exclua a branch local:

  ```shell
  git branch -D my-fix-branch
  ```

- Atualize seu mestre com a versão upstream mais recente:

  ```shell
  git pull --ff upstream main
  ```

## <a id="rules"></a> Regras de codificação

Para garantir a consistência em toda a base de código, lembre-se destas regras enquanto trabalha:

- Todos os recursos ou correções de bugs **devem ser testados** por uma ou mais especificações (testes de unidade).
- Todos os métodos de API públicos **devem ser documentados**.

### Formato para mensagem de commit

A mensagem do commit deve ser estruturada da seguinte forma:

---

```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé opcional]
```

---

O commit contém os seguintes elementos estruturais, para comunicar a intenção ao utilizador da sua biblioteca:

1. **fix**: um commit do _tipo_ `fix` soluciona um problema na sua base de código (isso se correlaciona com [PATCH](https://semver.org/lang/pt-BR/#sum%C3%A1rio) do versionamento semântico).

1. **feat**: um commit do _tipo_ `feat` inclui um novo recurso na sua base de código (isso se correlaciona com [MINOR](https://semver.org/lang/pt-BR/#sum%C3%A1rio) do versionamento semântico).

1. **BREAKING CHANGE**: um commit que contém o texto `BREAKING CHANGE`:, no começo do texto do corpo opcional ou do rodapé opcional, inclui uma modificação que quebra a compatibilidade da API (isso se correlaciona com [MAJOR](https://semver.org/lang/pt-BR/#sum%C3%A1rio) do versionamento semântico). Uma BREAKING CHANGE pode fazer parte de commits de qualquer tipo.

1. Outros: _tipos_ adicionais são permitidos além de `fix:` e `feat:`, por exemplo [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (baseado na Convenção do Angular) recomenda-se `chore:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, entre outros.

Também recomendamos `improvement` para commits que melhoram uma implementação atual sem adicionar um novo recurso ou consertar um bug. Observe que esses tipos não são obrigatórios pela especificação do Conventional Commits e não têm efeito implícito no versionamento semântico (a menos que incluam uma BREAKING CHANGE). Um escopo pode ser adicionado ao tipo do commit, para fornecer informações contextuais adicionais e está contido entre parênteses, por exemplo `feat(parser): adiciona capacidade de interpretar arrays`.

#### Exemplos

##### Mensagem de commit com descrição e modificação que quebra a compatibilidade no corpo

```
feat: permitir que o objeto de configuração fornecido estenda outras configurações

BREAKING CHANGE: a chave `extends`, no arquivo de configuração, agora é utilizada
para estender outro arquivo de configuração
```

##### Mensagem de commit com ! opcional para chamar a atenção para quebra a compatibilidade

```
chore: remove Node 6 da matriz de testes
BREAKING CHANGE: removendo Node 6 que atinge o final de vida em Abril
```

##### Mensagem de commit sem corpo

```
docs: ortografia correta de CHANGELOG
```

##### Mensagem de commit com escopo

```
feat(lang): adiciona tradução para português brasileiro
```

##### Mensagem de commit de uma correção utilizando número de ticket (opcional)

```
fix: corrige pequenos erros de digitação no código

veja o ticket para detalhes sobre os erros de digitação corrigidos

closes issue #12
```

#### Especificação

As palavras-chaves "DEVE" ("MUST"), "NÃO DEVE" ("MUST NOT"), "OBRIGATÓRIO" ("REQUIRED"), "DEVERÁ" ("SHALL"), "NÃO DEVERÁ" ("SHALL NOT"), "PODEM" ("SHOULD"), "NÃO PODEM" ("SHOULD NOT"), "RECOMENDADO" ("RECOMMENDED"), "PODE" ("MAY") e "OPCIONAL" ("OPTIONAL"), nesse documento, devem ser interpretados como descrito na [RFC 2119](http://tools.ietf.org/html/rfc2119).

1. A mensagem de commit DEVE ser prefixado com um tipo, que consiste em um substantivo, `feat`, `fix`, etc., seguido por um escopo OPCIONAL, e OBRIGATÓRIO terminar com dois-pontos e um espaço.

1. O tipo `feat` DEVE ser usado quando um commit adiciona um novo recurso ao seu aplicativo ou biblioteca.

1. O tipo `fix` DEVE ser usado quando um commit representa a correção de um problema em seu aplicativo ou biblioteca.

1. Um escopo PODE ser fornecido após um tipo. Um escopo DEVE consistir em um substantivo que descreve uma seção da base de código entre parênteses, por exemplo, `fix(parser):`

1. Uma descrição DEVE existir depois do espaço após o prefixo tipo/escopo. A descrição é um breve resumo das alterações de código, por exemplo, _fix: problema na interpretação do array quando uma string tem vários espaços_.

1. Um corpo de mensagem de commit mais longo PODE ser fornecido após a descrição curta, fornecendo informações contextuais adicionais sobre as alterações no código. O corpo DEVE começar depois de uma linha em branco após a descrição.

1. Um rodapé de uma ou mais linhas PODE ser fornecido depois de uma linha em branco após o corpo. O rodapé DEVE conter informações adicionais sobre o commit, por exemplo, pull-requests, revisores, modificações que quebram a compatibilidade, com uma informação adicional por linha.

1. A modificação que quebra a compatibilidade DEVE ser indicadas logo no início da seção do corpo ou no início de uma linha na seção de rodapé. Uma modificação que quebra a compatibilidade DEVE consistir de um texto em maiúsculas BREAKING CHANGE, seguido por dois-pontos e um espaço.

1. Uma descrição DEVE ser fornecida após o texto “BREAKING CHANGE:”, descrevendo o que mudou na API, por exemplo, _BREAKING CHANGE: as variáveis de ambiente agora têm preferência sobre os arquivos de configuração_.

1. Além de `feat` e `fix`, outro tipo PODE ser usados em suas mensagens de commit.

1. Cada bloco de informação que compõem o commit convencional NÃO DEVE ser tratado como sensível a maiúscula e minúscula pelos implementadores, com exceção de BREAKING CHANGE, que DEVE ser maiúscula.

1. Um `!` PODE ser acrescentado antes do `:` no prefixo tipo/escopo, para chamar a atenção para modificações que quebram a compatibilidade. `BREAKING CHANGE: description` também DEVE ser incluído no corpo ou no rodapé, junto com o `!` no prefixo.

#### Porque utilizar Conventional Commits

- Criação automatizada de CHANGELOGs.
- Determinar automaticamente o versionamento semântico (com base nos tipos de commits).
- Comunicar a natureza das mudanças para mantenedores do repositório, a comunidade e outras partes interessadas.
- Disparar processos de build e deploy.
- Facilitar a contribuição de outras pessoas em seus projetos, permitindo que eles explorem um histórico de commits mais estruturado.
