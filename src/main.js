document.addEventListener('DOMContentLoaded', () => {

    const perfis = [
        {
            nome: "Ana Silva Santos",
            cargo: "Desenvolvedora Full Stack",
            foto: "./assets/photos/AnaSilva.jpg",
            formacao: "Graduação em Engenharia de Software pela USP. AWS Certified Cloud Practitioner.",
            sobre: "Desenvolvedora apaixonada por criar soluções web escaláveis e de alta performance. Focada em arquiteturas de microsserviços e práticas de código limpo.",
            experiencia: "5+ anos de experiência com React, Node.js e TypeScript. Sólidos conhecimentos em design de APIs RESTful e GraphQL. Experiência prática com deploy na AWS (EC2, S3, Lambda).",
            softskills: "Comunicação Clara, Liderança Técnica, Resolução de Problemas, Proatividade.",
            hobbies: "Tocar violão, fotografia de rua e entusiasta de jogos de tabuleiro."
        },
        {
            nome: "Bruno Mendes",
            cargo: "Engenheiro DevOps Sênior",
            foto: "./assets/photos/BrunoMendes.jpg",
            formacao: "Mestrado em Ciência da Computação pela UNICAMP. Certificação CKA (Certified Kubernetes Administrator).",
            sobre: "Especialista em automação de infraestrutura e otimização de pipelines de CI/CD. Foco em reduzir o tempo de deploy e aumentar a confiabilidade dos sistemas.",
            experiencia: "7 anos de experiência em infraestrutura como código (Terraform, Ansible). Gerenciamento avançado de clusters Kubernetes (GKE). Monitoramento com Prometheus e Grafana.",
            softskills: "Colaboração, Pensamento Sistêmico, Foco em Resultados, Mentoria.",
            hobbies: "Ciclismo de montanha, culinária e contribuidor de projetos open-source."
        },
        {
            nome: "Camila Oliveira",
            cargo: "Arquiteta de Dados",
            foto: "./assets/photos/CamilaOliveira.jpg",
            formacao: "Graduação em Estatística pela UFMG. Microsoft Certified: Azure Data Engineer Associate.",
            sobre: "Arquiteta de dados com foco em desenhar e implementar data lakes e data warehouses robustos. Experiência em modelagem de dados e governança.",
            experiencia: "Experiência em ecossistemas Big Data (Spark, Hadoop). Proficiente em Python e SQL para ETL. Criação de pipelines de dados complexos no Azure Data Factory e Databricks.",
            softskills: "Visão Analítica, Tomada de Decisão, Organização, Boa comunicação com stakeholders.",
            hobbies: "Yoga, leitura (ficção científica) e voluntariado em ONGs de educação."
        },
        {
            nome: "Rafael Costa",
            cargo: "Desenvolvedor Backend",
            foto: "./assets/photos/RafaelCosta.jpg",
            formacao: "Bacharel em Sistemas de Informação (FIAP).",
            sobre: "Desenvolvedor Backend especialista em microsserviços de alta concorrência. Focado em performance e baixa latência.",
            experiencia: "4 anos de experiência com Go (Golang) e gRPC. Criação de sistemas distribuídos e arquitetura serverless (AWS Lambda, Google Cloud Functions). Vasta experiência com bancos NoSQL (DynamoDB, MongoDB).",
            softskills: "Foco, Capacidade de Aprendizado Rápido, Trabalho em Equipe.",
            hobbies: "Corrida, maratonar séries e entusiasta de hardware (montagem de PCs)."
        },
        {
            nome: "Juliana Almeida",
            cargo: "Especialista em Cibersegurança",
            foto: "./assets/photos/JulianaAlmeida.jpg",
            formacao: "Pós-graduação em Segurança da Informação (SENAC). Certificações CISSP e CEH.",
            sobre: "Especialista em segurança ofensiva (Red Team) e defensiva (Blue Team). Focada em identificar e mitigar vulnerabilidades em aplicações e infraestrutura.",
            experiencia: "Experiência em testes de invasão (Pentest) em aplicações web e mobile. Implementação e gerenciamento de ferramentas SIEM (Splunk). Análise de malwares e resposta a incidentes. Conhecimento em segurança de nuvem (AWS/Azure).",
            softskills: "Atenção aos Detalhes, Pensamento Crítico, Ética, Gestão de Crise.",
            hobbies: "Xadrez, escalada indoor e estudo de criptografia."
        },
        {
            nome: "Lucas Ferreira",
            cargo: "Desenvolvedor Frontend Sênior",
            foto: "./assets/photos/LucasFerreira.jpg",
            formacao: "Design Digital pela Anhembi Morumbi.",
            sobre: "Frontend com um olhar apurado para design e experiência do usuário (UX). Especialista em criar interfaces interativas e acessíveis.",
            experiencia: "6 anos de experiência com o ecossistema React (Next.js, Remix). Otimização de performance (Core Web Vitals). Experiência com Design Systems e Storybook. Deploy em plataformas como Vercel e Netlify (incluindo AWS Amplify).",
            softskills: "Criatividade, Empatia (foco no usuário), Colaboração com Designers.",
            hobbies: "Design de móveis, skate e produção musical."
        },
        {
            nome: "Gabriela Lima",
            cargo: "Site Reliability Engineer (SRE)",
            foto: "./assets/photos/GabrielaLima.jpg",
            formacao: "Engenharia de Computação (PUC-RJ).",
            sobre: "SRE focada em garantir a disponibilidade, performance e escalabilidade de sistemas críticos. Paixão por automação e observabilidade.",
            experiencia: "Experiência sólida em monitoramento (Prometheus, Grafana, ELK Stack). Automação de infraestrutura com Ansible e Puppet. Definição de SLOs/SLIs e gerenciamento de incidentes (on-call).",
            softskills: "Resiliência, Foco na Causa Raiz, Comunicação Eficaz, Organização.",
            hobbies: "Trekking, jardinagem e leitura de biografias."
        },
        {
            nome: "Tiago Martins",
            cargo: "Engenheiro de Machine Learning",
            foto: "./assets/photos/TiagoMartins.jpg",
            formacao: "Mestrado em Inteligência Artificial (ITA).",
            sobre: "Engenheiro de ML focado em colocar modelos de larga escala em produção (MLOps). Especialista em processamento de linguagem natural (NLP).",
            experiencia: "Desenvolvimento e deploy de modelos com TensorFlow e PyTorch. Experiência com o ecossistema AWS (SageMaker, S3). Otimização de modelos para inferência em tempo real. Criação de pipelines de MLOps.",
            softskills: "Curiosidade Intelectual, Visão de Produto, Persistência.",
            hobbies: "Piano, astronomia amadora e estudo de filosofia."
        },
        {
            nome: "Beatriz Sousa",
            cargo: "Product Manager (Tech)",
            foto: "./assets/photos/BeatrizSousa.jpg",
            formacao: "Administração de Empresas (FGV). Certificação CSPO (Certified Scrum Product Owner).",
            sobre: "PM com background técnico, atuando como a ponte entre as necessidades de negócio e as equipes de engenharia. Focada em produtos SaaS B2B.",
            experiencia: "Criação e gerenciamento de roadmaps de produto. Definição de OKRs e KPIs. Condução de pesquisas com usuários e análise de concorrência. Experiência com metodologias ágeis (Scrum, Kanban). Sólido entendimento de arquitetura de Cloud (SaaS).",
            softskills: "Liderança, Negociação, Priorização, Empatia.",
            hobbies: "Viagens, gastronomia e mentoria para startups."
        },
        {
            nome: "Felipe Nogueira",
            cargo: "Desenvolvedor Mobile",
            foto: "./assets/photos/FelipeNogueira.jpg",
            formacao: "Tecnólogo em Jogos Digitais (FATEC).",
            sobre: "Desenvolvedor Mobile especialista em performance e animações fluidas. Foco em criar experiências nativas memoráveis.",
            experiencia: "5 anos de experiência com desenvolvimento nativo (Swift para iOS e Kotlin para Android). Experiência com arquiteturas modernas (MVVM, Clean Architecture). Integração com Firebase (Auth, Firestore, Cloud Functions).",
            softskills: "Colaboração, Foco no Usuário, Adaptação, Criatividade.",
            hobbies: "Desenho digital, basquete e desenvolvimento de jogos indie."
        }
    ];

    const todosOsCards = document.querySelectorAll('.card');
    const modalFundo = document.getElementById('modal-perfil');
    const botaoFechar = document.querySelector('.modal-fechar');

    const modalAvatar = document.getElementById('modal-avatar');
    const modalNome = document.getElementById('modal-nome');
    const modalCargo = document.getElementById('modal-cargo');
    const modalFormacao = document.getElementById('modal-formacao');
    const modalSobre = document.getElementById('modal-sobre');
    const modalExperiencia = document.getElementById('modal-experiencia');
    const modalSoftskills = document.getElementById('modal-softskills');
    const modalHobbies = document.getElementById('modal-hobbies');

    function abrirModal(index) {
        
        const perfil = perfis[index];
        modalAvatar.src = perfil.foto;
        modalNome.textContent = perfil.nome;
        modalCargo.textContent = perfil.cargo;
        modalFormacao.textContent = perfil.formacao;
        modalSobre.textContent = perfil.sobre;
        modalExperiencia.textContent = perfil.experiencia;
        modalSoftskills.textContent = `Soft Skills: ${perfil.softskills}`;
        modalHobbies.textContent = `Hobbies: ${perfil.hobbies}`;
        modalFundo.classList.add('aberto');
    }

    function fecharModal() {
        modalFundo.classList.remove('aberto');
    }

    todosOsCards.forEach(card => {
        card.addEventListener('click', () => {
            const index = card.dataset.index;
            abrirModal(index);
        });
    });

    botaoFechar.addEventListener('click', fecharModal);

    modalFundo.addEventListener('click', (evento) => {
        if (evento.target === modalFundo) {
            fecharModal();
        }
    });

});