const lN = {
  stops : ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
};
const lL = {
  stops : ['8th', '6th', 'Union Square', '3rd', '1st'],
};
const l6 = {
  stops : ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

const trip = function (line,stationIn,stationOut) {
  let flow = [];
  if (line === 'N'){
    flow = lN.stops;
  }
  if (line === 'L'){
    flow = lL.stops;
  }
  if (line === '6'){
    flow = l6.stops;
  }
  if ( flow.indexOf(stationIn) > flow.indexOf(stationOut) ) {
    flow = flow.reverse()
  }
  const getIn = flow.indexOf(stationIn);
  const getOut = flow.indexOf(stationOut);
  let commute = 0;
  let stations = `You must travel through the following stops on the ${ line } line:`;
  for (let i = (getIn + 1); i < (getOut + 1); i++) {
    commute = commute + 1;
    stations = stations + ' ' + flow[i];
  }
  console.log (stations);
  return commute;
}

const planTrip = function (lineIn, stationIn, lineOut, stationOut) {
  let commute = 0;
  if (lineIn === lineOut){
    commute = trip (lineIn, stationIn, stationOut);
    console.log(`${ commute } stops in total.`)
  } else {
    commute = trip (lineIn, stationIn, 'Union Square');
    console.log(`Change at Union Square and take the ${ lineOut } line.`)
    commute = commute + trip (lineOut, 'Union Square', stationOut);
    console.log(`${ commute } stops in total.`)
  }
}
