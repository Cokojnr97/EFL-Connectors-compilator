import type { Locale } from '../../data/types.js';
import { CATEGORY_GROUPS, CATEGORY_SEQUENCE } from '../../data/categories.js';

export function getExplanation(axis: string, localeKey: Locale) {
  switch (axis) {
    case 'function':
      return `
          <h4 class="font-semibold">General Explanation</h4>
          <p class="mb-2">Connectors categorized by <em>function</em> show the logical relationship between ideas. Each function expresses how one sentence or clause connects to another — whether adding, contrasting, explaining cause, showing result, or sequencing events. Understanding connectors by function helps learners organize their thoughts clearly and avoid confusion.</p>

          <h4 class="font-semibold mt-2">General Examples</h4>
          <ul class="list-disc list-inside mt-1">
            <li>"She likes apples, <strong>and</strong> she likes oranges." (Addition)</li>
            <li>"It was raining; <strong>however</strong>, we went outside." (Contrast)</li>
            <li>"We stayed home <strong>because</strong> it was raining." (Cause/Reason)</li>
            <li>"It was raining, <strong>so</strong> we stayed home." (Result/Consequence)</li>
            <li>"<strong>If</strong> it rains, we will stay home." (Condition)</li>
          </ul>

          <h4 class="font-semibold mt-2">Common Mistakes</h4>
          <ul class="list-disc list-inside mt-1">
            <li>Learners often confuse cause and result connectors (e.g., using "because" instead of "so").</li>
            <li>Overusing "and" for all functions instead of learning variety.</li>
            <li>Misplacing connectors at the wrong sentence position (e.g., "because" at the start of a sentence fragment without a main clause).</li>
          </ul>

          <h4 class="font-semibold mt-2">Punctuation Insights</h4>
          <ul class="list-disc list-inside mt-1">
            <li>Some connectors require commas when at the beginning (e.g., "However, ...").</li>
            <li>Others never take commas mid-sentence (e.g., "because").</li>
            <li>Conjunctive adverbs often follow a semicolon (e.g., "It was late; therefore, we left.").</li>
          </ul>
        `;
    case 'grammar':
      return `
          <p class="mb-2">Grammatical type describes the structural role a connector plays: coordinating, subordinating, correlative, conjunctive adverb, prepositional, or multi-word phrase.</p>
          <h4 class="font-semibold mt-2">Main Characteristics of Coordinating Conjunctions</h4>
          <ol class="list-decimal list-inside mt-1">
            <li>They connect equal structures — words, phrases, or clauses.</li>
          </ol>

          <p class="mt-2 font-semibold">Examples of equal structures</p>
          <ul class="list-disc list-inside mt-1">
            <li>Word + Word — "She likes tea and coffee."</li>
            <li>Phrase + Phrase — "We can meet after class or before dinner."</li>
            <li>Clause + Clause — "I was tired, but I finished my homework."</li>
          </ul>

          <h4 class="font-semibold mt-2">Coordinating Conjunctions and Punctuation</h4>
          <p class="mt-1">1. Joining two independent clauses — use a comma before the conjunction.</p>
          <p class="mt-1"><em>Structure:</em> Independent clause + comma + coordinating conjunction + independent clause</p>
          <p class="mt-1">Examples: "I wanted to go, but I was busy." "She studied hard, so she passed the test."</p>

          <p class="mt-2">2. Joining words or phrases — usually no comma is needed.</p>
          <p class="mt-1">Examples: "I bought apples and oranges." "We walked slowly but carefully."</p>

          <h4 class="font-semibold mt-2">Coordinating vs. Subordinating</h4>
          <p class="mt-1"><strong>Coordinating:</strong> connect equal ideas. — "I was tired, but I continued working."</p>
          <p class="mt-1"><strong>Subordinating:</strong> connect dependent to independent clause. — "Although I was tired, I continued working."</p>

          <h4 class="font-semibold mt-2">Common mistakes</h4>
          <ul class="list-disc list-inside mt-1">
            <li><strong>Comma splice</strong> — wrong: "I was hungry, I ate pizza." Correct: "I was hungry, so I ate pizza."</li>
            <li><strong>Overusing conjunctions</strong> — prefer concise sequences: "I went home, ate dinner, and went to sleep."</li>
            <li><strong>Confusing so / because</strong> — both can appear but play different roles: "Because I was tired, I slept early." / "I was tired, so I slept early."</li>
          </ul>
        `;
    case 'punctuation':
      return `
          <p class="mb-2">Punctuation behavior explains the typical marks used with a connector: comma, semicolon, colon, none, or specific positions that affect punctuation.</p>
          <h4 class="font-semibold mt-2">Key rules</h4>
          <ul class="list-disc list-inside mt-1">
            <li><strong>Comma</strong>: used before coordinating conjunctions that join independent clauses.</li>
            <li><strong>Semicolon</strong>: can separate closely related independent clauses when a connector is absent or to emphasize contrast.</li>
            <li><strong>Colon</strong>: introduces a list or conclusion; not a standard connector marker but important for certain structures.</li>
            <li><strong>None</strong>: many connectors join smaller units and need no special punctuation.</li>
          </ul>
          <h4 class="font-semibold mt-2">Examples</h4>
          <p class="mt-1">Comma: "I wanted to leave, but it was late." Semicolon: "She studied hard; therefore, she passed." No punctuation: "apples and oranges"</p>
        `;
    case 'cefr':
      return `
          <p class="mb-2">CEFR level notes where a connector is typically introduced or expected to be known: A1–C2. This helps teachers sequence instructions and exercises.</p>
          <h4 class="font-semibold mt-2">Teaching tips</h4>
          <ul class="list-disc list-inside mt-1">
            <li>A1–A2: introduce high-frequency coordinating connectors (and, but, because).</li>
            <li>B1–B2: add subordinating structures and conjunctive adverbs (although, however, therefore).</li>
            <li>C1–C2: teach nuance, register, and less frequent rhetorical connectors.</li>
          </ul>
        `;
    case 'register':
      return `
          <p class="mb-2">Register identifies the tone/style where a connector is appropriate: informal, neutral, formal, literary.</p>
          <h4 class="font-semibold mt-2">Notes</h4>
          <ul class="list-disc list-inside mt-1">
            <li>Informal connectors suit speech and casual writing (e.g., "and then").</li>
            <li>Neutral connectors work across most contexts (e.g., "but").</li>
            <li>Formal connectors are preferred in academic prose (e.g., "therefore", "moreover").</li>
          </ul>
        `;
    case 'position':
      return `
          <p class="mb-2">Position describes where a connector commonly appears: initial (beginning), medial (inside clause), or final (end).</p>
          <h4 class="font-semibold mt-2">Examples</h4>
          <ul class="list-disc list-inside mt-1">
            <li>Initial: "However, she decided to stay."</li>
            <li>Medial: "She has, however, changed her mind."</li>
            <li>Final: "They argued; the result, however." (rare)</li>
          </ul>
        `;
    case 'structure':
      return `
          <p class="mb-2">Structure concerns length and form: single-word items (and, but), compounds (nevertheless), or multi-word phrases (on the other hand, as a result).</p>
          <h4 class="font-semibold mt-2">Teaching note</h4>
          <p class="mt-1">Teach shorter, high-frequency forms first; introduce multi-word phrases with clear contextualized examples.</p>
        `;
    case 'frequency':
      return `
          <p class="mb-2">Frequency signals how often learners meet the connector in real language: high, medium, or low. High-frequency items should be prioritized.</p>
          <h4 class="font-semibold mt-2">Implication</h4>
          <p class="mt-1">High = teach early and recycle often; Low = introduce for advanced learners and explicit instruction.</p>
        `;
    case 'rhetorical':
      return `
          <p class="mb-2">Rhetorical function shows which discourse purpose the connector supports: argumentation, narrative, expository, or persuasive.</p>
          <h4 class="font-semibold mt-2">Examples</h4>
          <ul class="list-disc list-inside mt-1">
            <li>Argumentation: therefore, furthermore.</li>
            <li>Narrative: then, meanwhile.</li>
            <li>Expository: for example, in other words.</li>
            <li>Persuasive: consequently, moreover.</li>
          </ul>
        `;
    case 'origin':
      return `
          <p class="mb-2">Origin describes the historical or morphological source: native English, Latin/French borrowings, or hybrid formations. Useful for etymological notes and pronunciation patterns.</p>
          <h4 class="font-semibold mt-2">Notes</h4>
          <ul class="list-disc list-inside mt-1">
            <li>Native items often look short and irregular (and, but).</li>
            <li>Latin/French borrowings can be longer and more formal (therefore, moreover).</li>
          </ul>
        `;
    case 'opinion':
      return `
          <p class="mb-2">Opinion connectors signal the speaker's judgement, belief, or personal stance. They are useful for softening claims, showing certainty levels, or framing a point of view.</p>
          <h4 class="font-semibold mt-2">Teaching note</h4>
          <p class="mt-1">These connectors often sound more personal than logical; they help writers sound thoughtful rather than absolute.</p>
        `;
    case 'sequence':
      return `
          <p class="mb-2">Sequence connectors order events, steps, or points. They help readers follow a timeline, procedure, or structured argument.</p>
          <h4 class="font-semibold mt-2">Teaching note</h4>
          <p class="mt-1">Use them in process writing, instructions, stories, and presentations.</p>
        `;
    case 'comparison':
      return `
          <p class="mb-2">Comparison connectors show similarity, equivalence, or difference between ideas. They are useful when two items need to be linked by likeness or contrast.</p>
          <h4 class="font-semibold mt-2">Teaching note</h4>
          <p class="mt-1">Teach learners to notice whether the connector is comparing, matching, or separating two ideas.</p>
        `;
    case 'summary':
      return `
          <p class="mb-2">Summary connectors collect the main point, restate an idea, or close a topic. They are common in conclusions and short recaps.</p>
          <h4 class="font-semibold mt-2">Teaching note</h4>
          <p class="mt-1">They help students end an argument neatly and signal that the text is wrapping up.</p>
        `;
    case 'place':
      return `
          <p class="mb-2">Place connectors point to location, direction, or spatial relation. They help writers and speakers describe where something is relative to something else.</p>
          <h4 class="font-semibold mt-2">Teaching note</h4>
          <p class="mt-1">Use them in instructions, descriptions, maps, and directions.</p>
        `;
    default:
      return '<p>No explanation available.</p>';
  }
}

export function getSubcategoryHtml(axis: string, optionValue: string, optionLabel: string) {
  switch (axis) {
    case 'function':
      switch (optionValue) {
        case 'addition':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Addition connectors are used to add information, examples, or points. They signal continuation rather than contrast or change, helping writing feel cumulative and connected. Teach students to use them to join related ideas without implying opposition.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>She likes apples, <strong>and</strong> she likes oranges.</li>
                <li>He studied hard; <strong>moreover</strong>, he practiced every night.</li>
                <li>In addition, we will review the homework tomorrow.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Using "and" to connect unrelated or contrasting ideas where a contrast marker is needed.</li>
                <li>Redundancy such as "and also" or "and in addition" without serving clarity.</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Use a comma before coordinating conjunctions (and, but) when joining independent clauses.</li>
                <li>Adverbial connectors like "moreover" typically follow a semicolon or start a new sentence with a comma after them.</li>
              </ul>
            `;
        case 'contrast':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Contrast connectors show difference or opposition between ideas. They signal that the second idea limits, corrects, or changes the expectation set by the first. Help learners notice the shift in meaning and choose the right connector (e.g., but vs. however) and punctuation.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>I wanted to go, <strong>but</strong> I had to work.</li>
                <li>She failed the test; <strong>however</strong>, she learned from the experience.</li>
                <li><strong>Although</strong> it was late, he continued reading.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Using "but" when a stronger contrastive connector (however, although) is needed for nuance.</li>
                <li>Mistaking clause order and punctuation with subordinators vs. coordinators.</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>When using "however" between independent clauses, prefer "; however,".</li>
                <li>Subordinating contrast (although) does not require a comma when the subordinate clause follows the main clause.</li>
              </ul>
            `;
        case 'cause':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Cause connectors state the reason for an action or event. They answer “why” something happened and introduce explanations that justify the main statement. Emphasize connections like because, since, and as, and show clause ordering for clarity.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>We stayed inside <strong>because</strong> it was raining.</li>
                <li><strong>Since</strong> you are here, let's begin.</li>
                <li>As it was late, we left early.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Confusing cause and result connectors (using "because" where "so" is needed).</li>
                <li>Starting a sentence with "because" without completing the main clause.</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>When a subordinate clause (because) comes first, follow it with a comma: "Because it rained, we stayed."</li>
                <li>No comma is needed when the main clause precedes the subordinate clause: "We stayed because it rained."</li>
              </ul>
            `;
        case 'result':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Result connectors show the outcome or effect that follows from a previous statement. They point to consequences and help readers follow logical consequences (so, therefore, thus). Practice matching causes with correct result connectors and punctuation.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>It rained, <strong>so</strong> we stayed home.</li>
                <li>She studied; <strong>therefore</strong>, she passed the exam.</li>
                <li>He didn't sleep; <strong>consequently</strong>, he was tired.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Choosing a result connector when the sentence actually expresses cause (mixing "so" and "because").</li>
                <li>Overusing formal connectors like "therefore" in casual contexts where "so" suffices.</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Use a comma before "so" when joining independent clauses.</li>
                <li>Use a semicolon before conjunctive adverbs like "therefore" when linking clauses: "...; therefore, ..."</li>
              </ul>
            `;
        case 'condition':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Condition connectors introduce requirements or hypothetical situations that must be met for another action to occur. They frame possibilities, rules, or contingencies (if, unless). Teach students to recognize the protasis (condition) and apodosis (result) structure.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li><strong>If</strong> it rains, we will stay home.</li>
                <li><strong>Unless</strong> you hurry, you'll miss the bus.</li>
                <li>Provided that he agrees, we can start.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Mixing up condition and result ordering — ensure the condition and outcome are clear.</li>
                <li>Using a comma incorrectly when the condition follows the main clause; usually no comma is needed then.</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>When the conditional clause comes first, use a comma: "If it rains, we'll stay."</li>
                <li>When the main clause is first, no comma is usually necessary: "We'll stay if it rains."</li>
              </ul>
            `;
        case 'time':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Time connectors place events in sequence or show simultaneity. They help order events (before, after, meanwhile, then) and guide readers through chronology. Use timeline activities to practice ordering and using appropriate temporal connectors.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>First, we ate dinner; <strong>then</strong>, we watched a film.</li>
                <li><strong>Meanwhile</strong>, the children played outside.</li>
                <li>After the meeting, we went to lunch.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Confusing sequence words and using them inconsistently (e.g., mixing "then" and "afterward" in the same clause).</li>
                <li>Incorrect punctuation when adverbial time phrases start a sentence — usually follow with a comma.</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Use a comma after initial temporal connectors: "After the show, we left."</li>
                <li>Medial temporal connectors like "meanwhile" are often set off by commas.</li>
              </ul>
            `;
        case 'illustration':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Illustration connectors introduce examples, clarifications, or restatements that make an idea clearer. They signal that what follows will illustrate or explain the previous point (for example, for instance, namely). Teach learners to use them to support claims with specific evidence.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Many fruits are healthy, <strong>for example</strong>, apples and bananas.</li>
                <li><strong>For instance</strong>, consider the case of renewable energy.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Overloading a sentence with multiple examples without clear punctuation or connectors.</li>
                <li>Using "for example" as a sentence filler without giving a concrete illustration.</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>When starting a sentence with an illustration phrase, use a comma: "For example, many people..."</li>
                <li>Within a sentence, commas often separate the example phrase from the main clause.</li>
              </ul>
            `;
        case 'emphasis':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Emphasis connectors highlight or stress a particular idea, drawing the reader’s attention to its importance (indeed, in fact, above all). Show learners how emphasis changes tone and when to reserve strong connectors for important claims.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li><strong>Indeed</strong>, this discovery changed the field.</li>
                <li>She is talented; <strong>in fact</strong>, she won the award.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Overstating with emphasis connectors in informal contexts where plain language is better.</li>
                <li>Placing emphasis connectors where they create redundancy.</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Emphatic adverbs like "indeed" often follow a semicolon or start a sentence and take a comma after them.</li>
              </ul>
            `;
        case 'conclusion':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Conclusion connectors signal summary, inference, or final comment (in conclusion, therefore, to sum up). They help wrap up arguments and show the logical end of a sequence. Teach students to use them when restating results or making a final point.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li><strong>In conclusion</strong>, the evidence supports the claim.</li>
                <li>She didn't study; <strong>therefore</strong>, she failed.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Overusing conclusion signals in short texts where no summary is needed.</li>
                <li>Using formal conclusion markers in casual speech where they sound stilted.</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Use a comma after introductory conclusion phrases: "In conclusion, ..."</li>
                <li>When using conjunctive adverbs like "therefore" between clauses, consider a semicolon: "..., therefore, ..."</li>
              </ul>
            `;
        default:
          return `<p>No definition available.</p>`;
      }
    case 'grammar':
      switch (optionValue) {
        case 'coordinating':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Coordinating connectors join grammatical units of equal rank — words, phrases, or independent clauses (e.g., and, but, or). They connect parallel elements without making one dependent on the other, so pay attention to parallel structure and punctuation when joining clauses.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>She likes tea <strong>and</strong> coffee.</li>
                <li>I wanted to go, <strong>but</strong> I was busy.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Comma splice: joining independent clauses without a conjunction or correct punctuation.</li>
                <li>Failing to maintain parallel structure after correlative pairs (e.g., "either...or").</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Use a comma before coordinating conjunctions when they join two independent clauses.</li>
                <li>No comma is needed when joining short phrases or words.</li>
              </ul>
            `;
        case 'subordinating':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Subordinating connectors introduce dependent clauses that cannot stand alone and link them to main clauses (e.g., although, because, when). They create a main–subordinate relationship that affects word order and punctuation; teach learners to identify which clause is the main idea.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li><strong>Although</strong> she was tired, she finished her work.</li>
                <li>We left <strong>when</strong> the bell rang.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Incorrect comma placement when subordinate clause follows the main clause.</li>
                <li>Mistaking whether the clause can stand alone (fragments).</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>When the subordinate clause starts the sentence, use a comma after it.</li>
                <li>No comma is required when the subordinate clause follows the main clause unless it is nonrestrictive.</li>
              </ul>
            `;
        case 'correlative':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Correlative connectors work in pairs to link two parallel elements (e.g., either...or, both...and, neither...nor). Both parts must be grammatically parallel; practice pairing elements of the same type (noun with noun, clause with clause).</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li><strong>Either</strong> call me <strong>or</strong> send an email.</li>
                <li><strong>Both</strong> the manager <strong>and</strong> the team agreed.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Breaking parallelism: "Either to walk or taking a bus" is incorrect.</li>
                <li>Misplacing the paired forms, causing awkward phrasing.</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Usually no comma is needed between the paired correlative elements unless joining long clauses.</li>
              </ul>
            `;
        case 'conjunctive_adverb':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Conjunctive adverbs connect independent clauses while acting like adverbs grammatically (e.g., however, therefore, moreover). They commonly follow a semicolon and are often followed by a comma; teach punctuation rules and nuance of meaning between similar items.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>She wanted to try; <strong>however</strong>, she was too busy.</li>
                <li>He prepared; <strong>therefore</strong>, he succeeded.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Using them without proper clause separation (comma or semicolon).</li>
                <li>Confusing subtle differences between similar adverbs (however vs. nevertheless).</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Use a semicolon before and a comma after conjunctive adverbs when joining clauses.</li>
              </ul>
            `;
        case 'prepositional':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Prepositional connectors function as prepositions or prepositional phrases that show relations of time, cause, or manner (e.g., despite, in spite of). They usually link a noun or noun phrase to the rest of the sentence and do not form full clauses.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li><strong>Despite</strong> the rain, the match continued.</li>
                <li><strong>In spite of</strong> his tiredness, he finished the task.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Creating clause fragments when a suitable noun phrase is missing.</li>
                <li>Mistaking prepositional phrases for full clauses that need verbs.</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Prepositional connectors rarely require punctuation marks unless they start a sentence or are parenthetical.</li>
              </ul>
            `;
        case 'multi_word_phrase':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Multi-word phrase connectors are fixed phrases that act as a single discourse marker (e.g., on the other hand, as a result). Teach them as units and show how word order and punctuation differ from single-word connectors.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li><strong>On the other hand</strong>, we could try a different approach.</li>
                <li><strong>As a result</strong>, the team succeeded.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Breaking the phrase apart or altering word order, losing the idiomatic meaning.</li>
                <li>Overpunctuating short phrases used mid-sentence.</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Treat multi-word connectors as single units; punctuate according to their position (initial vs. medial).</li>
              </ul>
            `;
        default:
          return `<p>No definition available.</p>`;
      }
    case 'punctuation':
      switch (optionValue) {
        case 'comma':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">This group includes connectors that commonly require a comma either before or after them, especially when joining independent clauses with coordinating conjunctions. Teach students when a comma is necessary to separate clauses and when it can be omitted for short phrases.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>I wanted to go, <strong>but</strong> I had no time.</li>
                <li>However, we can postpone the meeting.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Omitting the comma between two independent clauses joined by a coordinator.</li>
                <li>Inserting unnecessary commas in short coordinated phrases.</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Comma before coordinating conjunctions joining independent clauses is standard.</li>
                <li>Adverbial connectors used initially often require a comma after them.</li>
              </ul>
            `;
        case 'semicolon':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">These connectors often appear after a semicolon when linking closely related independent clauses (commonly with conjunctive adverbs). Show examples using semicolons plus adverbs and contrast those with comma usage to build punctuation awareness.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>She worked late; <strong>therefore</strong>, she completed the project.</li>
                <li>It was cold; <strong>however</strong>, we went out.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Replacing semicolons incorrectly with commas and creating comma splices.</li>
                <li>Using semicolons with incomplete clauses or fragments.</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Use a semicolon before conjunctive adverbs when connecting two independent clauses.</li>
                <li>Follow the adverb with a comma for clarity.</li>
              </ul>
            `;
        case 'colon':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Colon-related connectors introduce lists, explanations, or conclusions; the colon signals that what follows elaborates or completes the previous statement. Practice using colons to introduce examples or conclusions in formal writing.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>There is one rule: be honest.</li>
                <li>She had one goal: to finish on time.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Using a colon after a verb when introducing a single short phrase unnecessarily.</li>
                <li>Capitalizing the first word after a colon in mid-sentence without a strong reason.</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Use a colon to introduce lists, explanations, or quotations when preceding clause is independent.</li>
              </ul>
            `;
        case 'none':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Connectors in this group usually do not require extra punctuation when joining small units like words or short phrases. Teach learners to recognize when punctuation is unnecessary and when longer clauses change that rule.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>We bought apples and bananas.</li>
                <li>She works hard but plays harder. (short clauses, optional comma)</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Adding unnecessary commas in short coordinated phrases.</li>
                <li>Failing to add punctuation when the units become independent clauses.</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Short word/phrase joins often need no punctuation, but when they join independent clauses, punctuation is required.</li>
              </ul>
            `;
        case 'initial_position':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Initial-position connectors typically begin a sentence or clause and are usually followed by a comma (e.g., However, In addition, Meanwhile). Emphasize the rhythm and pause they create and the punctuation that follows.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>However, we decided to wait.</li>
                <li>In addition, the report was submitted on time.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Omitting the comma after initial connectors, which reduces clarity.</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Place a comma after initial adverbial connectors to mark the pause and maintain readability.</li>
              </ul>
            `;
        case 'final_position':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Final-position connectors appear at the end of a sentence or clause and can change emphasis or add a tag-like comment (e.g., too, as well). Teach placement and how it affects meaning and tone.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>I'd like to come, <strong>too</strong>.</li>
                <li>They agreed, <strong>as well</strong>.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Placing final connectors incorrectly where they seem disconnected from the main clause.</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>When final-position connectors are short, they often follow a comma; for emphasis, consider a dash or parenthesis depending on tone.</li>
              </ul>
            `;
        default:
          return `<p>No definition available.</p>`;
      }
    case 'cefr':
      switch (optionValue) {
        case 'A1':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">A1 connectors are simple, high-frequency linking words taught very early (e.g., and, but). They help beginners build basic sentence connections and express simple relations like addition or contrast.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>She eats apples <strong>and</strong> bananas.</li>
                <li>It is cold, <strong>but</strong> sunny.</li>
              </ul>

              <h4 class="font-semibold mt-2">Teaching Tips</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Use visuals and gestures to reinforce simple connectors in spoken practice.</li>
                <li>Drill short sentences and contrast pairs to build automaticity.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Using connectors in fragments instead of complete sentences.</li>
              </ul>
            `;
        case 'A2':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">A2 connectors expand basic linking with slightly more variety and function (simple subordinators and common conjunctions). They support everyday communication with clearer sequencing and reason.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>We left <strong>because</strong> it was late.</li>
                <li>If you hurry, we'll arrive on time.</li>
              </ul>

              <h4 class="font-semibold mt-2">Teaching Tips</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Practice short dialogues and cause–effect pairs.</li>
                <li>Use substitution drills to show different connectors in the same frame.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Mixing up subordinators and main clause punctuation.</li>
              </ul>
            `;
        case 'B1':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">B1 connectors are for independent intermediate users and include forms that organize extended speech or writing (contrast, cause, result). Practice using them in connected paragraphs and controlled discourse.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>He studied hard; <strong>therefore</strong>, he was successful.</li>
                <li>Although it rained, the event continued.</li>
              </ul>

              <h4 class="font-semibold mt-2">Teaching Tips</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Assign paragraph-writing tasks focusing on coherence using connectors.</li>
                <li>Highlight connector choice and its effect on tone and clarity.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Overuse of formal connectors leading to stilted writing.</li>
              </ul>
            `;
        case 'B2':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">B2 connectors introduce more nuance for cohesion across longer texts, including conjunctive adverbs and more precise subordinators. Teach their rhetorical effects and register differences.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>The experiment failed; <strong>however</strong>, the data were useful.</li>
                <li>As a result, the team revised the protocol.</li>
              </ul>

              <h4 class="font-semibold mt-2">Teaching Tips</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Contrast synonyms (however vs. nevertheless) and discuss subtle differences in emphasis.</li>
                <li>Use editing tasks to replace vague connectors with more precise ones.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Inconsistent register or mixing formal connectors in informal text.</li>
              </ul>
            `;
        case 'C1':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">C1 connectors are advanced discourse markers that express subtle logical relations and stylistic choices, suitable for academic and professional contexts. Focus on precision, variety, and appropriate register at this level.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Notwithstanding the evidence, the committee hesitated.</li>
                <li>Consequently, the hypothesis was refined.</li>
              </ul>

              <h4 class="font-semibold mt-2">Teaching Tips</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Analyze academic texts to show advanced connector usage and nuance.</li>
                <li>Practice rewriting sentences to alter rhetorical force using different connectors.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Applying highly formal connectors in inappropriate informal contexts.</li>
              </ul>
            `;
        case 'C2':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">C2 connectors include rare, nuanced, or highly formal forms used by proficient speakers for fine-grained discourse control. Teach these as stylistic tools and contrast them with more common alternatives.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>The proposal, insofar as it affects policy, was controversial.</li>
                <li>Ergo, the conclusion followed from the premises.</li>
              </ul>

              <h4 class="font-semibold mt-2">Teaching Tips</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Use contrastive tasks: replace a C2 form with an everyday alternative and discuss rhetorical effects.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Overcomplicating prose by substituting ordinary connectors with obscure forms unnecessarily.</li>
              </ul>
            `;
        default:
          return `<p>No definition available.</p>`;
      }
    case 'register':
      switch (optionValue) {
        case 'informal':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Informal connectors appear in casual speech and friendly writing; they are short and conversational. Teach rules about contraction, tone, and when to avoid informal choices in formal contexts.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>We went out, <strong>then</strong> we grabbed a snack.</li>
                <li>He's nice, <strong>and</strong> funny too.</li>
              </ul>

              <h4 class="font-semibold mt-2">Teaching Tips</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Contrast formal and informal connectors in role-play dialogues.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Using informal connectors in academic or professional writing.</li>
              </ul>
            `;
        case 'neutral':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Neutral connectors work across most contexts and are safe choices for general communication. They are often the best options for learners unsure about register.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>She studied, <strong>so</strong> she passed.</li>
                <li>However, this may not apply in all cases.</li>
              </ul>

              <h4 class="font-semibold mt-2">Teaching Tips</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Teach neutral connectors first as default choices for learners.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Overgeneralizing neutral connectors to contexts where a stronger register choice is needed.</li>
              </ul>
            `;
        case 'formal':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Formal connectors are used in academic, legal, or professional prose; they tend to be longer or more precise. Teach students when formal language is necessary and how to replace informal connectors with formal equivalents.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Therefore, the study confirms the hypothesis.</li>
                <li>Moreover, the results were significant.</li>
              </ul>

              <h4 class="font-semibold mt-2">Teaching Tips</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Use academic texts to highlight formal connectors and discuss tone.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Inserting overly formal connectors into informal tasks, making prose sound unnatural.</li>
              </ul>
            `;
        case 'literary':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Literary connectors are stylistic choices for narrative or expressive writing and often carry rhetorical weight. Use them to teach tone, imagery, and varied sentence rhythm.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Thereafter, the village fell silent.</li>
                <li>As twilight deepened, the shadows lengthened.</li>
              </ul>

              <h4 class="font-semibold mt-2">Teaching Tips</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Use literary texts to show how connectors affect pacing and tone.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Emulating literary connectors in everyday writing where they may sound overwrought.</li>
              </ul>
            `;
        default:
          return `<p>No definition available.</p>`;
      }
    case 'position':
      switch (optionValue) {
        case 'initial':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Initial-position connectors begin sentences or clauses and are typically followed by a comma; they help signal transitions or frame the upcoming content. Practice using them to open paragraphs and connect ideas across sentences.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Nevertheless, the policy remained unchanged.</li>
                <li>In contrast, her view was different.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Omitting the pause (comma) after initial connectors, reducing clarity.</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Always consider the natural pause after an initial connector and use a comma accordingly.</li>
              </ul>
            `;
        case 'medial':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Medial connectors appear within a sentence and often require commas to set them off; they can insert contrasts or parenthetical comments. Teach correct punctuation and intonation for medial placement.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>She has, <strong>however</strong>, decided to leave.</li>
                <li>The plan, <strong>in fact</strong>, improved results.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Skipping commas around medial connectors, which makes sentences harder to parse.</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Set medial connectors off with commas to mark their parenthetical function.</li>
              </ul>
            `;
        case 'final':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Final-position connectors occur at the end of clauses or sentences and can act like tags or afterthoughts (e.g., too, as well). Discuss emphasis and informality when using final-position forms.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>I'd like to come, <strong>too</strong>.</li>
                <li>They agreed, <strong>as well</strong>.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Placing final connectors where they seem detached from the main clause.</li>
              </ul>

              <h4 class="font-semibold mt-2">Punctuation Insights</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Use commas to attach short final tags; for emphasis, consider alternative punctuation like a dash.</li>
              </ul>
            `;
        default:
          return `<p>No definition available.</p>`;
      }
    case 'structure':
      switch (optionValue) {
        case 'single_word':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Single-word connectors are compact linking words (e.g., and, but, so) that are easy to place and very common. Teach their basic uses, collocations, and punctuation when connecting clauses.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>We left <strong>and</strong> arrived on time.</li>
                <li>He failed, <strong>so</strong> he studied harder.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Using single-word connectors for complex rhetorical relations better served by multi-word phrases.</li>
              </ul>
            `;
        case 'compound':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Compound connectors are formed from two or more parts and may be hyphenated or fused; they often carry a slightly different register or nuance from single words. Highlight form and stress patterns to students and practice usage in context.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Nevertheless, despite, alongside — observe stress and rhythm.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Misreading compound boundaries and mispronouncing or misplacing stress.</li>
              </ul>
            `;
        case 'multi_word_phrase':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Multi-word phrase connectors are fixed expressions (e.g., on the other hand, as a result) that function as single discourse markers. Teach them as chunks and show how to punctuate and position them within sentences.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <ul class="list-disc list-inside mt-1">
                <li>On the other hand, the plan could be improved.</li>
                <li>As a result, the data were inconclusive.</li>
              </ul>

              <h4 class="font-semibold mt-2">Common Mistakes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Breaking the phrase's internal order or mixing components from different phrases.</li>
              </ul>
            `;
        default:
          return `<p>No definition available.</p>`;
      }
    case 'frequency':
      switch (optionValue) {
        case 'high':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">High-frequency connectors appear often in speech and writing and should be taught early and recycled frequently. They form the core linking vocabulary learners need for fluency.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <p class="mt-1">and, but, so, because</p>

              <h4 class="font-semibold mt-2">Teaching Tips</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Prioritize these in drills and conversation practice for automaticity.</li>
              </ul>
            `;
        case 'medium':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Medium-frequency connectors are common but slightly less automatic; teach them after high-frequency items and provide contextual practice to build confidence.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <p class="mt-1">however, therefore, although</p>

              <h4 class="font-semibold mt-2">Teaching Tips</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Use focused reading tasks to show these connectors in authentic contexts.</li>
              </ul>
            `;
        case 'low':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Low-frequency connectors are rarer, specialized, or stylistic; introduce them selectively for advanced learners and contrast them with more common paraphrases.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <p class="mt-1">notwithstanding, insofar as, ergo</p>

              <h4 class="font-semibold mt-2">Teaching Tips</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Teach selectively with attention to register and rhetorical effect.</li>
              </ul>
            `;
        default:
          return `<p>No definition available.</p>`;
      }
    case 'rhetorical':
      switch (optionValue) {
        case 'argumentation':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Argumentation connectors help structure reasons, evidence, and conclusions in persuasive or analytical texts. Teach how they create logical flow and support claims in essays and debates.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <p class="mt-1">therefore, moreover, consequently</p>

              <h4 class="font-semibold mt-2">Teaching Tips</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Practice building arguments where each connector signals a step in reasoning.</li>
              </ul>
            `;
        case 'narrative':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Narrative connectors order events, show sequence, or indicate simultaneity in storytelling (then, meanwhile, afterwards). Use timeline exercises to practice narrative coherence and smooth transitions.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <p class="mt-1">then, meanwhile, afterwards</p>

              <h4 class="font-semibold mt-2">Teaching Tips</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Use storyboards to show how connectors guide event sequencing.</li>
              </ul>
            `;
        case 'expository':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Expository connectors organize explanation and clarification (for example, in other words, namely). Teach their role in making complex information clear and logically arranged.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <p class="mt-1">for example, in other words, namely</p>

              <h4 class="font-semibold mt-2">Teaching Tips</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Use explanation tasks and paraphrase exercises to practice expository connectors.</li>
              </ul>
            `;
        case 'persuasive':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Persuasive connectors strengthen arguments and guide readers toward a conclusion (therefore, consequently, moreover). Emphasize their use in building cumulative evidence and rhetorical force.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <p class="mt-1">therefore, consequently, moreover</p>

              <h4 class="font-semibold mt-2">Teaching Tips</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Use debates and essay outlines to practice persuasive connector sequencing.</li>
              </ul>
            `;
        default:
          return `<p>No definition available.</p>`;
      }
    case 'origin':
      switch (optionValue) {
        case 'native':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Native connectors are inherited English words that tend to be short and irregular but extremely common (e.g., and, but). They are often the first linking forms learners encounter and are used across registers.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <p class="mt-1">and, but, so</p>

              <h4 class="font-semibold mt-2">Notes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>These are typically taught earliest and reinforced across contexts.</li>
              </ul>
            `;
        case 'latin_french':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Latin/French-origin connectors are borrowings that often sound more formal and are common in academic or written registers (e.g., therefore, moreover). Teach their register and formal punctuation conventions.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <p class="mt-1">therefore, moreover, consequently</p>

              <h4 class="font-semibold mt-2">Notes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>These often require careful punctuation when used to link clauses.</li>
              </ul>
            `;
        case 'hybrid':
          return `
              <h4 class="font-semibold">Definition</h4>
              <p class="mb-2">Hybrid connectors mix elements from different sources or combine morphemes; they may show mixed register or modern coinage. Introduce them with attention to form and context so learners see when they fit stylistically.</p>

              <h4 class="font-semibold mt-2">Examples</h4>
              <p class="mt-1">insofar as, as yet (context-dependent)</p>

              <h4 class="font-semibold mt-2">Notes</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Highlight register and collocation to show natural usage.</li>
              </ul>
            `;
        default:
          return `<p>No definition available.</p>`;
      }
      case 'opinion':
        return `
          <h4 class="font-semibold">Definition</h4>
          <p class="mb-2">${optionLabel} is an opinion connector that signals a personal judgement or point of view. It is useful for framing a claim as a belief rather than a fact.</p>

          <h4 class="font-semibold mt-2">Examples</h4>
          <ul class="list-disc list-inside mt-1">
            <li>${optionLabel}, the answer is clear.</li>
            <li>We should, ${optionLabel.toLowerCase()}, revise the plan.</li>
          </ul>

          <h4 class="font-semibold mt-2">Common Mistakes</h4>
          <ul class="list-disc list-inside mt-1">
            <li>Using opinion language when a factual statement would be stronger.</li>
            <li>Making the sentence too repetitive by pairing several opinion markers together.</li>
          </ul>
        `;
      case 'sequence':
        return `
          <h4 class="font-semibold">Definition</h4>
          <p class="mb-2">${optionLabel} helps order events or steps. It shows what happens before, after, or at the same time as something else.</p>

          <h4 class="font-semibold mt-2">Examples</h4>
          <ul class="list-disc list-inside mt-1">
            <li>${optionLabel}, we checked the answers.</li>
            <li>We packed the bag and, ${optionLabel.toLowerCase()}, left the house.</li>
          </ul>

          <h4 class="font-semibold mt-2">Common Mistakes</h4>
          <ul class="list-disc list-inside mt-1">
            <li>Using a sequence connector when the sentence is actually showing comparison or opinion.</li>
            <li>Mixing the order of events so the timeline becomes unclear.</li>
          </ul>
        `;
      case 'comparison':
        return `
          <h4 class="font-semibold">Definition</h4>
          <p class="mb-2">${optionLabel} is used to compare two ideas, things, or situations. It helps the reader see similarity, difference, or equivalence.</p>

          <h4 class="font-semibold mt-2">Examples</h4>
          <ul class="list-disc list-inside mt-1">
            <li>${optionLabel}, the second option is simpler.</li>
            <li>The first model is fast; ${optionLabel.toLowerCase()}, the second is more accurate.</li>
          </ul>

          <h4 class="font-semibold mt-2">Common Mistakes</h4>
          <ul class="list-disc list-inside mt-1">
            <li>Using a comparison connector where a contrast connector is needed.</li>
            <li>Forgetting what two items are being compared.</li>
          </ul>
        `;
      case 'summary':
        return `
          <h4 class="font-semibold">Definition</h4>
          <p class="mb-2">${optionLabel} introduces a summary, restatement, or final view of the topic. It helps wrap up the idea in fewer words.</p>

          <h4 class="font-semibold mt-2">Examples</h4>
          <ul class="list-disc list-inside mt-1">
            <li>${optionLabel}, the plan is ready.</li>
            <li>We learned the rules and, ${optionLabel.toLowerCase()}, we can practice now.</li>
          </ul>

          <h4 class="font-semibold mt-2">Common Mistakes</h4>
          <ul class="list-disc list-inside mt-1">
            <li>Using a summary connector too early before the idea has been fully developed.</li>
            <li>Repeating the summary phrase without adding new meaning.</li>
          </ul>
        `;
      case 'place':
        return `
          <h4 class="font-semibold">Definition</h4>
          <p class="mb-2">${optionLabel} signals location or spatial relation. It tells the reader where something is, or where something should be placed.</p>

          <h4 class="font-semibold mt-2">Examples</h4>
          <ul class="list-disc list-inside mt-1">
            <li>Put the keys ${optionLabel.toLowerCase()}.</li>
            <li>${optionLabel}, you will see the door.</li>
          </ul>

          <h4 class="font-semibold mt-2">Common Mistakes</h4>
          <ul class="list-disc list-inside mt-1">
            <li>Using a place connector when the sentence actually needs a time or sequence marker.</li>
            <li>Not being specific enough about where something is located.</li>
          </ul>
        `;
    default:
      return `<p>No definition available.</p>`;
  }
}
