// mathematical parameters
let r = 2; // button pressed
let t = 10; // how many times further than c0 should be displayed
let u1 = 1; // initial review interval
let c0 = 30; // number of days cards are added for
// display parameters
let calculator;
const xDisplayFactor = 5;
const yDisplayFactor = 1.1;
// let expressionsOn = false;

// document.getElementById("showExpressionsButton").onclick = () => {
//   expressionsOn = !expressionsOn;
//   rerender();
// }

document.getElementById("c0input").value = "30";

document.getElementById("renderButton").onclick = () => {
  rerender();
}

const rerender = () => {
  calculator.destroy();
  c0 = parseInt(document.getElementById("c0input").value);
  render();
}

const render = () => {
  calculator = Desmos.GraphingCalculator(
    document.getElementById('calculator'), {
      // expressions: expressionsOn,
      expressions: true,
      expressionsCollapsed: true,
      settingsMenu: false,
      keypad: false,
      zoomButtons: false,
      xAxisLabel: 'Day of Review, in days since first card was introduced, D',
      yAxisLabel: 'Number of Flashcard Reviews To Do, N\''
    }
  );

  calculator.setMathBounds({
    left: -3,
    right: c0*xDisplayFactor,
    bottom: -0.3,
    top: Math.log(c0+1)/Math.log(r)*yDisplayFactor
  });

  let pts = new Array(c0*t);
  pts.fill(0);
  
  for (let c = 1; c <= c0; c++) { // for each card
    let un = u1; // interval between reviews
    let Sn = u1+c-1; // initial day a card is reviewed
    for (let n = 1; n <= t; n++) { // for each review
      if (Sn > c0*t) { // outside render distance
        break;
      } // otherwise, if inside render distance,
      pts[Sn] += 1; // add one to frequency
      un = Math.floor(un*r); // get next review interval
      Sn += un; // add review interval to day
    }
  }

  pts.shift(); // the first is the frequency at 0 days, which is useless, just get frequency from 1 to c0*t
  
  // generate expression for this card
  calculator.setExpression({
    id: 'generated',
    type: 'table',
    columns: [
      {
        latex: 'p',
        values: Array.from({length:c0*t},(v,i)=>(i+1).toString()) // 1, 2, 3, ..., c0 * t
      },
      {
        latex: 'q',
        values: pts.map(x => x.toString()) // freq_at_1, freq_at_2, freq_at_3, ..., freq_at_c0*t // note how freq_at_0 was shifted out
      }
    ],
  });

  // first piece
  calculator.setExpression({
    id: 'u',
    latex: 'u\\left(x,c\\right)=\\log_{2}\\left(x+1\\right)\\left\\{1\\le x\\le c\\right\\}'
  });
  calculator.setExpression({
    id: 'ugraphed',
    latex: `\\left[\\left(x,u\\left(x,${c0}\\right)\\right)\\operatorname{for}x=\\left[1,...,${c0}\\right]\\right]`,
    color: Desmos.Colors.BLUE,
    pointOpacity: 0.5,
    pointStyle: Desmos.Styles.OPEN,
    pointSize: 12
    // hidden: true
  });

  // second piece
  calculator.setExpression({
    id: 'v',
    latex: `v\\left(x,c\\right)=\\log_{2}\\left(\\frac{x+1}{x-c+1}\\right)\\left\\{x>c\\right\\}`
  });
  calculator.setExpression({
    id: 'vgraphed',
    latex: `\\left[\\left(x,v\\left(x,${c0}\\right)\\right)\\operatorname{for}x=\\left[${c0},...,${c0*t}\\right]\\right]`,
    color: Desmos.Colors.BLUE,
    pointOpacity: 0.5,
    pointStyle: Desmos.Styles.OPEN,
    pointSize: 12
    // hidden: true
  });

  // regression
  calculator.setExpression({
    id: 'w',
    latex: `w\\left(x\\right)=\\left\\{x\\le${c0}:\\log_{2}\\left(x+1\\right),\\log_{2}\\left(\\frac{x+1}{x-${c0}+1}\\right)\\right\\}`,
    hidden: true
  });
  calculator.setExpression({
    id: 'regression',
    latex: `q\\sim w\\left(p\\right)`,
    color: Desmos.Colors.BLUE,
    hidden: true
  });

  
}

render();