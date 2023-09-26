/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    portugues: {
      descricao: `Uma olimpíada para alunos e professores da região das fronteiras entre Argentina, Brasil e Paraguai que querem colocar suas ideias sobre desenvolvimento sustentável em prática!`,
      titulo: `Cronograma`,
      li1: `Inscrições: `,
      span1: `até 26 de novembro`,
      li2: `Entrega dos projetos: `,
      span2: `25 e 26 de novembro`,
      li3: `Divulgação dos finalistas: `,
      span3: `28 de novembro`,
      li4: `Apresentação final: `,
      span4: `2 de dezembro`,

      titulo2: `Iniciativa do Instituto Vertere`,
      descricao2: `Somos uma olimpíada afiliada da Sapientia, a Olimpíada do Futuro. A Sapientia é uma iniciativa realizada pelo Instituto Vertere e tem como base a Agenda 2030 da Organização das Nações Unidas – ONU. A competição aborda as disciplinas estudadas em sala de aula a partir de uma perspectiva conectada às questões do nosso tempo e enriquecida pela visão de pensadores do século 21.`,

      titulo3: `Intercâmbio de aprendizados`,
      descricao3: `Chegamos à Tríplice Fronteira para celebrar a expansão das olimpíadas do Instituto Vertere para os países de língua espanhola da América do Sul!`,
      botaoInscricao: `Inscrições abertas até 24 de novembro`,
      regulamento: `Acesse o regulamento`,

      titulo4: `Inscreva-se gratuitamente`,
      botaoInscricao2: `QUERO ME INSCREVER`,


      footerRea: `Realização:`,
      footerApo: `Apoio:`,
    },
    espanhol: {
      descricao: `¡Una Olimpiada para estudiantes y docentes de la región fronteriza entre Argentina, Brasil y Paraguay que quieran poner en práctica sus ideas sobre el desarrollo sostenible!`,
      titulo: `línea de tiempo`,
      li1: `Inscripción: `,
      span1: `hasta el 26 de noviembre`,
      li2: `Entrega de proyectiles: `,
      span2: `25 y 26 de noviembre`,
      li3: `Divulgación de finalistas: `,
      span3: `28 de noviembre`,
      li4: `Presentación final: `,
      span4: `2 de diciembre`,

      titulo2: `Iniciativa del Instituto Vertere`,
      descricao2: `Somos una filial de Olimpiadas de Sapientia, las Olimpiadas del Futuro. Sapientia es una iniciativa del Instituto Vertere y se basa en la Agenda 2030 de la Organización de las Naciones Unidas – ONU. El concurso aborda los temas tratados en el aula desde una perspectiva conectada con los problemas de nuestro tiempo y enriquecida por la visión de los pensadores del siglo XXI.`,

      titulo3: `intercambio de aprendizaje`,
      descricao3: `¡Llegamos a la Triple Frontera para celebrar la expansión del Instituto Vertere Olympics a los países de habla hispana de América del Sur!`,
      botaoInscricao: `Inscripciones abiertas hasta el 24 de noviembre`,
      regulamento: `Accede al reglamento`,

      titulo4: `Registrate gratis`,
      botaoInscricao2: `QUIERO SUSCRIBIRME`,


      footerRea: `Realización:`,
      footerApo: `Apoyo:`,
    },
  },

  plugins: [
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Dosis`,
            file: `https://fonts.googleapis.com/css2?family=Dosis&display=swap`,
          },
          {
            name: `Work Sans`,
            file: `https://fonts.googleapis.com/css2?family=Work+Sans:wght@700;900&display=swap`
          },

        ],
      },
    },
  ],
}
