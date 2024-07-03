var tl = gsap.timeline();

tl.from("#nav img, #nav h3, #nav h4, #nav button",{
    y:-100,
    duration:0.9,
    delay:0.6,
    opacity:0,
    stagger:0.3
})
tl.from("#main h1",{
     x:-300,
     opacity:0,
     duration:1,
     stagger:0.3
})
tl.from("#main>img",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.5
})
tl.from("h5",{
    scale:0,
    opacity:0,
    y:100
})
tl.to("h5",{
    y:30,
    repeat:-1,
    yoyo:true,
    duration:0.5
})