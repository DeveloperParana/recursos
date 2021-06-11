# Complexidade no desenvolvimento

1. Apresentações

   1. Guilherme
   1. Clayton Passos
   1. Everton
   1. Geovani

1. Avisos
   1. Convite pra entrar no slack devparana.org
   1. Convite pra compartilhar pelo twitter usando @devparaná e #dts pra olharmos na live

1. Do que estamos falando?

   1. Simplicidade
   1. Dificuldade

1. Tipos de complexidades

   1. Técnicas acidentais
   1. Técnicas estratégicas
   1. Onde mora o caos?
   1. Comunicação

1. Quais as lacunas?
1. Como reconhece-las?

   1. Manutenção
   1. Retrabalho
   1. Arquitetura
   1. Domínio
   1. Legado

1. Como reconhecer e como podemos lidar com elas?

   1. Code review
   1. Experiência
   1. Treinamentos
   1. Ferramentas
   1. Recursos e custos

1. Quando evita-las?

   1. Complexidades desnecessárias
   1. O quê aumenta?
   1. O quê diminui?
   1. Over-engineer
   1. Equipe despreparada

1. Boas práticas

1. Qual é a sua maior dificuldade ao tentar conversar sobre código com as pessoas, seja olho no olho seja por code review? 
   1. Como superar essas dificuldades?

1. Com Microserviços criamos aplicações menores, isso não deveria diminuir a complexidade?

   1. Microserviço escala aplicação, tem alguma piora na comunicação?

1. A forma como as empresas se organiza e se comunica influência em como o software é feito, até mesmo como é escrito?

   1. Como propor melhorias na comunicação sem acabar criando spam e comunicado quem não precisa.

1. Técnica de gestão que influênciadas pelo Agile, como Scrum ajudam todos os tipos de empresa, em qualquer nível de maturidade de gestão e organização?

1. Técnicas de engenharia, também influênciadas pelo manifesto Agil, como Xtreme Programing, ajudam todos os tipos de empresa?

1. É facil fazer um Hello World?

   1. https://twitter.com/AluraOnline/status/1402661222479241217 
   1. https://taskinoor.wordpress.com/2011/09/21/the-abuse-of-design-patterns-in-writing-a-hello-world-program/ 


1. Todo projeto opensource de uma grande organização tem a qualidade de funcionar, mas o código é de qualidade?
   1. Ver o método build() https://github.com/zzphamvanthanhzz/httpclient-4.5.2-java/blob/master/httpclient/src/main/java/org/apache/http/impl/client/HttpClientBuilder.java
   1. https://archive.apache.org/dist/httpcomponents/httpclient/source/

1. Delegar código para uma ferramenta ou framework,  vocês tem alguma experiência com isso? 
   1. Redis simplifica a implementação 
   1. Lock distribuído.... Sabe aquele código que já é ruim, agora vai ficar pior, porque vai adicionar mais código https://redis.io/topics/distlock 


1. O Marketing tem uma técnica ou estratégia de vendas, que consiste em reembalar o mesmo produto de maneira a parecer diferente. Por exemplo, bolo pra mim é sempre bolo, mas quando você coloca no pote, aí e bolo no pote, se coloca cobertura e uma embalagem de papel é cup cake... Ok muitas pessoas agora vai dizer que eu não entendo nada, sobre culinária e bolos, mas pra mim é tudo bolo. 
   1. Vocês acham que isso acontece na nossa área, onde os caras trazem propostas com nomes novos com a ideia de simplificar mas na verdade é a mesma coisa com um nome diferente? 
   1. Exemplo, clean arquitect, arquitetura exagonal, ports and adapters não é tudo a mesma coisa que simplesmente Orientação a Objetos? 

