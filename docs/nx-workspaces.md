# NX Workspaces

## Configuração

```bash
├── nx.json
├── tsconfig.base.json
└── workspace.json
```

## Diretórios

### Pipeline

```bash
├── .github/
└── .ghusky/
```

### Projetos

```bash
├── apps/
└── packages/
```

### Compartilhados

```bash
├── assets/
└── design/
```

### Tooling

```bash
├── scripts/
└── tools/
```

---

## Comandos

### Estrutura de comandos nx

```bash
nx [target] [project] [params]
```

ou

```bash
nx project:target params
```

ou

```bash
nx affected:target params
```

ou

```bash
nx generate generator params
```

ou

```bash
nx run executor params
```

ou

> NX Console
>
> Extensão da nrwl que gerencia o repo, facilitando o uso dos comandos

---

## Git

### Iniciar uma feature ou fix

A partir da `main`

```bash
gco -b minha-branch
```

Trabalhe...

### Commit

```bash
git add arquivos
npm run commit
```

```bash
git push origin branch
```

Abra o `PR` da sua branch para branch `main`

### Rebase

```bash
gco main
git fetch --all --prune
git pull --rebase

gco branch
git rebase main
git push origin +branch
```
