m = document.getElementById("weblife").getContext("2d");

draw = (x, y, c, s) => {
  m.fillStyle = c;
  m.fillRect(x, y, s, s);
};

particles = [];
particle = (x, y, c) => {
  return { x: x, y: y, vx: 0, color: c };
};

random = () => {
  return Math.random() * 900 + 50;
};

create = (number, color) => {
  group = [];
  for (let i = 0; i < number; i++) {
    group.push(particle(random(), random(), color));
    particles.push(group[i]);
  }
};

yellow = create(200, "yellow");

update = () => {
  m.clearRect(0, 0, 1000, 1000);
  draw(0, 0, "black", 1000);
  for (i = 0; i < particles.length; i++) {
    draw(particles[i].x, particles[i].y, particles[i].color, 5);
  }
  requestAnimationFrame(update);
};

update();
