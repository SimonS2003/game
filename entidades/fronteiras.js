// lista de fronteiras
    export const fronteiras = {

      China: ["Russia Oriental", "India", "Japão"],
      Brasil: ["Argentina", "Bolivia", "Colombia", "Chile", "Nigeria"],
      Argentina: ["Brasil", "Bolivia", "Chile"],
      Bolivia: ["Chile", "Brasil", "Argentina"],
      Chile: ["Colombia", "Brasil", "Bolivia", "Argentina"],
      Colombia: ["Mexico", "Brasil", "Chile"],
      Mexico: ["Colombia", "Estados Unidos"],
      "Estados Unidos": ["Canada", "Mexico"],
      Canada: ["Estados Unidos", "Groelandia"],
      Groelandia: ["Islandia", "Estados Unidos"],
      Islandia: ["Suecia", "Inglaterra"],
      Irlanda: ["Inglaterra"],
      Inglaterra: ["Islandia", "Espanha", "Alemanha"],
      Espanha: ["Inglaterra", "Polonia", "Marrocos", "Egito"],
      Alemanha: ["Inglaterra", "Polonia", "Espanha"],
      Polonia: ["Alemanha", "Egito", "Espanha", "Russia Ocidental"],
      "Russia Ocidental": ["Suecia", "Polonia", "Oriente Médio", "Russia Oriental"],
      "Russia Oriental": ["Mongolia", "China", "Russia Ocidental", "India", "Japão", "Oriente Médio"],
      India: ["China", "Oriente Médio", "Russia Oriental"],
      Viatna: ["India", "China", "Nova Zelandia"],
      "Nova Zelandia": ["Australia", "Viatna"],
      "Japão": ["China", "Russia Ocidental"],
      Sudao: ["Congo", "Africa do Sul", "Nigeria", "Egito"],
      Congo: ["Egito", "Africa do Sul", "Sudao"],
      Madagascar: ["Africa do Sul"],
      "Africa do Sul": ["Madagascar", "Sudao", "Congo"],
      "Egito": ["Sudao", "Nigeria", "Marrocos", "Oriente Medio", "Espanha"],
      Nigeria: ["Sudao", "Congo", "Marrocos", "Egito"]

    };