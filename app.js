/* ============================================================
   NR-1 Riscos Psicossociais - app.js
   ============================================================ */

// === DATA ===

const RISKS_DATA = [
  {
    id: 'assedio-moral-sexual',
    title: 'Assédio Moral e Sexual',
    icon: '🚫',
    colorClass: 'purple',
    category: 'relacional',
    categoryLabel: 'Relacional',
    summary: 'Comportamentos abusivos, humilhantes ou constrangedores que violam a dignidade da pessoa, incluindo condutas de natureza sexual não desejadas.',
    tabs: {
      conceito: `<p>O assédio moral e sexual no trabalho engloba comportamentos abusivos, humilhantes ou constrangedores que violam a dignidade da pessoa. Inclui condutas de natureza sexual não desejadas, "brincadeiras" ofensivas, exclusão social deliberada e uso do poder para intimidar ou constranger.</p>
<p>O elemento central não é apenas a gravidade de um episódio isolado, mas o padrão de comportamento que degrada sistematicamente o ambiente e a dignidade de quem trabalha. A NR-1 e a Lei 14.457/2022 reconhecem explicitamente esses comportamentos como riscos psicossociais que as organizações têm obrigação legal de prevenir e combater.</p>`,
      o_que_e: `<ul>
<li>Comentários sobre aparência física: "Essa roupa não te favorece", "Você engordou?", "Que cabelo é esse?"</li>
<li>Apelidos baseados em características pessoais: "Gordinho", "Baixinha", "Quatro-olhos", "Cabeção"</li>
<li>"Brincadeiras" constrangedoras: imitar sotaque, zombar de hábitos pessoais, fazer piadas sobre origem</li>
<li>Exclusão deliberada: não convidar para reuniões importantes, excluir de grupos de comunicação da equipe</li>
<li>Comentários sobre vida pessoal: "Ainda solteira?", "Quando vai ter filhos?", "Seu marido deixa?"</li>
<li>Assédio sexual: cantadas, convites insistentes, comentários sobre o corpo, toques não consensuais</li>
<li>Humilhação pública: gritar, xingar, criticar na frente de outros, expor erros publicamente</li>
<li>Sabotagem profissional: esconder informações, dar tarefas impossíveis, reter recursos necessários</li>
<li>Chantagem emocional: "Se você não fizer isso, vai prejudicar a equipe", "Depois não reclame se..."</li>
</ul>`,
      o_que_nao_e: `<ul>
<li><strong>Não é qualquer conflito ou feedback negativo:</strong> uma avaliação de desempenho crítica, uma advertência formal por erro ou um desentendimento pontual não constituem assédio</li>
<li><strong>Não é exigência de desempenho:</strong> cobrar resultados, estabelecer metas e dar feedback duro sobre performance inadequada são parte da gestão legítima, o problema é quando a cobrança é feita de forma humilhante</li>
<li><strong>Não é exclusivo do chefe:</strong> o assédio pode ser praticado por colegas (horizontal) ou até por subordinados (ascendente), não apenas pelo superior hierárquico</li>
<li><strong>Não é algo que "tem que aguentar"</strong> em nenhuma profissão ou setor</li>
</ul>`,
      como_se_manifesta: `<ul>
<li>Comportamentais: isolamento, evitar certas pessoas ou locais, faltas frequentes, pedidos de transferência</li>
<li>Emocionais: ansiedade, depressão, baixa autoestima, irritabilidade, choro frequente</li>
<li>Físicos: dores de cabeça, insônia, problemas digestivos, tensão muscular</li>
<li>Profissionais: queda na produtividade, erros frequentes, desmotivação, alta rotatividade</li>
<li>Organizacionais: clima tóxico, fofocas, divisões na equipe, processos trabalhistas</li>
</ul>`,
      exemplos: `<ul>
<li>Gerente que chama funcionários de "inúteis" em reuniões de equipe quando as metas não são batidas</li>
<li>Colega que sistematicamente omite outro colaborador de e-mails importantes e atribui os sucessos a si mesmo</li>
<li>Superior que faz comentários sobre o corpo de uma funcionária e a convida insistentemente para sair</li>
<li>Grupo de colegas que para de conversar com alguém que questionou uma decisão, criando isolamento deliberado</li>
<li>Lider que expõe publicamente os piores resultados individuais em reuniões gerais como "incentivo"</li>
</ul>`,
      impactos: `<ul>
<li>Transtorno de Estresse Pós-Traumático (TEPT) ocupacional</li>
<li>Depressão grave e risco aumentado de ideação suicida</li>
<li>Síndrome do pânico e transtornos de ansiedade</li>
<li>Doenças psicossomáticas graves</li>
<li>Danos à carreira e à reputação profissional da vítima</li>
<li>Impacto familiar intenso pela mudança de comportamento causada pelo sofrimento</li>
</ul>`,
      o_que_fazer: `<ul>
<li><strong>Para a vítima:</strong> documente tudo com datas, horários, testemunhas e o que foi dito, essa documentação é fundamental em qualquer processo</li>
<li><strong>Para a vítima:</strong> busque suporte médico e psicológico, o assédio causa adoecimento real que precisa de tratamento</li>
<li><strong>Para a vítima:</strong> denuncie ao canal de ética, RH, CIPA, sindicato ou Ministério do Trabalho</li>
<li><strong>Para o lider:</strong> estabelecer e comunicar claramente políticas de respeito e tolerância zero</li>
<li><strong>Para o lider:</strong> agir imediatamente ao presenciar ou ser informado de qualquer situação, criar ambiente seguro para denúncias</li>
<li><strong>Para a organização:</strong> a Lei 14.457/2022 exige que empresas com CIPA tenham canais específicos para denúncia de assédio</li>
</ul>`
    },
    checklistItems: [
      { id: 'am-1', text: 'Já fui humilhado(a) ou ridicularizado(a) por colegas ou gestores no trabalho' },
      { id: 'am-2', text: 'Já recebi comentários inadequados sobre minha aparência, vida pessoal ou características físicas' },
      { id: 'am-3', text: 'Já presenciei ou soube de casos de assédio no meu ambiente de trabalho sem que houvesse consequências' },
    ]
  },
  {
    id: 'carga-excessiva',
    title: 'Carga Excessiva de Trabalho',
    icon: '⚡',
    colorClass: 'teal',
    category: 'carga',
    categoryLabel: 'Carga e Demanda',
    summary: 'Volume de trabalho desproporcional à capacidade individual ou da equipe, incluindo prazos irreais, acúmulo de funções e expectativas impossíveis.',
    tabs: {
      conceito: `<p>A carga excessiva de trabalho ocorre quando o volume de trabalho é desproporcional à capacidade individual ou da equipe. Isso inclui prazos irreais, acúmulo de funções, falta de recursos adequados e expectativas impossíveis de serem atendidas dentro do tempo e condições disponíveis.</p>
<p>Diferente de períodos pontuais de maior trabalho, que são normais em qualquer carreira, esse fator de risco se caracteriza pela cronicidade: a sobrecarga deixa de ser exceção e passa a ser a regra. A NR-1 reconhece esse padrão como fator de risco psicossocial porque gera estados prolongados de estresse que comprometem o bem-estar físico e mental.</p>`,
      o_que_e: `<ul>
<li>Volume desproporcional: mais de 60 horas semanais regulares, trabalhar fins de semana constantemente</li>
<li>Prazos impossíveis: "Preciso para ontem", projetos de 1 mês para entregar em 1 semana</li>
<li>Acúmulo de funções: fazer trabalho de 2 ou 3 pessoas, assumir responsabilidades de colegas ausentes sem compensação</li>
<li>Falta de recursos: sistemas lentos, equipamentos inadequados, falta de pessoal</li>
<li>Interrupções constantes: reuniões excessivas, demandas urgentes que não são urgentes</li>
<li>Multitarefas extremas: gerenciar mais de 10 projetos simultâneos, atender múltiplas prioridades ao mesmo tempo</li>
<li>Trabalho fora do horário: e-mails à noite e fins de semana, ligações em horários pessoais</li>
<li>Metas inalcançáveis: aumentar vendas em 300%, reduzir custos em 50% mantendo a mesma qualidade</li>
<li>Pressão por disponibilidade: "Preciso que esteja sempre disponível", "Não pode tirar férias agora"</li>
</ul>`,
      o_que_nao_e: `<ul>
<li><strong>Não é apenas muito trabalho:</strong> um projeto intenso com prazo claro e temporário é diferente de sobrecarga crônica sem perspectiva de alívio</li>
<li><strong>Não é preguiça ou falta de organização:</strong> quando a carga estruturalmente excede a capacidade da função, o problema é organizacional, não individual</li>
<li><strong>Não é problema apenas de quem reclama:</strong> trabalhadores que nunca reclamam podem estar igualmente sobrecarregados e em maior risco por não buscar ajuda</li>
</ul>`,
      como_se_manifesta: `<ul>
<li>Físicos: exaustão crônica, dores musculares, problemas cardíacos, sistema imunológico baixo</li>
<li>Mentais: burnout, ansiedade, dificuldade de concentração, esquecimentos frequentes</li>
<li>Comportamentais: irritabilidade, isolamento social, uso de álcool ou medicamentos como escape</li>
<li>Familiares: conflitos em casa, ausência em eventos importantes, relacionamentos prejudicados</li>
<li>Profissionais: queda na qualidade, erros por pressa, absenteísmo, rotatividade alta</li>
<li>Organizacionais: clima de estresse, competição destrutiva, perda de talentos</li>
</ul>`,
      exemplos: `<ul>
<li>Enfermeira responsável por 20 leitos sozinha no plantão, acumulando funções que deveriam ser de uma equipe de três</li>
<li>Professor com 5 turmas por dia, planejamento, correções, relatórios e reuniões, tudo fora do horário de aula</li>
<li>Analista que cobre licença de colega sem redução das próprias metas, respondendo e-mails até meia-noite</li>
<li>Gerente de loja que acumula função de operador de caixa, estoquista e atendimento nos dias de folga da equipe</li>
<li>Desenvolvedor em startup que recebe mensagens do chefe às 23h com expectativa implícita de resposta imediata</li>
</ul>`,
      impactos: `<ul>
<li>Burnout (Síndrome de Esgotamento Profissional), reconhecida pela OMS como doença ocupacional</li>
<li>Transtornos de ansiedade e síndrome do pânico</li>
<li>Depressão relacionada ao trabalho</li>
<li>Hipertensão arterial e maior risco cardiovascular</li>
<li>Distúrbios do sono (insônia, sono não reparador)</li>
<li>Erros graves e acidentes de trabalho por déficit de atenção causado pela fadiga</li>
</ul>`,
      o_que_fazer: `<ul>
<li><strong>Para o trabalhador:</strong> registre formalmente as demandas excessivas criando histórico e comunique ao gestor com dados concretos sobre volume e prazos</li>
<li><strong>Para o trabalhador:</strong> estabeleça e comunique limites claros de disponibilidade, respaldado pela legislação trabalhista</li>
<li><strong>Para o lider:</strong> distribuir trabalho considerando capacidade real de cada pessoa, definir claramente o que é urgente versus importante</li>
<li><strong>Para o lider:</strong> redistribuir tarefas quando alguém está sobrecarregado e garantir ferramentas e pessoal adequados</li>
<li><strong>Para a organização:</strong> realizar mapeamento real de carga de trabalho antes de definir metas e quadro de pessoal</li>
</ul>`
    },
    checklistItems: [
      { id: 'ce-1', text: 'Com frequência não consigo terminar minhas tarefas dentro do horário de trabalho' },
      { id: 'ce-2', text: 'Sinto que tenho trabalho suficiente para duas ou mais pessoas' },
      { id: 'ce-3', text: 'Recebo mensagens ou ligações de trabalho fora do horário com expectativa de resposta' },
    ]
  },
  {
    id: 'falta-reconhecimento',
    title: 'Falta de Reconhecimento',
    icon: '🌑',
    colorClass: 'amber',
    category: 'organizacional',
    categoryLabel: 'Organizacional',
    summary: 'Ausência de valorização, feedback positivo ou recompensas pelo trabalho realizado, incluindo invisibilidade dos esforços e desproporção entre contribuição e retorno.',
    tabs: {
      conceito: `<p>A falta de reconhecimento engloba a ausência de valorização, feedback positivo ou recompensas pelo trabalho realizado. Inclui falta de crescimento profissional, invisibilidade dos esforços e desproporção entre a contribuição feita e o retorno recebido.</p>
<p>O reconhecimento é a confirmação de que o esforço e a competência do trabalhador são vistos e valorizados. Sua ausência crônica não é apenas uma questão de satisfação: ela mina a identidade profissional e é um preditor robusto de burnout e de abandono da função.</p>`,
      o_que_e: `<ul>
<li>Trabalho invisível: esforços não reconhecidos, contribuições não mencionadas</li>
<li>Falta de feedback positivo: só receber críticas, nunca elogios ou reconhecimento genuíno</li>
<li>Promoções injustas: outros sendo promovidos sem mérito claro, critérios opacos</li>
<li>Salário defasado: remuneração abaixo do mercado, sem reajustes há anos</li>
<li>Crédito roubado: chefe levando crédito por ideias ou trabalho da equipe</li>
<li>Comparações negativas: "Fulano faz melhor", "Na empresa X fazem diferente"</li>
<li>Desenvolvimento negado: não ter acesso a treinamentos, cursos e oportunidades de crescimento</li>
<li>Comunicação unilateral: nunca ser consultado, opiniões não valorizadas</li>
</ul>`,
      o_que_nao_e: `<ul>
<li><strong>Não é necessidade de elogios constantes:</strong> reconhecimento não é halago vazio, é feedback genuíno e visibilidade justa das contribuições</li>
<li><strong>Não é exclusivamente questão de remuneração:</strong> pessoas bem remuneradas também sofrem pela falta de reconhecimento, o dinheiro não substitui o sentido</li>
<li><strong>Não é problema apenas de pessoas que escolheram "a profissão errada":</strong> qualquer trabalho pode perder o significado quando as condições organizacionais o tornam alienante</li>
</ul>`,
      como_se_manifesta: `<ul>
<li>Motivacionais: desmotivação crescente, perda de engajamento, fazer o mínimo necessário</li>
<li>Emocionais: frustração, ressentimento, baixa autoestima, sensação de inutilidade</li>
<li>Comportamentais: procurar outras oportunidades, falar mal da empresa, sabotagem sutil</li>
<li>Relacionais: conflitos com colegas, competição destrutiva, inveja</li>
<li>Produtivos: queda na qualidade, falta de iniciativa, resistência a mudanças</li>
<li>Organizacionais: alta rotatividade, dificuldade para reter talentos, clima negativo</li>
</ul>`,
      exemplos: `<ul>
<li>Desenvolvedor talentoso alocado há dois anos apenas em manutenção de sistemas antigos, nunca incluído em projetos novos</li>
<li>Analista que sugeriu melhorias no processo três vezes, nunca recebeu resposta, e viu a mesma ideia ser implementada quando proposta pelo gestor</li>
<li>Professor que não recebe feedback algum sobre seu trabalho há anos, nem positivo nem negativo</li>
<li>Profissional que bate metas todos os meses mas nunca recebe um reconhecimento público ou privado por isso</li>
</ul>`,
      impactos: `<ul>
<li>Desengajamento profundo e presenteísmo crônico</li>
<li>Burnout na dimensão de redução da realização pessoal</li>
<li>Depressão existencial ligada ao trabalho</li>
<li>Alta rotatividade: talentos saem em busca de ambientes que os valorizem</li>
<li>Queda na qualidade e produtividade em toda a organização</li>
</ul>`,
      o_que_fazer: `<ul>
<li><strong>Para o trabalhador:</strong> articule ativamente seu interesse em projetos com mais visibilidade e mostre o que você quer, não apenas o que não quer</li>
<li><strong>Para o lider:</strong> reconhecer regularmente com feedback positivo específico e frequente, não apenas em avaliações anuais</li>
<li><strong>Para o lider:</strong> celebrar conquistas individuais e da equipe publicamente, sempre dar crédito a quem fez o trabalho</li>
<li><strong>Para o lider:</strong> oferecer oportunidades reais de crescimento e desenvolvimento, não apenas promessas</li>
<li><strong>Para a organização:</strong> criar critérios claros e transparentes para promoções e recompensas</li>
</ul>`
    },
    checklistItems: [
      { id: 'fr-1', text: 'Meu esforço e minhas contribuições raramente ou nunca são reconhecidos' },
      { id: 'fr-2', text: 'Sinto que minha progressão na carreira é injusta em comparação com colegas' },
      { id: 'fr-3', text: 'Nunca ou raramente recebo feedback positivo, apenas críticas' },
    ]
  },
  {
    id: 'clima-organizacional-negativo',
    title: 'Clima Organizacional Negativo',
    icon: '🌩️',
    colorClass: 'purple',
    category: 'organizacional',
    categoryLabel: 'Organizacional',
    summary: 'Ambiente de trabalho caracterizado por desconfiança, fofocas, competição destrutiva, falta de colaboração e ausência de senso de propósito compartilhado.',
    tabs: {
      conceito: `<p>O clima organizacional negativo é caracterizado por um ambiente de trabalho marcado por desconfiança, fofocas, competição destrutiva, falta de colaboração, comunicação tóxica e ausência de senso de propósito compartilhado.</p>
<p>O clima organizacional não é um elemento abstrato: ele é vivido nas interações do cotidiano, nas conversas de corredor, nas reuniões e nos e-mails. Quando negativo, contamina progressivamente a saúde mental de toda a equipe, independentemente da solidez dos processos formais da organização.</p>`,
      o_que_e: `<ul>
<li>Fofocas constantes: comentários maldosos sobre colegas, espalhar rumores sem base</li>
<li>Competição destrutiva: sabotagem entre colegas, esconder informações importantes</li>
<li>Desconfiança generalizada: suspeitar de intenções, não compartilhar ideias por medo de cópia</li>
<li>Comunicação tóxica: ironias, sarcasmo, comentários passivo-agressivos frequentes</li>
<li>Panelas e grupinhos: exclusão de certos membros, favoritismo evidente</li>
<li>Ambiente de medo: medo de errar, de falar, de sugerir, de ser diferente</li>
<li>Cinismo generalizado: "Nada funciona aqui", "A empresa não se importa", descrença coletiva</li>
<li>Conflitos não resolvidos: tensões antigas que nunca foram tratadas e se acumulam</li>
</ul>`,
      o_que_nao_e: `<ul>
<li><strong>Não é apenas um dia ruim:</strong> o clima organizacional negativo é um padrão persistente, não episódios isolados de tensão</li>
<li><strong>Não é culpa de um único indivíduo:</strong> embora líderes tenham papel fundamental, o clima negativo é um fenômeno coletivo que envolve múltiplos atores</li>
<li><strong>Não é inevitável:</strong> climas negativos podem ser revertidos com liderança consistente e ações estruturais adequadas</li>
</ul>`,
      como_se_manifesta: `<ul>
<li>Relacionais: isolamento, conflitos frequentes, falta de confiança mútua entre colegas</li>
<li>Comunicacionais: informações distorcidas, mal-entendidos constantes, silêncio em reuniões</li>
<li>Motivacionais: desengajamento, falta de iniciativa, resistência passiva a qualquer mudança</li>
<li>Produtivos: baixa colaboração, retrabalho, projetos que não avançam</li>
<li>Emocionais: estresse, ansiedade, depressão, irritabilidade constante</li>
<li>Organizacionais: alta rotatividade, dificuldade para contratar e reter, imagem negativa no mercado</li>
</ul>`,
      exemplos: `<ul>
<li>Equipe onde ninguém compartilha informações voluntariamente porque "cada um cuida do próprio emprego"</li>
<li>Empresa onde as pessoas só falam bem da organização publicamente mas criticam tudo em conversas privadas</li>
<li>Ambiente onde novas ideias são sistematicamente recebidas com ceticismo e frases como "sempre foi assim"</li>
<li>Setor onde existem grupos fechados que excluem sistematicamente certos colegas de conversas e decisões</li>
</ul>`,
      impactos: `<ul>
<li>Estresse crônico por exposição contínua a ambiente hostil</li>
<li>Ansiedade e depressão relacionadas ao trabalho</li>
<li>Comprometimento da criatividade e da inovação coletiva</li>
<li>Perda de talentos para concorrentes com melhor cultura</li>
<li>Aumento de processos trabalhistas e reclamações</li>
</ul>`,
      o_que_fazer: `<ul>
<li><strong>Para o lider:</strong> ser exemplo de positividade e colaboração, combater fofocas sem participar nem permitir conversas destrutivas</li>
<li><strong>Para o lider:</strong> promover colaboração com projetos em equipe, resolver conflitos rapidamente antes que se tornem tóxicos</li>
<li><strong>Para o lider:</strong> comunicar com transparência, criar rituais positivos de celebração e integração</li>
<li><strong>Para o trabalhador:</strong> não alimentar fofocas e comunicação tóxica, mesmo quando há pressão do grupo</li>
<li><strong>Para a organização:</strong> realizar pesquisas de clima com regularidade e tomar ações concretas baseadas nos resultados</li>
</ul>`
    },
    checklistItems: [
      { id: 'co-1', text: 'O ambiente no meu trabalho é marcado por fofocas e competição destrutiva' },
      { id: 'co-2', text: 'Sinto que não posso confiar nas intenções dos meus colegas ou liderança' },
      { id: 'co-3', text: 'Novas ideias e sugestões raramente são bem recebidas no meu ambiente de trabalho' },
    ]
  },
  {
    id: 'falta-autonomia',
    title: 'Falta de Autonomia',
    icon: '🔒',
    colorClass: 'teal',
    category: 'organizacional',
    categoryLabel: 'Organizacional',
    summary: 'Ausência de poder de decisão sobre o próprio trabalho, incluindo microgerenciamento excessivo, falta de flexibilidade e controle rígido sobre métodos.',
    tabs: {
      conceito: `<p>A falta de autonomia refere-se à ausência de poder de decisão sobre o próprio trabalho. Inclui microgerenciamento excessivo, falta de flexibilidade, controle rígido sobre métodos e horários, e impossibilidade de influenciar aspectos relevantes da própria função.</p>
<p>O controle sobre o trabalho é um fator protetor fundamental para a saúde mental. Quando as pessoas têm autonomia, conseguem adaptar as demandas às suas capacidades, gerenciar o estresse de forma ativa e encontrar significado no que fazem. Sua ausência cria uma sensação de impotência que, combinada com alta demanda, representa um dos maiores fatores de risco para doenças relacionadas ao trabalho.</p>`,
      o_que_e: `<ul>
<li>Microgerenciamento: controlar cada passo, pedir relatórios constantes, não confiar nas decisões da equipe</li>
<li>Decisões centralizadas: tudo precisa de aprovação, mesmo decisões simples e rotineiras</li>
<li>Métodos rígidos: "Tem que ser exatamente assim", não aceitar sugestões de melhoria</li>
<li>Horários inflexíveis: não permitir ajustes mesmo quando seria possível e benéfico para todos</li>
<li>Controle excessivo: monitorar telas, cronometrar pausas, rastrear localização a todo momento</li>
<li>Burocracia desnecessária: processos complexos para tarefas simples sem justificativa real</li>
<li>Hierarquia rígida: não poder falar com outros níveis, comunicação permitida apenas vertical</li>
<li>Criatividade limitada: "Não invente", "Faça como sempre foi feito"</li>
</ul>`,
      o_que_nao_e: `<ul>
<li><strong>Não é ter regras e processos:</strong> toda organização tem procedimentos necessários, o problema é quando eles eliminam completamente o julgamento e a iniciativa do trabalhador</li>
<li><strong>Não é ter um gestor próximo:</strong> liderança presente e acessível é diferente de microgerenciamento, um bom gestor orienta sem controlar cada detalhe</li>
<li><strong>Não é problema apenas de funções técnicas:</strong> qualquer trabalhador precisa de algum grau de autonomia para se sentir respeitado profissionalmente</li>
</ul>`,
      como_se_manifesta: `<ul>
<li>Motivacionais: desmotivação, falta de engajamento, sensação de inutilidade e de ser "apenas uma peça"</li>
<li>Criativos: perda de iniciativa, não sugerir melhorias, conformismo progressivo</li>
<li>Emocionais: frustração, sensação de infantilização, baixa autoestima profissional</li>
<li>Comportamentais: dependência excessiva, não tomar decisões, esperar ordens para tudo</li>
<li>Produtivos: lentidão nos processos, falta de agilidade, perda de oportunidades</li>
<li>Desenvolvimento: estagnação profissional, não desenvolver competências de liderança</li>
</ul>`,
      exemplos: `<ul>
<li>Atendente que deve seguir roteiro palavra por palavra, sem poder adaptar a linguagem ao cliente mesmo percebendo que não está funcionando</li>
<li>Motorista rastreado em tempo real com alertas automáticos para cada parada, sem poder ajustar rota mesmo em situações óbvias</li>
<li>Desenvolvedor sênior que precisa justificar por escrito cada decisão técnica para um gestor sem formação na área</li>
<li>Profissional que precisa pedir autorização até para comprar material de escritório de baixo custo</li>
</ul>`,
      impactos: `<ul>
<li>Estresse crônico e síndrome de esgotamento</li>
<li>Depressão e sensação de ineficácia profissional</li>
<li>Alta rotatividade e absenteísmo na equipe</li>
<li>Hipertensão e doenças cardiovasculares</li>
<li>Perda de competência prática por falta de uso, o trabalhador perde confiança em si mesmo</li>
</ul>`,
      o_que_fazer: `<ul>
<li><strong>Para o trabalhador:</strong> proponha conversas sobre autonomia com responsabilidade, mostre que você entende os riscos e tem soluções concretas</li>
<li><strong>Para o lider:</strong> delegar efetivamente com responsabilidades reais e poder de decisão, confiar na equipe e focar em resultados</li>
<li><strong>Para o lider:</strong> aceitar diferentes formas de chegar ao mesmo resultado, dar contexto explicando o "porquê" para que possam decidir alinhados</li>
<li><strong>Para o lider:</strong> eliminar burocracias desnecessárias e criar ambiente seguro para experimentação e aprendizado</li>
<li><strong>Para a organização:</strong> revisar processos que eliminam desnecessariamente a autonomia</li>
</ul>`
    },
    checklistItems: [
      { id: 'fa-1', text: 'Tenho pouca ou nenhuma liberdade para decidir como realizar minhas tarefas' },
      { id: 'fa-2', text: 'Me sinto monitorado(a) de forma excessiva no trabalho' },
      { id: 'fa-3', text: 'Preciso pedir autorização até para decisões simples e rotineiras' },
    ]
  },
  {
    id: 'pressao-metas',
    title: 'Pressão Excessiva por Metas',
    icon: '🎯',
    colorClass: 'amber',
    category: 'carga',
    categoryLabel: 'Carga e Demanda',
    summary: 'Cobrança desproporcional por resultados, metas irreais, pressão constante por performance e consequências desproporcionais por não atingir objetivos.',
    tabs: {
      conceito: `<p>A pressão excessiva por metas ocorre quando há cobrança desproporcional por resultados. Inclui metas irreais, pressão constante por performance, foco exclusivo em números sem considerar o bem-estar das pessoas e consequências desproporcionais por não atingir objetivos.</p>
<p>Metas são instrumentos legítimos de gestão. O problema não é ter metas, mas quando elas são estabelecidas de forma irrealista, usadas como instrumento de pressão emocional ou perseguidas com métodos que sacrificam a saúde das pessoas.</p>`,
      o_que_e: `<ul>
<li>Metas impossíveis: aumentar vendas em 500%, reduzir custos em 80% sem reduzir qualidade</li>
<li>Pressão constante: cobrança diária, reuniões cujo único tema são os números</li>
<li>Consequências desproporcionais: demissão por não bater meta uma única vez</li>
<li>Comparações públicas: rankings expostos, "hall da vergonha" para os piores resultados</li>
<li>Metas sem recursos: cobrar resultados sem dar as ferramentas necessárias</li>
<li>Mudanças constantes: alterar metas no meio do período, mover a meta</li>
<li>Pressão emocional: "Se não bater, vai prejudicar toda a equipe"</li>
<li>Foco só em números: ignorar qualidade, relacionamentos e sustentabilidade</li>
<li>Competição destrutiva: colocar colegas uns contra os outros para disputar posições</li>
</ul>`,
      o_que_nao_e: `<ul>
<li><strong>Não é ter metas e ser cobrado:</strong> estabelecer objetivos claros e acompanhar resultados é parte legítima da gestão</li>
<li><strong>Não é exigência de qualidade:</strong> querer que o trabalho seja bem feito é diferente de pressionar com metas irrealistas</li>
<li><strong>Não é apenas problema de área comercial:</strong> a pressão por metas existe em todas as áreas e setores, produção, saúde, educação e serviço público incluídos</li>
</ul>`,
      como_se_manifesta: `<ul>
<li>Físicos: estresse crônico, problemas cardíacos, úlceras, insônia</li>
<li>Mentais: ansiedade extrema, depressão, síndrome do pânico</li>
<li>Comportamentais: comportamentos antiéticos para bater metas, omissões, distorções</li>
<li>Relacionais: conflitos com colegas, competição destrutiva, isolamento</li>
<li>Familiares: negligenciar família, trabalhar em horários pessoais de forma crônica</li>
<li>Organizacionais: rotatividade alta, clima de medo, erosão dos valores</li>
</ul>`,
      exemplos: `<ul>
<li>Vendedor que tem sua remuneração variável zerada por não bater meta um mês, mesmo após anos de alto desempenho</li>
<li>Médico em plano de saúde pressionado a limitar consultas a 7 minutos para atingir metas de produtividade</li>
<li>Equipe cujas metas são aumentadas automaticamente sempre que são atingidas, sem limite</li>
<li>Professor com metas de aprovação que o incentivam a aprovar alunos sem o aprendizado necessário</li>
</ul>`,
      impactos: `<ul>
<li>Estresse crônico e doenças cardiovasculares associadas</li>
<li>Burnout por pressão contínua e sem perspectiva de alívio</li>
<li>Comportamentos antiéticos que comprometem a integridade individual e organizacional</li>
<li>Deterioração dos relacionamentos profissionais e pessoais</li>
<li>Alta rotatividade especialmente dos melhores profissionais</li>
</ul>`,
      o_que_fazer: `<ul>
<li><strong>Para o trabalhador:</strong> documente situações onde as metas são claramente impossíveis ou onde faltam os recursos necessários para atingi-las</li>
<li><strong>Para o lider:</strong> estabelecer metas realistas considerando capacidade, recursos e contexto real</li>
<li><strong>Para o lider:</strong> equilibrar cobrança com suporte, focar em desenvolvimento não apenas resultados, reconhecer esforço além dos sucessos</li>
<li><strong>Para o lider:</strong> não romantizar sobrecarga nem elogiar quem trabalha além do saudável como modelo</li>
<li><strong>Para a organização:</strong> rever processos de definição de metas para garantir que sejam desafiadoras mas atingíveis</li>
</ul>`
    },
    checklistItems: [
      { id: 'pm-1', text: 'As metas que recebo frequentemente parecem impossíveis de atingir com os recursos disponíveis' },
      { id: 'pm-2', text: 'A cobrança por resultados no meu trabalho gera ansiedade e medo frequentes' },
      { id: 'pm-3', text: 'Sinto que os erros são punidos de forma desproporcional em relação aos acertos reconhecidos' },
    ]
  },
  {
    id: 'falta-seguranca-psicologica',
    title: 'Falta de Segurança Psicológica',
    icon: '🛡️',
    colorClass: 'teal',
    category: 'relacional',
    categoryLabel: 'Relacional',
    summary: 'Ambiente onde pessoas não se sentem seguras para expressar opiniões, cometer erros, ser vulneráveis ou mostrar sua verdadeira personalidade.',
    tabs: {
      conceito: `<p>A falta de segurança psicológica ocorre em ambientes onde as pessoas não se sentem seguras para expressar opiniões, cometer erros, ser vulneráveis ou mostrar sua verdadeira personalidade, por medo de julgamento, punição ou exclusão.</p>
<p>O conceito de segurança psicológica foi popularizado pela pesquisadora Amy Edmondson, da Harvard Business School, e é hoje reconhecido como um dos fatores mais importantes para o desempenho e a saúde das equipes. Sem ela, as pessoas se calam, se conformam e se protegem, em vez de contribuir com o melhor de si.</p>`,
      o_que_e: `<ul>
<li>Medo de errar: punições severas por erros, não permitir experimentação ou aprendizado pela tentativa</li>
<li>Não poder discordar: "Aqui não se questiona", "Faça e não reclame"</li>
<li>Julgamento constante: críticas pessoais, ironias, sarcasmo em resposta a contribuições</li>
<li>Perfeccionismo tóxico: "Tem que ser perfeito", "Erro não é opção"</li>
<li>Exclusão por diferenças: não aceitar estilos diferentes, pouca tolerância à diversidade</li>
<li>Reuniões tensas: ambiente de medo onde as pessoas não falam mesmo quando têm algo a dizer</li>
<li>Retaliação: punir quem dá feedback negativo ou faz sugestões de melhoria</li>
<li>Cultura do culpado: sempre procurar quem errou para punir em vez de aprender com o erro</li>
</ul>`,
      o_que_nao_e: `<ul>
<li><strong>Não é ausência de responsabilidade:</strong> segurança psicológica não significa que erros não tenham consequências, mas que as pessoas não sejam punidas por tentar e por ser honestas</li>
<li><strong>Não é concordância obrigatória:</strong> ambientes seguros são justamente aqueles onde discordâncias podem ser expressas com respeito</li>
<li><strong>Não é apenas responsabilidade do lider:</strong> toda a equipe contribui para criar ou destruir a segurança psicológica do grupo</li>
</ul>`,
      como_se_manifesta: `<ul>
<li>Comunicacionais: silêncio em reuniões, não compartilhar ideias, concordar sempre mesmo discordando internamente</li>
<li>Inovativos: falta de criatividade, não sugerir melhorias, conformismo crescente</li>
<li>Relacionais: relacionamentos superficiais, não confiar nos colegas o suficiente para ser vulnerável</li>
<li>Emocionais: ansiedade, estresse, sensação de estar sempre sendo avaliado e julgado</li>
<li>Comportamentais: evitar riscos, não tomar iniciativa, fazer apenas o mínimo seguro</li>
<li>Organizacionais: perda de inovação, problemas não reportados, estagnação do time</li>
</ul>`,
      exemplos: `<ul>
<li>Equipe onde ninguém faz perguntas em reuniões porque fazê-las seria interpretado como incompetência</li>
<li>Ambiente onde reportar um problema é mais arriscado do que escondê-lo, por medo de ser responsabilizado</li>
<li>Profissional que tem uma ideia de melhoria mas não a compartilha porque a última vez que fez isso foi ridicularizado</li>
<li>Time que concorda unanimemente com o gestor em público mas tem opiniões completamente diferentes em particular</li>
</ul>`,
      impactos: `<ul>
<li>Perda de inovação e criatividade coletiva</li>
<li>Problemas reais que não são reportados até se tornarem crises</li>
<li>Ansiedade e estresse crônico pelo esforço constante de se proteger</li>
<li>Conformismo que leva à estagnação individual e coletiva</li>
<li>Alta rotatividade de pessoas que buscam ambientes onde possam contribuir de verdade</li>
</ul>`,
      o_que_fazer: `<ul>
<li><strong>Para o lider:</strong> normalizar erros tratando-os como oportunidades de aprendizado, admitir os próprios erros e limitações</li>
<li><strong>Para o lider:</strong> encorajar ativamente diferentes perspectivas, fazer perguntas, receber feedback negativo com abertura genuína</li>
<li><strong>Para o lider:</strong> não retaliar, proteger a equipe de julgamentos e críticas destrutivas</li>
<li><strong>Para o trabalhador:</strong> praticar vulnerabilidade estratégica, começar com pequenas contribuições para construir confiança</li>
<li><strong>Para a organização:</strong> criar rituais seguros de compartilhamento aberto onde todos tenham espaço garantido para falar</li>
</ul>`
    },
    checklistItems: [
      { id: 'sp-1', text: 'Evito expressar opiniões contrárias no trabalho por medo das consequências' },
      { id: 'sp-2', text: 'No meu ambiente, cometer erros é punido em vez de tratado como aprendizado' },
      { id: 'sp-3', text: 'Me sinto julgado(a) quando faço perguntas ou admito que não sei algo' },
    ]
  },
  {
    id: 'conflitos-comunicacao',
    title: 'Conflitos Interpessoais e Comunicação Falha',
    icon: '💬',
    colorClass: 'purple',
    category: 'relacional',
    categoryLabel: 'Relacional',
    summary: 'Problemas na comunicação entre pessoas, incluindo conflitos não resolvidos, mal-entendidos frequentes e comunicação agressiva ou passiva-agressiva.',
    tabs: {
      conceito: `<p>Os conflitos interpessoais e a comunicação falha englobam problemas na comunicação entre pessoas no ambiente de trabalho. Incluem conflitos não resolvidos, mal-entendidos frequentes, comunicação agressiva ou passiva-agressiva, e falta de habilidades para o diálogo construtivo.</p>
<p>A comunicação é o tecido conjuntivo de qualquer organização. Quando ela é consistentemente falha, o impacto vai além do desconforto pessoal: projetos atrasam, decisões são mal implementadas, relacionamentos se deterioram e o custo humano e financeiro é significativo.</p>`,
      o_que_e: `<ul>
<li>Comunicação agressiva: gritos, xingamentos, tom ameaçador nas interações cotidianas</li>
<li>Passivo-agressividade: ironias, sarcasmo, "fazer corpo mole" como forma de resistência</li>
<li>Mal-entendidos constantes: informações distorcidas, interpretações erradas por falta de clareza</li>
<li>Conflitos não resolvidos: tensões antigas que nunca foram tratadas e continuam afetando a equipe</li>
<li>Falta de clareza: instruções confusas, expectativas não definidas, responsabilidades sobrepostas</li>
<li>Comunicação unilateral: só falar, não escutar, interromper sempre</li>
<li>Fofocas e rumores: comunicação indireta, "telefone sem fio" como forma principal de informação</li>
<li>Canais inadequados: discutir assuntos sérios por WhatsApp, e-mail ou mensagem quando precisaria de conversa direta</li>
</ul>`,
      o_que_nao_e: `<ul>
<li><strong>Não é discordância normal:</strong> pessoas com perspectivas diferentes que discordam respeitosamente estão se comunicando bem, não mal</li>
<li><strong>Não é apenas problema de personalidade:</strong> comunicação falha frequentemente reflete estruturas e culturas organizacionais, não apenas características individuais</li>
<li><strong>Não é resolvido apenas com treinamento:</strong> habilidades de comunicação precisam de prática no dia a dia, não apenas de cursos</li>
</ul>`,
      como_se_manifesta: `<ul>
<li>Relacionais: tensões constantes, evitar certas pessoas, isolamento progressivo</li>
<li>Produtivos: retrabalho por mal-entendidos, projetos que não avançam por falta de alinhamento</li>
<li>Emocionais: estresse, frustração, ansiedade antes de interações com certas pessoas</li>
<li>Colaborativos: falta de trabalho em equipe, competição destrutiva, informações que não fluem</li>
<li>Organizacionais: clima tenso, decisões ruins por falta de informação completa</li>
</ul>`,
      exemplos: `<ul>
<li>Gestor que comunica mudanças importantes por mensagem de texto de uma linha, sem contexto ou espaço para perguntas</li>
<li>Equipe com conflito antigo entre dois membros que nunca foi mediado e hoje contamina toda a dinâmica do grupo</li>
<li>Profissional que recebe instruções contraditórias de dois gestores diferentes e não tem canal seguro para resolver o impasse</li>
<li>Ambiente onde as pessoas evitam conversas difíceis e os problemas só vêm à tona quando já viraram crises</li>
</ul>`,
      impactos: `<ul>
<li>Estresse interpessoal crônico por exposição a comunicação hostil ou confusa</li>
<li>Ansiedade social relacionada a interações no trabalho</li>
<li>Erros e retrabalho com custos reais para a organização</li>
<li>Deterioração do clima organizacional de forma progressiva</li>
<li>Afastamentos por conflitos não resolvidos que escalam para situações de assédio</li>
</ul>`,
      o_que_fazer: `<ul>
<li><strong>Para o trabalhador:</strong> escolha o canal certo para cada conversa, assuntos sensíveis merecem conversa direta, não mensagem</li>
<li><strong>Para o lider:</strong> mediar conflitos rapidamente, facilitar conversas difíceis entre membros da equipe</li>
<li><strong>Para o lider:</strong> dar exemplo de comunicação clara e respeitosa, escutar ativamente demonstrando como ouvir com atenção</li>
<li><strong>Para o lider:</strong> estabelecer regras claras de comunicação respeitosa e aplicá-las consistentemente</li>
<li><strong>Para a organização:</strong> criar canais adequados para diferentes tipos de comunicação e treinar a equipe no uso de cada um</li>
</ul>`
    },
    checklistItems: [
      { id: 'cc-1', text: 'Com frequência recebo informações confusas ou contraditórias sobre meu trabalho' },
      { id: 'cc-2', text: 'Existem conflitos não resolvidos na minha equipe que afetam o trabalho do dia a dia' },
      { id: 'cc-3', text: 'A comunicação no meu ambiente de trabalho costuma ser agressiva, irônica ou passivo-agressiva' },
    ]
  },
  {
    id: 'desequilibrio-vida',
    title: 'Desequilíbrio Vida Pessoal vs Profissional',
    icon: '⚖️',
    colorClass: 'amber',
    category: 'carga',
    categoryLabel: 'Carga e Demanda',
    summary: 'Invasão excessiva do trabalho na vida pessoal, incluindo jornadas extensas, pressão para estar sempre disponível e dificuldade de desconectar.',
    tabs: {
      conceito: `<p>O desequilíbrio vida pessoal versus profissional ocorre quando o trabalho invade excessivamente a vida pessoal. Inclui jornadas extensas, trabalho em horários pessoais, pressão para estar sempre disponível e dificuldade para desconectar e ter tempo para família, lazer e autocuidado.</p>
<p>Com o avanço da tecnologia e do trabalho remoto, as fronteiras entre trabalho e vida pessoal tornaram-se cada vez mais porosas. A NR-1 reconhece esse conflito como risco psicossocial porque seus impactos na saúde são bem documentados e frequentemente resultam de escolhas organizacionais, não apenas de dificuldades individuais de gestão do tempo.</p>`,
      o_que_e: `<ul>
<li>Jornadas extensas: trabalhar mais de 12 horas regularmente, não ter horário para sair</li>
<li>Trabalho invadindo casa: e-mails à noite, ligações nos fins de semana como rotina</li>
<li>Disponibilidade 24 horas: "Preciso que esteja sempre disponível"</li>
<li>Férias interrompidas: trabalhar durante férias, não conseguir desconectar mesmo em descanso formal</li>
<li>Eventos perdidos: faltar a aniversários, formaturas, momentos importantes em função de demandas do trabalho</li>
<li>Pressão social: "Quem não fica até tarde não é comprometido"</li>
<li>Culpa por limites: sentir-se mal por não responder mensagens imediatamente fora do horário</li>
<li>Saúde negligenciada: não ter tempo para exercícios, consultas médicas, alimentação adequada</li>
</ul>`,
      o_que_nao_e: `<ul>
<li><strong>Não é fraqueza ou falta de comprometimento:</strong> querer ter vida pessoal saudável não torna o trabalhador menos profissional</li>
<li><strong>Não é problema apenas de mães:</strong> o desequilíbrio afeta pessoas de todos os gêneros, embora as mulheres ainda carreguem desproporcionalmente o peso do trabalho doméstico</li>
<li><strong>Não é resolvido apenas com home office:</strong> trabalhar de casa sem limites claros frequentemente intensifica o conflito</li>
<li><strong>Não é falta de organização pessoal:</strong> quando a estrutura da organização não permite equilíbrio, a gestão pessoal do tempo tem limite</li>
</ul>`,
      como_se_manifesta: `<ul>
<li>Físicos: exaustão, problemas de saúde, ganho ou perda de peso significativos</li>
<li>Familiares: conflitos conjugais, filhos distantes, isolamento social progressivo</li>
<li>Emocionais: culpa constante, ansiedade, sensação de estar perdendo a própria vida</li>
<li>Mentais: dificuldade para relaxar, pensamentos obsessivos sobre trabalho mesmo em momentos de lazer</li>
<li>Sociais: perda de amizades, não participar de atividades sociais importantes</li>
<li>Pessoais: perda de identidade, não saber quem se é além do papel profissional</li>
</ul>`,
      exemplos: `<ul>
<li>Gerente que perdeu a apresentação do filho na escola pela terceira vez seguida por não conseguir sair antes das 21h</li>
<li>Trabalhador remoto que responde e-mails do escritório às 11h da noite porque a fronteira entre casa e trabalho desapareceu</li>
<li>Profissional que não tira férias há 3 anos porque "não tem como" e nem percebe mais o quanto isso o afetou</li>
<li>Membro de equipe que sente culpa genuína por não responder uma mensagem do chefe enviada no domingo à tarde</li>
</ul>`,
      impactos: `<ul>
<li>Estresse crônico e burnout por ausência de recuperação real</li>
<li>Comprometimento da qualidade dos relacionamentos afetivos</li>
<li>Depressão e ansiedade</li>
<li>Doenças psicossomáticas: gastrite, enxaqueca, tensão muscular crônica</li>
<li>Impacto no desenvolvimento dos filhos pela ausência crônica do responsável</li>
</ul>`,
      o_que_fazer: `<ul>
<li><strong>Para o trabalhador:</strong> estabeleça limites explícitos e comunique-os claramente, defina horários de disponibilidade e cumpra-os</li>
<li><strong>Para o trabalhador:</strong> conheça seus direitos: a CLT limita a jornada e há jurisprudência sobre sobreaviso digital</li>
<li><strong>Para o lider:</strong> respeitar horários e não enviar mensagens fora do expediente, dar exemplo tendo equilíbrio próprio</li>
<li><strong>Para o lider:</strong> incentivar descanso, promover férias e não romantizar sobrecarga elogiando quem trabalha em excesso</li>
<li><strong>Para a organização:</strong> implementar política real de desconexão digital, não apenas declarativa</li>
</ul>`
    },
    checklistItems: [
      { id: 'dv-1', text: 'O trabalho me impede regularmente de participar de momentos importantes com minha família ou amigos' },
      { id: 'dv-2', text: 'Tenho dificuldade de "desligar" do trabalho mesmo nos momentos de descanso' },
      { id: 'dv-3', text: 'Sinto culpa quando não estou disponível para o trabalho fora do horário' },
    ]
  },
  {
    id: 'qualidade-lideranca',
    title: 'Qualidade da Liderança',
    icon: '👁️',
    colorClass: 'teal',
    category: 'organizacional',
    categoryLabel: 'Organizacional',
    summary: 'Competência, estilo e comportamento dos lideres, incluindo habilidades de gestão de pessoas, consistência entre discurso e prática e impacto direto na saúde mental da equipe.',
    tabs: {
      conceito: `<p>A qualidade da liderança refere-se à competência, ao estilo e ao comportamento dos lideres, incluindo suas habilidades de gestão de pessoas, capacidade de inspirar e desenvolver, consistência entre discurso e prática, e o impacto direto que exercem sobre a saúde mental da equipe.</p>
<p>Pesquisas consistentemente mostram que as pessoas não abandonam empresas: elas abandonam lideres. A liderança é o fator psicossocial com maior poder de ampliação ou mitigação de todos os outros riscos. Um bom lider pode proteger sua equipe mesmo em ambientes organizacionais difíceis. Um lider inadequado pode destruir um ambiente organizacional saudável.</p>`,
      o_que_e: `<ul>
<li>Liderança autoritária: "Faça porque eu mandei", não aceitar questionamentos legítimos</li>
<li>Liderança ausente: não dar direção, não estar disponível quando a equipe precisa</li>
<li>Inconsistência: mudar de opinião constantemente, não ter critérios claros e previsíveis</li>
<li>Falta de desenvolvimento: não investir no crescimento da equipe</li>
<li>Favoritismo: tratar pessoas de forma diferente sem critério justo e transparente</li>
<li>Falta de empatia: não considerar sentimentos e necessidades da equipe</li>
<li>Comunicação inadequada: ser confuso, agressivo ou distante na comunicação</li>
<li>Não dar feedback: deixar pessoas sem saber como estão se saindo</li>
<li>Modelo negativo: ter comportamentos que não gostaria de ver na equipe</li>
</ul>`,
      o_que_nao_e: `<ul>
<li><strong>Não é apenas estilo pessoal:</strong> a qualidade da liderança tem impacto mensurável na saúde e no desempenho da equipe, não é apenas questão de preferência</li>
<li><strong>Não é perfeição:</strong> nenhum lider é perfeito, o que importa é a consciência sobre o impacto e o compromisso com o desenvolvimento</li>
<li><strong>Não é exclusivo de grandes lideranças:</strong> coordenadores, supervisores e líderes informais também exercem impacto psicossocial significativo sobre quem está ao redor</li>
</ul>`,
      como_se_manifesta: `<ul>
<li>Motivacionais: desmotivação generalizada, falta de engajamento na equipe</li>
<li>Desenvolvimento: estagnação profissional, falta de crescimento, sensação de não aprender nada</li>
<li>Relacionais: desconfiança, medo, relacionamentos superficiais por falta de segurança</li>
<li>Produtivos: baixa performance, falta de iniciativa, erros frequentes</li>
<li>Emocionais: estresse, ansiedade, frustração com a liderança que não se resolve</li>
<li>Organizacionais: alta rotatividade, dificuldade para reter talentos, clima progressivamente pior</li>
</ul>`,
      exemplos: `<ul>
<li>Gestor que promete promoções e desenvolvimento há dois anos sem nunca cumprir, erodindo a confiança da equipe</li>
<li>Lider que tem um comportamento em público (respeitoso e colaborativo) e outro em privado (agressivo e hostil)</li>
<li>Coordenador que nunca dá feedback à equipe: as pessoas trabalham sem saber se estão no caminho certo</li>
<li>Gerente que trata visivelmente os favoritos com condições melhores sem nenhum critério de mérito transparente</li>
</ul>`,
      impactos: `<ul>
<li>Desmotivação e desengajamento que se espalha para toda a equipe</li>
<li>Alta rotatividade com perda de conhecimento institucional acumulado</li>
<li>Amplificação de todos os outros riscos psicossociais presentes no ambiente</li>
<li>Estresse e ansiedade crônicos pela imprevisibilidade e inconsistência do lider</li>
<li>Comprometimento da saúde mental coletiva da equipe</li>
</ul>`,
      o_que_fazer: `<ul>
<li><strong>Para o lider:</strong> buscar autoconhecimento, conhecer os próprios pontos fortes e fracos e seu impacto sobre as pessoas</li>
<li><strong>Para o lider:</strong> buscar feedback 360 graus da equipe sobre sua liderança e ser aberto a ouvir o que é difícil</li>
<li><strong>Para o lider:</strong> alinhar discurso e prática, ser previsível nos critérios e ter empatia pelo impacto das próprias ações</li>
<li><strong>Para o trabalhador:</strong> comunique ao lider de forma respeitosa quando algum comportamento está impactando seu trabalho</li>
<li><strong>Para a organização:</strong> investir no desenvolvimento contínuo de lideranças, não apenas em habilidades técnicas mas em competências humanas</li>
</ul>`
    },
    checklistItems: [
      { id: 'ql-1', text: 'Meu lider é inconsistente: muda de critérios com frequência sem explicação' },
      { id: 'ql-2', text: 'Raramente recebo orientação ou feedback do meu lider sobre meu desenvolvimento' },
      { id: 'ql-3', text: 'O comportamento do meu lider gera medo ou insegurança na equipe' },
    ]
  }
];

const TAB_LABELS = {
  conceito: 'Conceito',
  o_que_e: 'O que É',
  o_que_nao_e: 'O que NÃO É',
  como_se_manifesta: 'Como se Manifesta',
  exemplos: 'Exemplos',
  impactos: 'Impactos',
  o_que_fazer: 'O que Fazer'
};

const QUIZ_DATA = [
  {
    id: 'q1',
    riskId: 'assedio-moral-sexual',
    question: 'Qual das situações abaixo configura assédio moral no trabalho?',
    options: [
      { text: 'Gestor que dá feedback crítico sobre uma entrega com prazo perdido', correct: false },
      { text: 'Colega que sistematicamente exclui uma pessoa de comunicações importantes e atribui seus méritos a si mesmo', correct: true },
      { text: 'Empresa que aumenta metas no início do ano', correct: false },
      { text: 'Líder que aplica advertência formal após três erros do mesmo tipo', correct: false }
    ],
    explanation: 'O assédio moral se caracteriza por comportamentos abusivos repetidos que degradam a dignidade. Excluir sistematicamente alguém e roubar seus méritos é assédio. Feedback crítico, metas e advertências formais são instrumentos legítimos de gestão quando feitos com respeito.'
  },
  {
    id: 'q2',
    riskId: 'carga-excessiva',
    question: 'O que diferencia a Carga Excessiva de Trabalho como risco psicossocial de um período normal de muito trabalho?',
    options: [
      { text: 'A quantidade de horas trabalhadas em um único dia', correct: false },
      { text: 'A cronicidade: a sobrecarga deixa de ser exceção e se torna o estado permanente', correct: true },
      { text: 'O nível de dificuldade das tarefas realizadas', correct: false },
      { text: 'A falta de organização pessoal do trabalhador', correct: false }
    ],
    explanation: 'A cronicidade é o elemento central. Qualquer profissional pode ter semanas intensas, isso é normal. O risco psicossocial surge quando a sobrecarga se torna o estado permanente, sem perspectiva de alívio, comprometendo a saúde ao longo do tempo.'
  },
  {
    id: 'q3',
    riskId: 'falta-reconhecimento',
    question: 'Um profissional bem remunerado começa a questionar o sentido do que faz, sente tédio crônico e pensa em mudar de carreira. Qual fator de risco melhor descreve essa situação?',
    options: [
      { text: 'Carga Excessiva de Trabalho', correct: false },
      { text: 'Falta de Reconhecimento', correct: true },
      { text: 'Pressão Excessiva por Metas', correct: false },
      { text: 'Desequilíbrio Vida Pessoal vs Profissional', correct: false }
    ],
    explanation: 'A Falta de Reconhecimento é independente da remuneração. Quando o trabalho não oferece visibilidade das contribuições, crescimento ou propósito, o adoecimento psicológico pode ocorrer mesmo com excelentes condições materiais. Salário não substitui sentido e reconhecimento genuíno.'
  },
  {
    id: 'q4',
    riskId: 'clima-organizacional-negativo',
    question: 'Qual das características abaixo é típica de um Clima Organizacional Negativo?',
    options: [
      { text: 'Pessoas que discordam abertamente em reuniões com argumentos respeitosos', correct: false },
      { text: 'Processos de avaliação de desempenho com critérios claros', correct: false },
      { text: 'Cinismo generalizado e informações retidas como vantagem competitiva entre colegas', correct: true },
      { text: 'Metas desafiadoras com prazos definidos', correct: false }
    ],
    explanation: 'O Clima Organizacional Negativo é caracterizado por desconfiança, competição destrutiva e comunicação tóxica. Quando colegas retêm informações como vantagem e o cinismo é generalizado, o tecido social da organização está comprometido. Discordância respeitosa, avaliações claras e metas são elementos saudáveis.'
  },
  {
    id: 'q5',
    riskId: 'falta-autonomia',
    question: 'Por que o microgerenciamento é considerado um fator de risco psicossocial?',
    options: [
      { text: 'Porque aumenta a quantidade de trabalho do gestor', correct: false },
      { text: 'Porque remove a autonomia do trabalhador, gerando impotência e desmotivação crônica', correct: true },
      { text: 'Porque garante que os erros sejam detectados mais rapidamente', correct: false },
      { text: 'Porque é sempre uma forma de assédio moral', correct: false }
    ],
    explanation: 'O microgerenciamento mina o controle que o trabalhador tem sobre seu próprio trabalho, um fator protetor fundamental para a saúde mental. Profissionais competentes que não podem usar seu julgamento experimentam impotência aprendida, perda de confiança e desengajamento progressivo.'
  },
  {
    id: 'q6',
    riskId: 'pressao-metas',
    question: 'Qual das situações abaixo NÃO configura o fator de risco "Pressão Excessiva por Metas"?',
    options: [
      { text: 'Metas que são automaticamente aumentadas sempre que são atingidas, sem limite', correct: false },
      { text: 'Demissão imediata por não bater meta em um único mês após anos de alto desempenho', correct: false },
      { text: 'Gestor que acompanha semanalmente os resultados e dá feedback sobre o progresso', correct: true },
      { text: 'Ranking público dos piores resultados individuais como "incentivo"', correct: false }
    ],
    explanation: 'Acompanhar resultados e dar feedback sobre progresso é gestão legítima e saudável. O risco está na desproporcionalidade: metas que crescem sem limite, punições severas por uma falha isolada e exposição pública humilhante são práticas que comprometem a saúde mental.'
  },
  {
    id: 'q7',
    riskId: 'falta-seguranca-psicologica',
    question: 'Em um ambiente com Falta de Segurança Psicológica, o que normalmente acontece quando alguém tem uma ideia de melhoria?',
    options: [
      { text: 'A ideia é debatida abertamente com críticas construtivas', correct: false },
      { text: 'A pessoa não compartilha a ideia por medo de ser ridicularizada ou punida', correct: true },
      { text: 'A ideia é registrada formalmente no sistema de sugestões', correct: false },
      { text: 'O gestor pede que a pessoa desenvolva a proposta em detalhes', correct: false }
    ],
    explanation: 'A Falta de Segurança Psicológica leva ao silêncio e ao conformismo. Quando as pessoas já experimentaram rejeição ou punição por contribuir, elas param de tentar. O resultado é uma organização que perde as ideias mais valiosas justamente das pessoas que mais pensam sobre como melhorá-la.'
  },
  {
    id: 'q8',
    riskId: 'conflitos-comunicacao',
    question: 'Um gestor envia uma mensagem de texto de uma linha comunicando uma mudança importante de processo. Isso é um exemplo de:',
    options: [
      { text: 'Boa comunicação: objetiva e direta', correct: false },
      { text: 'Canal inadequado: assuntos importantes merecem contexto e espaço para perguntas', correct: true },
      { text: 'Falta de Autonomia: o gestor deveria consultar a equipe antes', correct: false },
      { text: 'Pressão por Metas: o gestor está com pressa', correct: false }
    ],
    explanation: 'O canal inadequado é um dos fatores do risco "Conflitos Interpessoais e Comunicação Falha". Comunicações importantes precisam do canal certo: contexto suficiente, espaço para dúvidas e tom adequado. Uma mensagem de texto de uma linha cria mal-entendidos, gera ansiedade e demonstra descuido com o impacto nas pessoas.'
  },
  {
    id: 'q9',
    riskId: 'desequilibrio-vida',
    question: 'Por que o trabalho remoto pode INTENSIFICAR o risco de Desequilíbrio Vida Pessoal vs Profissional?',
    options: [
      { text: 'Porque as pessoas ficam mais preguiçosas em casa', correct: false },
      { text: 'Porque elimina as fronteiras físicas entre trabalho e vida pessoal, tornando a desconexão mais difícil', correct: true },
      { text: 'Porque reduz o contato com colegas e aumenta a solidão', correct: false },
      { text: 'Porque as pessoas trabalham menos horas em home office', correct: false }
    ],
    explanation: 'O trabalho remoto sem estrutura adequada pode piorar o desequilíbrio porque a casa vira escritório, o escritório vira casa, e a fronteira que permitia desconectar desaparece. Pesquisas mostram que muitos trabalhadores remotos trabalham mais horas, não menos, justamente pela dificuldade de "fechar o escritório".'
  },
  {
    id: 'q10',
    riskId: 'qualidade-lideranca',
    question: 'Por que a Qualidade da Liderança é considerada o fator de risco psicossocial com maior poder de impacto sobre os outros?',
    options: [
      { text: 'Porque líderes têm mais responsabilidades do que os demais', correct: false },
      { text: 'Porque o líder pode amplificar ou mitigar todos os outros riscos psicossociais pela forma como age', correct: true },
      { text: 'Porque líderes ganham mais e têm mais influência política', correct: false },
      { text: 'Porque é o fator mais fácil de medir e corrigir', correct: false }
    ],
    explanation: 'Um bom líder pode proteger sua equipe mesmo em ambientes organizacionais difíceis: filtrando pressões excessivas, dando reconhecimento, criando segurança psicológica e comunicando bem. Um líder inadequado faz o oposto: amplifica todos os riscos existentes. É por isso que "as pessoas não abandonam empresas, elas abandonam líderes".'
  },
  {
    id: 'q11',
    riskId: 'assedio-moral-sexual',
    question: 'O termo "gaslighting" no contexto de assédio moral refere-se a:',
    options: [
      { text: 'Pressão para trabalhar mais horas do que o contratado', correct: false },
      { text: 'Manipulação em que o agressor nega ou distorce eventos fazendo a vítima questionar sua própria percepção', correct: true },
      { text: 'Assédio praticado por mensagens digitais fora do horário', correct: false },
      { text: 'Discriminação baseada em gênero no ambiente de trabalho', correct: false }
    ],
    explanation: 'Gaslighting é uma forma de manipulação psicológica frequente em situações de assédio moral. O agressor sistematicamente nega que os episódios aconteceram, minimiza sua gravidade ou culpa a vítima, fazendo-a duvidar da própria memória. Isso causa dano psicológico profundo e dificulta a denúncia.'
  },
  {
    id: 'q12',
    riskId: 'clima-organizacional-negativo',
    question: 'Qual é o papel do líder na reversão de um Clima Organizacional Negativo?',
    options: [
      { text: 'Apenas identificar os funcionários que geram conflito e demiti-los', correct: false },
      { text: 'Modelar o comportamento desejado, resolver conflitos e criar rituais positivos de forma consistente', correct: true },
      { text: 'Contratar uma consultoria externa para fazer o diagnóstico', correct: false },
      { text: 'Aguardar que o clima melhore naturalmente com o tempo', correct: false }
    ],
    explanation: 'A reversão de um clima negativo exige liderança ativa e consistente. O líder precisa modelar o comportamento que deseja ver, intervir nos conflitos, criar rituais de colaboração e celebração, e comunicar com transparência. Ações esporádicas não geram transformação; consistência é a chave.'
  },
  {
    id: 'q13',
    riskId: 'falta-seguranca-psicologica',
    question: 'Segurança psicológica no trabalho significa:',
    options: [
      { text: 'Garantia de que ninguém será demitido', correct: false },
      { text: 'Que todos concordam entre si e evitam conflitos', correct: false },
      { text: 'Que as pessoas se sentem seguras para se expressar, errar e ser vulneráveis sem medo de punição', correct: true },
      { text: 'Que o ambiente físico de trabalho é seguro', correct: false }
    ],
    explanation: 'Segurança psicológica não é ausência de responsabilidade nem de discordância. É a crença de que o ambiente é seguro para contribuir com ideias, admitir erros e fazer perguntas sem ser punido, humilhado ou excluído. Ambientes com alta segurança psicológica têm mais inovação, colaboração e saúde mental.'
  },
  {
    id: 'q14',
    riskId: 'carga-excessiva',
    question: 'Quando um trabalhador nunca reclama da carga de trabalho, isso significa que:',
    options: [
      { text: 'Ele está bem e não há risco de sobrecarga', correct: false },
      { text: 'Ele pode estar em maior risco justamente por não buscar ajuda', correct: true },
      { text: 'Ele é mais comprometido do que colegas que reclamam', correct: false },
      { text: 'A carga de trabalho está adequada para ele', correct: false }
    ],
    explanation: 'Trabalhadores que nunca reclamam podem estar sobrecarregados e em maior risco por não buscar ajuda. O silêncio não é indicador de bem-estar: pode ser medo de parecer incompetente, insegurança no emprego ou simplesmente a normalização gradual da sobrecarga. Líderes precisam observar sinais além das queixas verbais.'
  },
  {
    id: 'q15',
    riskId: 'qualidade-lideranca',
    question: 'Qual comportamento do líder melhor exemplifica o que NÃO se deve fazer para uma liderança saudável?',
    options: [
      { text: 'Admitir publicamente quando cometeu um erro', correct: false },
      { text: 'Pedir feedback da equipe sobre sua liderança', correct: false },
      { text: 'Ter um comportamento respeitoso em público e agressivo em conversas privadas', correct: true },
      { text: 'Celebrar conquistas da equipe antes das próprias', correct: false }
    ],
    explanation: 'A inconsistência entre o comportamento público e privado é um dos traços mais destrutivos de liderança. Ela gera desconfiança, ansiedade e a sensação de que as regras não se aplicam ao líder. Admitir erros, pedir feedback e celebrar a equipe são, ao contrário, práticas que constroem segurança psicológica e confiança.'
  }
];
// === STATE ===

const state = {
  currentView: 'home',
  currentRiskId: null,
  activeTab: 'conceito',
  quizState: { current: 0, answers: [], completed: false },
  progress: {},
  checklist: {},
  quizHistory: [],
  searchQuery: '',
  activeFilter: 'all'
};

// === STORAGE ===

function loadStorage(key, fallback) {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
  } catch (e) {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // silent fail
  }
}

// === TOAST ===

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('hiding');
    setTimeout(() => toast.remove(), 220);
  }, 3200);
}

// === NAV ACTIVE STATE ===

function updateNavActive(view) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.nav === view);
  });
}

// === READING PROGRESS ===

function setupReadingProgress() {
  const bar = document.getElementById('reading-progress');
  if (!bar) return;
  function update() {
    const el = document.getElementById('app');
    if (!el) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = total > 0 ? Math.min(100, (scrollTop / total) * 100) + '%' : '0%';
  }
  window.addEventListener('scroll', update, { passive: true });
}

// === ROUTER ===

function router() {
  const hash = window.location.hash || '#/';
  const app = document.getElementById('app');
  if (!app) return;

  app.classList.remove('view-entering');
  void app.offsetWidth; // trigger reflow
  app.classList.add('view-entering');

  if (hash === '#/' || hash === '') {
    state.currentView = 'home';
    updateNavActive('home');
    app.innerHTML = renderHome();
    bindHomeEvents();
  } else if (hash === '#/explorer') {
    state.currentView = 'explorer';
    updateNavActive('explorer');
    app.innerHTML = renderExplorer();
    bindExplorerEvents();
  } else if (hash.startsWith('#/risk/')) {
    const id = hash.replace('#/risk/', '');
    const risk = RISKS_DATA.find(r => r.id === id);
    if (!risk) {
      window.location.hash = '#/explorer';
      return;
    }
    state.currentView = 'detail';
    state.currentRiskId = id;
    state.activeTab = 'conceito';
    updateNavActive('explorer');
    markVisited(id);
    app.innerHTML = renderDetail(id);
    bindDetailEvents();
  } else if (hash === '#/quiz') {
    state.currentView = 'quiz';
    updateNavActive('quiz');
    if (!state.quizState.completed && state.quizState.current === 0) {
      state.quizState = { current: 0, answers: [], completed: false };
    }
    app.innerHTML = renderQuiz();
    bindQuizEvents();
  } else if (hash === '#/avaliacao') {
    state.currentView = 'avaliacao';
    updateNavActive('avaliacao');
    app.innerHTML = renderAvaliacao();
    bindAvaliacaoEvents();
  } else {
    window.location.hash = '#/';
  }
}

// === MARK VISITED ===

function markVisited(id) {
  const wasNew = !state.progress[id];
  state.progress[id] = true;
  saveStorage('nr1_progress', state.progress);
  if (wasNew) {
    const count = Object.keys(state.progress).length;
    if (count === 5) showToast('🎉 Você explorou 5 riscos! Metade do caminho!', 'milestone');
    if (count === 10) showToast('🏆 Parabéns! Você explorou todos os 10 riscos!', 'milestone');
  }
}

// === RENDER: HOME ===

function renderHome() {
  const explored = Object.keys(state.progress).length;
  const cells = RISKS_DATA.map(r =>
    `<div class="progress-cell ${state.progress[r.id] ? 'visited' : ''}" title="${r.title}">✓</div>`
  ).join('');

  const lastQuiz = state.quizHistory.length > 0
    ? state.quizHistory[state.quizHistory.length - 1]
    : null;

  return `
<section class="hero view-entering">
  <div class="hero-eyebrow">📋 NR-1 · Portaria MTE 1.419/2024</div>
  <h1 class="hero-title">Riscos Psicossociais<br>no Trabalho</h1>
  <p class="hero-subtitle">A NR-1 atualizada em 2025 tornou obrigatório o gerenciamento dos riscos psicossociais no ambiente de trabalho no Brasil. Conheça os 10 riscos, entenda seus impactos e avalie seu próprio ambiente.</p>
  <div class="hero-actions">
    <a href="#/explorer" class="btn btn-primary btn-lg">Explorar os 10 Riscos</a>
    <a href="#/quiz" class="btn btn-secondary btn-lg">Fazer o Quiz</a>
  </div>
</section>

<div class="stats-grid">
  <div class="card stat-card color-teal">
    <div class="stat-number">10</div>
    <div class="stat-label">Riscos psicossociais mapeados pela NR-1</div>
  </div>
  <div class="card stat-card color-purple">
    <div class="stat-number">2025</div>
    <div class="stat-label">Ano de vigência da NR-1 atualizada com riscos psicossociais</div>
  </div>
  <div class="card stat-card color-amber">
    <div class="stat-number">50M+</div>
    <div class="stat-label">Trabalhadores com carteira assinada no Brasil cobertos pela norma</div>
  </div>
</div>

<div class="card progress-widget">
  <div class="progress-widget-header">
    <span class="progress-widget-title">Seu progresso</span>
    <span class="progress-count">${explored}/10 riscos explorados</span>
  </div>
  <div class="progress-cells">${cells}</div>
  ${explored === 0 ? '<p style="font-size:0.8rem;color:var(--color-text-secondary);margin-top:0.75rem">Clique em qualquer risco para começar a explorar.</p>' : ''}
  ${lastQuiz ? `<p style="font-size:0.8rem;color:var(--color-text-secondary);margin-top:0.75rem">Último quiz: <strong style="color:var(--color-teal)">${lastQuiz.score}/${lastQuiz.total}</strong> acertos</p>` : ''}
</div>

<div class="divider"></div>

<p class="section-label">O que você vai encontrar</p>
<div class="stats-grid">
  <div class="card">
    <div style="font-size:1.5rem;margin-bottom:0.5rem">📚</div>
    <h3 style="margin-bottom:0.4rem">Aprenda</h3>
    <p style="font-size:0.85rem;color:var(--color-text-secondary)">Entenda o conceito, o que é, o que não é e como cada risco se manifesta no cotidiano.</p>
  </div>
  <div class="card">
    <div style="font-size:1.5rem;margin-bottom:0.5rem">🧩</div>
    <h3 style="margin-bottom:0.4rem">Teste</h3>
    <p style="font-size:0.85rem;color:var(--color-text-secondary)">15 questões que testam seu conhecimento com explicações educativas após cada resposta.</p>
  </div>
  <div class="card">
    <div style="font-size:1.5rem;margin-bottom:0.5rem">🔍</div>
    <h3 style="margin-bottom:0.4rem">Avalie</h3>
    <p style="font-size:0.85rem;color:var(--color-text-secondary)">Identifique quais riscos podem estar presentes no seu ambiente de trabalho.</p>
  </div>
</div>`;
}

function bindHomeEvents() {}

// === RENDER: EXPLORER ===

function renderExplorer() {
  const filters = [
    { key: 'all', label: 'Todos' },
    { key: 'carga', label: 'Carga e Demanda' },
    { key: 'relacional', label: 'Relacional' },
    { key: 'organizacional', label: 'Organizacional' }
  ];

  const filterBtns = filters.map(f =>
    `<button class="filter-btn ${state.activeFilter === f.key ? 'active' : ''}" data-filter="${f.key}">${f.label}</button>`
  ).join('');

  const filtered = RISKS_DATA.filter(r => {
    const matchFilter = state.activeFilter === 'all' || r.category === state.activeFilter;
    const matchSearch = !state.searchQuery ||
      r.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      r.summary.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchFilter && matchSearch;
  });

  const cards = filtered.length > 0 ? filtered.map(r => renderRiskCard(r)).join('') :
    `<div class="no-results"><p>Nenhum risco encontrado para "<strong>${state.searchQuery}</strong>"</p></div>`;

  return `
<div style="margin-bottom:1.5rem">
  <h1 style="margin-bottom:0.4rem">Os 10 Riscos Psicossociais</h1>
  <p style="color:var(--color-text-secondary);font-size:0.9rem">Selecione um risco para aprender sobre seu conceito, manifestações e como agir.</p>
</div>
<div class="explorer-controls">
  <input type="text" class="search-input" id="risk-search" placeholder="Buscar risco..." value="${state.searchQuery}" aria-label="Buscar risco psicossocial">
  <div class="filter-group">${filterBtns}</div>
</div>
<div class="risks-grid" id="risks-grid">${cards}</div>`;
}

function renderRiskCard(r) {
  const catBadge = `<span class="badge badge-cat-${r.category}">${r.categoryLabel}</span>`;
  const visitedBadge = state.progress[r.id] ? `<span class="badge badge-visited">✓ Explorado</span>` : '';
  return `
<article class="card risk-card color-${r.colorClass}" role="button" tabindex="0" data-risk-id="${r.id}" aria-label="Explorar risco: ${r.title}">
  <span class="risk-card-icon">${r.icon}</span>
  <div class="risk-card-title">${r.title}</div>
  <div class="risk-card-summary">${r.summary}</div>
  <div class="risk-card-footer">${catBadge}${visitedBadge}</div>
</article>`;
}

let searchDebounceTimer = null;

function bindExplorerEvents() {
  const search = document.getElementById('risk-search');
  if (search) {
    search.addEventListener('input', e => {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        state.searchQuery = e.target.value;
        const grid = document.getElementById('risks-grid');
        const filtered = RISKS_DATA.filter(r => {
          const matchFilter = state.activeFilter === 'all' || r.category === state.activeFilter;
          const matchSearch = !state.searchQuery ||
            r.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            r.summary.toLowerCase().includes(state.searchQuery.toLowerCase());
          return matchFilter && matchSearch;
        });
        if (grid) {
          grid.innerHTML = filtered.length > 0 ? filtered.map(renderRiskCard).join('') :
            `<div class="no-results"><p>Nenhum risco encontrado para "<strong>${state.searchQuery}</strong>"</p></div>`;
          bindRiskCardEvents();
        }
      }, 150);
    });
  }

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeFilter = btn.dataset.filter;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const grid = document.getElementById('risks-grid');
      const filtered = RISKS_DATA.filter(r => {
        const matchFilter = state.activeFilter === 'all' || r.category === state.activeFilter;
        const matchSearch = !state.searchQuery ||
          r.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          r.summary.toLowerCase().includes(state.searchQuery.toLowerCase());
        return matchFilter && matchSearch;
      });
      if (grid) {
        grid.innerHTML = filtered.length > 0 ? filtered.map(renderRiskCard).join('') :
          `<div class="no-results"><p>Nenhum risco encontrado.</p></div>`;
        bindRiskCardEvents();
      }
    });
  });

  bindRiskCardEvents();
}

function bindRiskCardEvents() {
  document.querySelectorAll('.risk-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.riskId;
      if (id) window.location.hash = `#/risk/${id}`;
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const id = card.dataset.riskId;
        if (id) window.location.hash = `#/risk/${id}`;
      }
    });
  });
}

// === RENDER: DETAIL ===

function renderDetail(id) {
  const risk = RISKS_DATA.find(r => r.id === id);
  if (!risk) return '';

  const tabKeys = Object.keys(TAB_LABELS);
  const tabBar = tabKeys.map(key =>
    `<button class="tab-btn ${state.activeTab === key ? 'active' : ''}" data-tab="${key}">${TAB_LABELS[key]}</button>`
  ).join('');

  const riskIndex = RISKS_DATA.indexOf(risk);
  const prev = riskIndex > 0 ? RISKS_DATA[riskIndex - 1] : null;
  const next = riskIndex < RISKS_DATA.length - 1 ? RISKS_DATA[riskIndex + 1] : null;

  return `
<nav class="breadcrumb" aria-label="Localização">
  <a href="#/">Início</a>
  <span class="breadcrumb-sep">›</span>
  <a href="#/explorer">Riscos</a>
  <span class="breadcrumb-sep">›</span>
  <span class="breadcrumb-current">${risk.title}</span>
</nav>

<div class="detail-header">
  <div class="detail-icon">${risk.icon}</div>
  <div class="detail-title">
    <h1>${risk.title}</h1>
    <div style="display:flex;gap:0.4rem;flex-wrap:wrap">
      <span class="badge badge-cat-${risk.category}">${risk.categoryLabel}</span>
      ${state.progress[id] ? '<span class="badge badge-visited">✓ Explorado</span>' : ''}
    </div>
  </div>
</div>

<div class="tab-bar" role="tablist" aria-label="Seções do risco">${tabBar}</div>
<div id="tab-panel" class="tab-panel" role="tabpanel">${risk.tabs[state.activeTab] || ''}</div>

<div class="detail-nav">
  <a href="#/explorer" class="btn btn-ghost">← Voltar aos Riscos</a>
  ${prev ? `<a href="#/risk/${prev.id}" class="btn btn-secondary btn-sm">← ${prev.title.split(' ').slice(0, 3).join(' ')}…</a>` : ''}
  ${next ? `<a href="#/risk/${next.id}" class="btn btn-secondary btn-sm">${next.title.split(' ').slice(0, 3).join(' ')}… →</a>` : ''}
  <a href="#/avaliacao" class="btn btn-primary btn-sm" style="margin-left:auto">Autoavaliar →</a>
</div>`;
}

function bindDetailEvents() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeTab = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById('tab-panel');
      const risk = RISKS_DATA.find(r => r.id === state.currentRiskId);
      if (panel && risk) {
        panel.classList.remove('view-entering');
        void panel.offsetWidth;
        panel.classList.add('view-entering');
        panel.innerHTML = risk.tabs[state.activeTab] || '';
      }
    });
  });
}

// === RENDER: QUIZ ===

function renderQuiz() {
  if (state.quizState.completed) return renderQuizResults();

  const q = QUIZ_DATA[state.quizState.current];
  const progress = ((state.quizState.current) / QUIZ_DATA.length) * 100;

  const options = q.options.map((opt, i) =>
    `<li><button class="option-btn" data-index="${i}">${opt.text}</button></li>`
  ).join('');

  return `
<div class="quiz-wrapper">
  <div class="quiz-progress-header">
    <span class="quiz-progress-label">Questão ${state.quizState.current + 1} de ${QUIZ_DATA.length}</span>
    <span class="quiz-progress-label" style="color:var(--color-teal)">${state.quizState.answers.filter(a => a.correct).length} acertos</span>
  </div>
  <div class="quiz-progress-bar-container">
    <div class="quiz-progress-bar-fill" style="width:${progress}%"></div>
  </div>
  <div class="card question-card">
    <p class="question-text">${q.question}</p>
    <ul class="options-list">${options}</ul>
    <div id="explanation-area"></div>
  </div>
  <div class="quiz-nav" id="quiz-nav"></div>
</div>`;
}

function renderQuizResults() {
  const correct = state.quizState.answers.filter(a => a.correct).length;
  const total = QUIZ_DATA.length;
  const pct = Math.round((correct / total) * 100);

  let message = '';
  if (pct >= 80) message = 'Excelente! Você tem um ótimo entendimento sobre riscos psicossociais.';
  else if (pct >= 60) message = 'Bom resultado! Continue explorando os riscos para aprofundar o conhecimento.';
  else message = 'Continue aprendendo! Explore os riscos no menu "Riscos" para melhorar seu resultado.';

  const history = state.quizHistory.slice(-5).reverse().map(h =>
    `<div class="history-item"><span>${new Date(h.date).toLocaleDateString('pt-BR')}</span><span class="history-score">${h.score}/${h.total}</span></div>`
  ).join('');

  return `
<div class="quiz-wrapper">
  <div class="quiz-results">
    <div class="score-circle">
      <span class="score-number">${correct}</span>
      <span class="score-total">de ${total}</span>
    </div>
    <h2 class="quiz-results-title">${pct}% de acertos</h2>
    <p class="quiz-results-sub">${message}</p>
    <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap;margin-bottom:2rem">
      <button class="btn btn-primary" id="quiz-retry">Tentar Novamente</button>
      <a href="#/explorer" class="btn btn-secondary">Estudar os Riscos</a>
    </div>
    ${state.quizHistory.length > 1 ? `
    <div style="text-align:left">
      <p class="quiz-history-title">Histórico de tentativas</p>
      ${history}
    </div>` : ''}
  </div>
</div>`;
}

function bindQuizEvents() {
  if (state.quizState.completed) {
    const retryBtn = document.getElementById('quiz-retry');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        state.quizState = { current: 0, answers: [], completed: false };
        document.getElementById('app').innerHTML = renderQuiz();
        bindQuizEvents();
      });
    }
    return;
  }

  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index);
      const q = QUIZ_DATA[state.quizState.current];
      const selected = q.options[idx];

      // Disable all options and show correct/wrong
      document.querySelectorAll('.option-btn').forEach((b, i) => {
        b.disabled = true;
        if (q.options[i].correct) b.classList.add('correct');
        else if (i === idx && !selected.correct) b.classList.add('wrong');
      });

      // Show explanation
      const expArea = document.getElementById('explanation-area');
      if (expArea) {
        expArea.innerHTML = `<div class="explanation-box"><strong>${selected.correct ? '✓ Correto!' : '✗ Incorreto.'}</strong> ${q.explanation}</div>`;
      }

      // Save answer
      state.quizState.answers.push({ questionId: q.id, correct: selected.correct });

      // Show next/finish button
      const nav = document.getElementById('quiz-nav');
      if (nav) {
        const isLast = state.quizState.current === QUIZ_DATA.length - 1;
        nav.innerHTML = `<button class="btn btn-primary" id="quiz-next">${isLast ? 'Ver Resultado' : 'Próxima Questão →'}</button>`;
        document.getElementById('quiz-next').addEventListener('click', () => {
          if (isLast) {
            state.quizState.completed = true;
            const score = state.quizState.answers.filter(a => a.correct).length;
            state.quizHistory.push({ date: Date.now(), score, total: QUIZ_DATA.length });
            saveStorage('nr1_quiz_history', state.quizHistory);
          } else {
            state.quizState.current++;
          }
          document.getElementById('app').innerHTML = renderQuiz();
          bindQuizEvents();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
    });
  });
}

// === RENDER: AVALIACAO ===

function renderAvaliacao() {
  const totalItems = RISKS_DATA.reduce((sum, r) => sum + r.checklistItems.length, 0);
  const checkedCount = Object.values(state.checklist).filter(Boolean).length;

  const sections = RISKS_DATA.map(r => {
    const items = r.checklistItems.map(item => {
      const checked = state.checklist[item.id] ? 'checked' : '';
      return `
<li class="checklist-item">
  <input type="checkbox" id="chk-${item.id}" data-item-id="${item.id}" ${checked}>
  <label for="chk-${item.id}">${item.text}</label>
</li>`;
    }).join('');

    const sectionChecked = r.checklistItems.filter(i => state.checklist[i.id]).length;
    return `
<div class="accordion-item ${sectionChecked > 0 ? 'open' : ''}">
  <button class="accordion-trigger" data-accordion>
    <span class="accordion-trigger-left">
      <span>${r.icon}</span>
      <span>${r.title}</span>
    </span>
    <span style="display:flex;align-items:center;gap:0.5rem">
      ${sectionChecked > 0 ? `<span class="badge badge-visited">${sectionChecked}</span>` : ''}
      <span class="accordion-chevron">▼</span>
    </span>
  </button>
  <div class="accordion-body">
    <ul class="checklist">${items}</ul>
  </div>
</div>`;
  }).join('');

  const alertHtml = checkedCount >= 5
    ? `<div class="alert-box alert-warning">
        <strong>Atenção:</strong> Você identificou ${checkedCount} situações que podem indicar exposição a riscos psicossociais. Considere conversar com o SESMT, médico do trabalho ou psicólogo ocupacional da sua empresa. Se não houver esses recursos, o sindicato da sua categoria pode orientar sobre seus direitos.
      </div>`
    : checkedCount > 0
    ? `<div class="alert-box alert-info">Você identificou ${checkedCount} situação(ões). Continue explorando os riscos para entender melhor o que está vivenciando.</div>`
    : '';

  return `
<div style="margin-bottom:1.5rem">
  <h1 style="margin-bottom:0.4rem">Autoavaliação do Ambiente de Trabalho</h1>
</div>
<div class="card avaliacao-intro">
  <p>Este não é um diagnóstico, é um convite à reflexão. Marque as situações que você <strong>reconhece no seu ambiente de trabalho</strong>, seja como vivência própria ou como algo que você observa acontecer. Não há resposta certa ou errada. Suas respostas ficam salvas apenas no seu dispositivo.</p>
</div>
${sections}
<div class="avaliacao-counter">
  <div class="counter-left">
    <span class="avaliacao-counter-number">${checkedCount}</span>
    <span class="avaliacao-counter-label">de ${totalItems} situações identificadas</span>
  </div>
  <a href="#/explorer" class="btn btn-secondary btn-sm">Explorar os riscos</a>
  ${alertHtml}
</div>`;
}

function bindAvaliacaoEvents() {
  // Accordion toggles
  document.querySelectorAll('[data-accordion]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      if (item) item.classList.toggle('open');
    });
  });

  // Checkboxes
  document.querySelectorAll('.checklist-item input[type="checkbox"]').forEach(chk => {
    chk.addEventListener('change', () => {
      const id = chk.dataset.itemId;
      state.checklist[id] = chk.checked;
      saveStorage('nr1_checklist', state.checklist);

      // Update counter
      const totalItems = RISKS_DATA.reduce((sum, r) => sum + r.checklistItems.length, 0);
      const checkedCount = Object.values(state.checklist).filter(Boolean).length;

      const counterNum = document.querySelector('.avaliacao-counter-number');
      if (counterNum) counterNum.textContent = checkedCount;

      // Update accordion badge
      const item = chk.closest('.accordion-item');
      if (item) {
        const riskId = item.querySelector('[data-accordion]');
        const sectionChks = item.querySelectorAll('input[type="checkbox"]');
        const sectionChecked = Array.from(sectionChks).filter(c => c.checked).length;
        const badgeSpan = item.querySelector('.accordion-trigger .badge-visited');
        if (sectionChecked > 0) {
          if (badgeSpan) badgeSpan.textContent = sectionChecked;
          else {
            const chevronParent = item.querySelector('.accordion-trigger span:last-child');
            if (chevronParent) {
              const newBadge = document.createElement('span');
              newBadge.className = 'badge badge-visited';
              newBadge.textContent = sectionChecked;
              chevronParent.insertBefore(newBadge, chevronParent.firstChild);
            }
          }
        } else if (badgeSpan) {
          badgeSpan.remove();
        }
      }

      // Update alert
      const counter = document.querySelector('.avaliacao-counter');
      if (counter) {
        let alertEl = counter.querySelector('.alert-box');
        if (checkedCount >= 5) {
          const html = `<div class="alert-box alert-warning">
            <strong>Atenção:</strong> Você identificou ${checkedCount} situações que podem indicar exposição a riscos psicossociais. Considere conversar com o SESMT, médico do trabalho ou psicólogo ocupacional da sua empresa. Se não houver esses recursos, o sindicato da sua categoria pode orientar sobre seus direitos.
          </div>`;
          if (alertEl) alertEl.outerHTML = html;
          else counter.insertAdjacentHTML('beforeend', html);
        } else if (checkedCount > 0) {
          const html = `<div class="alert-box alert-info">Você identificou ${checkedCount} situação(ões). Continue explorando os riscos para entender melhor o que está vivenciando.</div>`;
          if (alertEl) alertEl.outerHTML = html;
          else counter.insertAdjacentHTML('beforeend', html);
        } else if (alertEl) {
          alertEl.remove();
        }
      }
    });
  });
}

// === INIT ===

document.addEventListener('DOMContentLoaded', () => {
  state.progress = loadStorage('nr1_progress', {});
  state.checklist = loadStorage('nr1_checklist', {});
  state.quizHistory = loadStorage('nr1_quiz_history', []);

  setupReadingProgress();

  window.addEventListener('hashchange', router);
  router();
});
