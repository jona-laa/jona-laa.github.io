const timeLine = gsap.timeline({ defaults: { ease: 'power1.out' } });

timeLine.fromTo('.title', { x: '-100vw' }, { x: '0%', duration: 1, delay: 0.1 });
timeLine.fromTo('.tagline', { x: '100vw' }, { x: '0%', duration: 1, delay: 0.1 }, '-=1');
timeLine.fromTo('.arrow-link', { y: '100vh' }, { y: '0%', duration: 1, delay: 0.1 }, '-=1');
