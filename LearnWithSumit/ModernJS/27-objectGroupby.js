const languages = [
    { title: "JavaScript", type: "Scripting" },
    { title: "Java", type: "Normal" },
    { title: "Phython", type: "Scripting" },
];

console.log(
    "Languages\n",
    languages,
    "\n==========="
);
let scriptingLanguages = {};

//way 1
/*
languages.forEach((language) => {
    const type = language.type;

    if (!scriptingLanguages[type]) {
        scriptingLanguages[type] = [];
    }
    scriptingLanguages[type].push(language);
});
console.log(
    "scriptingLanguages\n",
    scriptingLanguages,
    "\n==========="
);
*/

//way 2
/*
scriptingLanguages = languages.reduce((res, language) => {
    const type = languages.type;
    if (!res[type]) {
        res[type] = [];
    }
    res[type].push(language);
    return res;
}, {});

console.log(scriptingLanguages);
*/

//ES-14 2023 Object.mapBy()
//scriptingLanguages=Object.mapBy(languages,(lang)=>{lang.type});
//Latest Versiom support need require("core-js"); npm i core-js
//console.log(scriptingLanguages);
