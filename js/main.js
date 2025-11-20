const hand = document.querySelector("#hand");
const damp = document.querySelector("#damp");
const salt = document.querySelector("#salt");

const infotext = document.querySelector("#infotext");
const infobox1 = document.querySelector("#efficiency");
const infobox2 = document.querySelector("#requirement");

if (hand) {
  hand.addEventListener("click", handinfo);
  damp.addEventListener("click", dampinfo);
  salt.addEventListener("click", saltinfo);
}

function handinfo() {
  console.log("handinfo");
  infotext.textContent = "Hovedmassage: En naturlig vej til at lette en stoppet næse";
  efficiency.textContent =
    "Hovedmassage kan lindre en stoppet næse, fordi den øger blodcirkulationen omkring pande, kinder og næseryg. Når området bliver bedre gennemblødt, mindskes hævelsen i bihulerne, og trykket kan slippe. Massagen stimulerer også den naturlige drænage, så slim lettere kan bevæge sig væk og give plads i næsepassagerne. Samtidig løsner massagen spændinger i kæbe, pande og tindinger, som ofte forværrer følelsen af tæthed. Når musklerne slapper af, føles næsen ofte mere åben.";
  requirement.textContent =
    "En effektiv hovedmassage mod stoppet næse udføres ved at bruge fingerspidserne til blide, cirklende bevægelser langs næseryggen og på siderne af næsen. Det hjælper at trykke let på området ved øjenbrynets inderside og på kinderne lige under øjnene, hvor mange oplever et hurtigt lettende tryk. Massagen virker endnu bedre, hvis hænderne er varme, eller hvis man starter med en lun klud på området, da varmen gør vævet mere modtageligt og løsner spændinger. Kortvarige massager på et minut eller to, gentaget flere gange om dagen, kan ofte give mærkbar lindring.";
}

function dampinfo() {
  console.log("dampinfo");
  infotext.textContent = "  Damp og varme drikke: En mild og naturlig lettelse for en stoppet næse";
  efficiency.textContent =
    "Damp virker lindrende, fordi den fugter og varmer slimhinderne i næse og bihuler. Når slimhinderne bliver blødere og mindre irriterede, kan hævelsen falde, og luftpassagerne åbner sig nemmere. Den varme fugt hjælper også med at løsne sejt slim, så det lettere kan bevæge sig og frigøre næsen. Mange oplever, at damp giver en hurtig lettelse, fordi den skaber en mere fri og naturlig vejrtrækning.";
  requirement.textContent =
    "Varme drikke som te, varm citronvand eller bouillon giver en indre varme, der virker beroligende på kroppen og kan hjælpe slimhinderne med at slappe af. Når man drikker noget varmt, stiger temperaturen i næse- og halsområdet en smule, hvilket kan løsne slim og gøre det lettere at synke eller hoste op. Samtidig giver varmen ofte en mild, naturlig damp indefra, som yderligere kan lindre følelsen af tæthed. Effekten bliver stærkere, hvis man drikker langsomt og lader varmen arbejde stille og roligt.";
}

function saltinfo() {
  console.log("saltinfo");
  infotext.textContent = "Saltvand: En enkel og effektiv måde at åbne en stoppet næse";
  efficiency.textContent =
    "Saltvand virker beroligende på næsens slimhinder, fordi det genskaber den naturlige fugtbalance og reducerer irritation. Når slimhinderne bliver fugtige igen, svulmer de mindre op, og der bliver mere plads i næsepassagerne. Saltvandet hjælper også med at løsne det slim, der sidder fast, så næsen kan renses mere effektivt. Mange oplever, at vejrtrækningen bliver friere næsten med det samme, fordi saltvandet skaber bedre forhold i hele næsehulen.";
  requirement.textContent =
    "Når man skyller næsen med en saltvandsopløsning, strømmer væsken gennem næseborene og vasker støv, allergener, bakterier og overskydende slim væk. Den mekaniske gennemskylning gør, at næsen føles renere og mindre tilstoppet. Effekten kan være både akut lindrende og forebyggende, hvis man bruger saltvand jævnligt. Selv en simpel spray eller pipette kan skabe en tydelig følelse af lettelse, fordi næsen igen får mulighed for at fungere naturligt og frit.";
}

const root = document.querySelector("html");
const btn = document.querySelector("#toggle");

function toggleDarkMode() {
  root.classList.toggle("dark");
}

btn.addEventListener("click", toggleDarkMode);
