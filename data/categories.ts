import type { Axis, CategoryGroup } from './types.js';

export const CATEGORY_SEQUENCE: Axis[] = [
  'function',
  'grammar',
  'punctuation',
  'cefr',
  'register',
  'position',
  'structure',
  'frequency',
  'rhetorical',
  'origin',
];

export const CATEGORY_GROUPS: Record<Axis, CategoryGroup> = {
  function: {
    axis: 'function',
    label: { en: 'Function', es: 'Función' },
    hint: {
      en: 'Choose the communication job the connector performs.',
      es: 'Elige la función comunicativa del conector.',
    },
    options: [
      { value: 'addition', label: { en: 'Addition', es: 'Adición' }, description: { en: 'Adds another idea.', es: 'Añade otra idea.' } },
      { value: 'contrast', label: { en: 'Contrast', es: 'Contraste' }, description: { en: 'Shows a difference or opposition.', es: 'Muestra diferencia u oposición.' } },
      { value: 'cause', label: { en: 'Cause', es: 'Causa' }, description: { en: 'Explains the reason.', es: 'Explica la razón.' } },
      { value: 'result', label: { en: 'Result', es: 'Resultado' }, description: { en: 'Shows the consequence.', es: 'Muestra la consecuencia.' } },
      { value: 'condition', label: { en: 'Condition', es: 'Condición' }, description: { en: 'Sets a requirement or situation.', es: 'Establece un requisito o situación.' } },
      { value: 'time', label: { en: 'Time', es: 'Tiempo' }, description: { en: 'Places events in time.', es: 'Sitúa los hechos en el tiempo.' } },
      { value: 'illustration', label: { en: 'Illustration', es: 'Ilustración' }, description: { en: 'Introduces examples.', es: 'Introduce ejemplos.' } },
      { value: 'emphasis', label: { en: 'Emphasis', es: 'Énfasis' }, description: { en: 'Makes an idea stand out.', es: 'Destaca una idea.' } },
      { value: 'conclusion', label: { en: 'Conclusion', es: 'Conclusión' }, description: { en: 'Closes or sums up an argument.', es: 'Cierra o resume un argumento.' } },
    ],
  },
  grammar: {
    axis: 'grammar',
    label: { en: 'Grammatical type', es: 'Tipo gramatical' },
    hint: {
      en: 'Choose the structural form of the connector.',
      es: 'Elige la forma estructural del conector.',
    },
    options: [
      { value: 'coordinating', label: { en: 'Coordinating', es: 'Coordinante' }, description: { en: 'Joins two equal parts.', es: 'Une dos partes equivalentes.' } },
      { value: 'subordinating', label: { en: 'Subordinating', es: 'Subordinante' }, description: { en: 'Links a dependent clause.', es: 'Vincula una oración subordinada.' } },
      { value: 'correlative', label: { en: 'Correlative', es: 'Correlativo' }, description: { en: 'Uses paired elements.', es: 'Usa elementos en pareja.' } },
      { value: 'conjunctive_adverb', label: { en: 'Conjunctive adverb', es: 'Adverbio conjuntivo' }, description: { en: 'Moves the discourse forward.', es: 'Impulsa el discurso.' } },
      { value: 'prepositional', label: { en: 'Prepositional', es: 'Preposicional' }, description: { en: 'Works as a prepositional phrase.', es: 'Funciona como frase preposicional.' } },
      { value: 'multi_word_phrase', label: { en: 'Multi-word phrase', es: 'Frase multi-palabra' }, description: { en: 'Contains more than one word.', es: 'Contiene más de una palabra.' } },
    ],
  },
  punctuation: {
    axis: 'punctuation',
    label: { en: 'Punctuation behavior', es: 'Comportamiento de puntuación' },
    hint: {
      en: 'Choose how punctuation typically surrounds the connector.',
      es: 'Elige cómo suele aparecer la puntuación alrededor del conector.',
    },
    options: [
      { value: 'comma', label: { en: 'Comma', es: 'Coma' }, description: { en: 'Commonly needs a comma.', es: 'Suele llevar coma.' } },
      { value: 'semicolon', label: { en: 'Semicolon', es: 'Punto y coma' }, description: { en: 'Often follows a semicolon.', es: 'A menudo va tras punto y coma.' } },
      { value: 'colon', label: { en: 'Colon', es: 'Dos puntos' }, description: { en: 'Can introduce a conclusion or list.', es: 'Puede introducir una conclusión o lista.' } },
      { value: 'none', label: { en: 'None', es: 'Ninguna' }, description: { en: 'Usually no extra punctuation is needed.', es: 'Normalmente no necesita puntuación extra.' } },
      { value: 'initial_position', label: { en: 'Initial position', es: 'Posición inicial' }, description: { en: 'Usually starts a clause or sentence.', es: 'Suele iniciar una cláusula o frase.' } },
      { value: 'final_position', label: { en: 'Final position', es: 'Posición final' }, description: { en: 'Can close the sentence or clause.', es: 'Puede cerrar la oración o cláusula.' } },
    ],
  },
  cefr: {
    axis: 'cefr',
    label: { en: 'CEFR level', es: 'Nivel MCER' },
    hint: {
      en: 'Choose the level most associated with the connector.',
      es: 'Elige el nivel más asociado al conector.',
    },
    options: [
      { value: 'A1', label: { en: 'A1', es: 'A1' }, description: { en: 'Very common beginner language.', es: 'Lenguaje muy común de nivel inicial.' } },
      { value: 'A2', label: { en: 'A2', es: 'A2' }, description: { en: 'Simple everyday language.', es: 'Lenguaje sencillo y cotidiano.' } },
      { value: 'B1', label: { en: 'B1', es: 'B1' }, description: { en: 'Independent intermediate language.', es: 'Lenguaje intermedio independiente.' } },
      { value: 'B2', label: { en: 'B2', es: 'B2' }, description: { en: 'Upper-intermediate language.', es: 'Lenguaje de nivel intermedio alto.' } },
      { value: 'C1', label: { en: 'C1', es: 'C1' }, description: { en: 'Advanced language use.', es: 'Uso avanzado del idioma.' } },
      { value: 'C2', label: { en: 'C2', es: 'C2' }, description: { en: 'Highly nuanced and precise language.', es: 'Lenguaje muy preciso y matizado.' } },
    ],
  },
  register: {
    axis: 'register',
    label: { en: 'Formality / register', es: 'Formalidad / registro' },
    hint: {
      en: 'Choose the tone and style of use.',
      es: 'Elige el tono y estilo de uso.',
    },
    options: [
      { value: 'informal', label: { en: 'Informal', es: 'Informal' }, description: { en: 'Used in casual speech or writing.', es: 'Se usa en habla o escritura casual.' } },
      { value: 'neutral', label: { en: 'Neutral', es: 'Neutral' }, description: { en: 'Works in most everyday contexts.', es: 'Funciona en la mayoría de contextos cotidianos.' } },
      { value: 'formal', label: { en: 'Formal', es: 'Formal' }, description: { en: 'Preferred in academic or professional prose.', es: 'Preferido en prosa académica o profesional.' } },
      { value: 'literary', label: { en: 'Literary', es: 'Literario' }, description: { en: 'Appears in polished or literary writing.', es: 'Aparece en escritura cuidada o literaria.' } },
    ],
  },
  position: {
    axis: 'position',
    label: { en: 'Position in sentence', es: 'Posición en la oración' },
    hint: {
      en: 'Choose where the connector usually appears.',
      es: 'Elige dónde suele aparecer el conector.',
    },
    options: [
      { value: 'initial', label: { en: 'Initial', es: 'Inicial' }, description: { en: 'Usually begins the sentence or clause.', es: 'Normalmente inicia la oración o cláusula.' } },
      { value: 'medial', label: { en: 'Medial', es: 'Media' }, description: { en: 'Usually appears inside the sentence.', es: 'Suele aparecer dentro de la oración.' } },
      { value: 'final', label: { en: 'Final', es: 'Final' }, description: { en: 'Often closes the clause or sentence.', es: 'A menudo cierra la cláusula o la oración.' } },
    ],
  },
  structure: {
    axis: 'structure',
    label: { en: 'Length / structure', es: 'Longitud / estructura' },
    hint: {
      en: 'Choose the connector shape.',
      es: 'Elige la forma del conector.',
    },
    options: [
      { value: 'single_word', label: { en: 'Single-word', es: 'Palabra única' }, description: { en: 'Only one word long.', es: 'Tiene solo una palabra.' } },
      { value: 'compound', label: { en: 'Compound', es: 'Compuesto' }, description: { en: 'Built from two parts.', es: 'Formado por dos partes.' } },
      { value: 'multi_word_phrase', label: { en: 'Multi-word phrase', es: 'Frase multi-palabra' }, description: { en: 'A phrase with several words.', es: 'Una frase con varias palabras.' } },
    ],
  },
  frequency: {
    axis: 'frequency',
    label: { en: 'Frequency / usage', es: 'Frecuencia / uso' },
    hint: {
      en: 'Choose how often learners meet it.',
      es: 'Elige con qué frecuencia lo encuentran los estudiantes.',
    },
    options: [
      { value: 'high', label: { en: 'High', es: 'Alta' }, description: { en: 'Very common in everyday English.', es: 'Muy común en inglés cotidiano.' } },
      { value: 'medium', label: { en: 'Medium', es: 'Media' }, description: { en: 'Common but less automatic.', es: 'Común pero menos automática.' } },
      { value: 'low', label: { en: 'Low', es: 'Baja' }, description: { en: 'More specialized or less frequent.', es: 'Más especializada o menos frecuente.' } },
    ],
  },
  rhetorical: {
    axis: 'rhetorical',
    label: { en: 'Rhetorical function', es: 'Función retórica' },
    hint: {
      en: 'Choose the discourse style where it is most useful.',
      es: 'Elige el estilo discursivo donde más sirve.',
    },
    options: [
      { value: 'argumentation', label: { en: 'Argumentation', es: 'Argumentación' }, description: { en: 'Supports reasons and claims.', es: 'Sostiene razones y afirmaciones.' } },
      { value: 'narrative', label: { en: 'Narrative', es: 'Narrativo' }, description: { en: 'Helps tell events in sequence.', es: 'Ayuda a narrar eventos en secuencia.' } },
      { value: 'expository', label: { en: 'Expository', es: 'Expositivo' }, description: { en: 'Organizes explanation and information.', es: 'Organiza explicación e información.' } },
      { value: 'persuasive', label: { en: 'Persuasive', es: 'Persuasivo' }, description: { en: 'Aids convincing or emphasis.', es: 'Ayuda a convencer o enfatizar.' } },
    ],
  },
  origin: {
    axis: 'origin',
    label: { en: 'Morphological origin', es: 'Origen morfológico' },
    hint: {
      en: 'Choose the historical source pattern.',
      es: 'Elige el patrón de origen histórico.',
    },
    options: [
      { value: 'native', label: { en: 'Native', es: 'Nativo' }, description: { en: 'Old English or inherited forms.', es: 'Formas heredadas o del inglés antiguo.' } },
      { value: 'latin_french', label: { en: 'Latin / French', es: 'Latino / francés' }, description: { en: 'Borrowed from Latin or French roots.', es: 'Prestado de raíces latinas o francesas.' } },
      { value: 'hybrid', label: { en: 'Hybrid', es: 'Híbrido' }, description: { en: 'Mixed form built from different parts.', es: 'Forma mixta construida con partes distintas.' } },
    ],
  },
};
