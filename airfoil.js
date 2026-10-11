// Interactive airfoil: the slider sets the angle of attack,
// and the page shows the wing, the lift arrow and a small lift chart.

// Simple thin-airfoil model (valid for small angles):
//   lift coefficient = 2 * pi * (angle - zeroLiftAngle), angle in radians
const ZERO_LIFT_ANGLE = -2; // degrees: a curved wing still lifts a bit at 0°
const STALL_ANGLE = 15; // degrees: above this the airflow separates
const STALL_DROP = 0.12; // how fast lift falls per degree after the stall

// Elements on the page
const slider = document.getElementById("alpha-slider");
const wing = document.getElementById("wing");
const liftArrow = document.getElementById("lift-arrow");
const angleValue = document.getElementById("angle-value");
const liftValue = document.getElementById("lift-value");
const chartDot = document.getElementById("chart-dot");
const liftCurve = document.getElementById("lift-curve");
const zeroLine = document.getElementById("zero-line");
const statusOk = document.getElementById("status-ok");
const statusStall = document.getElementById("status-stall");

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

// Lift coefficient for a given angle of attack (in degrees)
function liftCoefficient(angle) {
  if (angle <= STALL_ANGLE) {
    return 2 * Math.PI * degreesToRadians(angle - ZERO_LIFT_ANGLE);
  }
  const liftAtStall = 2 * Math.PI * degreesToRadians(STALL_ANGLE - ZERO_LIFT_ANGLE);
  return liftAtStall - STALL_DROP * (angle - STALL_ANGLE);
}

// Convert chart values to positions inside the chart's SVG box.
// Angle -5..20 goes left to right, lift -0.5..2.2 goes bottom to top.
function chartX(angle) {
  return 36 + ((angle + 5) / 25) * 250;
}

function chartY(lift) {
  return 150 - ((lift + 0.5) / 2.7) * 138;
}

// Draw the full lift curve once, from -5° to 20°
function drawCurve() {
  const points = [];
  for (let angle = -5; angle <= 20; angle += 0.5) {
    points.push(chartX(angle) + "," + chartY(liftCoefficient(angle)));
  }
  liftCurve.setAttribute("points", points.join(" "));

  // Dashed line where lift is zero
  zeroLine.setAttribute("y1", chartY(0));
  zeroLine.setAttribute("y2", chartY(0));
}

// Update everything that depends on the slider
function update() {
  const angle = Number(slider.value);
  const lift = liftCoefficient(angle);

  // Tilt the wing: SVG rotates clockwise, so the nose-up angle is negative
  wing.setAttribute("transform", "rotate(" + -angle + " 300 99)");

  // Lift arrow points up, its length follows the lift coefficient
  liftArrow.setAttribute("y2", 150 - lift * 55);

  // Numbers
  angleValue.textContent = angle.toFixed(1) + "°";
  liftValue.textContent = lift.toFixed(2);

  // Red dot on the chart
  chartDot.setAttribute("cx", chartX(angle));
  chartDot.setAttribute("cy", chartY(lift));

  // Show the stall warning only above the stall angle
  const isStalled = angle > STALL_ANGLE;
  statusOk.hidden = isStalled;
  statusStall.hidden = !isStalled;
}

drawCurve();
update();
slider.addEventListener("input", update);
