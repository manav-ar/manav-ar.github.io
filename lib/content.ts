export const hero = {
  eyebrow: 'Manav Arora · data scientist',
  headline: ["I build systems that know", "when they're "],
  headlineEm: 'wrong',
  credentials: 'Data scientist, 2 yrs at PwC. MS Georgetown. CompSci NTU. IEEE-published.',
  claimText: 'thousands of grant applications',
  claimNote: 'Fraud detection pipeline, PwC Risk Services. Every grant application entering review, 2022\u201324. Manual review time cut 50%.',
  stats: [
    { n: '96', suf: '%', l: 'herald accuracy' },
    { n: '23', suf: '%', l: 'of baseline cost' },
    { n: '4.0', suf: '', l: 'georgetown gpa' },
    { n: '1', suf: '', l: 'ieee paper' },
  ],
};

export const HERALD_URL = 'https://github.com/manav-ar/HERALD';

export const tiers = [
  { n: 'TIER 1', t: 'Local NLI', m: 'DeBERTa · free', bg: '#F5EFE3', fg: '#8A6A3A', tc: '#3A2E1C' },
  { n: 'TIER 2', t: 'LLM judge', m: 'GPT-4o · Claude', bg: '#EFDFC4', fg: '#8A6A3A', tc: '#3A2E1C' },
  { n: 'TIER 3', t: 'Agent debate', m: '3 personas', bg: '#E5C79A', fg: '#7A5A2A', tc: '#3A2E1C' },
  { n: 'TIER 4', t: 'Human review', m: '4–10% of claims', bg: '#C4622D', fg: '#F0CDB6', tc: '#FDF6F0' },
];

export type Entry = { t: string; d: string; tags: string[]; links: { l: string; h: string }[]; meta?: string };
export type Group = { g: string; items: Entry[] };

const gh = (r: string) => `https://github.com/manav-ar/${r}`;
// direct file on GitHub's viewer. FILE must be URL-encoded (spaces -> %20).
const blob = (r: string, f: string) => `https://github.com/manav-ar/${r}/blob/main/${f}`;

export const archive: Group[] = [
  { g: 'Computer vision', items: [
    { t: 'Simultaneous Classification Using Facial Images', d: 'Multi-task CNN predicting age, gender, emotion, and ethnicity from one shared representation.', tags: ['vision','paper'], links: [{l:'Paper',h:blob('Simultaneous-Classification-Using-Facial-Images','4042_Report.pdf')},{l:'Code',h:gh('Simultaneous-Classification-Using-Facial-Images')}], meta: 'pytorch, multi-task learning' },
    { t: 'Deep Learning for Computer Chess', d: 'DeepChess and Giraffe architectures for position evaluation, with supervised and unsupervised feature extraction. URECA research award.', tags: ['vision','paper'], links: [{l:'Report',h:'assets/decks/chess_final_report.pdf'},{l:'Slides',h:'assets/decks/chess_slides.pdf'},{l:'Poster',h:'assets/decks/chess_poster.pdf'},{l:'Code',h:gh('Deep-Learning-for-Computer-Chess')}] },
  ]},
  { g: 'NLP & retrieval', items: [
    { t: 'News Retrieval Engine', d: 'BM25 and LDA over GDELT to measure how tone and framing shift across outlets covering the same conflict.', tags: ['nlp'], links: [{l:'Code',h:gh('News-Retrieval-Engine')}], meta: 'information retrieval, topic modelling' },
    { t: 'COVID Vaccine Sentiment Analysis', d: 'End-to-end pipeline from scraping to classification to a query interface, on public vaccine discourse.', tags: ['nlp','paper'], links: [{l:'Slides',h:'assets/decks/covid_sentiment_slides.pdf'},{l:'Code',h:gh('COVID-Vaccine-Sentiment-Analysis')}] },
    { t: 'End-to-end NLP', d: 'Neural architectures through to named entity recognition, built from the ground up rather than from libraries.', tags: ['nlp','paper'], links: [{l:'Report',h:blob('End-to-end-NLP','CZ4045_Assignment_1.pdf')},{l:'Code',h:gh('End-to-end-NLP')}] },
    { t: 'AI Anxiety in Online Communities', d: 'Several hundred million Reddit records on a Spark cluster, tracking when AI worry left tech forums for mainstream career subreddits.', tags: ['nlp','paper'], links: [{l:'Report site',h:gh('AI-Anxiety-in-Online-Communities')},{l:'Code',h:gh('AI-Anxiety-in-Online-Communities')}], meta: 'spark on ec2, athena' },
  ]},
  { g: 'Forecasting & time series', items: [
    { t: 'Store Item Demand Forecasting', d: 'Statistical, tree-based, and neural approaches compared across multi-store retail demand.', tags: ['forecasting','paper'], links: [{l:'Slides',h:'assets/decks/demand_forecasting_slides.pdf'},{l:'Code',h:gh('Store-Item-Demand-Forecasting')}] },
    { t: 'VaR Portfolio Risk Analysis', d: 'Interactive value-at-risk tooling for portfolio construction and live risk visualisation.', tags: ['forecasting','paper'], links: [{l:'Report',h:blob('VaR-Portfolio-Risk-Analysis','Project%20Report.pdf')},{l:'Code',h:gh('VaR-Portfolio-Risk-Analysis')}], meta: 'quantitative finance' },
  ]},
  { g: 'Policy & causal analysis', items: [
    { t: 'Hospital ER Loads', d: 'Predicting emergency department wait times, then auditing where the model performs worse by race and income.', tags: ['policy','paper'], links: [{l:'Poster',h:'assets/misc/er_poster.jpg'},{l:'Code',h:gh('Hospital-ER-Loads-US')}], meta: 'fairness diagnostics' },
    { t: 'Assessing Socioeconomic Factors on Homeownership', d: 'Hypothesis testing across US homeownership rates, with a full write-up and bibliography.', tags: ['policy','paper'], links: [{l:'Report',h:blob('Assessing-Socioeconomic-Factors-on-Homeownership','report.pdf')},{l:'Code',h:gh('Assessing-Socioeconomic-Factors-on-Homeownership')}] },
    { t: 'Educational Impact on Earning Potential', d: 'College Scorecard data on how tuition, retention, and institutional spend track against graduate earnings.', tags: ['policy','paper'], links: [{l:'Report site',h:gh('Educational-Impact-on-Earning-Potential-and-Job-Opportunities')},{l:'Code',h:gh('Educational-Impact-on-Earning-Potential-and-Job-Opportunities')}] },
    { t: 'Global Energy Consumption', d: 'How developing and developed economies differ in energy mix, and whether emissions are decoupling from GDP.', tags: ['policy','paper'], links: [{l:'Report site',h:gh('Global-Energy-Consumption-Dashboard')},{l:'Code',h:gh('Global-Energy-Consumption-Dashboard')}] },
    { t: 'Global Security Incidents', d: 'Multi-page Dash application mapping attacks on humanitarian operations, with survivor accounts alongside the data.', tags: ['policy'], links: [{l:'Code',h:gh('Global-Security-Incidents-Overview')}], meta: 'dash, plotly' },
  ]},
  { g: 'Systems & software engineering', items: [
    { t: 'On-Campus Social Network', d: 'Full Agile lifecycle across five sprints: requirements, quality plan, risk register, test coverage, release plan.', tags: ['systems','paper'], links: [{l:'Docs',h:gh('On-Campus_Social-Network')},{l:'Code',h:gh('On-Campus_Social-Network')}] },
    { t: 'Currency Exchange Locator', d: 'Consolidating scattered exchange-rate information into a single comparison tool. Full design documentation.', tags: ['systems','paper'], links: [{l:'Slides',h:'assets/decks/currency_locator_slides.pdf'},{l:'Code',h:gh('Currency-Exchange-Locator')}] },
  ]},
];

export const filters = [
  { k: 'all', label: 'all 15' },
  { k: 'nlp', label: 'nlp / retrieval' },
  { k: 'vision', label: 'vision' },
  { k: 'forecasting', label: 'forecasting' },
  { k: 'policy', label: 'policy / causal' },
  { k: 'systems', label: 'systems' },
  { k: 'paper', label: 'has paper 13' },
];

export const roles = [
  { yr: '2022\u20132024', t: 'Associate, Data Scientist', o: 'PwC Risk Services · Singapore',
    d: 'Fraud detection across thousands of grant applications. NLP regulatory analytics for every company listed on the Singapore Exchange.' },
  { yr: '2021\u20132022', t: 'AI Research Intern', o: 'Envision Digital · Singapore',
    d: 'Predictive maintenance for solar assets. LSTM, CNN, TadGAN. One IEEE paper.' },
  { yr: '2020', t: 'Applied AI Engineering Intern', o: 'Seagate Technology · Singapore',
    d: 'Distributed edge inference on computational storage. 262% throughput over baseline.' },
];
