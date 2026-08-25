const MODELS = [
  {
    id:'qmc1-materia-misturas', phase:1, component:'Química 1', kind:'QMC',
    title:'QMC1 — Matéria, densidade, misturas e mudanças de estado',
    summary:'Aula para introdução de matéria, densidade, substâncias, misturas, estados físicos, fenômenos físicos/químicos e separação de misturas.',
    source:'PPC IFSC: Química 1 — conceitos fundamentais, densidade, substâncias e misturas, mudanças de estado, fenômenos físicos/químicos e separação de misturas.',
    tags:['densidade','misturas','matéria','separação'],
    type:['Aula demonstrativa','Aula prática simples'],
    contents:['Matéria','Densidade','Substâncias e misturas','Estados físicos','Mudanças de estado','Fenômenos físicos e químicos','Separação de misturas'],
    materials:['Água','Óleo','Sal','Areia','Copos transparentes','Funil','Papel filtro','Balança ou proveta'],
    trail:['Apresentar objetivo','Observar materiais','Comparar propriedades','Realizar demonstração ou prática','Registrar observações','Relacionar com o conceito','Concluir','Limpar bancada'],
    cognitive:['muitas propriedades comparadas ao mesmo tempo','vocabulário técnico novo','diferenciar fenômeno físico e químico','relacionar observação com conceito'],
    sensory:['atividade com líquidos','possível contato com materiais granulados','movimento na bancada','espera entre etapas'],
    safety:['não provar materiais','não misturar sem autorização','manter bancada organizada','cuidado com recipiente de vidro'],
    communication:['preciso de ajuda','pode repetir?','preciso observar de novo','pode conferir?'],
    assessment:['marcar em checklist o que observou','desenhar as fases da mistura','explicar oralmente uma diferença','comparar antes e depois'],
    student:['Observar os materiais','Marcar se há uma fase ou mais de uma fase','Registrar o que mudou','Relacionar a observação com mistura ou separação','Concluir com apoio do professor']
  },
  {
    id:'qmc1-atomos-tabela', phase:1, component:'Química 1', kind:'QMC',
    title:'QMC1 — Modelos atômicos, íons e tabela periódica',
    summary:'Aula visual para modelos atômicos, partículas subatômicas, representação dos elementos e organização da tabela periódica.',
    source:'PPC IFSC: Química 1 — evolução da teoria atômica, partículas subatômicas, íons, distribuição eletrônica e tabela periódica.',
    tags:['átomo','tabela periódica','íons','modelos'],
    type:['Aula teórica visual','Atividade com modelo'],
    contents:['Modelos atômicos','Prótons, nêutrons e elétrons','Número atômico','Número de massa','Íons','Tabela periódica','Distribuição eletrônica'],
    materials:['Tabela periódica impressa','Cartões de elementos','Modelo visual do átomo','Projetor ou quadro'],
    trail:['Apresentar objetivo','Observar uma representação de átomo','Identificar partículas','Localizar elemento na tabela','Relacionar posição e informação','Registrar exemplo','Concluir'],
    cognitive:['abstração submicroscópica','muitos símbolos e números','necessidade de leitura da tabela periódica','passagem entre imagem e símbolo'],
    sensory:['uso de projetor ou tela','muitas informações visuais','atividade com cartões'],
    safety:['manter materiais organizados','cuidado ao circular pela sala'],
    communication:['não entendi','pode repetir?','quero ver um exemplo','pode conferir?'],
    assessment:['localizar um elemento na tabela','montar um exemplo com cartões','explicar a diferença entre número atômico e massa','responder por marcação'],
    student:['Observar o modelo','Identificar próton, nêutron e elétron','Localizar um elemento na tabela','Registrar número atômico e símbolo','Conferir com o professor']
  },
  {
    id:'qmc2-ligacoes', phase:2, component:'Química 2', kind:'QMC',
    title:'QMC2 — Ligações químicas e propriedades dos materiais',
    summary:'Aula para comparar ligação iônica, covalente e metálica, propriedades, condutividade, solubilidade e pontos de fusão/ebulição.',
    source:'PPC IFSC: Química 2 — ligações iônicas, covalentes e metálicas, polaridade, geometria e interações intermoleculares.',
    tags:['ligações','polaridade','condutividade','intermolecular'],
    type:['Aula investigativa','Demonstração experimental ou digital'],
    contents:['Ligação iônica','Ligação covalente','Ligação metálica','Condutividade elétrica','Dissociação iônica','Polaridade molecular','Interações intermoleculares'],
    materials:['Amostras de sal, açúcar e metal','Água','Circuito simples de condutividade','Modelos moleculares','Projetor'],
    trail:['Apresentar objetivo','Observar amostras','Comparar propriedades','Testar ou simular condutividade','Relacionar propriedade e ligação','Registrar conclusão'],
    cognitive:['comparar três modelos de ligação','associar nível macroscópico e submicroscópico','vocabulário abstrato','interpretar resultados de teste'],
    sensory:['possível uso de circuito simples','manipulação de amostras','muitos materiais na bancada'],
    safety:['não provar substâncias','não tocar circuito sem orientação','manter bancada organizada','chamar professor antes de ligar equipamento'],
    communication:['preciso de ajuda','pode repetir?','quero ver um exemplo','pode conferir?'],
    assessment:['preencher tabela comparativa','associar material a tipo de ligação','explicar uma propriedade observada','usar cartões de associação'],
    student:['Observar cada material','Comparar aparência e comportamento','Registrar se conduz eletricidade','Relacionar com o tipo de ligação','Conferir a conclusão']
  },
  {
    id:'qmc3-evidencias-reacoes', phase:3, component:'Química 3', kind:'QMC',
    title:'QMC3 — Evidências de transformações químicas',
    summary:'Aula para reconhecer transformações químicas por comparação entre estado inicial e final: gás, cor, sólido, calor e outras evidências.',
    source:'PPC IFSC: Química 3 — transformações químicas no cotidiano, evidências de reações, formação de novas substâncias e equações químicas.',
    tags:['reações','evidências','gás','cor'],
    type:['Demonstração experimental','Aula prática simples'],
    contents:['Transformações químicas','Evidências de reação','Formação de gás','Mudança de cor','Formação de precipitado','Equações químicas'],
    materials:['Vinagre','Bicarbonato de sódio','Copos transparentes','Indicador natural opcional','Termômetro opcional'],
    trail:['Apresentar objetivo','Observar estado inicial','Realizar mistura com orientação','Observar evidências','Registrar antes e depois','Relacionar com transformação química','Concluir','Limpar bancada'],
    cognitive:['comparar estado inicial e final','diferenciar evidência de prova absoluta','relacionar fenômeno e linguagem química','registrar antes e depois'],
    sensory:['espuma ou bolhas','possível cheiro de vinagre','movimento na bancada','atividade com líquidos'],
    safety:['usar óculos se houver projeção','não provar','não cheirar diretamente','não misturar sem autorização','descartar no local indicado'],
    communication:['preciso observar de novo','preciso de ajuda','estou desconfortável','pode repetir?'],
    assessment:['marcar evidências observadas','desenhar antes e depois','explicar se houve transformação química','responder oralmente ou por checklist'],
    student:['Observar os materiais antes','Realizar a mistura com orientação','Marcar evidências observadas','Registrar antes e depois','Concluir com apoio']
  },
  {
    id:'qmc3-estequiometria', phase:3, component:'Química 3', kind:'QMC',
    title:'QMC3 — Equações, balanceamento e estequiometria',
    summary:'Aula para organizar equações químicas, balanceamento por tentativa e erro, relações de massa, reagente limitante e rendimento.',
    source:'PPC IFSC: Química 3 — equações químicas, balanceamento, estequiometria, reagente limitante, excesso e rendimentos.',
    tags:['balanceamento','estequiometria','reagente limitante'],
    type:['Aula teórica guiada','Resolução de problema'],
    contents:['Equações químicas','Balanceamento','Massa molar','Cálculos estequiométricos','Reagente limitante','Rendimento'],
    materials:['Quadro','Cartões de reagentes e produtos','Calculadora','Tabela periódica'],
    trail:['Ler problema','Identificar reagentes e produtos','Balancear equação','Organizar dados','Escolher estratégia','Resolver com apoio','Conferir resultado','Registrar conclusão'],
    cognitive:['muitas etapas sequenciais','cálculo e interpretação no mesmo problema','símbolos químicos','risco de perder a etapa atual'],
    sensory:['atividade predominantemente escrita','uso de calculadora','possível sobrecarga visual no quadro'],
    safety:['sem manipulação química nesta proposta','manter materiais organizados'],
    communication:['não entendi','preciso de mais tempo','pode repetir a etapa?','pode conferir?'],
    assessment:['resolver com checklist de etapas','completar tabela de dados','explicar apenas a estratégia','trabalhar em dupla com papéis definidos'],
    student:['Ler o problema','Marcar reagentes e produtos','Conferir balanceamento','Preencher dados','Resolver uma etapa por vez','Conferir com professor ou colega']
  },
  {
    id:'qmc3-acidos-bases', phase:3, component:'Química 3', kind:'QMC',
    title:'QMC3 — Ácidos, bases, sais, óxidos e neutralização',
    summary:'Aula para identificar caráter ácido-base, distinguir dissociação/ionização e compreender neutralização.',
    source:'PPC IFSC: Química 3 — teorias ácido-base, dissociação e ionização, óxidos, sais e reações de neutralização.',
    tags:['ácidos','bases','neutralização','sais'],
    type:['Aula demonstrativa','Atividade com indicador'],
    contents:['Ácidos e bases','Dissociação e ionização','Sais e óxidos','Neutralização','Indicadores'],
    materials:['Indicador natural','Amostras seguras do cotidiano','Copos transparentes','Pipeta ou conta-gotas'],
    trail:['Apresentar objetivo','Observar amostras','Adicionar indicador','Observar cor','Classificar com apoio','Registrar resultado','Concluir','Descartar'],
    cognitive:['classificar substâncias','associar cor e caráter químico','diferenciar conceitos próximos','usar linguagem simbólica'],
    sensory:['mudança de cor','atividade com líquidos','possível cheiro leve','uso de conta-gotas'],
    safety:['não provar','não cheirar diretamente','usar óculos se necessário','não misturar sem autorização','descartar no local indicado'],
    communication:['preciso de ajuda','pode repetir?','quero ver um exemplo','pode conferir?'],
    assessment:['usar tabela de cores','classificar por cartões','explicar uma amostra','registrar por desenho ou frase curta'],
    student:['Observar amostra','Adicionar indicador com orientação','Comparar cor','Marcar ácido, base ou neutro','Registrar conclusão']
  },
  {
    id:'qmc4-solucoes', phase:4, component:'Química 4', kind:'QMC',
    title:'QMC4 — Soluções, concentração e diluição',
    summary:'Aula para conceito de solução, concentração massa/volume e mol/volume, diluição, soluções aquosas e propriedades eletrolíticas.',
    source:'PPC IFSC: Química 4 — soluções, dispersão coloidal, suspensão, unidades de concentração, diluição, neutralização e propriedades eletrolíticas.',
    tags:['soluções','concentração','diluição'],
    type:['Aula prática orientada','Resolução de problema'],
    contents:['Soluções','Dispersões','Suspensões','Concentração','Diluição','Soluções aquosas','Propriedades eletrolíticas'],
    materials:['Água','Soluto seguro','Béquer','Proveta','Balão volumétrico se disponível','Bastão de vidro'],
    trail:['Apresentar objetivo','Separar materiais','Medir quantidade','Misturar ou diluir','Homogeneizar','Registrar concentração','Conferir resultado','Limpar bancada'],
    cognitive:['muitas etapas de medida','unidades de concentração','cálculo e manipulação juntos','necessidade de registro preciso'],
    sensory:['atividade com líquidos','uso de vidrarias','movimento na bancada','espera para conferência'],
    safety:['usar óculos','não provar','cuidado com vidro','não misturar sem autorização','chamar professor antes de descartar'],
    communication:['preciso de ajuda','preciso de mais tempo','pode conferir?','pode repetir?'],
    assessment:['checklist de preparo','tabela de dados','explicar diferença entre solução e suspensão','conferir rótulo/etiqueta'],
    student:['Separar materiais','Medir com orientação','Misturar com cuidado','Registrar dados','Conferir concentração ou conclusão','Limpar bancada']
  },
  {
    id:'qmc4-termo-cinetica', phase:4, component:'Química 4', kind:'QMC',
    title:'QMC4 — Termoquímica e cinética química',
    summary:'Aula para energia nas transformações, entalpia, reações exotérmicas/endotérmicas, velocidade de reação, colisões, catalisador e fatores que alteram a velocidade.',
    source:'PPC IFSC: Química 4 — termoquímica, entalpia, Lei de Hess, cinética química, teoria das colisões, fatores de velocidade e catálise.',
    tags:['termoquímica','cinética','calor','velocidade'],
    type:['Demonstração experimental','Aula investigativa'],
    contents:['Termoquímica','Exotérmica e endotérmica','Entalpia','Cinética química','Velocidade de reação','Catálise','Fatores que alteram velocidade'],
    materials:['Comprimido efervescente','Água em temperaturas diferentes','Termômetro','Cronômetro','Copos transparentes'],
    trail:['Apresentar objetivo','Observar materiais','Realizar teste controlado','Medir tempo ou temperatura','Comparar resultados','Relacionar com cinética ou energia','Registrar','Concluir'],
    cognitive:['comparar variáveis','interpretar medida de tempo ou temperatura','relacionar dado e conceito','controlar uma variável por vez'],
    sensory:['bolhas ou efervescência','possível variação de temperatura','atividade com líquidos','uso de cronômetro'],
    safety:['usar óculos se houver efervescência','não provar','cuidado com água quente se utilizada','descartar no local indicado'],
    communication:['preciso observar de novo','preciso de ajuda','pode repetir a etapa?','pode conferir?'],
    assessment:['comparar dois resultados','marcar fator que alterou a velocidade','registrar temperatura/tempo','explicar em frase curta'],
    student:['Observar materiais','Realizar teste com orientação','Medir tempo ou temperatura','Comparar resultados','Registrar o que mudou','Concluir']
  },
  {
    id:'qmc5-equilibrio-ph', phase:5, component:'Química 5', kind:'QMC',
    title:'QMC5 — Equilíbrio químico, pH e indicadores',
    summary:'Aula para reações reversíveis, equilíbrio, Le Chatelier, autoionização da água, pH, indicadores, tampões e equilíbrio de solubilidade.',
    source:'PPC IFSC: Química 5 — equilíbrio químico, Le Chatelier, autoionização da água, pH, indicadores ácido-base, tampões e equilíbrio de solubilidade.',
    tags:['equilíbrio','pH','indicadores','Le Chatelier'],
    type:['Aula demonstrativa','Atividade investigativa'],
    contents:['Equilíbrio químico','Le Chatelier','pH','Indicadores ácido-base','Soluções tamponadas','Equilíbrio de solubilidade'],
    materials:['Indicador ácido-base','Amostras seguras','Copos transparentes','Conta-gotas','Tabela de cores'],
    trail:['Apresentar objetivo','Observar amostras','Adicionar indicador','Comparar cores','Relacionar com pH','Discutir equilíbrio','Registrar conclusão'],
    cognitive:['conceito abstrato de equilíbrio dinâmico','interpretação de escala de pH','associação cor-conceito','vocabulário técnico'],
    sensory:['mudança de cor','atividade com líquidos','possível cheiro','muitas amostras visuais'],
    safety:['não provar','não cheirar diretamente','usar óculos se necessário','descartar no local indicado'],
    communication:['quero ver um exemplo','preciso de ajuda','não entendi','pode conferir?'],
    assessment:['usar escala visual de pH','classificar amostras','explicar uma mudança de cor','responder por tabela'],
    student:['Observar a amostra','Adicionar indicador','Comparar a cor com a tabela','Registrar pH ou classificação','Conferir conclusão']
  },
  {
    id:'qmc5-eletro-corrosao', phase:5, component:'Química 5', kind:'QMC',
    title:'QMC5 — Eletroquímica, pilhas, eletrólise e corrosão',
    summary:'Aula para oxirredução, número de oxidação, pilhas, baterias, eletrólise e corrosão no cotidiano.',
    source:'PPC IFSC: Química 5 — eletroquímica, reações de oxirredução, pilhas, baterias, eletrólise e corrosão.',
    tags:['eletroquímica','pilhas','corrosão','redox'],
    type:['Demonstração experimental ou digital','Aula investigativa'],
    contents:['Oxirredução','Número de oxidação','Pilhas','Potencial eletroquímico','Eletrólise','Corrosão'],
    materials:['Imagens ou simulação de pilha','Metais','Solução segura quando disponível','Multímetro se disponível','Amostras de ferrugem'],
    trail:['Apresentar objetivo','Observar sistema ou imagem','Identificar oxidação e redução','Comparar antes e depois','Relacionar com energia elétrica ou corrosão','Registrar conclusão'],
    cognitive:['muitos símbolos e cargas','movimento de elétrons abstrato','diferenciar oxidação e redução','interpretar esquema de pilha'],
    sensory:['uso de fios ou equipamento','possível manipulação de metais','muitos elementos visuais'],
    safety:['não tocar equipamento sem orientação','não provar soluções','manter fios e bancada organizados','descartar materiais conforme orientação'],
    communication:['preciso de ajuda','pode repetir?','quero ver um exemplo','pode conferir?'],
    assessment:['identificar ânodo/cátodo em esquema','marcar quem oxida/reduz','relacionar ferrugem com oxidação','responder por associação'],
    student:['Observar sistema','Identificar partes','Marcar oxidação e redução','Relacionar com energia ou corrosão','Registrar conclusão']
  },
  {
    id:'qmc6-organica-funcoes', phase:6, component:'Química 6', kind:'QMC',
    title:'QMC6 — Funções orgânicas e representação molecular',
    summary:'Aula para química orgânica no cotidiano, fórmulas, estrutura, geometria, funções orgânicas, nomenclatura, propriedades e isomeria.',
    source:'PPC IFSC: Química 6 — materiais naturais e sintéticos, fórmulas moleculares/estruturais/de linhas, funções orgânicas, nomenclatura, propriedades e isomeria.',
    tags:['orgânica','funções orgânicas','nomenclatura','isomeria'],
    type:['Aula teórica visual','Atividade com modelos'],
    contents:['Química orgânica no cotidiano','Fórmulas moleculares e estruturais','Funções orgânicas','Nomenclatura','Isomeria','Propriedades físicas'],
    materials:['Cartões de funções orgânicas','Modelos moleculares','Rótulos de produtos','Quadro ou projetor'],
    trail:['Apresentar objetivo','Observar exemplos do cotidiano','Identificar grupos funcionais','Comparar estruturas','Registrar classificação','Conferir com modelo','Concluir'],
    cognitive:['muitas representações simbólicas','nomenclatura técnica','diferenciar grupos funcionais','associar estrutura e propriedade'],
    sensory:['muitas informações visuais','manipulação de modelos ou cartões','atividade de classificação'],
    safety:['sem manipulação química nesta proposta','manter materiais organizados'],
    communication:['quero ver um exemplo','não entendi','pode repetir?','pode conferir?'],
    assessment:['classificar moléculas por função','usar cartões de associação','explicar uma função orgânica','responder por marcação'],
    student:['Observar exemplo','Identificar grupo funcional','Comparar com modelo','Classificar estrutura','Registrar e conferir']
  },
  {
    id:'qmc6-biomoleculas', phase:6, component:'Química 6', kind:'QMC',
    title:'QMC6 — Biomoléculas e química orgânica biológica',
    summary:'Aula para ácidos nucléicos, proteínas, carboidratos, ácidos graxos, lipídeos, vitaminas, fibras e relação com saúde.',
    source:'PPC IFSC: Química 6 — introdução à Química Orgânica Biológica: ácidos nucléicos, proteínas, carboidratos, ácidos graxos, lipídeos, vitaminas e fibras.',
    tags:['biomoléculas','saúde','alimentos','orgânica'],
    type:['Aula contextualizada','Atividade com rótulos'],
    contents:['Proteínas','Carboidratos','Lipídeos','Vitaminas','Fibras','Ácidos nucléicos','Moléculas biologicamente importantes'],
    materials:['Rótulos de alimentos','Tabela nutricional','Cartões de biomoléculas','Projetor'],
    trail:['Apresentar objetivo','Observar rótulos','Identificar biomoléculas','Comparar funções','Relacionar com saúde','Registrar conclusão'],
    cognitive:['leitura de rótulos','vocabulário biológico e químico','comparação entre funções','interpretação de tabela'],
    sensory:['muitos textos pequenos em rótulos','atividade em grupo','manipulação de embalagens'],
    safety:['sem consumo de alimentos','higienizar materiais se necessário','manter bancada organizada'],
    communication:['pode repetir?','preciso de ajuda','prefiro registrar por escrito','pode conferir?'],
    assessment:['marcar biomoléculas em rótulos','montar tabela comparativa','explicar uma relação com saúde','responder por associação'],
    student:['Observar rótulo','Localizar informação','Identificar biomolécula','Relacionar com função','Registrar conclusão']
  },
  {
    id:'lqm1-seguranca-vidrarias', phase:4, component:'Laboratório de Química 1', kind:'LAB',
    title:'LQM1 — Segurança, vidrarias, registros e resíduos',
    summary:'Aula de entrada no laboratório: normas de segurança, descarte, registros, caderno de laboratório, etiquetagem, uso, cuidado e limpeza de materiais.',
    source:'PPC IFSC: Laboratório de Química 1 — segurança, descarte, registros, caderno de laboratório, etiquetagem, ferramentas de pesquisa, materiais, vidrarias e limpeza.',
    tags:['segurança','vidrarias','resíduos','registro'],
    type:['Aula prática demonstrativa','Roteiro de laboratório'],
    contents:['Segurança de laboratório','Descarte de resíduos','Caderno de laboratório','Etiquetagem','Vidrarias','Cuidado e limpeza'],
    materials:['Óculos','Luvas','Jaleco','Vidrarias básicas','Etiquetas','Caderno de laboratório','Recipientes de descarte'],
    trail:['Apresentar objetivo','Reconhecer EPIs','Observar vidrarias','Ler etiqueta ou rótulo','Simular descarte correto','Registrar no caderno','Limpar e guardar','Concluir'],
    cognitive:['muitas normas simultâneas','nomes de vidrarias','procedimentos de descarte','registro organizado'],
    sensory:['uso de luvas e óculos','movimento no laboratório','possível desconforto com EPI','muitas bancadas e materiais'],
    safety:['usar óculos','usar jaleco','não provar','não cheirar diretamente','não tocar sem autorização','cuidado com vidro','descartar no local indicado','chamar professor'],
    communication:['preciso de ajuda','estou desconfortável','pode repetir?','pode conferir?','preciso de pausa'],
    assessment:['identificar vidrarias por função','simular descarte correto','montar checklist de segurança','preencher registro curto'],
    student:['Ouvir normas','Identificar EPI','Observar vidrarias','Marcar cuidado necessário','Registrar uma regra importante','Guardar material']
  },
  {
    id:'lqm1-densidade-filtracao', phase:4, component:'Laboratório de Química 1', kind:'LAB',
    title:'LQM1 — Densidade, filtração e técnicas básicas',
    summary:'Prática envolvendo técnicas básicas de laboratório, como determinação de densidade e filtração.',
    source:'PPC IFSC: Laboratório de Química 1 — experimentos envolvendo técnicas básicas, incluindo determinação da densidade e filtração.',
    tags:['densidade','filtração','técnicas básicas'],
    type:['Aula prática de laboratório'],
    contents:['Densidade','Filtração','Técnicas básicas','Medidas','Observação controlada'],
    materials:['Balança','Proveta','Béquer','Água','Amostras seguras','Funil','Papel filtro','Mistura sólido-líquido'],
    trail:['Apresentar objetivo','Separar materiais','Usar EPI','Medir massa ou volume','Montar filtração','Observar resultado','Registrar dados','Limpar bancada'],
    cognitive:['seguir procedimento em ordem','realizar medidas','registrar dados em tabela','associar técnica ao objetivo'],
    sensory:['atividade com líquidos','uso de vidrarias','contato visual com resíduos','espera durante filtração'],
    safety:['usar óculos','cuidado com vidro','não provar','não descartar sem orientação','manter bancada organizada'],
    communication:['preciso de ajuda','preciso de mais tempo','pode conferir a montagem?','pode repetir?'],
    assessment:['checklist de montagem','tabela de massa/volume','desenho do sistema de filtração','explicar para que serve a técnica'],
    student:['Separar materiais','Conferir EPI','Medir com orientação','Montar sistema','Observar resultado','Registrar dados','Limpar bancada']
  },
  {
    id:'lqm1-solucoes-titulacao-ph', phase:4, component:'Laboratório de Química 1', kind:'LAB',
    title:'LQM1 — Preparo de soluções, titulação, pH e indicadores',
    summary:'Prática de preparo de soluções a partir de sólidos, líquidos ou solução concentrada, determinação de concentração, pH e indicadores ácido-base.',
    source:'PPC IFSC: Laboratório de Química 1 — preparo de soluções, determinação da concentração de soluções ácidas e básicas por titulação, pH e indicadores ácido-base.',
    tags:['preparo de soluções','titulação','pH','indicadores'],
    type:['Aula prática de laboratório'],
    contents:['Preparo de soluções','Titulação ácido-base','pH','Indicadores ácido-base','Concentração'],
    materials:['Béquer','Balão volumétrico','Pipeta','Bureta quando disponível','Indicador','Solução ácida ou básica','Água destilada','Etiquetas'],
    trail:['Apresentar objetivo','Separar materiais','Usar EPI','Medir quantidade','Preparar solução','Adicionar indicador ou titular','Observar mudança de cor','Registrar dados','Descartar e limpar'],
    cognitive:['muitas etapas sequenciais','medidas precisas','mudança de cor como ponto de atenção','registro de dados','vocabulário técnico'],
    sensory:['atividade com líquidos','uso de vidrarias','possível cheiro','mudança de cor','espera e atenção prolongada'],
    safety:['usar óculos','usar jaleco','não provar','não cheirar diretamente','cuidado com vidro','não misturar sem autorização','descartar no local indicado'],
    communication:['preciso de ajuda','preciso de mais tempo','pode conferir?','estou desconfortável','pode repetir?'],
    assessment:['checklist do procedimento','registro de mudança de cor','tabela de dados','explicar o objetivo da titulação','identificar cuidados de segurança'],
    student:['Separar materiais','Colocar EPI','Medir com orientação','Preparar ou transferir solução','Observar indicador','Registrar mudança de cor','Conferir com professor','Limpar bancada']
  },
  {
    id:'lqm2-coligativas-termo-cinetica', phase:5, component:'Laboratório de Química 2', kind:'LAB',
    title:'LQM2 — Coligativas, termoquímica, cinética e equilíbrio',
    summary:'Prática ou demonstração para propriedades coligativas, termoquímica, cinética química e equilíbrios.',
    source:'PPC IFSC: Laboratório de Química 2 — experimentos envolvendo propriedades coligativas, termoquímica, cinética química e equilíbrios químicos.',
    tags:['coligativas','termoquímica','cinética','equilíbrio'],
    type:['Aula prática de laboratório','Demonstração experimental'],
    contents:['Propriedades coligativas','Termoquímica','Cinética química','Equilíbrio químico'],
    materials:['Termômetro','Cronômetro','Copos ou béqueres','Soluções seguras','Banho de gelo ou água morna se aplicável'],
    trail:['Apresentar objetivo','Separar materiais','Usar EPI','Controlar variável','Medir tempo ou temperatura','Comparar resultados','Registrar dados','Concluir','Limpar bancada'],
    cognitive:['controle de variáveis','registro de medidas','interpretação de gráficos ou tabelas','comparação entre sistemas'],
    sensory:['variação de temperatura','atividade com líquidos','tempo de espera','possível cheiro conforme reagente'],
    safety:['usar óculos','cuidado com calor ou frio','não provar','descartar conforme orientação','chamar professor'],
    communication:['preciso de ajuda','preciso de mais tempo','pode conferir a medida?','posso observar de novo?'],
    assessment:['tabela de medidas','comparação entre condições','gráfico simples','explicação oral curta'],
    student:['Separar materiais','Controlar variável','Medir tempo ou temperatura','Registrar dados','Comparar resultados','Concluir']
  },
  {
    id:'lqm2-eletro-inorganica', phase:5, component:'Laboratório de Química 2', kind:'LAB',
    title:'LQM2 — Eletroquímica e funções inorgânicas',
    summary:'Práticas envolvendo funções inorgânicas, equilíbrio, eletroquímica, reações redox e sistemas do cotidiano.',
    source:'PPC IFSC: Laboratório de Química 2 — funções inorgânicas, equilíbrios químicos e eletroquímica.',
    tags:['eletroquímica','redox','funções inorgânicas'],
    type:['Demonstração experimental','Aula prática orientada'],
    contents:['Funções inorgânicas','Eletroquímica','Oxirredução','Pilhas','Equilíbrio'],
    materials:['Metais','Soluções seguras','Fios ou multímetro se disponível','Copos ou béqueres','Imagens ou simulação'],
    trail:['Apresentar objetivo','Reconhecer materiais','Usar EPI','Montar sistema com orientação','Observar evidências','Registrar resultado','Relacionar com redox','Limpar bancada'],
    cognitive:['identificar partes do sistema','relacionar reação e energia','símbolos e cargas','sequência de montagem'],
    sensory:['uso de fios/equipamentos','atividade com líquidos','metais na bancada','muitos elementos visuais'],
    safety:['usar óculos','não tocar equipamento sem orientação','não provar soluções','cuidado com fios e vidrarias','descartar no local indicado'],
    communication:['preciso de ajuda','pode repetir?','pode conferir a montagem?','estou desconfortável'],
    assessment:['identificar partes de uma pilha','marcar evidências de reação','relacionar corrosão com oxidação','desenhar esquema'],
    student:['Observar materiais','Montar com orientação','Observar evidências','Registrar resultado','Relacionar com oxidação/redução','Conferir']
  },
  {
    id:'lqm3-org-seguranca', phase:6, component:'Laboratório de Química 3', kind:'LAB',
    title:'LQM3 — Segurança em laboratório de Química Orgânica',
    summary:'Aula de segurança, descarte, armazenamento, registro e cuidados específicos em práticas de Química Orgânica.',
    source:'PPC IFSC: Laboratório de Química 3 — segurança, descarte, armazenamento, registros, materiais de laboratório e compostos orgânicos.',
    tags:['orgânica','segurança','descarte','armazenamento'],
    type:['Aula prática demonstrativa','Preparação de laboratório'],
    contents:['Segurança em química orgânica','Descarte e armazenamento','Registros','Materiais de laboratório','Propriedades de compostos orgânicos'],
    materials:['EPIs','Frascos simulados','Etiquetas','Fichas de segurança simplificadas','Vidrarias básicas'],
    trail:['Apresentar objetivo','Revisar EPIs','Observar rótulos e etiquetas','Identificar risco e descarte','Registrar cuidado principal','Simular organização da bancada','Concluir'],
    cognitive:['interpretação de rótulos','muitas normas de segurança','associação risco-descarte','vocabulário técnico'],
    sensory:['possível menção a odores','uso de luvas e óculos','muitas informações visuais'],
    safety:['usar óculos','usar luvas quando indicado','não cheirar diretamente','não tocar sem autorização','descartar no local indicado','chamar professor'],
    communication:['estou desconfortável','preciso de ajuda','pode repetir?','pode conferir?'],
    assessment:['identificar risco em rótulo','associar resíduo ao descarte','preencher checklist de segurança','explicar uma regra'],
    student:['Colocar EPI','Observar rótulo','Identificar cuidado','Marcar descarte correto','Registrar regra de segurança','Conferir com professor']
  },
  {
    id:'lqm3-purificacao', phase:6, component:'Laboratório de Química 3', kind:'LAB',
    title:'LQM3 — Recristalização, destilação, extração e cromatografia',
    summary:'Práticas ou demonstrações de síntese e técnicas de purificação de substâncias orgânicas sólidas e líquidas.',
    source:'PPC IFSC: Laboratório de Química 3 — síntese e técnicas de purificação: recristalização, destilação, extração e cromatografia.',
    tags:['purificação','destilação','extração','cromatografia'],
    type:['Demonstração experimental','Aula prática de laboratório'],
    contents:['Recristalização','Destilação','Extração','Cromatografia','Purificação de substâncias orgânicas'],
    materials:['Vidrarias específicas conforme técnica','Papel ou placa cromatográfica','Solventes adequados conforme protocolo','Suporte e garras','EPIs'],
    trail:['Apresentar objetivo','Revisar segurança','Observar montagem','Executar ou acompanhar técnica','Identificar separação/purificação','Registrar evidências','Descartar e limpar','Concluir'],
    cognitive:['sequência técnica longa','muitas vidrarias','interpretação de resultado visual','controle de tempo e etapas'],
    sensory:['possível cheiro de solvente','uso de vidrarias','possível aquecimento','tempo de espera','movimento no laboratório'],
    safety:['usar óculos','usar luvas quando indicado','não cheirar diretamente','cuidado com calor','cuidado com vidro','descarte correto'],
    communication:['preciso de pausa','estou desconfortável','preciso de ajuda','pode conferir a montagem?'],
    assessment:['desenhar montagem','marcar etapas da técnica','registrar evidência de separação','explicar objetivo da purificação'],
    student:['Revisar segurança','Observar montagem','Executar etapa com orientação','Registrar evidência','Conferir resultado','Descartar ou limpar com orientação']
  },
  {
    id:'lqm3-espectroscopia', phase:6, component:'Laboratório de Química 3', kind:'LAB',
    title:'LQM3 — Espectroscopia UV-Visível e infravermelho',
    summary:'Aula demonstrativa ou digital sobre leitura de espectros UV-Visível e infravermelho e relação com compostos orgânicos.',
    source:'PPC IFSC: Laboratório de Química 3 — espectroscopia no UV-Visível e infravermelho.',
    tags:['espectroscopia','UV-Vis','infravermelho','orgânica'],
    type:['Demonstração digital','Aula com dados'],
    contents:['Espectroscopia UV-Visível','Infravermelho','Interpretação de espectros','Compostos orgânicos'],
    materials:['Espectros impressos','Projetor','Software ou imagem de espectro','Tabela de bandas simplificada'],
    trail:['Apresentar objetivo','Observar espectro','Identificar eixos','Localizar pico ou banda','Relacionar com informação química','Registrar interpretação','Concluir'],
    cognitive:['interpretação gráfica','muitos sinais visuais','associação pico-conceito','linguagem técnica'],
    sensory:['uso de projetor','muitas informações visuais','atividade de leitura gráfica'],
    safety:['sem manipulação química nesta proposta','pausas visuais se necessário'],
    communication:['não entendi','quero ver um exemplo','preciso de mais tempo','pode conferir?'],
    assessment:['marcar pico no gráfico','responder com tabela guiada','explicar um sinal observado','comparar dois espectros'],
    student:['Observar espectro','Identificar eixo','Marcar pico ou banda','Relacionar com tabela','Registrar interpretação']
  }
];

const OPTIONS = {
  types:['Aula teórica visual','Demonstração experimental','Aula prática simples','Aula prática de laboratório','Atividade investigativa','Resolução de problema','Atividade com modelos','Atividade com rótulos'],
  contents:['Matéria','Densidade','Misturas','Separação de misturas','Estados físicos','Modelos atômicos','Tabela periódica','Ligações químicas','Polaridade','Transformações químicas','Evidências de reação','Balanceamento','Estequiometria','Ácidos e bases','pH','Indicadores','Soluções','Diluição','Termoquímica','Cinética química','Equilíbrio químico','Eletroquímica','Corrosão','Funções orgânicas','Biomoléculas','Segurança de laboratório','Vidrarias','Descarte de resíduos'],
  actions:['Ouvir explicação','Observar materiais','Manipular com orientação','Medir','Misturar','Aquecer','Comparar resultados','Registrar dados','Responder perguntas','Limpar bancada','Descartar resíduos'],
  materials:['Água','Óleo','Sal','Vinagre','Bicarbonato','Indicador natural','Vidrarias','Balança','Termômetro','Cronômetro','Rótulos','Modelos moleculares','Tabela periódica','Projetor','EPIs','Frascos simulados']
};

const BARRIER_BANK = {
  cognitivas:['muitas etapas sequenciais','vocabulário técnico novo','abstração submicroscópica','cálculos e manipulação ao mesmo tempo','interpretação de símbolos químicos','registro de dados em tabela','diferenciar conceitos próximos','necessidade de comparar antes e depois','perder a etapa atual da atividade'],
  sensoriais:['atividade com líquidos','possível cheiro','uso de luvas','uso de óculos','uso de jaleco','barulho ou movimento no laboratório','luz de projetor ou tela','possível calor ou frio','tempo de espera','muitas informações visuais'],
  comunicacionais:['dificuldade para pedir ajuda','dificuldade para pedir repetição','dificuldade para dizer desconforto','necessidade de resposta não oral','necessidade de conferir etapa antes de continuar','trabalho em grupo pode gerar sobrecarga'],
  seguranca:['uso de vidrarias','possível contato com reagentes','risco de misturar sem autorização','descarte inadequado','risco de provar ou cheirar diretamente','risco com fonte de calor','bancada desorganizada']
};

const CARD_BANK = {
  rotina:['Apresentar objetivo','Ouvir orientação','Ler roteiro','Observar materiais','Usar EPI','Separar materiais','Medir','Manipular com orientação','Misturar','Aquecer','Aguardar','Comparar resultados','Registrar','Responder perguntas','Descartar','Limpar bancada','Guardar materiais','Concluir'],
  seguranca:['Usar óculos','Usar luvas','Usar jaleco','Não provar','Não cheirar diretamente','Não tocar sem autorização','Não misturar sem autorização','Cuidado com vidro','Cuidado com calor','Descartar no local indicado','Chamar o professor','Manter bancada organizada'],
  sensorial:['Pode ter cheiro','Pode ter barulho','Pode ter luz forte','Pode ter calor','Atividade com líquidos','Uso de luvas','Uso de óculos','Pode haver espera','Pode haver trabalho em grupo','Pausa combinada','Semáforo sensorial'],
  comunicacao:['Preciso de ajuda','Pode repetir?','Preciso de mais tempo','Preciso de pausa','Estou desconfortável','Não entendi','Pode conferir?','Quero observar de novo','Prefiro registrar por escrito','Posso tentar de novo']
};

let state = {
  step:1,
  mode:'model',
  selectedModelId:'lqm1-solucoes-titulacao-ph',
  guided:{types:[], contents:[], actions:[], materials:[], title:''},
  adaptText:'',
  supportLevel:'universal',
  barriers:{cognitivas:[], sensoriais:[], comunicacionais:[], seguranca:[]},
  plan:null,
  outputTab:'panel',
  nowIndex:0
};

const $ = sel => document.querySelector(sel);
const $$ = sel => [...document.querySelectorAll(sel)];
const unique = arr => [...new Set((arr||[]).filter(Boolean))];
const lines = text => (text||'').split('\n').map(s=>s.trim()).filter(Boolean);
const toLines = arr => unique(arr).join('\n');
const currentModel = () => MODELS.find(m=>m.id===state.selectedModelId) || MODELS[0];

function saveLocal(){ localStorage.setItem('aulaAcessivelV4', JSON.stringify(state)); }
function loadLocal(){
  try{
    const saved = JSON.parse(localStorage.getItem('aulaAcessivelV4')||'null');
    if(saved && saved.step){ state = {...state, ...saved}; }
  }catch(e){}
}

function toast(msg){ const el=$('#toast'); el.textContent=msg; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'),2200); }

function init(){
  loadLocal();
  populateComponentFilter();
  renderOptions();
  renderModelGrid();
  bindEvents();
  if(!state.plan) generatePlan(false);
  applyStateToUI();
  goStep(state.step || 1, false);
  updateSummary();
}

function populateComponentFilter(){
  const comps = unique(MODELS.map(m=>m.component));
  const sel = $('#filterComponent');
  comps.forEach(c=>{ const opt=document.createElement('option'); opt.value=c; opt.textContent=c; sel.appendChild(opt); });
}

function renderOptions(){
  renderChipBox('#guidedTypes', OPTIONS.types, 'types');
  renderChipBox('#guidedContents', OPTIONS.contents, 'contents');
  renderChipBox('#guidedActions', OPTIONS.actions, 'actions');
  renderChipBox('#guidedMaterials', OPTIONS.materials, 'materials');
}

function renderChipBox(selector, items, key){
  const box=$(selector); box.innerHTML='';
  items.forEach(item=>{
    const btn=document.createElement('button');
    btn.type='button'; btn.className='chip'; btn.textContent=item;
    btn.dataset.guidedKey=key; btn.dataset.value=item;
    if((state.guided[key]||[]).includes(item)) btn.classList.add('selected');
    box.appendChild(btn);
  });
}

function renderModelGrid(){
  const phase=$('#filterPhase')?.value || 'all';
  const comp=$('#filterComponent')?.value || 'all';
  const q=($('#searchModel')?.value || '').toLowerCase().trim();
  let models = MODELS.filter(m => (phase==='all'||String(m.phase)===phase) && (comp==='all'||m.component===comp));
  if(q) models = models.filter(m => [m.title,m.summary,m.component,...m.tags,...m.contents].join(' ').toLowerCase().includes(q));
  const grid=$('#modelGrid'); grid.innerHTML='';
  models.forEach(m=>{
    const card=document.createElement('button'); card.type='button'; card.className='model-card'; card.dataset.model=m.id;
    if(m.id===state.selectedModelId) card.classList.add('selected');
    card.innerHTML = `<div class="badges"><span class="badge ifsc">IFSC</span><span class="badge ${m.kind==='LAB'?'lab':'qmc'}">${m.component}</span><span class="badge">Fase ${m.phase}</span></div><h4>${m.title}</h4><p>${m.summary}</p><ul>${m.contents.slice(0,4).map(c=>`<li>${c}</li>`).join('')}</ul>`;
    grid.appendChild(card);
  });
  if(!models.length) grid.innerHTML='<p class="muted">Nenhum modelo encontrado com estes filtros.</p>';
}

function bindEvents(){
  $$('.step').forEach(btn=>btn.addEventListener('click',()=>goStep(Number(btn.dataset.step))));
  $('#btnPrev').addEventListener('click',()=>goStep(Math.max(1,state.step-1)));
  $('#btnNext').addEventListener('click',()=>{
    if(state.step===1){ prepareFromStep1(); suggestBarriers(); }
    if(state.step===2){ generatePlan(false); fillEditorsFromPlan(); }
    if(state.step===3){ readEditorsToPlan(); }
    goStep(Math.min(4,state.step+1));
  });
  $$('.mode-card').forEach(btn=>btn.addEventListener('click',()=>setMode(btn.dataset.mode)));
  ['#filterPhase','#filterComponent','#searchModel'].forEach(sel=>$(sel).addEventListener('input',renderModelGrid));
  $('#modelGrid').addEventListener('click',e=>{
    const card=e.target.closest('[data-model]'); if(!card) return;
    state.selectedModelId=card.dataset.model; state.mode='model';
    generatePlan(false); suggestBarriers(); renderModelGrid(); updateSummary(); saveLocal();
  });
  document.addEventListener('click',e=>{
    const chip=e.target.closest('.chip'); if(!chip) return;
    if(chip.dataset.guidedKey){
      const key=chip.dataset.guidedKey, val=chip.dataset.value;
      const arr=state.guided[key] || [];
      state.guided[key] = arr.includes(val) ? arr.filter(x=>x!==val) : [...arr,val];
      chip.classList.toggle('selected'); saveLocal(); updateSummary();
    }
    if(chip.dataset.barrierGroup){
      const g=chip.dataset.barrierGroup, val=chip.dataset.value;
      const arr=state.barriers[g] || [];
      state.barriers[g] = arr.includes(val) ? arr.filter(x=>x!==val) : [...arr,val];
      chip.classList.toggle('selected'); saveLocal(); updateSummary();
    }
  });
  $('#guidedTitle').addEventListener('input',e=>{state.guided.title=e.target.value; updateSummary(); saveLocal();});
  $('#adaptText').addEventListener('input',e=>{state.adaptText=e.target.value; saveLocal();});
  $('#btnAnalyzeText').addEventListener('click',()=>{ analyzeAdaptText(); suggestBarriers(); generatePlan(false); updateSummary(); toast('Roteiro analisado. Revise as sugestões.'); });
  $('#supportLevel').addEventListener('change',e=>{state.supportLevel=e.target.value; generatePlan(false); fillEditorsFromPlan(); updateSummary(); saveLocal();});
  $('#btnAutoBarriers').addEventListener('click',()=>{suggestBarriers(); renderBarriers(); toast('Sugestões recarregadas.');});
  $('#btnGenerate').addEventListener('click',()=>{generatePlan(true); fillEditorsFromPlan(); updateSummary(); toast('Apoios gerados.');});
  ['#planTitle','#planGoal','#editTrail','#editSafety','#editSensory','#editCommunication','#editStudent','#editAssessment'].forEach(sel=>$(sel).addEventListener('input',()=>{readEditorsToPlan(); renderOutput(); updateSummary(); saveLocal();}));
  $$('.tab').forEach(t=>t.addEventListener('click',()=>{state.outputTab=t.dataset.tab; $$('.tab').forEach(x=>x.classList.toggle('active',x===t)); renderOutput(); saveLocal();}));
  $('#btnProject').addEventListener('click',openProjector);
  $('#btnPrint').addEventListener('click',()=>window.print());
  $('#btnCopy').addEventListener('click',copyCurrentOutput);
  $('#btnExportTxt').addEventListener('click',exportTxt);
  $('#btnSaveJson').addEventListener('click',saveJson);
  $('#loadJson').addEventListener('change',loadJson);
  $('#btnReset').addEventListener('click',resetPlan);
  $('#btnHelp').addEventListener('click',()=>$('#helpDialog').showModal());
  $('#btnCloseHelp').addEventListener('click',()=>$('#helpDialog').close());
  $('#btnCloseProject').addEventListener('click',()=>$('#projectDialog').close());
  $('#btnNextStage').addEventListener('click',()=>{ if(state.plan){ state.nowIndex=Math.min(state.plan.trail.length-1,state.nowIndex+1); renderProjector(); renderOutput(); saveLocal(); }});
  $('#btnPrevStage').addEventListener('click',()=>{ if(state.plan){ state.nowIndex=Math.max(0,state.nowIndex-1); renderProjector(); renderOutput(); saveLocal(); }});
}

function setMode(mode){
  state.mode=mode;
  $$('.mode-card').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));
  $$('.mode-panel').forEach(p=>p.classList.remove('show'));
  $('#mode-'+mode).classList.add('show');
  updateSummary(); saveLocal();
}

function applyStateToUI(){
  setMode(state.mode || 'model');
  $('#guidedTitle').value = state.guided.title || '';
  $('#adaptText').value = state.adaptText || '';
  $('#supportLevel').value = state.supportLevel || 'universal';
  renderOptions(); renderBarriers(); fillEditorsFromPlan(); renderOutput(); renderModelGrid();
}

function goStep(n, persist=true){
  state.step=n;
  $$('.stage').forEach((el,i)=>el.classList.toggle('visible',i===n-1));
  $$('.step').forEach(btn=>btn.classList.toggle('active',Number(btn.dataset.step)===n));
  $('#btnPrev').style.visibility = n===1?'hidden':'visible';
  $('#btnNext').textContent = n===4?'Revisar apoios':'Avançar';
  if(n===4) { readEditorsToPlan(); renderOutput(); }
  if(persist) saveLocal();
}

function prepareFromStep1(){
  if(state.mode==='guided'){
    state.guided.title = $('#guidedTitle').value || 'Aula de Química guiada';
  }
  if(state.mode==='adapt') analyzeAdaptText(false);
}

function analyzeAdaptText(show=true){
  const text=($('#adaptText').value||'').toLowerCase(); state.adaptText=$('#adaptText').value;
  const add = (key, vals)=> { state.guided[key] = unique([...(state.guided[key]||[]), ...vals]); };
  state.mode='adapt';
  state.guided.title = inferTitleFromText(state.adaptText) || 'Roteiro adaptado de Química';
  if(/ph|indicador|ácido|acido|base|titula/.test(text)) add('contents',['Ácidos e bases','pH','Indicadores','Soluções']);
  if(/solução|solucao|dilui|concentra|nacl|sal/.test(text)) add('contents',['Soluções','Diluição']);
  if(/densidade|massa|volume/.test(text)) add('contents',['Densidade']);
  if(/filtra|funil|papel filtro/.test(text)) add('contents',['Separação de misturas']);
  if(/vinagre|bicarbonato|bolha|gás|gas|espuma|reação|reacao/.test(text)) add('contents',['Transformações químicas','Evidências de reação']);
  if(/aquec|temperatura|calor|frio|gelo|cronômetro|cronometro|velocidade/.test(text)) add('contents',['Termoquímica','Cinética química']);
  if(/pilha|eletr|corros|redox|oxida|redu/.test(text)) add('contents',['Eletroquímica','Corrosão']);
  if(/orgân|organ|destila|extraç|extrac|cromat|recristal|solvente/.test(text)) add('contents',['Funções orgânicas']);
  if(/béquer|bequer|pipeta|bureta|proveta|balão|balao|vidraria/.test(text)) add('materials',['Vidrarias']);
  if(/água|agua/.test(text)) add('materials',['Água']);
  if(/óleo|oleo/.test(text)) add('materials',['Óleo']);
  if(/vinagre/.test(text)) add('materials',['Vinagre']);
  if(/bicarbonato/.test(text)) add('materials',['Bicarbonato']);
  if(/indicador/.test(text)) add('materials',['Indicador natural']);
  if(/balança|balanca/.test(text)) add('materials',['Balança']);
  if(/termômetro|termometro/.test(text)) add('materials',['Termômetro']);
  add('types', [/laboratório|laboratorio|prática|pratica|experimento/.test(text)?'Aula prática de laboratório':'Aula teórica visual']);
  add('actions',['Ouvir explicação','Observar materiais','Registrar dados','Concluir']);
  if(/mistur|adicion|transfer|medir|pesar|dissolver/.test(text)) add('actions',['Medir','Misturar','Manipular com orientação']);
  renderOptions();
  if(show) toast('Roteiro analisado por palavras-chave.');
}

function inferTitleFromText(text){
  const first=(text||'').split('\n').map(s=>s.trim()).find(Boolean)||'';
  if(/^aula|^objetivo|^tema/i.test(first)) return first.replace(/^aula\s*:?\s*/i,'').replace(/^tema\s*:?\s*/i,'').slice(0,90);
  return '';
}

function suggestBarriers(){
  const base = getBaseData();
  state.barriers = {
    cognitivas: unique([...(base.cognitive||[])]),
    sensoriais: unique([...(base.sensory||[])]),
    comunicacionais: unique([...(base.communication||[]).map(x=>'necessidade de usar opção: '+x)]),
    seguranca: unique([...(base.safety||[])]),
  };
  if(state.supportLevel==='moderado'){
    state.barriers.cognitivas = unique([...state.barriers.cognitivas,'necessidade de dividir a tarefa em etapas curtas']);
    state.barriers.comunicacionais = unique([...state.barriers.comunicacionais,'necessidade de resposta alternativa à fala ou escrita longa']);
  }
  if(state.supportLevel==='intenso'){
    state.barriers.cognitivas = unique([...state.barriers.cognitivas,'necessidade de previsibilidade antes de cada transição','necessidade de reduzir opções simultâneas']);
    state.barriers.sensoriais = unique([...state.barriers.sensoriais,'necessidade de pausa combinada']);
    state.barriers.comunicacionais = unique([...state.barriers.comunicacionais,'necessidade de comunicação por apontar ou entregar cartão']);
  }
  renderBarriers(); saveLocal();
}

function renderBarriers(){
  const grid=$('#barrierGrid'); if(!grid) return; grid.innerHTML='';
  const labels={cognitivas:'Cognitivas / organização', sensoriais:'Sensoriais', comunicacionais:'Comunicação / participação', seguranca:'Segurança'};
  Object.keys(BARRIER_BANK).forEach(group=>{
    const all=unique([...(state.barriers[group]||[]), ...BARRIER_BANK[group]]);
    const div=document.createElement('div'); div.className='barrier-group '+group;
    div.innerHTML=`<h4>${labels[group]}</h4><div class="chip-box"></div>`;
    const box=div.querySelector('.chip-box');
    all.forEach(item=>{
      const btn=document.createElement('button'); btn.type='button'; btn.className='chip small'; btn.dataset.barrierGroup=group; btn.dataset.value=item; btn.textContent=item;
      if((state.barriers[group]||[]).includes(item)) btn.classList.add('selected');
      box.appendChild(btn);
    });
    grid.appendChild(div);
  });
}

function getBaseData(){
  if(state.mode==='model') return currentModel();
  const title = state.guided.title || (state.mode==='adapt' ? 'Roteiro adaptado de Química' : 'Aula de Química guiada');
  const contents = unique(state.guided.contents);
  const materials = unique(state.guided.materials);
  const actions = unique(state.guided.actions.length ? state.guided.actions : ['Ouvir explicação','Observar materiais','Registrar dados','Concluir']);
  let safety = ['não provar','não misturar sem autorização','manter bancada organizada'];
  if(materials.includes('Vidrarias')) safety.push('cuidado com vidro');
  if(materials.includes('EPIs')) safety.push('usar óculos','usar luvas quando indicado');
  if(contents.some(c=>/pH|Ácidos|Indicadores|Soluções/.test(c))) safety.push('descartar no local indicado','não cheirar diretamente');
  if(contents.some(c=>/Termoquímica|Cinética/.test(c))) safety.push('cuidado com calor ou frio');
  let sensory = [];
  if(materials.includes('Água') || materials.includes('Óleo') || materials.includes('Vidrarias')) sensory.push('atividade com líquidos');
  if(materials.includes('Vinagre')) sensory.push('possível cheiro');
  if(materials.includes('Indicador natural')) sensory.push('mudança de cor');
  if(materials.includes('EPIs')) sensory.push('uso de luvas e óculos');
  if(contents.some(c=>/Termoquímica|Cinética/.test(c))) sensory.push('variação de temperatura ou tempo de espera');
  return {
    title, component: state.mode==='adapt'?'Roteiro adaptado':'Aula guiada', phase:'—', kind:'CUSTOM',
    summary:'Plano criado pelo professor com apoio guiado.', source:'Criado no modo guiado/adaptado pelo usuário.',
    contents, materials, type: unique(state.guided.types), trail: actions,
    cognitive:['muitas etapas sequenciais','vocabulário técnico novo','necessidade de registrar observações'],
    sensory: unique(sensory.length?sensory:['possível sobrecarga visual ou de instruções']),
    safety: unique(safety), communication:['preciso de ajuda','pode repetir?','preciso de mais tempo','pode conferir?'],
    assessment:['checklist de etapas','registro por frase curta ou desenho','explicação oral breve','conferência por pares'],
    student: actions
  };
}

function generatePlan(forceToast=false){
  const base=getBaseData();
  const title = base.title || 'Aula de Química';
  const level = state.supportLevel || 'universal';
  let trail = unique(base.trail || ['Apresentar objetivo','Observar','Registrar','Concluir']);
  if(level==='moderado' && !trail.includes('Conferir etapa atual')) trail.splice(Math.min(2,trail.length),0,'Conferir etapa atual');
  if(level==='intenso'){
    trail = unique(['Antecipar rotina da aula',...trail]);
    if(!trail.includes('Pausa combinada')) trail.splice(Math.min(3,trail.length),0,'Pausa combinada');
  }
  const safety = unique(base.safety || []);
  const sensory = unique(base.sensory || []);
  const communication = unique(base.communication || CARD_BANK.comunicacao.slice(0,5));
  const student = unique(base.student || trail.map(x=>x));
  const assessment = unique(base.assessment || ['checklist de etapas','registro curto','explicação oral breve']);
  const cardRec = recommendCards({trail,safety,sensory,communication});
  state.plan = {
    title, goal: makeGoal(base), component: base.component, phase: base.phase, kind:base.kind,
    summary: base.summary, source: base.source, type:base.type||[], contents:base.contents||[], materials:base.materials||[],
    barriers: JSON.parse(JSON.stringify(state.barriers)), trail, safety, sensory, communication, student, assessment, cards:cardRec,
    teacher: makeTeacherGuide(level), level
  };
  state.nowIndex = Math.min(state.nowIndex, state.plan.trail.length-1);
  fillEditorsFromPlan(); renderOutput(); updateSummary(); saveLocal();
  if(forceToast) toast('Plano acessível gerado.');
}

function makeGoal(base){
  const contents=(base.contents||[]).slice(0,3).join(', ');
  if(contents) return `Compreender ${contents.toLowerCase()} por meio de uma sequência previsível, segura e com apoio visual.`;
  return 'Participar da aula de Química com apoio visual, segurança e formas alternativas de comunicação.';
}
function makeTeacherGuide(level){
  const extra = level==='intenso' ? 'Reduzir opções simultâneas, avisar cada transição e manter pausa combinada disponível.' : level==='moderado' ? 'Reforçar a etapa atual e conferir compreensão antes das mudanças de atividade.' : 'Usar os apoios com a turma toda, sem destacar um aluno específico.';
  return {
    before:['Gerar o plano no AulaAcessível','Separar apenas as placas/cards recomendadas','Montar o painel da aula antes da turma começar','Deixar cards de comunicação em local acessível'],
    during:['Apresentar a trilha visual da aula','Mover o marcador “AGORA” conforme a aula avança','Retomar segurança antes da manipulação','Permitir resposta por fala, marcação, desenho ou apontamento', extra],
    after:['Usar a etapa de limpar/guardar/concluir','Recolher placas/cards','Registrar quais apoios funcionaram ou faltaram','Salvar o plano ajustado para próxima aula']
  };
}
function recommendCards(plan){
  const rotina = CARD_BANK.rotina.filter(c => plan.trail.some(t => similar(t,c))).slice(0,14);
  const seguranca = CARD_BANK.seguranca.filter(c => plan.safety.some(t => similar(t,c))).slice(0,10);
  let sensorial = CARD_BANK.sensorial.filter(c => plan.sensory.some(t => similar(t,c))).slice(0,8);
  if(plan.sensory.length && !sensorial.includes('Semáforo sensorial')) sensorial.push('Semáforo sensorial');
  const comunicacao = unique(['Preciso de ajuda','Pode repetir?','Preciso de mais tempo',...CARD_BANK.comunicacao.filter(c => plan.communication.some(t => similar(t,c)))]).slice(0,9);
  return {rotina:unique([...rotina, ...plan.trail.slice(0,8)]), seguranca:unique([...seguranca]), sensorial:unique([...sensorial]), comunicacao:unique([...comunicacao])};
}
function similar(a,b){
  const x=a.toLowerCase(), y=b.toLowerCase();
  return x.includes(y.toLowerCase()) || y.includes(x) || x.split(' ').some(w=>w.length>4 && y.includes(w));
}

function fillEditorsFromPlan(){
  if(!state.plan) return;
  $('#planTitle').value=state.plan.title||'';
  $('#planGoal').value=state.plan.goal||'';
  $('#editTrail').value=toLines(state.plan.trail);
  $('#editSafety').value=toLines(state.plan.safety);
  $('#editSensory').value=toLines(state.plan.sensory);
  $('#editCommunication').value=toLines(state.plan.communication);
  $('#editStudent').value=toLines(state.plan.student);
  $('#editAssessment').value=toLines(state.plan.assessment);
}
function readEditorsToPlan(){
  if(!state.plan) generatePlan(false);
  state.plan.title=$('#planTitle').value||'Aula de Química';
  state.plan.goal=$('#planGoal').value||'';
  state.plan.trail=lines($('#editTrail').value);
  state.plan.safety=lines($('#editSafety').value);
  state.plan.sensory=lines($('#editSensory').value);
  state.plan.communication=lines($('#editCommunication').value);
  state.plan.student=lines($('#editStudent').value);
  state.plan.assessment=lines($('#editAssessment').value);
  state.plan.cards=recommendCards(state.plan);
  state.nowIndex=Math.min(state.nowIndex, Math.max(0,state.plan.trail.length-1));
}

function renderOutput(){
  if(!state.plan) generatePlan(false);
  const tab=state.outputTab || 'panel';
  $$('.tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===tab));
  const area=$('#outputArea');
  if(!area) return;
  const p=state.plan;
  const map={panel:renderPanel, student:renderStudent, teacher:renderTeacher, cards:renderCards, checklist:renderChecklist};
  area.innerHTML = map[tab](p);
}

function timelineHtml(trail){
  return `<div class="timeline">${trail.map((s,i)=>`<div class="timeline-step ${i<state.nowIndex?'done':''} ${i===state.nowIndex?'current':''}">${i===state.nowIndex?'<span class="marker">AGORA</span>':''}<span class="label">Etapa ${i+1}</span>${escapeHtml(s)}</div>`).join('')}</div>`;
}
function listHtml(items){ return `<ul>${(items||[]).map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul>`; }
function checklistHtml(items){ return `<ul class="check-list">${(items||[]).map(x=>`<li>☐ ${escapeHtml(x)}</li>`).join('')}</ul>`; }
function renderPanel(p){
  return `<h2>${escapeHtml(p.title)}</h2><p><b>Objetivo:</b> ${escapeHtml(p.goal)}</p><h3>Trilha visual da aula</h3>${timelineHtml(p.trail)}<div class="output-grid"><div class="output-box"><h4>Segurança</h4>${listHtml(p.safety)}</div><div class="output-box"><h4>Avisos sensoriais</h4>${listHtml(p.sensory)}</div><div class="output-box"><h4>Comunicação disponível</h4>${listHtml(p.communication)}</div><div class="output-box"><h4>Conteúdos mobilizados</h4>${listHtml(p.contents)}</div></div><p class="source-note"><b>Base do modelo:</b> ${escapeHtml(p.source||'Plano criado pelo usuário.')}</p>`;
}
function renderStudent(p){
  return `<h2>Roteiro acessível do aluno</h2><p><b>Aula:</b> ${escapeHtml(p.title)}</p><p><b>Hoje eu vou:</b></p>${checklistHtml(p.student)}<h3>Durante a atividade, posso pedir:</h3>${listHtml(p.communication)}<h3>Registro</h3><div class="output-grid"><div class="output-box"><h4>O que observei?</h4><p>☐ mudança de cor &nbsp; ☐ bolhas &nbsp; ☐ sólido &nbsp; ☐ duas fases &nbsp; ☐ temperatura &nbsp; ☐ outro</p></div><div class="output-box"><h4>Minha conclusão</h4><p>Eu observei: ____________________________</p><p>Isso pode estar relacionado a: ____________________________</p></div></div>`;
}
function renderTeacher(p){
  return `<h2>Orientação do professor</h2><p><b>Aula:</b> ${escapeHtml(p.title)}</p><div class="output-grid"><div class="output-box"><h4>Antes da aula</h4>${listHtml(p.teacher.before)}</div><div class="output-box"><h4>Durante a aula</h4>${listHtml(p.teacher.during)}</div><div class="output-box"><h4>Depois da aula</h4>${listHtml(p.teacher.after)}</div><div class="output-box"><h4>Barreiras mapeadas</h4>${renderBarrierSummary(p.barriers)}</div></div><h3>Perguntas de mediação</h3>${listHtml(makeQuestions(p))}`;
}
function renderBarrierSummary(b){
  if(!b) return '<p>Sem barreiras registradas.</p>';
  return Object.entries(b).map(([k,v])=>`<p><span class="category-title">${labelBarrier(k)}</span></p>${listHtml(v.slice(0,8))}`).join('');
}
function labelBarrier(k){return ({cognitivas:'Cognitivas',sensoriais:'Sensoriais',comunicacionais:'Comunicação',seguranca:'Segurança'}[k]||k)}
function makeQuestions(p){
  const qs=['O que você observou primeiro?','Qual etapa estamos fazendo agora?','Que cuidado de segurança precisamos lembrar?'];
  if(p.contents.some(c=>/mistura|solução|densidade/i.test(c))) qs.push('A mistura ficou uniforme ou apresentou partes diferentes?');
  if(p.contents.some(c=>/transform|reação|evidência/i.test(c))) qs.push('Que evidência pode indicar transformação química?');
  if(p.contents.some(c=>/pH|ácido|base|indicador/i.test(c))) qs.push('O que a mudança de cor pode indicar?');
  if(p.contents.some(c=>/cinética|termo/i.test(c))) qs.push('O que mudou no tempo, na velocidade ou na temperatura?');
  return unique(qs);
}
function renderCards(p){
  const c=p.cards;
  return `<h2>Placas/cards para separar</h2><p>Separe apenas estes itens da caixa. Eles formam o Painel AulaAcessível da aula.</p><div class="output-grid"><div class="output-box"><h4>Rotina da aula</h4>${listHtml(c.rotina)}</div><div class="output-box"><h4>Segurança</h4>${listHtml(c.seguranca)}</div><div class="output-box"><h4>Sensorial</h4>${listHtml(c.sensorial)}</div><div class="output-box"><h4>Comunicação</h4>${listHtml(c.comunicacao)}</div></div><h3>Montagem sugerida do painel</h3><div class="print-card"><b>AULA DE HOJE</b><br>${escapeHtml(p.title)}</div><div class="print-card"><b>TRILHA DA AULA</b><br>${p.trail.map((x,i)=>`[${i+1}. ${escapeHtml(x)}]`).join(' → ')}</div><div class="print-card"><b>SEGURANÇA</b><br>${p.safety.map(x=>`[${escapeHtml(x)}]`).join(' ')}</div><div class="print-card"><b>SENSORIAL</b><br>${p.sensory.map(x=>`[${escapeHtml(x)}]`).join(' ')}</div><div class="print-card"><b>COMUNICAÇÃO</b><br>${p.communication.map(x=>`[${escapeHtml(x)}]`).join(' ')}</div><p class="source-note">Use um marcador móvel “AGORA” na trilha visual para indicar a etapa atual.</p>`;
}
function renderChecklist(p){
  return `<h2>Checklist rápido</h2><div class="output-grid"><div class="output-box"><h4>Antes da aula</h4>${checklistHtml(['Plano gerado no app','Placas/cards separados','Materiais conferidos','Painel montado ou arquivo projetável aberto','Pausa/apoio combinados'])}</div><div class="output-box"><h4>Durante a aula</h4>${checklistHtml(['Apresentei a trilha','Mostrei cuidados de segurança','Avisei estímulos sensoriais','Movi o marcador AGORA','Permiti comunicação alternativa','Retomei a trilha quando necessário'])}</div><div class="output-box"><h4>Depois da aula</h4>${checklistHtml(['Limpeza/descarte orientados','Registro concluído','Cards recolhidos','Apoios avaliados','Plano salvo ou ajustado'])}</div><div class="output-box"><h4>Avaliação alternativa</h4>${listHtml(p.assessment)}</div></div>`;
}

function updateSummary(){
  const base=getBaseData();
  $('#summaryTitle').textContent = state.plan?.title || base.title || 'Nenhuma aula selecionada';
  const comp=state.mode==='model'?`${base.component} · Fase ${base.phase}`:state.mode==='guided'?'Criada pelo modo guiado':'Roteiro adaptado';
  $('#summaryList').innerHTML = `<dt>Modo</dt><dd>${state.mode==='model'?'Modelo pronto':state.mode==='guided'?'Criar aula guiada':'Adaptar roteiro'}</dd><dt>Origem</dt><dd>${comp}</dd><dt>Conteúdos</dt><dd>${(base.contents||[]).slice(0,5).join(', ') || 'A definir'}</dd><dt>Cards previstos</dt><dd>${state.plan?Object.values(state.plan.cards).reduce((a,b)=>a+b.length,0):'—'} itens sugeridos</dd>`;
}

function getPlainText(tab=state.outputTab){
  const p=state.plan; if(!p) return '';
  const sections=[];
  sections.push(`AulaAcessível — Módulo Química\nAula: ${p.title}\nObjetivo: ${p.goal}\n`);
  if(tab==='panel' || tab==='all') sections.push(`TRILHA VISUAL\n${p.trail.map((x,i)=>`${i+1}. ${x}`).join('\n')}\n\nSEGURANÇA\n- ${p.safety.join('\n- ')}\n\nSENSORIAL\n- ${p.sensory.join('\n- ')}\n\nCOMUNICAÇÃO\n- ${p.communication.join('\n- ')}`);
  if(tab==='student' || tab==='all') sections.push(`ROTEIRO DO ALUNO\n${p.student.map(x=>`☐ ${x}`).join('\n')}`);
  if(tab==='teacher' || tab==='all') sections.push(`ORIENTAÇÃO DO PROFESSOR\nAntes:\n- ${p.teacher.before.join('\n- ')}\nDurante:\n- ${p.teacher.during.join('\n- ')}\nDepois:\n- ${p.teacher.after.join('\n- ')}`);
  if(tab==='cards' || tab==='all') sections.push(`PLACAS/CARDS\nRotina:\n- ${p.cards.rotina.join('\n- ')}\nSegurança:\n- ${p.cards.seguranca.join('\n- ')}\nSensorial:\n- ${p.cards.sensorial.join('\n- ')}\nComunicação:\n- ${p.cards.comunicacao.join('\n- ')}`);
  if(tab==='checklist' || tab==='all') sections.push(`AVALIAÇÃO ALTERNATIVA\n- ${p.assessment.join('\n- ')}`);
  sections.push(`\nBase/observação: ${p.source}`);
  return sections.join('\n\n');
}
function copyCurrentOutput(){ navigator.clipboard.writeText(getPlainText()).then(()=>toast('Texto copiado.')).catch(()=>toast('Não foi possível copiar.')); }
function download(name, content, type='text/plain'){ const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([content],{type})); a.download=name; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),1000); }
function exportTxt(){ download(slug(state.plan.title)+'.txt', getPlainText('all')); }
function saveJson(){ download(slug(state.plan.title)+'.json', JSON.stringify(state,null,2), 'application/json'); }
function loadJson(e){
  const file=e.target.files[0]; if(!file) return;
  const reader=new FileReader();
  reader.onload=()=>{ try{ const data=JSON.parse(reader.result); state={...state,...data}; applyStateToUI(); goStep(state.step||4); toast('Plano carregado.'); }catch(err){ toast('Arquivo inválido.'); } };
  reader.readAsText(file);
}
function resetPlan(){
  if(!confirm('Criar um novo plano e limpar alterações salvas?')) return;
  localStorage.removeItem('aulaAcessivelV4'); location.reload();
}
function slug(s){ return (s||'plano').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'').slice(0,80); }
function escapeHtml(str){ return String(str||'').replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

function openProjector(){
  readEditorsToPlan(); state.nowIndex=state.nowIndex||0; renderProjector(); $('#projectDialog').showModal();
}
function renderProjector(){
  const p=state.plan; if(!p) return;
  $('#projectView').innerHTML = `<section class="project-slide"><p class="eyebrow">Aula de hoje</p><h2>${escapeHtml(p.title)}</h2><p><b>Objetivo:</b> ${escapeHtml(p.goal)}</p><h3>Trilha visual</h3>${timelineHtml(p.trail)}<div class="project-grid"><div><h3>Agora</h3><div class="output-box"><span class="marker">AGORA</span><h2>${escapeHtml(p.trail[state.nowIndex]||'')}</h2><p>Depois: ${escapeHtml(p.trail[state.nowIndex+1]||'concluir')}</p></div></div><div class="project-side"><div class="output-box"><h4>Segurança</h4>${listHtml(p.safety.slice(0,5))}</div><div class="output-box"><h4>Posso pedir</h4>${listHtml(p.communication.slice(0,5))}</div></div></div></section>`;
}

init();
