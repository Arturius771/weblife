//credit: youtu.be/0Kx4Y9TVMGg

https: m = document.getElementById("weblife").getContext("2d");

draw = (x, y, c, s) => {
  m.fillStyle = c;
  m.fillRect(x, y, s, s);
};

particles = [];
particle = (x, y, c) => {
  return { x: x, y: y, vx: 0, vy: 0, color: c };
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
  return group;
};

yellow = create(500, "yellow");

red = create(500, "red");

rule = (particles1, particles2, g) => {
  for (let i = 0; i < particles1.length; i++) {
    fx = 0;
    fy = 0;
    for (let j = 0; j < particles2.length; j++) {
      a = particles1[i];
      b = particles2[j];
      dx = a.x - b.x;
      dy = a.y - b.y;

      d = Math.sqrt(dx * dx + dy * dy); //pythagorean rule

      if (d > 0 && d < 80) {
        F = (g * 1) / d;
        fx += F * dx;
        fy += F * dy;
      }
    }
    a.vx = (a.vx + fx) * 0.5;
    a.vy = (a.vy + fy) * 0.5;
    a.x += a.vx;
    a.y += a.vy;
    if (a.x <= 0 || a.x >= 1000) {
      a.vx *= -1;
    }
    if (a.y <= 0 || a.y >= 1000) {
      a.vy *= -1;
    }
  }
};

update = () => {
  rule(yellow, yellow, -1);
  rule(red, yellow, 1);
  m.clearRect(0, 0, 1000, 1000);
  draw(0, 0, "black", 1000);
  for (i = 0; i < particles.length; i++) {
    draw(particles[i].x, particles[i].y, particles[i].color, 5);
  }
  requestAnimationFrame(update);
};

update();
