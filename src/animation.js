import sr from "./ScrollReveal"

export function animateColumn() {
  sr.reveal(".column__volume", {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    mobile: true
  });

  sr.reveal(".column__meta", {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    delay: 400,
    mobile: true
  });

  sr.reveal(".column__content p, .column__content-title", {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    mobile: true
  });

  sr.reveal(".column__content-img img", {
    origin: "left",
    distance: "100px",
    duration: 1000,
    mobile: true
  });

  sr.reveal(".column__content-img .image-info", {
    origin: "right",
    distance: "100px",
    duration: 800,
    delay: 400,
    mobile: true
  });

  sr.reveal(".author", {
    origin: "bottom",
    distance: "100px",
    duration: 1000,
    mobile: true
  });
}

export function animateFeature() {
  sr.reveal(".feature__volume", {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    mobile: true
  })

  sr.reveal('.feature__title-text', {
    origin: 'bottom',
    distance: '100px',
    duration: 1000,
    delay: 400,
    mobile: true
  })

  sr.reveal('.feature__meta-data, .feature__intro, .scroll', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 600,
    mobile: true
  })

  sr.reveal(".feature__content-img", {
    distance: '100px',
    duration: 1000,
    delay: 400,
    mobile: true
  });

  sr.reveal('.feature__content-img:nth-child(odd)', {
    origin: 'left'
  })

  sr.reveal(".feature__content-img:nth-child(even)", {
    origin: "right"
  });
}

export default { animateColumn, animateFeature }