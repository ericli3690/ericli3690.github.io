// const rawKeys = [
//     'C',
//     'Db/C#',
//     'D',
//     'Eb/D#',
//     'E',
//     'F',
//     'Gb/F#',
//     'G',
//     'Ab/G#',
//     'A',
//     'Bb/A#',
//     'B'
// ];
// const rawKeyTypes = [
//     'Major',
//     'Minor',
// ];
// rawKeys.forEach(e => {
//     rawKeyTypes.forEach(f => {
//         console.log(`\'${e} ${f}\',`);
//     })
// });

const tonics = {
    pool: [
        'C',
        'Db/C#',
        'D',
        'Eb/D#',
        'E',
        'F',
        'Gb/F#',
        'G',
        'Ab/G#',
        'A',
        'Bb/A#',
        'B',
    ],
}

const keys = {
    pool: [
        'C Major',
        'C Minor',
        'Db/C# Major',
        'Db/C# Minor',
        'D Major',
        'D Minor',
        'Eb/D# Major',
        'Eb/D# Minor',
        'E Major',
        'E Minor',
        'F Major',
        'F Minor',
        'Gb/F# Major',
        'Gb/F# Minor',
        'G Major',
        'G Minor',
        'Ab/G# Major',
        'Ab/G# Minor',
        'A Major',
        'A Minor',
        'Bb/A# Major',
        'Bb/A# Minor',
        'B Major',
        'B Minor',
    ],
}

// export const minorTypes = [
//     'Natural',
//     'Harmonic',
//     'Melodic',
// ];

// keys.forEach(e => {
//     if (e.includes('Minor')) {
        
//         minorTypes.forEach(f => {
//             let decomposed = e.split(' ');
//             decomposed.splice(1, 0, f);
//             let recomposed = decomposed.join(' ');
//             console.log(`\'${recomposed}\',`)
//         })
//     } else {
//         console.log(`\'${e}\',`);
//     }
// })

const detailedKeys = {
    pool: [
        'C Major',
        'C Natural Minor',
        'C Harmonic Minor',
        'C Melodic Minor',
        'Db/C# Major',
        'Db/C# Natural Minor',
        'Db/C# Harmonic Minor',
        'Db/C# Melodic Minor',
        'D Major',
        'D Natural Minor',
        'D Harmonic Minor',
        'D Melodic Minor',
        'Eb/D# Major',
        'Eb/D# Natural Minor',
        'Eb/D# Harmonic Minor',
        'Eb/D# Melodic Minor',
        'E Major',
        'E Natural Minor',
        'E Harmonic Minor',
        'E Melodic Minor',
        'F Major',
        'F Natural Minor',
        'F Harmonic Minor',
        'F Melodic Minor',
        'Gb/F# Major',
        'Gb/F# Natural Minor',
        'Gb/F# Harmonic Minor',
        'Gb/F# Melodic Minor',
        'G Major',
        'G Natural Minor',
        'G Harmonic Minor',
        'G Melodic Minor',
        'Ab/G# Major',
        'Ab/G# Natural Minor',
        'Ab/G# Harmonic Minor',
        'Ab/G# Melodic Minor',
        'A Major',
        'A Natural Minor',
        'A Harmonic Minor',
        'A Melodic Minor',
        'Bb/A# Major',
        'Bb/A# Natural Minor',
        'Bb/A# Harmonic Minor',
        'Bb/A# Melodic Minor',
        'B Major',
        'B Natural Minor',
        'B Harmonic Minor',
        'B Melodic Minor',
    ]
};





///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////







class Pool {
    constructor(needsTonics, needsKeys, needsDetailedKeys) {
        this.needsTonics = needsTonics;
        this.needsKeys = needsKeys;
        this.needsDetailedKeys = needsDetailedKeys;
    }
    get pool() {
        return [...this.needsDetailedKeys, ...this.needsKeys, ...this.needsTonics];
    }
};

const scales = new Pool(
    [
        'Chromatic',
        'Chromatic Octave Broken',
        'Chromatic Octave Solid',
        'Chromatic Separated by 3 in Each Hand',
        'Chromatic Separated by 6 in Each Hand',
    ],
    [

    ],
    [
        'Simple',
        'Separated by 3',
        'Separated by 6',
        'Separated by 3 in Each Hand',
        'Separated by 6 in Each Hand',
        'Octave Broken',
        'Octave Solid',
        'Octave Broken Alternating',
        'Contrary',
        'Formula Pattern',
        'Repeated Note',
        '2 on 3 Rhythm',
        '3 on 2 Rhythm',
        '2 on 3 Rhythm Contrary',
        '3 on 2 Rhythm Contrary',
    ],
);

// const rawChords = [
//     'Tonic Three Note',
//     'Tonic Four Note',
//     'Dominant Seventh',
//     'Diminished Seventh',
//     'Cadence',
// ];
// const rawChordStyles = [
//     'Broken',
//     'Broken Alternating',
//     'Solid',
// ];
// rawChords.forEach(e => {
//     rawChordStyles.forEach(f => {
//         console.log(`\'${f} ${e}\',`);
//     })
// });

const chords = new Pool(
    [
        'Broken Dominant Seventh',
        'Broken Alternating Dominant Seventh',
        'Solid Dominant Seventh',
        'Broken Diminished Seventh',
        'Broken Alternating Diminished Seventh',
        'Solid Diminished Seventh',
    ],
    [
        'Broken Tonic Three Note',
        'Solid Tonic Three Note',
        'Broken Tonic Four Note',
        'Broken Alternating Tonic Four Note',
        'Solid Tonic Four Note',
    ],
    [

    ],
);

// const rawArpeggios = [
//     'Tonic',
//     'Dominant Seventh',
//     'Diminished Seventh',
// ];
// const rawInversion = [
//     'Root Position',
//     'First Inversion',
//     'Second Inversion',
//     'Third Inversion',
// ];

const arpeggios = new Pool(
    [
        'Dominant Seventh Root Position',
        'Dominant Seventh First Inversion',
        'Dominant Seventh Second Inversion',
        'Dominant Seventh Third Inversion',
        'Diminished Seventh',
    ],
    [
        'Tonic Root Position',
        'Tonic First Inversion',
        'Tonic Second Inversion',
    ],
    [

    ],
);

const misc = new Pool(
    [

    ],
    [
        'Cadence',
    ],
    [

    ],
);






///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////








export const exercises = [
    [tonics, keys, detailedKeys],
    [scales],
    [chords],
    [arpeggios],
    [misc],
    [{pool: ['']}], // my mastery
];

export const mastery = [
    [
        [],
        [],
        [],
        [],
    ]
];