dataSetVersion = "2021-05-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Season",
    key: "season",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Season 1", key: "s1" },
      { name: "Season 2", key: "s2" },
      { name: "Season 3", key: "s3" },
      { name: "Season 4", key: "s4" },
      { name: "Season 5", key: "s5" },
      { name: "Season 6", key: "s6" },
      { name: "Season 7", key: "s7" },
      { name: "Season 8", key: "s8" },
      { name: "Season 9", key: "s9" },
      { name: "Season 10", key: "s10" },
      { name: "Season 11", tooltip: "MasterChef - Legends", key: "s11" },
      { name: "Season 12", tooltip: "MasterChef - Back To Win", key: "s12" },
      { name: "Season 13", tooltip: "MasterChef - United Tastes Of America", key: "s13" },
      { name: "Season 14", tooltip: "MasterChef - Generations", key: "s14" },
      //{ name: "Season 15", tooltip: "MasterChef - Duos", key: "s15" }, 
    ]
  },
  {
    name: "Filter by Placement",
    key: "placement",
    tooltip: "Check this to include all contestants regardless of placement",
    checked: false,
    sub: [ 
        { name: "Winner", key: "p1" }, 
        { name: "Runner-Up", key: "p2" }, 
        { name: "3rd Place", key: "p3" }, 
        { name: "4th Place", key: "p4" }, 
        { name: "5th Place", key: "p5" },
        { name: "6th Place", key: "p6" },
        { name: "7th Place", key: "p7" },
        { name: "8th Place", key: "p8" },
        { name: "9th Place", key: "p9" },
        { name: "10th Place", key: "p10" },
        { name: "11th Place", key: "p11" },
        { name: "12th Place", key: "p12" },
        { name: "13th Place", key: "p13" },
        { name: "14th Place", key: "p14" },
        { name: "15th Place", key: "p15" },
        { name: "16th Place", key: "p16" },
        { name: "17th Place", key: "p17" },
        { name: "18th Place", key: "p18" },
        { name: "19th Place", key: "p19" },
        { name: "20th Place", key: "p20" },
        { name: "21st Place", key: "p21" },
        { name: "22nd Place", key: "p22" },
        { name: "23rd Place", key: "p23" },
    ]
  },
  {
    name: "Exclude Male Contestants",
    key: "male",
    tooltip: "Check this to remove all Male contestants from the pool.",
    checked: false
  },
  {
    name: "Exclude Female Contestants",
    key: "female",
    tooltip: "Check this to remove all Female contestants from the pool.",
    checked: false
  },
  {
    name: "Exclude Juniors",
    key: "junior",
    tooltip: "Check this to remove contestants who were previously on MasterChef Junior (literally just Dara & Shayne).",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
/* Template

{ name: "",
  img: "",
  opts: {
  season: ["s"],
  placement: ["p"],
  male: true, }
},

*/
{ name: "Whitney Miller",
  img: "01-01) Whitney Miller.jpg",
  opts: {
  season: ["s1"],
  placement: ["p1"],
  female: true }
},
{ name: "David Miller",
  img: "01-02) David Miller.jpg",
  opts: {
  season: ["s1"],
  placement: ["p2"],
  male: true, }
},
{ name: "Lee Knaz",
  img: "01-03) Lee Knaz.jpg",
  opts: {
  season: ["s1"],
  placement: ["p3"],
  male: true, }
},
{ name: "Sheetal Bhagat",
  img: "01-04) Sheetal Bhagat.jpg",
  opts: {
  season: ["s1"],
  placement: ["p4"],
  female: true, }
},
{ name: "Sharone Hakman",
  img: "01-05) Sharone Hakman.jpg",
  opts: {
  season: ["s1"],
  placement: ["p5"],
  male: true, }
},
{ name: "Mike Kim",
  img: "01-06) Mike Kim.jpg",
  opts: {
  season: ["s1"],
  placement: ["p6"],
  male: true, }
},
{ name: "Jake Gandolfo",
  img: "01-07) Jake Gandolfo.jpg",
  opts: {
  season: ["s1"],
  placement: ["p7"],
  male: true, }
},
{ name: "Tracy Nailor",
  img: "01-07) Tracy Nailor.jpg",
  opts: {
  season: ["s1"],
  placement: ["p7"],
  female: true, }
},
{ name: "Slim Huynh",
  img: "01-09) Slim Huynh.jpg",
  opts: {
  season: ["s1"],
  placement: ["p9"],
  female: true, }
},
{ name: "Tony Carbone",
  img: "01-10) Tony Carbone.jpg",
  opts: {
  season: ["s1"],
  placement: ["p10"],
  male: true, }
},
{ name: "Faruq Jenkins",
  img: "01-11) Faruq Jenkins.jpg",
  opts: {
  season: ["s1"],
  placement: ["p11"],
  male: true, }
},
{ name: "Jenna Hamiter",
  img: "01-12) Jenna Hamiter.jpg",
  opts: {
  season: ["s1"],
  placement: ["p12"],
  female: true, }
},
{ name: "Avis White",
  img: "01-13) Avis White.jpg",
  opts: {
  season: ["s1"],
  placement: ["p13"],
  female: true, }
},
{ name: "Sheena Zadeh",
  img: "01-13) Sheena Zadeh.jpg",
  opts: {
  season: ["s1"],
  placement: ["p13"],
  female: true, }
},
{ name: "Jennifer Behm",
  img: "02-01) Jennifer Behm.jpg",
  opts: {
  season: ["s2"],
  placement: ["p1"],
  female: true, }
},
{ name: "Adrien Nieto",
  img: "02-02) Adrien Nieto.jpg",
  opts: {
  season: ["s2"],
  placement: ["p2"],
  male: true, }
},
{ name: "Christian Collins",
  img: "02-03) Christian Collins.jpg",
  opts: {
  season: ["s2"],
  placement: ["p3"],
  male: true, }
},
{ name: "Suzy Singh",
  img: "02-04) Suzy Singh.jpg",
  opts: {
  season: ["s2"],
  placement: ["p4"],
  female: true, }
},
{ name: "Ben Starr",
  img: "02-05) Ben Starr.jpg",
  opts: {
  season: ["s2"],
  placement: ["p5"],
  male: true, }
},
{ name: "Tracy Kontos",
  img: "02-06) Tracy Kontos.jpg",
  opts: {
  season: ["s2"],
  placement: ["p6"],
  female: true, }
},
{ name: "Christine Corley",
  img: "02-07) Christine Corley.jpg",
  opts: {
  season: ["s2"],
  placement: ["p7"],
  female: true, }
},
{ name: "Derrick Prince",
  img: "02-07) Derrick Prince.jpg",
  opts: {
  season: ["s2"],
  placement: ["p7"],
  male: true, }
},
{ name: "Alejandra Schrader",
  img: "02-09) Alejandra Schrader.jpg",
  opts: {
  season: ["s2"],
  placement: ["p9"],
  female: true, }
},
{ name: "Giuseppe Morisco",
  img: "02-10) Guiseppe Morisco.jpg",
  opts: {
  season: ["s2"],
  placement: ["p10"],
  male: true, }
},
{ name: "Erryn Cobb",
  img: "02-11) Erryn Cobb.jpg",
  opts: {
  season: ["s2"],
  placement: ["p11"],
  male: true, }
},
{ name: "Esther Kang",
  img: "02-12) Esther Kang.jpg",
  opts: {
  season: ["s2"],
  placement: ["p12"],
  female: true, }
},
{ name: "Jennie Kelley",
  img: "02-13) Jennie Kelley.jpg",
  opts: {
  season: ["s2"],
  placement: ["p13"],
  female: true, }
},
{ name: "Max Kramer",
  img: "02-14) Max Kramer.jpg",
  opts: {
  season: ["s2"],
  placement: ["p14"],
  male: true, }
},
{ name: "Alvin Schultz",
  img: "02-15) Alvin Schultz.jpg",
  opts: {
  season: ["s2"],
  placement: ["p15"],
  male: true, }
},
{ name: "Tony Scruggs",
  img: "02-16) Tony Scruggs.jpg",
  opts: {
  season: ["s2"],
  placement: ["p16"],
  male: true, }
},
{ name: "Angel Moore-Soukkay",
  img: "02-17) Angel Moore-Soukkay.jpg",
  opts: {
  season: ["s2"],
  placement: ["p17"],
  female: true, }
},
{ name: "Mark Raffaeli",
  img: "02-17) Mark Raffaeli.jpg",
  opts: {
  season: ["s2"],
  placement: ["p17"],
  male: true, }
},
{ name: "Christine Ha",
  img: "03-01) Christine_Ha.jpg",
  opts: {
  season: ["s3"],
  placement: ["p1"],
  female: true, }
},
{ name: "Josh Marks",
  img: "03-02) Josh_Marks.jpg",
  opts: {
  season: ["s3"],
  placement: ["p2"],
  male: true, }
},
{ name: "Becky Reams",
  img: "03-03) Becky-Reams.jpg",
  opts: {
  season: ["s3"],
  placement: ["p3"],
  female: true, }
},
{ name: "Frank Mirando",
  img: "03-04) Frank_Mirando.jpg",
  opts: {
  season: ["s3"],
  placement: ["p4"],
  male: true, }
},
{ name: "Monti Carlo",
  img: "03-05) Monti_Carlo.jpg",
  opts: {
  season: ["s3"],
  placement: ["p5"],
  female: true, }
},
{ name: "David Martinez",
  img: "03-06) David_Martinez.jpg",
  opts: {
  season: ["s3"],
  placement: ["p6"],
  male: true, }
},
{ name: "Felix Fang",
  img: "03-07) Felix_Fang.jpg",
  opts: {
  season: ["s3"],
  placement: ["p7"],
  female: true, }
},
{ name: "Stacy Amagrande",
  img: "03-08) Stacey-Amagrande.jpg",
  opts: {
  season: ["s3"],
  placement: ["p8"],
  female: true, }
},
{ name: "Tali Clavijo",
  img: "03-09) Tali-Clavijo.jpg",
  opts: {
  season: ["s3"],
  placement: ["p9"],
  male: true, }
},
{ name: "Tanya Noble",
  img: "03-10) Tanya_Noble.jpg",
  opts: {
  season: ["s3"],
  placement: ["p10"],
  female: true, }
},
{ name: "Mike Hill",
  img: "03-11) Mike-Hill.jpg",
  opts: {
  season: ["s3"],
  placement: ["p10"],
  male: true, }
},
{ name: "Anna Rossi",
  img: "03-12) Anna-Rossi.jpg",
  opts: {
  season: ["s3"],
  placement: ["p12"],
  female: true, }
},
{ name: "Scott Little",
  img: "03-13) Scott-Little.jpg",
  opts: {
  season: ["s3"],
  placement: ["p13"],
  male: true, }
},
{ name: "Ryan Umane",
  img: "03-14) Ryan-Umane.jpg",
  opts: {
  season: ["s3"],
  placement: ["p14"],
  male: true, }
},
{ name: "Helene Leeds",
  img: "03-15) Helene-Leeds.jpg",
  opts: {
  season: ["s3"],
  placement: ["p15"],
  female: true, }
},
{ name: "Michael Chen",
  img: "03-16) Michael_Chen.jpg",
  opts: {
  season: ["s3"],
  placement: ["p16"],
  male: true, }
},
{ name: "Dave Mack",
  img: "03-17) Dave_Mack.jpg",
  opts: {
  season: ["s3"],
  placement: ["p17"],
  male: true, }
},
{ name: "Samantha De Silva",
  img: "03-18) Samantha-De-Silva.jpg",
  opts: {
  season: ["s3"],
  placement: ["p18"],
  female: true, }
},
{ name: "Luca Manfe",
  img: "04-01) Luca_Manfe.jpg",
  opts: {
  season: ["s4"],
  placement: ["p1"],
  male: true, }
},
{ name: "Natasha Crnjac",
  img: "04-02) Natasha_Crnjac.jpg",
  opts: {
  season: ["s4"],
  placement: ["p2"],
  female: true, }
},
{ name: "Jessie Lysiak",
  img: "04-03) Jessie_Lysiak.jpg",
  opts: {
  season: ["s4"],
  placement: ["p3"],
  female: true, }
},
{ name: "Krissi Biasiello",
  img: "04-04) Krissi_Biasiello.jpg",
  opts: {
  season: ["s4"],
  placement: ["p4"],
  female: true, }
},
{ name: "James Nelson",
  img: "04-05) James-Nelson.jpg",
  opts: {
  season: ["s4"],
  placement: ["p5"],
  male: true, }
},
{ name: "Bri Kozior",
  img: "04-06) Bri_Kozior.jpg",
  opts: {
  season: ["s4"],
  placement: ["p6"],
  female: true, }
},
{ name: "Jordan Roots",
  img: "04-07) Jordan_Roots.jpg",
  opts: {
  season: ["s4"],
  placement: ["p7"],
  male: true, }
},
{ name: "Eddie Jackson",
  img: "04-08) Eddie-Jackson.jpg",
  opts: {
  season: ["s4"],
  placement: ["p8"],
  male: true, }
},
{ name: "Bethy Rossos",
  img: "04-09) Bethy-Rossos.jpg",
  opts: {
  season: ["s4"],
  placement: ["p9"],
  female: true, }
},
{ name: "Lynn Chyi",
  img: "04-10) Lynn_Chyi.jpg",
  opts: {
  season: ["s4"],
  placement: ["p10"],
  male: true, }
},
{ name: "Savannah Sturges",
  img: "04-11) Savannah-Sturges.jpg",
  opts: {
  season: ["s4"],
  placement: ["p11"],
  female: true, }
},
{ name: "Jonny Blanchard",
  img: "04-12) Jonny_Blanchard.jpg",
  opts: {
  season: ["s4"],
  placement: ["p12"],
  male: true, }
},
{ name: "Beth Kirby",
  img: "04-13) Beth_Kirby.jpg",
  opts: {
  season: ["s4"],
  placement: ["p13"],
  female: true, }
},
{ name: "Bime Cruz",
  img: "04-14) Bime_Cruz.jpg",
  opts: {
  season: ["s4"],
  placement: ["p14"],
  male: true, }
},
{ name: "Howard Simpson",
  img: "04-15) Howard_Simpson.jpg",
  opts: {
  season: ["s4"],
  placement: ["p15"],
  male: true, }
},
{ name: "Kathy Prieto",
  img: "04-16) Kathleen-Kathy-Prieto.jpg",
  opts: {
  season: ["s4"],
  placement: ["p16"],
  female: true, }
},
{ name: "Malcolm Green",
  img: "04-17) Malcolm_Green.jpg",
  opts: {
  season: ["s4"],
  placement: ["p17"],
  male: true, }
},
{ name: "Adriana Guillen",
  img: "04-18) Adriana_Guillen.jpg",
  opts: {
  season: ["s4"],
  placement: ["p18"],
  female: true, }
},
{ name: "Sasha Foxx",
  img: "04-19) Sasha-Foxx.jpg",
  opts: { 
  season: ["s4"],
  placement: ["p19"],
  female: true, }
},
{ name: "Courtney Lapresi",
  img: "05-01) Courtney Lapresi.jpg",
  opts: {
  season: ["s5"],
  placement: ["p1"],
  female: true, }
},
{ name: "Elizabeth Cauvel",
  img: "05-02) Elizabeth Cauvel.jpg",
  opts: {
  season: ["s5"],
  placement: ["p2"],
  female: true, }
},
{ name: "Leslie Gilliams",
  img: "05-03) Leslie Gilliams.jpg",
  opts: {
  season: ["s5"],
  placement: ["p3"],
  male: true, }
},
{ name: "Cutter Brewer",
  img: "05-04) Cutter Brewer.jpg",
  opts: {
  season: ["s5"],
  placement: ["p4"],
  male: true, }
},
{ name: "Christian Green",
  img: "05-05) Christian Green.jpg",
  opts: {
  season: ["s5", "s12"],
  placement: ["p5", "p2"],
  male: true, }
},
{ name: "Jaimee Vitolo",
  img: "05-06) Jaimee Vitolo.jpg",
  opts: {
  season: ["s5"],
  placement: ["p6"],
  female: true, }
},
{ name: "Willie Mike",
  img: "05-07) Willie Mike.jpg",
  opts: {
  season: ["s5", "s12"],
  placement: ["p7", "p6"],
  male: true, }
},
{ name: "Daniel McGuffey",
  img: "05-08) Daniel McGuffey.jpg",
  opts: {
  season: ["s5"],
  placement: ["p8"],
  male: true, }
},
{ name: "Ahran Cho",
  img: "05-09) Ahran Cho.jpg",
  opts: {
  season: ["s5"],
  placement: ["p9"],
  female: true, }
},
{ name: "Victoria Scroggins",
  img: "05-10) Victoria Scroggins.jpg",
  opts: {
  season: ["s5"],
  placement: ["p10"],
  female: true, }
},
{ name: "Francis Legge",
  img: "05-11) Francis Legge.jpg",
  opts: {
  season: ["s5"],
  placement: ["p11"],
  male: true, }
},
{ name: "Christine Silverstein",
  img: "05-12) Christine Silverstein.jpg",
  opts: {
  season: ["s5"],
  placement: ["p12"],
  female: true, }
},
{ name: "Elise Mayfield",
  img: "05-13) Elise Mayfield.jpg",
  opts: {
  season: ["s5"],
  placement: ["p13"],
  female: true, }
},
{ name: "Dan Wu",
  img: "05-14) Dan Wu.jpg",
  opts: {
  season: ["s5"],
  placement: ["p14"],
  male: true, }
},
{ name: "Francis Biondi",
  img: "05-15) Francis Biondi.jpg",
  opts: {
  season: ["s5"],
  placement: ["p15"],
  male: true, }
},
{ name: "Tyler Viars",
  img: "05-16) Tyler Viars.jpg",
  opts: {
  season: ["s5"],
  placement: ["p16"],
  male: true, }
},
{ name: "Jordan Kaminski",
  img: "05-17) Jordan Kaminski.jpg",
  opts: {
  season: ["s5"],
  placement: ["p17"],
  male: true, }
},
{ name: "Kira Novak",
  img: "05-18) Kira Novak.jpg",
  opts: {
  season: ["s5"],
  placement: ["p18"],
  female: true, }
},
{ name: "Gordan Houston",
  img: "05-19) Gordan Houston.jpg",
  opts: {
  season: ["s5"],
  placement: ["p19"],
  male: true, }
},
{ name: "Stephani Syfax-Shepherd",
  img: "05-20) Stephani Syfax-Shepherd.jpg",
  opts: {
  season: ["s5"],
  placement: ["p20"],
  female: true, }
},
{ name: "Whitney Bray",
  img: "05-21) Whitney Bray.jpg",
  opts: {
  season: ["s5"],
  placement: ["p21"],
  female: true, }
},
{ name: "Astrid Lavenia",
  img: "05-22) Astrid Lavenia.jpg",
  opts: {
  season: ["s5"],
  placement: ["p22"],
  female: true, }
},
{ name: "Claudia Sandoval",
  img: "06-01) Claudia_Sandoval.jpg",
  opts: {
  season: ["s6"],
  placement: ["p1"],
  female: true, }
},
{ name: "Derrick Fox",
  img: "06-02) Derrick_Peltz.jpg",
  opts: {
  season: ["s6", "s12"],
  placement: ["p2", "p7"],
  male: true, }
},
{ name: "Stephen Lee",
  img: "06-03) Stephen_Lee.jpg",
  opts: {
  season: ["s6", "s12"],
  placement: ["p3", "p20"],
  male: true, }
},
{ name: "Nick Nappi",
  img: "06-04) Nick_Nappi.jpg",
  opts: {
  season: ["s6"],
  placement: ["p4"],
  male: true, }
},
{ name: "Katrina Kozar",
  img: "06-05) Katrina_Kozar.jpg",
  opts: {
  season: ["s6"],
  placement: ["p5"],
  female: true, }
},
{ name: "Hetal Vasavada",
  img: "06-06) Hetal_Vasavada.jpg",
  opts: {
  season: ["s6"],
  placement: ["p6"],
  female: true, }
},
{ name: "Tommy Walton",
  img: "06-07) Tommy_Walton.jpg",
  opts: {
  season: ["s6", "s12"],
  placement: ["p7", "p15"],
  male: true, }
},
{ name: "Olivia Crouppen",
  img: "06-08) Olivia_Crouppen.jpg",
  opts: {
  season: ["s6"],
  placement: ["p8"],
  female: true, }
},
{ name: "Shelly Flash",
  img: "06-09) Shelly-Flash.jpg",
  opts: {
  season: ["s6", "s12"],
  placement: ["p9", "p14"],
  female: true, }
},
{ name: "Christopher Lu",
  img: "06-10) Christopher_Lu.jpg",
  opts: {
  season: ["s6"],
  placement: ["p10"],
  male: true, }
},
{ name: "Sara Zacek",
  img: "06-11) Sara-Zacek.jpg",
  opts: {
  season: ["s6"],
  placement: ["p11"],
  female: true, }
},
{ name: "Kerry Prince",
  img: "06-12) Kerry_Prince.jpg",
  opts: {
  season: ["s6"],
  placement: ["p12"],
  male: true, }
},
{ name: "Amanda Saab",
  img: "06-13) Amanda_Saab.jpg",
  opts: {
  season: ["s6", "s12"],
  placement: ["p13", "p7"],
  female: true, }
},
{ name: "Charlie Chapman",
  img: "06-13) Charlie-Chapman.jpg",
  opts: {
  season: ["s6"],
  placement: ["p13"],
  male: true, }
},
{ name: "Jesse Romero",
  img: "06-15) Jesse_Romero.jpg",
  opts: {
  season: ["s6"],
  placement: ["p15"],
  male: true, }
},
{ name: "Veronica Cili",
  img: "06-16) Veronica_Cili.jpg",
  opts: {
  season: ["s6"],
  placement: ["p16"],
  female: true, }
},
{ name: "Ailsa von Dobeneck",
  img: "06-17) Ailsa-von-Dobeneck.jpg",
  opts: {
  season: ["s6"],
  placement: ["p17"],
  female: true, }
},
{ name: "Dan Collado",
  img: "06-18) Dan_Collado.jpg",
  opts: {
  season: ["s6"],
  placement: ["p18"],
  male: true, }
},
{ name: "Justin Banister",
  img: "06-19) Justin_Banister.jpg",
  opts: {
  season: ["s6"],
  placement: ["p19"],
  male: true, }
},
{ name: "Darah Carattini",
  img: "06-20) Darah_Carattini.jpg",
  opts: {
  season: ["s6"],
  placement: ["p20"],
  female: true, }
},
{ name: "Brianna Watson",
  img: "06-21) Brianna-Watson.jpg",
  opts: {
  season: ["s6"],
  placement: ["p21"],
  female: true, }
},
{ name: "Mateo McConnell",
  img: "06-21) Mateo-McConnell.jpg",
  opts: {
  season: ["s6"],
  placement: ["p21"],
  male: true, }
},
{ name: "Shaun O'Neale",
  img: "07-01) Shaun O'Neale.jpg",
  opts: {
  season: ["s7"],
  placement: ["p1"],
  male: true, }
},
{ name: "Brandi Mudd",
  img: "07-02) Brandi Mudd.jpg",
  opts: {
  season: ["s7", "s12"],
  placement: ["p2", "p10"],
  female: true, }
},
{ name: "David Williams",
  img: "07-03) David Williams.jpg",
  opts: {
  season: ["s7"],
  placement: ["p2"],
  male: true, }
},
{ name: "Tannoria Askew",
  img: "07-04) Tannoria Askew.jpg",
  opts: {
  season: ["s7"],
  placement: ["p4"],
  female: true, }
},
{ name: "Dan Paustian",
  img: "07-05) Dan Paustian.jpg",
  opts: {
  season: ["s7"],
  placement: ["p5"],
  male: true, }
},
{ name: "Katie Dixon",
  img: "07-06) Katie Dixon.jpg",
  opts: {
  season: ["s7"],
  placement: ["p6"],
  female: true, }
},
{ name: "Nathan Barnhouse",
  img: "07-07) Nathan Barnhouse.jpg",
  opts: {
  season: ["s7"],
  placement: ["p7"],
  male: true, } // they now identify as Non-Binary and uses they/them pronouns
},
{ name: "Eric Howard",
  img: "07-08) Eric Howard.jpg",
  opts: {
  season: ["s7"],
  placement: ["p8"],
  male: true, }
},
{ name: "Terry Mueller",
  img: "07-09) Terry Mueller.jpg",
  opts: {
  season: ["s7"],
  placement: ["p9"],
  male: true, }
},
{ name: "Diamond Alexander",
  img: "07-10) Diamond Alexander.jpg",
  opts: {
  season: ["s7"],
  placement: ["p10"],
  female: true, }
},
{ name: "Andrea Galan",
  img: "07-11) Andrea Galan.jpg",
  opts: {
  season: ["s7"],
  placement: ["p11"],
  female: true, }
},
{ name: "Alejandro Toro",
  img: "07-12) Alejandro Toro.jpg",
  opts: {
  season: ["s7"],
  placement: ["p12"],
  male: true, }
},
{ name: "D'Andre Balaoing",
  img: "07-13) D'Andre Balaoing.jpg",
  opts: {
  season: ["s7"],
  placement: ["p13"],
  male: true, }
},
{ name: "Diana Bilow",
  img: "07-13) Diana Bilow.jpg",
  opts: {
  season: ["s7"],
  placement: ["p13"],
  female: true, }
},
{ name: "Manny Washington",
  img: "07-15) Manny Washington.jpg",
  opts: {
  season: ["s7"],
  placement: ["p15"],
  male: true, }
},
{ name: "Lisa-Ann Marchesi",
  img: "07-16) Lisa-Ann Marchesi.jpg",
  opts: {
  season: ["s7"],
  placement: ["p16"],
  female: true, }
},
{ name: "Brittany Craig",
  img: "07-17) Brittany Craig.jpg",
  opts: {
  season: ["s7"],
  placement: ["p17"],
  female: true, }
},
{ name: "Barbara Savage",
  img: "07-18) Barbara Savage.jpg",
  opts: {
  season: ["s7"],
  placement: ["p18"],
  female: true, }
},
{ name: "Bill Travers",
  img: "07-19) Bill Travers.jpg",
  opts: {
  season: ["s7"],
  placement: ["p19"],
  male: true, }
},
{ name: "Cassie Peterson",
  img: "07-20) Cassie Peterson.jpg",
  opts: {
  season: ["s7"],
  placement: ["p20"],
  female: true, }
},
{ name: "Dino Luciano",
  img: "08-01) Dino_Luciano.jpg",
  opts: {
  season: ["s8"],
  placement: ["p1"],
  male: true, }
},
{ name: "Jason Wang",
  img: "08-02) Jason-Wang.jpg",
  opts: {
  season: ["s8"],
  placement: ["p2"],
  male: true, }
},
{ name: "Eboni Henry",
  img: "08-03) Eboni-Henry.jpg",
  opts: {
  season: ["s8"],
  placement: ["p2"],
  female: true, }
},
{ name: "Cate Meade",
  img: "08-04) Cate-Meade.jpg",
  opts: {
  season: ["s8", "s12"],
  placement: ["p4", "p19"],
  female: true, }
},
{ name: "Jeff Philbin",
  img: "08-05) Jeff_Philbin.jpg",
  opts: {
  season: ["s8"],
  placement: ["p5"],
  male: true, }
},
{ name: "Yachecia Holston",
  img: "08-05) Yachecia-Holston.jpg",
  opts: {
  season: ["s8"],
  placement: ["p5"],
  female: true, }
},
{ name: "Gabriel Lewis",
  img: "08-07) Gabriel-Lewis.jpg",
  opts: {
  season: ["s8", "s12"],
  placement: ["p7", "p12"],
  male: true, }
},
{ name: "Daniel Pontes-Macedo",
  img: "08-08) Daniel-Pontes-Macedo.jpg",
  opts: {
  season: ["s8"],
  placement: ["p8"],
  male: true, }
},
{ name: "Caitlin Jones",
  img: "08-09) Caitlin_Jones.jpg",
  opts: {
  season: ["s8"],
  placement: ["p9"],
  female: true, }
},
{ name: "Adam Wong",
  img: "08-10) Adam_Wong.jpg",
  opts: {
  season: ["s8"],
  placement: ["p10"],
  male: true, }
},
{ name: "Jenny Cavellier",
  img: "08-11) Jenny_Cavellier.jpg",
  opts: {
  season: ["s8"],
  placement: ["p11"],
  female: true, }
},
{ name: "Mike Newton",
  img: "08-12) Mike_Newton.jpg",
  opts: {
  season: ["s8"],
  placement: ["p12"],
  male: true, }
},
{ name: "Reba Billingsley",
  img: "08-13) Reba-Billingsley.jpg",
  opts: {
  season: ["s8"],
  placement: ["p13"],
  female: true, }
},
{ name: "Brien O'Brien",
  img: "08-14) Brien-O-Brien.jpg",
  opts: {
  season: ["s8"],
  placement: ["p14"],
  male: true, }
},
{ name: "Necco Ceresani",
  img: "08-15) Necco-Ceresani.jpg",
  opts: {
  season: ["s8"],
  placement: ["p15"],
  male: true, }
},
{ name: "Jennifer Williams",
  img: "08-16) Jennifer-Williams.jpg",
  opts: {
  season: ["s8"],
  placement: ["p16"],
  female: true, }
},
{ name: "Sam Reoff-Pasarew",
  img: "08-17) Sam-Reiff-Pasarew.jpg",
  opts: {
  season: ["s8"],
  placement: ["p17"],
  male: true, }
},
{ name: "Heather Dombrosky",
  img: "08-18) Heather-Dombrosky.jpg",
  opts: {
  season: ["s8"],
  placement: ["p18"],
  female: true, }
},
{ name: "Paige Jimenez",
  img: "08-19) Paige_Jimenez.jpg",
  opts: {
  season: ["s8"],
  placement: ["p19"],
  female: true, }
},
{ name: "Mark Togni",
  img: "08-20) Mark_Togni.jpg",
  opts: {
  season: ["s8"],
  placement: ["p20"],
  male: true, }
},
{ name: "Gerron Hurt",
  img: "09-01) Gerron_Hurt.jpg",
  opts: {
  season: ["s9"],
  placement: ["p1"],
  male: true, }
},
{ name: "Ashley Mincey",
  img: "09-02) Ashley-Mincey.jpg",
  opts: {
  season: ["s9"],
  placement: ["p2"],
  female: true, }
},
{ name: "Cesar Cano",
  img: "09-03) Cesar_Cano.jpg",
  opts: {
  season: ["s9"],
  placement: ["p2"],
  male: true, }
},
{ name: "Samantha Daily",
  img: "09-04) Samantha_Daily.jpg",
  opts: {
  season: ["s9", "s12"],
  placement: ["p4", "p17"],
  female: true, }
},
{ name: "Bowen Li",
  img: "09-05) Bowen-Li.jpg",
  opts: {
  season: ["s9", "s12"],
  placement: ["p5", "p9"],
  male: true, }
},
{ name: "Farhan Momin",
  img: "09-06) Farhan_Momin.jpg",
  opts: {
  season: ["s9"],
  placement: ["p6"],
  male: true, }
},
{ name: "Julia Danno",
  img: "09-07) Julia-Danno.jpg",
  opts: {
  season: ["s9"],
  placement: ["p7"],
  female: true, }
},
{ name: "Shanika Patterson",
  img: "09-08) Shanika-Patterson.jpg",
  opts: {
  season: ["s9", "s12"],
  placement: ["p8", "p4"],
  female: true, }
},
{ name: "Taylor Waltmon",
  img: "09-09) Taylor_Waltmon.jpg",
  opts: {
  season: ["s9"],
  placement: ["p9"],
  female: true, }
},
{ name: "Emily Hallock",
  img: "09-10) Emily-Hallock.jpg",
  opts: {
  season: ["s9", "s12"],
  placement: ["p10", "p5"],
  female: true, }
},
{ name: "Chelsea Sargent",
  img: "09-11) Chelsea-Sargent.jpg",
  opts: {
  season: ["s9"],
  placement: ["p11"],
  female: true, }
},
{ name: "SJ Yun",
  img: "09-11) SJ-Yun.jpg",
  opts: {
  season: ["s9"],
  placement: ["p11"],
  male: true, }
},
{ name: "Ralph Xavier-Degala",
  img: "09-13) Ralph-Xavier-Degala.jpg",
  opts: {
  season: ["s9"],
  placement: ["p13"],
  male: true, }
},
{ name: "Mark Ingraham",
  img: "09-14) Mark-Ingraham.jpg",
  opts: {
  season: ["s9"],
  placement: ["p14"],
  male: true, }
},
{ name: "Ryan Cortez",
  img: "09-15) Ryan-Cortez.jpg",
  opts: {
  season: ["s9"],
  placement: ["p15"],
  male: true, }
},
{ name: "Lindsay Haigh",
  img: "09-16) Lindsay-Haigh.jpg",
  opts: {
  season: ["s9"],
  placement: ["p16"],
  female: true, }
},
{ name: "Matt Houck",
  img: "09-17) Matt_Houck.jpg",
  opts: {
  season: ["s9"],
  placement: ["p17"],
  male: true, }
},
{ name: "Juni Cuevas",
  img: "09-18) Juni_Cuevas.jpg",
  opts: {
  season: ["s9"],
  placement: ["p18"],
  male: true, }
},
{ name: "Alecia Winters",
  img: "09-19) Alecia-Winters.jpg",
  opts: {
  season: ["s9"],
  placement: ["p19"],
  female: true, }
},
{ name: "Darrick Krause",
  img: "09-20) Darrick-Krause.jpg",
  opts: {
  season: ["s9"],
  placement: ["p20"],
  male: true, }
},
{ name: "Olusola Ogbomo",
  img: "09-21) Olusola-Ogbomo.jpg",
  opts: {
  season: ["s9"],
  placement: ["p21"],
  female: true, }
},
{ name: "Stephanie Willis",
  img: "09-21) Stephanie-Willis.jpg",
  opts: {
  season: ["s9"],
  placement: ["p21"],
  female: true, }
},
{ name: "Sal Maida",
  img: "09-23) Sal-Maida.jpg",
  opts: {
  season: ["s9"],
  placement: ["p23"],
  male: true, }
},
{ name: "Sid Hoeltzell",
  img: "09-23) Sid-Hoeltzell.jpg",
  opts: {
  season: ["s9"],
  placement: ["p23"],
  male: true, }
},
{ name: "Dorian Hunter",
  img: "10-01) Dorian_Hunter.jpg",
  opts: {
  season: ["s10"],
  placement: ["p1"],
  female: true, }
},
{ name: "Sarah Faherty",
  img: "10-02) Sarah-Faherty.jpg",
  opts: {
  season: ["s10"],
  placement: ["p2"],
  female: true, }
},
{ name: "Nick DiGiovanni",
  img: "10-03) Nick_DiGiovanni.jpg",
  opts: {
  season: ["s10"],
  placement: ["p3"],
  male: true, }
},
{ name: "Noah Sims",
  img: "10-04) Noah_Sims.jpg",
  opts: {
  season: ["s10"],
  placement: ["p4"],
  male: true, }
},
{ name: "Shari Mukherjee",
  img: "10-05) Shari-Mukherjee.jpg",
  opts: {
  season: ["s10"],
  placement: ["p5"],
  female: true, }
},
{ name: "Subha Ramiah",
  img: "10-05) Subha_Ramiah.jpg",
  opts: {
  season: ["s10"],
  placement: ["p5"],
  male: true, }
},
{ name: "Micah Yaroch",
  img: "10-07) Micah_Yaroch.jpg",
  opts: {
  season: ["s10"],
  placement: ["p7"],
  male: true, }
},
{ name: "Bri Baker",
  img: "10-08) Bri-Baker.jpg",
  opts: {
  season: ["s10", "s12"],
  placement: ["p8", "p13"],
  female: true, }
},
{ name: "Jamie Hough",
  img: "10-09) Jamie-Hough.jpg",
  opts: {
  season: ["s10"],
  placement: ["p9"],
  male: true, }
},
{ name: "Fred Chang",
  img: "10-10) Fred-Chang.jpg",
  opts: {
  season: ["s10", "s12"],
  placement: ["p10", "p11"],
  male: true, }
},
{ name: "Wuta Onda",
  img: "10-11) Wuta_Onda.jpg",
  opts: {
  season: ["s10"],
  placement: ["p11"],
  male: true, }
},
{ name: "Renee Rice",
  img: "10-12) Renee-Rice.jpg",
  opts: {
  season: ["s10"],
  placement: ["p12"],
  female: true, }
},
{ name: "Sam Haaz",
  img: "10-13) Sam-Haaz.jpg",
  opts: {
  season: ["s10"],
  placement: ["p13"],
  male: true, }
},
{ name: "Keturah King",
  img: "10-14) Keturah_King.jpg",
  opts: {
  season: ["s10"],
  placement: ["p14"],
  female: true, }
},
{ name: "Liz Linn",
  img: "10-15) Liz-Linn.jpg",
  opts: {
  season: ["s10"],
  placement: ["p15"],
  female: true, }
},
{ name: "Michael Silverstein",
  img: "10-15) Michael-Silverstein.jpg",
  opts: {
  season: ["s10", "s12"],
  placement: ["p15", "p2"],
  male: true, }
},
{ name: "Evan Tesiny",
  img: "10-17) Evan_Tesiny.jpg",
  opts: {
  season: ["s10"],
  placement: ["p17"],
  male: true, }
},
{ name: "Kimberly White",
  img: "10-18) Kimberly-White.jpg",
  opts: {
  season: ["s10"],
  placement: ["p18"],
  female: true, }
},
{ name: "Deanna Colon",
  img: "10-19) Deanna-Colon.jpg",
  opts: {
  season: ["s10"],
  placement: ["p19"],
  female: true, }
},
{ name: "Kenny Palazzolo",
  img: "10-19) Kenny-Palazzolo.jpg",
  opts: {
  season: ["s10"],
  placement: ["p19"],
  male: true, }
},
{ name: "Kelsey Murphy",
  img: "11-01) Kelsey Murphy.jpg",
  opts: {
  season: ["s11"],
  placement: ["p1"],
  female: true, }
},
{ name: "Autumn Moretti",
  img: "11-02) Autumn Moretti.jpg",
  opts: {
  season: ["s11"],
  placement: ["p2"],
  female: true, }
},
{ name: "Suu Khin",
  img: "11-03) Suu Khin.jpg",
  opts: {
  season: ["s11"],
  placement: ["p2"],
  female: true, }
},
{ name: "Alejandro Valdivia",
  img: "11-04) Alejandro Valdivia.jpg",
  opts: {
  season: ["s11", "s12"],
  placement: ["p4", "p18"],
  male: true, }
},
{ name: "Michael Newman",
  img: "11-05) Michael Newman.jpg",
  opts: {
  season: ["s11"],
  placement: ["p5"],
  male: true, }
},
{ name: "Abe Konick",
  img: "11-06) Abe Konick.jpg",
  opts: {
  season: ["s11"],
  placement: ["p6"],
  male: true, }
},
{ name: "Anne Hicks",
  img: "11-07) Anne Hicks.jpg",
  opts: {
  season: ["s11"],
  placement: ["p7"],
  female: true, }
},
{ name: "Joseph Manglicmot",
  img: "11-08) Joseph Manglicmot.jpg",
  opts: {
  season: ["s11"],
  placement: ["p8"],
  male: true, }
},
{ name: "Lexy Rogers",
  img: "11-09) Lexy Rogers.jpg",
  opts: {
  season: ["s11"],
  placement: ["p9"],
  female: true, }
},
{ name: "Tay Westberry",
  img: "11-10) Tay Westberry.jpg",
  opts: {
  season: ["s11"],
  placement: ["p10"],
  male: true, }
},
{ name: "Miles Gateff",
  img: "11-11) Miles Gateff.jpg",
  opts: {
  season: ["s11"],
  placement: ["p11"],
  male: true, }
},
{ name: "Matt Gagnon",
  img: "11-12) Matt Gagnon.jpg",
  opts: {
  season: ["s11"],
  placement: ["p12"],
  male: true, }
},
{ name: "Mary Jayne Buckingham",
  img: "11-13) Mary Jayne Buckingham.jpg",
  opts: {
  season: ["s11"],
  placement: ["p13"],
  female: true, }
},
{ name: "Annai Gonzalez",
  img: "11-14) Annai Gonzalez.jpg",
  opts: {
  season: ["s11"],
  placement: ["p14"],
  female: true, }
},
{ name: "Elyce Wooten",
  img: "11-15) Elyce Wooten.jpg",
  opts: {
  season: ["s11"],
  placement: ["p15"],
  female: true, }
},
{ name: "Dara Yu",
  img: "12-01) Dara_Yu.jpg",
  opts: {
  season: ["s12"],
  placement: ["p1"],
  female: true, 
  junior: true, }
},
{ name: "Shayne Wells",
  img: "12-16) Shayne Wells.jpg",
  opts: {
  season: ["s12"],
  placement: ["p16"],
  male: true, 
  junior: true }
},
{ name: "Grant Gillon",
  img: "13-01) Grant-Gillon.jpg",
  opts: {
  season: ["s13"],
  placement: ["p1"],
  male: true, }
},
{ name: "Kennedy Underwood",
  img: "13-02) Kennedy-U.jpg",
  opts: {
  season: ["s13"],
  placement: ["p2"],
  female: true, }
},
{ name: "Jennifer Maune",
  img: "13-03) Jennifer-Maune.jpg",
  opts: {
  season: ["s13"],
  placement: ["p2"],
  female: true, }
},
{ name: "Reagan Sidney",
  img: "13-04) Reagan-Sidney.jpg",
  opts: {
  season: ["s13"],
  placement: ["p4"],
  female: true, }
},
{ name: "Wayne Lewis",
  img: "13-05) Wayne-Lewis.jpg",
  opts: {
  season: ["s13"],
  placement: ["p5"],
  male: true, }
},
{ name: "Sav Miles",
  img: "13-06) Sav-Miles.jpg",
  opts: {
  season: ["s13"],
  placement: ["p6"],
  female: true, }
},
{ name: "Brynn Weaver",
  img: "13-07) Brynn-Weaver.jpg",
  opts: {
  season: ["s13"],
  placement: ["p7"],
  female: true, }
},
{ name: "Kolby Chandler",
  img: "13-07) Kolby-Chandler.jpg",
  opts: {
  season: ["s13"],
  placement: ["p7"],
  male: true, }
},
{ name: "Madame Donut",
  img: "13-09) Madame Donut.jpg",
  opts: {
  season: ["s13"],
  placement: ["p9"],
  female: true, }
},
{ name: "Lizzie Hartman",
  img: "13-10) Lizzie-Hartman.jpg",
  opts: {
  season: ["s13"],
  placement: ["p10"],
  female: true, }
},
{ name: "James Barfield",
  img: "13-11) James-Barfield.jpg",
  opts: {
  season: ["s13"],
  placement: ["p11"],
  male: true, }
},
{ name: "Charles Calvino",
  img: "13-12) Charles-Calvino.jpg",
  opts: {
  season: ["s13"],
  placement: ["p12"],
  male: true, }
},
{ name: "Nina Bell",
  img: "13-13) Nina-Bell.jpg",
  opts: {
  season: ["s13"],
  placement: ["p13"],
  female: true, }
},
{ name: "Kendal Adair",
  img: "13-14) Kendal-Adair.jpg",
  opts: {
  season: ["s13"],
  placement: ["p14"],
  male: true, }
},
{ name: "Kyle Hopkins",
  img: "13-15) Kyle-Hopkins.jpg",
  opts: {
  season: ["s13"],
  placement: ["p15"],
  male: true, }
},
{ name: "Purvi Dogra",
  img: "13-16) Purvi-Dogra.jpg",
  opts: {
  season: ["s13"],
  placement: ["p16"],
  female: true, }
},
{ name: "Sarah Fry",
  img: "13-16) Sarah-Fry.jpg",
  opts: {
  season: ["s13"],
  placement: ["p16"],
  female: true, }
},
{ name: "Ryan Walker",
  img: "13-18) Ryan-Walker.jpg",
  opts: {
  season: ["s13"],
  placement: ["p18"],
  male: true, }
},
{ name: "Richie Jones-Muhammad",
  img: "13-19) Richie-Jones-Muhammad.jpg",
  opts: {
  season: ["s13"],
  placement: ["p19"],
  male: true, }
},
{ name: "Amanda Clark-Katz",
  img: "13-20) Amanda-Clark-Katz.jpg",
  opts: {
  season: ["s13"],
  placement: ["p20"],
  female: true, }
},
{ name: "Michael Leonard",
  img: "14-01) Michael Leonard.png",
  opts: {
  season: ["s14"],
  placement: ["p1"],
  male: true, }
},
{ name: "Becca Gibb",
  img: "14-02) Becca Gibb.png",
  opts: {
  season: ["s14"],
  placement: ["p2"],
  female: true, }
},
{ name: "Kamay Lafalaise",
  img: "14-02) Kamay Lafalaise.png",
  opts: {
  season: ["s14"],
  placement: ["p2"],
  female: true, }
},
{ name: "Rebecka Evans",
  img: "14-04) Rebecka Evans.png",
  opts: {
  season: ["s14"],
  placement: ["p4"],
  female: true, }
},
{ name: "Murt Murton",
  img: "14-05) Murt Murton.png",
  opts: {
  season: ["s14"],
  placement: ["p5"],
  male: true, }
},
{ name: "Adam Hart",
  img: "14-06) Adam Hart.png",
  opts: {
  season: ["s14"],
  placement: ["p6"],
  male: true, }
},
{ name: "Horacio Tucunduva",
  img: "14-07) Horacio Tucunduva.png",
  opts: {
  season: ["s14"],
  placement: ["p7"],
  male: true, }
},
{ name: "Warren Coleman",
  img: "14-07) Warren Coleman.png",
  opts: {
  season: ["s14"],
  placement: ["p7"],
  male: true, }
},
{ name: "Hallie Clark",
  img: "14-09) Hallie Clark.png",
  opts: {
  season: ["s14"],
  placement: ["p9"],
  female: true, }
},
{ name: "Kimberly Karver",
  img: "14-09) Kimberly Karver.png",
  opts: {
  season: ["s14"],
  placement: ["p9"],
  female: true, }
},
{ name: "Daniela Peregrina",
  img: "14-11) Daniela Peregrina.png",
  opts: {
  season: ["s14"],
  placement: ["p11"],
  female: true, }
},
{ name: "Jeet Kaur Sawant",
  img: "14-12) Jeet Kaur Sawant.png",
  opts: {
  season: ["s14"],
  placement: ["p12"],
  female: true, }
},
{ name: "Arthur Chan",
  img: "14-13) Arthur Chan.png",
  opts: {
  season: ["s14"],
  placement: ["p13"],
  male: true, }
},
{ name: "Fatima Ayotunde",
  img: "14-14) Fatima Ayotunde.png",
  opts: {
  season: ["s14"],
  placement: ["p14"],
  female: true, }
},
{ name: "Christopher Walinski",
  img: "14-15) Christopher Walinski.png",
  opts: {
  season: ["s14"],
  placement: ["p15"],
  male: true, }
},
{ name: "Anna Johson",
  img: "14-16) Anna Johnson.png",
  opts: {
  season: ["s14"],
  placement: ["p16"],
  female: true, }
},
{ name: "Geags Geagon ",
  img: "14-16) Geags Geagon.png",
  opts: {
  season: ["s14"],
  placement: ["p16"],
  male: true, }
},
{ name: "Chris Musgrove",
  img: "14-18) Chris Musgrove.png",
  opts: {
  season: ["s14"],
  placement: ["p18"],
  male: true, }
},
{ name: " Sunshine Carlos",
  img: "14-19) Sunshine Carlos.png",
  opts: {
  season: ["s14"],
  placement: ["p19"],
  female: true, }
},
{ name: "Si Envytnc Nguyen",
  img: "14-20) Si Envytnc Nguyen.png",
  opts: {
  season: ["s14"],
  placement: ["p20"],
  male: true, }
},
 
/*
{ name: "",
  img: "",
  opts: {
  season: ["s"],
  placement: ["p"],
  male: true, }
},
*/

];
