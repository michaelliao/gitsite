// init abcjs

function ABCJS_CursorControl(paperId) {
    const self = this;

    self.onReady = function () {
    };
    self.onStart = function () {
        const svg = document.querySelector(`#${paperId} svg`);
        const cursor = document.createElementNS("http://www.w3.org/2000/svg", "line");
        cursor.setAttribute("class", "abcjs-cursor");
        cursor.setAttributeNS(null, 'x1', 0);
        cursor.setAttributeNS(null, 'y1', 0);
        cursor.setAttributeNS(null, 'x2', 0);
        cursor.setAttributeNS(null, 'y2', 0);
        svg.appendChild(cursor);
    };
    self.beatSubdivisions = 2;
    self.onBeat = function (beatNumber, totalBeats, totalTime) {
    };
    self.onEvent = function (ev) {
        if (ev.measureStart && ev.left === null)
            return; // this was the second part of a tie across a measure line. Just ignore it.

        let lastSelection = document.querySelectorAll(`#${paperId} svg .highlight`);
        for (let k = 0; k < lastSelection.length; k++)
            lastSelection[k].classList.remove("highlight");

        for (let i = 0; i < ev.elements.length; i++) {
            let note = ev.elements[i];
            for (let j = 0; j < note.length; j++) {
                note[j].classList.add("highlight");
            }
        }

        const cursor = document.querySelector(`#${paperId} svg .abcjs-cursor`);
        if (cursor) {
            cursor.setAttribute("x1", ev.left - 2);
            cursor.setAttribute("x2", ev.left - 2);
            cursor.setAttribute("y1", ev.top);
            cursor.setAttribute("y2", ev.top + ev.height);
        }
    };
    self.onFinished = function () {
        const els = document.querySelectorAll("svg .highlight");
        for (let el of els) {
            el.classList.remove("highlight");
        }
        const cursor = document.querySelector(`#${paperId} svg .abcjs-cursor`);
        if (cursor) {
            cursor.setAttribute("x1", 0);
            cursor.setAttribute("x2", 0);
            cursor.setAttribute("y1", 0);
            cursor.setAttribute("y2", 0);
        }
    };
}

function ABCJS_initSheetMusic(abcText, paperId, audioId) {
    const abcOptions = {
        add_classes: true,
        selectTypes: [],
        responsive: "resize",
        paddingleft: 0,
        paddingright: 0
    };
    if (audioId) {
        const cursorControl = new ABCJS_CursorControl(paperId);
        let synthControl = null;
        if (ABCJS.synth.supportsAudio()) {
            synthControl = new ABCJS.synth.SynthController();
            synthControl.load(`#${audioId}`, cursorControl, {
                displayLoop: true,
                displayRestart: true,
                displayPlay: true,
                displayProgress: true
            });
        } else {
            document.querySelector(`#${audioId}`).innerHTML = "<div class='audio-error'>Audio is not supported in this browser.</div>";
        }
        ABCJS_setTune(abcText, paperId, synthControl, false, abcOptions);
    } else {
        ABCJS.renderAbc(paperId, abcText, abcOptions)[0];
    }
}

function ABCJS_setTune(abcText, paperId, synthControl, userAction, abcOptions) {
    synthControl.disable(true);
    const visualObj = ABCJS.renderAbc(paperId, abcText, abcOptions)[0];
    const midiBuffer = new ABCJS.synth.CreateSynth();
    midiBuffer.init({
        visualObj: visualObj,
    }).then(function (response) {
        console.log(response);
        if (synthControl) {
            synthControl.setTune(visualObj, userAction).then(function (response) {
                console.log("Audio successfully loaded.")
            }).catch(function (error) {
                console.error("Audio problem:", error);
            });
        }
    }).catch(function (error) {
        console.error("Audio problem:", error);
    });
}