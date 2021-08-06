module.exports = {
  types: [
    {
      value: '💍 test',
      name: '💍  test:       Adicionando testes que faltavam',
    },
    { value: '🎸 feat', name: '🎸  feat:       Uma nova feature' },
    { value: '🐛 fix', name: '🐛  fix:        Uma correção de bug' },
    {
      value: '🤖 chore',
      name: '🤖  chore:      Processo de build ou mudanças de tooling',
    },
    {
      value: '📝 docs',
      name: '📝  docs:       Alterações apenas na documentação',
    },
    {
      value: '💡 refactor',
      name:
        '💡  refactor:   Uma mudança de código que não corrige um bug nem adiciona um recurso',
    },
    {
      value: '💄 style',
      name:
        '💄  style:      Marcações, espaços em branco, formatação, ponto e vírgula faltando...',
    },
    { value: '🎡 ci', name: '🎡  ci:         Mudanças relacionadas a CI' },
    {
      value: '🚀 perf',
      name: '🚀  perf:       Uma mudança de código que melhora o desempenho',
    },
  ],

  scopes: [
    { name: 'conf-2021', description: 'App DevPR Conf 2021' },
    { name: 'talk-show', description: 'Pauta do talk show' },
    { name: 'website', description: 'O website foi alterado' },
    { name: 'recorder', description: 'O app Recorder foi alterado' },
    { name: 'devector', description: 'O app Devector foi alterado' },
    { name: 'presenter', description: 'O app Presenter foi alterado' },
    { name: 'example', description: 'O app Example foi alterado' },
    { name: 'endpoint', description: 'O app Endpoint foi alterado' },
    { name: 'core-entities', description: 'A lib Core Entities foi alterada' },
    {
      name: 'server-storage',
      description: 'A lib Server Storage foi alterada',
    },
    { name: 'web-core', description: 'A lib Web Core foi alterada' },
    { name: 'web-icons', description: 'A lib Web Icons foi alterada' },
    { name: 'web-buttons', description: 'A lib Web Buttons foi alterada' },
    { name: 'web-avatars', description: 'A lib Web Avatars foi alterada' },
    { name: 'web-forms', description: 'A lib Web Forms foi alterada' },
    { name: 'web-flows', description: 'A lib Web Flows foi alterada' },
    { name: 'common-web', description: 'A lib Common Web foi alterada' },
    {
      name: 'common-elements',
      description: 'A lib Common Elements foi alterada',
    },
    { name: 'infra', description: 'Documentações de gerenciamento' },
    {
      name: 'scss',
      description: 'Ajustes na estilização ou libs front externas',
    },
    { name: 'image', description: 'Imagens foram alteradas' },
    { name: 'specs', description: 'Especificações de design foram alteradas' },
    { name: 'tokens', description: 'Valores de design tokens alterados' },
    { name: 'scripts', description: 'Scripts auxiliares alterados' },
    {
      name: 'config',
      description: 'Configurações relacionadas ao tipo selecionado',
    },
  ],

  // override the messages, defaults are as follows
  messages: {
    type: 'Selecione o tipo de alteração que você está enviando:',
    scope: '\nIndique o ESCOPO desta alteração (opcional):',
    // used if allowCustomScopes is true
    customScope: 'Indique o escopo desta alteração:',
    subject: 'Escreva uma descrição CURTA e IMPERATIVA da mudança:\n',
    body:
      'Forneça uma descrição mais detalhada da alteração (optional). Use "|" para quebras de linha:\n',
    breaking: 'Listar quaisquer BREAKING CHANGES (opcional):\n',
    footer:
      'Alguma issue foi resolvida com esta alteração? (opcional). Ex.: #31, #34:\n',
    confirmCommit: 'Tudo certo, podemos concluir o commit acima?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 100,
}
