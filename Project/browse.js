function selectAllAudience() {
    let b = document.getElementById("all-audience");
    let c = document.getElementById("c");
    let j = document.getElementById("j");
    let y = document.getElementById("y");
    let a = document.getElementById("a");
    if (b.innerHTML == "Select All") {
        b.innerHTML = "Unselect All";
        c.checked = true;
        j.checked = true;
        y.checked = true;
        a.checked = true;
    } else {
        b.innerHTML = "Select All";
        c.checked = false;
        j.checked = false;
        y.checked = false;
        a.checked = false;
    }
    orderResults()
}

function selectAllGenre() {
    let bu = document.getElementById("all-genre");
    let d = document.getElementById("d");
    let r = document.getElementById("r");
    let f = document.getElementById("f");
    let s = document.getElementById("s");
    let t = document.getElementById("t");
    let b = document.getElementById("b");
    let i = document.getElementById("i");
    let h = document.getElementById("h");
    if (bu.innerHTML == "Select All") {
        bu.innerHTML = "Unselect All";
        d.checked = true;
        r.checked = true;
        f.checked = true;
        s.checked = true;
        t.checked = true;
        b.checked = true;
        i.checked = true;
        h.checked = true;
    } else {
        bu.innerHTML = "Select All";
        d.checked = false;
        r.checked = false;
        f.checked = false;
        s.checked = false;
        t.checked = false;
        b.checked = false;
        i.checked = false;
        h.checked = false;
    }
    orderResults()
}

function orderResults() {
    let results = getResults();
    setNumResults(results.length);
    clearResults();
    populateResults(results);
}

function setNumResults(resultsLength) {
    document.getElementById("num-results").innerHTML = resultsLength != undefined ? resultsLength + " Results" : 0 + " Results";
}

function clearResults() {
    let parent = document.getElementById("results");
    for (let i = parent.childElementCount; i > 1; i--) {
        parent.removeChild(parent.childNodes[i])
    }
}

function populateResults(results) {
    let parent = document.getElementById("results");
    for (let i = 0; i < results.length; i++) {
        let link = document.createElement("a");
        let image = document.createElement("img");
        let line = document.createElement("hr");
        link.setAttribute("href", results[i].url);
        image.setAttribute("src", "img/" + results[i].file + ".png");
        link.appendChild(image);
        parent.appendChild(link);
        parent.appendChild(line);
    }
}

function getResults() {
    let results = [];
    let checks = document.getElementsByTagName("input");
    let checkedIDs = [];
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked) {
            checkedIDs.push(checks[i].id);
        }
    }
    for (let i = 0; i < r.result.length; i++) {
        for (let j = 0; j < checkedIDs.length; j++) {
            if (r.result[i].cat == checkedIDs[j] || r.result[i].genre == checkedIDs[j]) {
                results.push(r.result[i]);
            }
        }
    }
    results = removeDuplicates(results);
    results = sortResults(results);
    return results;
}

function removeDuplicates(results) {
    for (let i = results.length - 1; i >= 0; i--) {
        if (results[i] === results[i + 1]) {
            results.splice(i + 1, 1);
        }
    }
    return results;
}

function sortResults(results) {
    let sortOpt = document.getElementById("sort-by").selectedIndex;
    switch (sortOpt) {
        //popularity: list defaults to this
        case 0:
            break;
        //pagesHL
        case 1:
            results.sort((a,b) => {return b.pp - a.pp})
            break;
        //pagesLH
        case 2:
            results.sort((a,b) => {return a.pp - b.pp})
            break;
        //RL HL
        case 3:
            results.sort((a,b) => {return b.level - a.level})
            break;
        //RL LH
        case 4:
            results.sort((a,b) => {return a.level - b.level})
            break;
    }
    return results;
}

const r = {
    "result": [
        {
            "file": "a1",
            "cat": "a",
            "pp": 304,
            "level": 3,
            "genre": "t",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1974571?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;fi%3Aaudience=e;sort=poprel;badges=1;expand=awards"
        },
        {
            "file": "a2",
            "cat": "a",
            "pp": 276,
            "level": 3,
            "genre": "r",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/2162040?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;fi%3Aaudience=e;sort=poprel;badges=1;expand=awards"
        },
        {
            "file": "a3",
            "cat": "a",
            "pp": 446,
            "level": 3,
            "genre": "t",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1967711?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;fi%3Aaudience=e;sort=poprel;badges=1;expand=awards"
        },
        {
            "file": "a4",
            "cat": "a",
            "pp": 307,
            "level": 3,
            "genre": "r",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1976579?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;fi%3Aaudience=e;sort=poprel;badges=1;expand=awards"
        },
        {
            "file": "a5",
            "cat": "a",
            "pp": 464,
            "level": 3,
            "genre": "t",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1967160?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;fi%3Aaudience=e;sort=poprel;badges=1;expand=awards"
        },
        {
            "file": "a6",
            "cat": "a",
            "pp": 355,
            "level": 3,
            "genre": "t",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1967198?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;fi%3Aaudience=e;sort=poprel;badges=1;expand=awards"
        },
        {
            "file": "a7",
            "cat": "a",
            "pp": 178,
            "level": 3,
            "genre": "h",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/2163897?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;fi%3Aaudience=e;sort=poprel;badges=1;expand=awards"
        },
        {
            "file": "a8",
            "cat": "a",
            "pp": 355,
            "level": 3,
            "genre": "t",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1980222?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;fi%3Aaudience=e;sort=poprel;badges=1;expand=awards"
        },
        {
            "file": "a9",
            "cat": "a",
            "pp": 392,
            "level": 3,
            "genre": "t",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/2163387?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;fi%3Aaudience=e;sort=poprel;badges=1;expand=awards"
        },
        {
            "file": "a10",
            "cat": "a",
            "pp": 546,
            "level": 3,
            "genre": "t",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1980203?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;fi%3Aaudience=e;sort=poprel;badges=1;expand=awards"
        },
        {
            "file": "y1",
            "cat": "y",
            "pp": 279,
            "level": 670,
            "genre": "r",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1924853?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;fi%3Aaudience=d;sort=poprel;badges=1;expand=awards"
        },
        {
            "file": "y2",
            "cat": "y",
            "pp": 338,
            "level": 670,
            "genre": "s",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1631320?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;fi%3Aaudience=d;sort=poprel;badges=1;expand=awards"
        },
        {
            "file": "y3",
            "cat": "y",
            "pp": 497,
            "level": 2,
            "genre": "f",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1937696?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;fi%3Aaudience=d;sort=poprel;badges=1;expand=awards"
        },
        {
            "file": "y4",
            "cat": "y",
            "pp": 458,
            "level": 820,
            "genre": "f",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1620031?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;fi%3Aaudience=d;sort=poprel;badges=1;expand=awards"
        },
        {
            "file": "y5",
            "cat": "y",
            "pp": 278,
            "level": 2,
            "genre": "r",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1441153?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;fi%3Aaudience=d;sort=poprel;badges=1;expand=awards"
        },
        {
            "file": "y6",
            "cat": "y",
            "pp": 725,
            "level": 770,
            "genre": "f",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1370492?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;fi%3Aaudience=d;sort=poprel;badges=1;expand=awards"
        },
        {
            "file": "y7",
            "cat": "y",
            "pp": 285,
            "level": 850,
            "genre": "s",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1311925?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;fi%3Aaudience=d;sort=poprel;badges=1;expand=awards"
        },
        {
            "file": "y8",
            "cat": "y",
            "pp": 300,
            "level": 640,
            "genre": "s",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1370135?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;fi%3Aaudience=d;sort=poprel;badges=1;expand=awards"
        },
        {
            "file": "y9",
            "cat": "y",
            "pp": 310,
            "level": 780,
            "genre": "f",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1357721?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;fi%3Aaudience=d;sort=poprel;badges=1;expand=awards"
        },
        {
            "file": "y10",
            "cat": "y",
            "pp": 323,
            "level": 670,
            "genre": "r",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1255928?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;fi%3Aaudience=d;sort=poprel;badges=1;expand=awards"
        },
        {
            "file": "j1",
            "cat": "j",
            "pp": 321,
            "level": 1,
            "genre": "f",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1927124?locg=137;detail_record_view=1;page=0;fi%3Aaudience=j;fi%3Aaudience=c;fi%3Aitem_type=a;sort=popularity;badges=1;expand=awards"
        },
        {
            "file": "j2",
            "cat": "j",
            "pp": 212,
            "level": 1,
            "genre": "t",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1631249?locg=137;detail_record_view=1;page=0;fi%3Aaudience=j;fi%3Aaudience=c;fi%3Aitem_type=a;sort=popularity;badges=1;expand=awards"
        },
        {
            "file": "j3",
            "cat": "j",
            "pp": 468,
            "level": 690,
            "genre": "f",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1924565?locg=137;detail_record_view=1;page=0;fi%3Aaudience=j;fi%3Aaudience=c;fi%3Aitem_type=a;sort=popularity;badges=1;expand=awards"
        },
        {
            "file": "j4",
            "cat": "j",
            "pp": 376,
            "level": 680,
            "genre": "f",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1670466?locg=137;detail_record_view=1;page=0;fi%3Aaudience=j;fi%3Aaudience=c;fi%3Aitem_type=a;sort=popularity;badges=1;expand=awards"
        },
        {
            "file": "j5",
            "cat": "j",
            "pp": 250,
            "level": 1,
            "genre": "t",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1918793?locg=137;detail_record_view=1;page=0;fi%3Aaudience=j;fi%3Aaudience=c;fi%3Aitem_type=a;sort=popularity;badges=1;expand=awards"
        },
        {
            "file": "j6",
            "cat": "j",
            "pp": 266,
            "level": 560,
            "genre": "t",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1310343?locg=137;detail_record_view=1;page=0;fi%3Aaudience=j;fi%3Aaudience=c;fi%3Aitem_type=a;sort=popularity;badges=1;expand=awards"
        },
        {
            "file": "j7",
            "cat": "j",
            "pp": 217,
            "level": 1000,
            "genre": "f",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1358778?locg=137;detail_record_view=1;page=0;fi%3Aaudience=j;fi%3Aaudience=c;fi%3Aitem_type=a;sort=popularity;badges=1;expand=awards"
        },
        {
            "file": "j8",
            "cat": "j",
            "pp": 552,
            "level": 840,
            "genre": "r",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1165912?locg=137;detail_record_view=1;page=0;fi%3Aaudience=j;fi%3Aaudience=c;fi%3Aitem_type=a;sort=popularity;badges=1;expand=awards"
        },
        {
            "file": "j9",
            "cat": "j",
            "pp": 597,
            "level": 680,
            "genre": "f",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1158502?locg=137;detail_record_view=1;page=0;fi%3Aaudience=j;fi%3Aaudience=c;fi%3Aitem_type=a;sort=popularity;badges=1;expand=awards"
        },
        {
            "file": "j10",
            "cat": "j",
            "pp": 315,
            "level": 790,
            "genre": "d",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1239078?locg=137;detail_record_view=1;page=0;fi%3Aaudience=j;fi%3Aaudience=c;fi%3Aitem_type=a;sort=popularity;badges=1;expand=awards"
        },
        {
            "file": "c1",
            "cat": "c",
            "pp": 0,
            "level": 0,
            "genre": "c",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/3302530?detail_record_view=1;fi%3Aaudience=a;fi%3Aaudience=b;locg=137;pubdate=is;expand=awards"
        },
        {
            "file": "c2",
            "cat": "c",
            "pp": 0,
            "level": 0,
            "genre": "c",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/3390443?detail_record_view=1;fi%3Aaudience=a;fi%3Aaudience=b;locg=137;pubdate=is;expand=awards"
        },
        {
            "file": "c3",
            "cat": "c",
            "pp": 0,
            "level": 0,
            "genre": "c",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/3299669?detail_record_view=1;fi%3Aaudience=a;fi%3Aaudience=b;locg=137;pubdate=is;expand=awards"
        },
        {
            "file": "c4",
            "cat": "c",
            "pp": 0,
            "level": 0,
            "genre": "c",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/3301565?detail_record_view=1;fi%3Aaudience=a;fi%3Aaudience=b;locg=137;pubdate=is;expand=awards"
        },
        {
            "file": "c5",
            "cat": "c",
            "pp": 0,
            "level": 0,
            "genre": "c",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/3397206?detail_record_view=1;fi%3Aaudience=a;fi%3Aaudience=b;locg=137;pubdate=is;expand=awards"
        },
        {
            "file": "c6",
            "cat": "c",
            "pp": 0,
            "level": 0,
            "genre": "c",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/3297032?detail_record_view=1;fi%3Aaudience=a;fi%3Aaudience=b;locg=137;pubdate=is;expand=awards"
        },
        {
            "file": "c7",
            "cat": "c",
            "pp": 0,
            "level": 0,
            "genre": "c",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/3396482?detail_record_view=1;fi%3Aaudience=a;fi%3Aaudience=b;locg=137;pubdate=is;expand=awards"
        },
        {
            "file": "c8",
            "cat": "c",
            "pp": 0,
            "level": 0,
            "genre": "c",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/3398333?detail_record_view=1;fi%3Aaudience=a;fi%3Aaudience=b;locg=137;pubdate=is;expand=awards"
        },
        {
            "file": "c9",
            "cat": "c",
            "pp": 0,
            "level": 0,
            "genre": "c",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/3189908?detail_record_view=1;fi%3Aaudience=a;fi%3Aaudience=b;locg=137;pubdate=is;expand=awards"
        },
        {
            "file": "c10",
            "cat": "c",
            "pp": 0,
            "level": 0,
            "genre": "c",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/3397196?detail_record_view=1;fi%3Aaudience=a;fi%3Aaudience=b;locg=137;pubdate=is;expand=awards"
        },
        {
            "file": "bio1",
            "cat": "b",
            "pp": 100,
            "level": 10,
            "genre": "b",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/703459?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;sort=poprel;fi%3A-search_format=electronic;query=subject%3Abiography;expand=awards"
        },
        {
            "file": "bio2",
            "cat": "b",
            "pp": 186,
            "level": 10,
            "genre": "b",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/345849?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;sort=poprel;fi%3A-search_format=electronic;query=subject%3Abiography;expand=awards"
        },
        {
            "file": "bio3",
            "cat": "b",
            "pp": 0,
            "level": 10,
            "genre": "b",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/745759?locg=137;detail_record_view=1;page=0;fi%3Aitem_type=a;sort=poprel;fi%3A-search_format=electronic;query=subject%3Abiography;expand=awards"
        },
        {
            "file": "in1",
            "cat": "i",
            "pp": 240,
            "level": 11,
            "genre": "i",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/2587328?locg=137;detail_record_view=1;page=0;fi%3A-search_format=electronic;fi%3A-search_format=electronic;fi%3Aitem_type=a;sort=poprel;query=subject%3Ainspirational;expand=awards"
        },
        {
            "file": "in2",
            "cat": "i",
            "pp": 190,
            "level": 11,
            "genre": "i",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/2695715?locg=137;detail_record_view=1;page=0;fi%3A-search_format=electronic;fi%3A-search_format=electronic;fi%3Aitem_type=a;sort=poprel;query=subject%3Ainspirational;expand=awards"
        },
        {
            "file": "in3",
            "cat": "i",
            "pp": 230,
            "level": 11,
            "genre": "i",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/688576?locg=137;detail_record_view=1;page=0;fi%3A-search_format=electronic;fi%3A-search_format=electronic;fi%3Aitem_type=a;sort=poprel;query=subject%3Ainspirational;expand=awards"
        },
        {
            "file": "in4",
            "cat": "i",
            "pp": 89,
            "level": 11,
            "genre": "i",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/611522?locg=137;detail_record_view=1;page=0;fi%3A-search_format=electronic;fi%3A-search_format=electronic;fi%3Aitem_type=a;sort=poprel;query=subject%3Ainspirational;expand=awards"
        },
        {
            "file": "hist1",
            "cat": "h",
            "pp": 32,
            "level": 12,
            "genre": "h",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/455497?detail_record_view=1;fi%3Aitem_type=a;fi%3Alit_form=0;locg=137;pubdate=is;fi%3A-search_format=electronic;sort=poprel;query=subject%3Ahistory;expand=awards"
        },
        {
            "file": "hist2",
            "cat": "h",
            "pp": 160,
            "level": 12,
            "genre": "h",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/1298106?detail_record_view=1;fi%3Aitem_type=a;fi%3Alit_form=0;locg=137;pubdate=is;fi%3A-search_format=electronic;sort=poprel;query=subject%3Ahistory;expand=awards"
        },
        {
            "file": "hist3",
            "cat": "h",
            "pp": 214,
            "level": 12,
            "genre": "h",
            "url": "https://little-dixie.missourievergreen.org/eg/opac/record/132527?detail_record_view=1;fi%3Aitem_type=a;fi%3Alit_form=0;locg=137;pubdate=is;fi%3A-search_format=electronic;sort=poprel;query=subject%3Ahistory;expand=awards"
        }
    ]
};