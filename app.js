/* ============================================================
   NR-1 Riscos Psicossociais — app.js
   ============================================================ */

// === DATA ===

const RISKS_DATA = [
  {
    id: 'excesso-demandas',
    title: 'Excesso de Demandas e Pressão de Tempo',
    icon: '⚡',
    colorClass: 'teal',
    category: 'carga',
    categoryLabel: 'Carga e Demanda',
    summary: 'Quando o volume de trabalho supera consistentemente a capacidade humana de entrega, gerando sobrecarga crônica.',
    tabs: {
      conceito: `<p>O excesso de demandas e a pressão de tempo ocorrem quando as exigências do trabalho — em quantidade, complexidade ou urgência — ultrapassam de forma sistemática a capacidade de uma pessoa realizá-las dentro do tempo disponível, com qualidade e sem comprometer sua saúde.</p>
<p>Diferente de períodos pontuais de maior trabalho (que são normais em qualquer carreira), esse risco se caracteriza pela <strong>cronicidade</strong>: a sobrecarga deixa de ser exceção e passa a ser a regra. A NR-1 reconhece esse padrão como fator de risco psicossocial porque gera estados prolongados de estresse que comprometem o bem-estar físico e mental do trabalhador.</p>
<p>Segundo o modelo de Demanda-Controle de Karasek, situações de alta demanda aliadas a baixo controle representam o cenário de maior risco para doenças relacionadas ao trabalho.</p>`,
      o_que_e: `<ul>
<li>Receber consistentemente mais tarefas do que é humanamente possível concluir no expediente regular</li>
<li>Prazos habitualmente impossíveis ou estabelecidos sem consulta à equipe sobre viabilidade</li>
<li>Acúmulo de funções por redução de quadro sem redistribuição real das responsabilidades</li>
<li>Expectativa implícita ou explícita de disponibilidade fora do horário de trabalho (responder mensagens à noite, nos fins de semana)</li>
<li>Metas quantitativas estabelecidas sem considerar a qualidade necessária ou os recursos disponíveis</li>
<li>Interrupções constantes que impedem a concentração, tornando o tempo de trabalho ineficiente sem que a quantidade de tarefas diminua</li>
</ul>`,
      o_que_nao_e: `<ul>
<li><strong>Não é apenas "muito trabalho":</strong> um projeto intenso com prazo claro e temporário é diferente de sobrecarga crônica sem perspectiva de alívio</li>
<li><strong>Não é preguiça ou falta de organização:</strong> quando a carga estruturalmente excede a capacidade da função, o problema é organizacional, não individual</li>
<li><strong>Não é o mesmo que dificuldade com a tarefa:</strong> a pessoa pode ser muito competente e ainda assim estar sobrecarregada pelo volume, não pela complexidade</li>
<li><strong>Não é problema apenas de quem reclama:</strong> trabalhadores que nunca reclamam podem estar igualmente sobrecarregados e em maior risco, por não buscarem ajuda</li>
</ul>`,
      como_se_manifesta: `<ul>
<li>Dificuldade persistente em terminar o trabalho no horário, levando ao prolongamento constante da jornada</li>
<li>Sensação de nunca "zerar" a lista de tarefas, com acúmulo progressivo de pendências</li>
<li>Dificuldade de descanso real mesmo nos momentos de folga, com pensamentos recorrentes sobre o trabalho</li>
<li>Irritabilidade, impaciência e menor tolerância a imprevistos por conta do nível de tensão permanente</li>
<li>Erros mais frequentes por falta de atenção, não por incompetência</li>
<li>Sintomas físicos: dores de cabeça, tensão muscular, distúrbios do sono, fadiga que não passa com o descanso</li>
<li>Sensação de culpa por não conseguir dar conta de tudo, mesmo trabalhando mais do que o previsto</li>
</ul>`,
      exemplos: `<ul>
<li><strong>Callcenter:</strong> atendente precisa cumprir meta de 120 ligações por turno, registrar detalhes de cada atendimento e ainda resolver reclamações complexas — em simultâneo, sem tempo entre as chamadas</li>
<li><strong>Hospital:</strong> enfermeira responsável por 20 leitos sozinha no plantão noturno, acumulando funções que originalmente seriam de uma equipe de três</li>
<li><strong>Escola pública:</strong> professor com 40 alunos por turma, 5 turmas por dia, planejamento, correções, relatórios e reuniões de pais — tudo fora do horário de aula, sem hora-atividade suficiente</li>
<li><strong>Escritório:</strong> analista que cobre licença de colega sem redução das próprias metas, respondendo e-mails até meia-noite para "não ficar atrasado"</li>
<li><strong>Varejo:</strong> gerente de loja que acumula função de operador de caixa, estoquista e atendimento ao cliente nos dias de folga de funcionários, sem remuneração adicional</li>
</ul>`,
      impactos: `<ul>
<li><strong>Burnout (Síndrome de Esgotamento Profissional):</strong> reconhecida pela OMS como doença ocupacional, diretamente associada à sobrecarga crônica</li>
<li>Transtornos de ansiedade e ataques de pânico</li>
<li>Depressão relacionada ao trabalho</li>
<li>Hipertensão arterial e maior risco cardiovascular</li>
<li>Distúrbios do sono (insônia, sono não reparador)</li>
<li>Comprometimento imunológico com adoecimento frequente</li>
<li>Erros graves e acidentes de trabalho por déficit de atenção causado pela fadiga</li>
<li>Afastamentos prolongados e incapacidade laborativa</li>
</ul>`,
      o_que_fazer: `<ul>
<li><strong>Para o trabalhador:</strong> registre formalmente as demandas excessivas (e-mail, sistema interno) para criar histórico; comunique ao gestor com dados concretos sobre volume e prazos; não aceite em silêncio — o silêncio é interpretado como capacidade</li>
<li><strong>Para o trabalhador:</strong> estabeleça e comunique limites claros de disponibilidade, respaldado pela legislação (art. 58 da CLT e decisões do TST sobre sobreaviso digital)</li>
<li><strong>Para a organização:</strong> realizar mapeamento real de carga de trabalho antes de definir metas e quadro de pessoal</li>
<li><strong>Para a organização:</strong> incluir o tema de gestão de demandas nas avaliações de risco psicossocial previstas na NR-1</li>
<li><strong>Para a organização:</strong> criar canais seguros para reporte de sobrecarga sem medo de represálias</li>
<li><strong>Recursos:</strong> consulte o SESMT, médico do trabalho ou psicólogo ocupacional da empresa; sindicato da categoria pode orientar sobre direitos</li>
</ul>`
    },
    checklistItems: [
      { id: 'ed-1', text: 'Com frequência não consigo terminar minhas tarefas dentro do horário de trabalho' },
      { id: 'ed-2', text: 'Sinto que tenho trabalho suficiente para duas ou mais pessoas' },
      { id: 'ed-3', text: 'Prazos impossíveis são rotina, não exceção no meu trabalho' },
      { id: 'ed-4', text: 'Fico pensando no trabalho mesmo quando estou de folga ou em férias' },
    ]
  },
  {
    id: 'falta-controle',
    title: 'Falta de Controle sobre o Trabalho',
    icon: '🔒',
    colorClass: 'purple',
    category: 'organizacional',
    categoryLabel: 'Organizacional',
    summary: 'Ausência de autonomia para decidir como, quando e com que ritmo realizar as próprias tarefas.',
    tabs: {
      conceito: `<p>A falta de controle sobre o trabalho refere-se à ausência de autonomia do trabalhador para tomar decisões sobre aspectos relevantes de sua própria função: como organizar as tarefas, em que ritmo trabalhar, quais métodos usar, quando fazer pausas e como enfrentar os problemas que surgem.</p>
<p>O controle sobre o trabalho é um fator protetor fundamental para a saúde mental. Quando as pessoas têm autonomia, conseguem adaptar as demandas às suas capacidades, gerenciar o estresse de forma ativa e encontrar significado no que fazem. Sua ausência cria uma sensação de impotência que, combinada com alta demanda, representa o maior fator de risco para doenças relacionadas ao trabalho segundo a literatura científica.</p>`,
      o_que_e: `<ul>
<li>Ser obrigado a seguir scripts rígidos sem possibilidade de adaptar a abordagem à situação real</li>
<li>Não ter voz na definição de metas, prazos ou métodos de trabalho que te afetam diretamente</li>
<li>Monitoramento excessivo: tempo de banheiro cronometrado, cada clique rastreado, câmeras sobre a mesa</li>
<li>Impossibilidade de decidir a ordem de execução das próprias tarefas</li>
<li>Microgerenciamento: precisar pedir autorização para qualquer decisão, mesmo as triviais</li>
<li>Ausência de participação em decisões que afetam diretamente seu trabalho ou setor</li>
</ul>`,
      o_que_nao_e: `<ul>
<li><strong>Não é ter regras e processos:</strong> toda organização tem procedimentos necessários; o problema é quando esses procedimentos eliminam completamente o julgamento e a iniciativa do trabalhador</li>
<li><strong>Não é ter um gestor próximo:</strong> liderança presente e acessível é diferente de microgerenciamento; um bom gestor orienta sem controlar cada detalhe</li>
<li><strong>Não é apenas para funções técnicas:</strong> um atendente de caixa, um operador de linha ou um auxiliar administrativo também precisam de algum grau de autonomia para se sentir respeitados profissionalmente</li>
</ul>`,
      como_se_manifesta: `<ul>
<li>Sensação constante de "ser apenas uma peça" — desmotivação e desconexão com o próprio trabalho</li>
<li>Dificuldade em tomar decisões simples por receio de erro ou punição</li>
<li>Frustração e raiva reprimidas por não poder usar seus conhecimentos e experiência</li>
<li>Presenteísmo: estar presente fisicamente, mas emocionalmente desengajado</li>
<li>Ansiedade ao precisar improvisar em situações não previstas nos procedimentos</li>
<li>Pedidos frequentes de confirmação para tarefas que a pessoa já sabe fazer</li>
</ul>`,
      exemplos: `<ul>
<li><strong>Telemarketing:</strong> atendente que deve seguir um roteiro palavra por palavra, sem poder adaptar a linguagem ao cliente, mesmo percebendo que a abordagem não está funcionando</li>
<li><strong>Logística:</strong> motorista rastreado em tempo real com alertas automáticos para cada parada além do previsto, sem possibilidade de ajustar rota por conta própria mesmo em situações de trânsito óbvio</li>
<li><strong>Saúde:</strong> técnico de enfermagem que não pode tomar nenhuma decisão clínica simples (mesmo dentro de sua competência técnica) sem aguardar autorização de médico indisponível</li>
<li><strong>Tecnologia:</strong> desenvolvedor sênior que precisa justificar por escrito cada linha de código para um gestor sem formação técnica antes de poder fazer o commit</li>
</ul>`,
      impactos: `<ul>
<li>Estresse crônico e síndrome de esgotamento</li>
<li>Depressão e sensação de ineficácia profissional</li>
<li>Alta rotatividade e absenteísmo na equipe</li>
<li>Hipertensão e doenças cardiovasculares (evidência forte na literatura)</li>
<li>Perda de competência prática por falta de uso — o trabalhador perde confiança em si mesmo</li>
<li>Desengajamento total que prejudica a qualidade do serviço entregue</li>
</ul>`,
      o_que_fazer: `<ul>
<li><strong>Para o trabalhador:</strong> proponha conversas com o gestor sobre autonomia com responsabilidade — mostre que você entende os riscos e tem soluções</li>
<li><strong>Para o trabalhador:</strong> documente situações onde a falta de autonomia causou piora no resultado — dados concretos têm mais impacto do que queixas</li>
<li><strong>Para a organização:</strong> revisar processos que eliminam desnecessariamente a autonomia — pergunte "este controle resolve um problema real ou apenas transmite desconfiança?"</li>
<li><strong>Para a organização:</strong> treinar líderes para diferenciar orientação de microgerenciamento</li>
<li><strong>Para a organização:</strong> criar espaços reais de participação onde a equipe influencia decisões que afetam seu trabalho</li>
</ul>`
    },
    checklistItems: [
      { id: 'fc-1', text: 'Tenho pouca ou nenhuma liberdade para decidir como realizar minhas tarefas' },
      { id: 'fc-2', text: 'Me sinto monitorado(a) de forma excessiva no trabalho' },
      { id: 'fc-3', text: 'Não sou consultado(a) sobre decisões que afetam diretamente minha função' },
    ]
  },
  {
    id: 'suporte-social',
    title: 'Suporte Social Inadequado',
    icon: '🤝',
    colorClass: 'teal',
    category: 'relacional',
    categoryLabel: 'Relacional',
    summary: 'Ausência de apoio emocional, instrumental ou informacional de colegas e gestores quando necessário.',
    tabs: {
      conceito: `<p>O suporte social no trabalho refere-se à disponibilidade de ajuda prática, emocional e informacional que colegas e gestores oferecem uns aos outros. Quando esse suporte é inadequado — seja porque não existe, seja porque é inconsistente ou condicionado —, o trabalhador enfrenta os desafios da função em isolamento.</p>
<p>O suporte social funciona como um "amortecedor" do estresse ocupacional: pesquisas mostram que trabalhadores com bom suporte social enfrentam melhor as pressões do trabalho e adoecem menos. Sua ausência não apenas deixa o trabalhador desamparado, mas amplifica o impacto de todos os outros riscos psicossociais presentes no ambiente.</p>`,
      o_que_e: `<ul>
<li>Gestor que ignora solicitações de ajuda ou as trata como sinal de incompetência</li>
<li>Cultura de competição entre colegas que torna o pedido de ajuda uma vulnerabilidade</li>
<li>Isolamento físico ou funcional: trabalhar de forma tão separada que não há contato com a equipe</li>
<li>Ausência de feedback construtivo — a pessoa nunca sabe se está no caminho certo</li>
<li>Falta de apoio emocional em situações difíceis (atendimento de situações traumáticas, luto, crises pessoais)</li>
<li>Informações retidas deliberadamente por colegas que as veem como vantagem competitiva</li>
</ul>`,
      o_que_nao_e: `<ul>
<li><strong>Não é exigir que colegas resolvam seus problemas:</strong> suporte social saudável envolve colaboração e disponibilidade, não dependência</li>
<li><strong>Não é ausência de hierarquia:</strong> organizações podem ter estrutura hierárquica clara e ainda oferecer suporte social adequado — o que importa é o clima de apoio mútuo</li>
<li><strong>Não é exclusivamente responsabilidade do RH:</strong> o suporte social emerge principalmente das interações do cotidiano, não de programas formais</li>
</ul>`,
      como_se_manifesta: `<ul>
<li>Sensação persistente de estar "sozinho" mesmo rodeado de colegas</li>
<li>Hesitação em pedir ajuda por medo de ser visto como fraco ou incompetente</li>
<li>Decisões tomadas no escuro, sem acesso a informações ou orientações necessárias</li>
<li>Maior vulnerabilidade emocional a críticas e contratempos</li>
<li>Percepção de que "não há a quem recorrer" em situações de dificuldade</li>
<li>Desmotivação progressiva e distanciamento afetivo do trabalho e da equipe</li>
</ul>`,
      exemplos: `<ul>
<li><strong>Home office:</strong> trabalhador remoto que nunca recebe retorno sobre seu desempenho, cujas mensagens ficam sem resposta por dias e que não tem acesso informal às decisões que afetam seu trabalho</li>
<li><strong>Saúde mental:</strong> psicólogo clínico em hospital que lida diariamente com situações traumáticas sem nenhuma supervisão ou espaço para processar o impacto emocional do trabalho</li>
<li><strong>Indústria:</strong> operador novo em linha de produção que não recebe orientação dos colegas mais experientes pois eles veem o novato como ameaça ao emprego</li>
<li><strong>Vendas:</strong> equipe onde o gestor só interage com os que batem meta, ignorando completamente os que estão com dificuldade justamente quando mais precisariam de apoio</li>
</ul>`,
      impactos: `<ul>
<li>Isolamento social e solidão no trabalho</li>
<li>Maior risco de depressão e ansiedade</li>
<li>Burnout acelerado pela ausência de "válvulas de alívio" sociais</li>
<li>Erros por falta de informação ou orientação adequada</li>
<li>Alta rotatividade — pessoas deixam líderes, não empresas</li>
<li>Clima organizacional negativo que se retroalimenta</li>
</ul>`,
      o_que_fazer: `<ul>
<li><strong>Para o trabalhador:</strong> busque ativamente criar conexões com colegas; pequenas interações regulares constroem a base do suporte social</li>
<li><strong>Para o trabalhador:</strong> expresse suas necessidades ao gestor de forma objetiva — muitos gestores não percebem que sua equipe precisa de mais suporte</li>
<li><strong>Para a organização:</strong> criar rituais de equipe (reuniões de check-in, momentos de compartilhamento) que fortaleçam os laços entre as pessoas</li>
<li><strong>Para a organização:</strong> treinar líderes para oferecer feedback regular e positivo, não apenas corretivo</li>
<li><strong>Para a organização:</strong> garantir que trabalhadores remotos tenham acesso equivalente ao suporte disponível para os presenciais</li>
</ul>`
    },
    checklistItems: [
      { id: 'ss-1', text: 'Me sinto sozinho(a) para resolver os problemas do trabalho' },
      { id: 'ss-2', text: 'Meu gestor raramente está disponível quando preciso de orientação' },
      { id: 'ss-3', text: 'No meu ambiente de trabalho, pedir ajuda é visto como fraqueza' },
    ]
  },
  {
    id: 'conflito-familia',
    title: 'Conflito Trabalho-Família',
    icon: '⚖️',
    colorClass: 'amber',
    category: 'carga',
    categoryLabel: 'Carga e Demanda',
    summary: 'Quando as exigências do trabalho e da vida pessoal entram em conflito de forma sistemática, impossibilitando o equilíbrio.',
    tabs: {
      conceito: `<p>O conflito trabalho-família ocorre quando as demandas, o tempo ou a energia exigidos pelo trabalho interferem sistematicamente na vida pessoal e familiar — ou vice-versa. Trata-se de uma incompatibilidade entre os papéis profissional e familiar que não pode ser facilmente resolvida pelo próprio trabalhador sem que algo importante seja sacrificado.</p>
<p>Com o avanço da tecnologia e do trabalho remoto, as fronteiras entre trabalho e vida pessoal tornaram-se cada vez mais porosas. A NR-1 reconhece esse conflito como risco psicossocial porque seus impactos na saúde são bem documentados e, frequentemente, resultam de escolhas organizacionais — não apenas de dificuldades individuais de "gestão do tempo".</p>`,
      o_que_e: `<ul>
<li>Jornadas de trabalho que se estendem regularmente para horários de convivência familiar</li>
<li>Disponibilidade 24h esperada (mensagens, ligações, e-mails fora do horário)</li>
<li>Escalas de trabalho que desconsideram sistematicamente compromissos familiares (plantões noturnos, fins de semana, feriados)</li>
<li>Falta de flexibilidade para lidar com emergências familiares sem penalização</li>
<li>Viagens frequentes que impõem ausência prolongada da família</li>
<li>Trabalho que "invade" o espaço doméstico quando feito em home office sem estrutura adequada</li>
</ul>`,
      o_que_nao_e: `<ul>
<li><strong>Não é fraqueza ou falta de comprometimento:</strong> querer ter vida familiar saudável não torna o trabalhador menos profissional</li>
<li><strong>Não é problema apenas de mães:</strong> o conflito trabalho-família afeta pessoas de todos os gêneros, embora as mulheres ainda carreguem desproporcionalmente o peso do trabalho doméstico</li>
<li><strong>Não é resolvido apenas com home office:</strong> trabalhar de casa sem limites claros frequentemente intensifica o conflito, misturando os dois mundos sem separação</li>
<li><strong>Não é falta de organização pessoal:</strong> quando a estrutura da organização não permite equilíbrio, a gestão pessoal do tempo tem limite</li>
</ul>`,
      como_se_manifesta: `<ul>
<li>Culpa persistente: sempre que está no trabalho pensa na família; sempre que está com a família pensa no trabalho</li>
<li>Incapacidade de "desligar" do trabalho durante momentos familiares</li>
<li>Conflitos e tensões familiares atribuíveis à ausência ou ao estresse trazido do trabalho</li>
<li>Perda de momentos importantes (aniversários, eventos dos filhos, cuidado de familiar doente) por demandas do trabalho</li>
<li>Parceiro(a) ou filhos demonstrando ressentimento pela ausência ou pelo estado emocional trazido do trabalho</li>
<li>Sensação de falhar em todos os papéis — nem bom profissional nem bom pai/mãe/cônjuge</li>
</ul>`,
      exemplos: `<ul>
<li><strong>Gestão:</strong> gerente que perdeu a apresentação do filho na escola pela terceira vez seguida por não conseguir sair antes das 21h nos dias úteis</li>
<li><strong>Saúde:</strong> médico plantonista que faz 12 plantões por mês, chegando em casa esgotado sem energia para interagir com a família</li>
<li><strong>Tecnologia:</strong> desenvolvedor em startup que recebe mensagens do chefe às 23h com a expectativa implícita de resposta imediata</li>
<li><strong>Serviço público:</strong> servidora que cuida de pai idoso e não consegue ajustar o horário de trabalho mesmo com possibilidade técnica de fazer, por cultura organizacional rígida</li>
</ul>`,
      impactos: `<ul>
<li>Estresse crônico e burnout</li>
<li>Comprometimento da qualidade dos relacionamentos afetivos</li>
<li>Aumento do risco de separação/divórcio</li>
<li>Impacto no desenvolvimento dos filhos pela ausência do responsável</li>
<li>Depressão e ansiedade</li>
<li>Maior risco de alcoolismo e outras dependências como forma de "desligar"</li>
<li>Doenças psicossomáticas: gastrite, enxaqueca, tensão muscular crônica</li>
</ul>`,
      o_que_fazer: `<ul>
<li><strong>Para o trabalhador:</strong> estabeleça limites explícitos e comunique-os claramente — defina horários de disponibilidade e cumpra-os</li>
<li><strong>Para o trabalhador:</strong> conheça seus direitos: a CLT limita a jornada e o TST tem jurisprudência sobre sobreaviso digital</li>
<li><strong>Para a organização:</strong> implementar política real de desconexão digital — não apenas declarativa</li>
<li><strong>Para a organização:</strong> oferecer flexibilidade de horário como medida protetiva, não como benefício especial</li>
<li><strong>Para a organização:</strong> incluir o impacto nas famílias como critério nas decisões sobre jornadas e escalas</li>
</ul>`
    },
    checklistItems: [
      { id: 'cf-1', text: 'O trabalho me impede regularmente de participar de momentos importantes com minha família' },
      { id: 'cf-2', text: 'Recebo mensagens ou ligações de trabalho fora do horário com expectativa de resposta' },
      { id: 'cf-3', text: 'Sinto culpa tanto no trabalho (por pensar na família) quanto em casa (por pensar no trabalho)' },
    ]
  },
  {
    id: 'inseguranca-trabalho',
    title: 'Insegurança no Trabalho',
    icon: '🌪️',
    colorClass: 'amber',
    category: 'organizacional',
    categoryLabel: 'Organizacional',
    summary: 'Medo persistente de perder o emprego ou de mudanças negativas nas condições de trabalho sem controle sobre isso.',
    tabs: {
      conceito: `<p>A insegurança no trabalho é definida como a percepção de uma ameaça involuntária à continuidade do emprego ou às características valorizadas do próprio trabalho — função, salário, status, progressão. O elemento central é a <strong>falta de controle</strong> sobre essa ameaça percebida.</p>
<p>Ela pode ser objetiva (demissões em massa anunciadas, contratos temporários próximos do fim) ou subjetiva (percepção de instabilidade mesmo sem sinais claros). Em ambos os casos, o impacto na saúde é similar, porque o organismo responde ao que é percebido como ameaça, não apenas ao que é real. A NR-1 reconhece esse estressor crônico como fator de risco psicossocial porque impacta diretamente a saúde mental e o comportamento no trabalho.</p>`,
      o_que_e: `<ul>
<li>Clima de demissões constantes sem critérios claros ou transparência</li>
<li>Contratos temporários renovados de forma incerta, mantendo o trabalhador em constante ansiedade</li>
<li>Reestruturações e mudanças organizacionais frequentes sem comunicação adequada aos afetados</li>
<li>Ameaças veladas sobre o emprego usadas como forma de pressão e controle</li>
<li>Discriminação que coloca certos grupos em posição mais vulnerável (mulheres próximas de licença maternidade, trabalhadores mais velhos)</li>
<li>Rumores não esclarecidos pela liderança sobre fechamentos, fusões ou cortes</li>
</ul>`,
      o_que_nao_e: `<ul>
<li><strong>Não é sensibilidade excessiva:</strong> preocupar-se com o emprego em um contexto de instabilidade real é uma resposta racional, não um problema pessoal</li>
<li><strong>Não é exclusivo de crises econômicas:</strong> a insegurança pode existir em empresas lucrativas quando a gestão usa o medo como ferramenta de controle</li>
<li><strong>Não é resolvido apenas com remuneração:</strong> salário competitivo não elimina a insegurança se a percepção de ameaça ao cargo permanecer</li>
</ul>`,
      como_se_manifesta: `<ul>
<li>Hipervigilância: observar constantemente os comportamentos dos gestores em busca de sinais de demissão iminente</li>
<li>Dificuldade de concentração e queda de produtividade por conta da preocupação constante</li>
<li>Comportamentos de autoproteção: evitar discordar do chefe, trabalhar além do necessário por medo de "parecer dispensável"</li>
<li>Insônia, ansiedade e tensão física persistentes</li>
<li>Resistência a tirar férias por medo de "ficar para trás" ou "ser esquecido"</li>
<li>Impacto financeiro antecipado: restrição de gastos mesmo sem demissão efetiva, gerando sofrimento preventivo</li>
</ul>`,
      exemplos: `<ul>
<li><strong>Indústria:</strong> operário que vê colegas sendo demitidos uma vez por mês em "otimizações de processo" sem critério claro — ele nunca sabe se será o próximo</li>
<li><strong>Startup:</strong> desenvolvedor em empresa que faz rodadas de demissão em massa a cada pivô estratégico, sem comunicação prévia à equipe</li>
<li><strong>Serviço público:</strong> servidor em cargo comissionado que sente a pressão de que qualquer discordância pode resultar na perda da função</li>
<li><strong>Terceirizado:</strong> trabalhador terceirizado que renova contrato a cada 6 meses sem saber se será mantido, sem acesso às informações sobre o contrato entre as empresas</li>
</ul>`,
      impactos: `<ul>
<li>Ansiedade crônica e transtornos de ansiedade generalizada</li>
<li>Depressão</li>
<li>Comprometimento do sistema cardiovascular</li>
<li>Comportamentos de risco: tabagismo, uso de álcool como estratégia de enfrentamento</li>
<li>Comprometimento da vida financeira e dos planos de vida</li>
<li>Deterioração das relações familiares pelo estresse trazido para casa</li>
</ul>`,
      o_que_fazer: `<ul>
<li><strong>Para o trabalhador:</strong> mantenha seu networking ativo e habilidades atualizadas — não como sinal de deslealdade, mas como cuidado com sua própria segurança</li>
<li><strong>Para o trabalhador:</strong> busque informações concretas em vez de alimentar rumores — a incerteza percebida é frequentemente pior do que a realidade</li>
<li><strong>Para a organização:</strong> comunicar com transparência as perspectivas e mudanças, mesmo quando as notícias não são boas</li>
<li><strong>Para a organização:</strong> estabelecer critérios claros e justos para decisões sobre quadro de pessoal</li>
<li><strong>Para a organização:</strong> eliminar o uso do medo de demissão como ferramenta de gestão — isso destrói a confiança e o engajamento</li>
</ul>`
    },
    checklistItems: [
      { id: 'it-1', text: 'Tenho medo constante de ser demitido(a) mesmo sem motivo concreto' },
      { id: 'it-2', text: 'As decisões sobre demissões na minha empresa são opacas e imprevisíveis' },
      { id: 'it-3', text: 'Evito discordar do meu gestor por medo de consequências para meu emprego' },
    ]
  },
  {
    id: 'assedio-moral',
    title: 'Assédio Moral e Violência no Trabalho',
    icon: '⚠️',
    colorClass: 'purple',
    category: 'relacional',
    categoryLabel: 'Relacional',
    summary: 'Condutas abusivas, humilhantes ou violentas que degradam a dignidade e o ambiente de trabalho.',
    tabs: {
      conceito: `<p>O assédio moral no trabalho é definido como qualquer conduta abusiva — gestos, palavras, comportamentos, atitudes — que atente, por sua repetição ou sistematização, contra a dignidade ou a integridade psíquica ou física de uma pessoa, ameaçando seu emprego ou degradando o clima de trabalho.</p>
<p>O elemento central é a <strong>repetição e intencionalidade</strong>: um episódio isolado e involuntário de comportamento inadequado não configura assédio moral, embora possa ser grave por outros motivos. A NR-1 e a Lei 14.457/2022 reconhecem explicitamente o assédio moral e sexual como riscos psicossociais que as organizações têm obrigação legal de prevenir e combater.</p>`,
      o_que_e: `<ul>
<li>Humilhações repetidas em público: xingamentos, apelidos depreciativos, ridicularização de erros na frente da equipe</li>
<li>Isolamento social organizado: colegas instruídos a não conversar com determinado trabalhador</li>
<li>Sabotagem profissional: retenção de informações necessárias para o trabalho, criação de obstáculos propositais</li>
<li>Críticas desproporcionais e constantes sem propósito construtivo</li>
<li>Atribuição de tarefas impossíveis, inúteis ou humilhantes para forçar o pedido de demissão</li>
<li>Ameaças veladas ou explícitas relacionadas ao emprego</li>
<li>Violência física, ameaças e agressões verbais graves</li>
</ul>`,
      o_que_nao_e: `<ul>
<li><strong>Não é qualquer conflito ou feedback negativo:</strong> uma avaliação de desempenho crítica, uma advertência formal por erro ou um desentendimento pontual não constituem assédio moral</li>
<li><strong>Não é exigência de desempenho:</strong> cobrar resultados, estabelecer metas e dar feedback duro sobre performance inadequada são parte da gestão legítima — o problema é quando a cobrança é feita de forma humilhante ou desproporcional</li>
<li><strong>Não é apenas o que o chefe faz:</strong> o assédio pode ser praticado por colegas (horizontal) ou até por subordinados (ascendente) — não apenas pelo superior hierárquico</li>
<li><strong>Não é algo que "tem que aguentar" em nenhuma profissão</strong></li>
</ul>`,
      como_se_manifesta: `<ul>
<li>Ansiedade intensa antes de ir ao trabalho, especialmente antes de encontrar o agressor</li>
<li>Sintomas físicos no ambiente de trabalho: tremores, náuseas, palpitações</li>
<li>Isolamento progressivo: a vítima começa a evitar interações para fugir da situação</li>
<li>Dúvida sobre a própria percepção ("será que estou exagerando?") — chamada de gaslighting quando promovida intencionalmente pelo agressor</li>
<li>Queda brusca de desempenho em profissional anteriormente eficiente</li>
<li>Afastamentos frequentes por motivos de saúde</li>
</ul>`,
      exemplos: `<ul>
<li><strong>Varejo:</strong> gerente que chama funcionários de "inúteis" e "burros" em reuniões de equipe quando as metas não são batidas</li>
<li><strong>Construção:</strong> mestre de obras que determina que a equipe não deve ajudar nem conversar com um trabalhador específico que questionou suas ordens</li>
<li><strong>Escritório:</strong> colega que sistematicamente omite o colaborador de e-mails importantes e atribui os sucessos da equipe a si mesmo nas reuniões com a liderança</li>
<li><strong>Hospital:</strong> médico que humilha residentes em frente a pacientes como "método pedagógico", criando ambiente de terror psicológico</li>
</ul>`,
      impactos: `<ul>
<li>Transtorno de Estresse Pós-Traumático (TEPT) ocupacional</li>
<li>Depressão grave e risco de suicídio</li>
<li>Síndrome do pânico</li>
<li>Doenças psicossomáticas graves</li>
<li>Danos à carreira e à reputação profissional</li>
<li>Impacto familiar intenso pela mudança de comportamento da vítima</li>
</ul>`,
      o_que_fazer: `<ul>
<li><strong>Para a vítima:</strong> documente tudo com datas, horários, testemunhas e o que foi dito — essa documentação é fundamental em qualquer processo</li>
<li><strong>Para a vítima:</strong> busque suporte médico e psicológico — o assédio causa adoecimento real que precisa de tratamento</li>
<li><strong>Para a vítima:</strong> denuncie ao canal de ética, RH, CIPA, sindicato ou Ministério do Trabalho — o silêncio perpetua o abuso</li>
<li><strong>Para a organização:</strong> implementar canal de denúncia anônima, investigar todas as denúncias com seriedade e aplicar sanções proporcionais</li>
<li><strong>Para a organização:</strong> a Lei 14.457/2022 (CIPA) exige que empresas com CIPA tenham canais específicos para denúncia de assédio</li>
</ul>`
    },
    checklistItems: [
      { id: 'am-1', text: 'Já fui humilhado(a) ou ridicularizado(a) por colegas ou gestores no trabalho' },
      { id: 'am-2', text: 'Sinto que sou tratado(a) de forma diferente e injusta de maneira sistemática' },
      { id: 'am-3', text: 'Já presenciei ou soube de casos de assédio no meu ambiente de trabalho' },
    ]
  },
  {
    id: 'discriminacao',
    title: 'Discriminação e Injustiça Organizacional',
    icon: '⚡',
    colorClass: 'amber',
    category: 'relacional',
    categoryLabel: 'Relacional',
    summary: 'Tratamento desigual baseado em características pessoais ou percepção de injustiça nas regras e decisões organizacionais.',
    tabs: {
      conceito: `<p>A discriminação no trabalho é o tratamento desfavorável baseado em características pessoais que não têm relação com a capacidade de exercer a função: raça, gênero, idade, orientação sexual, religião, deficiência, origem, estado de saúde, entre outras.</p>
<p>A injustiça organizacional é um conceito mais amplo que inclui não apenas a discriminação direta, mas também a percepção de que as regras, processos e decisões da organização são injustos ou aplicados de forma inconsistente. Pesquisas mostram que a percepção de injustiça — mesmo que subjetiva — tem impacto significativo na saúde e no comportamento dos trabalhadores, independentemente de haver violação legal formal.</p>`,
      o_que_e: `<ul>
<li>Preterição em promoções por critérios não relacionados ao desempenho (ser mulher, ser negro, ser mais velho)</li>
<li>Remuneração desigual para trabalho equivalente com base em características pessoais</li>
<li>Piadas, comentários e "brincadeiras" que reforçam estereótipos depreciativos</li>
<li>Regras aplicadas seletivamente — mais rigidamente para alguns grupos do que outros</li>
<li>Processos de avaliação e feedback que refletem vieses conscientes ou inconscientes</li>
<li>Exclusão de oportunidades de desenvolvimento baseada em preconceito</li>
</ul>`,
      o_que_nao_e: `<ul>
<li><strong>Não é qualquer decisão desfavorável:</strong> não ser promovido ou não ter um pedido aprovado não é necessariamente discriminação — o problema é quando o critério é baseado em características pessoais</li>
<li><strong>Não é apenas discriminação explícita:</strong> a discriminação pode ser sutil, estrutural ou inconsciente — e ainda assim causar dano</li>
<li><strong>Não é sensibilidade excessiva:</strong> identificar padrões de tratamento diferenciado é uma percepção legítima que merece investigação séria</li>
</ul>`,
      como_se_manifesta: `<ul>
<li>Sensação persistente de precisar trabalhar duas vezes mais para ser reconhecido(a) igualmente</li>
<li>Raiva, ressentimento e desconfiança em relação à liderança e à organização</li>
<li>Desengajamento: por que se esforçar mais se as regras não são justas?</li>
<li>Isolamento: evitar interações sociais para não se expor a situações discriminatórias</li>
<li>Impacto na autoestima e na autoimagem profissional</li>
<li>Estresse crônico pela vigilância constante necessária para navegar ambientes discriminatórios</li>
</ul>`,
      exemplos: `<ul>
<li><strong>Corporativo:</strong> mulher que tem propostas recusadas em reunião e a mesma ideia aceita quando reapresentada por um colega homem</li>
<li><strong>Tecnologia:</strong> profissional negro que, apesar de qualificação equivalente, nunca é considerado para cargos de liderança na empresa</li>
<li><strong>Saúde:</strong> trabalhador mais velho afastado de treinamentos "porque já vai se aposentar em breve", perdendo desenvolvimento profissional</li>
<li><strong>Varejo:</strong> funcionário com deficiência física alocado em tarefas claramente abaixo de sua capacidade por suposição equivocada sobre suas limitações</li>
</ul>`,
      impactos: `<ul>
<li>Comprometimento da identidade e da autoestima profissional</li>
<li>Ansiedade social e depressão</li>
<li>Estresse crônico pela "carga do preconceito" — o esforço constante de lidar com discriminação é esgotante</li>
<li>Limitação de carreira e perdas econômicas concretas</li>
<li>Desengajamento organizacional e alta rotatividade</li>
<li>Impacto na saúde física: hipertensão, doenças relacionadas ao estresse</li>
</ul>`,
      o_que_fazer: `<ul>
<li><strong>Para o trabalhador:</strong> documente situações específicas — datas, decisões, comparações concretas com colegas em situação similar</li>
<li><strong>Para o trabalhador:</strong> conheça seus direitos: a Constituição Federal (art. 5º), a CLT e diversas leis específicas proíbem a discriminação no trabalho</li>
<li><strong>Para o trabalhador:</strong> sindicatos, Ministério Público do Trabalho e Defensoria Pública são recursos disponíveis</li>
<li><strong>Para a organização:</strong> realizar auditorias de equidade (remuneração, promoções, avaliações) com dados desagregados por gênero, raça, idade</li>
<li><strong>Para a organização:</strong> treinamento em viés inconsciente para líderes com poder de decisão sobre pessoas</li>
</ul>`
    },
    checklistItems: [
      { id: 'di-1', text: 'Sinto que características pessoais (gênero, raça, idade...) afetam negativamente minha trajetória na empresa' },
      { id: 'di-2', text: 'As regras e decisões na minha empresa parecem ser aplicadas de forma injusta' },
      { id: 'di-3', text: 'Já ouvi comentários ou piadas preconceituosas no ambiente de trabalho' },
    ]
  },
  {
    id: 'trabalho-emocional',
    title: 'Trabalho Emocional e Desgaste Emocional',
    icon: '💔',
    colorClass: 'purple',
    category: 'carga',
    categoryLabel: 'Carga e Demanda',
    summary: 'O esforço de gerenciar as próprias emoções para atender às expectativas do trabalho — sorrir quando está exausto, manter a calma sob agressão.',
    tabs: {
      conceito: `<p>Trabalho emocional é o gerenciamento das emoções para cumprir as exigências afetivas do trabalho: sorrir para o cliente mesmo após uma situação difícil, manter a calma diante de um paciente agressivo, transmitir entusiasmo quando se está esgotado. O termo foi criado pela socióloga Arlie Hochschild na década de 1980 e é hoje um campo consolidado de pesquisa em saúde ocupacional.</p>
<p>O trabalho emocional existe em diferentes intensidades em quase todas as profissões, mas é especialmente intenso em funções de atendimento, saúde, educação e serviços sociais. O problema não é a existência do trabalho emocional em si, mas sua intensidade, duração e a ausência de recursos para lidar com ele — o que leva ao <strong>desgaste emocional</strong>, componente central do burnout.</p>`,
      o_que_e: `<ul>
<li>Suprimir emoções negativas legítimas (raiva, tristeza, medo) para apresentar uma "fachada" emocional exigida pelo papel</li>
<li>Absorver a angústia, a agressividade e o sofrimento de clientes, pacientes ou alunos como parte do trabalho</li>
<li>Dissonância emocional prolongada: sentir uma coisa por dentro e ter que demonstrar outra por fora</li>
<li>Responsabilidade de "regular" as emoções dos outros (acalmar clientes irritados, consolar pacientes, motivar alunos desmotivados)</li>
<li>Exigência de "positividade tóxica": proibição implícita ou explícita de demonstrar emoções negativas no ambiente de trabalho</li>
</ul>`,
      o_que_nao_e: `<ul>
<li><strong>Não é "drama" ou falta de profissionalismo:</strong> reconhecer o desgaste emocional do trabalho é reconhecer a realidade de profissões emocionalmente exigentes</li>
<li><strong>Não é exclusivo de profissões da área de saúde:</strong> trabalhadores de callcenter, caixas de supermercado, professores, assistentes sociais, vendedores — todos realizam trabalho emocional</li>
<li><strong>Não é resolvido com "mais resiliência":</strong> a resiliência individual tem limite; o desgaste crônico requer mudanças nas condições de trabalho, não apenas no trabalhador</li>
</ul>`,
      como_se_manifesta: `<ul>
<li>Exaustão emocional: sensação de estar "seco por dentro", sem energia emocional para nada</li>
<li>Despersonalização: criar distância emocional dos clientes/pacientes/alunos como mecanismo de defesa ("virar uma máquina")</li>
<li>Cinismo crescente em relação ao próprio trabalho e às pessoas que atende</li>
<li>Dificuldade de deixar o trabalho para trás — as emoções do dia se "grudam" e são levadas para casa</li>
<li>Redução da empatia: a capacidade de se importar começa a diminuir progressivamente</li>
<li>Sensação de vazio e falta de sentido mesmo em profissões que antes eram fonte de satisfação</li>
</ul>`,
      exemplos: `<ul>
<li><strong>UTI:</strong> enfermeiro que perdeu dois pacientes na mesma semana e no dia seguinte precisa dar suporte emocional à família de outro paciente em estado crítico, sem espaço para processar o próprio luto</li>
<li><strong>Callcenter:</strong> atendente que recebe xingamentos de clientes insatisfeitos durante toda a jornada e é avaliado negativamente se demonstrar qualquer emoção negativa no atendimento</li>
<li><strong>Assistência social:</strong> técnica que atende diariamente situações de violência doméstica, exploração infantil e extrema pobreza sem supervisão clínica para processar o impacto</li>
<li><strong>Varejo de luxo:</strong> vendedor que deve ser impecavelmente gentil com clientes que frequentemente o tratam com desdém, enquanto é pressionado por metas agressivas</li>
</ul>`,
      impactos: `<ul>
<li>Burnout — o desgaste emocional é a sua dimensão mais definidora</li>
<li>Fadiga compassiva (compassion fatigue) em profissões de cuidado</li>
<li>Depressão e perda de sentido na vida profissional</li>
<li>Problemas nos relacionamentos pessoais pela exaustão emocional trazida do trabalho</li>
<li>Abandono da profissão: alta rotatividade em áreas de saúde, educação e assistência social</li>
<li>Risco de erro profissional grave pela diminuição da atenção e do cuidado com o outro</li>
</ul>`,
      o_que_fazer: `<ul>
<li><strong>Para o trabalhador:</strong> busque supervisão clínica, grupos de apoio entre pares ou psicoterapia — processar o que foi absorvido emocionalmente é necessidade, não luxo</li>
<li><strong>Para o trabalhador:</strong> crie rituais de transição entre trabalho e vida pessoal: uma caminhada, um banho, uma música — algo que sinalize ao cérebro que o papel profissional foi encerrado</li>
<li><strong>Para a organização:</strong> oferecer suporte psicológico estrutural para funções com alta carga emocional (não apenas EAP genérico)</li>
<li><strong>Para a organização:</strong> reconhecer explicitamente o trabalho emocional como parte da carga de trabalho nas avaliações de risco</li>
<li><strong>Para a organização:</strong> criar espaços seguros para que profissionais expressem emoções negativas sem julgamento ou penalização</li>
</ul>`
    },
    checklistItems: [
      { id: 'te-1', text: 'Preciso "fingir" emoções no trabalho que não correspondem ao que realmente sinto' },
      { id: 'te-2', text: 'Me sinto emocionalmente esgotado(a) ao final do dia de trabalho com frequência' },
      { id: 'te-3', text: 'Tenho dificuldade de me importar com as pessoas que atendo como antes me importava' },
    ]
  },
  {
    id: 'falta-significado',
    title: 'Falta de Significado e Reconhecimento',
    icon: '🌑',
    colorClass: 'teal',
    category: 'organizacional',
    categoryLabel: 'Organizacional',
    summary: 'Quando o trabalho perde o sentido, o esforço não é reconhecido e a contribuição individual se torna invisível.',
    tabs: {
      conceito: `<p>A busca por significado é uma necessidade humana fundamental, e o trabalho é um dos principais lugares onde as pessoas buscam concretizá-la. Quando o trabalho não oferece propósito — quando a pessoa não enxerga o impacto do que faz, não se sente valorizada por sua contribuição ou sente que sua função poderia ser exercida por qualquer um — ocorre um esvaziamento motivacional que vai muito além da desmotivação passageira.</p>
<p>O reconhecimento, por sua vez, é a confirmação de que o esforço e a competência do trabalhador são vistos e valorizados. Sua ausência crônica não é apenas uma questão de satisfação: ela mina a identidade profissional e é um preditor robusto de burnout e de abandono da função.</p>`,
      o_que_e: `<ul>
<li>Não enxergar a conexão entre o próprio trabalho e um propósito maior — como ele contribui para algo que importa</li>
<li>Esforço e resultados consistentemente ignorados pela liderança, sem feedback positivo nem reconhecimento</li>
<li>Funções automatizadas ou fragmentadas a ponto de perder qualquer desafio ou criatividade</li>
<li>Méritos atribuídos a outros ou à equipe sem dar crédito às contribuições individuais</li>
<li>Progressão de carreira estagnada sem perspectiva ou critérios claros</li>
<li>Sensação de ser "substituível" — de que qualquer pessoa faria exatamente o mesmo trabalho</li>
</ul>`,
      o_que_nao_e: `<ul>
<li><strong>Não é necessidade de elogios constantes:</strong> reconhecimento não é halago vazio — é feedback genuíno e visibilidade justa das contribuições</li>
<li><strong>Não é exclusivamente questão de remuneração:</strong> pessoas bem remuneradas também sofrem pela falta de significado e reconhecimento — o dinheiro não substitui o sentido</li>
<li><strong>Não é problema apenas de pessoas que escolheram "a profissão errada":</strong> qualquer trabalho pode perder o significado quando as condições organizacionais o tornam alienante</li>
</ul>`,
      como_se_manifesta: `<ul>
<li>Tédio crônico e dificuldade de engajamento com as tarefas</li>
<li>Questionamento frequente sobre "por que estou fazendo isso?"</li>
<li>Queda na qualidade do trabalho por falta de motivação intrínseca</li>
<li>Inveja dos colegas que parecem encontrar mais sentido no que fazem</li>
<li>Fantasias frequentes de mudar de carreira, mesmo sem plano concreto</li>
<li>Sensação de que os anos estão passando e o trabalho não está deixando nenhuma marca</li>
</ul>`,
      exemplos: `<ul>
<li><strong>TI:</strong> desenvolvedor talentoso alocado há dois anos apenas na manutenção de sistemas legados sem nunca ser incluído em projetos novos, sem feedback sobre seu desempenho</li>
<li><strong>Saúde:</strong> médica generalista em UBS que sente que sua formação e competência são subutilizadas em atendimentos cada vez mais rápidos e protocolizados</li>
<li><strong>Administrativo:</strong> analista que sugeriu melhorias no processo três vezes, nunca recebeu resposta, e viu a mesma ideia ser implementada quando proposta pelo gestor</li>
<li><strong>Educação:</strong> professor que não recebe feedback algum sobre seu trabalho há anos — nem positivo nem negativo — e sente que ninguém perceberia diferença se ele fosse substituído</li>
</ul>`,
      impactos: `<ul>
<li>Desengajamento profundo e presenteísmo crônico</li>
<li>Burnout na dimensão de redução da realização pessoal</li>
<li>Depressão existencial ligada ao trabalho</li>
<li>Alta rotatividade — talentos saem em busca de ambientes que os valorizem</li>
<li>Queda na qualidade e produtividade em toda a organização</li>
<li>Absenteísmo como fuga inconsciente do ambiente</li>
</ul>`,
      o_que_fazer: `<ul>
<li><strong>Para o trabalhador:</strong> articule ativamente seu interesse em projetos com mais sentido — mostre o que você quer, não apenas o que não quer</li>
<li><strong>Para o trabalhador:</strong> busque conexões com o impacto do seu trabalho — converse com quem usa o que você produz ou entrega</li>
<li><strong>Para a organização:</strong> institucionalizar práticas de reconhecimento regular — não apenas em avaliações anuais</li>
<li><strong>Para a organização:</strong> garantir que líderes dêem feedback positivo específico e concreto, não apenas genérico</li>
<li><strong>Para a organização:</strong> criar oportunidades de job crafting — permitir que profissionais adaptem aspectos de sua função de acordo com seus pontos fortes e motivações</li>
</ul>`
    },
    checklistItems: [
      { id: 'fs-1', text: 'Com frequência me pergunto qual é o sentido do que faço no trabalho' },
      { id: 'fs-2', text: 'Meu esforço e minhas contribuições raramente são reconhecidos' },
      { id: 'fs-3', text: 'Sinto que sou completamente substituível na minha função' },
    ]
  },
  {
    id: 'condicoes-fisicas',
    title: 'Condições Físicas e Ambientais Inadequadas',
    icon: '🏭',
    colorClass: 'teal',
    category: 'organizacional',
    categoryLabel: 'Organizacional',
    summary: 'Quando o ambiente físico de trabalho gera desconforto, insalubridade ou riscos que afetam a saúde mental além da física.',
    tabs: {
      conceito: `<p>As condições físicas e ambientais do trabalho têm impacto direto sobre a saúde mental, não apenas física. Ambiente barulhento, iluminação inadequada, temperatura extrema, falta de privacidade, superlotação, precariedade de equipamentos e exposição a substâncias tóxicas geram estresse psicológico crônico que se soma a outros riscos psicossociais.</p>
<p>A NR-1 reconhece que as condições do ambiente físico de trabalho devem ser incluídas no gerenciamento de riscos psicossociais porque o estressor ambiental — mesmo quando não provoca doença física direta — é processado pelo organismo como ameaça, ativando respostas de estresse que, se persistentes, levam ao adoecimento mental.</p>`,
      o_que_e: `<ul>
<li>Ruído excessivo e constante que impede concentração e comunicação</li>
<li>Espaço físico inadequado: falta de privacidade, superlotação, impossibilidade de trabalhar com concentração</li>
<li>Temperatura extrema ou variável sem controle (calor intenso em ambiente externo, ar condicionado excessivo em escritórios)</li>
<li>Equipamentos deficientes ou inseguros que geram insegurança e ineficiência constantes</li>
<li>Iluminação inadequada gerando fadiga visual e dores de cabeça</li>
<li>Precariedade geral que comunica desvalorização: espaço sujo, sem manutenção, sem condições mínimas de dignidade</li>
<li>Exposição à violência no ambiente (atendimento em locais de risco, abordagem de populações em situação de vulnerabilidade)</li>
</ul>`,
      o_que_nao_e: `<ul>
<li><strong>Não é exigência de luxo:</strong> condições adequadas significam o mínimo para trabalhar com saúde e dignidade — não escritório de alto padrão</li>
<li><strong>Não é apenas risco para quem trabalha em fábrica ou obra:</strong> escritórios e hospitais também podem ter condições ambientais inadequadas com sério impacto psicológico</li>
<li><strong>Não é "frescura":</strong> o corpo humano tem limites fisiológicos e psicológicos reais para suportar condições ambientais adversas</li>
</ul>`,
      como_se_manifesta: `<ul>
<li>Dificuldade de concentração e maior incidência de erros por interferência ambiental</li>
<li>Irritabilidade e impaciência elevadas associadas ao desconforto ambiental</li>
<li>Ansiedade relacionada à insegurança dos equipamentos ou do ambiente</li>
<li>Exaustão física e mental acelerada pelo esforço de trabalhar em condições adversas</li>
<li>Sensação de desvalorização e descaso pela organização</li>
<li>Queixas físicas frequentes: dores de cabeça, problemas auditivos, problemas musculoesqueléticos</li>
</ul>`,
      exemplos: `<ul>
<li><strong>Call center:</strong> operadores em ambiente com ruído constante de dezenas de conversas simultâneas, sem separação acústica, processando informações complexas sob pressão</li>
<li><strong>Obra:</strong> trabalhador exposto a calor intenso sem estrutura de descanso à sombra, água ou alimentação adequados — condições que aumentam o risco de acidentes além do adoecimento</li>
<li><strong>Home office:</strong> trabalhador remoto sem espaço físico adequado em casa — trabalhando da cama, sem cadeira ergonômica, no mesmo espaço onde vive e dorme, sem separação entre trabalho e descanso</li>
<li><strong>Hospital:</strong> profissional de saúde sem local para pausas, sem espaço para se alimentar adequadamente, em corredor barulhento, lidando com situações de alto risco emocional sem nenhuma estrutura de apoio físico</li>
</ul>`,
      impactos: `<ul>
<li>Estresse crônico pela exposição contínua a estressores ambientais</li>
<li>Fadiga cognitiva e comprometimento da função executiva</li>
<li>Doenças ocupacionais físicas com componente psicossomático (LER/DORT, perda auditiva, doenças respiratórias)</li>
<li>Ansiedade e irritabilidade crônicas</li>
<li>Sensação de desvalorização que alimenta ressentimento organizacional</li>
<li>Maior risco de acidentes por comprometimento da atenção</li>
</ul>`,
      o_que_fazer: `<ul>
<li><strong>Para o trabalhador:</strong> registre formalmente as condições inadequadas — e-mail, CIPA, SESMT, livro de ocorrências — criando histórico para ação</li>
<li><strong>Para o trabalhador:</strong> conheça as NRs específicas para seu setor (NR-15 para insalubridade, NR-17 para ergonomia) — elas definem padrões mínimos exigíveis</li>
<li><strong>Para o trabalhador:</strong> em caso de risco grave e iminente, a CLT (art. 483) prevê possibilidade de interrupção do trabalho sem penalização</li>
<li><strong>Para a organização:</strong> incluir avaliação das condições físicas no mapeamento de riscos psicossociais da NR-1</li>
<li><strong>Para a organização:</strong> tratar manutenção e melhoria do ambiente físico como investimento em saúde, não como custo evitável</li>
</ul>`
    },
    checklistItems: [
      { id: 'cf2-1', text: 'Meu ambiente de trabalho é barulhento ou desconfortável de forma que atrapalha meu trabalho' },
      { id: 'cf2-2', text: 'Trabalho com equipamentos defeituosos ou precários com frequência' },
      { id: 'cf2-3', text: 'As condições físicas do meu local de trabalho me geram preocupação com minha saúde' },
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
    riskId: 'excesso-demandas',
    question: 'Qual é a principal característica que diferencia o excesso de demandas de um período pontual de muito trabalho?',
    options: [
      { text: 'A quantidade de tarefas por dia', correct: false },
      { text: 'A cronicidade — a sobrecarga deixa de ser exceção e passa a ser regra', correct: true },
      { text: 'O nível de dificuldade das tarefas', correct: false },
      { text: 'A falta de organização pessoal do trabalhador', correct: false }
    ],
    explanation: 'A cronicidade é o elemento definidor. Qualquer profissional pode ter semanas intensas — isso é normal. O risco psicossocial surge quando a sobrecarga se torna o estado permanente, sem perspectiva de alívio, comprometendo a saúde ao longo do tempo.'
  },
  {
    id: 'q2',
    riskId: 'falta-controle',
    question: 'Segundo o modelo de Demanda-Controle de Karasek, qual combinação representa o maior risco para doenças relacionadas ao trabalho?',
    options: [
      { text: 'Baixa demanda e baixo controle', correct: false },
      { text: 'Alta demanda e alto controle', correct: false },
      { text: 'Alta demanda e baixo controle', correct: true },
      { text: 'Baixa demanda e alto controle', correct: false }
    ],
    explanation: 'Alta demanda com baixo controle é a combinação mais nociva: o trabalhador enfrenta muitas exigências sem poder adaptar sua resposta a elas. O controle funciona como fator protetor — quando existe, permite que a pessoa gerencie ativamente o estresse.'
  },
  {
    id: 'q3',
    riskId: 'assedio-moral',
    question: 'Um gestor dá uma avaliação de desempenho severa a um funcionário, listando falhas específicas e estabelecendo prazo para melhoria. Isso é assédio moral?',
    options: [
      { text: 'Sim, qualquer feedback negativo é assédio', correct: false },
      { text: 'Depende — se for feito com respeito e propósito construtivo, não é assédio', correct: true },
      { text: 'Sim, porque causa sofrimento ao trabalhador', correct: false },
      { text: 'Não, gestores nunca praticam assédio', correct: false }
    ],
    explanation: 'Assédio moral exige repetição, intencionalidade e degradação da dignidade. Feedback crítico, mesmo que difícil de ouvir, é parte legítima da gestão quando feito com respeito e finalidade construtiva. O limite está na humilhação, no rebaixamento e na repetição sistemática abusiva.'
  },
  {
    id: 'q4',
    riskId: 'trabalho-emocional',
    question: 'O conceito de "dissonância emocional" no trabalho emocional refere-se a:',
    options: [
      { text: 'Discutir com clientes agressivos', correct: false },
      { text: 'Sentir emoções muito intensas no trabalho', correct: false },
      { text: 'Sentir uma emoção internamente e ter que demonstrar outra externamente por exigência do trabalho', correct: true },
      { text: 'Não conseguir sentir emoções no trabalho', correct: false }
    ],
    explanation: 'Dissonância emocional é o conflito entre o que se sente de verdade e o que precisa ser demonstrado. Uma atendente que acabou de ser xingada e precisa imediatamente sorrir para o próximo cliente experimenta dissonância emocional. Quando crônica, essa dissonância é um dos principais mecanismos que levam ao burnout.'
  },
  {
    id: 'q5',
    riskId: 'inseguranca-trabalho',
    question: 'A insegurança no trabalho pode causar adoecimento mesmo quando a ameaça de demissão é percebida mas não real. Por quê?',
    options: [
      { text: 'Porque trabalhadores ansiosos exageram os riscos', correct: false },
      { text: 'Porque o organismo responde ao que é percebido como ameaça, não apenas ao que é objetivamente real', correct: true },
      { text: 'Porque pessoas inseguras têm pior desempenho e acabam sendo demitidas de fato', correct: false },
      { text: 'Isso não é verdade — só causa impacto quando a demissão acontece de fato', correct: false }
    ],
    explanation: 'O sistema de resposta ao estresse do organismo não distingue ameaças percebidas de ameaças reais. A antecipação de uma perda ativa os mesmos mecanismos fisiológicos que a perda em si. É por isso que a incerteza prolongada — mesmo sem evento concreto — produz adoecimento real.'
  },
  {
    id: 'q6',
    riskId: 'conflito-familia',
    question: 'Qual lei brasileira estabelece proteções relacionadas ao direito à desconexão digital e ao assédio no trabalho?',
    options: [
      { text: 'Lei 13.467/2017 (Reforma Trabalhista)', correct: false },
      { text: 'Lei 14.457/2022', correct: true },
      { text: 'Lei 9.503/1997 (Código de Trânsito)', correct: false },
      { text: 'Lei 8.213/1991 (Benefícios da Previdência)', correct: false }
    ],
    explanation: 'A Lei 14.457/2022 (Programa Emprega + Mulheres) ampliou obrigações das empresas com CIPA, incluindo canais de denúncia de assédio e medidas de equilíbrio trabalho-família. Junto com a Portaria MTE 1.419/2024 que atualizou a NR-1, forma o marco regulatório atual dos riscos psicossociais no Brasil.'
  },
  {
    id: 'q7',
    riskId: 'suporte-social',
    question: 'O suporte social no trabalho funciona como "amortecedor" do estresse. Isso significa que:',
    options: [
      { text: 'Elimina completamente o estresse ocupacional', correct: false },
      { text: 'Reduz a percepção dos riscos psicossociais existentes', correct: false },
      { text: 'Reduz o impacto negativo dos estressores sobre a saúde do trabalhador', correct: true },
      { text: 'Torna os trabalhadores insensíveis às pressões do trabalho', correct: false }
    ],
    explanation: 'O efeito amortecedor (buffering effect) do suporte social não elimina os problemas, mas ajuda os trabalhadores a lidar melhor com eles. Pessoas com bom suporte social adoecem menos diante das mesmas pressões de trabalho do que pessoas que as enfrentam sozinhas.'
  },
  {
    id: 'q8',
    riskId: 'falta-significado',
    question: 'Um trabalhador muito bem remunerado começa a questionar o sentido do que faz, sente tédio crônico e pensa em mudar de carreira. Qual risco psicossocial melhor descreve essa situação?',
    options: [
      { text: 'Excesso de demandas — o trabalho está fácil demais', correct: false },
      { text: 'Falta de significado e reconhecimento no trabalho', correct: true },
      { text: 'Insegurança no trabalho — está pensando em sair', correct: false },
      { text: 'Conflito trabalho-família — quer mais tempo livre', correct: false }
    ],
    explanation: 'A falta de significado é um risco independente da remuneração. Quando o trabalho não oferece propósito, desafio ou visibilidade do impacto das próprias contribuições, o adoecimento psicológico pode ocorrer mesmo com excelentes condições materiais. Salário não substitui sentido.'
  },
  {
    id: 'q9',
    riskId: 'discriminacao',
    question: 'A discriminação no trabalho pode ser "inconsciente" ou "estrutural". Isso significa que:',
    options: [
      { text: 'Não causa dano real pois não é intencional', correct: false },
      { text: 'Só conta juridicamente se houver intenção comprovada', correct: false },
      { text: 'Pode existir sem que a pessoa que discrimina tenha consciência disso, mas ainda assim causa impacto real na vítima', correct: true },
      { text: 'É mais grave do que a discriminação explícita', correct: false }
    ],
    explanation: 'Vieses inconscientes são atitudes automáticas formadas por experiências e contexto cultural que afetam decisões mesmo sem intenção. A pesquisa mostra que curriculos com nomes "negros" recebem menos respostas do que os mesmos currículos com nomes "brancos" — sem que o recrutador perceba a discriminação. O impacto para a vítima é real independentemente da intenção.'
  },
  {
    id: 'q10',
    riskId: 'condicoes-fisicas',
    question: 'Por que condições físicas inadequadas de trabalho são classificadas como risco PSICOSSOCIAL e não apenas físico?',
    options: [
      { text: 'Porque só afetam a mente, não o corpo', correct: false },
      { text: 'Porque o estressor ambiental ativa respostas de estresse psicológico crônico que levam ao adoecimento mental', correct: true },
      { text: 'Porque são apenas desconforto sem consequência real', correct: false },
      { text: 'Porque a NR-1 classifica tudo como psicossocial por conveniência burocrática', correct: false }
    ],
    explanation: 'Condições físicas adversas persistentes são processadas pelo sistema nervoso como ameaça contínua, ativando o eixo do estresse. Quando cronicizado, esse estado de ativação prejudica a saúde mental. Além disso, condições precárias comunicam desvalorização ao trabalhador, gerando impacto psicológico adicional.'
  },
  {
    id: 'q11',
    riskId: 'excesso-demandas',
    question: 'Qual das situações abaixo NÃO configura excesso de demandas como risco psicossocial?',
    options: [
      { text: 'Cobertura permanente das funções de dois colegas demitidos há seis meses', correct: false },
      { text: 'Uma semana intensa de trabalho para cumprir prazo de projeto importante', correct: true },
      { text: 'Expectativa de responder mensagens de trabalho nos fins de semana', correct: false },
      { text: 'Metas estabelecidas sem consulta sobre viabilidade com a equipe executora', correct: false }
    ],
    explanation: 'Períodos pontuais de alta demanda são parte normal do trabalho e não configuram risco psicossocial. O risco surge com a cronicidade — quando a sobrecarga se torna o estado permanente. Uma semana intensa seguida de normalização é diferente de semanas intensas que nunca terminam.'
  },
  {
    id: 'q12',
    riskId: 'trabalho-emocional',
    question: 'A "fadiga compassiva" (compassion fatigue) afeta principalmente qual grupo de profissionais?',
    options: [
      { text: 'Trabalhadores de linha de produção', correct: false },
      { text: 'Profissionais que cuidam do sofrimento e das necessidades dos outros de forma contínua', correct: true },
      { text: 'Gestores de alto escalão', correct: false },
      { text: 'Trabalhadores autônomos sem vínculo empregatício', correct: false }
    ],
    explanation: 'A fadiga compassiva é o esgotamento do capital empático de profissionais que, por vocação, cuidam do sofrimento alheio: médicos, enfermeiros, assistentes sociais, psicólogos, professores. A exposição contínua à dor do outro sem suporte adequado corrói progressivamente a capacidade de se importar, colocando em risco o próprio e os que cuida.'
  },
  {
    id: 'q13',
    riskId: 'falta-controle',
    question: 'O microgerenciamento é prejudicial principalmente porque:',
    options: [
      { text: 'Aumenta a quantidade de trabalho do gestor', correct: false },
      { text: 'Remove a autonomia do trabalhador, gerando impotência e desmotivação', correct: true },
      { text: 'Garante que os erros sejam detectados mais rapidamente', correct: false },
      { text: 'É sempre uma forma de assédio moral', correct: false }
    ],
    explanation: 'O microgerenciamento mina o controle que o trabalhador tem sobre seu próprio trabalho — um fator protetor fundamental para a saúde mental. Quando profissionais competentes não podem usar seu julgamento, experimentam impotência aprendida, perda de confiança e desengajamento progressivo.'
  },
  {
    id: 'q14',
    riskId: 'suporte-social',
    question: 'Qual das situações abaixo representa suporte social INADEQUADO no trabalho?',
    options: [
      { text: 'Gestor que dá feedback crítico sobre uma entrega', correct: false },
      { text: 'Colega que discorda da sua abordagem em uma reunião', correct: false },
      { text: 'Trabalhador remoto que não recebe retorno sobre seu trabalho por semanas e cujas mensagens ficam sem resposta', correct: true },
      { text: 'Empresa que não oferece plano de saúde', correct: false }
    ],
    explanation: 'Suporte social inadequado não é ausência de concordância — é ausência de disponibilidade e atenção. Um trabalhador remoto sem acesso a feedback, sem retorno às comunicações e sem participação nas decisões está efetivamente isolado, mesmo que tecnicamente "na equipe". Esse isolamento amplifica todos os outros riscos psicossociais.'
  },
  {
    id: 'q15',
    riskId: 'assedio-moral',
    question: 'Uma funcionária começa a duvidar da própria percepção das situações de abuso após o agressor consistentemente negar os eventos ou distorcer o que aconteceu. Esse fenômeno é chamado de:',
    options: [
      { text: 'Síndrome de burnout', correct: false },
      { text: 'Dissonância cognitiva comum', correct: false },
      { text: 'Gaslighting', correct: true },
      { text: 'Fadiga decisória', correct: false }
    ],
    explanation: 'Gaslighting é uma forma de manipulação psicológica em que o agressor nega, distorce ou minimiza sistematicamente os episódios de abuso, fazendo a vítima questionar sua própria memória e percepção. É uma característica frequente em situações de assédio moral e pode causar dano psicológico profundo, além de dificultar a denúncia.'
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
  <p>Este não é um diagnóstico — é um convite à reflexão. Marque as situações que você <strong>reconhece no seu ambiente de trabalho</strong>, seja como vivência própria ou como algo que você observa acontecer. Não há resposta certa ou errada. Suas respostas ficam salvas apenas no seu dispositivo.</p>
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
